import { Switch, Route } from "react-router-dom";
import withContent from "_containers/hoc/withContent";
import Container from "_components/container";
import Content from "_components/content";

const ContentRoute = ({
    pages,
    "import": importContent
}) => {
    const mapPages = () => pages.map(page => {
        let path = page.path.replace("src/content/", "");
        let content = importContent(path);

        return (
            <Route
                key={page.url}
                exact
                path={page.url}
            >
                <Content
                    {...page}
                    content={content}
                />
            </Route>
        );
    });

    return (
        <Container>
            <Switch>
                {mapPages()}
                <Route path="**">
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </Container>
    );
};

export default withContent(ContentRoute);
