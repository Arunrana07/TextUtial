import React from "react";

function Services({ mode }) {
  const services = [
    {
      icon: "</>",
      title: "Web Development",
      desc: "Fast, responsive and scalable websites built with modern technologies.",
    },
    {
      icon: "✦",
      title: "UI/UX Design",
      desc: "Clean and intuitive interfaces that make every interaction feel effortless.",
    },
    {
      icon: "↗",
      title: "SEO Optimization",
      desc: "Better speed, visibility and search rankings to help your business grow.",
    },
  ];

  return (
    <section className={`page-shell ${mode === "dark" ? "page-dark" : ""}`}>
      <div className="page-heading">
        <span className="eyebrow">WHAT WE DO</span>
        <h1>Services built around your ideas</h1>
        <p>From the first sketch to the final launch, we create digital experiences that look good and work beautifully.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <span className="learn-more">Learn more →</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
