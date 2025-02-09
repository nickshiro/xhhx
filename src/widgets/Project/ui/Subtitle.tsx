import React from "react";

export interface SubtitleProps {
    children: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return (
        <p className="font-inter font-medium mt-1 text-2xl text-primary leading-8">
            {children}
        </p>
    );
};
