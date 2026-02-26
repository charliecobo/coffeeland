export const Card = () => {
  return (
    <div className="bg-white dark:bg-white/5 rounded-2xl p-3 flex gap-4 shadow-sm border border-coffee-cream dark:border-primary/10">
      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <img
          className="w-full h-full object-cover"
          data-alt="Close up of a creamy caffe latte with foam"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOO7wSXkf9vkqhH-pyVlDwp_OgjRQ97i8Q4P1fl-ILgKw6jMinXkDw_1xhnS_mhPEK9BNX32PupIJLr8-yihLlQG-cVjkhCaIjnQgFqMMPSoDkWshFCuLLj78UwuTcG912vaZkYygFKNAbc80ZGLexrD4-1GoRMdr_TP2BPp39u3pka4uzMkMA1eIihke6nCD5LJChUxMDsfjAX3dT9-hQUt1dnFAM_AiG3vyydtUlTIG1OxRpR8yozAWP0AzO_r-LeNbwCxb9VIg"
        />
      </div>
      <div className="flex flex-col justify-between py-1 flex-1">
        <div>
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Easy
            </span>
            <span className="material-symbols-outlined text-coffee-bean/30 dark:text-slate-400 text-xl cursor-pointer">
              bookmark
            </span>
          </div>
          <h3 className="font-bold text-coffee-bean dark:text-slate-100 mt-1">Caramel Macchiato</h3>
          <p className="text-xs text-coffee-bean/60 dark:text-slate-400">
            Sweet vanilla with espresso &amp; caramel drizzle
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 text-[11px] text-coffee-bean/60 dark:text-slate-400 font-medium">
            <span className="material-symbols-outlined text-sm">schedule</span>5 min
          </div>
          <div className="flex items-center gap-1 text-[11px] text-coffee-bean/60 dark:text-slate-400 font-medium">
            <span className="material-symbols-outlined text-sm">star</span>
            4.9
          </div>
        </div>
      </div>
    </div>
  );
};
