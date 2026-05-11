
import Demo from './Demo'
import { useNavigate } from 'react-router-dom'


const blogs = [
  {
    id: 1,
    tag: "Most Important features of",
    highlight: "Vue.js Development",
    highlightColor: "text-green-400",
    bgGradient: "from-[#0a2a1a] to-[#0d1f0d]",
    iconColor: "text-green-400",
    icon: "▼",
    title: "How is Vue.js development is Important?",
    desc: "In simple words, Vuejs is an open-source JavaScript framework. Vuejs web App development majorly focuses upon single-page apps and user interfaces.",
  },
  {
    id: 2,
    tag: "Incredible Benefits with",
    highlight: "Laravel Web Development",
    highlightColor: "text-red-400",
    bgGradient: "from-[#1a0a0a] to-[#1f0d0d]",
    iconColor: "text-red-400",
    icon: "⌐",
    title: "Enjoy the benefits with Laravel Web Development.",
    desc: "Laravel is an amazing platform that has eased the life of developers. It is a free and open-source PHP web framework.",
  },
  {
    id: 3,
    tag: "Evaluating Usage of",
    highlight: "Flutter App Development",
    highlightColor: "text-cyan-400",
    bgGradient: "from-[#0a1a2a] to-[#0d1a2a]",
    iconColor: "text-cyan-400",
    icon: "◆",
    title: "Let build you first app with Flutter App Development.",
    desc: "Every year comes with new challenges and technologies in the digital world. Flutter App Development is trending and the credit goes to its development.",
  },
  {
    id: 4,
    tag: "Evaluating Usage of",
    highlight: "Flutter App Development",
    highlightColor: "text-cyan-400",
    bgGradient: "from-[#0a1a2a] to-[#0d1a2a]",
    iconColor: "text-cyan-400",
    icon: "◆",
    title: "Let build you first app with Flutter App Development.",
    desc: "Every year comes with new challenges and technologies in the digital world. Flutter App Development is trending and the credit goes to its development.",
  },
  {
    id: 5,
    tag: "Most Important features of",
    highlight: "Vue.js Development",
    highlightColor: "text-green-400",
    bgGradient: "from-[#0a2a1a] to-[#0d1f0d]",
    iconColor: "text-green-400",
    icon: "▼",
    title: "How is Vue.js development is Important?",
    desc: "In simple words, Vuejs is an open-source JavaScript framework. Vuejs web App development majorly focuses upon single-page apps and user interfaces.",
  },
  {
    id: 6,
    tag: "Incredible Benefits with",
    highlight: "Laravel Web Development",
    highlightColor: "text-red-400",
    bgGradient: "from-[#1a0a0a] to-[#1f0d0d]",
    iconColor: "text-red-400",
    icon: "⌐",
    title: "Enjoy the benefits with Laravel Web Development.",
    desc: "Laravel is an amazing platform that has eased the life of developers. It is a free and open-source PHP web framework.",
  },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function Blog() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 bg-gray-50">
        <Demo/>

      {/* Header - Scaled for mobile */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
        <svg className="hidden sm:block" width="60" height="20" viewBox="0 0 80 20">
          <path d="M0 10 Q10 2 20 10 Q30 18 40 10 Q50 2 60 10 Q70 18 80 10"
            fill="none" stroke="#1d4ed8" strokeWidth="2" />
        </svg>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d4ed8] tracking-wide">Blog</h2>
        <svg className="hidden sm:block" width="60" height="20" viewBox="0 0 80 20">
          <path d="M0 10 Q10 18 20 10 Q30 2 40 10 Q50 18 60 10 Q70 2 80 10"
            fill="none" stroke="#1d4ed8" strokeWidth="2" />
        </svg>
      </div>

      {/* Grid - Responsive columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <div key={blog.id}

          onClick={()=>{
            navigate('/blogDetail')
          }}

            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 cursor-pointer flex flex-col">

            {/* Dark Image Banner */}
            <div className={`bg-gradient-to-br ${blog.bgGradient} h-40 sm:h-44 flex items-center justify-between px-6 relative shrink-0`}>
              <div className="text-white text-xs sm:text-sm font-light leading-snug max-w-[60%] z-10">
                {blog.tag}{' '}
                <span className={`font-bold ${blog.highlightColor}`}>
                  {blog.highlight}
                </span>
              </div>
              <div className={`text-6xl sm:text-7xl font-black opacity-80 ${blog.iconColor} select-none`}>
                {blog.icon}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-[#1d4ed8] font-bold text-base leading-snug mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify mb-auto">
                {blog.desc}
              </p>
              <a href="#"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-red-500 group w-fit">
                Read More
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog