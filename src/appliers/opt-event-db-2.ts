import eventOptionDB from "../dbs/db-event";
import createDBOptionApplier from "./opt-create-db-2";

const eventDBOptionApplier = createDBOptionApplier<EventTarget>(
  "event-db",
  eventOptionDB,
);

export default eventDBOptionApplier;
