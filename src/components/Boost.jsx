import mobile from "../assets/bg-boost-mobile.svg"
import desktop from "../assets/bg-boost-desktop.svg"

export default function Boost() {
  return (
    <>
      <section className="boost bg-shorty h-72 relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="" className="h-72 w-full"/>
        </picture>

        <div className="flex items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
            Boost your links today
          </h2>
          <button className="btn-cta rounded-full">Get Started</button>
        </div>
      </section>
    </>
  )
}