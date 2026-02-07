import Button from '@/components/ui/Button'

export default function AdminHeader({ user, handleLogout }) {
  return (
    <header className="bg-white shadow-soft">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.email}</span>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
