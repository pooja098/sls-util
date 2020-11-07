const generator = require('./lib/configGenerator');

generator((error) => {
    if (error) {
        console.error('Failed to generate serverless config', error);
        return;
    }

    console.info('Generated serverless.yml for your app');
});