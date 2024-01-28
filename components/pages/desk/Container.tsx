import IconPuzzle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/puzzle.tsx";
import IconDatabase from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/database.tsx";
import IconBooks from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/books.tsx";
import IconWalk from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/walk.tsx";
import IconBallpen from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/ballpen.tsx";
import IconArchive from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/archive.tsx";
import IconBuildingCommunity from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/building-community.tsx";
import IconPigMoney from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/pig-money.tsx";
import IconHelp from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/help.tsx";

type Props = {
  active: string;
};

export default function Container({ active }: Props) {
  const tabs = [
    { name: "Area piece", icon: IconPuzzle, href: "/demo/desk/area" },
    { name: "Database", icon: IconDatabase, href: "/demo/desk/database" },
    { name: "Books", icon: IconBooks, href: "/demo/desk/books" },
    { name: "On-Site", icon: IconWalk, href: "/demo/desk/on-site" },
    { name: "Editor", icon: IconBallpen, href: "/demo/desk/editor" },
    { name: "Archive", icon: IconArchive, href: "/demo/desk/archive" },
    {
      name: "Community",
      icon: IconBuildingCommunity,
      href: "/demo/desk/community",
    },
    { name: "Money", icon: IconPigMoney, href: "/demo/desk/money" },
  ];

  return (
    <div class="container mx-auto bg-slate-100">
      <div class="desk-tabs">
        <ul class="flex justify-between border-b">
          {tabs.map((tab) => (
            <li class="-mb-px mr-1">
              <a
                class={"inline-block border-t border-r border-l rounded-t py-2 px-4 text-blue-700 font-semibold" +
                  (tab.href === active
                    ? "border-8 border-blue-800 -mb-px mr-1"
                    : "border-l")}
                href={tab.href}
              >
                <tab.icon class="w-4 h-4 inline-block align-text-top" />
                <span class="inline-block ml-2">{tab.name}</span>
              </a>
            </li>
          ))}
          <li class="mr-1">
            <a
              class="inline-block border-t border-r border-l rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="/help"
            >
              <IconHelp class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Help</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
