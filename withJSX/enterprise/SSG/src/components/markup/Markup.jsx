import Head from "./Head";
import Body from "./Body";

const Markup = ({ locals }) => (
    <html lang="en">
        <Head locals={locals} />
        <Body />
    </html>
);

export default Markup;
