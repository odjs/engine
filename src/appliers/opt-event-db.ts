import eventOptionDB from "../dbs/db-event";
import createDBOptionApplier from "./opt-create-db";

const eventDBOptionApplier = createDBOptionApplier<EventTarget>(
  eventOptionDB,
);

export default eventDBOptionApplier;
