/**
 * @fileoverview Telegram bot init
 */
const BOT_TOKEN = process.env.BOT_TOKEN;

const Telegraf = require('telegraf');
const bot = new Telegraf(BOT_TOKEN);

const Session = require('telegraf/session');
bot.use(Session());

import {BotController, GENERATE_PHRASE_COMMAND} from '../../modules/bot/controllers/BotController';
const botController = new BotController();

bot.start(botController.getGreeterMessage);
bot.hears('hi', (context: any) => context.reply('Hey there!'));
bot.command('get', botController.getRandomPhrase);
bot.command(GENERATE_PHRASE_COMMAND, botController.getRandomPhrase);

export {bot};
