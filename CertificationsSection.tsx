import { Award, CheckCircle } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: '2025',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AWS Certified DevOps Engineer - Professional',
      issuer: 'Amazon Web Services',
      date: '2024',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: '2022',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AWS Certified Security - Specialty',
      issuer: 'Amazon Web Services',
      date: '2022',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2021',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        Certifications & Credentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{cert.title}</h3>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />
                </div>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm font-medium">Issued: {cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
        <p className="text-blue-50 leading-relaxed">
          Committed to staying current with the latest cloud technologies and DevOps practices.
          Currently pursuing additional certifications in cloud security and advanced Kubernetes
          administration while regularly participating in technical conferences and workshops.
        </p>
      </div>
    </div>
  );
}
