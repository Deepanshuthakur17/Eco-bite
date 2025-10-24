import React from 'react';

export const WhyChoose = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-shadow-transparent text-4xl md:text-5xl font-bold tracking-tighter">
              Why Choose EcoBites?
            </h2>
            <p className="text-balance text-lg md:text-xl max-w-3xl mx-auto">
              We are committed to providing sustainable solutions without compromising on quality or taste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--secondary-100)] text-[var(--secondary-600)]">
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-900 text-xl font-bold">Eco-Friendly</h3>
                <p className="text-zinc-600">Made from natural, plant-based ingredients.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--secondary-100)] text-[var(--secondary-600)]">
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-900 text-xl font-bold">Biodegradable</h3>
                <p className="text-zinc-600">Our products decompose naturally, reducing landfill waste.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-center items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--secondary-100)] text-[var(--secondary-600)]">
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-zinc-900 text-xl font-bold">Sustainable</h3>
                <p className="text-zinc-600">We prioritize sustainability in every aspect of our production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
