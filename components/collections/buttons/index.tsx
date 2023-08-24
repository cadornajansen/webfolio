export const NeuButton = () => {
  return (
    <button className="inline-flex items-center px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      Hover Me!
    </button>
  );
};

export const NeuButtonCode = `<div className="bg-white flex items-center justify-center">
  <button className="inline-flex items-center px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
    Hover Me!
  </button>
</div>`;

const AllButtons = [
  {
    source: NeuButtonCode,
    component: <NeuButton />,
  },
  {
    source: NeuButtonCode,
    component: <NeuButton />,
  },
  {
    source: NeuButtonCode,
    component: <NeuButton />,
  },
];

export default AllButtons;
