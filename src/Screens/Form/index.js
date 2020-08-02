import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {FontAwesome} from '@expo/vector-icons';

import {Wrapper,
        LaundryImage,
        WrapperOptionsLogin,
        ButtonSigninWithMobile,
        TitleButtonSigninWithMobile,
        OrTitle,
        ButtonSignInWithFacebook,
        ButtonSignInWithGoogle,
        TitleButtonsSignInWithSocialMedia,
} from './styles';

import Laundry from '../../../assets/Images/Initial/Laundry.png';

const FormScreen = ({navigation}) => {

    const handleNavigateToHomeScreen = () => {
        navigation.navigate('OthersScreens')
    }

    return(
        <>
            <StatusBar style="light" />

            <Wrapper>

                <LaundryImage source={Laundry} alt="Laundry" />

                <WrapperOptionsLogin>

                    <ButtonSigninWithMobile onPress={() => handleNavigateToHomeScreen()}>

                        <FontAwesome name="mobile-phone" size={30} color="#ff8a00" />

                        <TitleButtonSigninWithMobile>Sign in with mobile</TitleButtonSigninWithMobile>

                    </ButtonSigninWithMobile>

                    <OrTitle>OR</OrTitle>

                    <ButtonSignInWithFacebook onPress={() => handleNavigateToHomeScreen()}>

                        <FontAwesome name="facebook-f" size={25} color="#fff" />

                        <TitleButtonsSignInWithSocialMedia>Sign in with facebook</TitleButtonsSignInWithSocialMedia>

                    </ButtonSignInWithFacebook>

                    <ButtonSignInWithGoogle onPress={() => handleNavigateToHomeScreen()}>

                        <FontAwesome name="google" size={25} color="#fff" />

                        <TitleButtonsSignInWithSocialMedia>Sign in with google</TitleButtonsSignInWithSocialMedia>

                    </ButtonSignInWithGoogle>

                </WrapperOptionsLogin>

            </Wrapper>

        </>
    )
}

export default FormScreen; 