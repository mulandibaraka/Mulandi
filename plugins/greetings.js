exports.run = {
   usage: ['spike'],
   hidden: ['naruto', 'moha'],
   category: 'greetings',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `What Do You Want? -_- 🗿`, m)
   },
   error: false,
   cache: true,
   location: __filename
}
