import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const clientApi = createApi({
        reducerPath: 'clientApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/'}),
        tagTypes: ['Client'],
        endpoints: (builder) => ({
            getClient: builder.query({
                query: () => ({url: 'clients', method: 'GET'}),
                tagTypes: ['Client'],
            }),
            createClient: builder.mutation({
                query: (formPayload) => ({
                  url: `comment`,
                  method: 'POST',
                  body: formPayload,
                }),
                invalidatesTags: ['Client'],
              }),
            deleteClient: builder.mutation({
            query: (id) => ({
                url: `delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Client'],
            }),
            updateClient: builder.mutation({
                query: (id, formPayload) => ({
                  url: `client/${id}`,
                  method: 'PUT',
                  body: formPayload,
                }),
                invalidatesTags: ['Client'],
              }),
        }),
    })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClientQuery, useCreateClientMutation, useDeleteClientMutation, useUpdateClientMutation } = clientApi