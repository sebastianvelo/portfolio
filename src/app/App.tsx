import { Route } from "react-router-dom";
import View from "./view/View";
import Pages from "../widget/Pages";

const App = () => (
  <div className="bg-black min-h-screen overflow-x-hidden">
    {Pages.map((view) => (
      <Route
        exact
        path={view.route}
        component={() => <View {...view} className={view.className} />}
      />
    ))}
  </div>
);

export default App;
