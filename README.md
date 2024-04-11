# `static.hammerill.com`
Static export of my website, `hammerill.com`.

No. I won't give you the source code of the site itself (yet).

## Usage
Static export could be useful when server side has some troubles handling requests.
And here, it doesn't even think: just dumbly returning HTML, CSS and JS.

That's why I actually use it when my Next.js app is under maintenance (error 502): like compiling a new version...

That's how it's used in Nginx, `hammerill.com` server block:
```conf
...

location / {
    proxy_pass ...;
    error_page 502 = https://static.hammerill.com$request_uri;
}

...
```

And `static.hammerill.com` server block:
```conf
...

index index.html;

location / {
    try_files $uri $uri.html $uri/ =404;
}

...
```
