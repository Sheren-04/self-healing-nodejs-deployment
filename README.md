# 🚀 Self-Healing Node.js Deployment System (AWS + Terraform + CI/CD)

## 📌 Overview

This project demonstrates a **cloud-native, self-healing deployment system** built using AWS, Terraform, Docker, and GitHub Actions.

It goes beyond simple deployment by implementing **automated failure detection and recovery**, ensuring high availability with minimal manual intervention.

## 🎯 Problem Statement

Traditional deployments:
- Require manual intervention when the application crashes
- Lack automated recovery mechanisms
- Provide limited visibility into runtime failures


## ✅ Solution

Built a **self-healing deployment pipeline** that:

- Automatically deploys application using CI/CD
- Continuously monitors application health
- Detects failures in real-time
- Automatically restarts services when failures occur
- Logs system activity for observability

## 🏗️ Architecture

```
GitHub Push
↓
GitHub Actions (CI/CD)
↓
SSH Deployment to AWS EC2
↓
Docker Compose (Containerized App)
↓
Health Check Endpoint (/health)
↓
Cron Job (Monitoring Script)
↓
Auto Restart on Failure (Self-Healing)
↓
AWS CloudWatch (Logs & Monitoring)
```
## ⚙️ Tech Stack

- **Cloud:** AWS EC2
- **Infrastructure as Code:** Terraform
- **CI/CD:** GitHub Actions
- **Containerization:** Docker, Docker Compose
- **Backend:** Node.js (Express)
- **Monitoring:** Cron Jobs + AWS CloudWatch
- **Version Control:** Git & GitHub

## 🔥 Key Features

### 🚀 Automated CI/CD Pipeline
- Triggered on every push to main branch
- Deploys application to EC2 via SSH
- Builds and runs containers using Docker Compose

### 🐳 Containerized Application
- Node.js app containerized using Docker
- Managed using Docker Compose
- Easy reproducibility and deployment

### ❤️ Health Check System
- `/health` endpoint implemented in Node.js
- Returns HTTP 200 when service is healthy
- Used by monitoring script for status checks

### 🔁 Self-Healing Mechanism
- Cron job runs every minute
- Executes monitoring script
- Detects failure using HTTP status
- Automatically restarts application container

### 🛡️ Failure Handling
Handles:
- Container crashes
- Application downtime
- Runtime failures

Prevents:
- Infinite restart loops (retry logic implemented)

### 📊 Logging & Monitoring
- Logs stored locally via monitoring script
- Integrated with AWS CloudWatch
- Enables debugging and observability

## 🧪 Testing Strategy

The system was tested using failure simulations:

```
| Test Case | Expected Result |
|----------|---------------|
| Stop container | Auto-restart within 1 minute |
| Remove container | Recreated automatically |
| Break application | Restart triggered |
| Health endpoint failure | Recovery executed |
```
## ⚠️ Limitations

- Does not handle infrastructure-level failures (EC2 down)
- Cannot auto-fix configuration errors (e.g., wrong ports)
- Cron-based monitoring (not real-time like Kubernetes)

## 🚀 Future Improvements

- Replace cron with real-time monitoring (systemd/Kubernetes)
- Add alerting system (Slack/Email)
- Implement blue-green or rolling deployments
- Use AWS ECS/EKS for orchestration
- Add metrics dashboard (Prometheus + Grafana)

## 📦 Setup Instructions

### 1️⃣ Clone Repository
```
git clone https://github.com/YOUR_USERNAME/self-healing-nodejs-deployment.git

cd self-healing-nodejs-deployment
```

### 2️⃣ Provision Infrastructure
```
cd terraform
terraform init
terraform apply
```

### 3️⃣ Deploy Application (CI/CD)
- Push code to `main` branch
- GitHub Actions will automatically deploy


### 4️⃣ Access Application
```
http://<EC2_PUBLIC_IP>:8000
```

## 📁 Project Structure
```
.
├── app/ # Node.js application
├── terraform/ # Infrastructure as Code
├── .github/workflows/ # CI/CD pipeline
├── monitor.sh # Self-healing script
└── docker-compose.yml # Container orchestration
```
## 🧠 Key Learnings

- Designed resilient deployment systems with automated recovery
- Implemented Infrastructure as Code using Terraform
- Built CI/CD pipelines using GitHub Actions
- Understood real-world failure scenarios and handling strategies
- Integrated monitoring and logging with CloudWatch

## 📌 Author
**Sheren**

---

## ⭐ If you found this useful, consider giving it a star!
