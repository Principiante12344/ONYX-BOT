const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true;
    if (!m.isGroup) return false;

    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    const isGroupLink = linkRegex.exec(m.text);

    if (chat.antiLink && isGroupLink && !isAdmin) {
        const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
        if (isBotAdmin && m.text.includes(linkThisGroup)) return true;

        await conn.reply(m.chat, `*≡ Enlace Detectado*
            
No permitimos enlaces de otros grupos 
lo siento *@${m.sender.split('@')[0]}*  serás expulsado del grupo ${isBotAdmin ? '' : '\n\nNo soy admin así que no te puedo expulsar :"v'}`, null, { mentions: [m.sender] });

        if (isBotAdmin && chat.antiLink) {
            await conn.sendMessage(m.chat, { delete: m.key });
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        } else if (!chat.antiLink) {
            return false;
        }
    }

    return true;
}
