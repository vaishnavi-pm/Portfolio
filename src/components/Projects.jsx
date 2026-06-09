import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "full-stack",
      emoji: "🛒",
      path: "/project/ecommerce",
      description: "React + Node.js + MongoDB",
    },
    {
      id: 2,
      title: "Task App",
      category: "frontend",
      emoji: "📋",
      path: "/project/task",
      description: "React + Local Storage",
    },
    {
      id: 3,
      title: "Weather App",
      category: "frontend",
      emoji: "🌤️",
      path: "/project/weather",
      description: "React + OpenWeather API",
    },
    {
      id: 4,
      title: "Blog Platform",
      category: "full-stack",
      emoji: "📝",
      path: "/project/blog",
      description: "Next.js + Prisma + PostgreSQL",
    },
    {
      id: 5,
      title: "Service Page",
      category: "frontend",
      emoji: "⚙️",
      path: "/project/service",
      description: "Showcase page with GitHub projects, premium features, and core skills.",
    },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="section">
      <p className="label">PORTFOLIO</p>
      <h2>My Projects</h2>
      <p className="subtitle">
        A collection of things I've built — from full-stack apps to polished UIs.
      </p>

      {/* Filter Buttons */}
      <div className="filters">
        {["all", "full-stack", "frontend"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "active" : ""}
          >
            {f === "all" ? "All" : f === "full-stack" ? "Full Stack" : "Frontend"}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className="card"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-4deg" : "4deg"})`,
              animationDelay: `${i * 0.1}s`,
            }}
            onClick={() => navigate(p.path)}
          >
            <div className="cardInner">
              <span className="emoji">{p.emoji}</span>
              <span className="category-tag">{p.category}</span>

              <div className="overlay">
                <h3>{p.title}</h3>
                <p className="desc">{p.description}</p>
                <span className="cta">View Project →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty">No projects found for this filter.</p>
      )}

      {/* Styles */}
      <style>{`
        .section {
          background: #0a0a0a;
          color: white;
          padding: 80px 20px;
          text-align: center;
          min-height: 100vh;
        }

        .label {
          font-size: 11px;
          letter-spacing: 4px;
          color: #555;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        h2 {
          font-size: clamp(32px, 6vw, 52px);
          font-weight: 700;
          margin: 0 0 16px;
          background: linear-gradient(135deg, #fff 0%, #888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          color: #666;
          font-size: 15px;
          margin-bottom: 40px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        /* Filter */
        .filters {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filters button {
          padding: 8px 20px;
          background: transparent;
          border: 1px solid #2a2a2a;
          color: #666;
          cursor: pointer;
          border-radius: 100px;
          font-size: 13px;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
        }

        .filters button:hover {
          border-color: #555;
          color: #ccc;
        }

        .filters button.active {
          background: white;
          color: black;
          border-color: white;
          font-weight: 600;
        }

        /* Grid */
        .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 48px;
          padding: 20px 0;
        }

        /* Card */
        .card {
          width: 220px;
          height: 280px;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }

        .card:hover {
          transform: scale(1.08) rotate(0deg) !important;
          z-index: 10;
        }

        .cardInner {
          height: 100%;
          background: #111;
          border: 1px solid #1e1e1e;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          transition: border-color 0.3s ease;
        }

        .card:hover .cardInner {
          border-color: #333;
        }

        .emoji {
          font-size: 64px;
          transition: transform 0.3s ease;
          display: block;
        }

        .card:hover .emoji {
          transform: scale(1.15);
        }

        /* Category tag (visible by default, hides on hover) */
        .category-tag {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #444;
          background: #1a1a1a;
          padding: 3px 8px;
          border-radius: 100px;
          border: 1px solid #2a2a2a;
          transition: opacity 0.3s ease;
        }

        .card:hover .category-tag {
          opacity: 0;
        }

        /* Overlay */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: 18px;
          gap: 8px;
        }

        .card:hover .overlay {
          opacity: 1;
        }

        .overlay h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
          color: #fff;
          text-align: center;
          line-height: 1.3;
        }

        .overlay .desc {
          font-size: 12px;
          color: #666;
          margin: 0;
          text-align: center;
          line-height: 1.5;
        }

        .overlay .cta {
          margin-top: 8px;
          font-size: 13px;
          color: #aaa;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }

        .card:hover .cta {
          color: #fff;
        }

        /* Empty state */
        .empty {
          color: #444;
          font-size: 14px;
          margin-top: 40px;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .grid {
            gap: 30px;
          }
          .card {
            width: 160px;
            height: 210px;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;