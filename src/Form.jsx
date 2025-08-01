import './styles/Form.css';
import { useContext } from 'react';
import Input from './components/Input';
import Button, { ButtonRed } from './components/Button';
import { FormSection } from './components/layouts/FormSection';
import { ProfileContext } from './contexts/profile-context';
import { EducationContext } from './contexts/education-context';
import { ProjectsContext } from './contexts/projects-context';
import { ExperiencesContext } from './contexts/experiences-context';
import { SkillsContext } from './contexts/skills-context';

const Form = () => {
    const profile = useContext(ProfileContext);
    const education = useContext(EducationContext);
    const projects = useContext(ProjectsContext);
    const experiences = useContext(ExperiencesContext);
    const skills = useContext(SkillsContext);

    return (
        <form className="form min-w-300 flex-none text-sm text-white">
            <FormSection name="Profile">
                <div className="input-group">
                    <Input
                        type="text"
                        label="Name"
                        value={profile.name || ''}
                        onChange={(e) =>
                            profile.handleProfileOnChange(e, 'name')
                        }
                    />
                    <Input
                        type="text"
                        label="Address"
                        value={profile.address || ''}
                        onChange={(e) =>
                            profile.handleProfileOnChange(e, 'address')
                        }
                    />
                    <div className="two-col">
                        <Input
                            type="email"
                            label="Email"
                            value={profile.email || ''}
                            onChange={(e) =>
                                profile.handleProfileOnChange(e, 'email')
                            }
                        />
                        <Input
                            type="tel"
                            label="Phone"
                            value={profile.phone || ''}
                            onChange={(e) =>
                                profile.handleProfileOnChange(e, 'phone')
                            }
                        />
                    </div>
                </div>
            </FormSection>

            <FormSection name="Experience">
                {experiences.items.map((expItem) => {
                    return (
                        <div key={expItem.key} className="input-group">
                            <Input
                                label="Position"
                                value={expItem.position || ''}
                                onChange={(e) =>
                                    experiences.handleExperiencesOnChange(
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
                                    experiences.handleExperiencesOnChange(
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
                                        experiences.handleExperiencesOnChange(
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
                                        experiences.handleExperiencesOnChange(
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
                                        experiences.handleAddResponsibilityClick(
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
                                                            experiences.handleResponsibilitiesOnChange(
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
                                                                experiences.handleRemoveResponsibilityClick(
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
                                    experiences.handleRemoveExperienceClick(
                                        expItem.key,
                                    )
                                }
                            />
                        </div>
                    );
                })}

                <Button
                    text="Add Experience"
                    handleClick={experiences.handleAddExperienceClick}
                />
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
                                value={educationItem.location || ''}
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
                                        projects.handleAddDescriptionClick(
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
                                                            projects.handleDescriptionsOnChange(
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
                                                                projects.handleRemoveDescriptionClick(
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
                                    projects.handleRemoveProjectClick(
                                        projectItem.key,
                                    )
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

            {/* skills with category bullet point section */}
            <FormSection name="Skills">
                {skills.items.map((skillItem) => (
                    <div key={skillItem.key} className="input-group">
                        <div className="two-col short-long">
                            <Input
                                label="Category"
                                value={skillItem.category || ''}
                                onChange={(e) =>
                                    skills.handleSkillsOnChange(
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
                                    skills.handleSkillsOnChange(
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
                                skills.handleRemoveSkills(skillItem.key)
                            }
                        />
                    </div>
                ))}
                <Button text="Add Skill" handleClick={skills.handleAddSkills} />
            </FormSection>
        </form>
    );
};

export default Form;
