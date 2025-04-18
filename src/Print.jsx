import './styles/Print.css';

import { PrintBodySection } from './components/layouts/PrintBodySection';

const Print = ({ profile, education }) => {
    return (
        <div className="print">
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
                        {education.map((eduItem, key) => {
                            return (
                                <div key={key} className="edu-item">
                                    <div className="top">
                                        <div>{eduItem.school}</div>
                                        <div>{eduItem.location}</div>
                                    </div>
                                    <div className="bottom">
                                        <div>{eduItem.degree}</div>
                                        <div>
                                            <span>{eduItem.from}</span>
                                            <span>{eduItem.to}</span>
                                        </div>
                                    </div>
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
