import Image from "next/image";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop"
            alt="University Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030041]/95 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  เกี่ยวกับเรา
                </h1>
                <p className="text-xl text-gray-100 leading-relaxed">
                  ศูนย์กลางการเรียนรู้และพัฒนาทักษะด้านเทคโนโลยี มุ่งมั่นสร้างบุคลากรคุณภาพสู่อนาคต
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 -mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "1,000+", label: "ผู้เข้าร่วมกิจกรรม" },
              { number: "50+", label: "หลักสูตรอบรม" },
              { number: "20+", label: "พันธมิตรองค์กร" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#030041] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Vision Section */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#030041] mb-6">วิสัยทัศน์</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                มุ่งมั่นที่จะเป็นศูนย์กลางในการพัฒนาทักษะด้านเทคโนโลยีสารสนเทศ
                และสร้างโอกาสการเรียนรู้ให้กับนักศึกษาและบุคลากรทุกคน เพื่อการพัฒนาที่ยั่งยืน
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-[#030041] mb-6">พันธกิจ</h2>
              <ul className="space-y-4">
                {[
                  "พัฒนาหลักสูตรที่ตอบโจทย์ความต้องการของตลาด",
                  "สร้างสภาพแวดล้อมการเรียนรู้ที่ทันสมัย",
                  "ส่งเสริมการวิจัยและพัฒนานวัตกรรม",
                  "สร้างเครือข่ายความร่วมมือกับภาคอุตสาหกรรม"
                ].map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#030041]/10 flex items-center justify-center mr-4 mt-0.5">
                      <svg className="h-4 w-4 text-[#030041]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-[#030041] to-[#0b0058] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">ติดต่อเรา</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ที่อยู่</h3>
                    <p className="text-gray-200">123 ถนนตัวอย่าง เขตตัวอย่าง กรุงเทพฯ 10xxx</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">อีเมล</h3>
                    <p className="text-gray-200">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">โทรศัพท์</h3>
                    <p className="text-gray-200">02-xxx-xxxx</p>
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