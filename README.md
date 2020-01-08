## Peakwork Test

### Download Docker

You need Docker for the running the whole project from the root directory. You
can download it from the official site https://www.docker.com/get-started for
the OS that you have.

### Configure database

> If you wanna to use docker-compose file:

You need to set the connection string to your database in
`docker-compose.dev.yml` or `docker-compose.prod.yml` files by changing
`DB_CONN` variables.

> If you wanna run each server independently:

Create .env file in the logger directory (logger/). Then create `DB_CONN`
variable in this format:

```
DB_CONN="YOUR_CONNECTION_STRING"
```

After that the server will create collection called `logs` in your mongo
database.

Same with the `server` directory.

## Installation

Go to https://cloud.google.com/docs/authentication/getting-started and download
and create service account key. Then place the credentials file in logger and
sever folders. Set an environment variable in logger and server directories:

```
GOOGLE_APPLICATION_CREDENTIALS=[PATH]
```

> If you wanna to use docker-compose file:

Simply change `GOOGLE_APPLICATION_CREDENTIALS` variable in
`docker-compose.dev.yml` or `docker-compose.prod.yml` files

## Run the whole project via Docker

You need to navigate for the root directory where is the `docker-compose.yml`
files is and type this code:

```
docker-compose -f "docker-compose.filename" up
```

It will run docker composer, and after all downloads and instalations you can
access front-end part in your browser from http://localhost:8080/ by default.

## To deploy the app you need to follow next steps:

First of all you need to deploy `server` and `logger` projects by following step
in [Set up and configure](#Set-up-and-configure).

Then you should grab the external IP with port of server deployment and change
the REACT_APP_BASE_URL in Dockerfile in front directory. And then build frontend
directory by following [Set up and configure](#Set-up-and-configure) steps.

### Set up and configure

1. Install Google Cloud SDK
   https://cloud.google.com/sdk/docs/quickstarts?authuser=3
2. Install Kubernetes by running this command:
   `gcloud components install kubectl`
3. In your local command line tool set up the project ID by running this
   command: `export PROJECT_ID=[PROJECT_ID]` You can grab the project ID from
   this page https://console.cloud.google.com/home/dashboard

### Configure environment for the projects

Create .env files in `server` and `logger` directories. Then paste next lines:

```
DB_CONN="[YOUR_CONNECTION_STRING_TO_MONGO]"
GOOGLE_APPLICATION_CREDENTIALS="[PATH_TO_CREDENTIALS_FILE]"
```

You can get credentials file in this page:
https://cloud.google.com/docs/authentication/getting-started. You should place
this file in server and logger directories.

### Build docker-image

Run `docker build -t gcr.io/${PROJECT_ID}/${DESIRED-IMAGE-NAME}:v1 .` when you
are in the desired folder. For example server folder:
`docker build -t gcr.io/${PROJECT_ID}/demo-server:v1 .`

You can see all your images by runnig next command: `docker images`

### Upload your container to google cloud

1. Authenticate yourself by running this command: `gcloud auth configure-docker`
2. Push to a registry:
   `docker push gcr.io/${PROJECT_ID}/${CREATED-IMAGE-NAME}:v1`

For example with server image: `docker push gcr.io/${PROJECT_ID}/demo-server:v1`

### Create a container cluster

Configure environment by runnig next commands:

```
gcloud config set project $PROJECT_ID
gcloud config set compute/zone [COMPUTE_ENGINE_ZONE]
```

You can grab your project ID from this page:
https://console.cloud.google.com/home/dashboard.

And engine zone: https://cloud.google.com/compute/docs/zones

Then create a cluster:
`gcloud container clusters create ${DESIRED-NAME-OF-YOUR-CLUSTER} --num-nodes=2`

You can check your instanses by running: `gcloud compute instances list`

### Deploy

The next step would be deployment. For that you need to run nex command:
`kubectl create deployment ${DESIRED-DEPLOYMENT-NAME} --image=gcr.io/${PROJECT_ID}/${CREATED-IMAGE-NAME}:v1`

For example with server image:
`kubectl create deployment demo-server --image=gcr.io/${PROJECT_ID}/demo-server:v1`

This command will create you a pod for your docker image. You can see all your
pods by running this command: `kubectl get pods`

### Expose your app

To get the access to your app in the internet you need expose it by running next
command:
`kubectl expose deployment ${CREATED-DEPLOYMENT-NAME} --type=LoadBalancer --port ${LOAD-BALANCER-PORT} --target-port ${LISTENING-PORT}`

For example with server deployment:
`kubectl expose deployment demo-server --type=LoadBalancer --port 5000 --target-port 5000`

Then you should check the external IP for your app by running:
`kubectl get service`

The output would be:

```bash
NAME                TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)          AGE
demo-server         LoadBalancer   10.31.255.163   35.242.200.521   5000:30177/TCP   49m
```

And now you can access your app by entering the http://35.242.200.521:5000 in
your browser search line.

### What needs to be done for production:

1. API documentation.
2. Implement tests for both sides (frontend/backend), unit + e2e (front).
3. For the server side we shoud have static domain or IP or some sort of
   gateway.
4. Not dynamic styling for components in frontend.
