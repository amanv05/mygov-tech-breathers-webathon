import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Statistics = () => {
  const [stats, setStats] = useState({
    users: 0,
    submissions: 0,
    comments: 0,
    polls: 0,
    participants: 0,
    pledges: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalStats = {
    users: 3245678,
    submissions: 125430,
    comments: 987654,
    polls: 45678,
    participants: 2134567,
    pledges: 567890,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        users: Math.floor(finalStats.users * progress),
        submissions: Math.floor(finalStats.submissions * progress),
        comments: Math.floor(finalStats.comments * progress),
        polls: Math.floor(finalStats.polls * progress),
        participants: Math.floor(finalStats.participants * progress),
        pledges: Math.floor(finalStats.pledges * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(finalStats);
      }
    }, interval);
  };

  const statItems = [
    { label: "MYGOV SAATHIS", value: stats.users, key: "users" },
    { label: "SUBMISSIONS IN TASKS", value: stats.submissions, key: "submissions" },
    { label: "COMMENTS IN DISCUSSIONS", value: stats.comments, key: "comments" },
    { label: "VOTES IN POLLS", value: stats.polls, key: "polls" },
    { label: "PARTICIPATION IN QUIZ", value: stats.participants, key: "participants" },
    { label: "PLEDGES TAKEN", value: stats.pledges, key: "pledges" },
  ];

  return (
    <section ref={sectionRef} className="py-8 bg-gray-50 border-y">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Statistics</h2>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-secondary animate-pulse" />
            <ArrowRight className="w-6 h-6 text-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statItems.map((item, index) => (
            <div
              key={item.key}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {item.value.toLocaleString()}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
