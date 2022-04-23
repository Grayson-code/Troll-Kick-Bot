"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.victim = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model = new mongoose_1.default.Schema({
    _id: String,
    guildId: String,
});
exports.victim = mongoose_1.default.model('victim', model);
