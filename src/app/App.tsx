import { Route } from "react-router-dom";
import View from "./view/View";
import Views from "../data/Views";

const App = () => (
  <>
    {Views.map((view) => (
      <Route exact path={view.route} component={() => <View {...view} />} />
    ))}
  </>
);

export default App;
