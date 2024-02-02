import IconFile from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/file.tsx";
import {
  getFileHandle,
  isFileHandle,
  writeFile,
} from "../utils/file-reader.ts";
export default function RegisterFile() {
  const handleOnClick = async () => {
    const fileHandle = await getFileHandle();
    if (!isFileHandle(fileHandle)) {
      throw new Error("FileHandle is not valid");
    }
    const error = writeFile(fileHandle, "test");
    if (error) {
      throw new Error("Error writing file" + error);
    }
  };
  return (
    <div class="flex justify-end px-2">
      <button
        onClick={handleOnClick}
        type="button"
        class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <IconFile />
        Register Your Own Files
      </button>
    </div>
  );
}
