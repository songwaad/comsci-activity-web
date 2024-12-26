"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "AI Workshop",
      message: "เปิดรับสมัครแล้ววันนี้!",
      time: "2 ชั่วโมงที่แล้ว",
      isRead: false
    },
    {
      id: "2",
      title: "Web Development",
      message: "เหลือเวลาลงทะเบียนอีก 2 วัน",
      time: "5 ชั่วโมงที่แล้ว",
      isRead: false
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleNotificationClick = (notificationId: string) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === notificationId
        ? { ...notification, isRead: true }
        : notification
    );
    setNotifications(updatedNotifications);
  };

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      const updatedNotifications = notifications.map(notification => ({
        ...notification,
        isRead: true
      }));
      setNotifications(updatedNotifications);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="bg-gradient-to-r from-white via-white/95 to-white/90">
        <div className="max-w-7xl mx-auto px-3">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo/ComSci6.png"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="w-auto h-12"
                    priority
                  />
                </Link>
              </div>

              <nav className="hidden lg:flex lg:items-center space-x-2">
                {[
                  ['หน้าแรก', '/'],
                  ['ปฏิทินกิจกรรม', '/calendar'],
                  ['เกี่ยวกับเรา', '/about'],
                ].map(([title, url]) => (
                  <Link
                    key={url}
                    href={url}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                      ${isActive(url) 
                        ? 'text-[#030041] bg-[#030041]/5 font-semibold' 
                        : 'text-gray-600 hover:text-[#030041] hover:bg-[#030041]/5'
                      }`}
                  >
                    {title}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={handleBellClick}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
                >
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs font-medium rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <div 
                    className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                    style={{
                      top: 'calc(100% + 0.5rem)',
                      right: '-8rem',
                      maxHeight: '80vh',
                      zIndex: 50,
                    }}
                  >
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">การแจ้งเตือน</h3>
                        <button
                          onClick={() => setShowNotifications(false)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh - 4rem)' }}>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleNotificationClick(notification.id)}
                        >
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">{notification.title}</p>
                              <p className="text-sm text-gray-500">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                            {!notification.isRead && (
                              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-200 text-center">
                      <Link 
                        href="/notifications" 
                        className="text-sm text-[#030041] hover:underline"
                        onClick={() => setShowNotifications(false)}
                      >
                        ดูการแจ้งเตือนทั้งหมด
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/login"
                className="flex items-center justify-center gap-x-1 rounded-md bg-gradient-to-r from-[#030041] to-[#0b0058] px-6 py-2.5 text-center text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
              >
                <span>เข้าสู่ระบบ</span>
              </Link>

              <button
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden border-t border-gray-200`}
      >
        <nav className="py-4">
          <div className="flex flex-col space-y-2">
            {[
              ['หน้าแรก', '/'],
              ['ปฏิทินกิจกรรม', '/calendar'],
              ['เกี่ยวกับเรา', '/about'],
            ].map(([title, url]) => (
              <Link
                key={url}
                href={url}
                className={`px-4 py-2 ${
                  isActive(url)
                    ? 'text-[#030041] font-semibold bg-gray-50'
                    : 'text-gray-600 hover:text-[#030041] hover:bg-gray-50'
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}