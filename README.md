# bitcoinz-infosite install

git clone https://github.com/btcz/bitcoinz-infosite.git

npm install

npm start

Environment:

> Node.js 8.6.0

> Apache reverse proxy

# Create self-signed certificate 

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

# MIT License

# Copyright (c) 2018 BitcoinZ Community

```Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.```
