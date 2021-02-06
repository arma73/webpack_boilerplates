import { getPageTitle } from "_utils/getPageTitle.js";
import { enforceTrailingSlash } from "_utils/enforce";

const Head = ({ locals }) => {
    let { assets } = locals.webpackStats.compilation;
    let title = getPageTitle(locals.content, locals.path);
    let description = "webpack templates";

    return (
        <head>
            <meta charset="utf-8" />
            <meta name="theme-color" content="#3d1163" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content="webpack_ssg" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" name="description" content={description} />
            {/* <meta property="og:image" content={ `https://arma73.github.io${OgImage}` } /> */}
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:site" content="@arma73" />
            <meta property="twitter:creator" content="@arma73" />
            <meta property="twitter:domain" content="https://github.com/arma73" />
            {/* <link rel="icon" type="image/x-icon" href={Favicon} /> */}
            {Object.keys(assets).filter(asset => /\.css$/.test(asset)).map(path => (
                <link key={path} rel="stylesheet" href={`/${path}`} />
            ))}
            <link rel="manifest" href="/manifest.json" />
            <link rel="canonical" href={`https://github.com/arma73${enforceTrailingSlash(locals.path)}`} />
            <meta name="mobile-web-app-capable" content="yes" />
            {/* <link rel="icon" sizes="192x192" href="/icon_192x192.png" /> */}
            {/* <link rel="icon" sizes="512x512" href="/icon_512x512.png" /> */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content="webpack_ssg" />
            {/* <link rel="apple-touch-icon" sizes="180x180" href="/icon_180x180.png" /> */}
            {/* <link rel="mask-icon" href={Logo} color="#fff" /> */}
            {/* <meta name="msapplication-TileImage" content="/icon_150x150.png" /> */}
            {/* <meta name="msapplication-TileColor" content="#fff" /> */}
        </head>
    );
};
export default Head;
