import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeScreen from "../../screens/home/HomeScreen";
import paths from "../../screens/paths";
import ProjectsScreen from '../../screens/projects/ProjectsScreen';
import { LanguageProps } from "../../types/Language";
import ExperiencesScreen from '../../screens/experiences/ExperiencesScreen';
import EducationScreen from '../../screens/education/EducationScreen';

interface BodyProps extends LanguageProps { }

const Body = (props: BodyProps) => {
    return (
        <Router>
            <Routes>
                <Route path={paths.home} element={<HomeScreen {...props} />} />
                <Route path={paths.projects} element={<ProjectsScreen {...props} />} />
                <Route path={paths.jobs} element={<ExperiencesScreen {...props} />} />
                <Route path={paths.eduations} element={<EducationScreen {...props} />} />
            </Routes>
        </Router>
    );
};

export default Body;
