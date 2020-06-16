const Discord = require("discord.js");
const axios = require('axios').default;

const client = new Discord.Client();
const {
    token
} = require("./ayarlar.json");



client.on('ready', () => {
    console.log(`Nitrolar aranıyor...`);
});

client.on('message', message => {
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var NitroUrl = Nitro.exec(message.content);
        var NitroCode = NitroUrl[0].split('/')[1];

        console.log(`Nitro bulundu  │ ${message.guild.name}`);
        
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
            headers: 
            {
            'Authorization': client.account_token 
            }
        }).then(
            () => console.log(`Çok şanslısın! Nitro çalıştı. │ ${message.guild.name}`)
        ).catch(ex => console.log(`Geçersiz Kod :{!`))
    }
})

client.login(token)

