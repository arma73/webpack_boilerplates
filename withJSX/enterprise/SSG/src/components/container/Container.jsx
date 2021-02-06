import clsx from "clsx";

const Container = ({ children, className, ...restProps }) => (
    <main className={clsx("container", className)} {...restProps}>
        {children}
    </main>
);

export default Container;
