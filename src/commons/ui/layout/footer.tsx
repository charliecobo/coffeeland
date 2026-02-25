export const Footer = () => {
  return (
    <footer>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-coffee-cream dark:border-primary/10 px-6 py-3 flex justify-between items-center">
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" } as React.CSSProperties}
          >
            home
          </span>
          <span className="text-[10px] font-bold">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-coffee-bean/40 dark:text-slate-400" href="#">
          <span className="material-symbols-outlined text-2xl">explore</span>
          <span className="text-[10px] font-medium">Explore</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-coffee-bean/40 dark:text-slate-400" href="#">
          <span className="material-symbols-outlined text-2xl">bookmark</span>
          <span className="text-[10px] font-medium">Saved</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-coffee-bean/40 dark:text-slate-400" href="#">
          <span className="material-symbols-outlined text-2xl">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </a>
      </nav>
    </footer>
  );
};
