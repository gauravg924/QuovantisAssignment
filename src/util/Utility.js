import { Dimensions, Platform, PixelRatio } from 'react-native';
import { serviceUrl } from '../constants/ServiceUrl';

exports.apiCall = function (url, body, method) {
  const requestUrl = `${serviceUrl.apiUrl}${url}`;
  let headers = {
    'Content-Type': 'application/json',
  };

  return fetch(requestUrl, {
    method: method,
    headers,
    body: body
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log('error at utility in apiCall at catch: ', err);
      return { error: true, errorMessage: err };
    });
};
