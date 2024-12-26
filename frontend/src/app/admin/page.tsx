import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">แดชบอร์ด</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'กิจกรรมทั้งหมด', value: '24', change: '+2 จากเดือนที่แล้ว', trend: 'up' },
          { label: 'ผู้ใช้งานทั้งหมด', value: '573', change: '+23 จากเดือนที่แล้ว', trend: 'up' },
          { label: 'กิจกรรมที่กำลังดำเนินการ', value: '8', change: 'เท่ากับเดือนที่แล้ว', trend: 'neutral' },
          { label: 'อัตราการเข้าร่วม', value: '67%', change: '-2% จากเดือนที่แล้ว', trend: 'down' },
        ].map((stat, index) => (
          <Card key={index} className="p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className={`ml-2 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' :
                stat.trend === 'down' ? 'text-red-600' :
                'text-gray-500'
              }`}>
                {stat.change}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">กิจกรรมล่าสุด</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            { title: 'AI Workshop', status: 'กำลังดำเนินการ', date: '15 มี.ค. 2567', participants: 45 },
            { title: 'Web Development', status: 'กำลังรับสมัคร', date: '20 มี.ค. 2567', participants: 32 },
            { title: 'Data Science', status: 'เสร็จสิ้น', date: '10 มี.ค. 2567', participants: 58 },
          ].map((activity, index) => (
            <div key={index} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{activity.participants} คน</p>
                  <p className="text-sm text-gray-500">{activity.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 