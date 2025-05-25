export const FormSection = ({ name, children }) => {
    return (
        <section
            id={name.toLowerCase() + '-form'}
            className="mb-8 rounded-lg border border-white/30 bg-zinc-900 p-12"
        >
            <h2 className="flex justify-center font-bold">{name}</h2>
            {children}
        </section>
    );
};
