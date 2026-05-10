export type SkillItem = {
  name: string;
  logo: string;
  logoScale?: number;
  logoTranslateY?: number;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Agentic AI Systems",
    items: [
      {
        name: "LangChain",
        logo: "https://api.iconify.design/simple-icons/langchain.svg",
        logoScale: 0.76,
      },
      {
        name: "LangGraph",
        logo: "https://api.iconify.design/lucide/workflow.svg",
        logoScale: 0.82,
        logoTranslateY: 1,
      },
      { name: "LangSmith", logo: "https://api.iconify.design/lucide/bot-message-square.svg" },
      { name: "Ollama", logo: "https://api.iconify.design/simple-icons/ollama.svg" },
      { name: "Context Engineering", logo: "https://api.iconify.design/lucide/network.svg" },
      { name: "Agent Orchestration", logo: "https://api.iconify.design/lucide/blocks.svg" },
      { name: "Function Calling Agents", logo: "https://api.iconify.design/lucide/cable.svg" },
      { name: "Tool-Using AI Systems", logo: "https://api.iconify.design/lucide/wrench.svg" },
    ],
  },
  {
    title: "Data Science Stack",
    items: [
      {
        name: "PyTorch",
        logo: "https://api.iconify.design/simple-icons/pytorch.svg",
        logoScale: 0.78,
      },
      { name: "PyTorch Lightning", logo: "https://api.iconify.design/lucide/zap.svg" },
      { name: "Scikit Learn", logo: "https://api.iconify.design/simple-icons/scikitlearn.svg" },
      { name: "Accelerate", logo: "https://api.iconify.design/lucide/rocket.svg" },
      { name: "ONNX", logo: "https://api.iconify.design/simple-icons/onnx.svg" },
      { name: "NumPy", logo: "https://api.iconify.design/simple-icons/numpy.svg" },
      { name: "Matplotlib", logo: "https://api.iconify.design/lucide/chart-column.svg" },
      { name: "OpenCV", logo: "https://api.iconify.design/simple-icons/opencv.svg" },
      { name: "Pandas", logo: "https://api.iconify.design/simple-icons/pandas.svg" },
      { name: "Pillow", logo: "https://api.iconify.design/lucide/image.svg" },
      { name: "MLflow", logo: "https://api.iconify.design/simple-icons/mlflow.svg" },
      { name: "Weights & Biases", logo: "https://api.iconify.design/simple-icons/weightsandbiases.svg" },
      { name: "Stable-Baselines", logo: "https://api.iconify.design/lucide/landmark.svg" },
      { name: "DeepSpeed", logo: "https://api.iconify.design/lucide/gauge.svg" },
      { name: "LLM", logo: "https://api.iconify.design/lucide/messages-square.svg" },
      { name: "Stable Diffusion", logo: "https://api.iconify.design/lucide/sparkles.svg" },
      { name: "HuggingFace", logo: "https://api.iconify.design/simple-icons/huggingface.svg" },
      { name: "Milvus", logo: "https://api.iconify.design/simple-icons/milvus.svg" },
      { name: "DVC", logo: "https://api.iconify.design/simple-icons/dvc.svg" },
    ],
  },
  {
    title: "LLM Systems",
    items: [
      { name: "RAG", logo: "https://api.iconify.design/lucide/database-zap.svg" },
      { name: "Prompt Engineering", logo: "https://api.iconify.design/lucide/file-pen-line.svg" },
      { name: "Tool Calling", logo: "https://api.iconify.design/lucide/wrench.svg" },
      { name: "Multi-Agent Workflows", logo: "https://api.iconify.design/lucide/git-branch-plus.svg" },
      { name: "Structured Generation", logo: "https://api.iconify.design/lucide/braces.svg" },
    ],
  },
  {
    title: "Cloud Stack",
    items: [
      {
        name: "Docker",
        logo: "https://api.iconify.design/simple-icons/docker.svg",
        logoScale: 0.82,
      },
      { name: "GCP", logo: "https://api.iconify.design/simple-icons/googlecloud.svg" },
      { name: "AWS", logo: "https://api.iconify.design/simple-icons/amazonwebservices.svg" },
      { name: "DigitalOcean", logo: "https://api.iconify.design/simple-icons/digitalocean.svg" },
      { name: "GKE", logo: "https://api.iconify.design/lucide/boxes.svg" },
      { name: "Terraform", logo: "https://api.iconify.design/simple-icons/terraform.svg" },
      { name: "Vertex AI", logo: "https://api.iconify.design/lucide/brain-circuit.svg" },
      { name: "Lambda", logo: "https://api.iconify.design/simple-icons/awslambda.svg" },
      { name: "S3", logo: "https://api.iconify.design/simple-icons/amazons3.svg" },
    ],
  },
  {
    title: "Languages and Backend",
    items: [
      {
        name: "Python",
        logo: "https://api.iconify.design/simple-icons/python.svg",
        logoScale: 0.82,
      },
      { name: "C++", logo: "https://api.iconify.design/simple-icons/cplusplus.svg" },
      { name: "JavaScript", logo: "https://api.iconify.design/simple-icons/javascript.svg" },
      { name: "SQL", logo: "https://api.iconify.design/lucide/database.svg" },
      { name: "Git", logo: "https://api.iconify.design/simple-icons/git.svg" },
      { name: "FastAPI", logo: "https://api.iconify.design/simple-icons/fastapi.svg" },
      { name: "Pydantic", logo: "https://api.iconify.design/simple-icons/pydantic.svg" },
      { name: "Node.js", logo: "https://api.iconify.design/simple-icons/nodedotjs.svg" },
      { name: "CI/CD Workflows", logo: "https://api.iconify.design/lucide/git-pull-request-arrow.svg" },
      { name: "GitHub Actions", logo: "https://api.iconify.design/simple-icons/githubactions.svg" },
    ],
  },
  {
    title: "AI and Collaboration",
    items: [
      { name: "Machine Learning", logo: "https://api.iconify.design/lucide/chart-column.svg" },
      { name: "Deep Learning", logo: "https://api.iconify.design/lucide/brain.svg" },
      { name: "Generative AI", logo: "https://api.iconify.design/lucide/sparkles.svg" },
      { name: "GAN", logo: "https://api.iconify.design/lucide/scan-eye.svg" },
      { name: "VAE", logo: "https://api.iconify.design/lucide/aperture.svg" },
      { name: "LLM Finetuning", logo: "https://api.iconify.design/lucide/sliders-horizontal.svg" },
      { name: "Multimodal Training", logo: "https://api.iconify.design/lucide/gallery-horizontal.svg" },
      { name: "Use Case Explanation", logo: "https://api.iconify.design/lucide/presentation.svg" },
      { name: "Stakeholder Handling", logo: "https://api.iconify.design/lucide/handshake.svg" },
      { name: "Cross-Team Resolution", logo: "https://api.iconify.design/lucide/users-round.svg" },
    ],
  },
];
