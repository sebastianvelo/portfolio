import { Route } from "react-router-dom";
import View from "./components/view/View";
import Views from "./data/Views";

const App = () => (
  <div className="lg:overflow-y-hidden">
    {Views.map((view) => (
      <Route exact path={view.route} component={() => <View {...view} />} />
    ))}
  </div>
);

export default App;
