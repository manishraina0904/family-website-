import { Layout } from '@/components/Layout';
import { Calendar, Code, Award, Zap, Trophy, BookOpen, GraduationCap } from 'lucide-react';

export function Brother() {
  const timeline = [
    {
      year: '2004',
      event: 'Born on January 4, 2004',
      icon: <Calendar className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      year: '2020',
      event: 'Completed 12th Grade as Academic Topper',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      year: '2021',
      event: 'Started B.Tech in AIML (Artificial Intelligence & Machine Learning)',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      year: '2022',
      event: 'First year excellence in AI/ML coursework',
      icon: <Code className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      year: '2023',
      event: 'Advanced projects in Machine Learning',
      icon: <Zap className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      year: '2024',
      event: 'Final year studies & career preparation',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      year: '2025',
      event: 'Expected graduation & career launch',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-red-100 text-red-600'
    }
  ];

  const skills = [
    { name: 'Artificial Intelligence', icon: <Zap className="w-5 h-5" />, description: 'Advanced knowledge in AI algorithms and applications' },
    { name: 'Machine Learning', icon: <Code className="w-5 h-5" />, description: 'Expert in ML models, deep learning, and neural networks' },
    { name: 'Programming', icon: <BookOpen className="w-5 h-5" />, description: 'Proficient in Python, R, Java, and data science tools' },
    { name: 'Academic Excellence', icon: <Trophy className="w-5 h-5" />, description: 'Consistent top performance and academic achievements' }
  ];

  const academicProjects = [
    {
      title: "Intelligent Recommendation System",
      description: "Built an AI-powered recommendation engine using collaborative filtering and deep learning",
      technologies: "Python, TensorFlow, Neural Networks, Data Analytics",
      category: "Machine Learning",
      status: "Completed"
    },
    {
      title: "Computer Vision for Object Detection",
      description: "Developed real-time object detection system using convolutional neural networks",
      technologies: "Python, OpenCV, CNN, Image Processing",
      category: "Computer Vision",
      status: "Completed"
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "Created intelligent chatbot with sentiment analysis and response generation",
      technologies: "NLP, BERT, Transformers, Flask",
      category: "Natural Language Processing",
      status: "In Progress"
    },
    {
      title: "Final Year Thesis Project",
      description: "Advanced research project in AI applications for real-world problem solving",
      technologies: "Advanced AI/ML, Research Methodology",
      category: "Research",
      status: "In Progress"
    }
  ];

  const achievements = [
    "Academic Topper in 12th Grade - Outstanding Achievement",
    "Consistently excellent grades in B.Tech AIML program",
    "Successfully completed multiple AI/ML projects",
    "Active participation in coding competitions",
    "Leadership in technical student organizations",
    "Recognition for innovative project work"
  ];

  const technicalSkills = [
    { category: "Programming Languages", skills: ["Python", "Java", "R", "C++", "JavaScript"] },
    { category: "AI/ML Frameworks", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas"] },
    { category: "Data Science", skills: ["NumPy", "Matplotlib", "Seaborn", "Jupyter", "SQL"] },
    { category: "Specializations", skills: ["Deep Learning", "Computer Vision", "NLP", "Data Mining", "Algorithms"] }
  ];

  const careerGoals = [
    "Graduate with honors from B.Tech AIML program",
    "Secure position at leading tech company",
    "Specialize in cutting-edge AI research",
    "Contribute to breakthrough AI applications",
    "Pursue advanced studies in AI/ML",
    "Become an AI technology leader"
  ];

  const currentFocus = [
    {
      area: "Final Year Studies",
      description: "Completing advanced coursework in AI and Machine Learning",
      progress: "85%"
    },
    {
      area: "Thesis Project",
      description: "Conducting research on innovative AI applications",
      progress: "70%"
    },
    {
      area: "Career Preparation",
      description: "Preparing for job interviews and industry placement",
      progress: "60%"
    },
    {
      area: "Skill Enhancement",
      description: "Continuous learning in emerging AI technologies",
      progress: "90%"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="relative inline-block mb-8 group">
                <div className="w-48 h-48 bg-orange-200 rounded-full overflow-hidden mx-auto shadow-2xl card-float">
                  <img
                    src="/family/brother.jpg"
                    alt="Manish Raina"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-pulse">
                  🤖
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground mb-4 text-glow">
                Manish Raina
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Brother • B.Tech AIML Final Year • Academic Topper • Future AI Engineer
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Age: 21
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Final Year B.Tech AIML
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  12th Grade Topper
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">About Manish</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed">
                Manish, 21, is in his final year of B.Tech in Artificial Intelligence and Machine Learning, 
                representing the perfect blend of academic excellence and technical innovation. An academic achiever 
                who was the topper in 12th Grade, he has maintained his commitment to excellence throughout his 
                engineering studies. His passion for AI and machine learning drives him to explore cutting-edge 
                technologies and develop innovative solutions. With a bright future ahead in the rapidly evolving 
                field of artificial intelligence, Manish combines academic rigor with practical application.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <blockquote className="text-xl italic text-primary font-medium">
                "The future belongs to those who understand and shape artificial intelligence."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Academic Excellence Journey</h2>
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

        {/* Technical Skills Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Core Competencies</h2>
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

        {/* 12th Grade Achievement Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Academic Topper Achievement</h2>
            <div className="bg-card rounded-xl shadow-lg p-8 text-center card-float">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-glow">12th Grade Topper</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Manish achieved the prestigious position of Academic Topper in 12th Grade, demonstrating exceptional 
                dedication, intelligence, and academic discipline. This outstanding achievement laid the foundation 
                for his continued excellence in B.Tech AIML program.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">Topper</div>
                  <p className="text-sm text-yellow-700">12th Grade</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Excellence</div>
                  <p className="text-sm text-blue-700">Academic Performance</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">Foundation</div>
                  <p className="text-sm text-green-700">Future Success</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Projects Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Academic Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {academicProjects.map((project, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-glow">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-700">
                      <span className="text-orange-600">Tech Stack:</span> {project.technologies}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Breakdown */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skillSet, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <h3 className="text-xl font-semibold mb-4 text-glow">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Focus Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Current Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentFocus.map((focus, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-glow">{focus.area}</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {focus.progress}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{focus.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: focus.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Academic & Technical Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-lg card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏅</span>
                    <p className="text-foreground font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Aspirations Section */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Career Aspirations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {careerGoals.map((goal, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-glow">Goal {index + 1}</h3>
                  </div>
                  <p className="text-muted-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Stats Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Quick Academic Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl text-center shadow-lg card-float">
                <div className="text-3xl font-bold text-primary mb-2">21</div>
                <div className="text-muted-foreground">Age</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-lg card-float">
                <div className="text-3xl font-bold text-primary mb-2">12th</div>
                <div className="text-muted-foreground">Topper</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-lg card-float">
                <div className="text-3xl font-bold text-primary mb-2">B.Tech</div>
                <div className="text-muted-foreground">AIML</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-lg card-float">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <div className="text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-glow">Connect with Manish</h2>
            <p className="mb-8 text-primary-foreground/90">
              Learn more about Manish's academic journey and explore potential collaborations.
            </p>
            <a 
              href="mailto:manish.raina@email.com"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold btn-glow shadow-lg hover:bg-white/90 transition-colors"
            >
              <span>Get in Touch</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Brother;
