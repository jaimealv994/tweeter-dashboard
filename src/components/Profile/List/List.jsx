import React from 'react';
import ProfileListItem from "./Item";
import styles from './List.module.scss'

const profilesConfig = [
    {user: 'VersaAgency', pagesCount: 1},
    {user: 'RainAgency', pagesCount: 1},
    {user: 'alexadevs', pagesCount: 1}
];

const ProfilesList = () => {
    return <div className={styles.list}>
        {
            profilesConfig.map(profile => {
                return <ProfileListItem key={profile.user} quantity={profile.pagesQuantity} user={profile.user}/>;
            })
        }
    </div>
};

export default ProfilesList;
