"use strict";
// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyListerner = void 0;
const framework_1 = require("@sapphire/framework");
class ReadyListerner extends framework_1.Listener {
    constructor(context, options) {
        super(context, Object.assign(Object.assign({}, options), { once: true }));
    }
    run(client) {
        const { tag, id } = client.user;
        return this.container.logger.info(`Logged in as ${tag} (${id})`);
    }
}
exports.ReadyListerner = ReadyListerner;
