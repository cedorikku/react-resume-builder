import './styles/Print.css';

import { PrintBodySection } from './components/layouts/PrintBodySection';

const Print = ({ props }) => {
    const { profile, education, projects, projectResponsibilities } = props;

    return (
        <div className="print sticky top-0 h-[1056px] w-[816px] flex-none bg-white p-8 font-serif text-black">
            <div className="header">
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
            </div>

            <div className="body">
                {education.length != 0 ? (
                    <PrintBodySection name="Education">
                        {education.map((educationItem) => {
                            return (
                                <div
                                    key={educationItem.key}
                                    className="edu-item"
                                >
                                    <div className="row">
                                        <div>
                                            {educationItem.school ||
                                                '[Your School Name]'}
                                        </div>
                                        <div>
                                            {educationItem.location ||
                                                '[City, State]'}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div>
                                            {educationItem.degree ||
                                                '[Your Degree]'}
                                        </div>
                                        <div>
                                            <span>
                                                {educationItem.from || '[From]'}
                                            </span>
                                            <span>
                                                {educationItem.to || '[To]'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </PrintBodySection>
                ) : (
                    ''
                )}

                {projects.length != 0 ? (
                    <PrintBodySection name="Projects">
                        {projects.map((projectItem) => {
                            return (
                                <div key={projectItem.key}>
                                    <div className="flex justify-between font-bold">
                                        <span>
                                            {projectItem.name ||
                                                '[Project Name]'}
                                        </span>
                                        <span>
                                            {projectItem.period ||
                                                '[Month Year]'}
                                        </span>
                                    </div>
                                    <ul>
                                        {projectResponsibilities.length != 0
                                            ? projectItem.responsibilities.map(
                                                  (key) => {
                                                      const responsibility =
                                                          projectResponsibilities.find(
                                                              (r) =>
                                                                  r.key === key,
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
                    </PrintBodySection>
                ) : (
                    ''
                )}

                {/* Put more print body sections (component) down here */}
            </div>
        </div>
    );
};

export default Print;
