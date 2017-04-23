exports.config = {
    allScriptsTimeout: 11000,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeDriver: '/usr/bin/chromedriver',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['test-01.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};