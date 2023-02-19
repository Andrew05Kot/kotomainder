const axios = require('axios');

const cryptoCurrencies = ['btc', 'eth', 'doge', 'twt', 'ton'];
const currency = 'usdt';

const getPrice = async (coin) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`);
    return response.data[coin][currency];
};

const getCryptoInfo = () => {
    let result = '';
    cryptoCurrencies.forEach(async (coin) => {
        const price = await getPrice(coin);
        result += `${coin.toUpperCase()} - ${price} \n`;
        console.log(`${coin.toUpperCase()} - ${price} \n`);
    });
    return result;
}

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('6102434381:AAHU-kS_wEQJqeEqPG6GGGY9ZhkOH7to6vg', { polling: true });

const schedule = require('node-schedule');

let chatId = null;

schedule.scheduleJob({ hour: 19, minute: 00 }, function () {
    bot.sendMessage(chatId, "Привіт світ:)");
});

bot.on('message', (msg) => {
    chatId = msg.chat.id;
    console.log(getCryptoInfo());
});