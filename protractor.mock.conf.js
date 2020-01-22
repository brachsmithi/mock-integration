// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var jasmineReporters = require('jasmine-reporters');
const child_process = require('child_process');
const path = require('path');

var specReporter = new SpecReporter({
    spec: {
        displayStacktrace: true
    }
});

var junitReporter = new jasmineReporters.JunitXmlReporter({
    savePath: 'test-results',
    filePrefix: 'e2e-test-results',
    consolidateAll: true
});

let mockApiServer;

exports.config = {
    specs: [
        '.e2e/**/*.int-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {}
    },
    beforeLaunch: function() {
        mockApiServer = child_process.spawn('node',
          [path.join(__dirname, '/e2e/mock/server/mock-api-server.js')],
          {cwd: __dirname, stdio: 'inherit'});
        process.on('exit', () => mockApiServer.kill());

        return new Promise(function(resolve) {
            screenshotReporter.beforeLaunch(resolve);
        });
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(specReporter);
        jasmine.getEnv().addReporter(junitReporter);
    },
    afterLaunch: function(exitCode) {
        mockApiServer.kill();
    },
    plugins: [{
        package: '@ng-apimock/protractor-plugin',
        options: {
            globalName: 'ngApimock'
        }
    }]
};