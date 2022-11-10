import {NativeConnection, Worker} from '@temporalio/worker';
import * as activities from './activities';
import {getOptions} from "./get-options";
import {env} from "./settings";

async function run() {
  const options = getOptions()

  console.log('-- trying to connect')

  const connection = await NativeConnection.connect(options)

  console.log('-- connection established')

  const worker = await Worker.create({
    connection,
    workflowsPath: require.resolve('./workflows'),
    activities,
    namespace: env.namespace,
    taskQueue: env.taskQueue,
  });

  console.log('-- worker created')

  await worker.run();

  console.log('-- worker run')
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
