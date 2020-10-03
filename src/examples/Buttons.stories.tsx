import React from 'react';
import { Button } from '../../build/index.es';

import { action } from '@storybook/addon-actions';

export default {
  button: Button,
  title: 'Button'
};

export const Default = (args) => <Button {...args} />;

Default.args = {
  children: 'Click me',
  onClick: action('onClick')
};

