import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Capgemini Hyd.',
      period: '2025 - Present',
      color: 'from-blue-500 to-purple-500',
      achievements: [
        'Architected and deployed microservices infrastructure on AWS EKS serving 10M+ users',
        'Reduced deployment time by 70% through automated CI/CD pipeline optimization',
        'Implemented Infrastructure as Code using Terraform, managing 200+ AWS resources',
        'Led migration from monolithic to containerized architecture with zero downtime'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudSystems Ltd.',
      period: '2021 - 2023',
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Designed and maintained CI/CD pipelines using Jenkins and GitLab CI',
        'Automated infrastructure provisioning reducing setup time from days to hours',
        'Implemented monitoring solutions with CloudWatch and Prometheus',
        'Managed AWS infrastructure supporting high-traffic e-commerce platform'
      ]
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'StartupHub Co.',
      period: '2019 - 2020',
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Containerized legacy applications using Docker and orchestrated with Kubernetes',
        'Developed automation scripts for routine maintenance tasks',
        'Assisted in cloud migration from on-premise to AWS',
        'Participated in on-call rotation ensuring 99.9% uptime'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  <p className="text-lg text-gray-600 font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2 ml-18">
              {exp.achievements.map((achievement, achIdx) => (
                <li key={achIdx} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
