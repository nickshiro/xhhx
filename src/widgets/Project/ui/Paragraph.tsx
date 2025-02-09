import React from "react";

export interface BodyProps {
    children: string;
}

export const Paragraph: React.FC<BodyProps> = ({ children }) => {
    return (
        <p className="font-inter font-normal text-xl leading-6 mt-4 text-primary">
            {children}
        </p>
    );
};
