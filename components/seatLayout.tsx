import { cn } from "@/utils/tailwind";
import Seat from "./seat";

const SeatLayout = ({ upperSeats, lowerSeats }) => {
  return (
    <div className="col-span-3 flex h-screen w-full flex-col justify-start gap-y-4 overflow-x-hidden overflow-y-scroll p-8">
      <div className="flex w-full flex-col">
        <div className="py-4 text-sm text-tx-one">Upper Deck</div>
        <div
          className="flex grid w-full flex-row items-center gap-x-2 gap-y-2 rounded-md border border-sh-one/30 p-8 py-12"
          style={{ gridTemplateColumns: "repeat(14, 1fr)" }}
        >
          <div className="flex grid flex-row gap-x-1 gap-y-4" style={{ gridTemplateColumns: "repeat(13, 1fr)", gridColumn: "span 13 / span 13" }}>
            {upperSeats.slice(0, 39).map((seat, idx) => (
              <div
                key={`seat_${idx}`}
                className={cn(
                  "flex h-[30px] max-w-[70px] items-center justify-center border border-sh-two text-xs text-tx-one",
                  idx > 25 && idx < 39 ? "mt-8" : "",
                )}
              >
                <Seat {...seat} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <div className="my-auto flex h-[60px] max-w-[30px] items-center border border-sh-two text-xs text-tx-one">
              <Seat {...upperSeats[39]} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="py-4 text-sm text-tx-one">Lower Deck</div>
        <div
          className="flex grid w-full flex-row items-center gap-x-2 gap-y-2 rounded-md border border-sh-one/30 p-8 py-12"
          style={{ gridTemplateColumns: "repeat(14, 1fr)" }}
        >
          <div className="flex grid flex-row gap-x-1 gap-y-4" style={{ gridTemplateColumns: "repeat(13, 1fr)", gridColumn: "span 13 / span 13" }}>
            {lowerSeats.slice(0, 39).map((seat, idx) => (
              <div
                key={`seat_${idx}`}
                className={cn(
                  "flex h-[30px] max-w-[70px] items-center justify-center border border-sh-two text-xs text-tx-one",
                  idx > 25 && idx < 39 ? "mt-8" : "",
                )}
              >
                <Seat {...seat} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <div className="my-auto flex h-[60px] max-w-[30px] items-center border border-sh-two text-xs text-tx-one">
              <Seat {...lowerSeats[39]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
