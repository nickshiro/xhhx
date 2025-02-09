import React from "react";

interface AuthorProps {
    avatar: string;
    nick: string;
}

const Author: React.FC<AuthorProps> = ({ avatar, nick }) => {
    return (
        <div className="flex items-center py-1 px-1 rounded-full bg-background">
            <div
                className="bg-center bg-cover bg-no-repeat rounded-full w-7 h-7"
                style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <p className="font-primary font-normal text-primary text-lg ml-2 mr-2">
                {nick}
            </p>
        </div>
    );
};

export { Author };
