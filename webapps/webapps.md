## Bloco III - WebApps
### Prof. Luiz Aguiar

### Introdução

Aplicativos web funcionam em qualquer navegador de internet, mas há diferenças na performance, usabilidade e apresentação a depender do dispositivo sendo utilizado.  
Primeiro, conheceremos vantagens e desvantagens de algumas formas de produzir aplicativos. Depois, trataremos de técnicas de responsividade em web apps.

### Classificação e visão geral das abordagens  
1. **Apps nativos:** código escrito especificamente para cada OS (Android/iOS), usando kits e APIs nativas.  
&nbsp;&nbsp;&nbsp;&nbsp;Kotlin/Java + Android SDK para Android  
&nbsp;&nbsp;&nbsp;&nbsp;Swift/Objective-C + iOS SDK para iOS.  

2. **Cross-platform “nativos”:** frameworks que compilam/geram UI nativa ou código nativo a partir de uma base única (ex.: Flutter, em certa medida React Native).  

3. **Cross-platform com ponte (bridge):** frameworks que usam uma camada JS que conversa com componentes nativos (React Native é um exemplo clássico de ponte).  
&nbsp;&nbsp;&nbsp;&nbsp;A bridge pode introduzir overhead em casos com alta troca de dados entre JS e nativo (e.g., animações complexas).

4. **Híbridos / WebView:** apps que são essencialmente páginas web embaladas num contêiner (WebView) — ex.: Cordova, Ionic clássico.  

5. **Web Apps / PWAs (Progressive Web Apps):** aplicações web responsivas, que podem se comportar como apps (instaláveis, offline parcial) via service workers e manifest.  
&nbsp;&nbsp;&nbsp;&nbsp;Nem sempre percebido como “app” por todos os usuários;  
&nbsp;&nbsp;&nbsp;&nbsp;discoverability diferente (não listado em lojas, salvo PWAs na Play Store dependendo de políticas).  

> Observação técnica: as linhas entre “híbrido” e “cross-platform” às vezes se confundem na literatura. O importante é entender como cada abordagem executa UI, acessa APIs nativas e entrega updates.  

### Web apps: técnicas de responsividade  
Em dispositivos móveis, o navegador controla escala, densidade e layout inicial da página. Sem a configuração correta, o mesmo HTML/CSS pode aparecer com zoom errado, texto minúsculo ou layout quebrado.

#### Meta viewport
A meta viewport informa ao navegador móvel a largura “virtual” e a escala inicial da página, permitindo que elementos sejam renderizados na proporção adequada à tela do dispositivo.
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
* `em` (**letter M**) define o tamanho da fonte em relação ao seu super elemento, onde 1.0 = 100% do tamanho.  
* `rem` (**root em**) define o tamanho da fonte em relação ao tamanho raíz definido pelo html da página.  
* `%` (**percentage**): Relative to the size of the parent element. For example, if a div is 500px wide, a child element with width: 50% will be 250px wide.
* `vw` (**Viewport Width**): 1% of the width of the browser window (viewport). For a 1000px-wide screen, 10vw equals 100px.
* `vh` (**Viewport Height**): 1% of the height of the browser window. For a 800px-high screen, 50vh equals 400px.
* `vmin` (**Viewport Minimum**): 1% of whichever viewport dimension is smaller (width or height).
* `vmax` (**Viewport Maximum**): 1% of whichever viewport dimension is larger (width or height).

#### Media queries
Media queries permitem aplicar blocos de CSS apenas quando determinadas condições do ambiente (largura, altura, orientação, resolução, capacidade de interação) são verdadeiras.  
  
**mobile-first:** aplicar estilos a partir de 768px
```
@media (min-width: 768px) {
  .container { max-width: 740px; margin: 0 auto; }
}
```
**desktop-first:** aplicar estilos para telas menores que 768px
```
@media (max-width: 767.98px) {
  .nav { display: none; }
}
```
> `clamp(min, preferred, max)`  
> sets a property value that scales fluidly between set boundaries, keeping to a preferred size.  
> * **Minimum:** The smallest allowed value; if the preferred value drops below this, the minimum is used.  
> * **Preferred:** The ideal, often relative value (like vw or %) that scales with the viewport.  
> * **Maximum:** The largest allowed value; if the preferred value exceeds this, the maximum is used.

#### Breakpoints

Escolha breakpoints baseados no **layout** — onde o design “quebra” e precisa de ajuste. Exemplos comuns (mobile-first):

* `min-width: 480px` — pequenos tablets / grandes phones
* `min-width: 768px` — tablets portrait
* `min-width: 1024px` — tablets landscape / pequenos laptops
* `min-width: 1280px` — desktops

> **Use breakpoints semânticos**
>  
> **Definição da variável:**
> ```
> :root {
>   --stack-to-row: 480px; 
> }
> ```
> **Aplicação:** (empilhado por padrão e muda para fileira quando houver espaço)
> ```
> .card-container {
>   display: flex;
>   flex-direction: column;
> }
> 
> @media (min-width: var(--stack-to-row)) {
>   .card-container {
>     flex-direction: row;
>   }
> }
> ```

#### Exemplos de design responsivo:

**Layout com Flexbox que troca direção:**  
```
.card-list {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .card-list { flex-direction: row; gap: 1rem; }
}
```

**Alterando tipografia com `clamp()` + media queries:**  

```
html { font-size: 16px; }

h1 {
  font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
}
```
refinamento para telas grandes:
```
@media (min-width: 1200px) {
  h1 { letter-spacing: 0.5px; }
}
```

**Media queries para capacidades do dispositivo:**  

pointer and hover detectam se o dispositivo tem ponteiro de mouse preciso:  
```
@media (hover: hover) and (pointer: fine) {
  .button:hover { transform: translateY(-4px); }
}
```
reduz animações para usuários que preferem menos movimento:  
```
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
```

**Container Queries:** (estilos com base no tamanho do contêiner em vez do viewport. Útil para componentes reutilizáveis)  
```
.card {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card { grid-template-columns: 1fr 1fr; }
}
```

**Imagens responsivas:**  
```
<img src="small.jpg"
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
     alt="Descrição">
```

**Safe areas (notch):** (exemplo no iOS)  
```
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```
```
body {
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
}
```

#### links?:  
