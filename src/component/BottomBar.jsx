const BottomBar = (k) => {
  const { startDate, endDate } = k.selectedDate;

  return (
    <div className="flex justify-between w-full pl-2 bg-slate-600   left-0 right-0  bottom-0 sticky">
      <div className="flex flex-col items-start justify-center">
        <h3>${k.price}</h3>
        <div className="flex">
          <h2> {startDate.toDateString()} </h2> <span>-</span>
          <h2> {endDate ? endDate.toDateString() : "not selected"} </h2>
        </div>
      </div>
      <button className="px-2 mx-2 bg-purple-600 rounded-sm">Reserve</button>
    </div>
  );
};

export default BottomBar;
