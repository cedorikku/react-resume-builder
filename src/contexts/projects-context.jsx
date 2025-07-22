import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectsContext = createContext([]);

export function ProjectsContextProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [responsibilities, setResponsibilities] = useState([]);

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
        setResponsibilities([
            ...responsibilities,
            {
                key: firstResponsibilityKey,
                description: '',
            },
        ]);
    };

    const handleRemoveProjectClick = (key) => {
        setProjects(projects.filter((projItem) => projItem.key !== key));
    };

    const handleAddProjectResponsibilityClick = (itemKey) => {
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

        setResponsibilities([
            ...responsibilities,
            {
                key: newResponsibilityKey,
                description: '',
            },
        ]);
    };

    const handleProjectResponsibilitiesOnChange = (e, name, itemKey) => {
        setResponsibilities(
            responsibilities.map((pr) => {
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

    const handleRemoveProjectResponsibilityClick = (projectKey, itemKey) => {
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

        setResponsibilities(
            responsibilities.filter((item) => item.key !== itemKey),
        );
    };

    return (
        <ProjectsContext.Provider
            value={{
                items: projects,
                responsibilities: responsibilities,
                handleProjectsOnChange,
                handleAddProjectClick,
                handleRemoveProjectClick,
                handleAddProjectResponsibilityClick,
                handleProjectResponsibilitiesOnChange,
                handleRemoveProjectResponsibilityClick,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}
