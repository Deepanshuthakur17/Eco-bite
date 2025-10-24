import React from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-20 sm:px-12 lg:px-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to share your thoughts, please reach out to us.
            </p>
            <div className="mt-10 space-y-8 border-t border-gray-200 pt-10">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fee2e2] text-[#dc2626]">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Our Location</h3>
                  <p className="mt-1 text-white">123 Green Earth</p>
                  <p className="text-white">Muzaffarnagar, Uttar Pradesh, INDIA</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fee2e2] text-[#dc2626]">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Email Us</h3>
                  <p className="mt-1 text-white">@EcoBite.com</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fee2e2] text-[#dc2626]">
                  <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.213-.992-.55-1.34L20.18 15.11a2.25 2.25 0 00-2.65.65l-1.01 1.01c-.13.13-.289.23-.46.28a11.95 11.95 0 01-6.13-6.13c.05-.171.15-.33.28-.46l1.01-1.01a2.25 2.25 0 00.65-2.65l-2.08-3.696a2.25 2.25 0 00-1.34-.55H4.5A2.25 2.25 0 002.25 6.75z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 text-white">Call Us</h3>
                  <p className="mt-1 text-white">+91 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <form method="POST" action="#" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                Your Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Your Name"
                  className="form-input block w-full rounded-xl border-0 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#dc2626] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Your Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  className="form-input block w-full rounded-xl border-0 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#dc2626] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-white">
                Your Phone no
              </label>
              
              <div className="mt-2.5">
                <input
                  type="text"
                  name="Phone"
                  id="Phone"
                  placeholder="Your Phone no"
                  className="form-input block w-full rounded-xl border-0 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#dc2626] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Your Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="form-textarea block w-full rounded-xl border-0 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#dc2626] sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#dc2626] text-white text-base font-bold shadow-lg transition-all hover:bg-[#c32b2bf0] focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:ring-offset-2"
              >
                <span className="truncate">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}
