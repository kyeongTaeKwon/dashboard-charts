import { useQuery, useQueryClient, QueryFunction } from "@tanstack/react-query";

export const useMappedQuery = <T, R>(
  queryKey: string,
  mappedQueryKey: string,
  fetchFn: QueryFunction<T>,
  mapFn: (data?: T) => R
) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<T, Error>([queryKey], fetchFn, {
    refetchOnMount: false,
    retry: 0,
  });

  const mappedData = mapFn(data);
  if (mappedData) {
    queryClient.setQueryData([queryKey, mappedQueryKey], mappedData);
  }

  return { data: mappedData, isLoading, error };
};
