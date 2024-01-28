import IconNews from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/news.tsx";

export default function Header() {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];
  return (
    <header>
      <nav class="bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4">
        <div class="flex items-center flex-1">
          <IconNews class="w-8 h-8 text-blue-500" />
          <span class="ml-2 text-xl font-bold text-gray-800">Journal</span>
        </div>
        <div class="flex flex-1 justify-center items-center">
          <input
            type="text"
            class="border border-gray-300 rounded-md px-4 py-2 w-full"
            placeholder="Search"
          />
        </div>
        <div class="flex flex-1 justify-end items-center gap-4">
          {menus.map((menu) => (
            <a
              href={menu.path}
              class="text-gray-800 hover:text-blue-500 font-semibold"
            >
              {menu.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
