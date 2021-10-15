import { Route, Switch } from "react-router-dom";

import Allmeetups from "./pages/allmeetup";
import Newmeetups from "./pages/Newmeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {/*default exact={true}*/}
          <Allmeetups />
        </Route>
        <Route path="/new-meetups">
          <Newmeetups />
        </Route>
        <Route path="/favorite">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
