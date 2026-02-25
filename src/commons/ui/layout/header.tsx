export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 pt-6 pb-2">
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 p-2 rounded-xl">
          <span className="material-symbols-outlined text-primary text-2xl">coffee</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-coffee-bean dark:text-slate-100">Coffeeland</h1>
      </div>
      <div className="w-10 h-10 rounded-full bg-coffee-cream dark:bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/20">
        <img
          className="w-full h-full object-cover"
          data-alt="Professional profile picture of a coffee enthusiast"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4j_lGeoiwCgkrIklpdvLJg3wi2oD5QOEHBVq9WAIJrq18TKNbeQSu-UJNKjVrN5M53r7W1OUvyL-2IRT1JnD0BFMMrPCyckY8Igvq2ko7qVodpGSa8j92U8asC7kDn-kGgwKW3Etw4KeNWcp3d7gqoQX_fg1tmmaFEiHIrEMSsJ0nMFOC1jlLjP-kSaNLFFdNSAemtaFbzrFEx560DNoifVXUALVXwRFcVFxPeW2Vg_0EZDh9gvtPkepR7vpP5hyJNsxtuPvawbo"
        />
      </div>
    </header>
  );
};
