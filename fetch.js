const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {'Content-Type': 'application/json'} : {},
  }).then(res => {
    if (res.status >= 400) {  // !response.ok
      return res.json().then(errorResData => {
        const error = new Error('ooops');
        error.data = errorResData;
        throw error;
      });
    }
    return res.json();
  });
};

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
    console.log(responseData);
  });
};

const sendData = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: 'eve.holt@reqres.in',
    //password: 'pistol'
  })
    .then(responseData => {
      console.log(responseData);
    })
    .catch(err => {
      console.log(err, err.data);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
