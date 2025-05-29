import { Decorator } from '@storybook/react';
import { cn } from '../../lib/utils';
import { inter, proxima, rubik, sf } from '../../assets/fonts/fonts-decloration';

import '../../assets/css/globals.css';
import '../../assets/fonts/icons/style.css';

export const StyleDecorator: Decorator = (Story) => (
	<div className={cn('antialiased', rubik.variable, inter.variable, proxima.variable, sf.variable)}>
		<Story />
	</div>
);
