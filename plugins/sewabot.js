let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/df3dca9e1a9364db3abce.jpg'
let text = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 15 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 20ᴋ / ɢʀᴏᴜᴘ
┃✾ 45 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 45ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 50ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 15 ʜᴀʀɪ 5ᴋ 
┃✾ 30 ʜᴀʀɪ 10ᴋ 
┃✾ 45 ʜᴀʀɪ 15ᴋ 
┃✾ 60 ʜᴀʀɪ 20ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 430+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/6287833306677?text=Hallo admin, saya tertarik untuk menyewa bot Fahil Botz'}},
    {index: 4, quickReplyButton: {displayText: 'OWNER', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler
