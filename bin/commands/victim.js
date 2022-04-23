"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
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
exports.Victim = void 0;
const framework_1 = require("@sapphire/framework");
const mongoose_1 = __importDefault(require("mongoose"));
const victim_1 = require("../schema/victim");
class Victim extends framework_1.Command {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { name: 'victim', description: 'kicks the victim without mercy' }));
    }
    ;
    messageRun(message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect(process.env.Mongoose);
            const victimUser = message.mentions.members.first();
            if (!victimUser == null)
                return;
            const find = yield victim_1.victim.findOne({ id: victimUser.id, guildId: message.guild.id });
            if (find) {
                return message.reply('brother that guy is already in our hitlist');
            }
            ;
            try {
                yield new victim_1.victim({
                    _id: victimUser === null || victimUser === void 0 ? void 0 : victimUser.id,
                    guildId: (_a = message.guild) === null || _a === void 0 ? void 0 : _a.id
                }).save();
            }
            catch (e) {
                console.error(e);
            }
            finally {
                mongoose_1.default.connection.close();
            }
        });
    }
}
exports.Victim = Victim;
