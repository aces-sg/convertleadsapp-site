import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SIZE } from "../../constants";

type BookingValuesType = {
  address_id: string;
  lat: number;
  lng: number;
  country: string;
  address: string;
  addressUnit: string;
  propertyType: "residential" | "commercial";
  spaces: {
    name: string;
    size: number;
    sizeUnit: "ft²" | "m²";
  }[];
  scheduledDay: Date | null;
  contactType: "me" | "other";
  contactDetail: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  contactWillBeOnSite: boolean;
  contactHelperText: string;

  currentTab: "property" | "schedule" | "contact" | "review";
  completedProperty: number; // 0-location, 1-capture, 2-property
  currentPropertyPart: number;

  isMobile: boolean;
};

type BookingContextType = {
  values: BookingValuesType;
  setValues: any;
};

const initialValues: BookingValuesType = {
  address_id: "",
  lat: 1.3521,
  lng: 103.8198,
  country: "",
  address: "",
  addressUnit: "",
  propertyType: "commercial",
  spaces: [],
  scheduledDay: null,
  contactType: "me",
  contactDetail: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  contactWillBeOnSite: true,
  contactHelperText: "",

  currentTab: "property",
  completedProperty: 0,
  currentPropertyPart: 0,

  isMobile: false,
};

export const BookingContext = createContext<BookingContextType>({
  values: initialValues,
  setValues: () => {},
});

const BookingProvider = ({ children }) => {
  const [values, setValues] = useState(initialValues);

  const onResize = useCallback(() => {
    const width = window.innerWidth;
    const isMobile = width <= SIZE.tablet;

    setValues((v) => ({
      ...v,
      isMobile,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onResize();
    }, 300);

    return () => clearTimeout(timer);
  }, [onResize]);

  const value = useMemo(
    () => ({
      values,
      setValues,
    }),
    [values, setValues]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
