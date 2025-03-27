import Image from "next/image";

export default function Services() {
  const services = [
    { icon: "/airlines.svg", title: "Airlines", count: 59 },
    { icon: "/airport-services.svg", title: "Airport Services", count: 16 },
    {
      icon: "/currency-exchange.svg",
      title: "Banks & Currency Exchange",
      count: 10,
    },
    { icon: "/car-rental.svg", title: "Car Rental Services", count: 15 },
    { icon: "/food-beverages.svg", title: "Food & Beverages", count: 49 },
    { icon: "/lounges.svg", title: "Lounges", count: 11 },
    { icon: "/baggage.svg", title: "Baggage Services", count: 8 },
    { icon: "/medical.svg", title: "Medical Services", count: 5 },
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
          <h1 className="text-lg font-medium">Get a travel Cellular Plan</h1>
        </div>
        <button className="flex gap-2 absolute top-9 right-3 bg-yellow-300 pl-3 pr-5 py-2 rounded-lg">
          <span className="relative text-black text-xs font-medium">
            Click Here
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide  absolute  bottom-1 h-5 w-5 right-0 z-50 lucide-mouse-pointer-click-icon lucide-mouse-pointer-click"
          >
            <path d="M14 4.1 12 6" />
            <path d="m5.1 8-2.9-.8" />
            <path d="m6 12-1.9 2" />
            <path d="M7.2 2.2 8 5.1" />
            <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
          </svg>
        </button>
      </a>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-6 py-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-gray-50 p-4 rounded-xl shadow-md"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={48}
              height={48}
              className="mb-2"
            />
            <div className="flex items-center justify-center flex-col gap-1">
              <h2 className="text-sm font-medium text-gray-800 text-center ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-sm text-gray-600">Flights</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M9 21V3m6 18V3"
              />
            </svg>
            <span className="text-sm text-gray-600">Parking</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-cyan-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5v14"
              />
            </svg>
            <span className="text-sm text-cyan-500">Services</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.5 16.5a3.5 3.5 0 017 0m-7-3a7 7 0 0114 0m-14-3a10.5 10.5 0 0121 0M12 20h.01"
              />
            </svg>
            <span className="text-sm text-gray-600">Free Wi-Fi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
