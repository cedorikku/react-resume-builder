import { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SkillsContext = createContext([]);

export function SkillsContextProvider({ children }) {
    const _stateVersion = 'v1';
    const localStateKey = `skillsData-${_stateVersion}`;

    const [skills, setSkills] = useState(() => {
        const savedData = localStorage.getItem(localStateKey);
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem(localStateKey, JSON.stringify(skills));
    }, [skills]);

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
                skills,
                skillsHandler: {
                    add: handleAddSkills,
                    onChange: handleSkillsOnChange,
                    remove: handleRemoveSkills,
                },
            }}
        >
            {children}
        </SkillsContext.Provider>
    );
}
