import {join, resolve} from "path";
import fs from "fs";
import {env} from "./settings";

export function getOptions(){
  const dir = resolve(__dirname)

  const tls = {
    clientCertPair: {
      crt: fs.readFileSync(join(dir, './cert/client.pem')),
      key: fs.readFileSync(join(dir, './cert/client.key')),
    },
    serverRootCACertificate: fs.readFileSync(join(dir, './cert/ca.pem')),
  }

  const options = {
    connectTimeout: env.connectTimeout,
    address: env.address,
    tls
  }
  console.log('-- options', options)

  return options
}
