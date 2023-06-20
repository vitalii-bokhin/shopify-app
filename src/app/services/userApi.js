import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test-75e6c-default-rtdb.europe-west1.firebasedatabase.app/users/',
    }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => ({
                url: '0/data.json',
                params: {
                    auth: 't4NexdBMdNwTjEYk2pWuUuktCeEU1G1uFzLzpETM',
                },
            }),
        }),
    }),
});

export const { useGetDataQuery } = userApi;