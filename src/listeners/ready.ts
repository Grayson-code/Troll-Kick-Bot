// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Listener } from "@sapphire/framework";
import type { Client } from "discord.js";

export class ReadyListerner extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            once: true
        });
    }

    public run(client: Client) {
        const { tag, id } = client.user!
        return this.container.logger.info(`Logged in as ${tag} (${id})`);
    }
}