import type { Coffee } from '../../../../coffee/core/interfaces';
import { DIFFICULT_TYPE } from '../../../core/constants';
import { clsx } from '../../../core/utils';

export const Card = ({ name, image, difficult, smallDescription, duration, rating }: Coffee) => {
  return (
    <div className="bg-white dark:bg-white/5 rounded-2xl p-3 flex gap-4 shadow-sm border border-coffee-cream dark:border-primary/10">
      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <img className="w-full h-full object-cover" data-alt="Close up of a creamy caffe latte with foam" src={image} />
      </div>
      <div className="flex flex-col justify-between py-1 flex-1">
        <div>
          <div className="flex justify-between items-start">
            <span
              className={clsx('text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full', {
                'text-primary bg-primary/10': difficult === DIFFICULT_TYPE.EASY,
                'text-orange-700 bg-orange-100': difficult === DIFFICULT_TYPE.MEDIUM,
                'text-red-700 bg-red-100': difficult === DIFFICULT_TYPE.HARD,
              })}
            >
              {difficult.toLowerCase()}
            </span>
            <span className="material-symbols-outlined text-coffee-bean/30 dark:text-slate-400 text-xl cursor-pointer">
              bookmark
            </span>
          </div>
          <h3 className="font-bold text-coffee-bean dark:text-slate-100 mt-1">{name.toUpperCase()}</h3>
          <p className="text-xs text-coffee-bean/60 dark:text-slate-400">{smallDescription}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 text-[11px] text-coffee-bean/60 dark:text-slate-400 font-medium">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {duration} min
          </div>
          <div className="flex items-center gap-1 text-[11px] text-coffee-bean/60 dark:text-slate-400 font-medium">
            <span className="material-symbols-outlined text-sm">star</span>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};
