FROM node:18-slim AS build

WORKDIR /app

COPY index.js .

FROM node:18-slim

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "index.js"]
