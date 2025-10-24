import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export default function Productspage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 px-6 sm:px-10 lg:px-20 xl:px-40 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[white] tracking-tight">
              Our Edible Products
            </h1>
            <p className="mt-4 text-lg text-[white] max-w-3xl mx-auto">
              Explore our range of sustainable and delicious edible products, designed to reduce waste and enhance your dining experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              title="Edible Cups"
              price="$9.99"
              description="Sustainable and tasty cups for any beverage."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCIAc4QmMP8meqhj6t2uutR6HV02yFkWF_AtEUGFpoozV8HJOWKZuK3zOhnXd65j8QqPC1SCNlu-2H0ZNRdZfIoRP4VdmEecgqjXmz9W-IAOjL5V18QQO099epIsQv0tWYgcCnZzGDrsjxJ6Ya39WW5nzhmafwVETQXEm5z4Kw4OSKGsfOP-HZObKNCUHv2w1sHVnfjvsnpsG2I47TzU77twLFPz-4GMmh2kxKhgfds045xcJ0Ro6SCLUZ2D9xCTYuxEFUErur7Ky4"
            />
            <ProductCard
              title="Edible Spoons"
              price="$7.99"
              description="Eco-friendly spoons that are both functional and delicious."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBsudcz41KjUQ7eFtWHu8wjCFeW05G3baC4hxE7_mg6rmys0HSnwwZanT7hZHrEBk75rqWo8OGmkd54R0HH9HixvAlT3j6Jnb9xxTPMEWgkGxkr-LF0m7s_ujmhOgduqZhlCjVHzCSl8W-KqFeaIlw8NjbwIueppyaEPkjjxqueUI-fEXI6GwXYc-RtjC8z-UPTX3aRHxWfHXKc0zKZaHn2ak_I8-ItBlM0gjreHz8fuEwZlkBg5XgCtEE6zaO6AZswns4F8J1zVxw"
            />
            <ProductCard
              title="Edible Plates"
              price="$12.99"
              description="Durable and edible plates for all occasions."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBk3ta8JurOW-IZtDdNRhLEWdu-4T7sem5P02lyJdObdiMlL64PJ-RFIacEciOzFOyUaymFi5b3M9NWJhGPreZfGttNImbC1ANIh_yDROirH_-Ugq61yAYewtCL4Yd3BkpTwIVXEpESO_pXETjsynDFPyyEUoNcCEa9KK4E3b2JuZ53hNGxHJFg4DAXEfycitJ9dxHO1eRmCQXZxV4zd9VlGxMspCjnhyDOTrkQZJgVb2BkF1QfTwHIHjvHfHHuT5nrwi0_IscSeh8"
            />
            <ProductCard
              title="Future Products"
              price="Coming Soon"
              description="Exciting new products coming soon!"
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBx9MZ8SLF3_nw9vl7DsIBXT4Z7OK6R73WoxXA8OB3rNdSRwMLbhLxXJuoeJp4n_z27nYpCadFwsP18RPqX5Kyd1RBViLYT61mCdvCaZxYg56qreqm5BxqL_9rJc66UfP8c8Z946akGt4wRO0B3IRMxSXeFlNbpn8SqTM2tw0rrvgv95tkyEBUMJsQFerFJJwRGk5AQgMXwed7T2TOyVZAEw-2e9I4E_dkiqIgnwq-tJO16oagGv7XKiBxlOLs3Ze3L9eH4eSquLqU"
            />
          </div>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[white] tracking-tight mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="EcoCup"
                price="$9.99"
                description="The perfect sustainable alternative to disposable cups."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBtaci4NSMfrHvT7Uynkc8gqSQO2-il5t519lsEgZMo8utNyScpxnAvtCfXstE3LJXKjgyBKY-LtJeo3ROB0oGbUGyEwl4CDxpPxa7NmTXAKetxiftK1bjaDTEgwSuI3WzcCUvkIMZ76PX9oyo_Gy7oei2ggLplBsI5Wnq3yzBUaNUxli_Rk5Wy-V1Kh5DD5Dh9QM3zQCiGBvqsVsO7B6z86dJUSWkTw03EirMGkeIMUEPrabxWzl4S4CcCCNXy5DeKZLS1yUL4S-4"
              />
              <ProductCard
                title="EcoSpoon"
                price="$7.99"
                description="Enjoy your meal with our delicious and eco-friendly spoons."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBja96ID0G0ehBT07kcs0areaE7USJf-SfTN690sVx_ZrlAlA3kOgHgXKq1F_ItPHKnACr-Dczj58iRE5HS7SvWEgzla9NM8r_syhYTlYjAWPUATtMkXI7lq-5MCJ_mWITgqM_hXq5S96JzGGzjh2kqAprI_wiStQhc13bkNNo1_b2IAXzNu8eohhAc9EOfPANxLoZ1CwBDvpGJdYDaxcDt6WPzZf02E4gINsyuPaz1Dw3WB6J5x6YSUMuIcugpSXCqh2bAMFx_51E"
              />
              <ProductCard
                title="EcoPlate"
                price="$12.99"
                description="Durable and tasty plates for any event."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWmv6eppHZlPae6DsUiYdtRZaaaLZS56vcGI3-Sye03V0x9-8oGWw-Q_0_COR6TmacLAQLp-5E1CPMT3tOyUteWGYawNvCX-4FcJQEbUxch3Qk2KyKNVVQIq2cJOgt-YbZAyz1_Np-bovq4zApPc57FqLcuEoUohhPQ0YNJX2PPq53nlpWz5OMYxkjNuwCa4yML2j5K5QsrJLuy7L4oLLjaVNa5cvYcLPpdz0Fne2M2pkiy5h248Mwh9x-l8ogRWGJ0QIHN-P-ME"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function ProductCard({ title, description, price, imageUrl }) {
  return (
    <div className="group flex flex-col gap-4 bg-[var(--card-background)] rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div
        className="w-full h-56 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[var(--text-primary)]">{title}</h3>
          <p className="text-[var(--text-secondary)] text-sm mt-1">{description}</p>
        </div>
        <p className={`text-lg font-semibold mt-4 ${price === 'Coming Soon' ? 'text-gray-400' : 'text-[var(--primary-color)]'}`}>
          {price}
        </p>
      </div>
    </div>
  );
}
