export const PrintSection = ({ name, children }) => {
    return (
        <section id={name.toLowerCase() + '-section'} className="mb-4">
            <h2>{name.toUpperCase()}</h2>
            <hr />
            <div className="px-4">{children}</div>
        </section>
    );
};
