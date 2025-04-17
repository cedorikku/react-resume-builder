import './styles/Form.css';
import Input from './components/Input';
import Button from './components/Button';

const Form = ({
    profile,
    education,
    handleProfileOnChange,
    handleEducationOnChange,
    handleAddEducationClick,
}) => {
    return (
        <form method="">
            <section>
                <h2>Header</h2>
                <Input
                    type="text"
                    label="Name"
                    value={profile.name || ''}
                    onChange={(e) => handleProfileOnChange(e, 'name')}
                />
                <Input
                    type="text"
                    label="Title"
                    value={profile.title || ''}
                    onChange={(e) => handleProfileOnChange(e, 'title')}
                />
            </section>

            <section>
                <h2>Contact</h2>
                <Input
                    type="email"
                    label="Email"
                    value={profile.email || ''}
                    onChange={(e) => handleProfileOnChange(e, 'email')}
                />
                <Input
                    type="text"
                    label="Address"
                    value={profile.address || ''}
                    onChange={(e) => handleProfileOnChange(e, 'address')}
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
                {education.map((eduItem) => {
                    return (
                        <div key={eduItem.key}>
                            <Input
                                label="School"
                                value={eduItem.school || ''}
                                onChange={(e) =>
                                    handleEducationOnChange(
                                        e,
                                        'school',
                                        eduItem,
                                    )
                                }
                            />
                            <Input
                                label="Location"
                                value={eduItem.degree || ''}
                                onChange={(e) =>
                                    handleEducationOnChange(
                                        e,
                                        'location',
                                        eduItem,
                                    )
                                }
                            />
                            <Input
                                label="Degree"
                                value={eduItem.degree || ''}
                                onChange={(e) =>
                                    handleEducationOnChange(
                                        e,
                                        'degree',
                                        eduItem,
                                    )
                                }
                            />

                            <div className="year-range">
                                <Input
                                    label="From"
                                    value={eduItem.from || ''}
                                    onChange={(e) =>
                                        handleEducationOnChange(
                                            e,
                                            'from',
                                            eduItem,
                                        )
                                    }
                                />
                                <Input
                                    label="To"
                                    value={eduItem.to || ''}
                                    onChange={(e) =>
                                        handleEducationOnChange(
                                            e,
                                            'to',
                                            eduItem,
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
            <h2>Projects</h2>

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
