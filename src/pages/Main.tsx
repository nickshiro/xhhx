import React from "react";

import Project from "@widgets/Project";
import Author from "@shared/ui/Author";

export const Main: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Project>
                <Project.Header>Sharetube</Project.Header>
                <Project.Subtitle>Extension for browser</Project.Subtitle>
                <Project.Picture src="/sharetube.png" />
                <Project.Paragraph>
                    A powerful Chrome extension that allows you to watch YouTube
                    videos with your friends in perfect sync and real-time!
                    Enjoy seamless group viewing, synchronized playback, and a
                    shared experience no matter where you are
                </Project.Paragraph>
                <div className="flex mt-3 gap-2">
                    <Author nick="Nick" avatar="/nick.jpg" />
                    <Author nick="Skewb1k" avatar="/skewb1k.jpg" />
                </div>
            </Project>
        </div>
    );
};
