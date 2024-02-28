import { Meta, StoryObj } from '@storybook/react';
import { AboutCardWithText } from './AboutCardWithText';
import { ComponentProps } from 'react';

const meta: Meta<typeof AboutCardWithText> = {
  component: AboutCardWithText,
  title: 'Leaf/AboutCardWithText',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof AboutCardWithText> };

/**
 * 説明カード(テキスト短め)
 */
export const Default: Story = {
  args: {
    text: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
  },
};

/**
 * 説明カード（テキスト長め）
 */
export const LongText: Story = {
  args: {
    text: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト\
    サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
  },
};
