const _buses = ["bx_1", "bx_2", "bx_3", "bx_4", "bx_5", "bx_6"];

let _seats = [
  ...Array.from({ length: 40 }).map((_, idx) => `stx_up_${idx + 1}`),
  ...Array.from({ length: 40 }).map((_, idx) => `stx_low_${idx + 1}`),
];

_seats = _seats.map((seat, idx) => ({ id: seat, seat_type: seat.split("_")[1], seat_number: `${seat.split("_")[1][0]}${seat.split("_")[2]}` }));

const buses = _buses.map((bus) => ({ id: bus, seats: _seats.map((seat) => seat?.id).toString() }));

const seats = _buses.map((bus) => _seats.map((seat) => ({ ...seat, id: `${bus}_${seat?.id}`, bus_id: bus }))).flat();

const { exec } = require("child_process");
const { promisify } = require("util");
const execPromise = promisify(exec);

const busesSelectQuery = `npx wrangler d1 execute DB --local --command "select count(*) from bus"`;
const seatsSelectQuery = `npx wrangler d1 execute DB --local --command "select count(*) from seat"`;

async function runCommands() {
  try {
    const busesColumns = Object.keys(buses[0]);
    const _busesInsertQuery = `INSERT INTO bus (${busesColumns.join(", ")}) VALUES`;
    const _busesValuesQuery = buses.map((_) => `('${Object.values(_).join("', '")}')`).join(", ");
    const busesInsertQuery = `${_busesInsertQuery} ${_busesValuesQuery};`;

    const busesInsert = `npx wrangler d1 execute DB --local --command "${busesInsertQuery}"`;

    const { stdout: busesInsertOutput } = await execPromise(busesInsert);

    console.log("buses insert done", busesInsertOutput);

    const { stdout: busesSelectOutputAfter } = await execPromise(busesSelectQuery);

    console.log("+-----+-----+-----+-----+-----+-----+-----+-----+-----");
    console.log("buses selectOutputAfter", busesSelectOutputAfter);
    console.log("+-----+-----+-----+-----+-----+-----+-----+-----+-----");

    const seatsColumns = Object.keys(seats[0]);
    const _seatsInsertQuery = `INSERT INTO seat (${seatsColumns.join(", ")}) VALUES`;
    const _seatsValuesQuery = seats.map((_) => `('${Object.values(_).join("', '")}')`).join(", ");
    const seatsInsertQuery = `${_seatsInsertQuery} ${_seatsValuesQuery};`;

    const seatsInsert = `npx wrangler d1 execute DB --local --command "${seatsInsertQuery}"`;

    const { stdout: seatsInsertOutput } = await execPromise(seatsInsert);

    console.log("seats insert done", seatsInsertOutput);

    const { stdout: seatsSelectOutputAfter } = await execPromise(seatsSelectQuery);

    console.log("+-----+-----+-----+-----+-----+-----+-----+-----+-----");
    console.log("seats selectOutputAfter", seatsSelectOutputAfter);
    console.log("+-----+-----+-----+-----+-----+-----+-----+-----+-----");
  } catch (error) {
    throw new Error(error);
  }
}

try {
  runCommands();
} catch (error) {
  console.log("error", error);
}
