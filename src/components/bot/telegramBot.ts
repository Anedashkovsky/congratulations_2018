/**
 * @fileoverview Telegram bot init
 */
const BOT_TOKEN = process.env.BOT_TOKEN;

const Telegraf = require('telegraf');
const bot = new Telegraf(BOT_TOKEN);

bot.hears('hi', (context: any) => context.reply('Hey there!'));

export {bot};
