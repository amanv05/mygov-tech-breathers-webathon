import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Activities = () => {
  const contests = [
    {
      id: 1,
      title: "International Year of Cooperatives 2025 Essay Competition",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      category: "Essay Competition",
      deadline: "31 Dec 2025",
      badge: "Active",
    },
    {
      id: 2,
      title: "Cyber Warriors Doodle Contest - Youth for a Safer Digital India",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      category: "Doodle Contest",
      deadline: "15 Jan 2026",
      badge: "New",
    },
    {
      id: 3,
      title: "CyberShield Creators - Infographic Contest",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      category: "Infographic Contest",
      deadline: "20 Jan 2026",
      badge: "Trending",
    },
    {
      id: 4,
      title: "Cyber Smart Idea Challenge Building a Cybercrime-free Digital Bharat",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "Idea Challenge",
      deadline: "25 Jan 2026",
      badge: "Active",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Do/Task
          </h2>
          <p className="text-gray-600">
            Find a variety of online & on ground skill-building tasks, activities & contests
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contests.map((contest) => (
            <Card
              key={contest.id}
              className="overflow-hidden hover-lift cursor-pointer border-0 shadow-md"
            >
              <div className="relative h-48">
                <img
                  src={contest.image}
                  alt={contest.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white">
                  {contest.badge}
                </Badge>
              </div>
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-3 bg-blue-50 text-secondary border-0">
                  {contest.category}
                </Badge>
                <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 leading-snug">
                  {contest.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Deadline: {contest.deadline}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
