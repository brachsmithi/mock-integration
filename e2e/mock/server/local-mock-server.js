const devInterface = require('@ng-apimock/dev-interface');
const apimock = require('@ng-apimock/core');
const serveStatic = require('serve-static');

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
app.use('/dev-interface/', serveStatic(devInterface));
app.use((request, response, next) => {
    if (request.method === 'OPTIONS') {
        response.writeHead(204, {
            'Access-Control-Allow-Methods': 'OPTIONS, GET',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        response.end();
    }
    return next();
});

app.listen(9900);
console.log('Mock server is running on port 9900');