import { Router } from "express";
import {
    create,
    getAll,
    getDetail,
    remove,
    update,
} from "../controllers/stores.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const routerStores = Router();

routerStores.get("/", getAll);
routerStores.get("/:id", getDetail);
routerStores.post("/", checkPermission, create);
routerStores.put("/:id", checkPermission, update);
routerStores.delete("/:id", checkPermission, remove);

export default routerStores;
