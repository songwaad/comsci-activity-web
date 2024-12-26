"use client";

import { useState } from 'react';
import Image from "next/image";
import Layout from "@/components/Layout";

interface Coordinator {
  name: string;
  role: string;
  image: string;
  department: string;
  email: string;
}

interface ActivityDetail {
  id: string;
  title: string;
  coverImage: string;
  speaker: {
    name: string;
    image: string;
    position: string;
    organization: string;
  };
  duration: string;
  location: string;
  academicYear: string;
  status: "upcoming" | "ongoing" | "completed";
  description: string;
  workplan: string;
  rationale: string;
  universityStrategy: string[];
  objectives: string[];
  methodology: string[];
  budget: {
    total: number;
    breakdown: {
      category: string;
      amount: number;
    }[];
  };
  evaluation: string[];
  outcomes: string[];
  coordinators: Coordinator[];
}

const tabs = [
  { id: "details", label: "รายละเอียด" },
  { id: "workplan", label: "แผนงาน" },
  { id: "rationale", label: "หลักการและเหตุผล" },
  { id: "strategy", label: "ความเชื่อมโยงยุทธศาสตร์" },
  { id: "objectives", label: "วัตถุประสงค์" },
  { id: "methodology", label: "วิธีดำเนินการ" },
  { id: "budget", label: "งบประมาณ" },
  { id: "evaluation", label: "การติดตามและประเมินผล" },
  { id: "outcomes", label: "ผลลัพธ์ของโครงการ" },
];

export default function ActivityDetail() {
  const [activeTab, setActiveTab] = useState("details");
  const [activity] = useState<ActivityDetail>({
    id: "1",
    title: "การอบรมเชิงปฏิบัติการ: AI for Everyone",
    coverImage: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
    speaker: {
      name: "ดร.สมชาย ใจดี",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      position: "ผู้เชี่ยวชาญด้าน AI",
      organization: "คณะวิทยาการคอมพิวเตอร์"
    },
    duration: "3 ชั่วโมง",
    location: "ห้องประชุม IT Center",
    academicYear: "2567",
    status: "upcoming",
    description: "เรียนรู้พื้นฐานปัญญาประดิษฐ์และการประยุกต์ใช้ในชีวิตประจำวัน เหมาะสำหรับผู้เริ่มต้นที่สนใจด้าน AI",
    workplan: "แผนการดำเนินงานโครงการ...",
    rationale: "เนื่องด้วยปัจจุบันเทคโนโลยี AI มีบทบาทสำคัญ...",
    universityStrategy: [
      "ยุทธศาสตร์ที่ 1: การพัฒนาการศึกษาเพื่ออนาคต",
      "ยุทธศาสตร์ที่ 2: การสร้างนวัตกรรมและองค์ความรู้"
    ],
    objectives: [
      "เพื่อให้ผู้เข้าร่วมเข้าใจพื้นฐาน AI",
      "เพื่อสร้างแรงบันดาลใจในการประยุกต์ใช้ AI"
    ],
    methodology: [
      "การบรรยายเชิงทฤษฎี",
      "การฝึกปฏิบัติ Workshop",
      "การแลกเปลี่ยนประสบการณ์"
    ],
    budget: {
      total: 50000,
      breakdown: [
        { category: "ค่าวิทยากร", amount: 20000 },
        { category: "ค่าอาหารและเครื่องดื่ม", amount: 15000 },
        { category: "ค่าเอกสารและอุปกรณ์", amount: 15000 }
      ]
    },
    evaluation: [
      "แบบประเมินความพึงพอใจ",
      "การทดสอบความรู้ก่อน-หลัง",
      "การติดตามผลหลังการอบรม"
    ],
    outcomes: [
      "ผู้เข้าร่วมมีความรู้พื้นฐานด้าน AI",
      "เกิดเครือข่ายความร่วมมือ",
      "ได้แนวทางการประยุกต์ใช้ AI"
    ],
    coordinators: [
      {
        name: "ดร.วิชัย เทคโนโลยี",
        role: "หัวหน้าโครงการ",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
        department: "ภาควิชาวิทยาการคอมพิวเตอร์",
        email: "wichai@university.ac.th"
      },
      {
        name: "อ.สมศรี นวัตกรรม",
        role: "ผู้ประสานาน",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        department: "ภาควิชาเทคโนโลยีสารสนเทศ",
        email: "somsri@university.ac.th"
      }
    ]
  });

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="space-y-6">
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src={activity.coverImage}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={activity.speaker.image}
                  alt={activity.speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{activity.speaker.name}</h3>
                <p className="text-sm text-gray-600">{activity.speaker.position}</p>
                <p className="text-sm text-gray-600">{activity.speaker.organization}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">ระยะเวลา</p>
                <p className="font-medium">{activity.duration}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">สถานที่</p>
                <p className="font-medium">{activity.location}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">ปีการศึกษา</p>
                <p className="font-medium">{activity.academicYear}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">สถานะ</p>
                <p className="font-medium capitalize">{activity.status}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">รายละเอียดโครงการ</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          </div>
        );
      
      case "workplan":
        return (
          <div className="prose max-w-none">
            <p>{activity.workplan}</p>
          </div>
        );
      
      case "rationale":
        return (
          <div className="prose max-w-none">
            <p>{activity.rationale}</p>
          </div>
        );
      
      case "strategy":
        return (
          <div className="space-y-4">
            {activity.universityStrategy.map((strategy, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p>{strategy}</p>
              </div>
            ))}
          </div>
        );
      
      // ... เพิ่ม cases อื่นๆ ตามความต้องการ

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:hidden col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h1 className="text-2xl font-bold mb-4">{activity.title}</h1>
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#030041] focus:border-[#030041]"
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <div className="h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-[#030041] text-white p-6 rounded-xl shadow-lg">
                  <h1 className="text-xl font-bold leading-tight">{activity.title}</h1>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80">สถานะ: <span className="font-medium">{activity.status}</span></p>
                    <p className="text-sm text-white/80 mt-1">ปีการศึกษา: {activity.academicYear}</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-6 py-3 transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#030041] text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      } ${index !== 0 ? "border-t border-gray-100" : ""}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h2>
              </div>
              <div className="p-6">
                {renderContent()}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">ผู้รับผิดชอบโครงการ</h2>
                <div className="space-y-6">
                  {activity.coordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={coordinator.image}
                          alt={coordinator.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{coordinator.name}</h3>
                        <p className="text-sm text-gray-600">{coordinator.role}</p>
                        <p className="text-sm text-gray-600">{coordinator.department}</p>
                        <a href={`mailto:${coordinator.email}`} className="text-sm text-[#030041] hover:underline">
                          {coordinator.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">ข้อมูลเพิ่มเติม</h2>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 