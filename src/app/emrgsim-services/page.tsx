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
        className="text-center flex items-center justify-center gap-3 mb-6 fixed top-0 left-0 right-0 bg-white shadow-md p-4 cursor-pointer"
      >
        <h1 className="text-2xl font-bold text-gray-600">
          Get a travel Cellular Plan
        </h1>
        <Image src="/assets/logo.png" alt="Logo" width={25} height={25} />
      </a>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-6 mt-16">
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
