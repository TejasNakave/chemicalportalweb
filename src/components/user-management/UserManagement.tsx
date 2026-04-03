import { Users, UserPlus, Search } from "lucide-react";

export default function UserManagement() {
  const users = [
    { 
      name: "John Smith",
      email: "john.smith@company.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2 hours ago"
    },
    { 
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Analyst",
      status: "Active",
      lastLogin: "5 hours ago"
    },
    { 
      name: "Michael Chen",
      email: "m.chen@company.com",
      role: "Manager",
      status: "Active",
      lastLogin: "1 day ago"
    },
    { 
      name: "Emma Williams",
      email: "emma.w@company.com",
      role: "Viewer",
      status: "Inactive",
      lastLogin: "5 days ago"
    },
  ];

  const roleColors = {
    Administrator: "bg-red-100 text-red-700",
    Manager: "bg-blue-100 text-blue-700",
    Analyst: "bg-purple-100 text-purple-700",
    Viewer: "bg-gray-100 text-gray-700"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">User Management</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <UserPlus className="h-5 w-5" />
          <span>Add User</span>
        </button>
      </div>
      
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.email} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleColors[user.role as keyof typeof roleColors]}`}>
                {user.role}
              </span>
              <div className="text-right">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {user.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">{user.lastLogin}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
