"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItems = exports.getDefaultGameVersion = void 0;
const axios_1 = __importDefault(require("axios"));
const getDefaultGameVersion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get('https://api.maplestory.net/version/default');
    if (response.status != 200) {
        console.log("Request to Maplestory API failed.");
        return res.status(500);
    }
    console.log(response.data);
    return res.status(200);
});
exports.getDefaultGameVersion = getDefaultGameVersion;
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*const payload = {
        page:,
        maxEntries:,
        version:,
        subVersion:,
        locale:,
        sortBy:,
        name:,
        nameText:,
        overallCategory:,
        overallCategoryText:,
        category:,
        categoryText:,
        subcategory:,
        subcategoryText:,
        minLevel:,
        maxLevel:,
        cash:,
        gender:
    }*/
    const response = yield axios_1.default.get('https://api.maplestory.net/items');
});
exports.getAllItems = getAllItems;
