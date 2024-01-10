import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starWarsAPI = createApi({
  reducerPath: 'starWarsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const firstPage = await fetchWithBQ('people/');
        if (firstPage.error) {
          return { error: firstPage.error };
        }
        const { count = 0, results = [] } = firstPage.data;
        const numberOfPagesLeft = Math.ceil(
          (count - 1) / (results.length ?? 1),
        );
        if (numberOfPagesLeft <= 0) {
          return { data: firstPage.data };
        }
        // Create a request array for remaining pages
        const pagePromises = [];
        for (let i = 2; i <= numberOfPagesLeft; i++) {
          pagePromises.push(fetchWithBQ(`people?page=${i}`));
        }
        // Fetch remaining pages concurrently
        const pages = await Promise.all(pagePromises);
        // Reduce all resolved pages into a single response object
        return pages.reduce(
          (response, page) => {
            if (page.error) {
              response.error = page.error;
            } else {
              response.data.results.push(...page.data.results);
            }
            return response;
          },
          { data: firstPage.data },
        );
      },
    }),
  }),
});

export const { useGetPeopleQuery } = starWarsAPI;
