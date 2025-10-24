import React from 'react';

export const Products = () => {
  return (
    <div className="px-4 md:px-20 lg:px-40 py-16 bg-zinc-50">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-zinc-900 text-4xl md:text-5xl font-bold tracking-tighter">
              Our Edible Products
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl max-w-3xl mx-auto">
              Discover our innovative range of edible tableware, designed to be both delicious and environmentally friendly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPXgKU8mJankCjF4HBh_NDDhTG3k4PPmjFnglMi-cJAY70Sm_YymU1wOmpesW4JJhtR1fz-Y94p8Zl6yQkCmYlVa2xUngAFMgk7pxZ939lj3ffWf_rndntm9pIbeKiD7RiJ723q_EbP_oJ8zkdYDQHGrKsElhy7ajzVnZKC2l35apGGcqePnDL0IPlm4DryOrR37Uwy9N_iNnvSFsLRsKfQUrWM0UW8WI2bGTB9FgmPRZpVQFncp6Gba3VvYg53KztX1TFOvIJYHk")`
                }}
              ></div>
              <div>
                <h3 className="text-zinc-900 text-xl font-bold">Edible Cups</h3>
                <p className="text-zinc-600">Enjoy your drinks with our tasty and biodegradable cups.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxubhEob6TsdFbBIlnUm6RnBOYs0U-TUu-eqDsPdeSQ9ehvwIiWV6pN2vcqFKW4mNRQ_1k8-IQfl4Vhzaf2VaoBRCm8iL8w14OePo928epSRDzSXi5fvTEBSMzHOASHOE1hwaXWit-wQvBPUfsOSTZtk5Mutt6FWeYS4raux046JkCQnBRuhkombw2vdB5DHvA5faSmZXig07K_gSGzr4-KLQh5VjXvligvkaIY30GpVtHu-BRlIW47YbkJXy4somEw4TGJnv0JOA")`
                }}
              ></div>
              <div>
                <h3 className="text-zinc-900 text-xl font-bold">Edible Spoons</h3>
                <p className="text-zinc-600">Savor your meals with our flavorful and sustainable spoons.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqcH4_n5dYIZ7xX9RabEWAtrqtizNKAg7dRWj8LUYmot92pRUmcyLwQhFDTp_0ibJJKaE-TtKBCnNuvrpYPqI9cK6K0gTlVqGHRWhlwCc7klaels_l1tMpMoqGGnwZuevcEGshsq2Az--xNjrilhbaonR17NHQmtCuxbLUqux_yqdcZk-EmVQixSvD73-lpuVNdp-JH_jzFOfKIqtihjHW5a5c5KBPwNrYEI03Ysex2G4TRaezRx279EtCZIx7ItEH8MqaRrsxmm8")`
                }}
              ></div>
              <div>
                <h3 className="text-zinc-900 text-xl font-bold">Edible Plates</h3>
                <p className="text-zinc-600">Serve your food on our eco-friendly and edible plates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
