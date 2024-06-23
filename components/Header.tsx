interface PropTypes {
    query: string;
    category: string;
}

export default function Header({ query, category }: PropTypes) {
    if (category && query) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search Results for "{query}" in{" "}
                <span className="capitalize">{category}</span>
            </h1>
        );
    }

    if (query) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search Results for "{query}"
            </h1>
        );
    }

    if (category) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search Results for "{category}"
            </h1>
        );
    }
    return <h1 className="heading3 self-start text-white-800">No Results</h1>;
}
