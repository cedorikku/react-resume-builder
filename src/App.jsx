import React, { useState } from 'react';

import Form from './Form';
import Print from './Print';
import { v4 as uuidv4 } from 'uuid';

import { ProfileContextProvider } from './profile-context';
import { EducationContextProvider } from './education-context';
import { ProjectsContextProvider } from './projects-context';
import { ExperiencesContextProvider } from './experiences-context';
import { SkillsContextProvider } from './skills-context';

function App() {
    const props = {};

    return (
        <ProfileContextProvider>
            <EducationContextProvider>
                <ProjectsContextProvider>
                    <ExperiencesContextProvider>
                        <SkillsContextProvider>
                            <div className="flex flex-wrap justify-center gap-8 p-8">
                                <Form props={props} />
                                <Print props={props.states} />
                            </div>
                        </SkillsContextProvider>
                    </ExperiencesContextProvider>
                </ProjectsContextProvider>
            </EducationContextProvider>
        </ProfileContextProvider>
    );
}

export default App;
