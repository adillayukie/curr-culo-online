## Objetivo
Aplicar à página "Sobre mim" um fundo bege sólido com padrão pontilhado, igual ao da imagem anexada (área da seção big-numbers).

## Mudanças em `src/routes/sobre.tsx`

No wrapper principal:
1. Remover o overlay fixo do `<Noise />` (granulado).
2. Substituir `bg-background` por estilo inline com:
   - `backgroundColor: "#f5f0e8"` (bege)
   - `backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)"`
   - `backgroundSize: "18px 18px"` — espaçamento dos pontos
3. Manter o hero (header) por cima com seu gradiente laranja + ruído próprio, para que o pontilhado apareça nas seções abaixo.

Tamanho/opacidade dos pontos podem ser ajustados depois conforme o gosto.
