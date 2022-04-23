import { Listener } from "@sapphire/framework";
import type { GuildMember } from "discord.js";
export declare class GuildMemberAddListener extends Listener {
    constructor(context: Listener.Context, options: Listener.Options);
    run(member: GuildMember): Promise<void>;
}
