const fs = require('fs');

module.exports = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Deep Node JS</title></head>');
        res.write('<form method="post" action="/message"><input name="message" placeholder="Enter a message"/><button type="submit">Send Message</button></form><br><br>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const data = []
        req.on('data', chunk => {
            data.push(chunk);
        });

        req.on('end', () => {
            const message = Buffer.concat(data).toString().split(/=/)[1].replace(/\+/g, ' ')
            fs.writeFile('message.txt', message, (err) => {
                if (err){
                    console.log(err)
                }
                
                res.writeHead(302, {
                    location: '/'
                })        
                return res.end();
            });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Deep Node JS - Home</title></head>');
    res.write('<h1>Hello World</h1>');
    res.write('</html>');
    return res.end();
}