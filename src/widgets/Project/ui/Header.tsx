import React from "react";

export interface HeaderProps {
    children: string;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <h2
            className="font-inter font-bold text-4xl text-primary leading-12"
            id={children}
        >
            {children}
        </h2>
    );
};
