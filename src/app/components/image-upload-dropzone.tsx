"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <>
      <UploadDropzone
        className="custom__upload--button"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageUrl(res[0].ufsUrl);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? (
        <Image
          className="upload__container--image"
          src={imageUrl}
          alt="Uploaded image"
          fill={true}
        />
      ) : null}
    </>
  );
};

export default ImageUpload;
