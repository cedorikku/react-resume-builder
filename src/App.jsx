import React, { useState } from 'react';

import Form from './Form';
import Print from './Print';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [profile, setProfile] = useState({});
    const [education, setEducation] = useState([]);
    const [projects, setProjects] = useState([]);
    const [projectResponsibilities, setProjectResponsibilities] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [experienceResponsibilities, setExperienceResponsibilities] =
        useState([]);
    const [skills, setSkills] = useState([]);

    // PROFILE
    const handleProfileOnChange = (e, name) => {
        setProfile({ ...profile, [name]: e.target.value });
    };

    // EDUCATION
    /*
     An array was used here because I needed to retain where the position
     of the items are.
    */
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

    // PROJECTS
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
        setProjectResponsibilities([
            ...projectResponsibilities,
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

        setProjectResponsibilities([
            ...projectResponsibilities,
            {
                key: newResponsibilityKey,
                description: '',
            },
        ]);
    };

    const handleProjectResponsibilitiesOnChange = (e, name, itemKey) => {
        setProjectResponsibilities(
            projectResponsibilities.map((pr) => {
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

        setProjectResponsibilities(
            projectResponsibilities.filter((item) => item.key !== itemKey),
        );
    };

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
            profile,
            education,
            projects,
            projectResponsibilities,
            experiences,
            experienceResponsibilities,
            skills,
        },
        // Profile
        handleProfileOnChange,
        // Education
        handleAddEducationClick,
        handleRemoveEducationClick,
        handleEducationOnChange,
        // Projects
        handleProjectsOnChange,
        handleAddProjectClick,
        handleRemoveProjectClick,
        handleAddProjectResponsibilityClick,
        handleRemoveProjectResponsibilityClick,
        handleProjectResponsibilitiesOnChange,
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
        <div className="flex flex-wrap justify-center gap-8 p-8">
            <Form props={props} />
            <Print props={props.states} />
        </div>
    );
}

export default App;
