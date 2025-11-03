import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function ProfileSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-80 shadow-xl">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative h-full flex items-end pb-8 px-8">
        <div className="flex items-end gap-6">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-100">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHfvIvnhQwgyQ/profile-displayphoto-crop_800_800/B56ZnXRojqJYAI-/0/1760253350766?e=1763596800&v=beta&t=yzpK9KKg0v58xlBelvWJm6t9rV7RvJCRFMnZJrZyT-o"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

          <div className="mb-4">
            <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Harish Gudipudi
            </h1>
            <p className="text-2xl text-blue-100 mb-3 drop-shadow">
              AWS DevOps Engineer
            </p>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, IND</span>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/harishsavitri" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/harish-gudipudi-b98726178/" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mail to:gudiputiharish@gmail.com" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
