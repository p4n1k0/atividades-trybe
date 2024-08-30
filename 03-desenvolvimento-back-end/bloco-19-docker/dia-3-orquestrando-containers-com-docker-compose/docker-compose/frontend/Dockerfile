FROM node:16-alpine

WORKDIR /frontend
COPY . .
RUN npm install 
ENV BROWSER=none
ENTRYPOINT ["npm"]
CMD ["start"]
