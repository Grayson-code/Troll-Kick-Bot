// Copyright (c) 2022 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import mongoose from "mongoose";

const model = new mongoose.Schema({
    _id: String,
    guildId: String,
});

export const victim = mongoose.model('victim', model);