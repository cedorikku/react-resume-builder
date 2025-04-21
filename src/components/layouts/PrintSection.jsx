export const PrintSection = ({ name, children }) => {
    return (
        <section id={name.toLowerCase() + '-section'} className="mb-4">
            <h2>{name}</h2>
            <hr />
            {children}
        </section>
    );
};
