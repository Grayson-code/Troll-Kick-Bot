import { Command } from "@sapphire/framework";
import { Message } from "discord.js";
export declare class Victim extends Command {
    constructor(context: Command.Context, options: Command.Options);
    messageRun(message: Message): Promise<Message<boolean> | undefined>;
}
