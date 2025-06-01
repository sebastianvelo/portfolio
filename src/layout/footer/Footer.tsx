import ContactSectionProps from '../../model/ContactSectionProps';
import SocialIcon from './SocialIcon';

const Footer = (props: ContactSectionProps) => {
  return (
    <footer className="w-full fixed border-t border-secondary-500/20 bottom-0 bg-primary-100/80 dark:bg-secondary-950/80 backdrop-blur-xl text-secondary-900 dark:text-secondary-100 py-4 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center">
          <a className="font-bold text-sm" href="https://sebastian-velo.web.app/">
            Made with 🧉, ☕️, and ❤️
          </a>
          <div className="flex space-x-6 items-center">
            {props.items.map((link) => (
              <SocialIcon key={link.name} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
