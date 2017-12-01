# bitcoinz-infosite install

git clone https://github.com/btcz/bitcoinz-infosite.git

npm install

npm start

Environment:

> Node.js 8.6.0
> Apache reverse proxy

# create self-signed certificate 

This application is used via Cloudflare and a self-signed certficate is sufficient.  You can generate a certificate with:

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout info.btcz.rocks.key -out info.btcz.rocks.crt`

The generated files should be placed in certs/ directory


# Apache Reverse Proxy Settings

```
<VirtualHost *:443>
SSLEngine On
SSLProxyEngine On
SSLCertificateFile /path/to/cert/file/info.btcz.rocks.crt
SSLCertificateKeyFile /path/to/cert/file/info.btcz.rocks.key
ProxyPreserveHost On
ProxyPass / https://127.0.0.1:3001/
ProxyPassReverse / https://127.0.0.1:3001/
ServerName info.btcz.rocks
</VirtualHost>
```
