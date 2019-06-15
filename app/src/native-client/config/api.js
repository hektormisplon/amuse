import { Constants } from 'expo';
const { manifest } = Constants

const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:8080`)
    : // :   `http://10.130.76.9:8080/`
      `http://192.168.0.163:8080`

export default api
