const fs = require('fs');

const requestHandle = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url);
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My form message</title></head>');
        res.write('<body><h1>Send Message</h1><form action="/message" method="POST"><input type="Text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        // console.log('AAA');
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const bodyParser = Buffer.concat(body).toString();
            const data = bodyParser.split('=')[0];
            console.log(bodyParser);
            fs.writeFile('Message.txt', data, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello everyone</h1></body>');
    res.write('</html>');
    res.end();
        }

// module.exports = requestHandle;
// module.exports = {
//     requestHandle: requestHandle,
//     hardText: 'ITC School'
// };
exports.ABC = requestHandle;
exports.XYZ = 'ITC 123';
