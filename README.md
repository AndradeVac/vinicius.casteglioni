# Intake Energy Drink — Landing Page

Site estático (sem backend), pronto para a Vercel.

## Configurar
- `config.js`: número do WhatsApp (`55` + DDD + número, só dígitos), mensagem inicial e Instagram.
- `assets/img/`: coloque as fotos com estes nomes (JPG): `hero`, `sobre`, `produto-1..5`, `galeria-1..9`.
  Enquanto a foto não existe, aparece um placeholder.

## Deploy (Vercel)
Importe o repositório na Vercel — Framework: "Other", sem build, diretório raiz. Backend (Render) só será necessário se houver formulário/pedidos.

## Rodar local
- `npm start` (ou `python3 -m http.server 3000`) e abra `http://localhost:3000` no Safari, Chrome ou Firefox.
- Para testar no celular, use o IP do computador na mesma rede: `http://IP-DO-PC:3000`.
- Compatível com Safari 13+ (iOS e macOS).
