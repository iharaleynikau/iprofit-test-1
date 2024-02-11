const ajaxRequest = async (url, method = 'GET', body = null, headers = {}) => {
  let originLocation = '';

  if (window.location.origin === 'http://localhost:8080') {
    originLocation = 'http://localhost:9090';
  }

  const request = await fetch(originLocation + url, {
    method,
    body,
    headers
  });

  return request.json();
};

export default ajaxRequest;
