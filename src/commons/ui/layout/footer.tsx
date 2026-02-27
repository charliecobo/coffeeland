import { NavLink } from 'react-router';
import { clsx } from '../../core/utils';

export const Footer = () => {
  return (
    <footer>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-coffee-cream dark:border-primary/10 px-6 py-3 flex justify-between items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx('flex flex-col items-center gap-1', {
              'text-primary': isActive,
              'text-coffee-bean/40 dark:text-slate-400': !isActive,
            })
          }
          viewTransition
        >
          <span
            className="material-symbols-outlined text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" } as React.CSSProperties}
          >
            home
          </span>
          <span className="text-[10px] font-bold">Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx('flex flex-col items-center gap-1', {
              'text-primary': isActive,
              'text-coffee-bean/40 dark:text-slate-400': !isActive,
            })
          }
          to="/123"
          viewTransition
        >
          <span className="material-symbols-outlined text-2xl">explore</span>
          <span className="text-[10px] font-medium">Explore</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx('flex flex-col items-center gap-1', {
              'text-primary': isActive,
              'text-coffee-bean/40 dark:text-slate-400': !isActive,
            })
          }
          to="/login"
          replace
          viewTransition
        >
          <span className="material-symbols-outlined text-2xl">exit_to_app</span>
          <span className="text-[10px] font-medium">Sign Out</span>
        </NavLink>
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
