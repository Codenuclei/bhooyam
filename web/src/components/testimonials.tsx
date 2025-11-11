"use client";

import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dr. Meera Rao",
    title: "Hydroponics Researcher",
    text: "Bhooyam's system turned our lab trials into predictable yields — the AI catches subtle patterns we used to miss.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY0uZCm61oSKTOGU1Z4T8cEKKzJRLwFD7yJN6l5tFu5oCbh_VFDZkxu2i9IPsIRghQ0w8NHLXnFOJJSvFUXsIyuh8ns8rkxL509cigmn8uB4jORPRH-jxBh9eITKFjL9u0RoXE7NTUFvzKIMiXnV8LZNuXQVbAL0DRclU_F0oZi1jykvqsVtyr59rbpzTuM0byrADURavggEO5C2QgoUgCwcqwu2NBZpQWB9naYuH4gD1KXg4F7MqAXQ7NmwQH-unlQVA-b9I4RIo",
  },
  {
    name: "Ravi K.",
    title: "Urban Farmer",
    text: "My balcony produces twice as much and tastes better — and I never touch the dosing anymore.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEdDpf2kMc96OExa81cE4kff-q6I6nZL4DwHkzdTAAhsU124aEhEmH-UKYQTvYfkACJFA9g28gBSicz0RG4hjKwLcIubZQWTDV_Q0ieqKESwo0swB8uJDtcH5RlAw-QU7DFdiMv1tPqdoelZvy1M6QAvMAHUeb2A3XnhHWqQAFgLhzs6Sv_x4Pwj2U5abch2RwJCOGGFXyWt-qdULZyxnTjx2UreaVmnGxmiIBsS1uBFxZgKAkLEHFzHYvSLHbro9Ar1kQ0elRafk",
  },
  {
    name: "GreenCity Labs",
    title: "Institutional Pilot",
    text: "Deployment was smooth and monitoring via app keeps our team in sync. The anomaly alerts saved a crop already.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcwriTHwnwMDt5xz9xyKRRuAkFC5gcuneXID_ex698WkUuZrr7i96lxVXNCFwKR1v8lx5tteyT3HmJQx0IUxNUrF8UzlLqANbQmnBhRCdPIcYoMAQhBGhkCS19I2GI3YtKTn6pQDInxpOyBYqAqm8rxUtVjvlQJ3BAbobCmJHSZYJZKwG0pcqUKTLPp54yigtfjF060dvcI7qA8Bru8iEOO4I1gQxeMw-H7y1AMxsw9X0faoYXZIYPMD9_-8YskGIrVS9fjkYgOWA",
  },
];

export default function Testimonials() {
  return (
    <div className="flex w-full flex-1 justify-center py-16 sm:py-20 md:py-24">
      <div className="flex flex-col max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-[#1A1A1A]  text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 ">
            Hear from our happy clients and discover why they love working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-white/85 backdrop-blur-3xl  shadow-sm ring-1 ring-gray-900/5  hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <div className="text-primary">
                    <Quote className="w-12 text-[#5acf00] h-12 text-primary" />
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-base text-gray-700 ">
                      "{testimonial.text}"
                    </p>
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div
                    className="w-12 h-12 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{
                      backgroundImage: `url("${testimonial.avatar}")`,
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A] ">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 ">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
