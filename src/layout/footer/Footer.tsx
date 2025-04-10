import ContactSectionProps from '../../data/model/ContactSectionProps';
import ContactIcon from './ContactIcon';

const Footer = (props: ContactSectionProps) => {
  return (
    <footer className="sticky bottom-0 bg-white/70 dark:bg-slate-900/80 py-4 sm:py-6 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0">
            Sebastián Velo
          </p>
          <div className="flex space-x-6">
            {props.items.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label={link.name}
              >
                <ContactIcon key={link.name} {...link} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;