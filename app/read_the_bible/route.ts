export async function fetchBiblePassage() {

    const options = {
  method: 'GET',
  headers: {
    'Authorization': 'SECRET_KEY',
    'Accept': 'application/json'
  }
};

  return fetch('https://api.youversion.com/v1/bibles/3034/passages/MAT.1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}