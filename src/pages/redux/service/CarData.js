import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const CarData = createApi({
    reducerPath: "schoolApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("Token");    
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ["Car"],
        endpoints: (builder) => ({
            getCar: builder.query({
                query: () => "car-detail/retrieve-all",
                providesTags: ['Car'],
            }),
            getCarId: builder.query({
                query: (id) => ({
                    url: `/retrieve/${id}`,
                    method: "GET",
                }),
                providesTags: (result, error, id) => [{ type: 'Car', id }],
            }),
        })
})

export const{useGetCarQuery,useGetCarIdQuery}=CarData