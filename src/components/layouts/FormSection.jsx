export const FormSection = ({ name, children }) => {
    return (
        <section id={name.toLowerCase() + '-form'} className="mb-4">
            <h2 className="flex justify-center">{name}</h2>
            {children}
        </section>
    );
};
