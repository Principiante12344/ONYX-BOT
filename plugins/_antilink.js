const linkRegex=/chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;export async function before(t,{conn:a,isAdmin:n,isBotAdmin:o}){if(t.isBaileys&&t.fromMe)return!0;if(!t.isGroup)return!1;const e=global.db.data.chats[t.chat],s=global.db.data.settings[this.user.jid]||{},r=linkRegex.exec(t.text);if(e.antiLink&&r&&!n){const n=`https://chat.whatsapp.com/${await this.groupInviteCode(t.chat)}`;if(o&&t.text.includes(n))return!0;await a.reply(t.chat,"*≡ Enlace Detectado*\n\nNo permitimos enlaces de otros grupos \nlo siento *@${t.sender.split('@')[0]}*  serás expulsado del grupo ${o?'':'\n\nNo soy admin así que no te puedo expulsar :"v'}`,null,{mentions:[t.sender]});if(o&&e.antiLink){await a.sendMessage(t.chat,{delete:t.key}),await a.groupParticipantsUpdate(t.chat,[t.sender],'remove')}else if(!e.antiLink)return!1}return!0}
    
