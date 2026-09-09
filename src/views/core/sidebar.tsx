import Link from "next/link";

interface SidebarProps {
  isAuthenticated: boolean;
}

export default function Sidebar({ isAuthenticated }: SidebarProps) {
    if (!isAuthenticated) {
        return null;
    }

  return (
    <aside className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        InvenNexus IMS
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</Link>
        <Link href="/inventory" className="block px-4 py-2 rounded hover:bg-gray-700">Inventory Ledger</Link>
        <Link href="/locations" className="block px-4 py-2 rounded hover:bg-gray-700">Locations</Link>
      </nav>
    </aside>
  );
}
