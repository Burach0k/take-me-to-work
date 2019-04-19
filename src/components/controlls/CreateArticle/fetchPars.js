function fetchPars(url, body, metod) {
  return fetch(url, {
    body: JSON.stringify(body),
    mode: 'cors',
    method: metod,
    headers: { 'Content-Type': 'application/json' },
  }).then((req) => {
    if (req.status === 422) {
      const error = JSON.parse(req.statusText);
      const message = document.getElementById(`${error.errors[0].field}-message`);
      message.style.visibility = 'visible';
    } else return req;
  });
}

export default fetchPars;
