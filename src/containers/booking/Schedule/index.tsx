import { Button, Heading, Text } from "grommet";
import { Add, Next, Previous, Subtract } from "grommet-icons";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useBooking from "../useBooking";
import { DateTime } from "luxon";
import classNames from "classnames";

import "./Schedule.css";

const MAX_SCHEDULE_DAYS = 15;
const DAYS_IN_RANGE = 7;
const DAYS_IN_RANGE_MOBILE = 4;

type TimeZone = {
  dstOffset: number;
  rawOffset: number;
  status: string;
  timeZoneId: string;
  timeZoneName: string;
};

const Schedule = () => {
  const { values, setValues } = useBooking();
  const [startDate, setStartDate] = useState(new Date());
  const [showMoreSlots, setShowMoreSlots] = useState(false);
  const [timeZoneInfo, setTimeZoneInfo] = useState<TimeZone>();
  console.log("time is", timeZoneInfo);

  useEffect(() => {
    const fn = async () => {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${values.lat},${values.lng}&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&timestamp=1331161200`
      );
      if (res.ok) {
        const result = await res.json();
        setTimeZoneInfo(result);
      }
    };
    fn();
  }, [values.lat, values.lng]);

  useEffect(() => {
    if (!values.scheduledDay) {
      const date = DateTime.now()
        .plus({ day: 1 })
        .startOf("day")
        .toJSDate();
      setStartDate(date);
      setValues((v) => ({
        ...v,
        scheduledDay: date,
      }));
    } else {
      setStartDate(values.scheduledDay);
    }
  }, []);

  useEffect(() => {
    setValues((v) => ({
      ...v,
      scheduledDay: startDate,
    }));
  }, [startDate]);

  const daysCount = useMemo(
    () => (values.isMobile ? DAYS_IN_RANGE_MOBILE : DAYS_IN_RANGE),
    [values.isMobile]
  );

  const handleDayPick = useCallback(
    (date) => () => {
      setValues((v) => ({
        ...v,
        scheduledDay: DateTime.fromJSDate(date)
          .startOf("day")
          .toJSDate(),
      }));
    },
    []
  );

  const handleTimePick = useCallback(
    (hour, minute) => () => {
      setValues((v) => ({
        ...v,
        scheduledDay: DateTime.fromJSDate(v.scheduledDay)
          .set({
            hour,
            minute,
          })
          .toJSDate(),
      }));
    },
    []
  );

  const isDateSelected = useMemo(() => {
    const hour = DateTime.fromJSDate(values.scheduledDay).hour;
    return hour >= 7 && hour <= 18;
  }, [values.scheduledDay]);

  const handleNext = useCallback(() => {
    setValues((s) => ({
      ...s,
      currentTab: "contact",
    }));
  }, []);

  const prevable = useMemo(() => {
    if (!startDate) return false;
    return (
      DateTime.fromJSDate(startDate).day > DateTime.now().day + 1
    );
  }, [startDate]);

  const nextable = useMemo(() => {
    if (!startDate) return false;
    return (
      DateTime.fromJSDate(startDate).day <
      DateTime.now().day + MAX_SCHEDULE_DAYS
    );
  }, [startDate]);

  const handlePrevDateRange = useCallback(() => {
    const date = DateTime.fromJSDate(startDate).minus({
      day: daysCount,
    });
    const minDate = DateTime.now().plus({ day: 1 }).startOf("day");
    setStartDate(
      date.diff(minDate, "days").as("days") > 0
        ? date.toJSDate()
        : minDate.toJSDate()
    );
  }, [startDate]);

  const handleNextDateRange = useCallback(() => {
    const date = DateTime.fromJSDate(startDate).plus({
      day: daysCount,
    });
    const maxDate = DateTime.now().plus({ day: 21 }).startOf("day");
    setStartDate(
      date.diff(maxDate, "days").as("days") < 0
        ? date.toJSDate()
        : maxDate.toJSDate()
    );
  }, [startDate]);

  const timeZoneString = useMemo(() => {
    if (!timeZoneInfo) return "";
    const offset = timeZoneInfo.rawOffset / 3600;
    let result = `(${timeZoneInfo.timeZoneId} - GMT`;
    if (offset >= 0) result += "+";
    result += offset.toString() + ")";
    return result;
  }, [timeZoneInfo]);

  return (
    <div>
      <Heading level="3">Choose a start time</Heading>
      <Text size="medium">
        Choose a time for your appointment to start. The site visit
        will take approximately 60 minutes.
      </Text>

      <div className="scheduler-week-nav">
        <Button
          plain
          icon={<Previous size="small" />}
          style={{ visibility: prevable ? "visible" : "hidden" }}
          onClick={handlePrevDateRange}
        />
        <div className="scheduler-date-range">
          {DateTime.fromJSDate(startDate).toFormat("LLL dd")} -{" "}
          {DateTime.fromJSDate(startDate)
            .plus({ day: daysCount - 1 })
            .toFormat("LLL dd")}
        </div>
        <Button
          plain
          icon={<Next size="small" />}
          style={{ visibility: nextable ? "visible" : "hidden" }}
          onClick={handleNextDateRange}
        />
      </div>
      <div className="scheduler-timezone-message">
        {`Times available based on your property’s timezone ${timeZoneString}.`}
      </div>

      <div className="capturesvc-scheduler">
        <div className="scheduler-dates">
          {new Array(daysCount).fill(0).map((v, i) => {
            const date = DateTime.fromJSDate(startDate).plus({
              day: i,
            });
            return (
              <div
                key={date.toISO()}
                className={classNames("scheduler-date", {
                  "is-selected": DateTime.fromJSDate(
                    values.scheduledDay
                  ).hasSame(date, "day"),
                })}
                onClick={handleDayPick(date.toJSDate())}
              >
                <div className="date-weekday">
                  {date.toFormat("EEE")}
                </div>
                <div className="date-day">{date.toFormat("dd")}</div>
              </div>
            );
          })}
        </div>
        <div className="scheduler-content">
          <div className="scheduler-slots-list">
            {new Array(showMoreSlots ? 23 : 7).fill(0).map((v, i) => {
              const date = DateTime.fromJSDate(values.scheduledDay)
                .startOf("day")
                .plus({ hour: 7 })
                .plus({ minute: 30 * i });

              return (
                <div
                  key={`slot-${i}`}
                  className={classNames("scheduler-slot", {
                    "is-selected":
                      DateTime.fromJSDate(
                        values.scheduledDay
                      ).hasSame(date, "hour") &&
                      DateTime.fromJSDate(
                        values.scheduledDay
                      ).hasSame(date, "minute"),
                  })}
                  onClick={handleTimePick(date.hour, date.minute)}
                >
                  {date.toFormat("hh:mm a")}
                </div>
              );
            })}
          </div>
          <div className="scheduler-slots-list-actions">
            <Button
              label={showMoreSlots ? "Less" : "More"}
              icon={
                showMoreSlots ? (
                  <Subtract size="small" />
                ) : (
                  <Add size="small" />
                )
              }
              size="small"
              onClick={() => setShowMoreSlots((s) => !s)}
            />
          </div>
        </div>
      </div>
      {isDateSelected && (
        <div className="scheduler-valid-message">
          Your appointment will be scheduled for{" "}
          <b>
            {DateTime.fromJSDate(values.scheduledDay) // Set the desired locale
              .toFormat("EEEE, LLLL dd, yyyy 'at' hh:mm a")}
          </b>
        </div>
      )}
      <div className="actions">
        <Button
          label="Back"
          size="large"
          onClick={() =>
            setValues((s) => ({
              ...s,
              currentTab: "property",
            }))
          }
        ></Button>
        <Button
          label="Next"
          size="large"
          primary
          disabled={!isDateSelected}
          onClick={handleNext}
        ></Button>
      </div>
    </div>
  );
};

export default Schedule;
