import { Route, Routes } from 'react-router-dom';
import HomeScreen from "../../screens/home/HomeScreen";
import paths from "../../screens/paths";
import { LanguageProps } from "../../types/Language";

interface BodyProps extends LanguageProps { }

const Body = (props: BodyProps) => {
    return (
        <Routes>
            <Route path={paths.home} element={<HomeScreen {...props} />} />
        </Routes>
    );
};

export default Body;
