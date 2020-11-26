import React from 'react';
import { Box } from './Box';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof Box>

const csf: Meta = {
  title: 'atoms/Box',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['green','yellow', 'red'],
      },
      defaultValue: 'green'
    }
  }
}

const Template: Story<Props> = (args) => <Box {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'

export default csf
