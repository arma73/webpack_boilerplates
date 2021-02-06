import { useState, useEffect } from "react";
import Markdown from "_components/markdown";

const Content = ({
    content,
    title
}) => {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        const isDynamicContent = content instanceof Promise;
        const contentValue = isDynamicContent
            ? <div> Loading... </div>
            : content.default || content;
        setPageContent(contentValue);
    }, [content]);

    useEffect(() => {
        if (content instanceof Promise) {
            content
                .then(module => {
                    setPageContent(module.default || module);
                })
                .catch(() => {
                    setPageContent("Error loading content.");
                });
        }
    }, [content]);

    return (
        <main className="content">
            <Markdown
                title={title}
                pageContent={pageContent}
            />
        </main>
    );
};

export default Content;
