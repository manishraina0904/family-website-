import { Layout } from '@/components/Layout';
import { Calendar, Code, Award, BookOpen, Heart, Trophy, Briefcase, GraduationCap } from 'lucide-react';

export function Sister() {
  const timeline = [
    {
      year: '2001',
      event: 'Born on September 15, 2001',
      icon: <Calendar className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300'
    },
    {
      year: '2018',
      event: 'Graduated High School with Honors',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300'
    },
    {
      year: '2018',
      event: 'Started B.Tech in Computer Science',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300'
    },
    {
      year: '2022',
      event: 'Graduated B.Tech in Computer Science',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300'
    },
    {
      year: '2022',
      event: 'Joined Anaqua Company as IP Analyst',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300'
    },
    {
      year: '2023',
      event: 'Promoted to Senior IP Analyst',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300'
    },
    {
      year: '2024',
      event: 'Continuing professional excellence',
      icon: <Code className="w-4 h-4" />,
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-300'
    }
  ];

  const skills = [
    { name: 'Intellectual Property Analysis', icon: <BookOpen className="w-5 h-5" />, description: 'Expert in IP research and patent analytics' },
    { name: 'Computer Science', icon: <Code className="w-5 h-5" />, description: 'Strong foundation in CS concepts and programming' },
    { name: 'Technical Research', icon: <Award className="w-5 h-5" />, description: 'Advanced research and analytical capabilities' },
    { name: 'Professional Strategy', icon: <Heart className="w-5 h-5" />, description: 'Strategic patent evaluation and stakeholder advice' }
  ];

  const workExperience = [
    {
      title: "Senior IP Analyst",
      company: "Anaqua Company",
      period: "2023 - Present",
      responsibilities: [
        "Leading intellectual property research and analysis",
        "Managing complex patent portfolios",
        "Providing strategic IP advice to global clients",
        "Mentoring junior analysts across technology domains",
        "Developing IP strategies for innovation-driven enterprises"
      ]
    },
    {
      title: "IP Analyst",
      company: "Anaqua Company", 
      period: "2022 - 2023",
      responsibilities: [
        "Conducted thorough prior art searches and patentability reports",
        "Analyzed patent landscapes for emerging technologies",
        "Collaborated with cross-functional legal and technical teams"
      ]
    }
  ];

  const achievements = [
    "B.Tech in Computer Science with distinguished academic record",
    "Promoted to Senior IP Analyst in record time",
    "Successfully managed 50+ IP analysis projects",
    "Recognized for exceptional analytical capabilities",
    "Leading IP research teams with distinction at age 24"
  ];

  const goals = [
    "Become a leading global authority in IP strategy",
    "Pursue advanced certifications in intellectual property law",
    "Mentor aspiring young women and engineers in STEM",
    "Author research papers on AI patents and IP landscapes"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-background to-emerald-50/50">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block mb-6 sm:mb-8 group">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-emerald-100 rounded-full overflow-hidden mx-auto shadow-2xl card-float border-4 border-white">
                <img
                  src="/family/sister.jpg"
                  alt="Mansi Raina"
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-primary text-primary-foreground w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-xl animate-pulse">
                🌱
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 text-glow">
              Mansi Raina
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Sister • Senior IP Analyst • B.Tech Computer Science Graduate
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Age: 24
              </span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Senior IP Analyst
              </span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Anaqua Company
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-glow">
              About Mansi
            </h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                At 24, Mansi has successfully transitioned from academic excellence to high-impact professional work. With a B.Tech in Computer Science as her foundation, she specializes in intellectual property analysis at Anaqua Company, helping tech innovators secure and strategize their patents.
              </p>
            </div>
            <div className="mt-6 text-center">
              <blockquote className="text-base sm:text-lg italic text-primary font-medium max-w-lg mx-auto">
                "Innovation is protected by knowledge, guided by strategy."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Responsive Timeline Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-glow">
              Professional Journey
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

        {/* Skills Section */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Professional Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-card p-5 sm:p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                  <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-1.5">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Career Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-card p-6 sm:p-8 rounded-2xl shadow-sm border border-border/60 card-float">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{job.title}</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-primary mb-4">{job.company}</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Impact Stats */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Professional Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-card p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">50+</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">IP Projects Handled</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">2+</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">Senior Level</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">At Age 24</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
