import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

dotenv.config();

const TOKEN: string = process.env.SACRA_TELEGRAM_BOT_TOKEN || '';
const GAME_URL = process.env.SACRA_GAME_URL || 'https://fantom.sacra.game/';

const bot = new TelegramBot(TOKEN, { polling: true });


bot.on('message', async msg => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Play Sacra game', web_app: { url: GAME_URL } }]
      ]
    }
  };
  bot.sendMessage(chatId, 'Press to button', options);
});