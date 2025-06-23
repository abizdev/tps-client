import { useQuery } from '@tanstack/react-query';
import { server_api } from '@shared/api/api';

export const usePopularBrands = () => {
  return useQuery({
    queryKey: ['popular-brands'],
    queryFn: () => server_api.get('/brands/popular'),
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });
};

export const useBrands = (page: number, limit: number) => {
  return useQuery({
    queryKey: ['brands', page, limit],
    queryFn: () => server_api.get('/brands', { params: { page, limit } }),
    select: (data) => data.data,
    keepPrefiousData: true,
  });
};
