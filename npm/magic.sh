# we orchastrate things from here

# Clone the directory if not already available - done
# Install serverless globally- done
# Setup AWS credentials
# Create serverless.yml - done
# Custom domain - not doing
# Cache configurations - not doing
# Deploy

# bailout on first error
set -e;

npm i

npm run check-sls;

npm run setup-repo;

npm run setup-sls;

npm run deploy;
