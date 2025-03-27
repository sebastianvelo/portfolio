import { ReactNode } from "react";
import LineSeparator from "../svg/LineSeparator";

interface SectionProps {
    children: ReactNode;
}

const Section = (props: SectionProps) => {
    return (
        <>
            <section className="space-y-8 px-5 2xl:px-14 2xl:self-center 2xl:w-3/4">
                {props.children}
            </section>
            <LineSeparator />
        </>
    );
};

export default Section;