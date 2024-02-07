import { FileData } from "./file-reader.ts";
import { getFileHandle, readFile } from "./file-reader.ts";

export const readJsonFile = async (): Promise<FileData | Error> => {
  const fileHandle = await getFileHandle();
  if (fileHandle instanceof Error) {
    return fileHandle;
  }
  const fileData = await readFile(fileHandle, { type: "text" });
  if (fileData instanceof Error) {
    return fileData;
  }
  return fileData;
};

export const jsonParser = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return new Error(error.message);
  }
};
