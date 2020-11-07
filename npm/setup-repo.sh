# we will clone the nextjs applicaiton and add serverless.yml

set -e;

URL=$1;

if [[ -z $1 ]];
then 
 echo "Enter the repository link: ";
 read URL;
fi

# check if valid git repo link
if [[ $URL =~ ^https://.*\.git$ ]]; 
then 
    echo "Valid git repo";
    [[ -d out ]] && rm -rf out;
    mkdir -p out;
    pushd out > /dev/null 2>&1;
    git clone $URL;
    pushd $(ls) > /dev/null 2>&1;
    npm i
    popd > /dev/null 2>&1;
    popd > /dev/null 2>&1;
    exit;
fi

echo "Provide a public github repository url"
echo "Eg: https://github.com/lol/troll.git"

# error exit to stop further execution of magic
exit 1;
