const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errData = await res.json();
      throw errData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

// const api = {
//   fetchCats: (keyword) => {
//     return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
//       res.json()
//     );
//   },
// };

const api = {
  fetchCats: (keyword) => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
};

export default api;