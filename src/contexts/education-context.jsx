import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const EducationContext = createContext([]);

export function EducationContextProvider({ children }) {
    const [education, setEducation] = useState([]);

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

    const handleEducationOnChange = (e, name, itemKey) => {
        setEducation(
            education.map((edu) => {
                if (edu.key === itemKey) {
                    return {
                        ...edu,
                        [name]: e.target.value,
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
                items: education,
                handleAddEducationClick,
                handleEducationOnChange,
                handleRemoveEducationClick,
            }}
        >
            {children}
        </EducationContext.Provider>
    );
}
