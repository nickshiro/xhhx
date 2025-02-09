import { Header } from "./Header";
import { Subtitle } from "./Subtitle";
import { Paragraph } from "./Paragraph";
import { Picture } from "./Picture";

interface ProjectComponentProps {
    children: React.ReactNode;
}

type Project = React.FC<ProjectComponentProps> & {
    Header: typeof Header;
    Subtitle: typeof Subtitle;
    Paragraph: typeof Paragraph;
    Picture: typeof Picture;
};

const Project: Project = ({ children }) => {
    return (
        <div className="max-w-[716px] flex flex-col mb-10 px-5 box-border">
            {children}
        </div>
    );
};

Project.Header = Header;
Project.Subtitle = Subtitle;
Project.Paragraph = Paragraph;
Project.Picture = Picture;

export { Project };
