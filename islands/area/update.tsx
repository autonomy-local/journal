import { useSignal } from "@preact/signals";

type UpdateAreaProps = {
  id: string;
};
export default function UpdateArea({ id }: UpdateAreaProps) {
  const targetID = useSignal<string>(id);
  return (
    <>
      <div class="flex flex-col">
        <div class="flex flex-row-reverse">
          <button
            class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800"
            onClick={() => {
              console.log(targetID.value);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}
