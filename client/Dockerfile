FROM node:alpine 

WORKDIR client


COPY package.json package.json
COPY package-lock.json package-lock.json 
COPY src src
#COPY node_modules node_modules
COPY public public

ENV PATH /client/node_modules/.bin:$PATH
RUN echo $PATH
#RUN yarn add bootstrap
#RUN yarn add popper.js@^1.16.1
#RUN yarn add jquery@1.9.1 - 3
RUN npm install -g n

#RUN ls 

CMD ["npm", "run", "start"]

EXPOSE 3000