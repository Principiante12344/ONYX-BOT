import fetch from 'node-fetch';

let handler = async (m, { text }) => {
    if (!text) throw '🎌 *Ingresa una solicitud*\n\nEjemplo: !bard ¿Conoces CuriosityBot-MD?';

    try {
        await m.reply('*🔄 Procesando...*');
        const response = await fetch(`https://aemt.me/bard?text=${encodeURIComponent(text)}`);
        const result = await response.json();

        m.reply(result.result);
    } catch (error) {
        console.error(error);
        throw '*🚩 Ocurrió un error*';
    }
};

handler.command = ['bard'];
handler.help = ['bard'];
handler.tags = ['ai'];
handler.premium = false;

export default handler;
