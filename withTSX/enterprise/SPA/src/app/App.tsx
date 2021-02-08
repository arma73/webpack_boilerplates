import React, { FC, StrictMode } from "react";
import { hot } from "react-hot-loader/root";

import "normalize.css";

const App: FC = () => (
    <StrictMode>
        <h1>Hello</h1>
    </StrictMode>
);

export default hot(App);
