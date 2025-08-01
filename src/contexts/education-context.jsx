import { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EducationContext = createContext([]);

export function EducationContextProvider({ children }) {
    const _stateVersion = 'v1';
    const localStateKey = `educationData-${_stateVersion}`;

    const [education, setEducation] = useState(() => {
        const savedData = localStorage.getItem(localStateKey);
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem(localStateKey, JSON.stringify(education));
    }, [education]);

    const handleAddEducationClick = () => {
        setEducation([
            ...education,
            {
                key: uuidv4(),
                location: '',
                school: '',
                degree: '',
                from: '',
                to: '',
            },
        ]);
    };

    const handleEducationOnChange = (newValue, propName, itemKey) => {
        setEducation(
            education.map((edu) => {
                if (edu.key === itemKey) {
                    return {
                        ...edu,
                        [propName]: newValue,
                    };
                }

                return edu;
            }),
        );
    };

    const handleRemoveEducationClick = (key) => {
        setEducation(education.filter((eduItem) => eduItem.key !== key));
    };

    return (
        <EducationContext.Provider
            value={{
                education,
                educationHandlers: {
                    add: handleAddEducationClick,
                    onChange: handleEducationOnChange,
                    remove: handleRemoveEducationClick,
                },
            }}
        >
            {children}
        </EducationContext.Provider>
    );
}
