## Bloco II - Docker
### Prof. Diego Martins

### Introdução

O Docker é uma plataforma aberta para desenvolver, distribuir e executar aplicativos.

Essa plataforma permite empacotar um aplicativo e suas dependências em um container — um ambiente leve e isolado que contém tudo o que é necessário para a execução do aplicativo.

### General Commands:
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

> **ACCESS CONTAINER TERMINAL:**  
> `docker exec -it <container id/name> /bin/bash`  
> &nbsp;&nbsp;&nbsp;&nbsp; exec → execute  
> &nbsp;&nbsp;&nbsp;&nbsp; -it → interactive + TTY (teletypewriter)  
> &nbsp;&nbsp;&nbsp;&nbsp; /bin/bash → endereço do bash do próprio container  
>  
>  **CLI functionalities:**  
> `hostname`  → returns container id  
> `exit` → exits container's CLI  
> basic CLI commands → ls -l, cd...  
> install packages, e.g.:  
> &nbsp;&nbsp;&nbsp;&nbsp;apt update  
> &nbsp;&nbsp;&nbsp;&nbsp;apt install nano  
> &nbsp;&nbsp;&nbsp;&nbsp;nano index.html
  
> **STOP CONTAINER:**  
> `docker stop <container id/name>`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   
  
> **START CONTAINER:**  
> `docker start <container id/name>`  
> &nbsp;&nbsp;&nbsp;&nbsp; →   
  
> **REMOVE CONTAINER:**  
> `docker rm <container id/name>`  
> &nbsp;&nbsp;&nbsp;&nbsp; rm → remove  

### WebServer Commands:
> `docker run -dit --name meu_webserver -p 8080:80 httpd:2.4`  
> &nbsp;&nbsp;&nbsp;&nbsp; -dit →  detached + interactive + TTY (teletypewriter)  
> &nbsp;&nbsp;&nbsp;&nbsp; -p →  port  
> &nbsp;&nbsp;&nbsp;&nbsp; 8080 →  external port (host)  
> &nbsp;&nbsp;&nbsp;&nbsp; :80 →  internal port (container)  

### PostgreSQL Commands:
> **CREATE AND RUN CONTAINER:**  
> `docker run -dit --name meu_banco -p 5432:5432 -e POSTGRES_PASSWORD=aluno -v pgdata:/var/lib/postgresql postgres`  
> &nbsp;&nbsp;&nbsp;&nbsp; -dit →  detached + interactive + TTY (teletypewriter)  
> &nbsp;&nbsp;&nbsp;&nbsp; -p →  port  
> &nbsp;&nbsp;&nbsp;&nbsp; 5432 →  external port (host)  
> &nbsp;&nbsp;&nbsp;&nbsp; :5432 →  internal port (container)  
> &nbsp;&nbsp;&nbsp;&nbsp; -e → environment variable (--env)   
> &nbsp;&nbsp;&nbsp;&nbsp; -v → volume   
> &nbsp;&nbsp;&nbsp;&nbsp; pgdata → custom volume name (Named Volume)  
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Docker will store the volume at /var/lib/docker/volumes/pgdata/  
    > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "pgdata"'s position can be replaced with a path in host (Bind Mount)  
> &nbsp;&nbsp;&nbsp;&nbsp; :/var/[...] → path in the container that will be mirrored in the "pgdata" volume   

### Volume Commands:
> **CREATE VOLUME:**  
> `docker volume create <volume name>`  

> **LIST VOLUMES:**  
> `docker volume ls`  

> **INSPECT VOLUME:**  
> `docker volume inspect <volume name>`  

> **REMOVE VOLUME:**  
> `docker volume rm <volume name>`  

> **REMOVE UNUSED VOLUMES:**  
> `docker volume prune`  

#### Docker Hub:
https://hub.docker.com/

#### pgAdmin 4:
https://www.pgadmin.org/download/