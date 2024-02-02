/*
ファイルシステムAPIを利用したファイル関連のユーティリティ
https://developer.mozilla.org/ja/docs/Web/API/File_System_API
Can I use:https://caniuse.com/native-filesystem-api
TypeScript Type Definition:https://www.npmjs.com/package/@types/wicg-file-system-access
If you want to use the file system API, you need to use the `wicg-file-system-access` package.
This package is not included in the standard library, so you need to install it separately.
Types refer to the following URL:https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/wicg-file-system-access/ts5.0/index.d.ts
*/
export const getFileHandle = async (): Promise<
  FileSystemFileHandle | Error
> => {
  try {
    const option: OpenFilePickerOptions = {
      types: [
        {
          description: "Text Files",
          accept: {
            "text/plain": [".txt"],
          },
        },
      ],
    };
    const fileHandle = await showOpenFilePicker({ multiple: false, ...option });
    if (fileHandle[0]) {
      return new Error("there is no fileHandle.");
    }
    return fileHandle[0];
  } catch (error) {
    return new Error(error.message);
  }
};

export const writeFile = async (
  fileHandle: FileSystemFileHandle,
  contents: string,
): Promise<null | Error> => {
  if (!fileHandle) return new Error("fileHandle is not found.");
  try {
    const writable = await fileHandle.createWritable();
    await writable.write(contents);
    await writable.close();
    return null;
  } catch (error) {
    return new Error(error.message);
  }
};

export const createNewFile = async (
  newFileName: string,
  contents: string,
): Promise<null | Error> => {
  try {
    const dirHandle = await showDirectoryPicker();
    const fileHandle = await dirHandle.getFileHandle(newFileName, {
      create: true,
    });
    return await writeFile(fileHandle, contents);
  } catch (error) {
    return new Error(error.message);
  }
};

export const readFile = async (
  fileHandle: FileSystemFileHandle,
): Promise<FileData | Error> => {
  try {
    const file: File = await fileHandle.getFile();
    const fileDetail: FileDetail = {
      name: file.name,
      type: file.type,
      lastModified: file.lastModified,
      size: file.size,
      relativePath: fileHandle.name,
    };
    const contents = await file.text();
    return { fileDetail, contents };
  } catch (error) {
    return new Error(error.message);
  }
};

export type FileDetail = {
  name: string;
  type: string;
  lastModified: number;
  size: number;
  relativePath: string;
};

export type FileData = {
  fileDetail: FileDetail;
  contents: string;
};

export function isFileSystemFileHandle(
  fileHandle: FileSystemFileHandle | Error,
): fileHandle is FileSystemFileHandle {
  // Errorオブジェクトにkindプロパティがないため、kindプロパティがあるかどうかで判定
  // ref: https://developer.mozilla.org/ja/docs/Web/API/FileSystemHandle/kind
  return (fileHandle as FileSystemFileHandle).kind !== undefined;
}
