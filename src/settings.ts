const defaultEnv = require('./env.json')


let usedEnv = defaultEnv

try {
  const localEnv = require('./env.local.json')
  usedEnv = {
    ...defaultEnv,
    ...localEnv,
  }
} catch (e) {}


console.log('--- usedEnv', usedEnv)

export const env: {
  "address": string,
  "connectTimeout": number,
  "namespace": string,
  "taskQueue": string
} = {
  ...usedEnv
}
