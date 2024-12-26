"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

interface UserProfile {
  name: string;
  email: string;
  department: string;
  position: string;
  phone: string;
  image: string;
  role: string;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "ดร.สมชาย ใจดี",
    email: "somchai@university.ac.th",
    department: "ภาควิชาวิทยาการคอมพิวเตอร์",
    position: "อาจารย์",
    phone: "02-XXX-XXXX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    role: "อาจารย์"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // TODO: API call to update profile
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Profile Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative h-20 w-20">
                  <Image
                    src={profile.image}
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-gray-600">{profile.role}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isEditing 
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-[#030041] hover:bg-[#040158] text-white'
                }`}
              >
                {isEditing ? 'บันทึก' : 'แก้ไขข้อมูล'}
              </button>
            </div>

            {/* Profile Form */}
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="ชื่อ-นามสกุล"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">อีเมล</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="อีเมล"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">หน่วยงาน</label>
                    <input
                      type="text"
                      value={profile.department}
                      onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="หน่วยงาน"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">ตำแหน่ง</label>
                    <input
                      type="text"
                      value={profile.position}
                      onChange={(e) => setProfile({ ...profile, position: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="ตำแหน่ง"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="เบอร์โทรศัพท์"
                    />
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">อีเมล</h3>
                  <p className="text-gray-900">{profile.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">หน่วยงาน</h3>
                  <p className="text-gray-900">{profile.department}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">ตำแหน่ง</h3>
                  <p className="text-gray-900">{profile.position}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">เบอร์โทรศัพท์</h3>
                  <p className="text-gray-900">{profile.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 