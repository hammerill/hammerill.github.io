# [`static.hammerill.com`](https://static.hammerill.com/)
Static export of my website, [`hammerill.com`](https://hammerill.com/).

No. I won't give you the source code of the site itself (yet).

## Usage
Static export could be useful when server side has some troubles handling requests.
And here, it doesn't even think: just dumbly returning HTML, CSS and JS.

That's why I actually use it when my Next.js app is under maintenance (error 502): like compiling a new version...

That's how it's used in Nginx, `hammerill.com` server block:
```nginx
...

location / {
    proxy_pass ...;
    error_page 502 = https://static.hammerill.com$request_uri;
}

...
```

And `static.hammerill.com` server block:
```nginx
...

index index.html;

location / {
    try_files $uri $uri.html $uri/ =404;
}

...
```

## Pros and Cons
👍 Pros:
- **Independent**. Doesn't depend on some kind of server. Only static hosting (CDN) is required.
- **Very fast**. Probably faster than the Next.js app, but one has to test.

👎 Cons:
- **Stupid**. As there's no server in behind, requests cannot be handled correctly. For example:
    * **No middleware**. In case with this site it means that accessing root will forcefully take you to the English version, not your language amongst supported (EN|FR|RU|UA).
    * **No image optimization**. If you upload 4K img to your site, it will literally send it like that to the client.
