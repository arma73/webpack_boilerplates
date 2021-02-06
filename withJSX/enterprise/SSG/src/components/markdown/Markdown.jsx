import { useState, useEffect } from "react";

const Markdown = ({ children, title, pageContent }) => {
    const [render, setRender] = useState(null);

    useEffect(() => {
        const renderElement = (
            <div
                dangerouslySetInnerHTML={{
                    "__html": pageContent,
                }}
            />
        );
        setRender(renderElement);
    }, [pageContent]);

    return (
        <div className="markdown">
            <h1>{title}</h1>
            {render}
            {children}
        </div>
    );
};

export default Markdown;
