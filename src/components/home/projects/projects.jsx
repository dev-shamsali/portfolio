import React from "react";
import { Github, ExternalLink, Server } from "lucide-react";

export default function Projects() {

  const projectList = [
    {
      title: "Arna Skincare E-Commerce Platform",
      description:
        "Production-ready MERN e-commerce platform deployed on AWS EC2 with Nginx reverse proxy, Razorpay payment integration, real-time inventory management, monitoring dashboards, and high availability infrastructure.",
      url: "https://arnaskincare.in"
    },
    {
      title: "DevCodeHub – Real-Time Code Collaboration",
      description:
        "A real-time collaborative coding platform supporting synchronized editing for multiple users using Next.js, Socket.io, and Firebase with low latency synchronization and CI/CD automated deployments.",
      url: "https://devcodehub.cloud"
    },
    {
      title: "Dynamic Portfolio with Advanced Animations",
      description:
        "High-performance portfolio built using Next.js with SSR/SSG and advanced animations powered by Framer Motion, GSAP, and Three.js delivering smooth interactive user experiences.",
      url: "https://shamsali.vercel.app"
    },
    {
      title: "Production Cloud Infrastructure Setup",
      description:
        "Configured production-ready VPS infrastructure for MERN and Python applications including Nginx reverse proxy, PM2 process management, SSL automation with Certbot, monitoring with Prometheus, and hardened Linux security.",
      url: "http://72.61.242.86"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a]">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Production-grade applications and cloud infrastructure deployments
            demonstrating full-stack and DevOps expertise.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-10">

          {projectList.map((project, index) => (

            <div
              key={index}
              className="group rounded-2xl p-8 backdrop-blur-lg border border-white/10 bg-white/5 hover:bg-white/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex items-center gap-3 mb-4">
                <Server className="text-blue-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
              >
                Visit Project
                <ExternalLink className="w-4 h-4" />
              </a>

            </div>

          ))}

        </div>

        {/* Github Footer */}
        <div className="mt-20 flex justify-center">

          <a
            href="https://github.com/dev-shamsali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
          >

            <Github className="w-5 h-5" />
            <span>Explore More Projects on GitHub</span>

          </a>

        </div>

      </div>

    </div>
  );
}