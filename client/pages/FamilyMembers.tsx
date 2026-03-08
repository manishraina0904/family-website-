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
} from "lucide-react";
import { useFamilyData } from "@/hooks/useFamilyData";

export function FamilyMembers() {
  const { members, loading, error } = useFamilyData();

  if (loading) {
    return (
      <Layout>
        <div className="py-16 text-center">Loading family members...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="py-16 text-center text-red-500">{error}</div>
      </Layout>
    );
  }

  // Assign icons dynamically (optional, like in your old code)
  const getIcons = (relation: string) => {
    switch (relation.toLowerCase()) {
      case "father":
        return [<Code key="c" className="w-5 h-5" />, <BookOpen key="b" className="w-5 h-5" />, <Heart key="h" className="w-5 h-5" />];
      case "mother":
        return [<Palette key="p" className="w-5 h-5" />, <Camera key="c" className="w-5 h-5" />, <Heart key="h" className="w-5 h-5" />];
      case "sister":
        return [<Code key="c" className="w-5 h-5" />, <Heart key="h" className="w-5 h-5" />, <BookOpen key="b" className="w-5 h-5" />];
      case "brother":
        return [<Gamepad2 key="g" className="w-5 h-5" />, <Music key="m" className="w-5 h-5" />, <Code key="c" className="w-5 h-5" />];
      default:
        return [<Heart key="h" className="w-5 h-5" />];
    }
  };

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-foreground mb-4">
            Our Family
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Meet the Raina Family
          </p>

          {/* Family Members Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {members.map((member) => (
              <Link
                key={member.id}
                to={`/family/${member.relation.toLowerCase()}`}
                className="bg-card rounded-xl shadow-md overflow-hidden card-float group block"
              >
                <div className="flex">
                  <div className="flex-1 p-6">
                    <h3 className="text-2xl font-bold mb-1 text-foreground text-glow">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {member.relation}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {member.description}
                    </p>
                    <div className="flex space-x-2 mb-4">
                      {getIcons(member.relation).map((icon) => (
                        <div
                          key={icon.key}
                          className="text-primary group-hover:scale-110 transition-transform"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                    <span className="text-primary hover:text-primary/80 font-medium transition-all duration-200 inline-flex items-center gap-1 group/link">
                      <span>Learn More</span>
                      <span className="transform transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                  <div className="w-32 h-full">
                    <div className="w-full h-full bg-gray-100 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
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
