import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

import {Container,
        Header,
        AvatarImage,
        SettingsButton,
        WrapperInfoMessages,
        WelcomeTitle,
        NameTitle
} from './styles';

import Avatar from '../../../assets/Images/Avatar/AvatarIcon.png';

const HomeScreen = () => {
    return(
        <Container>

            <Header>

                <AvatarImage source={Avatar} alt="Avatar Image" />

                <SettingsButton>

                    <MaterialIcons name="settings" size={30} color="#0D5C46" />

                </SettingsButton>

            </Header>

            <WrapperInfoMessages>

                <WelcomeTitle>Welcome Back</WelcomeTitle>

                <NameTitle>Victor Hugo Guirra</NameTitle>

            </WrapperInfoMessages>

        </Container>
    )
}

export default HomeScreen;