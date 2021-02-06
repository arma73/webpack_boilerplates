import { useLocation } from "react-router-dom";
import { extractSections, extractCurrentSection, extractPages, extractArticles } from "_utils/extract";
import { _strip } from "_utils/_strip";
import content from "_settings/_content.json";

const withContent = WrappedComponent =>
    function ProvideContent(props) {
        const location = useLocation();
        const sections = extractSections(content);
        const currentSection = extractCurrentSection(sections, location.pathname);
        const pages = extractPages(content);
        const sidebarPages = _strip(
            currentSection
                ? currentSection.children
                : content.children.filter(
                    item => item.type !== "directory" && item.url !== "/"
                )
        );
        const listArticles = extractArticles(sidebarPages);

        return (
            <WrappedComponent
                {...props}
                sections={sections}
                currentSection={currentSection}
                pages={pages}
                location={location}
                sidebarPages={sidebarPages}
                listArticles={listArticles}
            />
        );
    };

export default withContent;
