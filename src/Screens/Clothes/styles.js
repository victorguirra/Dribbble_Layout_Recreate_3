import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Wrapper = styled.SafeAreaView`
    flex:1;
    background-color:#0D5C46;
    align-items:center;
    margin-top: ${Platform.OS === 'android' ? '50px' : '0px;'};
`;

export const Header = styled.View`
    width:90%;
    margin-top:30px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    padding:5px;
    align-items:center;
    justify-content:center;
`;

export const TitleDetails = styled.Text`
    width:65%;
    color:#fff;
    font-size:18px;
    font-weight:bold;
`;

export const Container = styled.View`
    background-color:#e8e8e8;
    width:100%;
    height:85%;
    flex:1;
    position:absolute;
    bottom:0;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    align-items:center;
`;

export const Option = styled.View`
    background-color:#fff;
    width:90%;
    border-radius:10px;
    padding:10px 15px;
    margin-top:25px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const OptionLeftContainer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

export const OptionImage = styled.Image`
    width:50px;
    height:50px;
`;

export const OptionWrapperInfos = styled.View`
    margin-left:25px;
`;

export const OptionTitle = styled.Text`
    font-weight:bold;
`;

export const OptionWrapperSmallInfos = styled.View`
    margin-top:5px;
    flex-direction:row;
    align-items:center;
`;

export const OptionPrice = styled.Text`
    color:#F08597;
    font-weight:bold;
`;

export const OptionGenre = styled.Text`
    color:#A3A3A3;
    font-weight:bold;
    margin-left:10px;
`;

export const OptionRightContainer = styled.View`
    width:30%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const OptionButtonAddCounter = styled.TouchableOpacity`
    background-color:#d3d3d3;
    width:30px;
    height:30px;
    border-radius:15px;
    align-items:center;
    justify-content:center;
`;

export const OptionNumberCounter = styled.Text`
    font-weight:bold;
    font-size:16px;
`;

export const OptionButtonDecreaseCounter = styled.TouchableOpacity`
    background-color:#d3d3d3;
    width:30px;
    height:30px;
    border-radius:15px;
    align-items:center;
    justify-content:center;
`;

