import { useReducer, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectsContext = createContext([]);

const ACTIONS = {
    ADD_PROJECT: 'add_project',
    UPDATE_PROJECT: 'update_project',
    REMOVE_PROJECT: 'remove_project',
    ADD_DESCRIPTION: 'add_description',
    UPDATE_DESCRIPTION: 'update_description',
    REMOVE_DESCRIPTION: 'remove_description',
};

function reducer(projects, action) {
    switch (action.type) {
        case ACTIONS.ADD_PROJECT: {
            return [
                ...projects,
                {
                    key: uuidv4(),
                    name: '',
                    period: '',
                    descriptions: [],
                },
            ];
        }
        case ACTIONS.UPDATE_PROJECT: {
            return projects.map((proj) => {
                if (proj.key === action.payload.projKey) {
                    return {
                        ...proj,
                        [action.payload.propName]: action.payload.newValue,
                    };
                }

                return proj;
            });
        }
        case ACTIONS.REMOVE_PROJECT: {
            return projects.filter(
                (projItem) => projItem.key !== action.payload.projKey,
            );
        }
        case ACTIONS.ADD_DESCRIPTION: {
            const newDescriptionKey = uuidv4();

            return projects.map((proj) => {
                if (proj.key === action.payload.projKey) {
                    return {
                        ...proj,
                        descriptions: [
                            ...proj.descriptions,
                            {
                                key: newDescriptionKey,
                                description: '',
                            },
                        ],
                    };
                }

                return proj;
            });
        }
        case ACTIONS.UPDATE_DESCRIPTION: {
            return projects.map((proj) => {
                if (proj.key === action.payload.projKey) {
                    return {
                        ...proj,
                        descriptions: proj.descriptions.map((p) =>
                            p.key === action.payload.dKey
                                ? { ...p, description: action.payload.newValue }
                                : p,
                        ),
                    };
                }

                return proj;
            });
        }
        case ACTIONS.REMOVE_DESCRIPTION: {
            return projects.map((proj) => {
                if (proj.key === action.payload.projKey) {
                    return {
                        ...proj,
                        descriptions: proj.descriptions.filter(
                            (p) => p.key !== action.payload.dKey,
                        ),
                    };
                }

                return proj;
            });
        }
        default:
            throw new Error('Unimplemented action: ', action.type);
    }
}

export function ProjectsContextProvider({ children }) {
    // TODO: Save state in localStorage
    const [projects, dispatch] = useReducer(reducer, []);

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                projectHandlers: {
                    add: () => {
                        dispatch({
                            type: ACTIONS.ADD_PROJECT,
                        });
                    },
                    onChange: (newValue, propName, projKey) => {
                        dispatch({
                            type: ACTIONS.UPDATE_PROJECT,
                            payload: {
                                newValue,
                                propName,
                                projKey,
                            },
                        });
                    },
                    remove: (projKey) => {
                        dispatch({
                            type: ACTIONS.REMOVE_PROJECT,
                            payload: {
                                projKey: projKey,
                            },
                        });
                    },
                    addDescription: (projKey) => {
                        dispatch({
                            type: ACTIONS.ADD_DESCRIPTION,
                            payload: {
                                projKey,
                            },
                        });
                    },
                    onDescriptionChange: (newValue, projKey, dKey) => {
                        dispatch({
                            type: ACTIONS.UPDATE_DESCRIPTION,
                            payload: {
                                newValue,
                                projKey,
                                dKey,
                            },
                        });
                    },
                    removeDescription: (projKey, dKey) => {
                        dispatch({
                            type: ACTIONS.REMOVE_DESCRIPTION,
                            payload: {
                                projKey,
                                dKey,
                            },
                        });
                    },
                },
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}
