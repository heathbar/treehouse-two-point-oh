# Treehouse Web Frontend

### Docker Setup
```bash
docker build -t treehouse-web .
docker run -d --name treehouse-web -p 4200:4200 treehouse-web
```

### Local development setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Developer + Docker Setup
```bash
cd /path/to/workspace/treehouse/web
npm install

# build the docker image
docker build -t treehouse-web .

# run docker image, use files from host workspace
docker run --name treehouse -p 4200:4200 -v /path/to/workspace/treehouse/web:/treehouse treehouse-web
```