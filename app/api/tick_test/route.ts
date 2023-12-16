import { _db } from "lib/db";
import { buses, seats } from "lib/db/schema";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const busesData = await _db.select().from(buses);
    const seatsData = await _db.select().from(seats);
    return NextResponse.json({
      x: 1,
      busesData,
      seatsData,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
