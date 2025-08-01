import { useState, useEffect, createContext } from 'react';

export const ProfileContext = createContext({});

export function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState(() => {
        const savedData = localStorage.getItem('profileData-v1');
        return savedData ? JSON.parse(savedData) : {};
    });

    useEffect(() => {
        localStorage.setItem('profileData-v1', JSON.stringify(profile));
    }, [profile]);

    const handleProfileOnChange = (e, name) => {
        setProfile({ ...profile, [name]: e.target.value });
    };

    return (
        <ProfileContext.Provider value={{ profile, handleProfileOnChange }}>
            {children}
        </ProfileContext.Provider>
    );
}
