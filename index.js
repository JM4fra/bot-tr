// MAFRA-BOT - WhatsApp Bot
// Desenvolvido para rodar em nuvem (Render.com)
// Estrutura limpa, modular e pronta para expansão

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
const menu = require('./src/menu');

// Carregar variáveis sensíveis do .env
require('dotenv').config();

async function startBot() {
    // Autenticação multi-arquivo (persistência de sessão)
    const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'auth_info'));
    const { version, isLatest } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        printQRInTerminal: false, // Desabilita QR automático
        auth: state,
        logger: undefined,
        syncFullHistory: false,
        patchMessageBeforeSending: (msg) => msg,
    });

    // Exibir QR code manualmente no terminal
    sock.ev.on('connection.update', (update) => {
        const { qr, connection, lastDisconnect } = update;
        if (qr) {
            console.log('\nEscaneie o QR code abaixo para conectar o MAFRA-BOT ao WhatsApp:');
            qrcode.generate(qr, { small: true });
        }
        if (connection === 'close') {
            const reason = lastDisconnect?.error?.output?.statusCode;
            if (reason === DisconnectReason.loggedOut) {
                console.log('Sessão expirada. Removendo credenciais...');
                fs.rmSync(path.join(__dirname, 'auth_info'), { recursive: true, force: true });
                process.exit(0);
            } else {
                console.log('Conexão encerrada. Tentando reconectar...');
                startBot();
            }
        } else if (connection === 'open') {
            console.log('✅ MAFRA-BOT conectado com sucesso!');
        }
    });

    // Salvar credenciais ao atualizar
    sock.ev.on('creds.update', saveCreds);

    // Mensagem de boas-vindas e comandos
    sock.ev.on('messages.upsert', async ({ messages, type }) => {
        if (type !== 'notify') return;
        for (const msg of messages) {
            if (!msg.message) continue;
            const sender = msg.key.remoteJid;
            const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
            if (!text) continue;

            // Comando de menu
            if (text === '!menu' || text === '/menu') {
                await sock.sendMessage(sender, { text: menu.menuText });
            }
            // ...adicione outros comandos aqui...
        }
    });
}

startBot();