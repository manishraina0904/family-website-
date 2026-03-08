import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';

export function Home() {
  return (
    <Layout>
      {/* Hero Section */}
<section
  className="relative h-[70vh] bg-center bg-cover overflow-hidden"
  style={{ backgroundImage: "url('/family/home-bg.jpg')" }} // background image
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Family image card in the center */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-96 h-64 bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src="/family/hero-family.jpg"
        alt="Raina Family"
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>

  {/* Text content */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="text-center text-white max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Welcome to the Raina Family Website!
      </h1>
      <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
        A place where love, laughter, and memories live forever. We are a family
        that cherishes our values, traditions, and the love we share. Explore our
        journey, our stories, and the moments that define us.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/about"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-glow shadow-lg group"
        >
          <span className="inline-flex items-center gap-2">
            Learn More
            <span className="transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
        <Link
          to="/gallery"
          className="bg-white/90 hover:bg-white text-foreground px-8 py-3 rounded-lg font-semibold btn-float shadow-lg group"
        >
          <span className="inline-flex items-center gap-2">
            <span className="transform transition-transform group-hover:scale-110">📸</span>
            View Memories
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Quick Family Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Welcome to our family's online home!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're thrilled to share our journey, memories, and love with you. Explore our site to 
            learn more about us, view our cherished moments in the gallery, and connect with us. 
            We hope you enjoy your visit!
          </p>
        </div>
      </section>

      {/* Featured Memories */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Featured Memories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Memory 1 */}
            <div className="bg-card rounded-xl shadow-md overflow-hidden card-float group">
              <div className="h-48 bg-warm-200 overflow-hidden">
                <img
                  src="/images/memory-goa.jpg"
                  alt="Family Vacation"
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-glow">Our Trip to Goa 2023</h3>
                <p className="text-muted-foreground mb-4">
                  A wonderful family vacation filled with sun, sand, and unforgettable moments together.
                </p>
                <Link
                  to="/gallery"
                  className="text-primary hover:text-primary/80 font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group/link"
                >
                  <span>View Photos</span>
                  <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Memory 2 */}
            <div className="bg-card rounded-xl shadow-md overflow-hidden card-float group">
              <div className="h-48 bg-peach-200 overflow-hidden">
                <img
                  src="/images/memory-diwali.jpg"
                  alt="Festival Celebration"
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-glow">Diwali Celebrations 2024</h3>
                <p className="text-muted-foreground mb-4">
                  Lighting diyas, sharing sweets, and celebrating the festival of lights with loved ones.
                </p>
                <Link
                  to="/gallery"
                  className="text-primary hover:text-primary/80 font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group/link"
                >
                  <span>View Photos</span>
                  <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* Memory 3 */}
            <div className="bg-card rounded-xl shadow-md overflow-hidden card-float group">
              <div className="h-48 bg-cream-200 overflow-hidden">
                <img
                  src="/images/memory-reunion.jpg"
                  alt="Family Gathering"
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-glow">Family Reunion 2024</h3>
                <p className="text-muted-foreground mb-4">
                  Bringing the whole family together for stories, laughter, and making new memories.
                </p>
                <Link
                  to="/gallery"
                  className="text-primary hover:text-primary/80 font-medium transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group/link"
                >
                  <span>View Photos</span>
                  <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Family Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-glow">
            Meet Our Family
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Father */}
            <Link to="/family/father" className="text-center group block">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-lg card-float bg-blue-200">
                  <img
                    src="/family/father.jpg"
                    alt="Anil Kumar"
                    className="w-full h-full object-cover object-[center_30%] transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  👨‍💻
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Anil Kumar</h3>
              <p className="text-muted-foreground mb-2">Father • Police Department</p>
              <p className="text-sm text-muted-foreground">NSG Commando, BSF veteran with Karate Green Belt</p>
            </Link>

            {/* Mother */}
            <Link to="/family/mother" className="text-center group block">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-lg card-float bg-pink-200">
                  <img
                    src="/family/mother.jpg"
                    alt="Babeeta Raina"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  🌸
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Babeeta</h3>
              <p className="text-muted-foreground mb-2">Mother • Homemaker</p>
              <p className="text-sm text-muted-foreground">Former teacher and corporate professional, heart of our home</p>
            </Link>

            {/* Sister */}
            <Link to="/family/sister" className="text-center group block">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-lg card-float bg-green-200">
                  <img
                    src="/family/sister.jpg"
                    alt="Mansi Raina"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"

                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  🌱
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Mansi</h3>
              <p className="text-muted-foreground mb-2">Sister • Senior IP Analyst</p>
              <p className="text-sm text-muted-foreground">B.Tech CS graduate working at Anaqua Company</p>
            </Link>

            {/* Brother */}
            <Link to="/family/brother" className="text-center group block">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-lg card-float bg-orange-200">
                  <img
                    src="/family/brother.jpg"
                    alt="Manish Raina"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"

                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  🤖
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-glow">Manish</h3>
              <p className="text-muted-foreground mb-2">Brother • B.Tech AIML Final Year</p>
              <p className="text-sm text-muted-foreground">Academic topper pursuing AI and Machine Learning</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Memories */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-glow">
              Recent Memories
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our latest adventures and special moments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {['Goa Beach Sunset', 'Diwali Celebration', 'Basketball Victory', 'Art Exhibition'].map((title, index) => (
              <div key={index} className="relative group">
                <div className="h-48 bg-warm-200 rounded-xl overflow-hidden shadow-lg card-float">
                  <img
                    src="/images/memory-placeholder.jpg"
                    alt={title}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-glow inline-flex items-center gap-2"
            >
              <span className="text-xl">📸</span>
              View Full Gallery
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 text-glow">
            Latest Family News
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-card rounded-xl shadow-lg p-6 card-float">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎓</span>
                <div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Education
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">November 2024</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-glow">Mansi's Professional Growth</h3>
              <p className="text-muted-foreground">
                Mansi has been promoted to Senior IP Analyst at Anaqua Company, showcasing her expertise in intellectual property analysis.
              </p>
            </div>

            {/* News Item 2 */}
            <div className="bg-card rounded-xl shadow-lg p-6 card-float">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Achievement
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">October 2024</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-glow">Manish's Academic Excellence</h3>
              <p className="text-muted-foreground">
                Manish continues his excellent academic performance in final year B.Tech AIML, building on his 12th grade topper achievement.
              </p>
            </div>

            {/* News Item 3 */}
            <div className="bg-card rounded-xl shadow-lg p-6 card-float">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎨</span>
                <div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    Creative
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">September 2024</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-glow">Home Redesign Complete</h3>
              <p className="text-muted-foreground">
                Babeeta's nurturing guidance continues to create a warm and supportive family environment for everyone's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-glow">
            Upcoming Events
          </h2>
          <div className="bg-card rounded-xl shadow-lg p-8 card-float">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-semibold mb-2">Family Picnic 2025</h3>
            <p className="text-muted-foreground mb-4">
              Join us for a fun-filled day of games, food, and bonding at the Annual Family Picnic.
            </p>
            <p className="text-primary font-medium">Date: January 15, 2025</p>
            <p className="text-primary font-medium">Location: Lodhi Garden, New Delhi</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-glow">
            Contact With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay connected with the Raina family. Follow our adventures, celebrate our milestones,
            and be part of our story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-pulse shadow-lg inline-flex items-center gap-2 group"
            >
              <span className="transform transition-transform group-hover:scale-110">💬</span>
              Get in Touch
            </Link>
            <Link
              to="/family"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold btn-shimmer shadow-lg inline-flex items-center gap-2 group"
            >
              <span className="transform transition-transform group-hover:scale-110">👨‍👩‍👧‍👦</span>
              Meet the Family
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
