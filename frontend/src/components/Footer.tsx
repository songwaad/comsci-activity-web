import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Left Column - About & Contact */}
          <div className="space-y-8">
            {/* About */}
            <div>
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-auto h-8"
                />
              </Link>
              <p className="text-gray-600 text-sm">
                ศูนย์กลางการเรียนรู้และพัฒนาทักษะด้านเทคโนโลยี เพื่อการพัฒนาที่ยั่งยืน
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">ติดต่อเรา</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 text-sm">
                  <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 ถนนตัวอย่าง เขตตัวอย่าง กรุงเทพฯ 10xxx
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@example.com
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02-xxx-xxxx
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">เมนูลัด</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/calendar" className="text-gray-600 hover:text-[#030041] text-sm">
                    ปฏิทินกิจกรรม
                  </Link>
                </li>
                <li>
                  <Link href="/notifications" className="text-gray-600 hover:text-[#030041] text-sm">
                    การแจ้งเตือน
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#030041] text-sm">
                    เกี่ยวกับเรา
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">ช่วยเหลือ</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#030041] text-sm">
                    คำถามที่พบบ่อย
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#030041] text-sm">
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-600 hover:text-[#030041] text-sm">
                    แจ้งปัญหาการใช้งาน
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-[#030041] text-sm">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#030041] text-sm">
                ข้อกำหนดการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 