import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Heart,
  Camera,
  Music,
  Code,
  Palette,
  Gamepad2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useFamilyData } from "@/hooks/useFamilyData";

export function FamilyMembers() {
  const { members, loading, error } = useFamilyData();

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <div className="animate-spin h-8 w-8 border-3 border-primary border-t-transparent rounded-full mb-4"></div>
          <p className="text-muted-foreground font-medium">Loading family members...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="py-20 text-center text-red-500 px-4">
          <p className="font-semibold text-lg">{error}</p>
        </div>
      </Layout>
    );
  }

  const getIcons = (relation: string) => {
    switch (relation.toLowerCase()) {
      case "father":
        return [<Code key="c" className="w-4 h-4 sm:w-5 sm:h-5" />, <BookOpen key="b" className="w-4 h-4 sm:w-5 sm:h-5" />, <Heart key="h" className="w-4 h-4 sm:w-5 sm:h-5" />];
      case "mother":
        return [<Palette key="p" className="w-4 h-4 sm:w-5 sm:h-5" />, <Camera key="c" className="w-4 h-4 sm:w-5 sm:h-5" />, <Heart key="h" className="w-4 h-4 sm:w-5 sm:h-5" />];
      case "sister":
        return [<Code key="c" className="w-4 h-4 sm:w-5 sm:h-5" />, <Heart key="h" className="w-4 h-4 sm:w-5 sm:h-5" />, <BookOpen key="b" className="w-4 h-4 sm:w-5 sm:h-5" />];
      case "brother":
        return [<Gamepad2 key="g" className="w-4 h-4 sm:w-5 sm:h-5" />, <Music key="m" className="w-4 h-4 sm:w-5 sm:h-5" />, <Code key="c" className="w-4 h-4 sm:w-5 sm:h-5" />];
      default:
        return [<Heart key="h" className="w-4 h-4 sm:w-5 sm:h-5" />];
    }
  };

  return (
    <Layout>
      <div className="py-12 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-glow">
              Our Family Members
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the pillars, dreams, and personalities that make the Raina home full of life and joy.
            </p>
          </div>

          {/* Family Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {members.map((member) => (
              <Link
                key={member.id}
                to={`/family/${member.relation.toLowerCase()}`}
                className="bg-card rounded-2xl shadow-md overflow-hidden card-float group block border border-border/60 hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  {/* Photo container */}
                  <div className="sm:w-44 md:w-48 h-56 sm:h-auto flex-shrink-0 bg-muted overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs px-2.5 py-1 rounded-full font-semibold shadow sm:hidden">
                      {member.relation}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                        {member.relation}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-glow">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2.5 mb-4">
                        {getIcons(member.relation).map((icon) => (
                          <div
                            key={icon.key}
                            className="text-primary bg-primary/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform"
                          >
                            {icon}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Explore Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
