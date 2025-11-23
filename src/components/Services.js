import React from 'react'

function Services() {

  const services = [
    {
      title: "Web Development",
      desc: "Build responsive and optimized websites using the latest technologies.",
    },
    {
      title: "UI/UX Design",
      desc: "Design clean, modern and user-friendly interfaces for apps and websites.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve ranking, speed, and visibility of your website on search engines.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
