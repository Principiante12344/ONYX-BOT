import axios from 'axios';
import { msToTime, pickRandom } from './utils'; // Asumiendo que tienes un archivo utils.js con las funciones msToTime y pickRandom

let cooldown = 3600000;
let handler = async (m, { conn, usedPrefix, command }) => {
    let hasil = Math.floor(Math.random() * 500);
    let user = global.db.data.users[m.sender];
    if (new Date() - user.lastwork < cooldown) {
        throw `🧘🏻‍♂️ ${mssg.workCd} *${msToTime((user.lastwork + cooldown) - new Date())}*`;
    }

    try {
        let anu = (await axios.get('https://raw.githubusercontent.com/fgmods/fg-team/main/games/work.json')).data;
        let res = pickRandom(anu);
        user.coin += hasil;
        
        m.reply(`
‣ ${res.fgwork} *${hasil} 🪙*
`);
        user.lastwork = new Date() * 1;
    } catch (err) {
        console.error(err);
        throw 'Ocurrió un error al obtener la información del trabajo.';
    }
};
handler.help = ['work'];
handler.tags = ['econ'];
handler.command = ['work', 'w', 'trabajar'];

export default handler;
  
