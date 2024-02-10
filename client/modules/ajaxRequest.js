const ajaxRequest = async (url, method = 'GET', body = null, headers = {}) => {
  const request = await fetch(url, {
    method,
    body,
    headers
  });

  return request.json();
};

export default ajaxRequest;
