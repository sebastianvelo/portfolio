import ContactSectionProps, { ContactItemProps } from "../../../../data/model/ContactSectionProps";
import ContactItem from "./ContactItem";

const ContactSection = (props: ContactSectionProps) => {
  return (
    <section className="space-y-8 px-4 font-mono bg-slate-100/70 backdrop-blur-md">
      <h1 className="text-2xl font-bold font-mono">{/*props.title*/}</h1>
      <div className="flex gap-x-2 justify-between items-center grid grid-cols-3 justify-items-center w-full">
        {props.items.map((skill: ContactItemProps) => (<ContactItem key={skill.name} {...skill} />))}
      </div>
    </section>
  );
};

export default ContactSection;
