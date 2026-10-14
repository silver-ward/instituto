## Bloco II - Docker
### Prof. Diego Martins

### Introdução

O Docker é uma plataforma aberta para desenvolver, distribuir e executar aplicativos.

Essa plataforma permite empacotar um aplicativo e suas dependências em um container — um ambiente leve e isolado que contém tudo o que é necessário para a execução do aplicativo.

### Comandos básicos:
> **LIST CONTAINERS:**  
> `docker ps -a`  
> &nbsp;&nbsp;&nbsp;&nbsp;ps → process status  
> &nbsp;&nbsp;&nbsp;&nbsp;-a → all  

> **LIST IMAGES:**  
> `docker images`  

> **DOWNLOAD IMAGE:** 
> `docker pull httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp; :2.4 → versão 2.4  
  
> **REMOVE IMAGE:**  
> `docker rmi <image id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; rmi → remove image   
  
> **CREATE AND RUN CONTAINER:**  
> `docker run -d httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp;-d → detached  
>   
> `docker run -dit --name meu_webserver -p 8080:80 httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp; -dit →  detached + interactive + teletypewriter  
> &nbsp;&nbsp;&nbsp;&nbsp; -p →  port  
> &nbsp;&nbsp;&nbsp;&nbsp; 8080 →  external port (host)  
> &nbsp;&nbsp;&nbsp;&nbsp; :80 →  internal port (container)  

> **ACCESS CONTAINER TERMINAL:**  
> `docker exec -it <container id> /bin/bash`  
> &nbsp;&nbsp;&nbsp;&nbsp; exec → execute  
> &nbsp;&nbsp;&nbsp;&nbsp; -it → interactive + TTY (teletypewriter)  
> &nbsp;&nbsp;&nbsp;&nbsp; /bin/bash → endereço do bash do próprio container  
>  
> `hostname`  → returns container id  
> `exit` → exits container's CLI  
> basic CLI commands → ls, cd...  
  
> **STOP CONTAINER:**  
> `docker stop <container id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   
  
> **START CONTAINER:**  
> `docker start <container id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   
  
> **REMOVE CONTAINER:**  
> `docker rm <container id>`  
> &nbsp;&nbsp;&nbsp;&nbsp; rm → remove  
    
> **:**  
> `docker run -dit --name meu_webserver -p 8080:80 httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   



> **:**  
> `docker `  
> &nbsp;&nbsp;&nbsp;&nbsp; →   



#### Docker Hub:
https://hub.docker.com/