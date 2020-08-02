import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {MaterialIcons} from '@expo/vector-icons';

import {Container,
        Header,
        AvatarImage,
        SettingsButton,
        WrapperInfoMessages,
        WelcomeTitle,
        NameTitle,
        OptionsContainer,
        Option,
        OptionImage,
        OptionTitle,
} from './styles';

import Avatar from '../../../assets/Images/Avatar/AvatarIcon.png';

import WashingMachine from '../../../assets/Images/Home/WashingMachine.png';
import ClothesIron from '../../../assets/Images/Home/ClothesIron.png';
import DryingClothes from '../../../assets/Images/Home/DryingClothes.png'; 
import Seam from '../../../assets/Images/Home/Seam.png';


const HomeScreen = () => {

    const OptionsItems = [
        {
            key: String(Math.random()),
            img: WashingMachine,
            title: 'Wash & Iron',
        },
        {
            key: String(Math.random()),
            img: ClothesIron,
            title: 'Ironing',
        },
        {
            key: String(Math.random()),
            img: DryingClothes,
            title: 'Dry Cleaning',
        },
        {
            key: String(Math.random()),
            img: Seam,
            title: 'Darning',
        },
    ]

    return(
        <>
            <StatusBar style="dark"/>

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

                <OptionsContainer>

                    {OptionsItems.map(OptionItem => (
                        <Option key={OptionItem.key}>

                            <OptionImage source={OptionItem.img} alt={OptionItem.title} />

                            <OptionTitle>{OptionItem.title}</OptionTitle>

                        </Option>
                    ))}

                </OptionsContainer>

                
            </Container>

        </>
    )
}

export default HomeScreen;