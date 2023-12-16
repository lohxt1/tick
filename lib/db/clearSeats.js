const { exec } = require("child_process");
const { promisify } = require("util");
const execPromise = promisify(exec);

const busesDeleteQuery = `npx wrangler d1 execute DB --local --command "delete from bus"`;
const seatsDeleteQuery = `npx wrangler d1 execute DB --local --command "delete from seat"`;

async function runCommands() {
  try {
    const { stdout: busesDeleteOutput } = await execPromise(busesDeleteQuery);
    console.log("buses delete done", busesDeleteOutput);
    const { stdout: seatsDeleteOutput } = await execPromise(seatsDeleteQuery);
    console.log("seats delete done", seatsDeleteOutput);
  } catch (error) {
    throw new Error(error);
  }
}

try {
  runCommands();
} catch (error) {
  console.log("error", error);
}
