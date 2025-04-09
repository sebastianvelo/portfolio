import { ReactNode } from "react";
import LineSeparator from "../svg/LineSeparator";

interface SectionProps {
    id?: string;
    children: ReactNode;
}

const Section = (props: SectionProps) => {
    return (
        <>
            <section id={props.id} className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
                {props.children}
            </section>
            <LineSeparator />
        </>
    );
};

export default Section;