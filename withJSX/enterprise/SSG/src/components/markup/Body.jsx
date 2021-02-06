import { Route } from "react-router-dom";
import SiteRoutes from "_routes/Site.routes";

const Body = () => (
    <body>
        <div id="app">
            <Route
                path="/"
                render={props => (
                    <SiteRoutes
                        {...props}
                        import={path => require(`../../content/${path}`)} 
                    />
                )}
            />
        </div>
    </body>
);

export default Body;
