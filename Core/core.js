import { Client } from 'discord.js';
import fs from 'fs';
import request from 'request';
import Soulworker from '../Service/soulworker'

/**
 * singleton으로 사용하는 bot client 입니다
 */
export const client = new Client();
const sw = new Soulworker(client);

/**
 * Bot의 기본 구성을 정의합니다
 * @param { Client } client Client class in discord.js
 * @exception { FileNotFound } Bot token 파일을 찾지 못한 경우입니다
 * @exception { ArgumentException } Bot token이 올바르지 않은 경우입니다
 */
export function run(client) {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        
        client.user.setActivity('Soulworker', { type: 'WATCHING' });
        console.log(`Set activity on ${client.user.username}`);
        
        sw.monitoring(client);
    });

    fs.readFile("bot.token", "utf8", (err, token) => {
        if (err) {
            request('ftp://192.168.0.5/Bot.token', (err, res, body) => {
                console.log(body);
            });
        }
        else {
            client.login(token);
        }
    });
}