import objectOptionDB from "../dbs/db-object";
import { ParamTarget } from "../types";
import createDBOptionApplier from "./opt-create-db";

const objectDBOptionApplier = createDBOptionApplier<ParamTarget>(objectOptionDB);

export default objectDBOptionApplier;
