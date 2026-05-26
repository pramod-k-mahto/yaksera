import { useEffect } from "react";
import Demo from "./Demo";
import { useNavigate } from "react-router-dom";
import { getBlogsAll } from "../services/blog";

const blogs = [
  {
    id: 1,
    tag: "Most Important features of",
    highlight: "Vue.js Development",
    highlightColor: "text-[#e8192c]",
    bgGradient: "from-[#0d1f4e] to-[#102a5c]",
    iconColor: "text-white/20",
    icon: "▼",
    title: "How is Vue.js development is Important?",
    desc: "In simple words, Vuejs is an open-source JavaScript framework. Vuejs web App development majorly focuses upon single-page apps and user interfaces.",
  },
  {
    id: 2,
    tag: "Incredible Benefits with",
    highlight: "Laravel Web Development",
    highlightColor: "text-[#e8192c]",
    bgGradient: "from-[#0d1f4e] to-[#142b4d]",
    iconColor: "text-white/20",
    icon: "⌐",
    title: "Enjoy the benefits with Laravel Web Development.",
    desc: "Laravel is an amazing platform that has eased the life of developers. It is a free and open-source PHP web framework.",
  },
  {
    id: 3,
    tag: "Evaluating Usage of",
    highlight: "Flutter App Development",
    highlightColor: "text-[#e8192c]",
    bgGradient: "from-[#0d1f4e] to-[#1a2f55]",
    iconColor: "text-white/20",
    icon: "◆",
    title: "Let build you first app with Flutter App Development.",
    desc: "Every year comes with new challenges and technologies in the digital world. Flutter App Development is trending and the credit goes to its development.",
  },
  {
    id: 4,
    tag: "Evaluating Usage of",
    highlight: "Flutter App Development",
    highlightColor: "text-[#e8192c]",
    bgGradient: "from-[#0d1f4e] to-[#1a2f55]",
    iconColor: "text-white/20",
    icon: "◆",
    title: "Let build you first app with Flutter App Development.",
    desc: "Every year comes with new challenges and technologies in the digital world. Flutter App Development is trending and the credit goes to its development.",
  },
  {
    id: 5,
    tag: "Most Important features of",
    highlight: "Vue.js Development",
    highlightColor: "text-[#e8192c]",
    bgGradient: "from-[#0d1f4e] to-[#102a5c]",
    iconColor: "text-white/20",
    icon: "▼",
    title: "How is Vue.js development is Important?",
    desc: "In simple words, Vuejs is an open-source JavaScript framework. Vuejs web App development majorly focuses upon single-page apps and user interfaces.",
  },
  {
    id: 6,
    tag: "Incredible Benefits with",
    highlight: "Laravel Web Development",
    highlightColor: "text-[#e8192c]",
    bgGradient: "from-[#0d1f4e] to-[#142b4d]",
    iconColor: "text-white/20",
    icon: "⌐",
    title: "Enjoy the benefits with Laravel Web Development.",
    desc: "Laravel is an amazing platform that has eased the life of developers. It is a free and open-source PHP web framework.",
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Blog() {
  const navigate = useNavigate();
  const getData = async () => {
    const data = await getBlogsAll();
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 lg:px-20 bg-white font-sans">


      {/* HEADER (unchanged layout, only style consistency) */}
      <div className="flex items-center justify-center gap-4 mb-12">

        <svg className="hidden sm:block" width="60" height="20" viewBox="0 0 80 20">
          <path
            d="M0 10 Q10 2 20 10 Q30 18 40 10 Q50 2 60 10 Q70 18 80 10"
            fill="none"
            stroke="#0d1f4e"
            strokeWidth="2"
          />
        </svg>

        <h2 className="text-3xl text-[#e8192c] font-black  tracking-wide">
          Blog
        </h2>

        <svg className="hidden sm:block" width="60" height="20" viewBox="0 0 80 20">
          <path
            d="M0 10 Q10 18 20 10 Q30 2 40 10 Q50 18 60 10 Q70 2 80 10"
            fill="none"
            stroke="#0d1f4e"
            strokeWidth="2"
          />
        </svg>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate("/blogDetail")}
            className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >

            {/* HEADER */}
            <div className={`h-44 bg-gradient-to-br ${blog.bgGradient} flex items-center justify-between px-6 relative`}>

              <div className="text-white/90 text-sm leading-snug max-w-[70%]">
                {blog.tag}{" "}
                <span className={blog.highlightColor}>
                  {blog.highlight}
                </span>
              </div>

              <div className={`text-6xl font-black ${blog.iconColor}`}>
                {blog.icon}
              </div>

            </div>

            {/* BODY */}
            <div className="p-5 flex flex-col flex-1">

              <h3 className="text-[#0d1f4e] font-bold text-base mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-auto">
                {blog.desc}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e8192c] group w-fit">
                Read More
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Blog;