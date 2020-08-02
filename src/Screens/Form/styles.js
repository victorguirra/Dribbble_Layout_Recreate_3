import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex:1;
    background-color:#0D5C46;
    align-items:center;
    justify-content:center;
`;

export const LaundryImage = styled.Image`
    width:50%;
    height:20%;
    margin-bottom:250px;
`;

export const WrapperOptionsLogin = styled.View`
    background-color:#fff;
    width:100%;
    height:45%;
    position:absolute;
    bottom:0;
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    align-items:center;
    justify-content:center;
`;

export const ButtonSigninWithMobile = styled.TouchableOpacity`
    border:2px solid #d3d3d3;
    border-radius:30px;
    padding:10px;
    width:80%;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
`;

export const TitleButtonSigninWithMobile = styled.Text`
    color:#525252;
    font-weight:bold;
    width:65%;
`;

export const OrTitle = styled.Text`
    color:#696969;
    font-weight:bold;
    margin-top:25px;
    margin-bottom:10px;
`;

export const ButtonSignInWithFacebook = styled.TouchableOpacity`
    background-color:#3B579D;
    border-radius:30px;
    margin-top:15px;
    padding:10px;
    width:80%;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
`;

export const ButtonSignInWithGoogle = styled.TouchableOpacity`
    background-color:#4285F4;
    border-radius:30px;
    margin-top:15px;
    padding:10px;
    width:80%;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
`;

export const TitleButtonsSignInWithSocialMedia = styled.Text`
    color:#fff;
    font-weight:bold;
    width:65%;
`;


