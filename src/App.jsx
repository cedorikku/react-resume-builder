import React, { useState } from 'react';

import Form from './Form';
import Print from './Print';
import { v4 as uuidv4 } from 'uuid';

import { ProfileContextProvider } from './profile-context';
import { EducationContextProvider } from './education-context';
import { ProjectsContextProvider } from './projects-context';

function App() {
    const [experiences, setExperiences] = useState([]);
    const [experienceResponsibilities, setExperienceResponsibilities] =
        useState([]);
    const [skills, setSkills] = useState([]);

    // EXPERIENCES
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
        setExperienceResponsibilities([
            ...experienceResponsibilities,
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

        setExperienceResponsibilities([
            ...experienceResponsibilities,
            {
                key: newResponsibilityKey,
                description: '',
            },
        ]);
    };

    const handleExperienceResponsibilitiesOnChange = (e, name, itemKey) => {
        setExperienceResponsibilities(
            experienceResponsibilities.map((er) => {
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

        setExperienceResponsibilities(
            experienceResponsibilities.filter((item) => item.key !== itemKey),
        );
    };

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
            experiences,
            experienceResponsibilities,
            skills,
        },
        // Experience
        handleExperiencesOnChange,
        handleAddExperienceClick,
        handleRemoveExperienceClick,
        handleAddExperienceResponsibilityClick,
        handleRemoveExperienceResponsibilityClick,
        handleExperienceResponsibilitiesOnChange,
        // Skills
        handleSkillsOnChange,
        handleAddSkills,
        handleRemoveSkills,
    };

    return (
        <ProfileContextProvider>
            <EducationContextProvider>
                <ProjectsContextProvider>
                    <div className="flex flex-wrap justify-center gap-8 p-8">
                        <Form props={props} />
                        <Print props={props.states} />
                    </div>
                </ProjectsContextProvider>
            </EducationContextProvider>
        </ProfileContextProvider>
    );
}

export default App;
