/*
 * LipSurf plugin for Google search
 */
/// <reference path="../@types/plugin-interface.d.ts"/>
import { PluginBase } from '../PluginBase';

export module GooglePlugin {
    export let Plugin: IPlugin = Object.assign({}, PluginBase, {
        niceName: 'Google',
        description: 'The google search engine.',
        version: '1.0.0',
        apiVersion: '1',
        match: /.*\.google\.com/,
        homophones: {
            'search': 'google',
        },
        authors: "Miko",

        commands: [{
            name: 'Search',
            description: "Do a google search.",
            global: true,
            match: 'google *',
            pageFn: async (transcript: string, searchQuery: string) => {
                window.location.href = `https://www.google.com/search?q=${searchQuery}`;
            }
        },
        {
            name: 'Google Calendar',
            global: true,
            match: 'google calendar',
            pageFn: async () => {
                window.location.href = `https://calendar.google.com/calendar/r`;
            }
        },
        {
            name: 'Add Event to Google Calendar',
            global: true,
            match: ['add event to google calendar', 'add to google calendar'],
            pageFn: async () => {
                window.location.href = `https://calendar.google.com/calendar/r/eventedit`;
            }
        },
        ],
    });
}
