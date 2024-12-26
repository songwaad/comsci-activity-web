"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerSlide {
  id: string;
  image: string;
  title: string;
  location: string;
  datetime: string;
  speaker: string;
}

interface BannerProps {
  bannerSlides: BannerSlide[];
}

export default function Banner({ bannerSlides }: BannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) =>
        current === bannerSlides.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src={bannerSlides[currentSlide].image}
            alt={bannerSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030041]/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-2xl px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {bannerSlides[currentSlide].title}
            </h1>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{bannerSlides[currentSlide].datetime}</span>
              </div>
              
              <div className="flex items-center text-gray-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{bannerSlides[currentSlide].location}</span>
              </div>
              
              <div className="flex items-center text-gray-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{bannerSlides[currentSlide].speaker}</span>
              </div>
            </div>

            <Link
              href={`/activities/${bannerSlides[currentSlide].id}`}
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#030041] rounded-full hover:bg-[#040158] transition-colors duration-200"
            >
              ดูรายละเอียด
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-6 right-6 flex space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 