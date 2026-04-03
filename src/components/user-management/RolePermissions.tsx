import { Shield, Check } from "lucide-react";

export default function RolePermissions() {
  const roles = [
    { 
      name: "Administrator",
      users: 3,
      permissions: ["Full Access", "User Management", "System Config"]
    },
    { 
      name: "Manager",
      users: 8,
      permissions: ["View All Data", "Generate Reports", "Edit Records"]
    },
    { 
      name: "Analyst",
      users: 15,
      permissions: ["View Data", "Generate Reports", "Export Data"]
    },
    { 
      name: "Viewer",
      users: 24,
      permissions: ["View Data", "Download Reports"]
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-800">Role Permissions</h2>
        <Shield className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {roles.map((role) => (
          <div key={role.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-800">{role.name}</h3>
              <span className="text-sm text-gray-600">{role.users} users</span>
            </div>
            <div className="space-y-2">
              {role.permissions.map((permission) => (
                <div key={permission} className="flex items-center space-x-2 text-sm text-gray-700">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>{permission}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
