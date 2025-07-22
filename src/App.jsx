import React, { useState } from 'react';

import Form from './Form';
import Print from './Print';
import { v4 as uuidv4 } from 'uuid';

import { ProfileContextProvider } from './profile-context';
import { EducationContextProvider } from './education-context';
import { ProjectsContextProvider } from './projects-context';
import { ExperiencesContextProvider } from './experiences-context';

function App() {
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

    const props = {
        states: {
            skills,
        },
        // Skills
        handleSkillsOnChange,
        handleAddSkills,
        handleRemoveSkills,
    };

    return (
        <ProfileContextProvider>
            <EducationContextProvider>
                <ProjectsContextProvider>
                    <ExperiencesContextProvider>
                        <div className="flex flex-wrap justify-center gap-8 p-8">
                            <Form props={props} />
                            <Print props={props.states} />
                        </div>
                    </ExperiencesContextProvider>
                </ProjectsContextProvider>
            </EducationContextProvider>
        </ProfileContextProvider>
    );
}

export default App;
