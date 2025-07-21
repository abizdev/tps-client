import { server_api } from '@shared/api/api';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { IProduct } from '@entities/product';

interface IProductsParams {
	page?: number;
	limit?: number;
	category?: string;
	targetAudience?: string;
}

const fetchProducts = async (params: IProductsParams) => {
	const response: AxiosResponse<IProduct[]> = await server_api.get('/products', { params });
	return response.data;
};

export const useProductsQuery = (params: IProductsParams) => {
	return useQuery({
		queryKey: ['products', params.page, params.limit],
		queryFn: () => fetchProducts(params),
	});
};

const fetchProductsByTargetAudience = async (params: Omit<IProductsParams, 'category'>) => {
	const response: AxiosResponse<IProduct[]> = await server_api.get('/products', {
		params,
	});
	return response.data;
};

export const useProductsByTargetAudience =  (params: Omit<IProductsParams, 'category'>) => {
	return useQuery({
		queryKey: ['main-targetAudience-products', params.targetAudience],
		queryFn: () => fetchProductsByTargetAudience(params),
	});
};
