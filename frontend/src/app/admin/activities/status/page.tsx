"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ActivityStatus = 'pending_head' | 'pending_university' | 'approved' | 'cancelled';

interface Activity {
  id: string;
  title: string;
  department: string;
  submittedBy: string;
  submittedDate: string;
  status: ActivityStatus;
  description: string;
}

export default function ActivityStatusManagement() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      title: "AI Workshop 2024",
      department: "ภาควิชาวิทยาการคอมพิวเตอร์",
      submittedBy: "ดร.สมชาย ใจดี",
      submittedDate: "10 มี.ค. 2567",
      status: "pending_head",
      description: "การอบรมเชิงปฏิบัติการด้าน AI สำหรับนักศึกษาและบุคลากร"
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      department: "ภาควิชาเทคโนโลยีสารสนเทศ",
      submittedBy: "ผศ.ดร.วิชัย เทคโนโลยี",
      submittedDate: "12 มี.ค. 2567",
      status: "pending_university",
      description: "หลักสูตรอบรมการพัฒนาเว็บแอปพลิเคชันแบบเข้มข้น"
    },
    {
      id: "3",
      title: "Data Science Seminar",
      department: "ภาควิชาวิทยาการคอมพิวเตอร์",
      submittedBy: "รศ.ดร.สมศรี วิจัย",
      submittedDate: "15 มี.ค. 2567",
      status: "approved",
      description: "สัมมนาวิชาการด้าน Data Science และการประยุกต์ใช้"
    }
  ]);

  const getStatusBadge = (status: ActivityStatus) => {
    switch (status) {
      case 'pending_head':
        return <Badge variant="warning">รอหัวหน้าภาคอนุมัติ</Badge>;
      case 'pending_university':
        return <Badge variant="secondary">รอมหาวิทยาลัยอนุมัติ</Badge>;
      case 'approved':
        return <Badge variant="success">อนุมัติแล้ว</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">ยกเลิก</Badge>;
    }
  };

  const updateStatus = (activityId: string, newStatus: ActivityStatus) => {
    setActivities(activities.map(activity => 
      activity.id === activityId 
        ? { ...activity, status: newStatus }
        : activity
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">จัดการสถานะกิจกรรม</h1>
        <div className="flex space-x-2">
          {/* Filter buttons if needed */}
        </div>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => (
          <Card key={activity.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">{activity.title}</h2>
                  {getStatusBadge(activity.status)}
                </div>
                <div className="text-sm text-gray-500">
                  <p>ภาควิชา: {activity.department}</p>
                  <p>ผู้ยื่น: {activity.submittedBy}</p>
                  <p>วันที่ยื่น: {activity.submittedDate}</p>
                </div>
                <p className="text-gray-700">{activity.description}</p>
              </div>

              <div className="flex flex-col space-y-2">
                <select
                  value={activity.status}
                  onChange={(e) => updateStatus(activity.id, e.target.value as ActivityStatus)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#030041] focus:border-[#030041]"
                >
                  <option value="pending_head">รอหัวหน้าภาคอนุมัติ</option>
                  <option value="pending_university">รอมหาวิทยาลัยอนุมัติ</option>
                  <option value="approved">อนุมัติแล้ว</option>
                  <option value="cancelled">ยกเลิก</option>
                </select>
                <button
                  onClick={() => {/* View details */}}
                  className="text-sm text-[#030041] hover:text-[#0b0058] font-medium"
                >
                  ดูรายละเอียด →
                </button>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">ประวัติการดำเนินการ</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">ยื่นเรื่อง</p>
                    <p className="text-gray-500">{activity.submittedDate}</p>
                  </div>
                </div>
                {/* Add more timeline items based on status history */}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 