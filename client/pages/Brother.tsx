import { Layout } from '@/components/Layout';
import { Calendar, Code, Award, Zap, Trophy, BookOpen, GraduationCap } from 'lucide-react';

export function Brother() {
  const timeline = [
    {
      year: '2004',
      event: 'Born on January 4, 2004',
      icon: <Calendar className="w-4 h-4" />,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300'
    },
    {
      year: '2020',
      event: 'Completed 12th Grade as Academic Topper',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300'
    },
    {
      year: '2021',
      event: 'Started B.Tech in AIML (Artificial Intelligence & Machine Learning)',
      icon: <GraduationCap className="w-4 h-4" />,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300'
    },
    {
      year: '2022',
      event: 'Excellence in AI/ML algorithms and core systems',
      icon: <Code className="w-4 h-4" />,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300'
    },
    {
      year: '2023',
      event: 'Advanced neural networks & computer vision projects',
      icon: <Zap className="w-4 h-4" />,
      color: 'bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300'
    },
    {
      year: '2024',
      event: 'Final year studies, thesis research, and technical leadership',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300'
    },
    {
      year: '2025',
      event: 'Graduation & professional career launch in AI',
      icon: <Trophy className="w-4 h-4" />,
      color: 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-300'
    }
  ];

  const skills = [
    { name: 'Artificial Intelligence', icon: <Zap className="w-5 h-5" />, description: 'AI algorithms, predictive modeling, and intelligent agents' },
    { name: 'Machine Learning', icon: <Code className="w-5 h-5" />, description: 'Deep learning, neural networks, and model training' },
    { name: 'Software Development', icon: <BookOpen className="w-5 h-5" />, description: 'Proficient in Python, C++, SQL, and full-stack web' },
    { name: 'Academic Leadership', icon: <Trophy className="w-5 h-5" />, description: 'Consistent top performer and technical peer mentor' }
  ];

  const academicProjects = [
    {
      title: "Intelligent Recommendation System",
      description: "Built an AI-powered recommendation engine using collaborative filtering and deep learning models.",
      technologies: "Python, TensorFlow, Neural Networks",
      category: "Machine Learning",
      status: "Completed"
    },
    {
      title: "Computer Vision Object Detection",
      description: "Developed real-time object detection and tracking using modern convolutional architectures.",
      technologies: "Python, OpenCV, PyTorch",
      category: "Computer Vision",
      status: "Completed"
    },
    {
      title: "NLP Conversational Assistant",
      description: "Created an intelligent chatbot with sentiment understanding and context retention.",
      technologies: "NLP, Transformers, HuggingFace",
      category: "Natural Language Processing",
      status: "In Progress"
    },
    {
      title: "Final Year Capstone Research",
      description: "Research project applying generative models to complex real-world challenges.",
      technologies: "Deep Learning, Python, Research",
      category: "Research",
      status: "In Progress"
    }
  ];

  const technicalSkills = [
    { category: "Programming Languages", skills: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript"] },
    { category: "AI/ML Frameworks", skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "OpenCV"] },
    { category: "Data Science Tools", skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"] },
    { category: "Specializations", skills: ["Deep Learning", "Computer Vision", "NLP", "Neural Networks"] }
  ];

  const currentFocus = [
    { area: "Final Year Studies", description: "Advanced AI coursework and capstone completion", progress: "90%" },
    { area: "Applied Research", description: "Experimentation with multimodal machine learning models", progress: "80%" },
    { area: "Industry Placement", description: "Preparing for high-impact software engineering roles", progress: "75%" },
    { area: "Continuous Learning", description: "Keeping pace with state-of-the-art AI advancements", progress: "95%" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-background to-amber-50/50">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block mb-6 sm:mb-8 group">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-amber-100 rounded-full overflow-hidden mx-auto shadow-2xl card-float border-4 border-white">
                <img
                  src="/family/brother.jpg"
                  alt="Manish Raina"
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-primary text-primary-foreground w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-xl animate-pulse">
                🤖
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 text-glow">
              Manish Raina
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Brother • Final Year B.Tech AIML • Academic Topper & Tech Enthusiast
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                Age: 21
              </span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                12th Grade Topper
              </span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                B.Tech AIML
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-glow">
              About Manish
            </h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Manish, 21, is currently completing his final year of B.Tech in Artificial Intelligence and Machine Learning. With a persistent drive for technical excellence and problem-solving, he combines deep theoretical understanding with hands-on software development to create intelligent solutions.
              </p>
            </div>
            <div className="mt-6 text-center">
              <blockquote className="text-base sm:text-lg italic text-primary font-medium max-w-lg mx-auto">
                "The future belongs to those who understand and shape artificial intelligence."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Responsive Timeline Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-glow">
              Academic & Tech Journey
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

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicProjects.map((project, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border/60 card-float flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{project.status}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="pt-3 border-t border-border/50 text-xs text-primary font-medium">
                    <span className="text-muted-foreground font-normal">Tech:</span> {project.technologies}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Technical Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technicalSkills.map((set, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-sm border border-border/60 card-float">
                  <h3 className="text-base sm:text-lg font-bold mb-3 text-foreground">{set.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {set.skills.map((skill, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Stats */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Academic Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-1">21</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Years Age</p>
              </div>
              <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-1">12th</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Class Topper</p>
              </div>
              <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-1">B.Tech</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">AIML Major</p>
              </div>
              <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm card-float text-center border border-border/60">
                <div className="text-2xl sm:text-4xl font-extrabold text-primary mb-1">2026</div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Graduation Year</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Brother;
