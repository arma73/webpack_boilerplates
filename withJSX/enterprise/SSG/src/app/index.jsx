import ReactDOM from "react-dom";
import isClient from "_utils/isClient";

import App from "./App";

const render = __PROD__ ? ReactDOM.hydrate : ReactDOM.render;

if (isClient) {
    render(<App />, document.querySelector("#app"));
}
