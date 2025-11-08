export default function About() {
  return (
    <section className="mx-auto container px-4 py-16 space-y-16">
      {/* Top row */}
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left image with caption */}
        <div className="relative">
          <div className="aspect-4/3 w-full rounded-2xl bg-neutral-200" />
          <div className="absolute bottom-4 left-4 rounded-xl bg-black/80 px-4 py-3 text-white max-w-[70%]">
            <p className="text-sm font-medium">
              Crafted with passion and precision
            </p>
          </div>
        </div>

        {/* Right info card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-xs tracking-wider text-neutral-500">ABOUT US</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-neutral-900">
            Building quality that lasts always
          </h2>
          <p className="mt-3 text-neutral-600">
            We combine skilled craftsmanship with premium materials to deliver
            furniture that’s built to endure daily life in the UAE.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-neutral-400 font-semibold">01</span>
              <p className="font-medium">Custom furniture</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-neutral-400 font-semibold">02</span>
              <p className="font-medium">Premium wood</p>
            </div>
          </div>

          <button className="mt-6 inline-flex items-center rounded-xl bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Middle row */}
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs tracking-wider text-neutral-500">
            CRAFTING PERFECTION
          </p>
          <h3 className="mt-2 text-3xl font-bold leading-tight">
            Craftsmanship built to inspire confidence
          </h3>
          <p className="mt-4 text-neutral-600">
            From design to installation, every detail is measured twice and
            finished to perfection for long-lasting results.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-neutral-900 underline underline-offset-4"
          >
            Read More
          </a>
        </div>

        <div className="aspect-4/3 w-full rounded-2xl bg-neutral-200" />
      </div>

      {/* Bottom row */}
      <div className="grid gap-0 md:grid-cols-2 overflow-hidden rounded-2xl">
        <div className="aspect-16/10 w-full bg-neutral-200" />
        <div className="bg-neutral-900 p-8 text-white space-y-8">
          <div>
            <h4 className="text-lg font-semibold">Quality that lasts</h4>
            <p className="mt-2 text-sm/6 text-neutral-300">
              Solid joinery and protective finishes that stand up to heat, dust,
              and daily use.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Combining skill and art</h4>
            <p className="mt-2 text-sm/6 text-neutral-300">
              Precision cutting and hand-finished details for a premium look and
              feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
