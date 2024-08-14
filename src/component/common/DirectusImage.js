import React, { useEffect, useState } from "react";
import { useDirectus } from "@/provider/DirectusProvider";
import { readAssetBlob } from "@directus/sdk";

const DirectusImage = ({ fileId, width, height, altText, quality="100", format="png" }) => {
  const [imageUrl, setImageUrl] = useState("");
  const directus = useDirectus();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const rawResult = await directus.request(readAssetBlob(fileId, {
          width: width,
          height: height,
          quality: quality,
          format: format
        }));
        const blobUrl = URL.createObjectURL(rawResult);
        setImageUrl(blobUrl);
      } catch (error) {
        console.error("[ERROR]Error fetching image:", error);
      }
    };

    if (fileId) {
      fetchImage();
    }
  }, [fileId, width, height, quality, format, directus]);

  if (!imageUrl) {
    return <div>Loading...</div>;
  }

  return (
    <img src={imageUrl} alt={altText} />
  );
};

export default DirectusImage;