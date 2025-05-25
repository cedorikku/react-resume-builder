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

    const handleEducationOnChange = (e, name, educationItem) => {
        // find index of the education item with received key from the caller
        const index = education.findIndex(
            (edu) => edu.key === educationItem.key,
        );

        // create a new array, then replace the education item at the index
        const newEducation = [...education];

        newEducation[index] = {
            ...educationItem,
            [name]: e.target.value,
        };

        setEducation(newEducation);
    };

    const handleRemoveEducationClick = (key) => {
        setEducation(education.filter((eduItem) => eduItem.key !== key));
    };

    // PROJECTS
    const handleProjectsOnChange = (e, name, projectItem) => {
        const index = projects.findIndex(
            (proj) => proj.key === projectItem.key,
        );

        const newProjects = [...projects];

        newProjects[index] = {
            ...projectItem,
            [name]: e.target.value,
        };

        setProjects(newProjects);
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

    const handleAddProjectResponsibilityClick = (projectItemKey) => {
        const itemKey = uuidv4();

        const index = projects.findIndex((p) => p.key === projectItemKey);

        const newProjects = [...projects];

        newProjects[index] = {
            key: projectItemKey,
            name: projects[index].name,
            period: projects[index].period,
            responsibilities: [...projects[index].responsibilities, itemKey],
        };

        setProjects(newProjects);

        setProjectResponsibilities([
            ...projectResponsibilities,
            {
                key: itemKey,
                description: '',
            },
        ]);
    };

    const handleProjectResponsibilitiesOnChange = (
        e,
        name,
        responsibilityKey,
    ) => {
        const index = projectResponsibilities.findIndex(
            (pr) => pr.key === responsibilityKey,
        );

        const newProjectResponsibilities = [...projectResponsibilities];

        newProjectResponsibilities[index] = {
            ...projectResponsibilities[index],
            [name]: e.target.value,
        };

        setProjectResponsibilities(newProjectResponsibilities);
    };

    const handleRemoveProjectResponsibilityClick = (projectKey, itemKey) => {
        const index = projects.findIndex((p) => p.key === projectKey);

        const newProjects = [...projects];

        newProjects[index] = {
            ...projects[index],
            responsibilities: projects[index].responsibilities.filter(
                (item) => item !== itemKey,
            ),
        };

        setProjects(newProjects);

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

    const handleExperiencesOnChange = (e, name, expItem) => {
        const index = experiences.findIndex((exp) => exp.key === expItem.key);

        const newExperiences = [...experiences];
        newExperiences[index] = {
            ...expItem,
            [name]: e.target.value,
        };

        setExperiences(newExperiences);
    };

    const handleRemoveExperienceClick = (key) => {
        setExperiences(experiences.filter((expItem) => expItem.key !== key));
    };

    const handleAddExperienceResponsibilityClick = (expItemKey) => {
        const itemKey = uuidv4();

        const index = experiences.findIndex((e) => e.key === expItemKey);

        const newExperiences = [...experiences];

        newExperiences[index] = {
            ...experiences[index],
            responsibilities: [...experiences[index].responsibilities, itemKey],
        };

        setExperiences(newExperiences);

        setExperienceResponsibilities([
            ...experienceResponsibilities,
            {
                key: itemKey,
                description: '',
            },
        ]);
    };

    const handleExperienceResponsibilitiesOnChange = (
        e,
        name,
        responsibilityKey,
    ) => {
        const index = experienceResponsibilities.findIndex(
            (er) => er.key === responsibilityKey,
        );

        const newResponsibilities = [...experienceResponsibilities];

        newResponsibilities[index] = {
            ...experienceResponsibilities[index],
            [name]: e.target.value,
        };

        setExperienceResponsibilities(newResponsibilities);
    };

    const handleRemoveExperienceResponsibilityClick = (expKey, itemKey) => {
        const index = experiences.findIndex((e) => e.key === expKey);

        const newExperiences = [...experiences];

        newExperiences[index] = {
            ...experiences[index],
            responsibilities: experiences[index].responsibilities.filter(
                (item) => item !== itemKey,
            ),
        };

        setExperiences(newExperiences);

        setExperienceResponsibilities(
            experienceResponsibilities.filter((item) => item.key !== itemKey),
        );
    };

    const handleSkillsOnChange = (e, name, skillKey) => {
        const index = skills.findIndex((s) => s.key === skillKey);

        const newSkills = [...skills];

        newSkills[index] = {
            ...skills[index],
            [name]: e.target.value,
        };

        setSkills(newSkills);
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
