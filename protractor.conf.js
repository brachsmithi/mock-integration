// Protractor configuration file, see Link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var jasmineReporters = require('jasmine-reporters');

var specReporter = new SpecReporter({
    spec: {
        displayStacktrace: true
    }
});

var junitReporter = new jasmineReporters.JUnitXmlReporter({
    savePath: 'test-results',
    filePrefix: 'e2e-test-results',
    consolidateAll: true
});

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.spec.ts'
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
        print: function() {}
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(specReporter);
        jasmine.getEnv().addReporter(junitReporter);
    }
};