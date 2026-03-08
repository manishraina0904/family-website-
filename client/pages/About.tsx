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
      title: 'Family Adventures',
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
      icon: <Heart className="w-8 h-8" />,
      title: 'Love and Respect',
      description: 'We believe in fostering a home filled with unconditional love, mutual respect, and understanding for each other\'s unique paths.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Family First',
      description: 'Our family is our foundation. We prioritize spending quality time together, supporting each other\'s dreams, and creating lasting memories.',
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Joy and Laughter',
      description: 'We embrace the joy in everyday moments, finding humor and laughter that bind us together and make life truly special.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning and Growth',
      description: 'We are committed to lifelong learning, encouraging curiosity and supporting each other in personal and intellectual growth.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-peach-100 to-cream-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-80 h-64 bg-warm-200 rounded-2xl shadow-lg overflow-hidden mx-auto mb-8">
            <img
               src="/family/about-family.jpg"
               alt="Raina Family"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Family
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to our family's story. We are the Rainas, a family of four living in the heart of the city. Our journey is filled with love, laughter, and shared experiences. We believe in the power of togetherness, the importance of kindness, and the beauty of everyday moments. This is where we share our values, our background, and the essence of what makes us us.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6">
              Welcome to our family's story. Here, we share the tapestry of our lives, woven with threads of love, laughter, and cherished memories. From our roots to our present adventures, discover the moments that define us.
            </p>
            <p className="mb-6">
              The Raina family's story begins in the heart of the Indian subcontinent, where our ancestors cultivated a deep appreciation for community, tradition, and the bonds of kinship. Our journey led us across continents, carrying with us the rich heritage of our home land while embracing the opportunities and experiences of new lands. We've celebrated festivals, shared meals, and supported each other through thick and thin, creating a legacy of resilience and love that we hope to pass on to future generations.
            </p>
            <p className="mb-6">
              Our family consists of two loving parents, Anil Kumar and Babeeta Raina, and our two wonderful children, Mansi and Manish. Anil, a dedicated government employee serving in the Police Department with distinguished service in NSG Commando and BSF, brings discipline and strength to our family foundation. Babeeta, a devoted homemaker with valuable experience as a Teacher and professional work at a Delhi-based company, infuses our home with wisdom and nurturing care. Mansi, our eldest at 24, is a accomplished Senior IP Analyst at Anaqua Company with a B.Tech in Computer Science, while Manish, 21, is excelling in his final year of B.Tech in Artificial Intelligence and Machine Learning, having been the academic topper in 12th Grade. Together, we create a harmonious blend of service, dedication, and excellence.
            </p>
            <p>
              We value honesty, respect, discipline, and dedication above all else. Our family foundation is built on service to the nation, educational excellence, and mutual support. We believe in working hard, achieving goals, and supporting each other's professional and personal growth. From Anil's commitment to national security to Babeeta's nurturing wisdom, from Mansi's professional success to Manish's academic achievements, we celebrate each milestone together. Our family is our foundation, our source of strength, and our greatest pride.
            </p>
          </div>
        </div>
      </section>

      {/* Family Milestones */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Family Milestones
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6 bg-card p-6 rounded-xl shadow-sm card-hover">
                <div className="text-4xl transition-transform duration-300 hover:scale-125 animate-pulse-hover">
                  {milestone.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Each milestone represents a chapter in our ongoing story, filled with growth, challenges overcome, and dreams realized. We invite you to explore these moments with us, as they reflect not just our history, but the values and aspirations that shape our family today.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center card-hover p-4 rounded-xl">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Background */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Our Background
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our background is a tapestry woven with service and achievement. Anil's distinguished career in law enforcement, including elite service in NSG Commando and BSF units, has instilled values of discipline and dedication in our family. Babeeta's experience in education and professional work has brought wisdom and guidance to our children's development. This blend of service excellence and educational focus has shaped our family's commitment to achieving goals and contributing meaningfully to society. We have successfully raised children who excel academically and professionally, continuing our legacy of service and achievement. Our journey is a testament to hard work, mutual support, and the pursuit of excellence.
          </p>
        </div>
      </section>
    </Layout>
  );
}
