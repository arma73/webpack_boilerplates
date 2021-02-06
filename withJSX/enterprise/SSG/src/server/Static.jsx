import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Markup from "_components/markup";

const Static = locals => {
    const renderedHtml = ReactDOMServer.renderToString(
        <StaticRouter location={locals.path} context={{}}>
            <Markup locals={locals} />
        </StaticRouter>
    );

    return "<!DOCTYPE html>" + renderedHtml;
};

export default Static;
