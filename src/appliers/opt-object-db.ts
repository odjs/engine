import createDBOptionApplier from "./opt-create-db";
import objectOptionDB from "../dbs/db-object";
import { ParamTarget } from "../types";

const objectDBOptionApplier = createDBOptionApplier<ParamTarget>(
  objectOptionDB,
);

export default objectDBOptionApplier;
