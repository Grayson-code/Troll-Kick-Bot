// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Command } from "@sapphire/framework";
import { Message } from "discord.js";
import mongoose from "mongoose";
import { victim } from "../schema/victim";

export class Victim extends Command {
    public constructor(context: Command.Context, options: Command.Options) {
        super(context, {
            ...options,
            name: 'victim',
            description: 'kicks the victim without mercy',
            requiredUserPermissions: ['KICK_MEMBERS'],
            requiredClientPermissions: ['KICK_MEMBERS'],
        })
    };

    public async messageRun(message: Message) {
        await mongoose.connect(process.env.Mongoose!);
        const victimUser = message.mentions.members!.first();
        if (!victimUser == null) return;
        const find = await victim.findOne({ id: victimUser!.id, guildId: message.guild!.id })!;
        if (find) {
          return message.reply('brother that guy is already in our hitlist')
        };
        try {
            await new victim({ 
                _id: victimUser?.id,
                guildId: message.guild?.id
             }).save();
        } catch(e) {
            console.error(e)
        } finally {
            mongoose.connection.close()
        }
    }
}