import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto container px-4 py-6 space-y-16">
      {/* Top row */}
      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Left image with caption */}
        <div className="relative">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about-1.jpeg"
              alt="Custom carpentry team crafting premium furniture"
              fill
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
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
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/about-2.jpeg"
            alt="Close-up of premium wooden cabinet details"
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid gap-0 md:grid-cols-2 overflow-hidden rounded-2xl">
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src="/images/about-3.jpeg"
            alt="Finished bespoke wooden interior installation"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
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
