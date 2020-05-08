import axios from 'axios';

const OPTIONS_DEFAULT = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const OPTIONS_AUTH = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsInBob25lIjoiKzg0MjE3MTk5NzExIiwiZW1haWwiOm51bGwsIm5hbWUiOiJkYXQgMjE3IiwiYXZhdGFyIjoiaHR0cHM6Ly9jZG4uY3NlbGwuY29tL3VwbG9hZC9kZWZhdWx0L2F2YXRhci1kZWZhdWx0LmpwZyIsImdyb3VwIjoidXNlciIsImV4cCI6MTU4ODY0Nzk0OSwiaWF0IjoxNTg4NTYxNTQ5LCJhdWQiOiJ3ZWIiLCJpc3MiOiJhdXRoLmNzZWxsLnZuL3VzZXIvd2ViIn0.d8UPOHS9E4AFne0YufYbwrMSKXTUsE3gxDHKgl-cgVy9Z-E_w4dUTmi0x045n8N3Z7xllAYDjhGL_zaEyMpkLKzu-JV8zswNhl0wRSul42fA_Xal9RStrT7lFOznbIEnK8KmLUJ-Ovsj_CaJDHd4EU1eI8qnTRCRcQf4VgnY3sekBlGgTTxuyv3PwD62A0tuEK8UgIz0LDNX-JuqvmmiSv_dd0pG6SuKyt3ZBJ8KY55RkSUKaArS1RWHwKUW5tnvfoH0SFo8YNbiyWtOZxwl7BI9zILCmPA0uzQCvhbJfgj620pOQIvyj13G64Kn8CTBITNQMB7nPaM2QDJw5VYNHw',
  },
};

const serviceClient = {
  refreshToken: (url, data) => {
    return axios.post(url, data, OPTIONS_DEFAULT);
  },
  get: (url) => {
    return axios.get(url, OPTIONS_AUTH);
  },
};

export default serviceClient;
