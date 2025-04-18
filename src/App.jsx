import React, { useState } from 'react';

import Form from './Form';
import Print from './Print';

function App() {
    const [profile, setProfile] = useState({});
    const [education, setEducation] = useState([]);

    const handleProfileOnChange = (e, name) => {
        setProfile({ ...profile, [name]: e.target.value });
    };

    /*
     An array was used here because I needed to retain where the position
     of the items are.
    */
    const handleEducationOnChange = (e, name, educationItem) => {
        // find index of the education item with received key from the caller
        const index = education.findIndex((edu) => edu.key === educationItem.key);

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
                key: crypto.randomUUID(),
                location: '',
                school: '',
                degree: '',
                from: '',
                to: '',
            },
        ]);
        console.log(education);
    };

    return (
        <div className="">
            <Form
                profile={profile}
                education={education}
                handleProfileOnChange={handleProfileOnChange}
                handleEducationOnChange={handleEducationOnChange}
                handleAddEducationClick={handleAddEducationClick}
            />

            <Print profile={profile} education={education} />
        </div>
    );
}

export default App;
