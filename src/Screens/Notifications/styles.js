import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.SafeAreaView`
    align-items:center;
    justify-content:center;
    margin-top: ${Platform.OS === 'android' ? '60px' : '0px'};
`;

export const Title = styled.Text`
    color:#0D5C46;
    font-weight:bold;
    font-size:20px;
    margin-top:30px;
    margin-bottom:20px;
`;

export const Option = styled.View`
    width:90%;
    border-top-left-radius:30px;
    border-bottom-right-radius:30px;
    margin-top:30px;
    padding:10px;
    background-color:#0D5C46;
    flex-direction:row;
    align-items:center;
`;

export const WrapperIcon = styled.View`
    background-color:#86D5BA;
    width:50px;
    height:50px;
    border-radius:25px;
    align-items:center;
    justify-content:center;
`;

export const WrapperInfos = styled.View`
    width:80%;
    margin-left:15px;
`;

export const Info = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:15px;
`;

export const Date = styled.Text`
    color:#d3d3d3;
    font-weight:bold;
    margin-top:10px;
    font-size:11px;
`;