export const PrintBodySection = ({ name, children }) => {
    return (
        <section id={name + '-section'}>
            <h2>{name}</h2>
            <hr />
            {children}
        </section>
    );
};
