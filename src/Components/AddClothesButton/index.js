import React from 'react';

import {AntDesign} from '@expo/vector-icons';

import {Wrapper} from './styles';

const AddClotheButton = () => {
    return(
        <Wrapper>

            <AntDesign name="plus" size={30} color="#fff" />

        </Wrapper>
    )
}

export default AddClotheButton;