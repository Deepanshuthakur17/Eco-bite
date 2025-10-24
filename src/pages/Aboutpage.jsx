import React from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

export default function Aboutpage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-base-100">
                <div className="relative h-[70vh] w-[70vw] flex justify-center items-center rounded-lg overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCN0rMrFbvn2z9MoZXpqy5Xl4x00orpO3XWWV99ANqCamvCtlO9lHZXQkdteaPKvKXK1vllMOxod4lzj1wed-Cu0KGsNelvZP3tCtvWAE3RGYhNiKVpqxxeV4G9SB8BM9gXmY73ZB4-8UijUdhHM_13LP_d7R-1MED4LDaUG8esLa-2ZQDd1DM4CS9ZaBV7GiAS8hJ6CzPMTjJoFHfdLHS4KbDJlrNFTg5MJ_DFMUIL_QV0ez2b1MIE47iEpZkzof16wHUJNQ5FFr4")`,
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col gap-6 items-center text-center px-4 -mt-24">
                        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter">
                            Our Story
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl pt-40">
                            At EcoBites, we believe in a sustainable future where everyday products don't harm our planet. Our journey began with a simple idea: to create edible alternatives to single-use plastics, making a positive impact on the environment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-10 px-4 md:px-8 lg:px-16 py-8">
                <div className="bg-[#ff2200e4] rounded-xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-black text-center">Our Mission</h2>
                    <p className="mt-4 text-black leading-relaxed text-center font-bold">
                        Our mission is to revolutionize the way we consume food and beverages by providing innovative, edible, and biodegradable products.
                        We aim to reduce plastic waste and promote a circular economy, where products are not only consumed but also contribute to a healthier planet.
                    </p>
                </div>
                <div className="bg-[#55ff00b2] rounded-xl p-6  md:p-8 shadow-lg max-w-4xl mx-auto ">
                    <h2 className="text-3xl font-bold text-black text-center">Eco-Friendly Vision</h2>
                    <p className="mt-4 text-black leading-relaxed text-center font-bold">
                        We envision a world where single-use plastics are a thing of the past. Our edible cups, spoons, and plates are designed to be both functional
                        and environmentally responsible. Made from natural, plant-based ingredients, our products are safe to consume and decompose naturally,
                        leaving no harmful residue behind.
                    </p>
                </div>
                <div className="bg-[#dc143ceb] rounded-xl p-6  md:p-8 shadow-lg max-w-4xl mx-auto ">
                    <h2 className="text-3xl font-bold text-black text-center">Global Impact</h2>
                    <p className="mt-4 text-black leading-relaxed text-center font-bold">
                        EcoBites is committed to reaching customers worldwide, offering sustainable solutions to a global problem. We collaborate with partners and communities to raise awareness about plastic pollution and promote eco-friendly practices. Together, we can create a cleaner, greener future for generations to come.
                    </p>
                </div>

                <div className="mt-16 lg:mt-24 bg-emerald-600 text-white rounded-2xl p-12 text-center">
                    <h2 className="text-4xl font-bold tracking-tight ">Join Us</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        Be a part of the EcoBites movement. Explore our range of edible products and discover how you can make a difference in your daily life.
                    </p>
                    <a href="/product" className=" mt-6 inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-black hover:text-white transition-colors shadow-md">
                        Explore Products</a>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    )
}
