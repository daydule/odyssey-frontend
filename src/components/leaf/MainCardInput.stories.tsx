import { Meta, StoryObj } from '@storybook/react';
import { useState, ComponentProps } from 'react';
import MainCardInput from './MainCardInput';

const meta: Meta<typeof MainCardInput> = {
  component: MainCardInput,
  title: 'Leaf/Input',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof MainCardInput> };

/**
 * 入力欄（入力可）
 */
export const CanInput: Story = {
  args: {
    label: '年収',
    handleChange: () => {},
    value: 0,
    placeholder: '入力してください',
    handleClick: () => {},
    isActive: true,
    unit: '¥',
    unitPosition: 'left',
  },
  render: function Button({ ...args }) {
    const [value, setValue] = useState<number>(0);

    return <MainCardInput {...args} value={value} handleChange={setValue} />;
  },
};

/**
 * 入力欄（入力不可）
 */
export const CanNotInput: Story = {
  args: {
    label: '年収',
    handleChange: () => {},
    value: 0,
    handleClick: () => {},
    isActive: true,
    unit: '¥',
    unitPosition: 'left',
    placeholder: '入力してください',
  },
  render: function Button({ ...args }) {
    const [value, setValue] = useState<number>(0);
    const [_, setActive] = useState<string>('年収');

    return <MainCardInput {...args} value={value} handleClick={setActive} handleChange={setValue} />;
  },
};
