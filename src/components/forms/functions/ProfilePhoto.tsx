"use client";

import { X, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef, ChangeEvent } from "react";

type ProfilePhotoProps = {
  onChange?: (value: string | null) => void;
  value?: string | null;
  name?: string;
};

export default function ProfilePhoto(props: ProfilePhotoProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    props.value || null
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      // ファイルの読込が終わったとき呼ばれる関数
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setSelectedImage(base64Image);
        if (props.onChange) {
          props.onChange(base64Image);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (props.onChange) {
      props.onChange(null);
    }
  };

  return (
    <>
    {/* 写真がアップロードされていれば、その写真のプレビューと削除ボタンを表示 */}
      {selectedImage ? (
        <div className="relative flex justify-center">
          <Image
            src={selectedImage}
            alt="Photo Preview"
            width={24}
            height={24}
            style={{
              width: "80%",
              height: "auto",
            }}
            layout="intrinsic"
            className="object-contain rounded-lg"
          />
          <button
            onClick={removePhoto}
            className="absolute top-1 right-11 p-1 bg-black rounded-full text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        // 写真がアップロードされていなければ、写真選択UIを表示
        <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg">
          <input
            ref={fileInputRef}
            type="file"
            // 画像ファイルのみに限定して選択できるように
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id={props.name}
          />
          <label
            htmlFor={props.name}
            className="flex flex-col items-center"
          >
            <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
            <span className="text-sm text-gray-500">タップして写真を選択</span>
          </label>
        </div>
      )}
    </>
  );
}
