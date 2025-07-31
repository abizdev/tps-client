import React from 'react';

const SectionTitleLoader = React.memo(() => {
	return (
		<div className='flex justify-between items-end mb-5'>
			<span className='inline-block skeleton w-[330px] h-10' />
			<span className='inline-block skeleton w-[55px] h-6' />
		</div>
	);
});

export default SectionTitleLoader;
