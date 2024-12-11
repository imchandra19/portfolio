import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Healthcare Analytics",
    description: "Developed a machine learning system for early disease detection using patient data.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    githubUrl: "https://github.com/username/healthcare-analytics",
    liveUrl: "https://healthcare-analytics-demo.com"
  },
  {
    id: 2,
    title: "Sustainable Energy Monitor",
    description: "Real-time dashboard for monitoring renewable energy consumption and carbon footprint.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/energy-monitor"
  }
];