"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const changing_room_controller_1 = require("../controllers/changing-room-controller");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    (0, changing_room_controller_1.getDefaultGameVersion)(req, res);
});
// module.exports = router
exports.default = router;
