import './styles/Form.css';
import Input from './components/Input';
import Button from './components/Button';
import { FormSection } from './components/layouts/FormSection';

const Form = ({ props }) => {
    const {
        states: { profile, education, projects, experiences },
        handleProfileOnChange,
        handleAddEducationClick,
        handleRemoveEducationClick,
        handleEducationOnChange,
        handleProjectsOnChange,
        handleAddProjectClick,
        handleRemoveProjectClick,
        handleProjectResponsibilitiesOnChange,
        handleAddProjectResponsibilityClick,
        handleRemoveProjectResponsibilityClick,
        handleExperiencesOnChange,
        handleAddExperienceClick,
        handleRemoveExperienceClick,
        handleAddExperienceResponsibilityClick,
        handleRemoveExperienceResponsibilityClick,
        handleExperienceResponsibilitiesOnChange,
    } = props;

    return (
        <form className="form min-w-350 flex-none rounded-lg border border-white/25 p-16 text-sm text-white">
            <FormSection name="Profile">
                <div className="input-group">
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
                </div>
            </FormSection>

            <FormSection name="Education">
                {education.map((educationItem) => {
                    return (
                        <div key={educationItem.key} className="input-group">
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

                            <Button
                                text="Remove"
                                handleClick={() =>
                                    handleRemoveEducationClick(
                                        educationItem.key,
                                    )
                                }
                            />
                        </div>
                    );
                })}
                <Button
                    text="Add Education"
                    handleClick={handleAddEducationClick}
                />
            </FormSection>

            <FormSection name="Projects">
                {projects.map((projectItem) => {
                    return (
                        <div key={projectItem.key} className="input-group">
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

                            <div className="flex items-center gap-8">
                                <label className="text-sm font-medium">
                                    Responsibilities
                                </label>
                                <Button
                                    text="+"
                                    handleClick={() =>
                                        handleAddProjectResponsibilityClick(
                                            projectItem.key,
                                        )
                                    }
                                />
                            </div>
                            {projectItem.responsibilities.length != 0 ? (
                                <ul className="flex flex-col justify-center gap-4">
                                    {projectItem.responsibilities.map(
                                        (responsibilityKey, index) => {
                                            return (
                                                <li
                                                    key={responsibilityKey}
                                                    className="flex gap-4"
                                                >
                                                    <Input
                                                        placeholder={++index}
                                                        onChange={(e) =>
                                                            handleProjectResponsibilitiesOnChange(
                                                                e,
                                                                'description',
                                                                responsibilityKey,
                                                            )
                                                        }
                                                    />
                                                    <div className="flex basis-20">
                                                        <Button
                                                            text="-"
                                                            handleClick={() =>
                                                                handleRemoveProjectResponsibilityClick(
                                                                    projectItem.key,
                                                                    responsibilityKey,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            ) : (
                                ''
                            )}

                            <Button
                                text="Remove"
                                handleClick={() =>
                                    handleRemoveProjectClick(projectItem.key)
                                }
                            />
                        </div>
                    );
                })}

                <Button
                    text="Add Project"
                    handleClick={handleAddProjectClick}
                />
            </FormSection>

            <FormSection name="Experience">
                {experiences.map((expItem) => {
                    return (
                        <div key={expItem.key} className="input-group">
                            <Input
                                label="Position"
                                value={expItem.position || ''}
                                onChange={(e) =>
                                    handleExperiencesOnChange(
                                        e,
                                        'position',
                                        expItem,
                                    )
                                }
                            />

                            <Input
                                label="Company"
                                value={expItem.company || ''}
                                onChange={(e) =>
                                    handleExperiencesOnChange(
                                        e,
                                        'company',
                                        expItem,
                                    )
                                }
                            />

                            <Input
                                label="Place"
                                value={expItem.place || ''}
                                onChange={(e) =>
                                    handleExperiencesOnChange(
                                        e,
                                        'place',
                                        expItem,
                                    )
                                }
                            />

                            <Input
                                label="Period"
                                value={expItem.period || ''}
                                onChange={(e) =>
                                    handleExperiencesOnChange(
                                        e,
                                        'period',
                                        expItem,
                                    )
                                }
                            />

                            <div className="flex items-center gap-8">
                                <label className="text-sm font-medium">
                                    Responsibilities
                                </label>
                                <Button
                                    text="+"
                                    handleClick={() =>
                                        handleAddExperienceResponsibilityClick(
                                            expItem.key,
                                        )
                                    }
                                />
                            </div>
                            {expItem.responsibilities.length != 0 ? (
                                <ul className="flex flex-col justify-center gap-4">
                                    {expItem.responsibilities.map(
                                        (responsibilityKey, index) => {
                                            return (
                                                <li
                                                    key={responsibilityKey}
                                                    className="flex gap-4"
                                                >
                                                    <Input
                                                        placeholder={++index}
                                                        onChange={(e) =>
                                                            handleExperienceResponsibilitiesOnChange(
                                                                e,
                                                                'description',
                                                                responsibilityKey,
                                                            )
                                                        }
                                                    />
                                                    <div className="flex basis-20">
                                                        <Button
                                                            text="-"
                                                            handleClick={() =>
                                                                handleRemoveExperienceResponsibilityClick(
                                                                    expItem.key,
                                                                    responsibilityKey,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </li>
                                            );
                                        },
                                    )}
                                </ul>
                            ) : (
                                ''
                            )}

                            <Button
                                text="Remove"
                                handleClick={() =>
                                    handleRemoveExperienceClick(expItem.key)
                                }
                            />
                        </div>
                    );
                })}

                <Button
                    text="Add Experience"
                    handleClick={handleAddExperienceClick}
                />
            </FormSection>

            <FormSection name="Skills"></FormSection>
        </form>
    );
};

export default Form;
