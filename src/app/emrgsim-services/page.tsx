import Image from "next/image";
import {
  BaggageClaim,
  Beer,
  Car,
  HandCoins,
  TicketsPlane,
  Plane,
  Wifi,
  Grid2x2,
  CircleParking,
  Ambulance,
  Armchair,
  MousePointerClick,
} from "lucide-react";
export default function Services() {
  const services = [
    { icon: Plane, title: "Airlines", count: 59 },
    { icon: TicketsPlane, title: "Airport Services", count: 16 },
    { icon: HandCoins, title: "Currency Exchange", count: 10 },
    { icon: Car, title: "Car Rental Services", count: 15 },
    { icon: Beer, title: "Food & Beverages", count: 49 },
    { icon: Armchair, title: "Lounges", count: 11 },
    { icon: BaggageClaim, title: "Baggage Services", count: 8 },
    { icon: Ambulance, title: "Medical Services", count: 5 },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen overflow-auto p-6">
      {/* Header */}
      <a
        href="https://emrgsim.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center flex items-center   justify-between gap-3 mb-6 fixed top-0 left-0 right-0 bg-[#00539b] text-white shadow-md shadow-[#00539b] py-8 px-4 cursor-pointer hover:bg-[#003f7a] transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="Logo" width={35} height={35} />
          <h1 className="text-lg font-bold">Get a local Cellular Plan</h1>
        </div>
        <button className="flex gap-2 absolute top-9 right-3 bg-yellow-300 pl-3 pr-5 py-2 rounded-lg">
          <span className="relative text-black text-xs font-medium">
            Click Here
          </span>
          <MousePointerClick
            className=" absolute bottom-1 h-5 w-5 right-0 z-50 "
            stroke="black"
          />
        </button>
      </a>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-6 py-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-gray-50 px-4 py-8 rounded-xl shadow-md"
          >
            <div className="h-12 w-12 flex items-center justify-center text-cyan-600 mb-2">
              <service.icon className="w-8 h-8" />
            </div>
            <div className="flex items-center justify-center flex-col gap-1">
              <h2 className="text-sm  text-gray-800 text-center ">
                {service.title}
              </h2>
              <p className="text-xs text-gray-600">
                Services Available {service.count}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-around py-4">
          <div className="flex flex-col items-center">
            <Plane className="text-gray-600" />

            <span className="text-sm text-gray-600">Flights</span>
          </div>
          <div className="flex flex-col items-center">
            <CircleParking className="text-gray-600" />

            <span className="text-sm text-gray-600">Parking</span>
          </div>
          <div className="flex flex-col items-center">
            <Grid2x2 className="text-cyan-600" />

            <span className="text-sm text-cyan-500">Services</span>
          </div>
          <div className="flex flex-col items-center">
            <Wifi className="text-gray-600" />

            <span className="text-sm text-gray-600">Free Wi-Fi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
