FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["yarn", "start"]
