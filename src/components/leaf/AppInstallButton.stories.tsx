import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import AppInstallButton from './AppInstallButton';

const meta: Meta<typeof AppInstallButton> = {
  component: AppInstallButton,
  title: 'Leaf/AppInstallButton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta> & { args: ComponentProps<typeof AppInstallButton> };

/**
 * アプリインストールボタン（App Store）
 */
export const AppStore: Story = {
  args: { platform: 'appStore' },
};

/**
 * アプリインストールボタン（Google Play）
 */
export const GooglePlay: Story = {
  args: { platform: 'googlePlay' },
};
