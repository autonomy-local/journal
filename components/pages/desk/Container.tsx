import IconPuzzle from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/puzzle.tsx";
import IconDatabase from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/database.tsx";
import IconBooks from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/books.tsx";
import IconWalk from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/walk.tsx";
import IconBallpen from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/ballpen.tsx";
import IconArchive from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/archive.tsx";
import IconBuildingCommunity from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/building-community.tsx";
import IconPigMoney from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/pig-money.tsx";

export default function Container() {
  return (
    <div class="container mx-auto bg-slate-100">
      <div class="desk-tabs">
        <ul class="flex border-b">
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconPuzzle class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Area piece</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconDatabase class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Database</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconBooks class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Books</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconWalk class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">On-Site</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconBallpen class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Editor</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconArchive class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Archive</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconBuildingCommunity class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Community</span>
            </a>
          </li>
          <li class="-mb-px mr-1">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              <IconPigMoney class="w-4 h-4 inline-block align-text-top" />
              <span class="inline-block ml-2">Money</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
