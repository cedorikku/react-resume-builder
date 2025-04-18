import './styles/Form.css';
import Input from './components/Input';
import Button from './components/Button';

const Form = ({
    profile,
    education,
    projects,
    handleProfileOnChange,
    handleEducationOnChange,
    handleAddEducationClick,
    handleRemoveEducationClick,
    handleProjectsOnChange,
    handleAddProjectClick,
    handleRemoveProjectClick,
}) => {
    return (
        <form method="">
            <section>
                <h2>Profile</h2>
                <Input
                    type="text"
                    label="Name"
                    value={profile.name || ''}
                    onChange={(e) => handleProfileOnChange(e, 'name')}
                />
                <Input
                    type="text"
                    label="Address"
                    value={profile.address || ''}
                    onChange={(e) => handleProfileOnChange(e, 'address')}
                />
                <Input
                    type="email"
                    label="Email"
                    value={profile.email || ''}
                    onChange={(e) => handleProfileOnChange(e, 'email')}
                />
                <Input
                    type="tel"
                    label="Phone"
                    value={profile.phone || ''}
                    onChange={(e) => handleProfileOnChange(e, 'phone')}
                />
            </section>

            <section>
                <h2>Education</h2>
                {education.map((educationItem) => {
                    return (
                        <div key={educationItem.key}>
                            <Button
                                text="Remove"
                                handleClick={() =>
                                    handleRemoveEducationClick(
                                        educationItem.key,
                                    )
                                }
                            />
                            <Input
                                label="School"
                                value={educationItem.school || ''}
                                onChange={(e) =>
                                    handleEducationOnChange(
                                        e,
                                        'school',
                                        educationItem,
                                    )
                                }
                            />
                            <Input
                                label="Location"
                                value={educationItem.degree || ''}
                                onChange={(e) =>
                                    handleEducationOnChange(
                                        e,
                                        'location',
                                        educationItem,
                                    )
                                }
                            />
                            <Input
                                label="Degree"
                                value={educationItem.degree || ''}
                                onChange={(e) =>
                                    handleEducationOnChange(
                                        e,
                                        'degree',
                                        educationItem,
                                    )
                                }
                            />

                            <div className="year-range">
                                <Input
                                    label="From"
                                    value={educationItem.from || ''}
                                    onChange={(e) =>
                                        handleEducationOnChange(
                                            e,
                                            'from',
                                            educationItem,
                                        )
                                    }
                                />
                                <Input
                                    label="To"
                                    value={educationItem.to || ''}
                                    onChange={(e) =>
                                        handleEducationOnChange(
                                            e,
                                            'to',
                                            educationItem,
                                        )
                                    }
                                />
                            </div>
                        </div>
                    );
                })}
                <Button
                    text="Add Education"
                    handleClick={handleAddEducationClick}
                />
            </section>

            <section>
                <h2>Projects</h2>
                {projects.map((projectItem) => {
                    return (
                        <div key={projectItem.key}>
                            <Button
                                text="Remove"
                                handleClick={() =>
                                    handleRemoveProjectClick(projectItem.key)
                                }
                            />
                            <Input
                                label="Name"
                                value={projectItem.name || ''}
                                onChange={(e) =>
                                    handleProjectsOnChange(
                                        e,
                                        'name',
                                        projectItem,
                                    )
                                }
                            />

                            <Input
                                label="Period"
                                value={projectItem.period || ''}
                                onChange={(e) =>
                                    handleProjectsOnChange(
                                        e,
                                        'period',
                                        projectItem,
                                    )
                                }
                            />

                            {/* <Button text="" handleClick={remove item} /> */}
                        </div>
                    );
                })}

                <Button
                    text="Add Project"
                    handleClick={handleAddProjectClick}
                />
            </section>

            <section>
                <h2>Work & Experience</h2>
            </section>

            <section></section>

            <section>
                <h2>Skills, Activities & Interests</h2>
            </section>
        </form>
    );
};

export default Form;
