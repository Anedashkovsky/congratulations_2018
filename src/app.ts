/**
 * @fileoverview App initialization
 */
// Launch telegram bot
import {bot} from './components/bot/telegramBot';
bot.startPolling();
