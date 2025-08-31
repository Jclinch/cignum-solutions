// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-[var(--color-muted)] py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cignum Solutions. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="/legal/privacy" className="hover:text-[var(--color-primary)]">Privacy</a>
          <a href="/legal/terms-of-service" className="hover:text-[var(--color-primary)]">Terms</a>
          <a href="/contact" className="hover:text-[var(--color-primary)]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
