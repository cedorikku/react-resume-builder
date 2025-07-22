import './styles/Print.css';
import { PrintSection } from './components/layouts/PrintSection';
import { ProfileContext } from './profile-context';
import { EducationContext } from './education-context';
import { ProjectsContext } from './projects-context';
import { ExperiencesContext } from './experiences-context';
import { SkillsContext } from './skills-context';
import { useContext } from 'react';

const Print = ({ props }) => {
    const profile = useContext(ProfileContext);
    const education = useContext(EducationContext);
    const projects = useContext(ProjectsContext);
    const experiences = useContext(ExperiencesContext);
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
                <span>|</span>
                <span>{profile.phone || '[xxxxxxxxxxx]'}</span>
            </div>

            {education.items.length != 0 ? (
                <PrintSection name="Education">
                    {education.items.map((educationItem) => {
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

            {projects.items.length != 0 ? (
                <PrintSection name="Projects">
                    {projects.items.map((projectItem) => {
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
                                    {projects.responsibilities.length != 0
                                        ? projectItem.responsibilities.map(
                                              (key) => {
                                                  const responsibility =
                                                      projects.responsibilities.find(
                                                          (r) => r.key === key,
                                                      );
                                                  return (
                                                      <li key={key}>
                                                          {responsibility.description ||
                                                              '[A Description]'}
                                                      </li>
                                                  );
                                              },
                                          )
                                        : ''}
                                </ul>
                            </div>
                        );
                    })}
                </PrintSection>
            ) : (
                ''
            )}

            {experiences.items.length != 0 ? (
                <PrintSection name="Experiences">
                    {experiences.items.map((expItem) => {
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
                                    {experiences.responsibilities.length != 0
                                        ? expItem.responsibilities.map(
                                              (key) => {
                                                  const responsibility =
                                                      experiences.responsibilities.find(
                                                          (r) => r.key === key,
                                                      );
                                                  return (
                                                      <li key={key}>
                                                          {responsibility.description ||
                                                              '[A Description about this job]'}
                                                      </li>
                                                  );
                                              },
                                          )
                                        : ''}
                                </ul>
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
