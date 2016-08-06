const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application-json;charset:utf-8'
    });
    const url = req.url;
    console.log('url', url);
    const listagem = [{
        nome: 'tiago',
        idade: '23'
    }, {
        nome: 'alex',
        idade: '23'
    }, {
        nome: 'suissa',
        idade: '30'
    }, {
        nome: 'neuso',
        idade: '58'
    }];
    switch (url) {
        case '/listar':
            res.write(JSON.stringify(listagem));
            break;
        case '/criar':
            res.write('criar');
            break;
        case '/atualizar':
            res.write('atualizar');
            break;
        case '/remover':
            res.write('criar');
            break;
        default:
        res.write('<h1>hello world</h1>');
    }
    res.end();
}).listen(3000);
console.log('server rodando em localhost:3000');
