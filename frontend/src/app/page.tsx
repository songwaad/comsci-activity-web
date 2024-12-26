"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import EventCard from "@/components/EventCard";

export default function Home() {
  const bannerSlides = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      title: "งานสัมมนาเทคโนโลยีล่าสุด 2024",
      location: "หอประชุมมหาวิทยาลัย",
      datetime: "วันที่ 15 มีนาคม 2567 เวลา 09:00-16:00 น.",
      speaker: "ดร.สมชาย ใจดี"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop",
      title: "การอบรมเชิงปฏิบัติการ: AI for Everyone",
      location: "ห้องประชุม IT Center",
      datetime: "วันที่ 20 มีนาคม 2567 เว���า 13:00-16:00 น.",
      speaker: "ศ.ดร.วิชัย เทคโนโลยี"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      title: "สัมมนาการพัฒนาเว็บแอปพลิเคชันสมัยใหม่",
      location: "หอประชุมใหญ่",
      datetime: "วันที่ 25 มีนาคม 2567 เวลา 09:00-16:00 น.",
      speaker: "ดร.สมศักดิ์ เว็บเทค"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
      title: "Workshop: Data Science in Practice",
      location: "ห้องปฏิบัติการคอมพิวเตอร์",
      datetime: "วันที่ 30 มีนาคม 2567 เวลา 13:00-17:00 น.",
      speaker: "รศ.ดร.วิเคราะห์ ข้อมูล"
    }
  ];

  const events = [
    {
      id: "1",
      title: "การอบรมเชิงปฏิบัติการ: AI for Everyone",
      datetime: "วันที่ 20 มีนาคม 2567 | 13:00-16:00 น.",
      location: "ห้องประช��ม IT Center",
      description: "เรียนรู้พื้นฐาน AI และการประยุกต์ใช้ในชีวิตประจำวัน",
      imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop",
      speaker: "ผศ.ดร.วิชัย เทคโนโลยี"
    },
    {
      id: "2",
      title: "สัมมนาการพัฒนาเว็บแอปพลิเคชันสมัยใหม่",
      datetime: "วันที่ 25 มีนาคม 2567 | 09:00-16:00 น.",
      location: "หอประชุมใหญ่",
      description: "เจาะลึกเทคโนโลยีการพัฒนาเว็บแอปพลิเคชันยุคใหม่",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      speaker: "ดร.สมศักดิ์ เว็บเทค"
    },
    {
      id: "3",
      title: "Workshop: Data Science in Practice",
      datetime: "วันที่ 30 มีนาคม 2567 | 13:00-17:00 น.",
      location: "ห้องปฏิบัติการคอมพิวเตอร์",
      description: "ฝึกปฏิบัติกา���วิเคราะห์ข้อมูลด้วยเครื่องมือทันสมัย",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      speaker: "รศ.ดร.วิเคราะห์ ข้อมูล"
    }
  ];

  return (
    <Layout>
      <div className="pt-8">
        <Banner bannerSlides={bannerSlides} />

        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-12">กิจกรรมล่าสุด</h2>
              <div className="space-y-12">
                {events.map((event, index) => (
                  <div key={index} className="bg-transparent">
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Sidebar */}
            <div className="hidden md:block">
              <div className="md:sticky md:top-24 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">ปฏิทินกิจกรรม</h2>
                <div className="space-y-4">
                  <Link 
                    href="/activities/1"
                    className="block border-l-4 border-[#030041] pl-4 hover:bg-gray-50 transition-colors rounded-r-md"
                  >
                    <div className="py-2">
                      <p className="font-semibold">15 มีนาคม 2567</p>
                      <p className="text-sm text-gray-600">09:00-16:00 น.</p>
                      <p className="text-sm">งานสัมมนาเทคโนโลยีล่าสุด 2024</p>
                    </div>
                  </Link>
                  <Link 
                    href="/activities/2"
                    className="block border-l-4 border-[#030041]/80 pl-4 hover:bg-gray-50 transition-colors rounded-r-md"
                  >
                    <div className="py-2">
                      <p className="font-semibold">20 มีนาคม 2567</p>
                      <p className="text-sm text-gray-600">13:00-16:00 น.</p>
                      <p className="text-sm">การอบรมเชิงปฏิบัติการ: AI for Everyone</p>
                    </div>
                  </Link>
                  <Link 
                    href="/activities/3"
                    className="block border-l-4 border-[#030041]/60 pl-4 hover:bg-gray-50 transition-colors rounded-r-md"
                  >
                    <div className="py-2">
                      <p className="font-semibold">25 มีนาคม 2567</p>
                      <p className="text-sm text-gray-600">09:00-16:00 น.</p>
                      <p className="text-sm">สัมมนาการพัฒนาเว็บแอปพลิเคชันสมัยใหม่</p>
                    </div>
                  </Link>
                  
                </div>
                
                <div className="mt-6 text-right">
                  <Link 
                    href="/calendar" 
                    className="text-sm text-[#030041] hover:text-[#040158] hover:underline inline-flex items-center"
                  >
                    ดูปฏิทินทั้งหมด
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
