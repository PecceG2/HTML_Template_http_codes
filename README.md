[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/PecceG2/HTML_Template_http_codes">
    <img src="https://pecceg2.github.io/HTTP_Console_HTML_Template/logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">HTML Templates for HTTP status codes</h3>

  <p align="center">
    HTML Template HTTP Codes is a HTML templates to decorate your HTTP web server responses/errors
	<br />
	Change default nginx/apache templates for a responsive and more attractive design
    <br />
    <a href="https://github.com/PecceG2/"><strong>View all my projects »</strong></a>
    <br />
    <br />
    <a href="https://github.com/PecceG2/HTML_Template_http_codes/issues">Report Bug</a>
    ·
    <a href="https://github.com/PecceG2/HTML_Template_http_codes/blob/master/LICENSE.md">View License</a>
    ·
    <a href="https://github.com/PecceG2/HTML_Template_http_codes/issues">Request Feature</a>
  </p>
</p>

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
        error_page 404 /ErrorPages/404/index.html;
        error_page 500 /ErrorPages/500/index.html;
        error_page 503 /ErrorPages/503/index.html;
		error_page 503 /ErrorPages/504/index.html;
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
ErrorDocument 404 /ErrorPages/404/index.html
ErrorDocument 500 /ErrorPages/500/index.html
ErrorDocument 503 /ErrorPages/503/index.html
ErrorDocument 504 /ErrorPages/504/index.html
```

## License
>You can check out the full license [here](https://github.com/PecceG2/HTML_Template_http_codes/blob/master/LICENSE.md)

This project is licensed under the terms of the **MIT** license.

[contributors-shield]: https://img.shields.io/github/contributors/PecceG2/HTML_Template_http_codes.svg?style=flat-square
[contributors-url]: https://github.com/PecceG2/HTML_Template_http_codes/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PecceG2/HTML_Template_http_codes.svg?style=flat-square
[forks-url]: https://github.com/PecceG2/HTML_Template_http_codes/network/members
[stars-shield]: https://img.shields.io/github/stars/PecceG2/HTML_Template_http_codes.svg?style=flat-square
[stars-url]: https://github.com/PecceG2/HTML_Template_http_codes/stargazers
[issues-shield]: https://img.shields.io/github/issues/PecceG2/HTML_Template_http_codes.svg?style=flat-square
[issues-url]: https://github.com/PecceG2/HTML_Template_http_codes/issues
[license-shield]: https://img.shields.io/github/license/PecceG2/HTML_Template_http_codes.svg?style=flat-square
[license-url]: https://github.com/PecceG2/HTML_Template_http_codes/blob/master/LICENSE.md
