export const PrintBodySection = ({ name, children }) => {
    return (
        <section id={name + '-section'} className="mb-4">
            <h2>{name}</h2>
            <hr />
            {children}
        </section>
    );
};
