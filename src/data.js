const base = import.meta.env.BASE_URL

export const contactInfo = {
  email: "akashgautamm22@gmail.com",
  phone: "8077554658",
  linkedin: "https://www.linkedin.com/in/akash-gautam-42ba31307/",
  github: "https://github.com/Akashgautam25",
  resume: "https://drive.google.com/file/d/1ayOjkNwV2cKutZAMME8peDT8tMdasAz3/view?usp=drive_link"
}

export const profileInfo = {
  name: "Akash Gautam",
  username: "Akashgautam25",
  avatar: "https://github.com/Akashgautam25.png",
  bio: "Data analytics enthusiast with strong skills in Python, Excel, Tableau, Looker Studio, and Google Sheets, focused on extracting insights, building dashboards, and solving real-world problems using data.",
  location: "Newton School of Technology, Rishihood University"
}

export const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "MySQL",
  "Next JS",
  "React",
  "Node.js",
  "Express JS",
  "Prisma ORM",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GenAI",
  "LangChain",
  "LangGraph",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Excel",
  "Git and Github",
  "MongoDB",
  "Tailwind CSS",
  "UI/UX"
]

const projects = [
  {
    name: "Airbnb Analytics Dashboard",
    description: "Interactive dashboard analyzing Airbnb listings, pricing strategies, and booking patterns.",
    image: `${base}AIRBNB.PNG`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Akashgautam25/AIRBNB",
    live: "https://public.tableau.com/app/profile/akash.gautam1648/viz/Dashboard_17773734697270/Dashboard1"
  },
  {
    name: "Netflix Dashboard",
    description: "Visualization of Netflix content catalog, analyzing genres, ratings, and content distribution.",
    image: `${base}Netflix.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Akashgautam25/Netflix_Dashbard",
    live: "https://public.tableau.com/app/profile/akash.gautam1648/viz/shared/FD7F983JY"
  },
  {
    name: "OpenSky Network Analysis",
    description: "Analysis of flight data from OpenSky Network, exploring aviation patterns and air traffic insights.",
    image: `${base}OpenSky.png`,
    tags: ["Python", "Data Analytics"],
    github: "https://github.com/Akashgautam25/SectionE_G-8_opensky_analysis",
    live: "#" // Placeholder - update with live link when available
  },
  {
    name: "Credit Risk Analysis",
    description: "Comprehensive credit risk assessment and analysis using data visualization and statistical methods.",
    image: `${base}CredRisk.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/Akashgautam25/Dva_CredRisk",
    live: "https://docs.google.com/spreadsheets/d/1HClYa3jQzM4K7MQXSYOt0oCAQIkjJ-28Nw3tb49-xn0/edit?gid=119864571#gid=119864571"
  },
]

export default projects
