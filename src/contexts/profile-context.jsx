import { useState, useEffect, createContext } from 'react';

export const ProfileContext = createContext({});

export function ProfileContextProvider({ children }) {
    // Must change version after updating state's structure
    const _stateVersion = 'v1';
    const localStateKey = `profileData-${_stateVersion}`;

    const [profile, setProfile] = useState(() => {
        const savedData = localStorage.getItem(localStateKey);
        return savedData ? JSON.parse(savedData) : {};
    });

    useEffect(() => {
        localStorage.setItem(localStateKey, JSON.stringify(profile));
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
