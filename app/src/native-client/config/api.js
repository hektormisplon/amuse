import { Constants } from 'expo'
const { manifest } = Constants

const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:8080`)
    : `http://192.168.20.116:8080`

export default api
