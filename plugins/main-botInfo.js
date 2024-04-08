import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫*\n\ᥙs᥆ ძᥱᥣ ᥴ᥆mᥲᥒძ᥆ ᥴ᥆rrᥱᥴ𝗍᥆:\n\n${usedPrefix + command} edits de mia kalifa`;;
  const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=Gatadios&query=${text}`);        
  const data = await res.json();
  const json = data.result[0];
  await conn.sendFile(m.chat, json.thumbnail, 'thumbnail.jpg', `
*YOUTUBE MUSIC - PLAY*

*Title 📋:* ${json.title}
*Artist 🎤:* ${json.artist}
*Duration ⏱:* ${json.duration}
*Uploaded 📅:* ${json.uploaded}
`, m);
  await conn.sendFile(m.chat, json.audio[0], 'music.mp3', null, m, true);
};

handler.help = ['ytplay2'];
handler.command = /^(ytplay2|yt2|play2)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler;

