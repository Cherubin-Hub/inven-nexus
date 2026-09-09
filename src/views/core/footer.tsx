interface FooterProps {
  isAuthenticated: boolean;
}

export default function Footer({ isAuthenticated }: FooterProps) {
    if (!isAuthenticated) {
        return null;
    }
    
  return (
    <footer className="w-full bg-gray-100 p-4 text-center text-xs text-gray-500 border-t mt-auto">
      &copy; {new Date().getFullYear()} InvenNexus Enterprise. Strict Concurrency Enforced.
    </footer>
  );
}
