import { Route, Switch } from "react-router";
import AllProjects from "../Pages/AllProjects";
import Home from "../Pages/Home";
import KnowMe from "../Pages/KnowMe";
import PageNotFound from "../Pages/PageNotFound";

const Routes = () => {
    return(
       <>
          <Switch>
              <Route exact path={'/'}>
                  <Home/>
              </Route>
              <Route exact path={'/about'}>
                  <KnowMe/>
              </Route>
              <Route exact path={'/projects'}>
                  <AllProjects/>
              </Route>
              <Route>
                  <PageNotFound/>
              </Route>
          </Switch>
       </>
    )
}

export default Routes;