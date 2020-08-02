import styled from 'styled-components/native';
import {Platform} from 'react-native'

export const Container = styled.SafeAreaView`
    align-items:center;
    justify-content:center;
    margin-top:${Platform.OS === 'android' ? '80px' : '20px;'};
`;

export const Header = styled.View`
    width:90%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const AvatarImage = styled.Image`
    width:50px;
    height:50px;
`;

export const SettingsButton = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    padding:5px;
`;

export const WrapperInfoMessages = styled.View`
    width:90%;
    margin-top:30px;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
`;

export const WelcomeTitle = styled.Text`
    color:#0D5C46;
    font-size:18px;
`;

export const NameTitle = styled.Text`
    color:#0D5C46;
    font-size:20px;
    font-weight:bold;
    margin-top:5px;
`;

