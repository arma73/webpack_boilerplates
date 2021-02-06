import { Switch, Route, Redirect } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "_settings/path.routes";
import ContentRoutes from "./Content.routes";

const SiteRoutes = props => (
    <Switch>
        <Route
            exact
            strict
            path="/:url*"
            render={({ location }) => <Redirect to={`${location.pathname}/`} />}
        />
        <Route exact path={MAIN_PAGE_ROUTE} render={() => <h1> Hello World! </h1>} />
        <Route render={() => <ContentRoutes {...props} />} />
    </Switch>
);

export default SiteRoutes;
