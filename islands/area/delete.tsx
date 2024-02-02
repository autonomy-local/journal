import { useSignal } from "@preact/signals";

type DeleteAreaProps = {
  id: string;
};
export default function DeleteArea({ id }: DeleteAreaProps) {
  const targetID = useSignal<string>(id);
  return (
    <>
      <div class="flex flex-col">
        <div class="flex flex-row-reverse">
          <button
            class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800"
            onClick={() => {
              console.log(targetID.value);
              alert("Delete");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
