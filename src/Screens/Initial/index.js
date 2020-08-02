import React from 'react';
import {StatusBar} from 'expo-status-bar'

import {Container,
        LaundryImage,
        Title,
        WrapperDescription,
        Description,
        GetStartedButton,
        TitleGetStartedButton
} from './styles';

import Laundry from '../../../assets/Images/Initial/Laundry.png';

const InitialScreen = ({navigation}) => {
    
    const handleNavigationToFormScreen = () => {
        navigation.navigate('Form')
    }

    return(
        <>
            <StatusBar style="light"/>

            <Container>

                <LaundryImage source={Laundry} alt="Laundry" />

                <Title>Laundry App</Title>

                <WrapperDescription>

                    <Description>
                        Get ready to make your life easy with
                        single click of app, which makes
                        laundry thinhs handle better.
                    </Description>

                </WrapperDescription>

                <GetStartedButton onPress={() => handleNavigationToFormScreen()}>

                    <TitleGetStartedButton>GET STARTED</TitleGetStartedButton>

                </GetStartedButton>

            </Container>

        </>
    )
}

export default InitialScreen;