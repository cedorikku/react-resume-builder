import './styles/Form.css';
import Input from './components/Input';
import Button from './components/Button';
import { FormSection } from './components/layouts/FormSection';

const Form = ({ props }) => {
    const {
        states: { profile, education, projects, projectResponsibilities },
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
    } = props;

    return (
        <form
            method=""
            className="form min-w-350 flex-none rounded-lg border border-white/25 p-16 text-lg text-white"
        >
            <FormSection name="Profile">
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
            </FormSection>

            <FormSection name="Education">
                {education.map((educationItem) => {
                    return (
                        <div key={educationItem.key}>
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
                        <div key={projectItem.key}>
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
                                <label className="mb-4 text-sm font-medium">
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
                            <ul>
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
                                                <Button
                                                    text="-"
                                                    handleClick={() =>
                                                        handleRemoveProjectResponsibilityClick(
                                                            projectItem.key,
                                                            responsibilityKey,
                                                        )
                                                    }
                                                />
                                            </li>
                                        );
                                    },
                                )}
                            </ul>

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

            <FormSection name="Experience"></FormSection>

            <FormSection name="Skills"></FormSection>
        </form>
    );
};

export default Form;
