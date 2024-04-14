export function requestToServer(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43354074-012c59d6306474dc1e40056e0';

  const searchParams = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    key: API_KEY,
    per_page: 9,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
