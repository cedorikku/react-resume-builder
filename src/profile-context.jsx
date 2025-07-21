import { useState, createContext } from 'react';

export const ProfileContext = createContext({});

export function ProfileContextProvider({ children }) {
    const [profile, setProfile] = useState({});

    const handleProfileOnChange = (e, name) => {
        setProfile({ ...profile, [name]: e.target.value });
    };

    return (
        <ProfileContext.Provider value={{ ...profile, handleProfileOnChange }}>
            {children}
        </ProfileContext.Provider>
    );
}
