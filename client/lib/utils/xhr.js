/*
[readyState]
0:uninitialized
1:loading
2:loaded
3:interactive
4:complete
*/

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', //서버에 요청했을 때 권한 전부 허용 cors 오류 시 쓸 수 있는 방법
  },
}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value); //xhr에다가 header 내의 내용을 수정할 때 사용 xhr.open 후에 넣어줘야함
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr; //객체의 구조분해 할당
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response)); //string 타입을 JSON 파일로 해석해서 받기
      } else {
        onFail({ message: '에러가 발생했습니다' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// xhr({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
//   body: { name: 'tiger' },
// });

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};
xhr.post = (url, onSuccess, onFail, body) => {
  xhr({
    method: 'POST',
    url,
    onSuccess,
    onFail,
    body,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
