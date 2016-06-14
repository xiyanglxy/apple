'use strict';

var TelegramBot = require('node-telegram-bot-api');

var TOKEN = '207817037:AAFjP3ZFjz94mc131hXIDTcU05LdK2PZ9Po';
var USER = '137453162';

var bot = new TelegramBot(TOKEN, {polling: {timeout: 1, interval: 100}});

var opts = {
  reply_markup: JSON.stringify(
      {
        force_reply: true
      }
  )};

bot.sendMessage(USER, 'How old are you?', opts)
    .then(function (sended) {
      var chatId = sended.chat.id;
      var messageId = sended.message_id;
      bot.onReplyToMessage(chatId, messageId, function (message) {
        console.log('User is %s years old', message.text);
      });
    });