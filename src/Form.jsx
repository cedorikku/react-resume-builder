import './styles/Form.css';
import Input from './components/Input';
import Button, { ButtonRed } from './components/Button';
import { FormSection } from './components/layouts/FormSection';
import { useContext } from 'react';
import { ProfileContext } from './profile-context';
import { EducationContext } from './education-context';
import { ProjectsContext } from './projects-context';

const Form = ({ props }) => {
    const profile = useContext(ProfileContext);
    const education = useContext(EducationContext);
    const projects = useContext(ProjectsContext);

    const {
        states: { experiences, skills },
        handleExperiencesOnChange,
        handleAddExperienceClick,
        handleRemoveExperienceClick,
        handleAddExperienceResponsibilityClick,
        handleRemoveExperienceResponsibilityClick,
        handleExperienceResponsibilitiesOnChange,
        handleSkillsOnChange,
        handleAddSkills,
        handleRemoveSkills,
    } = props;

    return (
        <form className="form min-w-300 flex-none text-sm text-white">
            <FormSection name="Profile">
                <div className="input-group">
                    <Input
                        type="text"
                        label="Name"
                        value={profile.name || ''}
                        onChange={(e) => profile.handleProfileOnChange(e, 'name')}
                    />
                    <Input
                        type="text"
                        label="Address"
                        value={profile.address || ''}
                        onChange={(e) => profile.handleProfileOnChange(e, 'address')}
                    />
                    <div className="two-col">
                        <Input
                            type="email"
                            label="Email"
                            value={profile.email || ''}
                            onChange={(e) => profile.handleProfileOnChange(e, 'email')}
                        />
                        <Input
                            type="tel"
                            label="Phone"
                            value={profile.phone || ''}
                            onChange={(e) => profile.handleProfileOnChange(e, 'phone')}
                        />
                    </div>
                </div>
            </FormSection>

            <FormSection name="Education">
                {education.items.map((educationItem) => {
                    return (
                        <div key={educationItem.key} className="input-group">
                            <Input
                                label="School"
                                value={educationItem.school || ''}
                                onChange={(e) =>
                                    education.handleEducationOnChange(
                                        e,
                                        'school',
                                        educationItem.key,
                                    )
                                }
                            />
                            <Input
                                label="Location"
                                value={educationItem.degree || ''}
                                onChange={(e) =>
                                    education.handleEducationOnChange(
                                        e,
                                        'location',
                                        educationItem.key,
                                    )
                                }
                            />
                            <Input
                                label="Degree"
                                value={educationItem.degree || ''}
                                onChange={(e) =>
                                    education.handleEducationOnChange(
                                        e,
                                        'degree',
                                        educationItem.key,
                                    )
                                }
                            />

                            <div className="two-col">
                                <Input
                                    label="From"
                                    value={educationItem.from || ''}
                                    onChange={(e) =>
                                        education.handleEducationOnChange(
                                            e,
                                            'from',
                                            educationItem.key,
                                        )
                                    }
                                />
                                <Input
                                    label="To"
                                    value={educationItem.to || ''}
                                    onChange={(e) =>
                                        education.handleEducationOnChange(
                                            e,
                                            'to',
                                            educationItem.key,
                                        )
                                    }
                                />
                            </div>

                            <ButtonRed
                                text="Remove"
                                handleClick={() =>
                                    education.handleRemoveEducationClick(
                                        educationItem.key,
                                    )
                                }
                            />
                        </div>
                    );
                })}
                <Button
                    text="Add Education"
                    handleClick={education.handleAddEducationClick}
                />
            </FormSection>

            <FormSection name="Projects">
                {projects.items.map((projectItem) => {
                    return (
                        <div key={projectItem.key} className="input-group">
                            <Input
                                label="Name"
                                value={projectItem.name || ''}
                                onChange={(e) =>
                                    projects.handleProjectsOnChange(
                                        e,
                                        'name',
                                        projectItem.key,
                                    )
                                }
                            />

                            <Input
                                label="Period"
                                value={projectItem.period || ''}
                                onChange={(e) =>
                                    projects.handleProjectsOnChange(
                                        e,
                                        'period',
                                        projectItem.key,
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
                                        projects.handleAddProjectResponsibilityClick(
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
                                                            projects.handleProjectResponsibilitiesOnChange(
                                                                e,
                                                                'description',
                                                                responsibilityKey,
                                                            )
                                                        }
                                                    />
                                                    <div className="flex basis-20">
                                                        <ButtonRed
                                                            text="-"
                                                            handleClick={() =>
                                                                projects.handleRemoveProjectResponsibilityClick(
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

                            <ButtonRed
                                text="Remove"
                                handleClick={() =>
                                    projects.handleRemoveProjectClick(projectItem.key)
                                }
                            />
                        </div>
                    );
                })}

                <Button
                    text="Add Project"
                    handleClick={projects.handleAddProjectClick}
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
                                        expItem.key,
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
                                        expItem.key,
                                    )
                                }
                            />
                            <div className="two-col">
                                <Input
                                    label="Period"
                                    value={expItem.period || ''}
                                    onChange={(e) =>
                                        handleExperiencesOnChange(
                                            e,
                                            'period',
                                            expItem.key,
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
                                            expItem.key,
                                        )
                                    }
                                />
                            </div>
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
                                                        <ButtonRed
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
                            <ButtonRed
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

            {/* skills with category bullet point section */}
            <FormSection name="Skills">
                {skills.map((skillItem) => (
                    <div key={skillItem.key} className="input-group">
                        <div className="two-col short-long">
                            <Input
                                label="Category"
                                value={skillItem.category || ''}
                                onChange={(e) =>
                                    handleSkillsOnChange(
                                        e,
                                        'category',
                                        skillItem.key,
                                    )
                                }
                            />
                            <Input
                                label="List of skills"
                                value={skillItem.values || ''}
                                onChange={(e) =>
                                    handleSkillsOnChange(
                                        e,
                                        'values',
                                        skillItem.key,
                                    )
                                }
                            />
                        </div>
                        <ButtonRed
                            text="Remove"
                            handleClick={() =>
                                handleRemoveSkills(skillItem.key)
                            }
                        />
                    </div>
                ))}
                <Button text="Add Skill" handleClick={handleAddSkills} />
            </FormSection>
        </form>
    );
};

export default Form;
