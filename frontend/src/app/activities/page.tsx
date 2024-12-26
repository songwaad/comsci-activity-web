"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

export default function Activities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all"); // all, upcoming, completed

  const activities = [
    {
      id: "1",
      title: "การอบรมเชิงปฏิบัติการ: AI for Everyone",
      datetime: "วันที่ 20 มีนาคม 2567 | 13:00-16:00 น.",
      location: "ห้องประชุม IT Center",
      description: "เรียนรู้พื้นฐาน AI และการประยุกต์ใช้ในชีวิตประจำวัน",
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
      speaker: {
        name: "ผศ.ดร.วิชัย เทคโนโลยี",
        position: "ผู้ช่วยศาสตราจารย์",
        organization: "ภาควิชาวิทยาการคอมพิวเตอร์",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      status: "upcoming",
      participants: 42
    },
    {
      id: "2",
      title: "Web Development with Modern Technologies",
      datetime: "วันที่ 15 กุมภาพันธ์ 2567 | 09:00-16:00 น.",
      location: "ห้องปฏิบัติการคอมพิวเตอร์ 2",
      description: "เรียนรู้การพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีล่าสุด",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      speaker: {
        name: "อ.ดร.พัฒนา เว็บไซต์",
        position: "อาจารย์",
        organization: "ภาควิชาวิทยาการคอมพิวเตอร์",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
      },
      status: "completed",
      participants: 35
    }
  ];

  const filteredActivities = activities.filter(activity => {
    if (filter === "upcoming") return activity.status === "upcoming";
    if (filter === "completed") return activity.status === "completed";
    return true;
  }).filter(activity =>
    activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header & Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">กิจกรรมทั้งหมด</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ค้นหากิจกรรม..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#030041] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "all"
                    ? "bg-[#030041] text-white"
                    : "border border-[#030041] text-[#030041] hover:bg-gray-50"
                }`}
              >
                ทั้งหมด
              </button>
              <button
                onClick={() => setFilter("upcoming")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "upcoming"
                    ? "bg-[#030041] text-white"
                    : "border border-[#030041] text-[#030041] hover:bg-gray-50"
                }`}
              >
                กำลังจะมาถึง
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === "completed"
                    ? "bg-[#030041] text-white"
                    : "border border-[#030041] text-[#030041] hover:bg-gray-50"
                }`}
              >
                เสร็จสิ้นแล้ว
              </button>
            </div>
          </div>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <Link href={`/activities/${activity.id}`} key={activity.id}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant={activity.status === "upcoming" ? "warning" : "success"}>
                        {activity.status === "upcoming" ? "กำลังจะมาถึง" : "เสร็จสิ้นแล้ว"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={activity.speaker.image}
                        alt={activity.speaker.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{activity.speaker.name}</p>
                        <p className="text-sm text-gray-500">{activity.speaker.position}</p>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {activity.datetime}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {activity.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {activity.participants} ผู้เข้าร่วม
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">ไม่พบกิจกรรมที่ค้นหา</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 