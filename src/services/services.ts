import axios from 'axios';

export const AxiosApiService = async (
  queryUrl: string,
  abortController: AbortController,
  wordSearchQuery: string | '' = ''
) => {
  const BASE_URL = `https://api.themoviedb.org/3/`;
  const API_KEY = `1f93214cb1bbadcc143eeb01d552ab8c`;

  const url = `${BASE_URL}${queryUrl}api_key=${API_KEY}&language=en-US${wordSearchQuery}`;

  const response = await axios.get(url, { signal: abortController.signal });

  return response.data;
};
