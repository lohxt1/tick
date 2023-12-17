import { cn } from "@/utils/tailwind";
import Seat from "./seat";

const SeatLayout = ({ upperSeats, lowerSeats }) => {
  return (
    <div className="col-span-3 h-screen w-full px-4">
      <div className="py-1 text-sm text-tx-one">Upper Deck</div>
      <div
        className="flex grid w-full flex-row items-center gap-x-2 gap-y-2 border border-sh-three p-8"
        style={{ gridTemplateColumns: "repeat(14, 1fr)" }}
      >
        <div className="flex grid flex-row gap-x-4 gap-y-4" style={{ gridTemplateColumns: "repeat(13, 1fr)", gridColumn: "span 13 / span 13" }}>
          {upperSeats.slice(0, 39).map((seat, idx) => (
            <div
              key={`seat_${idx}`}
              className={cn(
                "flex h-[30px] max-w-[70px] items-center justify-center border border-sh-two text-xs text-tx-two",
                idx > 25 && idx < 39 ? "mt-8" : "",
              )}
            >
              <Seat {...seat} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <div className="my-auto flex h-[70px] max-w-[30px] items-center border border-sh-two px-1 text-xs text-tx-two">
            <Seat {...upperSeats[39]} />
          </div>
        </div>
      </div>
      <div className="mt-12 py-1 text-sm text-tx-one">Lower Deck</div>
      <div
        className="flex grid w-full flex-row items-center gap-x-2 gap-y-2 border border-sh-three p-8"
        style={{ gridTemplateColumns: "repeat(14, 1fr)" }}
      >
        <div className="flex grid flex-row gap-x-4 gap-y-4" style={{ gridTemplateColumns: "repeat(13, 1fr)", gridColumn: "span 13 / span 13" }}>
          {lowerSeats.slice(0, 39).map((seat, idx) => (
            <div
              key={`seat_${idx}`}
              className={cn(
                "flex h-[30px] max-w-[70px] items-center justify-center border border-sh-two text-xs text-tx-two",
                idx > 25 && idx < 39 ? "mt-8" : "",
              )}
            >
              <Seat {...seat} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <div className="my-auto flex h-[70px] max-w-[30px] items-center border border-sh-two px-1 text-xs text-tx-two">
            <Seat {...lowerSeats[39]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
