import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { sileo } from 'sileo';

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log({ values });
      sileo.success({
        title: 'Welcome! 🎉',
      });

      setTimeout(() => navigate('/', { viewTransition: true, replace: true }), 1500);
    },
  });

  return (
    <>
      <div className="@container px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
            <span className="material-symbols-outlined text-primary text-6xl!">coffee</span>
          </div>
          <div className="text-center">
            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">Bean &amp; Brew</h1>
            <p className="text-slate-600 dark:text-slate-400 text-base mt-2">Log in to continue your coffee journey</p>
          </div>
        </div>
      </div>

      {/* <!-- Login Form --> */}
      <form className="flex flex-col gap-4 px-4 py-4 max-w-[480px] mx-auto w-full" onSubmit={formik.handleSubmit}>
        {/* <!-- Email Input --> */}
        <label className="flex flex-col w-full">
          <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 ml-1">Email Address</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              mail
            </span>
            <input
              name="email"
              className="form-input w-full rounded-xl border border-primary/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 h-14 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
              placeholder="hello@coffee.com"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
        </label>
        {/* <!-- Password Input --> */}
        <label className="flex flex-col w-full">
          <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 ml-1">Password</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              lock
            </span>
            <input
              name="password"
              className="form-input w-full rounded-xl border border-primary/20 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 h-14 pl-12 pr-12 focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400"
              placeholder="••••••••"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer">
              visibility
            </span>
          </div>
        </label>
        {/* <!-- Forgot Password Link --> */}
        <div className="flex justify-end">
          <a className="text-primary text-sm font-semibold hover:underline" href="#">
            Forgot Password?
          </a>
        </div>
        {/* <!-- Action Button --> */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            Log In
          </button>
        </div>
      </form>

      <div className="flex items-center px-4 my-6 opacity-50 max-w-[480px] mx-auto w-full">
        <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>
        <span className="px-4 text-xs font-medium uppercase tracking-widest text-slate-500">Or continue with</span>
        <div className="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>
      </div>

      <div className="mt-auto py-8 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          Don't have an account?
          <a className="text-primary font-bold hover:underline" href="#">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};
