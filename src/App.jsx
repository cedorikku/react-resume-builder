import React, { useState } from 'react';

import Form from './Form';
import Print from './Print';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [profile, setProfile] = useState({});
    const [education, setEducation] = useState([]);
    const [projects, setProjects] = useState([]);

    const handleProfileOnChange = (e, name) => {
        setProfile({ ...profile, [name]: e.target.value });
    };

    /*
     An array was used here because I needed to retain where the position
     of the items are.
    */
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

    const handleRemoveEducationClick = (key) => {
        setEducation(education.filter((eduItem) => eduItem.key !== key));
    };

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
        setProjects([
            ...projects,
            {
                key: uuidv4(),
                name: '',
                period: '',
                responsibilities: [],
            },
        ]);
    };

    const handleRemoveProjectClick = (key) => {
        setProjects(projects.filter((projItem) => projItem.key !== key));
    };

    const props = {
        states: {
            profile,
            education,
            projects,
        },
        handleProfileOnChange,
        handleAddEducationClick,
        handleRemoveEducationClick,
        handleEducationOnChange,
        handleProjectsOnChange,
        handleAddProjectClick,
        handleRemoveProjectClick,
    };

    return (
        <div className="">
            <Form props={props} />

            <Print props={props.states} />
        </div>
    );
}

export default App;
