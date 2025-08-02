import './styles/Print.css';
import { useContext } from 'react';
import { PrintSection } from './components/layouts/PrintSection';
import { ProfileContext } from './contexts/profile-context';
import { EducationContext } from './contexts/education-context';
import { ProjectsContext } from './contexts/projects-context';
import { ExperiencesContext } from './contexts/experiences-context';
import { SkillsContext } from './contexts/skills-context';

const Print = () => {
    const { profile } = useContext(ProfileContext);
    const { experiences } = useContext(ExperiencesContext);
    const { projects } = useContext(ProjectsContext);
    const { education } = useContext(EducationContext);
    const skills = useContext(SkillsContext);

    return (
        <div className="print sticky top-0 h-[1056px] w-[816px] flex-none bg-white px-16 py-8 font-serif text-black">
            <h1 className="text-center text-3xl font-black uppercase">
                {profile.name || '[FIRST LAST]'}
            </h1>
            <div className="text-center">
                {profile.address || '[City, State ZipCode]'}
            </div>
            <div className="flex justify-center gap-2">
                <span>{profile.email || '[youraddress@email.com]'}</span>
                {' • '}
                <span>{profile.phone || '[xxxxxxxxxxx]'}</span>
            </div>

            {experiences.length != 0 ? (
                <PrintSection name="Experiences">
                    {experiences.map((expItem) => {
                        return (
                            <div key={expItem.key} className="exp-item">
                                <div className="flex justify-between">
                                    <span className="font-bold">
                                        {expItem.position || '[Position]'}
                                    </span>
                                    <span>
                                        {expItem.period || '[From - To]'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="italic">
                                        {expItem.company || '[Company]'}
                                    </span>
                                    <span className="italic">
                                        {expItem.place || '[City, State]'}
                                    </span>
                                </div>
                                <ul>
                                    {expItem.responsibilities != 0
                                        ? expItem.responsibilities.map((r) => {
                                            return (
                                                <li key={r.key}>
                                                    {r.description ||
                                                        '[A Description about this job]'}
                                                </li>
                                            );
                                        })
                                        : ''}
                                </ul>
                            </div>
                        );
                    })}
                </PrintSection>
            ) : (
                ''
            )}

            {projects.length != 0 ? (
                <PrintSection name="Projects">
                    {projects.map((projectItem) => {
                        return (
                            <div key={projectItem.key}>
                                <div className="flex justify-between">
                                    <span className="font-bold">
                                        {projectItem.name || '[Project Name]'}
                                    </span>
                                    <span>
                                        {projectItem.period || '[From - To]'}
                                    </span>
                                </div>
                                <ul>
                                    {projectItem.descriptions.length != 0
                                        ? projectItem.descriptions.map((d) => {
                                            return (
                                                <li key={d.key}>
                                                    {d.description ||
                                                        '[A Description of the project.]'}
                                                </li>
                                            );
                                        })
                                        : ''}
                                </ul>
                            </div>
                        );
                    })}
                </PrintSection>
            ) : (
                ''
            )}

            {education.length != 0 ? (
                <PrintSection name="Education">
                    {education.map((educationItem) => {
                        return (
                            <div key={educationItem.key} className="edu-item">
                                <div className="flex justify-between">
                                    <div className="font-bold">
                                        {educationItem.school ||
                                            '[Your School Name]'}
                                    </div>
                                    <div>
                                        {educationItem.location ||
                                            '[City, State]'}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="italic">
                                        {educationItem.degree ||
                                            '[Your Degree]'}
                                    </div>
                                    <div className="flex gap-2 italic">
                                        <span>
                                            {educationItem.from || '[From]'}
                                        </span>
                                        <span>-</span>
                                        <span>
                                            {educationItem.to || '[To]'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </PrintSection>
            ) : (
                ''
            )}

            {skills.items.length != 0 ? (
                <PrintSection name="Skills">
                    <ul>
                        {skills.items.map((skillItem) => {
                            return (
                                <li key={skillItem.key} className="skill-item">
                                    {skillItem.category ? (
                                        <span className="mr-4 font-bold">
                                            {skillItem.category}:
                                        </span>
                                    ) : (
                                        <span className="mr-4 font-bold">
                                            [Category]:
                                        </span>
                                    )}
                                    {skillItem.values ||
                                        '[Skill 1, Skill 2, Skill 3, Skill 4]'}
                                </li>
                            );
                        })}
                    </ul>
                </PrintSection>
            ) : (
                ''
            )}
        </div>
    );
};

export default Print;
