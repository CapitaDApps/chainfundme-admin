"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckedState } from "@radix-ui/react-checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoFilterOutline } from "react-icons/io5";
import { useOustsideClick } from "../hooks/useOutsideClick";
import { Label } from "../ui/label";

export default function DropdownFilter() {
  const { isOpen, setIsOpen, ref } = useOustsideClick();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleQuerySave = (query: string, checked: CheckedState) => {
    const params = new URLSearchParams(searchParams.toString());
    if (checked == true) {
      params.set(query, "true");
    } else {
      params.delete(query);
    }

    router.push(`${pathname}?${params}`);
  };
  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border-none"
      >
        <div className="flex items-center gap-1 cursor-pointer text-white text-xs">
          <IoFilterOutline />
          <p>Filters</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          ref={ref}
          className="mr-2 mt-2 shadow-sm shadow-zinc-950 bg-primary-bg w-[180px] border-none flex flex-col gap-1 p-6 py-4 rounded-none"
        >
          <DropdownMenuLabel className="text-sm text-secondary-text font-normal ">
            SORT BY
          </DropdownMenuLabel>
          <div className="space-y-2">
            <DropdownMenuItem className="flex items-center text-primary-text text-sm  hover:bg-transparent cursor-pointe">
              <Checkbox
                id="most_recent"
                checked={Boolean(searchParams.get("most_recent"))}
                onCheckedChange={(checked) =>
                  handleQuerySave("most_recent", checked)
                }
              />
              <Label
                htmlFor="most_recent"
                className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
              >
                Most Recent
              </Label>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center text-primary-text text-sm  hover:bg-transparent cursor-pointe">
              <Checkbox
                id="most_funded"
                checked={Boolean(searchParams.get("most_funded"))}
                onCheckedChange={(checked) =>
                  handleQuerySave("most_funded", checked)
                }
              />
              <Label
                htmlFor="most_funded"
                className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed cursor-pointer peer-disabled:opacity-70"
              >
                Most Funded
              </Label>
            </DropdownMenuItem>
          </div>
          {/* <Button
            onClick={() => setIsOpen(false)}
            className="bg-primary-text hover:bg-white rounded-[8px] text-primary-bg text-sm font-normal mt-3"
          >
            Save
          </Button> */}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
