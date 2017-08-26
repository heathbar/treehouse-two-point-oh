# TreeHouse

## Installation

```bash
docker-compose up --build
```

## Contributing / Development
Clone the repository
```bash
git clone <repo>
cd treehouse
```

Edit `docker-compose.yml` to map the volumes from your host machine to /treehouse on the app and web servers. You can also adjust ports here if desired.

```yaml
version: '2'

services:
  web:
    build: web
    ports:
      - "4200:4200"
    volumes:
      - "./web:/treehouse"

  app:
    build: app
    ports:
      - "3001:3001"
    volumes:
      - "./app:/treehouse"
    links:
      - database

  database:
    image: mongo
    ports:
      - "27017:27017"
```

Start the containers and install dependencies
```bash
# start the containers
docker-compose up --build

# execute `npm install` inside the container so the dependencies match the build environment versus your host environment
sudo docker-compose run app npm install
sudo docker-compose run web npm install
```