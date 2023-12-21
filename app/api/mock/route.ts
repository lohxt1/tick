// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { _db } from "@/lib/db";
import { buses, seats } from "@/lib/db/schema";

const __buses = ["bx_1", "bx_2", "bx_3", "bx_4", "bx_5", "bx_6"];

const pz = (val) => `0${val}`.slice(-2);

let __seats = [
  ...Array.from({ length: 40 }).map((_, idx) => `stx_up_${pz(idx + 1)}`),
  ...Array.from({ length: 40 }).map((_, idx) => `stx_low_${pz(idx + 1)}`),
];

__seats = __seats.map((seat, idx) => ({ id: seat, seat_type: seat.split("_")[1], seat_number: `${seat.split("_")[1][0]}${seat.split("_")[2]}` }));

const _buses = __buses.map((bus) => ({ id: bus, seats: __seats.map((seat) => seat?.id).toString() }));

const _seats = __buses.map((bus) => __seats.map((seat) => ({ ...seat, id: `${bus}_${seat?.id}`, bus_id: bus }))).flat();

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    // const rundone = await runCommands();
    const busesDelete = await _db.delete(buses);
    const seatsDelete = await _db.delete(seats);
    const busesInsert = await _db.insert(buses).values(_buses);
    const seatsInsert = await _db.insert(seats).values(_seats);
    return NextResponse.json({
      x: 1,
      busesDelete,
      seatsDelete,
      busesInsert,
      seatsInsert,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
