import eventOptionDB from "../dbs/db-event";
import createDBOptionApplier from "./opt-create-db";

const eventDBOptionApplier = createDBOptionApplier<EventTarget>(
  "event-db",
  eventOptionDB,
);

export default eventDBOptionApplier;
