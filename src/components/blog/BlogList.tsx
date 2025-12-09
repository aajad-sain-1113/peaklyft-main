import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "/images/A-104-2048x1152-1.png",
    category: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    date: "January 29, 2025",
    excerpt: "As businesses accelerate their digital transformation, the DevOps landscape…",
  },
  {
    image: "/images/image33.webp",
    category: "Uncategorized",
    title: "Turbocharging Sales for SaaS and X-Tech Companies: Leveraging Key Competencies…",
    date: "January 29, 2025",
    excerpt: "In today’s dynamic SaaS and X-Tech landscape, organizations face…",
  },
  {
    image: "/images/image 2.jpg",
    category: "Uncategorized",
    title: "Unlocking Sales Productivity for Banking Professionals: A Strategic Approach…",
    date: "January 29, 2025",
    excerpt: "In the ever-evolving financial sector, improving sales productivity…",
  },
  {
    image: "/images/A-104-2048x1152-1.png",
    category: "Uncategorized",
    title: "Key Skills and Capabilities Every DevOps Professional and Business Will Need in 2025",
    date: "January 29, 2025",
    excerpt: "As businesses accelerate their digital transformation, the DevOps landscape…",
  },
  {
    image: "/images/image33.webp",
    category: "Uncategorized",
    title: "Turbocharging Sales for SaaS and X-Tech Companies: Leveraging Key Competencies…",
    date: "January 29, 2025",
    excerpt: "In today’s dynamic SaaS and X-Tech landscape, organizations face…",
  },
  {
    image: "/images/image 2.jpg",
    category: "Uncategorized",
    title: "Unlocking Sales Productivity for Banking Professionals: A Strategic Approach…",
    date: "January 29, 2025",
    excerpt: "In the ever-evolving financial sector, improving sales productivity…",
  },
];

export default function BlogList() {
  return (
    <div className="container px-10 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {blogs.map((b, i) => (
          <BlogCard
            key={i}
            image={b.image}
            category={b.category}
            title={b.title}
            date={b.date}
            excerpt={b.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
