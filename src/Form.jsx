import './styles/Form.css';
import { useContext } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { FormSection } from './components/layouts/FormSection';
import { ProfileContext } from './contexts/profile-context';
import { EducationContext } from './contexts/education-context';
import { ProjectsContext } from './contexts/projects-context';
import { ExperiencesContext } from './contexts/experiences-context';
import { SkillsContext } from './contexts/skills-context';

const Form = () => {
    const { profile, handleProfileOnChange } = useContext(ProfileContext);
    const { experiences, experienceHandlers } = useContext(ExperiencesContext);
    const { projects, projectHandlers } = useContext(ProjectsContext);
    const { education, educationHandlers } = useContext(EducationContext);
    const { skills, skillsHandler } = useContext(SkillsContext);

    return (
        <form className="form min-w-300 flex-none text-sm text-white">
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
                    <div className="two-col">
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
                </div>
            </FormSection>

            <FormSection name="Experience">
                {experiences.map((expItem) => {
                    return (
                        <div key={expItem.key} className="input-group">
                            <Input
                                label="Position"
                                value={expItem.position || ''}
                                onChange={(e) =>
                                    experienceHandlers.onChange(
                                        e.target.value,
                                        'position',
                                        expItem.key,
                                    )
                                }
                            />
                            <Input
                                label="Company"
                                value={expItem.company || ''}
                                onChange={(e) =>
                                    experienceHandlers.onChange(
                                        e.target.value,
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
                                        experienceHandlers.onChange(
                                            e.target.value,
                                            'period',
                                            expItem.key,
                                        )
                                    }
                                />
                                <Input
                                    label="Place"
                                    value={expItem.place || ''}
                                    onChange={(e) =>
                                        experienceHandlers.onChange(
                                            e.target.value,
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
                                        experienceHandlers.addResponsibility(
                                            expItem.key,
                                        )
                                    }
                                />
                            </div>
                            {expItem.responsibilities.length !== 0 ? (
                                <ul className="flex flex-col justify-center gap-4">
                                    {expItem.responsibilities.map(
                                        (r, index) => {
                                            return (
                                                <li
                                                    key={r.key}
                                                    className="flex gap-4"
                                                >
                                                    <Input
                                                        placeholder={++index}
                                                        value={r.description}
                                                        onChange={(e) =>
                                                            experienceHandlers.onResponsibilityChange(
                                                                e.target.value,
                                                                expItem.key,
                                                                r.key,
                                                            )
                                                        }
                                                    />
                                                    <div className="flex basis-20">
                                                        <Button
                                                            text="-"
                                                            color="red"
                                                            handleClick={() =>
                                                                experienceHandlers.removeResponsibility(
                                                                    expItem.key,
                                                                    r.key,
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
                                color="red"
                                handleClick={() =>
                                    experienceHandlers.remove(expItem.key)
                                }
                            />
                        </div>
                    );
                })}

                <Button
                    text="Add Experience"
                    handleClick={experienceHandlers.add}
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
                                    projectHandlers.onChange(
                                        e.target.value,
                                        'name',
                                        projectItem.key,
                                    )
                                }
                            />

                            <Input
                                label="Period"
                                value={projectItem.period || ''}
                                onChange={(e) =>
                                    projectHandlers.onChange(
                                        e.target.value,
                                        'period',
                                        projectItem.key,
                                    )
                                }
                            />

                            <div className="flex items-center gap-8">
                                <label className="text-sm font-medium">
                                    Descriptions
                                </label>
                                <Button
                                    text="+"
                                    handleClick={() =>
                                        projectHandlers.addDescription(
                                            projectItem.key,
                                        )
                                    }
                                />
                            </div>
                            {projectItem.descriptions.length != 0 ? (
                                <ul className="flex flex-col justify-center gap-4">
                                    {projectItem.descriptions.map(
                                        (d, index) => {
                                            return (
                                                <li
                                                    key={d.key}
                                                    className="flex gap-4"
                                                >
                                                    <Input
                                                        placeholder={++index}
                                                        value={d.description}
                                                        onChange={(e) =>
                                                            projectHandlers.onDescriptionChange(
                                                                e.target.value,
                                                                projectItem.key,
                                                                d.key,
                                                            )
                                                        }
                                                    />
                                                    <div className="flex basis-20">
                                                        <Button
                                                            text="-"
                                                            color="red"
                                                            handleClick={() =>
                                                                projectHandlers.removeDescription(
                                                                    projectItem.key,
                                                                    d.key,
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
                                color="red"
                                handleClick={() =>
                                    projectHandlers.remove(projectItem.key)
                                }
                            />
                        </div>
                    );
                })}

                <Button text="Add Project" handleClick={projectHandlers.add} />
            </FormSection>

            <FormSection name="Education">
                {education.map((educationItem) => {
                    return (
                        <div key={educationItem.key} className="input-group">
                            <Input
                                label="School"
                                value={educationItem.school || ''}
                                onChange={(e) =>
                                    educationHandlers.onChange(
                                        e.target.value,
                                        'school',
                                        educationItem.key,
                                    )
                                }
                            />
                            <Input
                                label="Location"
                                value={educationItem.location || ''}
                                onChange={(e) =>
                                    educationHandlers.onChange(
                                        e.target.value,
                                        'location',
                                        educationItem.key,
                                    )
                                }
                            />
                            <Input
                                label="Degree"
                                value={educationItem.degree || ''}
                                onChange={(e) =>
                                    educationHandlers.onChange(
                                        e.target.value,
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
                                        educationHandlers.onChange(
                                            e.target.value,
                                            'from',
                                            educationItem.key,
                                        )
                                    }
                                />
                                <Input
                                    label="To"
                                    value={educationItem.to || ''}
                                    onChange={(e) =>
                                        educationHandlers.onChange(
                                            e.target.value,
                                            'to',
                                            educationItem.key,
                                        )
                                    }
                                />
                            </div>

                            <Button
                                text="Remove"
                                color="red"
                                handleClick={() =>
                                    educationHandlers.remove(educationItem.key)
                                }
                            />
                        </div>
                    );
                })}
                <Button
                    text="Add Education"
                    handleClick={educationHandlers.add}
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
                                    skillsHandler.onChange(
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
                                    skillsHandler.onChange(
                                        e,
                                        'values',
                                        skillItem.key,
                                    )
                                }
                            />
                        </div>
                        <Button
                            text="Remove"
                            color="red"
                            handleClick={() =>
                                skillsHandler.remove(skillItem.key)
                            }
                        />
                    </div>
                ))}

                <Button text="Add Skill" handleClick={skillsHandler.add} />
            </FormSection>
        </form>
    );
};

export default Form;
