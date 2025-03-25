import { ReactNode } from "react";
import LineSeparator from "../svg/LineSeparator";

interface SectionProps {
    children: ReactNode;
}

const Section = (props: SectionProps) => {
    return (
        <>
            <section className="space-y-8 px-4 md:self-center md:w-2/3">
                {props.children}
            </section>
            <LineSeparator />
        </>
    );
};

export default Section;