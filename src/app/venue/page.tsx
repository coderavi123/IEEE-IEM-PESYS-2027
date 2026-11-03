"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const places = [
  {
    name: "Marina Bay Sands",
    image: "/places/marina-bay-sands.jpeg",
    description:
      "One of Singapore's most recognizable landmarks, surrounded by the spectacular Marina Bay skyline.",
  },
  {
    name: "Sentosa Island",
    image: "/places/sentosa-island.jpeg",
    description:
      "A vibrant island destination known for beaches, entertainment, attractions and beautiful coastal views.",
  },
  {
    name: "Singapore Cityscape",
    image: "/places/singapore-cityscape.jpeg",
    description:
      "Experience Singapore's modern architecture, illuminated skyline and distinctive urban character.",
  },
  {
    name: "Singapore Skyline",
    image: "/places/singapore-skyline-1.jpeg",
    description:
      "A panoramic view of Singapore's spectacular skyline and modern city architecture.",
  },
  {
    name: "Singapore at Night",
    image: "/places/singapore-skyline-2.jpeg",
    description:
      "See the city transform after sunset with glowing towers, reflections and unforgettable night views.",
  },
];

export default function VenuePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % places.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? places.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % places.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO - CINEMATIC SINGAPORE VIDEO                         */}
      {/* ========================================================= */}

      <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-slate-950">
        {/* Cinematic Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/places/singapore-skyline-1.jpeg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Cinematic video of Singapore"
        >
          <source
            src="/videos/singapore-cinematic.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Left dark gradient for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

        {/* Bottom cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20" />

        {/* Green ambient glow */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        {/* Cyan ambient glow */}
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-[0.2em] text-white backdrop-blur-md">
              CONFERENCE VENUE
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-8xl">
              Singapore
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              A world-class destination where innovation, technology and
              international collaboration meet.
            </p>

            {/* Information Cards */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Conference Date
                </p>

                <p className="mt-1 font-semibold text-white">
                  21st - 23rd June, 2027
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Location
                </p>

                <p className="mt-1 font-semibold text-white">
                  Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO                                                     */}
      {/* ========================================================= */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            The Conference Destination
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            A Global City for a Global Conference
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Singapore offers an exceptional environment for international
            conferences, combining modern infrastructure, global connectivity,
            iconic architecture and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GOOGLE MAP                                                */}
      {/* ========================================================= */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Explore Singapore
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              Conference Destination Map
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              Explore Singapore and its major attractions around the
              conference destination.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Singapore&output=embed"
              className="h-[420px] w-full border-0 sm:h-[520px]"
              loading="lazy"
              title="Google Map of Singapore"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PLACES TO VISIT                                          */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-slate-950 px-6 py-24">
        {/* Ambient glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Discover Singapore
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              Places to Visit in Singapore
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              Experience the city's iconic skyline, architecture, coastline
              and unforgettable atmosphere.
            </p>
          </div>

          {/* ===================================================== */}
          {/* MAIN CAROUSEL                                         */}
          {/* ===================================================== */}

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <div className="relative h-[430px] sm:h-[550px] lg:h-[650px]">
              {places.map((place, index) => (
                <div
                  key={place.name}
                  className={`absolute inset-0 transition-all duration-1000 ease-out ${
                    index === activeIndex
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-[5000ms]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
                    <div className="max-w-3xl">
                      {/* Number */}
                      <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(places.length).padStart(2, "0")}
                      </div>

                      {/* Place title */}
                      <h3 className="text-3xl font-bold text-white sm:text-5xl">
                        {place.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                        {place.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Previous button */}
              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-2xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white/20"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-2xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white/20"
              >
                ›
              </button>
            </div>

            {/* Carousel dots */}
            <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
              {places.map((place, index) => (
                <button
                  key={place.name}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${place.name}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ===================================================== */}
          {/* MINI PLACE CARDS                                      */}
          {/* ===================================================== */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {places.map((place, index) => (
              <button
                key={place.name}
                onClick={() => setActiveIndex(index)}
                className={`group overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                  index === activeIndex
                    ? "border-emerald-400/50 bg-white/10 shadow-lg shadow-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:-translate-y-1 hover:bg-white/10"
                }`}
              >
                <div className="h-28 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold text-white">
                    {place.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRAVEL & STAY                                            */}
      {/* ========================================================= */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Plan Your Visit
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              Travel & Stay
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Getting to Singapore */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">✈️</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Getting to Singapore
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Singapore is an internationally connected destination with
                excellent air connectivity.
              </p>
            </div>

            {/* Accommodation */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">🏨</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Accommodation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Recommended hotels and accommodation information will be added
                here.
              </p>
            </div>

            {/* Local Information */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">📍</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Local Information
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Detailed transportation, venue and attendee information will
                be announced soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA                                                 */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 px-6 py-24">
        {/* Decorative glow */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
            IEEE IEM - PESYS 2027
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
            See You in Singapore
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Join researchers, academics, professionals and industry leaders
            for an international conference focused on the future of energy
            systems and power engineering.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-emerald-700 shadow-xl">
            21st - 23rd June, 2027
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER                                                     */}
      {/* ========================================================= */}

      <Footer />

      {/* ========================================================= */}
      {/* VENUE PAGE MICRO ANIMATION                                */}
      {/* ========================================================= */}

      <style jsx>{`
        video {
          animation: cinematicZoom 18s ease-in-out infinite alternate;
        }

        @keyframes cinematicZoom {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(1.045);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          video {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}