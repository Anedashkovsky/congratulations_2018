/**
 * @fileoverview App initialization
 */
// Launch telegram bot
import {bot} from './components/bot/telegramBot';
bot.startPolling();

// start express app
const PORT = process.env.PORT || 3000;
import {expressApp, startHeartBeat} from './components/server/server';
expressApp.listen(PORT, () => {
    console.log(`App started at port ${PORT}`);
});

// Start heart beating
startHeartBeat();
