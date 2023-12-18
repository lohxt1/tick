const { exec } = require("child_process");
const { promisify } = require("util");
const execPromise = promisify(exec);

const busesDeleteQuery = `npx wrangler d1 execute DB --local --command "delete from bus"`;
const seatsDeleteQuery = `npx wrangler d1 execute DB --local --command "delete from seat"`;
const ticketsDeleteQuery = `npx wrangler d1 execute DB --local --command "delete from ticket"`;

async function runCommands() {
  try {
    const { stdout: busesDeleteOutput } = await execPromise(busesDeleteQuery);
    console.log("buses delete done", busesDeleteOutput);
    const { stdout: seatsDeleteOutput } = await execPromise(seatsDeleteQuery);
    console.log("seats delete done", seatsDeleteOutput);
    const { stdout: ticketsDeleteOutput } = await execPromise(ticketsDeleteQuery);
    console.log("tickets delete done", ticketsDeleteOutput);
  } catch (error) {
    throw new Error(error);
  }
}

try {
  runCommands();
} catch (error) {
  console.log("error", error);
}
