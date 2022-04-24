// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { UserError, CommandDeniedPayload } from "@sapphire/framework";
import { Listener } from "@sapphire/framework";

export class CommandDeniedListener extends Listener {
    public run(error: UserError, { message }: CommandDeniedPayload) {
        return message.reply(error.message);
    }
}