// importação de pacotes e importação de rotas

import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import router from './routes.js';

const server = express ();

server.use(morgan('tiny'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// chama os arquivos html da pasta public

server.use(express.static('public'));

// execução das rotas no server

server.use(router);

// execução do servidor na porta 3000

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});