import { Layout } from "@/components/Layout";
import { Calendar, Shield, Award, Heart, Users, Trophy } from "lucide-react";
import { useFamilyData } from "@/hooks/useFamilyData";

export function Father() {
  const { members, loading, error } = useFamilyData();
  const father = members.find((m) => m.relation?.toLowerCase() === "father");

  if (loading) {
    return (
      <Layout>
        <div className="p-10 text-center text-gray-500">Loading family data…</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-xl mx-auto p-6 my-10 rounded-lg bg-red-50 text-red-700">
          <h2 className="font-bold mb-2">Couldn’t load family data</h2>
          <p className="mb-3 text-sm">{error}</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Make sure the file exists at <code>/public/family_website_data.json</code>.</li>
            <li>Open <code>http://localhost:5173/family_website_data.json</code> in your browser — it should show JSON.</li>
            <li>Validate JSON (no missing commas). Must include <code>members</code> array.</li>
          </ul>
        </div>
      </Layout>
    );
  }

  if (!father) {
    return (
      <Layout>
        <div className="max-w-xl mx-auto p-6 my-10 rounded-lg bg-amber-50 text-amber-800">
          <h2 className="font-bold mb-2">“Father” not found in data.members</h2>
          <p className="text-sm">
            In <code>public/family_website_data.json</code>, make sure one member has:
          </p>
          <pre className="mt-3 p-3 bg-white rounded border text-xs overflow-auto">
{`{
  "name": "Anil Kumar",
  "relation": "Father",
  "description": "…",
  "image": "/family/father.jpg"
}`}
          </pre>
          <p className="mt-3 text-sm">…and that the image exists at <code>public/family/father.jpg</code>.</p>
        </div>
      </Layout>
    );
  }

  // Static sections kept from your original page
  const timeline = [
    { year: "1973", event: "Born on September 8, 1973", icon: <Calendar className="w-4 h-4" />, color: "bg-blue-100 text-blue-600" },
    { year: "1990", event: "Served in Border Security Force (BSF)", icon: <Award className="w-4 h-4" />, color: "bg-purple-100 text-purple-600" },
    { year: "1996", event: "NSG Commando Training & Service", icon: <Trophy className="w-4 h-4" />, color: "bg-red-100 text-red-600" },
    { year: "1997", event: "Achieved Green Belt in Karate", icon: <Award className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-600" },
    { year: "2000", event: "Married to Babeeta Raina on November 4, 2000", icon: <Heart className="w-4 h-4" />, color: "bg-pink-100 text-pink-600" },
    { year: "2001", event: "Welcomed daughter Mansi on September 15, 2001", icon: <Heart className="w-4 h-4" />, color: "bg-orange-100 text-orange-600" },
    { year: "2004", event: "Welcomed son Manish on January 4, 2004", icon: <Heart className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-600" },
    { year: "2004", event: "Joined Police Department", icon: <Shield className="w-4 h-4" />, color: "bg-green-100 text-green-600" },
    
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block mb-8 group">
              <div className="w-48 h-48 bg-blue-200 rounded-full overflow-hidden mx-auto shadow-2xl card-float">
                <img
                  src={father.image}
                  alt={father.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-pulse">
                🛡️
              </div>
            </div>

            <h1 className="text-5xl font-bold text-foreground mb-4 text-glow">{father.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{father.description}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Age: 52</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Government Employee</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Police Department</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">About {father.name.split(" ")[0]}</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed">
                {father.description} He has also served in elite forces like the NSG Commando and the BSF, dedicating his life to public safety.
              </p>
            </div>
            <div className="mt-8 text-center">
              <blockquote className="text-xl italic text-primary font-medium">
                "Service before self - duty, honor, and family above all."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Service Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-lg card-float">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-full ${item.color}`}>{item.icon}</div>
                        <span className="font-bold text-primary">{item.year}</span>
                      </div>
                      <p className="text-foreground font-medium">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
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

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Areas of Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceAreas.map((service, index) => (
                <div key={index} className="bg-card rounded-xl shadow-lg p-6 card-float">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-glow">{service.area}</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{service.years}</span>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Honors & Recognition</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg card-float">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏅</span>
                    <p className="text-foreground font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Karate */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Martial Arts Journey</h2>
            <div className="bg-card rounded-xl shadow-lg p-8 text-center card-float">
              <div className="text-6xl mb-4">🥋</div>
              <h3 className="text-2xl font-bold mb-4 text-glow">Green Belt in Karate</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {father.name.split(" ")[0]}'s dedication to martial arts reflects his commitment to discipline, respect, and continuous self-improvement.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">Green Belt</div>
                  <p className="text-sm text-green-700">Current Level</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">8+</div>
                  <p className="text-sm text-blue-700">Years Training</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Discipline</div>
                  <p className="text-sm text-orange-700">Core Value</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family Values & Connect */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Family Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-lg font-semibold mb-2">Strength & Discipline</h3>
                <p className="text-sm text-muted-foreground">Leading by example with personal discipline and mental fortitude</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-semibold mb-2">Family Protection</h3>
                <p className="text-sm text-muted-foreground">Dedicated to ensuring the safety and security of our family</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-lg card-float text-center">
                <div className="text-4xl mb-4">🇮🇳</div>
                <h3 className="text-lg font-semibold mb-2">Service to Nation</h3>
                <p className="text-sm text-muted-foreground">Instilling values of patriotism and civic responsibility</p>
              </div>
            </div>

            <div className="py-16 text-center">
              <h2 className="text-3xl font-bold mb-6 text-glow">Connect with {father.name.split(" ")[0]}</h2>
              <p className="text-muted-foreground mb-8">
                Always ready to share insights about service, discipline, and family values.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold btn-glow">
                <span className="inline-flex items-center gap-2">
                  <span>🛡️</span>
                  Honor & Respect
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
