import { FolderGit2, ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Platform',
      description: 'Designed and deployed a unified infrastructure platform managing resources across AWS, Azure, and GCP using Terraform and custom automation.',
      technologies: ['Terraform', 'AWS', 'Kubernetes', 'Python'],
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        'Cost reduction of 40% through resource optimization',
        'Automated failover between cloud providers',
        'Centralized monitoring and alerting system'
      ]
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipeline system supporting multiple application stacks with automated testing, security scanning, and deployment.',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'SonarQube'],
      color: 'from-purple-500 to-pink-500',
      highlights: [
        'Deployment frequency increased from weekly to daily',
        'Automated security vulnerability scanning',
        'Zero-downtime blue-green deployments'
      ]
    },
    {
      title: 'Kubernetes Cluster Management',
      description: 'Implemented and managed production-grade Kubernetes clusters with advanced networking, security policies, and auto-scaling capabilities.',
      technologies: ['Kubernetes', 'Helm', 'Istio', 'Prometheus'],
      color: 'from-orange-500 to-red-500',
      highlights: [
        'Managed 50+ microservices across multiple clusters',
        'Implemented service mesh for enhanced observability',
        'Auto-scaling handling 10x traffic spikes'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Featured Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <FolderGit2 className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex gap-2">
                    <button className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                      <Github className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
