import React from "react";

export interface PictureProps {
    src: string;
    alt?: string;
}

export const Picture: React.FC<PictureProps> = ({ src, alt = "project" }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-full rounded-xl select-none mt-4"
        />
    );
};
