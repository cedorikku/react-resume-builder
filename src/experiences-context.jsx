import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ExperiencesContext = createContext([]);

export function ExperiencesContextProvider({ children }) {
    const [experiences, setExperiences] = useState([]);
    const [responsibilities, setResponsibilities] =
        useState([]);

    const handleAddExperienceClick = () => {
        // The key for the first responsibility of this experience
        const firstResponsibilityKey = uuidv4();

        setExperiences([
            ...experiences,
            {
                key: uuidv4(),
                position: '',
                company: '',
                place: '',
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

    const handleExperiencesOnChange = (e, name, itemKey) => {
        setExperiences(
            experiences.map((exp) => {
                if (exp.key === itemKey) {
                    return {
                        ...exp,
                        [name]: e.target.value,
                    };
                }

                return exp;
            }),
        );
    };

    const handleRemoveExperienceClick = (key) => {
        setExperiences(experiences.filter((expItem) => expItem.key !== key));
    };

    const handleAddExperienceResponsibilityClick = (itemKey) => {
        const newResponsibilityKey = uuidv4();

        setExperiences(
            experiences.map((exp) => {
                if (exp.key === itemKey) {
                    return {
                        ...exp,
                        responsibilities: [
                            ...exp.responsibilities,
                            newResponsibilityKey,
                        ],
                    };
                }

                return exp;
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

    const handleExperienceResponsibilitiesOnChange = (e, name, itemKey) => {
        setResponsibilities(
            responsibilities.map((er) => {
                if (er.key === itemKey) {
                    return {
                        ...er,
                        [name]: e.target.value,
                    };
                }

                return er;
            }),
        );
    };

    const handleRemoveExperienceResponsibilityClick = (expKey, itemKey) => {
        setExperiences(
            experiences.map((exp) => {
                if (exp.key === expKey) {
                    return {
                        ...exp,
                        responsibilities: exp.responsibilities.filter(
                            (item) => item !== itemKey,
                        ),
                    };
                }

                return exp;
            }),
        );

        setResponsibilities(
            responsibilities.filter((item) => item.key !== itemKey),
        );
    };

    return (
        <ExperiencesContext.Provider
            value={{
                items: experiences,
                responsibilities: responsibilities,
                handleExperiencesOnChange,
                handleAddExperienceClick,
                handleRemoveExperienceClick,
                handleAddExperienceResponsibilityClick,
                handleRemoveExperienceResponsibilityClick,
                handleExperienceResponsibilitiesOnChange,
            }}
        >
            {children}
        </ExperiencesContext.Provider>
    );
}
