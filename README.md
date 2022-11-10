# Hello World by temporal tls cloud

### Running this sample

- generate certificates via this doc https://hub.docker.com/r/temporalio/client-certificate-generation.
  - use `ca` name for the root certificate
  - use `client` name for the end-entity certificate
  - copy them to the `./src/cert` folder
- define `ca` certificate in temporal cloud
- define `address` and `namespace` in `./src/env.json`
- `npm i` to install dependencies.
- `npm run start` to start the Worker.
- in another shell, `npm run workflow` to run the Workflow Client.

the Workflow should return:

```bash
Hello, Temporal!
```
