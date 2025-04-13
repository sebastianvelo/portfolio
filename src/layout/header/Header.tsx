import Title from "../../screens/components/utils/text/Title";

export interface HeaderProps {
    header: {
        title: string;
        subtitle: string;
    };
    content: string;
}

const Header = (props: HeaderProps) => (
    <header className="pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-secondary-900 dark:to-primary-900 dark:bg-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
            <Title size="xl" className="mb-4">
                {props.header.title}
            </Title>
            <h2 className="text-2xl md:text-3xl font-medium text-primary-600 dark:text-primary-400 mb-6">
                {props.content}
            </h2>
            <p className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
                {props.header.subtitle}
            </p>
        </div>
    </header>
);

export default Header;