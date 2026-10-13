## Bloco II - Docker
### Prof. Diego Martins

### Introdução

O Docker é uma plataforma aberta para desenvolver, distribuir e executar aplicativos.

Essa plataforma permite empacotar um aplicativo e suas dependências em um container — um ambiente leve e isolado que contém tudo o que é necessário para a execução do aplicativo.

### Comandos básicos:
> **LISTAR CONTAINERS:**  
> `docker ps -a`  
> &nbsp;&nbsp;&nbsp;&nbsp;ps → process status  
> &nbsp;&nbsp;&nbsp;&nbsp;-a → all  

> **LISTAR IMAGENS:**  
> `docker images`  

> **BAIXAR IMAGEM:** 
> `docker pull httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp; :2.4 → versão 2.4  
  
> **REMOVER IMAGEM:**  
> `docker rmi <image id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; rmi → remove image   
  
> **CRIAR E RODAR CONTAINER:**  
> `docker run -d httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp;-d → detached  

> **ACESSAR TERMINAL DO CONTAINER:**  
> `docker exec -it <container id> /bin/bash`  
> &nbsp;&nbsp;&nbsp;&nbsp; exec → execute  
> &nbsp;&nbsp;&nbsp;&nbsp; -it → interactive + TTY (teletypewriter)  
> &nbsp;&nbsp;&nbsp;&nbsp; /bin/bash → endereço do bash do próprio container  
  
> **PARAR CONTAINER:**  
> `docker stop <container id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   
  
> **INICIAR CONTAINER:**  
> `docker start <container id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   
  
> **REMOVER CONTAINER:**  
> `docker rm <container id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; rm → remove  
    
> **:**  
> `docker `  
> &nbsp;&nbsp;&nbsp;&nbsp; →   

#### Docker Hub:
https://hub.docker.com/