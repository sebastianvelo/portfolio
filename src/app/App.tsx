import { Route } from "react-router-dom";
import View from "./view/View";
import Views from "../widget/Views";

const App = () => (
  <div className="bg-black min-h-screen">
    {Views.map((view) => (
      <Route
        exact
        path={view.route}
        component={() => <View {...view} className={view.className} />}
      />
    ))}
  </div>
);

export default App;
