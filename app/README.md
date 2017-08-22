# TreeHouse

### Docker Setup
```bash
docker build -t treehouse-app .
docker run --name treehouse -p 3001:3001 treehouse-app
```

### Developer Setup
```bash
cd /path/to/workspace/treehouse/app
npm install
gulp develop
```

### Developer + Docker Setup
```bash
cd /path/to/workspace/treehouse/app

# build the docker image
docker build -t treehouse-app .

# run docker image, use files from host workspace
docker run --name treehouse -p 3001:3001 -v /path/to/workspace/treehouse/app:/treehouse treehouse-app

npm install
gulp watch

# TODO: need to run nodemon in the container
```