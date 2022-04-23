import { Listener } from "@sapphire/framework";
import type { Client } from "discord.js";
export declare class ReadyListerner extends Listener {
    constructor(context: Listener.Context, options: Listener.Options);
    run(client: Client): void;
}
