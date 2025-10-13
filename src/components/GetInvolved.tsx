import { CheckSquare, MessageSquare, BarChart3, FileText, Mic, HelpCircle, Sparkles, Megaphone, Heart, Podcast } from "lucide-react";

const GetInvolved = () => {
  const activities = [
    { icon: CheckSquare, label: "DO/TASK", color: "bg-orange-600", description: "Complete tasks and contribute" },
    { icon: MessageSquare, label: "DISCUSS", color: "bg-blue-500", description: "Share your opinions" },
    { icon: BarChart3, label: "POLL/SURVEY", color: "bg-cyan-500", description: "Participate in polls" },
    { icon: FileText, label: "BLOG", color: "bg-yellow-600", description: "Write and read blogs" },
    { icon: Mic, label: "TALK", color: "bg-pink-500", description: "Voice your thoughts" },
    { icon: HelpCircle, label: "QUIZ", color: "bg-red-500", description: "Test your knowledge" },
    { icon: Sparkles, label: "MG PRIME", color: "bg-green-500", description: "Premium content" },
    { icon: Megaphone, label: "CAMPAIGN", color: "bg-purple-500", description: "Join campaigns" },
    { icon: Heart, label: "PLEDGE", color: "bg-emerald-500", description: "Make pledges" },
    { icon: Podcast, label: "PODCAST", color: "bg-indigo-500", description: "Listen to podcasts" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
            GET INVOLVED
          </h2>
          <p className="text-gray-600 text-lg">
            Participate in nation-building activities
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`${activity.color} w-20 h-20 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-3`}
              >
                <activity.icon className="w-10 h-10 text-white" />
              </div>
              <span className="text-xs font-semibold text-center text-gray-700 uppercase tracking-wide">
                {activity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
