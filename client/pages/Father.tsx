import { Layout } from "@/components/Layout";
import { Calendar, Shield, Award, Heart, Users, Trophy } from "lucide-react";
import { useFamilyData } from "@/hooks/useFamilyData";

export function Father() {
  const { members, loading, error } = useFamilyData();
  const father = members.find((m) => m.relation?.toLowerCase() === "father");

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <div className="animate-spin h-8 w-8 border-3 border-primary border-t-transparent rounded-full mb-4"></div>
          <p className="text-muted-foreground font-medium">Loading family data...</p>
        </div>
      </Layout>
    );
  }

  if (error || !father) {
    return (
      <Layout>
        <div className="max-w-xl mx-auto p-6 my-10 rounded-2xl bg-red-50 text-red-700 text-center">
          <h2 className="font-bold text-lg mb-2">Couldn’t load Father's profile</h2>
          <p className="text-sm">{error || "Member not found"}</p>
        </div>
      </Layout>
    );
  }

  const timeline = [
    { year: "1973", event: "Born on September 8, 1973", icon: <Calendar className="w-4 h-4" />, color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300" },
    { year: "1990", event: "Served in Border Security Force (BSF)", icon: <Award className="w-4 h-4" />, color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300" },
    { year: "1996", event: "NSG Commando Training & Service", icon: <Trophy className="w-4 h-4" />, color: "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-300" },
    { year: "1997", event: "Achieved Green Belt in Karate", icon: <Award className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300" },
    { year: "2000", event: "Married to Babeeta Raina on November 4, 2000", icon: <Heart className="w-4 h-4" />, color: "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300" },
    { year: "2001", event: "Welcomed daughter Mansi on September 15, 2001", icon: <Heart className="w-4 h-4" />, color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300" },
    { year: "2004", event: "Welcomed son Manish on January 4, 2004", icon: <Heart className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300" },
    { year: "2004", event: "Joined Police Department", icon: <Shield className="w-4 h-4" />, color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300" },
  ];

  const skills = [
    { name: "Law Enforcement", icon: <Shield className="w-5 h-5" />, description: "Expert in police procedures and security protocols" },
    { name: "Martial Arts", icon: <Trophy className="w-5 h-5" />, description: "Green Belt in Karate with disciplined training" },
    { name: "Leadership", icon: <Users className="w-5 h-5" />, description: "Leading teams in high-pressure situations" },
    { name: "Strategic Planning", icon: <Award className="w-5 h-5" />, description: "Tactical planning and risk assessment" },
  ];

  const achievements = [
    "Distinguished service in NSG Commando unit",
    "Dedicated years of service in Border Security Force (BSF)",
    "Green Belt certification in Karate",
    "29+ years of faithful government service",
    "Respected leader in Police Department",
  ];

  const serviceAreas = [
    { area: "NSG Commando", description: "Elite counter-terrorism operations", years: "5+ years" },
    { area: "Border Security Force", description: "Border protection and security", years: "8+ years" },
    { area: "Police Department", description: "Law enforcement and public safety", years: "29+ years" },
    { area: "Community Service", description: "Supporting local community initiatives", years: "Ongoing" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-background to-indigo-50/50">
        {/* Hero */}
        <section className="relative py-12 sm:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block mb-6 sm:mb-8 group">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-blue-100 rounded-full overflow-hidden mx-auto shadow-2xl card-float border-4 border-white">
                <img
                  src={father.image}
                  alt={father.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-primary text-primary-foreground w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-xl animate-pulse">
                🛡️
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 text-glow">
              {father.name}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              {father.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">Age: 52</span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">Government Service</span>
              <span className="bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">Police Department</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-glow">
              About {father.name.split(" ")[0]}
            </h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {father.description} He has served in elite forces like the NSG Commando and the BSF, dedicating his life to public safety, discipline, and community leadership.
              </p>
            </div>
            <div className="mt-6 text-center">
              <blockquote className="text-base sm:text-lg italic text-primary font-medium max-w-lg mx-auto">
                "Service before self — duty, honor, and family above all."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Responsive Timeline */}
        <section className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16 text-glow">
              Service Timeline
            </h2>
            <div className="relative">
              {/* Line: left on mobile, center on md+ */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-6 sm:mb-8 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full pl-10 sm:pl-12 md:pl-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-md card-float border border-border/60">
                      <div
                        className={`flex items-center gap-2.5 mb-2 ${
                          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <div className={`p-1.5 sm:p-2 rounded-full ${item.color}`}>{item.icon}</div>
                        <span className="font-bold text-primary text-xs sm:text-sm">{item.year}</span>
                      </div>
                      <p className="text-foreground font-medium text-xs sm:text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-white dark:border-background shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
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

        {/* Service Areas */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Areas of Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {serviceAreas.map((service, index) => (
                <div key={index} className="bg-card rounded-2xl shadow-sm p-5 sm:p-6 card-float border border-border/60">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-glow">{service.area}</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      {service.years}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 sm:py-16 bg-card/60 backdrop-blur-sm border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-glow">
              Honors & Recognition
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-card p-4 sm:p-5 rounded-xl shadow-sm border border-border/60 card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">🏅</span>
                    <p className="text-xs sm:text-sm md:text-base text-foreground font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Martial Arts */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl shadow-lg p-6 sm:p-10 text-center border border-border/60 card-float">
              <div className="text-5xl sm:text-6xl mb-4">🥋</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-glow">Green Belt in Karate</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
                Anil's dedication to martial arts reflects his unwavering commitment to discipline, physical resilience, and continuous self-improvement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-green-50 dark:bg-green-950/40 p-4 rounded-xl border border-green-200/50">
                  <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-1">Green Belt</div>
                  <p className="text-xs text-green-700 dark:text-green-300">Current Level</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/40 p-4 rounded-xl border border-blue-200/50">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">8+ Years</div>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Dedicated Training</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/40 p-4 rounded-xl border border-orange-200/50">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">Discipline</div>
                  <p className="text-xs text-orange-700 dark:text-orange-300">Core Value</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
