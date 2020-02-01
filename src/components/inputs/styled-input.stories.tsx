import React from 'react';
import TextField from './styled-input';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';


export default {
    title: 'Styled Input',
    decorators: [withKnobs]
};


export const Default = () => (
    <TextField
        disabled={boolean("Disabled", false)}
        label={text("Label", "Hello Storybook")}
    >
    </TextField>
);
