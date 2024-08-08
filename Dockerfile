FROM node:16-alpine as builder 
WORKDIR '/app'
COPY package.json . 
RUN npm install 
COPY . . 
RUN npm run build 

# /app/build <--- this folder will have everything we want 
# each from statement that we put in the Dockerfile 
# basically terminates the previous FROM statement 
# that the Dockerfile was working on. 
# Each block can only have 1 FROM statement
FROM nginx 
# on our machines the expose instruction wouldn't mean anything
# but on ELB, the container spun up will look for the EXPOSE
# instruction and will map the following port
# 
EXPOSE 80
# copy '/app/build' directory from the previous 'builder' phase 
COPY --from=builder /app/build /usr/share/nginx/html

#this is multi-step build since we use multiple FROM statements