// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from "@sapphire/framework";
import type { GuildMember } from "discord.js";
import { Scripts } from "../scripts/main";
import mongoose from "mongoose";
import { victim } from "../schema/victim";

export class GuildMemberAddListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
        });
    }

    public async run(member: GuildMember) {
        
        
        await mongoose.connect(process.env.Mongoose!);
        const find = await victim.findOne({ _id: member.id, guildId: member.guild.id! })!;
        if (member.user.bot) return;
        if (find == null) return;
        if (member.id === find._id) {
            await Scripts.sleep(10000);
            try {
                await member.send('get good');
                console.info(`Victim ${member.user.tag} (${member.user.id}) joined ${member.guild.name} and has been kicked kek`);
            } catch (e) {
                console.log('well i kicked someone but that guy was planned and turned off his dms to protect himself from me.');
            }
            await member.kick('victim');
        }
        return mongoose.connection.close();
    };
};