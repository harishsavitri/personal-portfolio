import { Cloud, Container, GitBranch, Server, Shield, Gauge } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'AWS Services',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: ['EC2', 'S3', 'Lambda', 'ECS', 'EKS', 'RDS', 'CloudFormation', 'Route 53']
    },
    {
      title: 'Container & Orchestration',
      icon: Container,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Docker', 'Kubernetes', 'Helm', 'Docker Compose', 'Container Registry']
    },
    {
      title: 'CI/CD Tools',
      icon: GitBranch,
      color: 'from-purple-500 to-pink-500',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'AWS CodePipeline', 'ArgoCD']
    },
    {
      title: 'Infrastructure as Code',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi', 'AWS CDK']
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      skills: ['AWS IAM', 'Security Groups', 'KMS', 'Secrets Manager', 'GuardDuty']
    },
    {
      title: 'Monitoring & Logging',
      icon: Gauge,
      color: 'from-yellow-500 to-orange-500',
      skills: ['CloudWatch', 'Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-blue-200 hover:border-purple-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
