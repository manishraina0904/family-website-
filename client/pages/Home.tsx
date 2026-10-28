import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Heart, Camera, Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';

export function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center bg-center bg-cover overflow-hidden py-12 sm:py-20"
        style={{ backgroundImage: "url('/family/home-bg.jpg')" }}
      >
        {/* Dark & Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75 backdrop-blur-[2px]"></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Family Image Card */}
          <div className="w-full max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-lg aspect-[16/10] bg-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden mx-auto mb-6 sm:mb-8 border-2 sm:border-4 border-white/60 card-float">
            <img
              src="/family/hero-family.jpg"
              alt="Raina Family"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Welcome to our sacred home of memories</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight drop-shadow-lg leading-tight">
            The Raina Family
          </h1>

          <p className="text-sm xs:text-base sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-md leading-relaxed font-light px-2">
            A place where love, laughter, and memories live forever. We cherish our values, traditions, and the bond we share across generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/about"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3.5 rounded-xl font-semibold btn-glow shadow-xl inline-flex items-center justify-center gap-2 group transition-all"
            >
              <span>Learn Our Story</span>
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="bg-white/90 hover:bg-white text-foreground px-6 sm:px-8 py-3.5 rounded-xl font-semibold btn-float shadow-xl inline-flex items-center justify-center gap-2 group transition-all"
            >
              <Camera className="w-4 h-4 text-primary transform transition-transform group-hover:scale-110" />
              <span>View Photo Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Family Intro */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-1 bg-primary/40 rounded-full mx-auto mb-6"></div>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Welcome to our family's online home!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We're thrilled to share our journey, memories, and love with you. Explore our site to
            learn more about us, view our cherished moments in the gallery, and celebrate milestones together.
          </p>
        </div>
      </section>

      {/* Meet Our Family Section */}
      <section className="py-12 sm:py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Meet The Members</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mt-2 text-glow">
              Our Beautiful Family
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">Click any profile to explore their life journey and achievements</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Father */}
            <Link
              to="/family/father"
              className="bg-card rounded-2xl p-6 shadow-md card-float group border border-border/60 hover:border-primary/50 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-blue-100 border-2 border-primary/20">
                    <img
                      src="/family/father.jpg"
                      alt="Anil Kumar"
                      className="w-full h-full object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center text-base shadow-md">
                    👨‍💻
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  Anil Kumar
                </h3>
                <p className="text-xs sm:text-sm font-medium text-primary mb-2">Father • Police Department</p>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  NSG Commando, BSF veteran with Karate Green Belt and 29+ years of service.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center justify-center gap-1">
                View Profile →
              </span>
            </Link>

            {/* Mother */}
            <Link
              to="/family/mother"
              className="bg-card rounded-2xl p-6 shadow-md card-float group border border-border/60 hover:border-primary/50 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-pink-100 border-2 border-primary/20">
                    <img
                      src="/family/mother.jpg"
                      alt="Babeeta Raina"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center text-base shadow-md">
                    🌸
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  Babeeta
                </h3>
                <p className="text-xs sm:text-sm font-medium text-primary mb-2">Mother • Homemaker</p>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  Former teacher & corporate professional, the heart and backbone of our home.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center justify-center gap-1">
                View Profile →
              </span>
            </Link>

            {/* Sister */}
            <Link
              to="/family/sister"
              className="bg-card rounded-2xl p-6 shadow-md card-float group border border-border/60 hover:border-primary/50 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-emerald-100 border-2 border-primary/20">
                    <img
                      src="/family/sister.jpg"
                      alt="Mansi Raina"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center text-base shadow-md">
                    🌱
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  Mansi
                </h3>
                <p className="text-xs sm:text-sm font-medium text-primary mb-2">Sister • Senior IP Analyst</p>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  B.Tech CS graduate working at Anaqua Company with patent and IP expertise.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center justify-center gap-1">
                View Profile →
              </span>
            </Link>

            {/* Brother */}
            <Link
              to="/family/brother"
              className="bg-card rounded-2xl p-6 shadow-md card-float group border border-border/60 hover:border-primary/50 transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg bg-amber-100 border-2 border-primary/20">
                    <img
                      src="/family/brother.jpg"
                      alt="Manish Raina"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center text-base shadow-md">
                    🤖
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  Manish
                </h3>
                <p className="text-xs sm:text-sm font-medium text-primary mb-2">Brother • B.Tech AIML</p>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  Academic topper pursuing Artificial Intelligence and Machine Learning.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center justify-center gap-1">
                View Profile →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Memories */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-glow">
              Featured Memories
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Unforgettable moments that stay with us forever
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Memory 1 */}
            <div className="bg-card rounded-2xl shadow-md overflow-hidden card-float group border border-border/60">
              <div className="h-48 sm:h-52 bg-warm-200 overflow-hidden">
                <img
                  src="/images/memory-goa.jpg"
                  alt="Family Vacation"
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground text-glow">Our Trip to Goa</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  A wonderful family vacation filled with sun, sand, and unforgettable moments together.
                </p>
                <Link
                  to="/gallery"
                  className="text-primary hover:text-primary/80 text-xs sm:text-sm font-semibold inline-flex items-center gap-1"
                >
                  <span>View Photos</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Memory 2 */}
            <div className="bg-card rounded-2xl shadow-md overflow-hidden card-float group border border-border/60">
              <div className="h-48 sm:h-52 bg-peach-200 overflow-hidden">
                <img
                  src="/images/memory-diwali.jpg"
                  alt="Festival Celebration"
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground text-glow">Diwali Celebrations</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Lighting diyas, sharing sweets, and celebrating the festival of lights with loved ones.
                </p>
                <Link
                  to="/gallery"
                  className="text-primary hover:text-primary/80 text-xs sm:text-sm font-semibold inline-flex items-center gap-1"
                >
                  <span>View Photos</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Memory 3 */}
            <div className="bg-card rounded-2xl shadow-md overflow-hidden card-float group border border-border/60 sm:col-span-2 lg:col-span-1">
              <div className="h-48 sm:h-52 bg-cream-200 overflow-hidden">
                <img
                  src="/images/memory-reunion.jpg"
                  alt="Family Gathering"
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground text-glow">Family Reunion</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Bringing the whole family together for stories, laughter, and making new memories.
                </p>
                <Link
                  to="/gallery"
                  className="text-primary hover:text-primary/80 text-xs sm:text-sm font-semibold inline-flex items-center gap-1"
                >
                  <span>View Photos</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Family News */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground text-glow">
              Latest Family News
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Recent highlights, achievements, and milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-card rounded-2xl shadow-md p-6 card-float border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎓</span>
                <div>
                  <span className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Career
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">Anaqua Company</p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">Mansi's Professional Growth</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Mansi has been promoted to Senior IP Analyst at Anaqua Company, continuing to excel in intellectual property analytics.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-md p-6 card-float border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏆</span>
                <div>
                  <span className="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Academics
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">B.Tech AIML</p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">Manish's Engineering Journey</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Manish continues his top-tier academic performance in his final year of Artificial Intelligence and Machine Learning.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-md p-6 card-float border border-border/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💖</span>
                <div>
                  <span className="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Home
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">Family Heart</p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">Togetherness & Warmth</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Babeeta and Anil's guidance continues to build a strong foundation of values, love, and togetherness for the entire family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 text-glow">
            Upcoming Gatherings
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8">
            Mark your calendars for our family celebrations
          </p>
          <div className="bg-card rounded-2xl shadow-lg p-6 sm:p-10 card-float border border-border/60">
            <div className="text-5xl sm:text-6xl mb-4">🎉</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Annual Family Gathering 2025</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
              Join us for a fun-filled day of stories, food, traditional dishes, and bonding with all relatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs sm:text-sm text-primary font-medium">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                January 15, 2025
              </span>
              <span className="inline-flex items-center gap-1.5 bg-primary/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                Lodhi Garden, New Delhi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 text-glow">
            Stay In Touch
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions, greetings, or want to say hello? Drop us a warm message anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold btn-glow shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span>Send a Message</span>
              <span>✉️</span>
            </Link>
            <Link
              to="/family"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3.5 rounded-xl font-semibold shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Explore All Members</span>
              <span>👨‍👩‍👧‍👦</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
