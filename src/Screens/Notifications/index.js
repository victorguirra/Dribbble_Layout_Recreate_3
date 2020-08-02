import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';

import {Container,
        Title,
        Option,
        WrapperIcon,
        WrapperInfos,
        Info,
        Date
} from './styles';

const ClothesScreen = () => {
    return(
        <>
            <StatusBar backgroundColor="#0D5C46" style="light"/>

            <Container>

                <Title>Notifications</Title>

                <Option>

                    <WrapperIcon>

                        <MaterialIcons name="notifications-active" size={30} color="#000" />

                    </WrapperIcon>

                    <WrapperInfos>

                        <Info>Get 4000 OFF On Bulk Order Products</Info>

                        <Date>18 Oct 2019 7:00 PM</Date>

                    </WrapperInfos>

                </Option>

                <Option>

                    <WrapperIcon>

                        <MaterialIcons name="notifications-active" size={30} color="#000" />

                    </WrapperIcon>

                    <WrapperInfos>

                        <Info>Get 4000 OFF On Bulk Order Products</Info>

                        <Date>18 Oct 2019 7:00 PM</Date>

                    </WrapperInfos>

                </Option>

                <Option>

                    <WrapperIcon>

                        <MaterialIcons name="notifications-active" size={30} color="#000" />

                    </WrapperIcon>

                    <WrapperInfos>

                        <Info>Get 4000 OFF On Bulk Order Products</Info>

                        <Date>18 Oct 2019 7:00 PM</Date>

                    </WrapperInfos>

                </Option>

                <Option>

                    <WrapperIcon>

                        <MaterialIcons name="notifications-active" size={30} color="#000" />

                    </WrapperIcon>

                    <WrapperInfos>

                        <Info>Get 4000 OFF On Bulk Order Products</Info>

                        <Date>18 Oct 2019 7:00 PM</Date>

                    </WrapperInfos>

                </Option>

                <Option>

                    <WrapperIcon>

                        <MaterialIcons name="notifications-active" size={30} color="#000" />

                    </WrapperIcon>

                    <WrapperInfos>

                        <Info>Get 4000 OFF On Bulk Order Products</Info>

                        <Date>18 Oct 2019 7:00 PM</Date>

                    </WrapperInfos>

                </Option>

            </Container>
        </>
    )
}

export default ClothesScreen;