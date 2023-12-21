const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

//메서드가 없기 때문에 get 이 기본값임, url에서 받아온 정보값을 던짐
// fetch(resorce(url),options(method가 들어감))

export const hobby = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.header,
    },
  };
  const response = await fetch(url, restOptions); //await 이 떨어져야 아래의 조건문이 실행됨

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

const data = await hobby({
  url: END_POINT,
});

// console.log(data.data); //async function 이기 때문에 promise를 반환해서 await를 붙여야함.

// tiger.get()
// tiger.post()
// tiger.put()
// tiger.delete()

hobby.get = (url, options) => {
  return hobby({
    url,
    ...options,
  });
};

hobby.post = (url, body, options) => {
  return hobby({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

hobby.delete = (url, options) => {
  return hobby({
    method: 'DELETE',
    url,
    ...options,
  });
};

hobby.put = (url, body, options) => {
  return hobby({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// tiger.get('www.naver.com',{})
