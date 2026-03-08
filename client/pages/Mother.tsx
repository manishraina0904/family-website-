import { Layout } from '@/components/Layout';
import { Calendar, Heart, Home, BookOpen, Users, GraduationCap } from 'lucide-react';

export function Mother() {
  const timeline = [
    {
      year: '1973',
      event: 'Born on October 7, 1973',
      icon: <Calendar className="w-4 h-4" />,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      year: '1995',
      event: 'Started career as a Teacher',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      year: '1998',
      event: 'Worked at Delhi-based company',
      icon: <BookOpen className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      year: '2000',
      event: 'Married to Anil Kumar on November 4, 2000',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-red-100 text-red-600'
    },
    {
      year: '2001',
      event: 'Welcomed daughter Mansi on September 15, 2001',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      year: '2004',
      event: 'Welcomed son Manish on January 4, 2004',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      year: '2005',
      event: 'Transitioned to dedicated homemaker',
      icon: <Home className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      year: '2024',
      event: 'Continuing as family cornerstone',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const experiences = [
    { name: 'Teaching', icon: <GraduationCap className="w-5 h-5" />, description: 'Experienced educator shaping young minds' },
    { name: 'Corporate Work', icon: <BookOpen className="w-5 h-5" />, description: 'Professional experience in Delhi-based company' },
    { name: 'Family Management', icon: <Home className="w-5 h-5" />, description: 'Expert in creating harmonious family life' },
    { name: 'Community Support', icon: <Users className="w-5 h-5" />, description: 'Active in supporting family and community' }
  ];

  const achievements = [
    "Successful teaching career impacting many students",
    "Valuable professional experience in corporate sector",
    "Dedicated homemaker for 19+ years",
    "Raised two accomplished children",
    "Strong support system for husband's service career"
  ];

  const familyContributions = [
    { area: "Education Support", description: "Guiding children's academic excellence", impact: "Both children excelling" },
    { area: "Home Management", description: "Creating warm and nurturing environment", impact: "Stable family foundation" },
    { area: "Career Transition", description: "Supporting husband's demanding service", impact: "Strong family unit" },
    { area: "Community Relations", description: "Building positive neighborhood connections", impact: "Respected family" }
  ];

  const lifePhilosophy = [
    "Family comes first in all decisions",
    "Education is the greatest gift to children",
    "Hard work and dedication lead to success",
    "Supporting each other through challenges",
    "Creating a loving home environment"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="relative inline-block mb-8 group">
                <div className="w-48 h-48 bg-pink-200 rounded-full overflow-hidden mx-auto shadow-2xl card-float">
                  <img
                    src="/family/mother.jpg"   // ✅ actual image
                    alt="Babeeta Raina"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  🌸
                </div>
              </div>

              <h1 className="text-5xl font-bold text-foreground mb-4 text-glow">
                Babeeta Raina
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Mother • Former Teacher • Former Corporate Professional • Homemaker
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Age: 52
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Homemaker
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Former Teacher
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">About Babeeta</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed">
                Currently a dedicated homemaker, Babeeta brings a wealth of wisdom from her diverse professional background. 
                With valuable experience as a Teacher and her professional work at a Delhi-based company, she has transitioned 
                her skills into being the nurturing heart and backbone of our family. Her dedication to creating a warm, 
                supportive home environment has been instrumental in raising accomplished children while supporting her husband's 
                demanding career in government service.
              </p>
            </div>

            <div className="mt-8 text-center">
              <blockquote className="text-xl italic text-primary font-medium">
                "A mother's love and wisdom create the foundation for a family's success."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Life Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-lg card-float">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-full ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="font-bold text-primary">{item.year}</span>
                      </div>
                      <p className="text-foreground font-medium">{item.event}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Professional Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg card-float group text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                    {experience.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{experience.name}</h3>
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Contributions Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Family Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {familyContributions.map((contribution, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <h3 className="text-xl font-semibold mb-3 text-glow">{contribution.area}</h3>
                  <p className="text-muted-foreground mb-4">{contribution.description}</p>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-pink-700">
                      <span className="text-pink-600">Impact:</span> {contribution.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Legacy Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Teaching Legacy</h2>
            <div className="bg-card rounded-xl shadow-lg p-8 text-center card-float">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-glow">Educator & Mentor</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Babeeta's experience as a teacher has been invaluable in guiding her own children's education and 
                development. Her understanding of learning processes and child psychology has contributed significantly 
                to her children's academic and personal success.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Teaching</div>
                  <p className="text-sm text-blue-700">Professional Experience</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">Nurturing</div>
                  <p className="text-sm text-green-700">Natural Talent</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Wisdom</div>
                  <p className="text-sm text-purple-700">Life Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Children's Success Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Children's Achievements</h2>
            <p className="text-center text-muted-foreground mb-8">
              Babeeta's dedication to her children's growth has resulted in remarkable achievements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl shadow-lg overflow-hidden card-float">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-glow">Mansi's Success</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• B.Tech in Computer Science graduate</li>
                    <li>• Senior IP Analyst at Anaqua Company</li>
                    <li>• Professional success at age 24</li>
                    <li>• Technical expertise and analytical skills</li>
                  </ul>
                </div>
              </div>
              <div className="bg-card rounded-xl shadow-lg overflow-hidden card-float">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-glow">Manish's Excellence</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Academic Topper in 12th Grade</li>
                    <li>• Final Year B.Tech (AIML) student</li>
                    <li>• Excellence in academics at age 21</li>
                    <li>• Future in AI and Machine Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life Philosophy Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Life Philosophy</h2>
            <div className="space-y-4">
              {lifePhilosophy.map((philosophy, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-lg card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💝</span>
                    <p className="text-foreground font-medium">{philosophy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Life Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <p className="text-foreground font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Values Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-lg font-semibold mb-2">Unconditional Love</h3>
                <p className="text-sm text-muted-foreground">Creating a foundation of love and security for the family</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-lg font-semibold mb-2">Education First</h3>
                <p className="text-sm text-muted-foreground">Prioritizing learning and knowledge for children's growth</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold mb-2">Family Support</h3>
                <p className="text-sm text-muted-foreground">Being the backbone that supports everyone's dreams</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-glow">Connect with Babeeta</h2>
            <p className="text-muted-foreground mb-8">
              Always ready to share wisdom about family, education, and creating a loving home.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-glow">
              <span className="inline-flex items-center gap-2">
                <span>🌸</span>
                Family Wisdom
              </span>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
