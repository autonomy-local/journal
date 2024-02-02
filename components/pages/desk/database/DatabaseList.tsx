import IconDatabase from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/database.tsx";
import IconCloud from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/cloud.tsx";
import RegisterFile from "../../../../islands/database/file/register-file.tsx";

export default function DatabaseList() {
  return (
    <>
      <div class="relative overflow-x-auto">
        <div class="bg-white dark:bg-gray-800 shadow w-full py-4 px-4">
          <div class="flex items-center mb-2">
            <div class="flex flex-1">
              <p class="underline">Database List</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 pt-0.5 px-4">
                Register new database
              </p>
            </div>
            <div class="flex justify-end px-2">
              <button
                type="button"
                class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <IconDatabase />
                Register Your Own Local Database
              </button>
            </div>
            <RegisterFile />
            <div class="flex justify-end px-2">
              <button
                type="button"
                class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <IconCloud />
                Register Your Own Remote Database
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
