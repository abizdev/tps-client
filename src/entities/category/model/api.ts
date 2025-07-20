import { server_api } from '@shared/api/api';
import { AxiosResponse } from 'axios';
import { ICategory } from '@entities/category';
import { useQuery } from '@tanstack/react-query';

const fetchAllCategories = async () => {
	const response: AxiosResponse<ICategory[]> = await server_api.get('/categories');
	return response.data;
};

export const useAllCategories = () => {
	return useQuery({
		queryKey: ['all-categories'],
		queryFn: fetchAllCategories,
		refetchOnWindowFocus: true,
	});
};
