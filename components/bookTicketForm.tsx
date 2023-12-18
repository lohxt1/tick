import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/tailwind";
import { bookTicket } from "actions/bookTicket";
import { BookTicketSchema, bookTicketSchema } from "@/lib/validations/bookTicket";

const BookTicketForm = ({ setData, seat, user }) => {
  const { id: selectedSeatId, seat_number: selectedSeatNumber, seat_type: selectedSeatType, bus_id: selectedBusId } = seat || {};

  const [isLoading, toggleLoading] = useState<boolean>(false);

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookTicketSchema>({
    resolver: zodResolver(bookTicketSchema),
    defaultValues: {
      seat_id: selectedSeatId,
      bus_id: selectedBusId,
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (isLoading) return;
    toggleLoading(true);
    startTransition(async () => {
      const bookedTicketData = await bookTicket(data);
      if (bookedTicketData?.ticketData) {
        setData(bookedTicketData);
      }
      router.refresh();
      await new Promise((resolve) => setTimeout(resolve, 250));
      reset();
      toggleLoading(false);
    });
  });

  return (
    <div className="flex h-full w-full flex-col justify-start gap-y-4">
      <div className="flex flex-col">
        <div className="text-xl text-tx-two underline underline-offset-2">Book Ticket</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Seat Number</div>
        <div className="text-xl text-tx-one">{selectedSeatNumber}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Seat Type</div>
        <div className="text-xl capitalize text-tx-one">{selectedSeatType}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-xs text-tx-three">Seat ID</div>
        <div className="text-xl text-tx-one">{selectedSeatId}</div>
      </div>
      <form onSubmit={onSubmit} className="mt-12 flex flex-col gap-y-4">
        <input type="hidden" id="seat_id" value={selectedSeatId} {...register("seat_id")} />
        <input type="hidden" id="bus_id" value={selectedBusId} {...register("bus_id")} />
        <div className="flex flex-col gap-y-1">
          <div className="text-xs text-tx-three">First Name</div>
          <input
            type="text"
            placeholder="Enter First Name"
            className="border border-sh-one bg-transparent p-2"
            id="first_name"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            {...register("first_name")}
          />
          <div className="h-4 text-xs text-re-one">{errors?.["first_name"]?.["message"] as string}</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-xs text-tx-three">Last Name</div>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="border border-sh-one bg-transparent p-2"
            id="last_name"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            {...register("last_name")}
          />
          <div className="h-4 text-xs text-re-one">{errors?.["last_name"]?.["message"] as string}</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-xs text-tx-three">Email</div>
          <input
            type="text"
            placeholder="Enter Email"
            className="border border-sh-one bg-transparent p-2"
            id="email"
            autoCapitalize="none"
            autoCorrect="off"
            disabled={isLoading}
            {...register("email")}
          />
          <div className="h-4 text-xs text-re-one">{errors?.["email"]?.["message"] as string}</div>
        </div>
        <div className="mt-2 flex flex-row">
          <button
            className={cn(
              "mr-4 flex h-10 w-fit cursor-pointer cursor-pointer flex-row items-center gap-x-2 rounded-md border border-gr-one bg-gr-one/30 px-2 px-4 py-1 focus:outline-none",
              isLoading ? "opacity-50" : "",
            )}
            disabled={isLoading}
          >
            {isLoading && <div className="h-8 w-8 animate-spin">*</div>}
            Book
          </button>
          {/* <button
            className={cn(
              "mr-4 flex h-10 w-fit cursor-pointer cursor-pointer flex-row items-center gap-x-2 rounded-md bg-re-one/30 px-2 px-4 py-1 focus:outline-none",
              isLoading ? "opacity-50" : "",
            )}
            onClick={() => {
            }}
          >
            Discard
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default BookTicketForm;
