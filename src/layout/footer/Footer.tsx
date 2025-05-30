import ContactSectionProps from '../../model/ContactSectionProps';
import ContactIcon from './ContactIcon';

const Footer = (props: ContactSectionProps) => {
  return (
    <footer className="sticky bottom-0 bg-primary-100/80 dark:bg-secondary-950/80 backdrop-blur-xl py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center">
          <a className="font-bold mb-4 md:mb-0 text-primary-900 dark:text-primary-100" href="https://sebastian-velo.web.app/">Made with 🧉, ☕️, and ❤️</a>
          <div className="flex space-x-6 items-center">
            {props.items.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
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