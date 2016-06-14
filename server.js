'use strict';

var telegram = require('telegram-bot-api');

var api = new telegram({
        token: '207817037:AAFjP3ZFjz94mc131hXIDTcU05LdK2PZ9Po',
        updates: {
            enabled: true
    }
});

api.on('message', function(message)
{
   // Received text message
    console.log(message);

    api.sendMessage({
      chat_id: message.chat.id,
      text: message.text 
    })
      .then(function(message)
  {
    console.log(message);
  })
 
});
