# HTTP Console HTML Template #
HTTP Error Pages Template. Change default nginx/apache templates for a responsive and more attractive design.

![Screenshot](https://pecceg2.github.io/HTTP_Console_HTML_Template/readme-banner.png)

## Templates demo ##
* [HTTP404](https://pecceg2.github.io/HTTP_Console_HTML_Template/404/)
* [HTTP500](https://pecceg2.github.io/HTTP_Console_HTML_Template/500/)
* [HTTP503](https://pecceg2.github.io/HTTP_Console_HTML_Template/503/)
* [HTTP504](https://pecceg2.github.io/HTTP_Console_HTML_Template/504/)

## Usage ##
Just clone/download the git repository (The html files are included on error number folder, example "500/index.html" for 500 Internal Server Error)

### NGINX Integration ###

[NGINX](http://nginx.org/en/docs/http/ngx_http_core_module.html#error_page) supports custom error-pages using multiple `error_page` directives.

File: [`nginx.conf`](https://www.nginx.com/resources/wiki/start/topics/examples/full/) (/etc/nginx/)

Example - assumes HttpErrorPages are located into `/var/html/www/ErrorPages`.

```nginx
server {
    listen      80;
    server_name localhost;
    root        /var/html/www;
    index       index.html;
    
    location / {
        try_files $uri $uri/ =404;
        
        # add one directive for each http status code
        error_page 404 /ErrorPages/HTTP404.html;
        error_page 500 /ErrorPages/HTTP500.html;
        error_page 503 /ErrorPages/HTTP503.html;
		error_page 503 /ErrorPages/HTTP503.html;
    }

    # redirect the virtual ErrorPages path the real path
    location /ErrorPages/ {
        alias /var/html/www/ErrorPages/;
        internal;
    }
```

## Apache Httpd Integration ##
[Apache Httpd 2.x](http://httpd.apache.org/) supports custom error-pages using multiple [ErrorDocument](http://httpd.apache.org/docs/2.4/mod/core.html#errordocument) directives.

File: `httpd.conf` or `.htaccess`

Example - assumes HttpErrorPages are located into your **document root** `/var/www/...docroot../ErrorPages`.

```ApacheConf
ErrorDocument 404 /ErrorPages/HTTP404.html
ErrorDocument 500 /ErrorPages/HTTP500.html
ErrorDocument 503 /ErrorPages/HTTP503.html
ErrorDocument 504 /ErrorPages/HTTP504.html
```

## License ##
[License for this project](LICENSE.md)