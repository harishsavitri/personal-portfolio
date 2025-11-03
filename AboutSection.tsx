import { Rocket, Target, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Passionate AWS DevOps Engineer with 2+ years of experience in designing, implementing,
          and managing cloud infrastructure. Specialized in automating deployments, optimizing using jenkins
          CI/CD pipelines, and ensuring high availability of mission-critical applications.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Expert in Infrastructure as Code, container orchestration, and cloud-native architectures.
          Committed to implementing best practices in security, monitoring, and cost optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-blue-100">
            Constantly exploring new technologies and methodologies to improve deployment efficiency.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Precision</h3>
          <p className="text-purple-100">
            Meticulous attention to detail ensuring zero-downtime deployments and robust systems.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Excellence</h3>
          <p className="text-pink-100">
            Committed to delivering high-quality solutions that exceed expectations and drive results.
          </p>
        </div>
      </div>
    </div>
  );
}
