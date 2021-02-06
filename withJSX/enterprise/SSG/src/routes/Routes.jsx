import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SiteRoutes from "./Site.routes";

const Routes = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            // This fires when the service worker controlling this page
            // changes, eg a new worker has skipped waiting and become
            // the new active worker.
            navigator.serviceWorker.addEventListener("controllerchange", () => {
                window.location.reload();
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <Route
                path="/"
                render={props => (
                    <SiteRoutes
                        {...props}
                        import={path => import(`../content/${path}`)}
                    />
                )}
            />
        </BrowserRouter>
    );
};
export default Routes;
