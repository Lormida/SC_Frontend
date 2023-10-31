### Install dependencies

```bash
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Run docker-compose

```bash
pnpm run docker:run:dev
```
### Create directus migration

```bash
pnpm run directus:create-snapshot --name=test1
```
- If you can't create migration within docker(due to lack of permissions) - use this command:

```bash
docker exec -u root sc_directus_container chown -R node:node /directus/database /directus/extensions /directus/uploads /directus/snapshots
```

### Apply directus migration

```bash
pnpm run directus:apply-snapshot --name=test1
```
