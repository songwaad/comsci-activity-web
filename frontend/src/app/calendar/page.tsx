"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

interface CalendarEvent {
  id: string;
  title: string;
  datetime: string;
  location: string;
  description: string;
  imageUrl: string;
  speaker: string;
  type: "workshop" | "seminar" | "conference";
}

export default function Calendar() {
  const [events] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "AI Workshop: Machine Learning Fundamentals",
      datetime: "20 มีนาคม 2567 | 13:00-16:00 น.",
      location: "ห้องประชุม IT Center",
      description: "เรียนรู้พื้นฐาน AI และการประยุกต์ใช้ในชีวิตประจำวัน",
      imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
      speaker: "ผศ.ดร.วิชัย เทคโนโลยี",
      type: "workshop"
    },
    // ... events อื่นๆ
  ]);

  const getEventTypeStyle = (type: CalendarEvent["type"]) => {
    switch (type) {
      case "workshop":
        return "border-blue-500 bg-blue-50 text-blue-700";
      case "seminar":
        return "border-green-500 bg-green-50 text-green-700";
      case "conference":
        return "border-purple-500 bg-purple-50 text-purple-700";
    }
  };

  return (
    <Layout>
      <div className="pt-8">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#030041] to-[#0b0058] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-white mb-4">ปฏิทินกิจกรรม</h1>
              <p className="text-lg text-gray-200 max-w-3xl">
                ติดตามกิจกรรมและการอบรมต่างๆ ที่น่าสนใจได้ที่นี่
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        {/* Filter Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">ประเภท:</span>
              <div className="flex space-x-2">
                <span className="px-3 py-1 rounded-full text-sm border border-blue-200 bg-blue-50 text-blue-700">
                  Workshop
                </span>
                <span className="px-3 py-1 rounded-full text-sm border border-green-200 bg-green-50 text-green-700">
                  Seminar
                </span>
                <span className="px-3 py-1 rounded-full text-sm border border-purple-200 bg-purple-50 text-purple-700">
                  Conference
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8">
            {events.map((event) => (
              <Link 
                key={event.id}
                href={`/activities/${event.id}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-12 gap-6">
                    {/* Date Display */}
                    <div className="col-span-2 md:col-span-1 bg-[#030041] text-white p-4 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-bold">
                        {event.datetime.split(" ")[0]}
                      </span>
                      <span className="text-sm">
                        {event.datetime.split(" ")[1]}
                      </span>
                      <span className="text-sm">
                        {event.datetime.split(" ")[2]}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="col-span-10 md:col-span-11 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getEventTypeStyle(event.type)}`}>
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-600">
                          {event.datetime.split("|")[1].trim()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#030041] transition-colors mb-2">
                        {event.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {event.speaker}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 