import React from 'react';
import Form from './Form';
import Print from './Print';
import { ProfileContextProvider } from './contexts/profile-context';
import { EducationContextProvider } from './contexts/education-context';
import { ProjectsContextProvider } from './contexts/projects-context';
import { ExperiencesContextProvider } from './contexts/experiences-context';
import { SkillsContextProvider } from './contexts/skills-context';

function App() {
    return (
        <ProfileContextProvider>
            <EducationContextProvider>
                <ProjectsContextProvider>
                    <ExperiencesContextProvider>
                        <SkillsContextProvider>
                            <div className="flex flex-wrap justify-center gap-8 p-8">
                                <Form />
                                <Print />
                            </div>
                        </SkillsContextProvider>
                    </ExperiencesContextProvider>
                </ProjectsContextProvider>
            </EducationContextProvider>
        </ProfileContextProvider>
    );
}

export default App;
