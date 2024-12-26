"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "info" | "success" | "warning";
  isRead: boolean;
  link: string;
}

export default function Notifications() {
  const [notifications] = useState<Notification[]>([
    {
      id: "1",
      title: "AI Workshop เปิดรับสมัครแล้ว",
      message: "เปิดรับสมัครผู้เข้าร่วมอบรมเชิงปฏิบัติการ AI Workshop รุ่นที่ 1 แล้ววันนี้",
      time: "2 ชั่วโมงที่แล้ว",
      type: "info",
      isRead: false,
      link: "/activities/ai-workshop"
    },
    {
      id: "2",
      title: "ลงทะเบียนสำเร็จ",
      message: "คุณได้ลงทะเบียนเข้าร่วม Workshop: Data Science in Practice เรียบร้อยแล้ว",
      time: "1 วันที่แล้ว",
      type: "success",
      isRead: true,
      link: "/activities/data-science"
    },
    {
      id: "3",
      title: "เหลือเวลาอีก 2 วัน",
      message: "อย่าลืมลงทะเบียนเข้าร่วมสัมมนา Web Development ก่อนปิดรับสมัคร",
      time: "2 วันที่แล้ว",
      type: "warning",
      isRead: false,
      link: "/activities/web-dev"
    }
  ]);

  const getNotificationStyle = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return "bg-blue-50 border-blue-200";
      case "success":
        return "bg-green-50 border-green-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
    }
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return (
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case "success":
        return (
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">การแจ้งเตือน</h1>
          <p className="mt-2 text-gray-600">ติดตามข่าวสารและการแจ้งเตือนที่สำคัญ</p>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Link
              key={notification.id}
              href={notification.link}
              className="block group"
            >
              <div
                className={`relative rounded-xl border p-6 transition-all duration-200 
                  hover:shadow-md cursor-pointer 
                  ${getNotificationStyle(notification.type)}
                  group-hover:border-[#030041]/20`}
              >
                <div className="flex items-start space-x-4">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#030041] transition-colors">
                        {notification.title}
                      </h2>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="mt-1 text-gray-600">{notification.message}</p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="text-gray-400 group-hover:text-[#030041] transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {!notification.isRead && (
                  <div className="absolute top-6 right-6">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#030041] ring-2 ring-[#030041]/20" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">ไม่มีการแจ้งเตือน</h3>
            <p className="mt-1 text-sm text-gray-500">คุณจะได้รับการแจ้งเตือนเมื่อมีข่าวสารใหม่</p>
          </div>
        )}
      </div>
    </Layout>
  );
} 