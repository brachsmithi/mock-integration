const apimock = require('@ng-apimock/core');
const connect = require('connect');

apimock.processor.process({
    src: 'e2e/mock/response',
    patterns: {
        mocks: '**/*.mock.json',
        presets: '**/*.preset.json'
    },
    watch: true
});

const app = connect();
app.use(apimock.middleware);
app.use((request, response, next) => {
    if (request.method === 'OPTIONS') {
        response.writeHead(204, {
            'Access-Control-Allow-Methods': 'OPTIONS, GET',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        response.end();
    }
    next();
});

app.listen(9900);