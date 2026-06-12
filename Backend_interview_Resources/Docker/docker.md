docker is openSoirce platofrm that allows
1)Automate
2)Deploymnet 
3)Scaling
4)and amangemnt  of applkicaiotn using containerizaion.


#)virtual  Machine
virtula machine act like seprate computer isnide your 
computer.
1)it allows  you to run  mukltiple o.s and applicaiont within them on a single physical
ex:in my sytem i have windows i want  to installed ubuntu 
sofwre woth the help of virtula machine
2)virtual machine are create  and manged by vitualization
software


Architecture:

VMs: Each VM runs a full operating system (OS) along with its own set of virtual hardware. This results in higher resource consumption.
Docker Containers: Containers share the host OS kernel and run as isolated processes. This makes them lightweight.
Resource Usage:

VMs: Require more disk space, memory, and CPU resources due to running a full OS.
Docker Containers: Use fewer resources since they leverage the host OS. This results in faster startup times.
Deployment:

VMs: Deployment is slower and more complex due to the need to boot an entire OS.
Docker Containers: Easier and faster to deploy as they don’t require starting a full OS.
Isolation:

VMs: Provide strong isolation as each VM is fully independent.
Docker Containers: Are isolated from each other but share the host OS, which can be suitable for many applications.
Portability:

VMs: Are generally portable but need to be compatible with the host OS.
Docker Containers: Highly portable, easily runnable on any system supporting Docker without worrying about the underlying OS.
Scalability:

VMs: Scaling requires creating new VMs, which is resource-intensive.
Docker Containers: Scaling is easy; you can quickly create more containers, as they are lightweight.
Ecosystem:

VMs: Require VM-specific tools and frameworks for management.
Docker Containers: Operate within the Docker ecosystem, which offers numerous tools for development and management.


Docker Image:


Docker Container:Containers are runtime env  created from docler image.
DockerEngine:docker engine is the runtime  that runs  and  manges containers. 
Docker Registry: docker registry is service that store  docker image.
1)Centralizd Resource
2)Easy versioning 
3)Share your dcker image when we are working in public
DockerFIle: a dockerfile is  that contians  instruciton to  build a docker iamge.
DockerHub: docker hub  is a cloud based registry  the hosts  a vast collection  of docker image.
pull: if we want  to use in our system .
push:we have to push to docker registry  so that anyine can use
Amazon ECR also provide docker registry

docker can we use in two ways in spring boot?
1)Either we have to use maven plugin that is their in pom.xml
2)We  have to create dockerfile inside root level


comamnd
#)docker 
-docker pull<image>
docker push<username/image>  push on docker hub
docker run -it -d -p <host-port>:<container-port>
--name<name><image>

it(interactive)
-d detach(run as separete process)

docker stop <container-id/container-name>
docker-start<container-id/container-name>
docker rm (removestop conaimer)
docker rmi (remove from laocal)
docker ps  (all container thst are runign)
docker ps -a  stop and runnign

docker pull: Downloads an image from a Docker repository (e.g., Docker Hub) to your local machine.
docker push: Uploads an image from your local machine to a Docker repository.
docker run: Creates and starts a container from a specified image.
docker stop: Stops a running container by providing the container ID or name.
docker start: Restarts a previously stopped container.
docker rm: Removes a stopped container from your system.
docker rmi: Deletes an image from your local system to free up space.
docker ps: Lists all running containers; docker ps -a shows all containers, including stopped ones.
docker images: Displays all Docker images available on your local machine.
docker exec: Runs a command in a running container, allowing access to its terminal.
docker build: Creates a new image from a Dockerfile in the current directory.
docker logs: Fetches logs from a specific running container for troubleshooting.
docker inspect: Provides detailed information about a container or image.



<!-- Docker install install  -->
docker run -d --name db -e POSTGRES_PASSWORD=mysecretpassword postgres:14


docker run -d --name pgadmin -e PGADMIN_DEFAULT_EMAIL=user@domain.com -e PGADMIN_DEFAULT_PASSWORD=SuperSecret dpage/pgadmin4     

using docker network commicate one network to other network

remove both continer
docker rm -f db pgadmin

docker network create my-network 


----------------------
docker run -d --name db  --network my-network -e POSTGRES_PASSWORD=mysecretpassword postgres:14
