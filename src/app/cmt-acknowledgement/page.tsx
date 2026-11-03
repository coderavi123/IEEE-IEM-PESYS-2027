
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CMTAcknowledgementPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />

        <section className="relative mx-auto w-full max-w-6xl text-center">
          <h1 className="animate-soft-fade-up text-3xl font-black tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl">
            CMT Acknowledgement
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-emerald-600" />

          <p className="animate-soft-fade-up animate-delay-1 mt-8 text-base font-medium leading-8 text-slate-700 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
