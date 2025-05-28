const timer: Record<string, ReturnType<typeof setTimeout> | undefined> = {};

export const debounce = <T extends string>(key: string, fn: () => T, timeout = 500): void => {
	if (timer[key]) {
		clearTimeout(timer[key]);
		timer[key] = undefined;
	}

	timer[key] = setTimeout(() => {
		try {
			console.log(fn());
			fn();
		} catch (e) {
			console.log('error in debounce', e);
		}
	}, timeout);
};
