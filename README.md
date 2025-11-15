# Digital Twin Chat Application

A full-stack chat application that leverages AWS services for deployment and scaling. The application features a Next.js frontend and a FastAPI backend, with infrastructure managed using Terraform.

## Features

- Real-time chat interface
- Conversation history stored in S3
- Serverless architecture with AWS Lambda
- Content Delivery Network (CDN) with CloudFront
- Infrastructure as Code with Terraform

## Prerequisites

- Python 3.9+
- Node.js 18+
- AWS Account with appropriate permissions
- Terraform 1.0+
- UV package manager (for Python)

## Project Structure

```
.
├── backend/              # FastAPI backend
│   ├── chatbot/         # Chatbot logic and agents
│   ├── config/          # Configuration files
│   ├── db/              # Database models and connections
│   └── requirements.txt # Python dependencies
├── frontend/            # Next.js frontend
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   └── public/          # Static assets
└── terraform/           # Infrastructure as Code
```

## Local Development

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies using UV:
   ```bash
   uv add -r requirements.txt
   ```

3. Set up environment variables in `.env`:
   ```
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_REGION=ap-southeast-1
   S3_BUCKET_NAME=twin-memory-253490765828
   ```

4. Start the development server:
   ```bash
   uv run uvicorn index:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Deployment

### Prerequisites
- AWS CLI configured with appropriate credentials
- Terraform installed
- S3 buckets created:
  - `twin-memory-253490765828` (for chat history)
  - `twin-frontend-253490765828` (for frontend static files)

### Backend Deployment

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Update dependencies and create deployment package:
   ```bash
   uv add -r requirements.txt
   uv run deploy.py
   ```

3. Upload the generated zip file to AWS Lambda

### Frontend Deployment

1. Build the production bundle:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the static files to S3:
   ```bash
   aws s3 sync out/ s3://twin-frontend-253490765828 --delete
   ```

### Infrastructure with Terraform

1. Navigate to the terraform directory:
   ```bash
   cd terraform
   ```

2. Initialize Terraform:
   ```bash
   terraform init
   ```

3. Review the execution plan:
   ```bash
   terraform plan
   ```

4. Apply the changes:
   ```bash
   terraform apply
   ```

## Environment URLs

- **Frontend S3 Endpoint**: http://twin-frontend-253490765828.s3-website-ap-southeast-1.amazonaws.com
- **API Gateway URL**: https://hvg8po5c6c.execute-api.ap-southeast-1.amazonaws.com/
- **CloudFront Distribution**: https://d39xcn1fuympg0.cloudfront.net/

## Code Formatting

To format Python code:
```bash
cd backend
uv run black .
```

## Infrastructure as Code

The project uses Terraform for infrastructure management. Key components include:
- AWS Lambda for serverless backend
- API Gateway for API management
- S3 for static file hosting and chat history
- CloudFront CDN for content delivery
- IAM roles and policies for security

## License

[Specify your license here]

## Contact

[Your contact information]
