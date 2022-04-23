// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { SapphireClient } from "@sapphire/framework";
import 'dotenv/config'

class Client extends SapphireClient {
    public constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'DIRECT_MESSAGES', 'GUILD_MESSAGE_REACTIONS'],
            partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER"],
            defaultPrefix: "!",
            presence: {
                status: "idle",
                activities: [{
                    name: 'kaboom you go',
                    type: 'WATCHING',
                }]
            },
        })
    }

    public override login(token?: string) {
        return super.login(token);
    };
}

const client = new Client()

client.login(process.env.token);
