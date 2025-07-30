import React from 'react';

export const usePagination = (pageStart?: number, limitStart?: number) => {
	const [page, setPage] = React.useState<number>(pageStart || 0);
	const [limit, setLimit] = React.useState<number>(limitStart || 10);

	return {
		page,
		limit,
		setPage,
		setLimit
	};
};
