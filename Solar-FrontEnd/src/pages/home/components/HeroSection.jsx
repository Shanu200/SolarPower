import { Sailboat, Shield, Triangle, Wind } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <nav className="flex-wrap flex items-center justify-between px-10">
        <div className="flex flex-col items-center sm:flex-row sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 sm:h-10 sm:w-10 ">
            <Wind className="h-5 w-5 text-black sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-gray-900 sm:text-left sm:teext-sm">
            Solar Energy
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 sm:h-10 sm:w-10 ">
            <Sailboat className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-gray-900 sm:text-left sm:teext-sm">
            Home Dashboard
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 sm:h-10 sm:w-10 ">
            <Triangle className="h-5 w-5 text-black sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-gray-900 sm:text-left sm:teext-sm">
            Real-Time Monitoring
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 sm:h-10 sm:w-10 ">
            <Shield className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </div>
          <span className="text-center text-xs font-medium text-gray-900 sm:text-left sm:teext-sm">
            Anomoly Detection
          </span>
        </div>
      </nav>
      <main className="px-4 py-4 md:px-6 md:py-16">
        <div>
          <div className="mb-12 md:mb-24">
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-5xl sm:leading-20 md:text-7xl md:leading-32 xl:text-8xl">
            <div>Monitor Your Home's</div>
            <div className="flex flex-row items-center gap-4 sm:gap-8">
              <span>Solar Energy</span>
              {/*<div className="relative">
                <img
                src={imgWindTurbine}
                alt="Solar panels on a house roof"
                className="max-h-8 rounded-xl object-cover sm:max-h-16 md:max-h-20 md:rounded-2xl"
              />
              </div>*/}
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <span>with real-Time</span>
            </div>
            <div className="flex flex-row items-center gap-4 sm:gap-8">
              <span>Insight & Alerts</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <Triangle className="h-5 w-5 fill-current text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
            </div>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
