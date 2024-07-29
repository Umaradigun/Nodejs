const express = require ('express');
const swaggerdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes/routes');
const authenticateToken = require ('./Middlewares/authMiddleware')



const app = express();
app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            tittle: 'Decentralized Social Network Api',
            version : '1.0.0',
            description: 'API for a decentralized social network'
        },
    },
    apis: ['./src/routes.js']
};


const swaggerSpec = swaggerjsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/',authenticateToken,routes)


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})