## Bloco V - Nginx
### Prof. Diego Martins

> **Workflow:**  
> **1** Configure reverse proxy in /etc/nginx/sites-available/my-site  
>&nbsp;&nbsp;&nbsp;&nbsp;`sudo nano /etc/nginx/sites-available/my-site`  
> ``` 
> server {  
>   listen 80;  
>   server_name localhost;  
>   location / {  
>   proxy_pass http://localhost:8080;  
>   proxy_set_header Host $host;  
>   proxy_set_header X-Real-IP $remote_addr;  
>   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
>   }  
> }  
> ``` 
> **2** Create symlink in /etc/nginx/sites-enabled  
> &nbsp;&nbsp;&nbsp;&nbsp;`sudo ln -s /etc/nginx/sites-available/meu-proxy /etc/nginx/sites-enabled/`  
> &nbsp;&nbsp;&nbsp;&nbsp;`ls /etc/nginx/sites-enabled/default`  
> &nbsp;&nbsp;&nbsp;&nbsp;`sudo rm /etc/nginx/sites-enabled/default`  
>
> **3** Test with nginx -t  
> &nbsp;&nbsp;&nbsp;&nbsp;`sudo nginx -t`  
>
> **4** Restart to apply changes  
> &nbsp;&nbsp;&nbsp;&nbsp;`sudo systemctl reload nginx`  
>
> **5** Check log  
> &nbsp;&nbsp;&nbsp;&nbsp;`tail -f /var/log/nginx/access.log` 

### Introdução

O Nginx é um dos softwares de código aberto mais utilizados no mundo para a infraestrutura da internet, atuando principalmente em três frentes:  

* **Web Server:** Para entregar arquivos estáticos (como páginas HTML, imagens e CSS) direto para o navegador do usuário.  
* **Load Balancer:** Para distribuir o peso dos acessos entre vários servidores diferentes, evitando que um só caia por sobrecarga.  
* **Server Cache:** Para guardar respostas e acelerar acessos futuros.  
* **Reverse Proxy:** O intermediário que recebe as requisições da internet e as repassa para os servidores internos da sua aplicação.  

### Reverse proxy / surrogate server  
Um servidor que fica entre o cliente e o servidor de aplicação.  

**Distribuição de carga:** envia requisições para diferentes servidores, evitando sobrecarga.  
**Segurança:** esconde os servidores internos, funcionando como uma camada de proteção.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Isolamento de Portas:** Aplicações Node.js, Python ou Java costumam rodar em portas altas (como 3000, 5000 ou 8080). O usuário não precisa conhecer essas portas, o Nginx escuta a porta padrão 80 (HTTP) ou 443 (HTTPS) e faz o redirecionamento interno.  
**Cache:** guarda respostas para reduzir tempo de resposta e economizar recursos.  
**SSL/TLS:** pode centralizar a criptografia (HTTPS), simplificando a configuração nos servidores internos.  


### Arquivos (/etc/nginx/):
> **nginx.conf**  
>&nbsp;&nbsp;&nbsp;&nbsp; É o primeiro arquivo que o software lê quando iniciado. Define configurações globais como:  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantos processos o Nginx vai usar para administrar os acessos;  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Onde serão salvos os logs de erro gerais;  
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Especificações de desempenho e otimização de rede.  

**sites-available/**  
Guarda configurações para sites e proxies. Cada site ou serviço ganha um arquivo de texto simples dentro dessa pasta.

**sites-enabled/**  
Contém os sites que estão efetivamente rodando e visíveis para a internet.  
  
Essa pasta guarda apenas atalhos (symlinks) apontando para os arquivos de configuração correspondentes em sites-available/  

**/var/www/html/**  
Default root folder for nginx default index.html  

> **Possible index.html conflict**  
> Apache2 (httpd, pgadmin4) knowingly points to the same folder and uses a default test page that is also called index.html.  
> 
> To avoid two packages pointing to the same file, debian package (apt) forces nginx to call its html something else if it's installed after:  
> &nbsp;&nbsp;&nbsp;&nbsp;index.html → index.nginx-debian.html  
>  
> ... and adds that name to a list of files that nginx should look for in its root folder. Ultimately, this causes a bug wherein nginx creates a different file name, but still searches for the default index.html first.
> So if Apache or another program has already created an index.html page, nginx will find it and load it instead.  
>  
> To fix this, we may change nginx's root folder:  
> **1.** Create an nginx folder at /www/ (or anywhere else, really):  
> &nbsp;&nbsp;&nbsp;&nbsp;sudo mkdir -p /var/www/nginx  
>  
> **2.** Bring nginx's html folder to it and optionally rename it back to index.html:  
> &nbsp;&nbsp;&nbsp;&nbsp;sudo mv /var/www/html/index.nginx-debian.html /var/www/nginx/index.html  
>  
> **3.** Edit nginx's default site to change its root from  
> &nbsp;&nbsp;&nbsp;&nbsp;root /var/www/html;  
> to  
> &nbsp;&nbsp;&nbsp;&nbsp;root /var/www/nginx;

### Load Balancer
O load balancing permite que o Nginx distribua as requisições recebidas entre diferentes servidores que hospedam um mesmo serviço.  

A configuração é feita no `sites-available` junto com a configuração reverse proxy:

```
upstream backend {
    server 192.168.1.10;
    server 192.168.1.11;
    server 192.168.1.12;
    }
server {
    listen 80;
    server_name meusite.com;
    location / {
        proxy_pass http://backend;
    }
}
```
O algorítmo padrão de load balancing é o **round robin**, que distribui uma requisição após a outra para cada um dos servidores de forma sequencial.

**O que muda na configuração com load balancer:**  
1. Bloco upstream define os servidores que compõem o backend;  
2. proxy_pass aponta para o upstream em vez de apontar a um único servidor.  

#### Nginx Debian apt:  
https://nginx.org/en/linux_packages.html#Debian