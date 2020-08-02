import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#0D5C46;
    align-items:center;
    justify-content:center;
`;

export const LaundryImage = styled.Image`
    width:50%;
    height:20%;
    margin-top:50px;
`;

export const Title = styled.Text`
    color:#fff;
    font-size:25px;
    font-weight:bold;
    margin-top:50px;
`;

export const WrapperDescription = styled.View`
    width:70%;
    margin-top:20px;
    align-items:center;
    justify-content:center;
`;

export const Description = styled.Text`
    text-align:center;
    color:#c7c7c7;
    font-size:15px;
    font-weight:bold;
`;

export const GetStartedButton = styled.TouchableOpacity`
    width:50%;
    padding:15px 0;
    margin-top:80px;
    background-color:#FF8A00;
    border-radius:15px;
    align-items:center;
    justify-content:center;
`;

export const TitleGetStartedButton = styled.Text`
    color:#fff;
    font-size:16px;
    font-weight:bold;
`;