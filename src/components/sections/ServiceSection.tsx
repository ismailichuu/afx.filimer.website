const services = [
  {
    title: "Portrait Photography",
    detail: "Natural, editorial portrait sessions for individuals and teams.",
  },
  {
    title: "Wedding Photography",
    detail: "Full-day wedding coverage with a cinematic storytelling approach.",
  },
  {
    title: "Commercial Photography",
    detail: "Product, brand, and campaign imagery tailored to your brief.",
  },
  {
    title: "Wedding Videography",
    detail: "Highlight films and full edits capturing the day in motion.",
  },
  {
    title: "Travel Photography",
    detail: "Location-driven storytelling for tourism and lifestyle brands.",
  },
  {
    title: "Post Production",
    detail: "Color grading, retouching, and delivery-ready finishing.",
  },
];

const ServiceSection = () => {
  return (
    <section className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#7d7467]">
          Services
        </p>
        <h1 className="font-display text-4xl">
          Full-spectrum photography built around brand intent.
        </h1>
        <p className="text-sm text-[#5f564a]">
          We partner closely with creative directors, founders, and editors to
          build a cohesive visual system that stretches across campaigns,
          lookbooks, and editorial drops.
        </p>
        <div className="rounded-[28px] border border-[#dbcbb7] bg-[#efe7dc] p-6 text-sm text-[#5f564a] shadow-[0_20px_60px_rgba(31,27,22,0.08)]">
          <p className="font-display text-2xl text-[#1f1b16]">
            Signature package
          </p>
          <p className="mt-2">
            2-day shoot, full retouching, and a curated gallery delivered in 10
            business days.
          </p>
        </div>
      </div>
      <div className="grid gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-[24px] border border-[#dbcbb7] bg-[#f7f2ea] p-6 shadow-[0_16px_40px_rgba(31,27,22,0.08)]"
          >
            <h2 className="font-display text-2xl">{service.title}</h2>
            <p className="mt-2 text-sm text-[#5f564a]">{service.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
