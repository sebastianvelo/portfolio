import Title from "../../screens/components/utils/text/Title";

export interface HeaderProps {
    header: {
        title: string;
        subtitle: string;
    };
    content: string;
}

const Header = (props: HeaderProps) => (
    <header className="pt-24 pb-12 sm:pt-24 sm:pb-16 px-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-900 dark:to-blue-900 dark:bg-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
            <Title size="xl" className="mb-4">
                {props.header.title}
            </Title>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6">
                {props.content}
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                {props.header.subtitle}
            </p>
        </div>
    </header>
);

export default Header;