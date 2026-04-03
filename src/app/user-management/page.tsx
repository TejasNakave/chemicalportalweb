import UserManagement from "@/components/user-management/UserManagement";
import RolePermissions from "@/components/user-management/RolePermissions";
import AccessLogs from "@/components/user-management/AccessLogs";

export default function UserManagementPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">User & Access Management</h1>
        <p className="text-gray-600 mt-2">Manage users, roles, and access permissions</p>
      </div>
      
      <UserManagement />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RolePermissions />
        <AccessLogs />
      </div>
    </div>
  );
}
