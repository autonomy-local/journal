import { useSignal } from "@preact/signals";
import DeleteArea from "./delete.tsx";
import UpdateArea from "./update.tsx";

export default function AreaTable() {
  const data = useSignal([
    {
      id: "1",
      name: "Area 1",
      category: "Category 1",
      description: "Description 1",
      actions: "Actions 1",
      status: "Active",
      lastUpdate: "LastUpdate 1",
    },
    {
      id: "2",
      name: "Area 2",
      category: "Category 2",
      description: "Description 2",
      actions: "Actions 2",
      status: "Inactive",
      lastUpdate: "LastUpdate 2",
    },
    {
      id: "3",
      name: "Area 3",
      category: "Category 3",
      description: "Description 3",
      actions: "Actions 3",
      status: "Active",
      lastUpdate: "LastUpdate 3",
    },
    {
      id: "4",
      name: "Area 4",
      category: "Category 4",
      description: "Description 4",
      actions: "Actions 4",
      status: "Inactive",
      lastUpdate: "LastUpdate 4",
    },
    {
      id: "5",
      name: "Area 5",
      category: "Category 5",
      description: "Description 5",
      actions: "Actions 5",
      status: "Active",
      lastUpdate: "LastUpdate 5",
    },
    {
      id: "6",
      name: "佐方地区",
      category: "小学校区",
      description: "廿日市市東部：地域自治組織区域",
      actions: "データ整備 現地調査",
      status: "Active",
      lastUpdate: "2021-04-01",
    },
    {
      id: "7",
      name: "宮島地区",
      category: "小学校区",
      description: "廿日市市西部：地域自治組織区域",
      actions: "データ整備 現地調査",
      status: "Active",
      lastUpdate: "2022-12-01",
    },
    {
      id: "8",
      name: "吉和地区",
      category: "小学校区",
      description: "廿日市市北部：地域自治組織区域",
      actions: "データ整備",
      status: "Active",
      lastUpdate: "2023-10-01",
    },
  ]);
  return (
    <>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Category</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Actions</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">LastUpdate</th>
            <th class="py-2">Update</th>
            <th class="py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.value.map((item) => (
            <tr>
              <td class="px-4 py-2">{item.name}</td>
              <td class="px-4 py-2">{item.category}</td>
              <td class="px-4 py-2">{item.description}</td>
              <td class="px-4 py-2">{item.actions}</td>
              <td class="px-4 py-2">{item.status}</td>
              <td class="px-4 py-2">{item.lastUpdate}</td>
              <td class="py-2">
                <UpdateArea id={item.id} />
              </td>
              <td class="py-2">
                <DeleteArea id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
