import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

dotenv.config();

const TOKEN: string = process.env.SACRA_TELEGRAM_BOT_TOKEN || '';
const SACRA_GAME_URL = process.env.SACRA_GAME_URL || 'https://fantom.sacra.game/';
const PIXEL_GAME_URL = process.env.PIXEL_GAME_URL || 'https://teckaag.github.io/PWHTML/';

const bot = new TelegramBot(TOKEN, { polling: true });


bot.on('message', async msg => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Play Sacra game', web_app: { url: SACRA_GAME_URL } },
          { text: 'Play Pixel game', web_app: { url: PIXEL_GAME_URL } },

        ]
      ]
    }
  };
  bot.sendMessage(chatId, 'Press to button', options);
});