import { Layout } from '@/components/Layout';
import { Calendar, Code, Award, BookOpen, Heart, Trophy, Briefcase, GraduationCap } from 'lucide-react';

export function Sister() {
  const timeline = [
    {
      year: '2001',
      event: 'Born on September 15, 2001',
      icon: <Calendar className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      year: '2018',
      event: 'Graduated High School with Honors',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      year: '2018',
      event: 'Started B.Tech in Computer Science',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      year: '2022',
      event: 'Graduated B.Tech in Computer Science',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      year: '2022',
      event: 'Joined Anaqua Company as IP Analyst',
      icon: <Briefcase className="w-4 h-4" />,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      year: '2023',
      event: 'Promoted to Senior IP Analyst',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      year: '2024',
      event: 'Continuing professional excellence',
      icon: <Code className="w-4 h-4" />,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  const skills = [
    { name: 'Intellectual Property Analysis', icon: <BookOpen className="w-5 h-5" />, description: 'Expert in IP research and patent analysis' },
    { name: 'Computer Science', icon: <Code className="w-5 h-5" />, description: 'Strong foundation in CS concepts and programming' },
    { name: 'Technical Research', icon: <Award className="w-5 h-5" />, description: 'Advanced research and analytical capabilities' },
    { name: 'Professional Communication', icon: <Heart className="w-5 h-5" />, description: 'Excellent client and team communication skills' }
  ];

  const workExperience = [
    {
      title: "Senior IP Analyst",
      company: "Anaqua Company",
      period: "2023 - Present",
      responsibilities: [
        "Leading intellectual property research and analysis",
        "Managing complex patent portfolios",
        "Providing strategic IP advice to clients",
        "Mentoring junior analysts",
        "Developing IP strategies for technology companies"
      ]
    },
    {
      title: "IP Analyst",
      company: "Anaqua Company", 
      period: "2022 - 2023",
      responsibilities: [
        "Conducted thorough prior art searches",
        "Analyzed patent landscapes for clients",
        "Prepared detailed IP reports",
        "Collaborated with legal teams",
        "Supported patent prosecution processes"
      ]
    }
  ];

  const achievements = [
    "B.Tech in Computer Science with excellent academic record",
    "Promoted to Senior IP Analyst within 1 year",
    "Successfully managed 50+ IP analysis projects",
    "Recognized for exceptional analytical skills",
    "Leading IP research team at young age of 24"
  ];

  const personalProjects = [
    {
      title: "IP Technology Trends Analysis",
      description: "Developed automated tools for tracking technology trends in patents",
      technologies: "Python, Data Analytics, Machine Learning",
      impact: "20% improvement in research efficiency"
    },
    {
      title: "Patent Database Optimization",
      description: "Created streamlined database search methodologies",
      technologies: "SQL, Database Design, Analytics",
      impact: "Reduced search time by 30%"
    }
  ];

  const goals = [
    "Become a leading expert in IP strategy",
    "Pursue advanced certifications in IP law",
    "Mentor more young professionals in the field",
    "Contribute to IP policy development",
    "Start own IP consulting practice"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="relative inline-block mb-8 group">
                <div className="w-48 h-48 bg-green-200 rounded-full overflow-hidden mx-auto shadow-2xl card-float">
                  <img
                    src="/family/sister.jpg"
                    alt="Mansi Raina"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  👩‍💼
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground mb-4 text-glow">
                Mansi Raina
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Sister • Senior IP Analyst • B.Tech Computer Science Graduate
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Age: 24
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Senior IP Analyst
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Anaqua Company
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">About Mansi</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed">
                At 24, Mansi is an accomplished professional who has successfully transitioned from academic excellence 
                to professional success. With a B.Tech in Computer Science as her foundation, she has carved out a 
                specialized career in intellectual property analysis at Anaqua Company. Her technical expertise combined 
                with analytical skills makes her a valuable asset in the complex world of IP management, where she helps 
                organizations navigate patent landscapes and develop strategic IP portfolios.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <blockquote className="text-xl italic text-primary font-medium">
                "Innovation is protected by knowledge, guided by strategy."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Professional Journey</h2>
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

        {/* Professional Skills Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Professional Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg card-float group text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Work Experience</h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-glow">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Innovation Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <h3 className="text-xl font-semibold mb-3 text-glow">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary">Technologies:</span>
                    <p className="text-sm text-muted-foreground">{project.technologies}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700">
                      <span className="text-green-600">Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Educational Background</h2>
            <div className="bg-card rounded-xl shadow-lg p-8 text-center card-float">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-glow">Bachelor of Technology</h3>
              <p className="text-xl text-primary font-semibold mb-4">Computer Science</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mansi completed her B.Tech in Computer Science with an excellent academic record, 
                building a strong foundation in programming, algorithms, data structures, and software engineering 
                that now supports her analytical work in intellectual property.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">B.Tech</div>
                  <p className="text-sm text-blue-700">Computer Science</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">2018-2022</div>
                  <p className="text-sm text-green-700">4 Years</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Excellence</div>
                  <p className="text-sm text-purple-700">Academic Record</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Anaqua Company</h2>
            <div className="bg-card rounded-xl shadow-lg p-8 card-float">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-4 text-glow">Leading IP Management Platform</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Anaqua is a premier intellectual property management company that provides comprehensive solutions 
                for patent portfolio management, IP analytics, and strategic IP decision-making. As a Senior IP Analyst, 
                Mansi plays a crucial role in helping clients navigate complex patent landscapes and make informed IP investments.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-600 mb-1">Senior Role</div>
                  <p className="text-sm text-blue-700">IP Analyst Position</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-lg font-bold text-green-600 mb-1">Age 24</div>
                  <p className="text-sm text-green-700">Young Professional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Professional Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <p className="text-foreground font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Goals Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Future Aspirations</h2>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <p className="text-foreground font-medium">{goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Stats Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Professional Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">IP Analysis Projects</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-3xl font-bold text-primary mb-2">Senior</div>
                <p className="text-muted-foreground">Position at Age 24</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-glow">Connect with Mansi</h2>
            <p className="text-muted-foreground mb-8">
              Always excited to discuss intellectual property, technology trends, and career growth!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-glow">
              <span className="inline-flex items-center gap-2">
                <span>👩‍💼</span>
                Professional Network
              </span>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
