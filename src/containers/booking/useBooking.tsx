import { useContext } from "react";
import { BookingContext } from "./BookingContext";

export const useBooking = () => {
  const { values, setValues } = useContext(BookingContext) || {};

  return { values, setValues };
};

export default useBooking;
