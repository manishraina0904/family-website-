import { Layout } from '@/components/Layout';
import { Calendar, Heart, Home, BookOpen, Users, GraduationCap } from 'lucide-react';

export function Mother() {
  const timeline = [
    {
      year: '1973',
      event: 'Born on October 7, 1973',
      icon: <Calendar className="w-4 h-4" />,
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300'
    },
    {
      year: '1995',
      event: 'Started career as a Teacher',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300'
    },
    {
      year: '1998',
      event: 'Worked at Delhi-based company',
      icon: <BookOpen className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300'
    },
    {
      year: '2000',
      event: 'Married to Anil Kumar on November 4, 2000',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-300'
    },
    {
      year: '2001',
      event: 'Welcomed daughter Mansi on September 15, 2001',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300'
    },
    {
      year: '2004',
      event: 'Welcomed son Manish on January 4, 2004',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300'
    },
    {
      year: '2005',
      event: 'Transitioned to dedicated homemaker',
      icon: <Home className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300'
    },
    {
      year: '2024',
      event: 'Continuing as family cornerstone',
      icon: <Heart className="w-4 h-4" />,
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300'
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
    "Dedicated homemaker and family pillar for 19+ years",
    "Nurtured two accomplished children",
    "Steadfast support system for husband's service career"
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
    "Creating a loving and peaceful home environment"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-background to-rose-50/50">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block mb-6 sm:mb-8 group">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-pink-100 rounded-full overflow-hidden mx-auto shadow-2xl card-float border-4 border-white">
                <img
                  src="/family/mother.jpg"
                  alt="Babeeta Raina"
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-primary text-primary-foreground w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-xl animate-pulse">
                🌸
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 text-glow">
              Babeeta Raina
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Mother • Former Teacher • Corporate Professional • The Heart of our Home
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Age: 52
              </span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Homemaker
              </span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Former Teacher
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-glow">
              About Babeeta
            </h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Currently a dedicated homemaker, Babeeta brings a wealth of wisdom from her diverse professional background. With experience as a Teacher and corporate professional at a Delhi-based company, she has transitioned her organizational and emotional skills into being the nurturing backbone of our family.
              </p>
            </div>
            <div className="mt-6 text-center">
              <blockquote className="text-base sm:text-lg italic text-primary font-medium max-w-lg mx-auto">
                "A mother's love and wisdom create the foundation for a family's success."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Responsive Timeline Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-glow">
              Life Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-6 sm:mb-8 ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div
                    className={`w-full pl-10 sm:pl-12 md:pl-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}
                  >
                    <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-md card-float border border-border/60">
                      <div
                        className={`flex items-center gap-2.5 mb-2 ${
                          index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <div className={`p-1.5 sm:p-2 rounded-full ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="font-bold text-primary text-xs sm:text-sm">{item.year}</span>
                      </div>
                      <p className="text-foreground font-medium text-xs sm:text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-white dark:border-background shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Life Experiences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-card p-5 sm:p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                  <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-primary">
                    {exp.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-1.5">{exp.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Children's Achievements Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 text-glow">
              Proud Family Accomplishments
            </h2>
            <p className="text-center text-xs sm:text-sm md:text-base text-muted-foreground mb-8 sm:mb-12">
              Babeeta's loving dedication has nurtured remarkable milestones for her children
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-5 sm:p-6 card-float">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground text-glow">Mansi's Success</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span>•</span><span>B.Tech in Computer Science graduate</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Senior IP Analyst at Anaqua Company</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Accomplished professional career at age 24</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Deep technical expertise and analytical skills</span></li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-5 sm:p-6 card-float">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground text-glow">Manish's Excellence</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span>•</span><span>Academic Topper in 12th Grade</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Final Year B.Tech (AIML) engineering student</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Consistently top-ranked academic record</span></li>
                  <li className="flex items-start gap-2"><span>•</span><span>Bright future in Artificial Intelligence</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Family Philosophy */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Life Philosophy & Guidance
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {lifePhilosophy.map((philosophy, index) => (
                <div key={index} className="bg-card p-4 sm:p-5 rounded-xl shadow-sm border border-border/60 card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">💝</span>
                    <p className="text-xs sm:text-sm md:text-base text-foreground font-medium">{philosophy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
