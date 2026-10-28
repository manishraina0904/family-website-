import { Layout } from '@/components/Layout';
import { Heart, Users, Smile, BookOpen } from 'lucide-react';

export function About() {
  const milestones = [
    {
      year: '1973',
      title: 'Birth of Our Family Leaders',
      icon: '👶',
    },
    {
      year: '2000',
      title: 'Marriage & Building Our Home',
      icon: '💒',
    },
    {
      year: '2001 & 2004',
      title: 'Welcoming Our Children',
      icon: '👶',
    },
    {
      year: '2005-Present',
      title: 'Family Adventures & Milestones',
      icon: '✈️',
    },
    {
      year: '2024',
      title: 'Celebrating Our Family Journey',
      icon: '🎉',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Love and Respect',
      description: 'We believe in fostering a home filled with unconditional love, mutual respect, and understanding for each other\'s unique paths.',
    },
    {
      icon: <Users className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Family First',
      description: 'Our family is our foundation. We prioritize spending quality time together, supporting each other\'s dreams, and creating lasting memories.',
    },
    {
      icon: <Smile className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Joy and Laughter',
      description: 'We embrace the joy in everyday moments, finding humor and laughter that bind us together and make life truly special.',
    },
    {
      icon: <BookOpen className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Learning and Growth',
      description: 'We are committed to lifelong learning, encouraging curiosity and supporting each other in personal and intellectual growth.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-peach-100/60 via-background to-cream-100/60 border-b border-border/50">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm aspect-[4/3] bg-warm-200 rounded-2xl shadow-xl overflow-hidden mx-auto mb-6 sm:mb-8 border-2 sm:border-4 border-white card-float">
            <img
              src="/family/about-family.jpg"
              alt="Raina Family"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-glow">
            About Our Family
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Welcome to our family's story. We are the Rainas, a family of four rooted in traditions, service, and love. Together, we celebrate each other's journeys, cherish simple everyday happiness, and support each other through thick and thin.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12 text-glow">
            Our Story & Legacy
          </h2>
          <div className="space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="bg-card p-6 rounded-2xl shadow-sm border border-border/60">
              The Raina family’s story begins in the heart of the Indian subcontinent, where our ancestors cultivated a deep appreciation for community, discipline, and the enduring bonds of kinship. We have celebrated festivals, shared countless meals, and supported each other through every chapter of life.
            </p>
            <p className="bg-card p-6 rounded-2xl shadow-sm border border-border/60">
              Our family is led by Anil Kumar and Babeeta Raina, accompanied by their children, Mansi and Manish. Anil’s distinguished background in government service—including elite service in the NSG Commando and BSF—provides unwavering discipline and strength. Babeeta’s experience as an educator brings patience, compassion, and nurturing wisdom to our home.
            </p>
            <p className="bg-card p-6 rounded-2xl shadow-sm border border-border/60">
              Mansi, our eldest, has excelled as a Senior IP Analyst with a B.Tech in Computer Science, while Manish is completing his final year in Artificial Intelligence and Machine Learning after being a 12th-grade academic topper. Together, our home reflects dedication, hard work, and mutual pride.
            </p>
          </div>
        </div>
      </section>

      {/* Family Milestones */}
      <section className="py-12 sm:py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12 text-glow">
            Family Milestones
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-card p-5 sm:p-6 rounded-2xl shadow-sm card-hover border border-border/60"
              >
                <div className="text-3xl sm:text-4xl flex-shrink-0">
                  {milestone.icon}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-primary mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12 text-glow">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center card-hover p-6 rounded-2xl bg-card border border-border/60 flex flex-col items-center"
              >
                <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 text-primary transition-all duration-300 hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
