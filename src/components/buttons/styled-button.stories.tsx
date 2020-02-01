import React from 'react';

import { action } from '@storybook/addon-actions';

import MyNewButton from './styled-button';

export default {
    title: 'My New Button',
};

export const Default = () => (
    <MyNewButton onClick={action('Styled button clicked')}>
        Styled Button
    </MyNewButton>
);