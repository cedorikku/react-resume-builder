import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SkillsContext = createContext([]);

export function SkillsContextProvider({ children }) {
    const [skills, setSkills] = useState([]);

    const handleSkillsOnChange = (e, name, itemKey) => {
        setSkills(
            skills.map((skill) => {
                if (skill.key === itemKey) {
                    return {
                        ...skill,
                        [name]: e.target.value,
                    };
                }

                return skill;
            }),
        );
    };

    const handleAddSkills = () => {
        setSkills([
            ...skills,
            {
                key: uuidv4(),
                category: '',
                values: '',
            },
        ]);
    };

    const handleRemoveSkills = (key) => {
        setSkills(skills.filter((skill) => skill.key !== key));
    };

    return (
        <SkillsContext.Provider
            value={{
                items: skills,
                handleSkillsOnChange,
                handleAddSkills,
                handleRemoveSkills,
            }}
        >
            {children}
        </SkillsContext.Provider>
    );
}
