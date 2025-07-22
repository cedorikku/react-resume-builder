import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectsContext = createContext([]);

export function ProjectsContextProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [descriptions, setDescriptions] = useState([]);

    const handleProjectsOnChange = (e, name, itemKey) => {
        setProjects(
            projects.map((proj) => {
                if (proj.key === itemKey) {
                    return {
                        ...proj,
                        [name]: e.target.value,
                    };
                }

                return proj;
            }),
        );
    };

    const handleAddProjectClick = () => {
        // The key for the first responsibility of this project
        const firstResponsibilityKey = uuidv4();

        setProjects([
            ...projects,
            {
                key: uuidv4(),
                name: '',
                period: '',
                responsibilities: [firstResponsibilityKey],
            },
        ]);

        // Add in a first one automatically
        setDescriptions([
            ...descriptions,
            {
                key: firstResponsibilityKey,
                description: '',
            },
        ]);
    };

    const handleRemoveProjectClick = (key) => {
        setProjects(projects.filter((projItem) => projItem.key !== key));
    };

    const handleAddDescriptionClick = (itemKey) => {
        const newResponsibilityKey = uuidv4();

        setProjects(
            projects.map((proj) => {
                if (proj.key === itemKey) {
                    return {
                        ...proj,
                        responsibilities: [
                            ...proj.responsibilities,
                            newResponsibilityKey,
                        ],
                    };
                }
                return proj;
            }),
        );

        setDescriptions([
            ...descriptions,
            {
                key: newResponsibilityKey,
                description: '',
            },
        ]);
    };

    const handleDescriptionsOnChange = (e, name, itemKey) => {
        setDescriptions(
            descriptions.map((pr) => {
                if (pr.key === itemKey) {
                    return {
                        ...pr,
                        [name]: e.target.value,
                    };
                }

                return pr;
            }),
        );
    };

    const handleRemoveDescriptionClick = (projectKey, itemKey) => {
        setProjects(
            projects.map((proj) => {
                if (proj.key === projectKey) {
                    return {
                        ...proj,
                        responsibilities: proj.responsibilities.filter(
                            (item) => item !== itemKey,
                        ),
                    };
                }

                return proj;
            }),
        );

        setDescriptions(descriptions.filter((item) => item.key !== itemKey));
    };

    return (
        <ProjectsContext.Provider
            value={{
                items: projects,
                responsibilities: descriptions,
                handleProjectsOnChange,
                handleAddProjectClick,
                handleRemoveProjectClick,
                handleAddDescriptionClick,
                handleDescriptionsOnChange,
                handleRemoveDescriptionClick,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}
