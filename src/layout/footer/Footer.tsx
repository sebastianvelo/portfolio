import ContactSectionProps from '../../data/model/ContactSectionProps';
import ContactItem from '../../screens/components/common/contact/ContactItem';

const Footer = (props: ContactSectionProps) => {
  return (
    <footer className="bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-4">
        <div className="flex flex-row items-end justify-end font-mono">
          <span className="text-lg sm:text-center hidden">
            Sebastián Velo
          </span>
          <div className="flex flex-col items-center xl:items-end xl:justify-end xl:space-x-4">
            <span className="text-lg sm:text-center">
              {props.message}
            </span>
            <ul className="text-black space-x-6 flex">
              {props.items.map((item) => (
                <li key={item.name}>
                  <ContactItem key={item.name} {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;