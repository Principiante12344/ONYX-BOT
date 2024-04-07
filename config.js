import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url' 

global.owner = [
  ['51907364682', 'kenn', true],
  ['']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['51907364682', '51907364682']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'ONYX' 
global.author = 'KENN' 

//--info FG
global.botName = 'ONYX'
global.fgig = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' 
global.fgsc = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' 
global.fgyt = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fgpyp = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.fglog = 'https://telegra.ph/file/5e10f68fb0c2801a2612d.jpg' 

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.bgp = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.bgp2 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'
global.bgp3 = 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v' //--GP NSFW

global.wait = '⌛'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
