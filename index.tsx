/*
* Vencord, a Discord client mod
* Copyright (c) 2024 Vendicated and contributors*
* SPDX-License-Identifier: GPL-3.0-or-later
*/

import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { definePluginSettings } from "@api/Settings";


const settings = definePluginSettings({
    timeUntilIdle: {
        type: OptionType.NUMBER,
        description: "Time (In Minutes) until Idle/Invisible",
        default: 5,
    },
    idleOrInvis: {
        description: "Set Status as Idle or Invisible",
        type: OptionType.SELECT,
        options: [
            { label: "Idle", value: 1},
            { label: "Invisible", value: 2 },
        ],
    }
});

export default definePlugin({
    name: "Auto Idle On AFK",
    description: "Automatically Sets Your Status As Idle/Invisible When Away For A Certain Amount Of Time",
    authors: [Devs.author],
    settings,
});