import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  projectData: any;
  setFileListUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  pendingUploads: { file: File; relativePath: string }[];
  setPendingUploads: React.Dispatch<
    React.SetStateAction<{ file: File; relativePath: string }[]>
  >;
}

const FileUpload = ({
  fileInputRef,
  setIsLoading,
  pendingUploads,
  setPendingUploads,
  setFileListUpdated,
}: FileUploadProps) => {
  const [selectedFileNames, setSelectedFileNames] = useState<
    string[]
  >([]);

  const handleFileDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const items = Array.from(e.dataTransfer.items);
    const files: { file: File; relativePath: string }[] = [];

    const processEntry = (entry: FileSystemEntry, path: string) => {
      return new Promise<void>((resolve) => {
        if (entry.isFile) {
          const fileEntry = entry as FileSystemFileEntry;
          fileEntry.file((file) => {
            const relativePath = path
              ? `${path}${file.name}`
              : file.name;
            files.push({ file, relativePath });
            resolve();
          });
        } else if (entry.isDirectory) {
          const dirEntry = entry as FileSystemDirectoryEntry;
          const dirPath = path
            ? `${path}${dirEntry.name}/`
            : `${dirEntry.name}/`;

          const reader = dirEntry.createReader();
          reader.readEntries((entries) => {
            const promises = entries.map((subEntry) =>
              processEntry(subEntry, dirPath)
            );
            Promise.all(promises).then(() => resolve());
          });
        }
      });
    };

    const promises = items.map((item) => {
      const entry = item.webkitGetAsEntry();
      if (entry) {
        return processEntry(entry, "");
      }
    });

    await Promise.all(promises);

    setPendingUploads(files);
    setSelectedFileNames(files.map((f) => f.relativePath));
  };

  const handleFileSelect = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    if (!files.length) return;

    const fileArray = files.map((file) => ({
      file,
      relativePath: file.webkitRelativePath || file.name,
    }));

    setPendingUploads(fileArray);
    setSelectedFileNames(fileArray.map((f) => f.relativePath));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <div className="text-center">
          <FaPhotoVideo
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-gray-300"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            Upload
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-primaryHover focus-within:outline-none focus-within:ring-primary hover:text-primary"
            >
              <span>&nbsp;files&nbsp;</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
              />
            </label>
            <span>or</span>
            <label
              htmlFor="folder-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-primaryHover focus-within:outline-none focus-within:ring-primary hover:text-primary"
            >
              <span>&nbsp;folders</span>
              <input
                id="folder-upload"
                name="folder-upload"
                type="file"
                className="sr-only"
                ref={fileInputRef}
                onChange={handleFileSelect}
                multiple
                webkitdirectory="true"
                directory="true"
              />
            </label>
          </div>
        </div>
      </div>

      {selectedFileNames.length > 0 && (
        <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
          {selectedFileNames.map((file, idx) => (
            <li key={idx}>{file}</li>
          ))}
        </ul>
      )}

      {/* Optional: Display Progress Results */}
    </>
  );
};

export default FileUpload;
