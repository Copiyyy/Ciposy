/**
 * Base By Sopiy
 * Created On 28/9/2024
 * Contact Me on wa.me/6285792549359
 * Supported By Myself 
 
 • Copi
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner ========//
global.owner = '6283123448708'
global.nomerowner = ["6283123448708"]
// Apikey ======//
global.skizo = 'FalX'
//watermark ====//
global.packname = 'Di Buat Oleh'
global.author = 'CopyBot -MD'
global.title = '⟡C O P Y B O T • M U L T I • D E V I C E⟡'
global.body = 'x ᴛʜᴇᴍᴇ original - ᴠᴇʀ'
global.filename = 'CopyBot MD - FDOC'
global.botname = 'CopyBot - Md'
global.shinka = 'CopyBot Jogress Shinka !'
global.idsaluran = '6285730250665@newsletter'
global.namesaluran = '- copisya -'
global.sourceurl = 'https://whatsapp.com/channel/0029VapJ9JrEquiV9pUr441X'
//setcode & logo ======//
global.tekspushkonv1 = ``
global.tekspushkonv2 = ``
global.tekspushkonv3 = ``
global.tekspushkonv4 = ``
global.setmenu = "v1"
global.setreply = "v1"
global.antibot = false
global.khas = '∨'
global.khasbawah = 'ꕤ'
global.khasmiring = '◦'
global.khasatas1 = '[ ⏤͟͟͞͞ '
global.khasatas2 = ' ͟͟͞͞⏤ ]'
global.footer = 'Sopy'
// cpanel ======//
global.domain = 'https://center.zaaoffc.digitalserver.my.id'
global.apikey2 = 'ptla_ovG2AkH9oAcHVf6iy4W5bsN7VQ7Hbxwpk2LjVecndRB' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_2Kp2aFe56IXfQ4paiB2xu3kPBYo7P5gPs5MM3KRvVHQ' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
//linode & d-o ==//
global.apilinode = ''// apikey akun vps linode
global.apitokendo = ''
//database ======//
global.urldb = ''; // kosongin aja 
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 7
}

//rpg ==========//
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
