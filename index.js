const generator = require('./lib/configGenerator');

generator((error) => {
    if (error) {
        console.error('Failed to generate serverless config', error);
        process.exit(1);
    }

    console.info('Generated serverless.yml for your app');
});