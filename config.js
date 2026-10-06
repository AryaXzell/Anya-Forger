require("./LightSecret")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "6283853532520"
global.nobot = "12266396917"
global.namaowner = "Arya Vallencia"
global.namaBot = "Anya Forger"
global.title = "Anya ForgerI"

// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = "New"
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.status = true
global.owneroff = true
global.autoread = true
global.autotyping = true
global.Antilinkgc = true
global.Antilinkch = true
global.antispam = true
global.onlygc = false

// Set Payment
global.qris = "https://files.catbox.moe/iwpd4i.jpg"
global.dana = "6283853532520"
global.gopay = "6283853532520"

// ===={ Set Link }
global.ch = 'https://whatsapp.com'
global.idch = '120363368222492263@newsletter'
global.linkgc = 'https://chat.whatsapp.com'
global.yt = 'https://youtube.com/@xx'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "120363399209756764@g.us"
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "@aryaxzell"
global.yt = "@aryaxzells"
global.ig = "@aryaxzell"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/4wk4wd.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
