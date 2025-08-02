import { useReducer, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ExperiencesContext = createContext([]);

const ACTIONS = {
    ADD_EXPERIENCE: 'add_experience',
    UPDATE_EXPERIENCE: 'update_experience',
    REMOVE_EXPERIENCE: 'remove_experience',
    ADD_RESPONSIBILITY: 'add_responsibility',
    UPDATE_RESPONSIBILITY: 'update_responsibility',
    REMOVE_RESPONSIBILITY: 'remove_responsibility',
};

function reducer(experiences, action) {
    switch (action.type) {
        case ACTIONS.ADD_EXPERIENCE: {
            return [
                ...experiences,
                {
                    key: uuidv4(),
                    position: '',
                    company: '',
                    place: '',
                    period: '',
                    responsibilities: [],
                },
            ];
        }
        case ACTIONS.UPDATE_EXPERIENCE: {
            return experiences.map((exp) => {
                if (exp.key === action.payload.expKey) {
                    return {
                        ...exp,
                        [action.payload.propName]: action.payload.newValue,
                    };
                }

                return exp;
            });
        }
        case ACTIONS.REMOVE_EXPERIENCE: {
            return experiences.filter(
                (expItem) => expItem.key !== action.payload.expKey,
            );
        }
        case ACTIONS.ADD_RESPONSIBILITY: {
            const newResponsibilityKey = uuidv4();

            return experiences.map((exp) => {
                if (exp.key === action.payload.expKey) {
                    return {
                        ...exp,
                        responsibilities: [
                            ...exp.responsibilities,
                            {
                                key: newResponsibilityKey,
                                description: '',
                            },
                        ],
                    };
                }

                return exp;
            });
        }
        case ACTIONS.UPDATE_RESPONSIBILITY: {
            return experiences.map((exp) => {
                if (exp.key === action.payload.expKey) {
                    return {
                        ...exp,
                        responsibilities: exp.responsibilities.map((r) =>
                            r.key === action.payload.rKey
                                ? { ...r, description: action.payload.newValue }
                                : r,
                        ),
                    };
                }

                return exp;
            });
        }
        case ACTIONS.REMOVE_RESPONSIBILITY: {
            return experiences.map((exp) => {
                if (exp.key === action.payload.expKey) {
                    return {
                        ...exp,
                        responsibilities: exp.responsibilities.filter(
                            (r) => r.key !== action.payload.rKey,
                        ),
                    };
                }

                return exp;
            });
        }
        default:
            throw new Error('Unimplemented action: ', action.type);
    }
}

export function ExperiencesContextProvider({ children }) {
    const _stateVersion = 'v1';
    const localStateKey = `experiencesData-${_stateVersion}`;
    const init = () => {
        const savedData = localStorage.getItem(localStateKey);
        return savedData ? JSON.parse(savedData) : [];
    }

    const [experiences, dispatch] = useReducer(reducer, [], init);

    useEffect(() => {
        localStorage.setItem(localStateKey, JSON.stringify(experiences));
    }, [experiences]);

    return (
        <ExperiencesContext.Provider
            value={{
                experiences,
                experienceHandlers: {
                    add: () => {
                        dispatch({ type: ACTIONS.ADD_EXPERIENCE });
                    },
                    onChange: (newValue, propName, expKey) => {
                        dispatch({
                            type: ACTIONS.UPDATE_EXPERIENCE,
                            payload: {
                                newValue,
                                propName,
                                expKey,
                            },
                        });
                    },
                    remove: (expKey) => {
                        dispatch({
                            type: ACTIONS.REMOVE_EXPERIENCE,
                            payload: {
                                expKey,
                            },
                        });
                    },
                    addResponsibility: (expKey) => {
                        dispatch({
                            type: ACTIONS.ADD_RESPONSIBILITY,
                            payload: {
                                expKey,
                            },
                        });
                    },
                    onResponsibilityChange: (newValue, expKey, rKey) => {
                        dispatch({
                            type: ACTIONS.UPDATE_RESPONSIBILITY,
                            payload: {
                                newValue,
                                expKey,
                                rKey,
                            },
                        });
                    },
                    removeResponsibility: (expKey, rKey) => {
                        dispatch({
                            type: ACTIONS.REMOVE_RESPONSIBILITY,
                            payload: {
                                expKey,
                                rKey,
                            },
                        });
                    },
                },
            }}
        >
            {children}
        </ExperiencesContext.Provider>
    );
}
