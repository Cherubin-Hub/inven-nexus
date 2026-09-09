interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: HeaderProps) {
    if (!isAuthenticated) {
        return null;
    }

  return (
    <header className="w-full bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-700">Enterprise Warehouse Control</h1>
      
      {isAuthenticated && (
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Warehouse Staff</span>
          <button className="text-sm text-red-600 hover:text-red-800 font-medium">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
