import React from 'react';
import { Button } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof Button>

const csf: Meta = {
  title: 'atoms/Button',
}

const Template: Story<Props> = (args) => <Button {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'

export default csf


