import createDBOptionApplier from "./opt-create-db";
import eventOptionDB from "../dbs/db-event";

const eventDBOptionApplier = createDBOptionApplier<EventTarget>(
  eventOptionDB,
);

export default eventDBOptionApplier;
