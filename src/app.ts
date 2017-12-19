/**
 * @fileoverview App initialization
 */
// Launch telegram bot
import {bot} from './components/bot/telegramBot';
bot.startPolling();

const PORT = process.env.PORT || 3000;
import {expressApp} from './components/server/server';
expressApp.listen(PORT, () => {
    console.log(`App started at port ${PORT}`);
});
