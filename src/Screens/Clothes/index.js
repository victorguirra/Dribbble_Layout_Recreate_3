import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {AntDesign} from '@expo/vector-icons';

import {Wrapper,
        Header,
        ButtonGoBack,
        TitleDetails,
        Container,
        Option,
        OptionLeftContainer,
        OptionImage,
        OptionWrapperInfos,
        OptionTitle,
        OptionWrapperSmallInfos,
        OptionPrice,
        OptionGenre,
        OptionRightContainer,
        OptionButtonAddCounter,
        OptionNumberCounter,
        OptionButtonDecreaseCounter,
} from './styles';

import Shirt from '../../../assets/Images/Clothes/Shirt.png';
import Pants from '../../../assets/Images/Clothes/Pants.png';
import Skirt from '../../../assets/Images/Clothes/Skirt.png';
import Coat from '../../../assets/Images/Clothes/Coat.png';
import Dress from '../../../assets/Images/Clothes/Dress.png';
import Short from '../../../assets/Images/Clothes/Short.png';

const OptionsItems = [
    {
        key: String(Math.random()),
        img: Shirt,
        name: 'T-Shirt',
        genre: 'Men'
    },
    {
        key: String(Math.random()),
        img: Pants,
        name: 'Pants',
        genre: 'Men'
    },
    {
        key: String(Math.random()),
        img: Skirt,
        name: 'Skirt',
        genre: 'Woman'
    },
    {
        key: String(Math.random()),
        img: Coat,
        name: 'Coat',
        genre: 'Men'
    },
    {
        key: String(Math.random()),
        img: Dress,
        name: 'Dress',
        genre: 'Woman'
    },
    {
        key: String(Math.random()),
        img: Short,
        name: 'Short',
        genre: 'Men'
    },
    
]

const ClothesScreen = () => {
    return(
        <>  
            <StatusBar backgroundColor="#0D5C46" style="light" />

            <Wrapper>

                <Header>

                    <ButtonGoBack>

                        <AntDesign name="doubleleft" size={30} color="#fff" />

                    </ButtonGoBack>

                    <TitleDetails>Add Details</TitleDetails>

                </Header>

                <Container>

                    {OptionsItems.map((OptionItem) => (
                        <Option key={OptionItem.key}>

                            <OptionLeftContainer>

                                <OptionImage source={OptionItem.img} alt={OptionItem.name} />

                                <OptionWrapperInfos>

                                    <OptionTitle>{OptionItem.name}</OptionTitle>

                                    <OptionWrapperSmallInfos>

                                        <OptionPrice>$2</OptionPrice>

                                        <OptionGenre>{OptionItem.genre}</OptionGenre>

                                    </OptionWrapperSmallInfos>

                                </OptionWrapperInfos>

                            </OptionLeftContainer>

                            <OptionRightContainer>

                                <OptionButtonAddCounter>

                                    <AntDesign name="plus" size={20} color="#000" />

                                </OptionButtonAddCounter>

                                <OptionNumberCounter>{counter}</OptionNumberCounter>

                                <OptionButtonDecreaseCounter>

                                    <AntDesign name="minus" size={20} color="#000" />

                                </OptionButtonDecreaseCounter>

                            </OptionRightContainer>

                        </Option>
                    ))}

                </Container>

            </Wrapper>
        </>
    )
}

export default ClothesScreen; 