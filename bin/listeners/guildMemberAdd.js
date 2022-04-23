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
exports.GuildMemberAddListener = void 0;
const framework_1 = require("@sapphire/framework");
const main_1 = require("../scripts/main");
const mongoose_1 = __importDefault(require("mongoose"));
const victim_1 = require("../schema/victim");
const message_json_1 = __importDefault(require("../message.json"));
class GuildMemberAddListener extends framework_1.Listener {
    constructor(context, options) {
        super(context, Object.assign({}, options));
    }
    run(member) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect(process.env.Mongoose);
            const find = yield victim_1.victim.findOne({ id: member.id, guildId: member.guild.id });
            if (member.user.bot)
                return;
            if (find == null)
                return;
            if (member.id === find._id) {
                yield main_1.Scripts.sleep(10000);
                try {
                    const arrayNum = Math.floor((Math.random() * 10) + 0);
                    yield member.send(message_json_1.default.kickMessage[arrayNum]);
                    console.info(`Victim ${member.user.tag} (${member.user.id}) joined ${member.guild.name} and has been kicked kek`);
                }
                catch (e) {
                    console.log('well i kicked someone but that guy was planned and turned off his dms to protect himself from me.');
                }
                yield member.kick('victim');
            }
            return mongoose_1.default.connection.close();
        });
    }
    ;
}
exports.GuildMemberAddListener = GuildMemberAddListener;
;
