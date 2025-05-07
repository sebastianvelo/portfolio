import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    children: ReactNode;
}

const Section = (props: SectionProps) => {
    return (
        <section id={props.id} className="py-8 px-4 md:px-8 max-w-6xl mx-auto">
            {props.children}
        </section>
    );
};

export default Section;