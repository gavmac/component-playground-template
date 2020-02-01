import { addDecorator, configure } from '@storybook/react';

import StylesDecorator from './styles-decorator';

addDecorator(StylesDecorator);

configure(require.context("../src/components", true, /\.stories\.tsx$/), module);
