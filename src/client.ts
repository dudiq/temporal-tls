import { Connection, WorkflowClient } from '@temporalio/client';
import { example } from './workflows';
import {env} from "./settings";
import {getOptions} from "./get-options";

async function run() {
  const options = getOptions()

  console.log('-- trying to connect')

  // Connect to the default Server location (localhost:7233)
  const connection = await Connection.connect(options);

  console.log('-- connection established')

  const client = new WorkflowClient({
    connection,
    namespace: env.namespace,
  });

  const handle = await client.start(example, {
    // type inference works! args: [name: string]
    args: ['Temporal'],
    taskQueue: env.taskQueue,
    // in practice, use a meaningful business id, eg customerId or transactionId
    workflowId: `workflow-${Date.now()}`,
  });
  console.log(`-- Started workflow ${handle.workflowId}`);

  const res = await handle.result(); // Hello, Temporal!
  console.log('-- res', res);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
