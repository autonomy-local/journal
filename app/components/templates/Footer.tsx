import IconNews from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/news.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";

export default function Footer() {
  const menu = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", path: "/docs/getting-started" },
        { name: "Guide", path: "/docs/guide" },
        { name: "API Reference", path: "/docs/api-reference" },
        { name: "Examples", path: "/docs/examples" },
        { name: "Showcase", path: "/docs/showcase" },
        { name: "Pricing", path: "/docs/pricing" },
        { name: "FAQ", path: "/docs/faq" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "GitHub", path: "" },
        { name: "Discord", path: "" },
        { name: "Twitter", path: "" },
        { name: "Blog", path: "" },
      ],
    },
  ];

  return (
    <footer class="bg-white flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <IconNews class="inline-block" aria-hidden="true" />
        <span class="ml-2 text-xl font-bold text-gray-800">Journal</span>
        <p class="text-gray-500">
          Journal is a modern, fast, and opinionated local journal platform.
        </p>
      </div>
      {menu.map((item) => (
        <div class="mb-4">
          <div class="font-bold text-gray-800 mb-2">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li>
                <a href={child.path} class="text-gray-500 hover:text-blue-500">
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © 2024 Autonomy <br />
          All rights reserved.
        </div>
        <a
          href="https://github.com/autonomy-local/journal"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          <BrandGithub aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
