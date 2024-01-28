import AreaTable from "../../../../islands/area/table.tsx";
export default function AreaList() {
  return (
    <>
      <div class="relatice overflow-x-auto">
        <div class="bg-white dark:bg-gray-800 shadow w-full py-4 px-4">
          <div class="flex justify-between mb-2">
            <div class="flex space-x-2">
              <p class="underline">Area List</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 pt-0.5">
                Register new area
              </p>
            </div>
            <div class="flex space-x-2">
              <button class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                Add New Area
              </button>
            </div>
          </div>
          <AreaTable />
        </div>
      </div>
    </>
  );
}
