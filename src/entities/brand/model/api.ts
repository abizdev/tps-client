import { useQuery } from '@tanstack/react-query';
import { server_api } from '@shared/api/api';
import { AxiosResponse } from 'axios';
import { IBrand } from '@entities/brand';

const fetchPopularBrands = async () => {
	const response: AxiosResponse<IBrand[]> = await server_api.get('/brands/popular');
	return await response.data;
};

const fetchBrands = async (page: number, limit: number) => {
	const response: AxiosResponse<IBrand[]> = await server_api.get('/brands', { params: { page, limit } });
	return await response.data;
};


export const usePopularBrands = () => {
	return useQuery({
		queryKey: ['popular-brands'],
		queryFn: fetchPopularBrands,
		refetchOnWindowFocus: false,
	});
};

export const useBrands = (page: number, limit: number) => {
	return useQuery({
		queryKey: ['brands', page, limit],
		queryFn: () => fetchBrands(page, limit),
		// select: (data) => data.data,
	});
};
