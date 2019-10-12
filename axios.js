const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  axios.get('https://reqres.in/api/users').then(res => {
    console.log(res);
  });
};

const sendData = () => {
  axios.post('https://reqres.in/api/register', {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err, err.response);
  });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
