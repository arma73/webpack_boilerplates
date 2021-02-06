import { hot } from "react-hot-loader/root";
import Routes from "_routes/Routes";

import "normalize.css";
import "_theme/main.scss";

const App = () => (
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);

export default hot(App);
