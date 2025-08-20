✟🔥⃢⃟MAFRA-BOT🔥✟
O MAFRA-BOT é um bot de WhatsApp desenvolvido em Node.js, com comandos e jogos integrados, totalmente em português.

Instalação em servidor/cloud (Render.com)
Crie uma conta gratuita em Render.com.
Faça um fork ou clone deste repositório no GitHub.
No painel do Render, clique em "New Web Service" e conecte seu repositório.
Configure:
Build Command: npm install
Start Command: npm start
Environment: Node.js
Escolha a branch principal.
Salve e aguarde o deploy.
O bot irá rodar automaticamente no servidor.
Observação:

O bot precisa que você escaneie o QR code do WhatsApp na primeira execução. Para isso, acesse os logs do Render e siga as instruções do terminal.
Não é necessário usar scripts de instalação específicos para Termux ou Android.
Variáveis sensíveis (como chaves de API) devem ser definidas em um arquivo .env no painel do Render (Environment Variables).



# ⬇️ Instalação

## Instalação em servidor/cloud (Render.com)

1. Crie uma conta gratuita em [Render.com](https://render.com/).
2. Faça um fork ou clone deste repositório no GitHub.
3. No painel do Render, clique em "New Web Service" e conecte seu repositório.
4. Configure:
    - Build Command: `npm install`
    - Start Command: `npm start`
    - Environment: Node.js
    - Escolha a branch principal.
5. Salve e aguarde o deploy.
6. O bot irá rodar automaticamente no servidor.

**Observação:**
 - O bot precisa que você escaneie o QR code do WhatsApp na primeira execução. Para isso, acesse os logs do Render e siga as instruções do terminal.
 - Não é necessário usar scripts de instalação específicos para Termux ou Android.

Pronto! Seu bot estará rodando 24h na nuvem.
AVISO: AO ESCANEAR O QRCODE O WHATSAPP IRÁ ENTRAR EM UM LOOP DE CONEXÃO E O BOT IRÁ PARAR DE RODAR. É FUNDAMENTAL QUE VOCÊ DÊ O COMANDO `node index.js` ASSIM QUE ESCANEAR O QR CODE FOR ESCANEADO E O BOT PARAR DE RODAR, CASO CONTRÁRIO NÃO IRA CONECTAR E TERA QUE RESETAR O QR CODE