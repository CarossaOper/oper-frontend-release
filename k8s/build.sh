minikube start

kubectl apply -f mongo-config.yaml
kubectl apply -f db-secret.yaml

kubectl apply -f mongo.yaml
kubectl apply -f frontend.yaml