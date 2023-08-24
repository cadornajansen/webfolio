const NeuButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white flex items-center justify-center">
      <button className="inline-flex items-center px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {children}
      </button>
    </div>
  );
};

export default NeuButton;
