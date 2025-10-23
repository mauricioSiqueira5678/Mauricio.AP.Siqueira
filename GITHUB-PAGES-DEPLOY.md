# 🌐 GitHub Pages - Guia de Deploy

## 📋 Passo a Passo Completo

### **1. ✅ Preparação (JÁ FEITO)**
- [x] Repositório criado: `mauricioSiqueira5678/Mauricio.AP.Siqueira`
- [x] Arquivos commitados
- [x] Push para GitHub realizado

### **2. 🔧 Ativar GitHub Pages**

#### **Acesse o Repositório:**
1. Vá para: https://github.com/mauricioSiqueira5678/Mauricio.AP.Siqueira
2. Clique na aba **"Settings"** (⚙️)
3. Role para baixo até **"Pages"** (lado esquerdo)

#### **Configurar Source:**
1. Em **"Source"**, selecione: **"Deploy from a branch"**
2. Em **"Branch"**, selecione: **"main"**
3. Em **"Folder"**, deixe: **"/ (root)"**
4. Clique em **"Save"**

#### **✨ Pronto! Seu site estará disponível em:**
```
https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/
```

### **3. ⏱️ Tempo de Deploy**
- **Primeira vez**: 5-10 minutos
- **Atualizações**: 1-3 minutos

### **4. 🔍 Verificar Deploy**
1. Na aba **"Actions"** do repositório
2. Veja o workflow **"pages build and deployment"**
3. ✅ Verde = Deploy bem-sucedido
4. ❌ Vermelho = Erro no deploy

---

## 🌟 **Domínio Personalizado (Opcional)**

### **Opção 1: Subdomínio GitHub**
**Renomear Repositório para:**
- Nome: `mauriciosiqueira5678.github.io`
- URL ficará: `https://mauriciosiqueira5678.github.io`

### **Opção 2: Domínio Próprio**
1. Comprar domínio (ex: `mauriciosiqueira.dev`)
2. No GitHub Pages Settings:
   - **Custom domain**: `mauriciosiqueira.dev`
   - ✅ **Enforce HTTPS**
3. Configurar DNS no provedor:
   ```
   Type: CNAME
   Name: www
   Value: mauriciosiqueira5678.github.io
   
   Type: A
   Name: @
   Values: 
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## 🔧 **Atualizações Futuras**

### **Workflow Padrão:**
```bash
# 1. Fazer alterações nos arquivos
# 2. Commit local
git add .
git commit -m "Descrição das mudanças"

# 3. Push para GitHub
git push origin main

# 4. Deploy automático em 1-3 minutos
```

---

## 📊 **Configurar SEO para GitHub Pages**

### **1. Atualizar URLs no Código**

Precisamos atualizar as URLs para o domínio do GitHub Pages:

#### **index.html - Meta Tags:**
```html
<!-- Trocar para o domínio do GitHub Pages -->
<meta property="og:url" content="https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/">
<meta property="og:image" content="https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/public/mauricio.png">
<meta name="twitter:image" content="https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/public/mauricio.png">
<link rel="canonical" href="https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/">
```

#### **JSON-LD:**
```json
{
  "url": "https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/",
  "image": "https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/public/mauricio.png"
}
```

#### **sitemap.xml:**
```xml
<loc>https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/</loc>
```

### **2. Google Search Console**
1. Adicionar propriedade: `https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/`
2. Verificar via meta tag HTML
3. Submeter sitemap: `https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/sitemap.xml`

---

## ⚡ **Otimizações GitHub Pages**

### **Performance:**
- ✅ Arquivos já minificados
- ✅ Imagens otimizadas
- ✅ CSS e JS compactos

### **SEO:**
- ✅ Meta tags completas
- ✅ Dados estruturados
- ✅ Sitemap.xml
- ✅ Robots.txt

### **Funcionalidades:**
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Deploy automático
- ✅ Sem custo

---

## 🎯 **Resultado Final**

### **URLs de Acesso:**
- **Site**: https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/
- **Repositório**: https://github.com/mauricioSiqueira5678/Mauricio.AP.Siqueira
- **Sitemap**: https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/sitemap.xml
- **Robots**: https://mauriciosiqueira5678.github.io/Mauricio.AP.Siqueira/robots.txt

### **Próximos Passos:**
1. ✅ Ativar GitHub Pages (5 minutos)
2. 🔧 Atualizar URLs no código
3. 📊 Configurar Google Search Console
4. 📈 Monitorar indexação (1-2 semanas)

---

## 🆘 **Troubleshooting**

### **Site não carrega:**
- Verificar se GitHub Pages está ativado
- Checar se index.html está na raiz
- Ver logs na aba Actions

### **404 Error:**
- Verificar nome dos arquivos
- Certificar-se que index.html existe
- Aguardar 10 minutos após ativação

### **Deploy falhou:**
- Verificar sintaxe HTML/CSS/JS
- Checar se não há arquivos corrompidos
- Ver detalhes na aba Actions

---

**🚀 Em poucos minutos seu portfólio estará online e indexável pelo Google!**