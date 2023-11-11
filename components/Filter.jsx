"use client";

const Filters = ({
  price,
  setPrice,
  handleCheckList,
  handleSearch,
  checkedList

}) => {
    console.log(checkedList);
  return (
    <>
      <div className=" border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
        <label htmlFor="price" className=" text-xl mr-3 font-bold">
          Price :{" "}
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={1000}
          max={3500}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price ? price : 0}
        />
        <span className=" ml-10">&#8377;{price}</span>
       
        <div className=" my-10 ">
          <h3 className=" text-xl font-bold my-3">Filter by Facilities : </h3>       
              <p className="grid grid-cols-4 my-3">
                <label htmlFor="checkbox" className=" col-span-2">
                 Free Wifi
                </label>
                <input
                  type="checkbox"
                  name="wifi"
                  id="checkbox"
                  value="free wifi"
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
                  <label htmlFor="checkbox" className=" col-span-2">
                 Swiming Pool
                </label>
                <input
                  type="checkbox"
                  name="swiming"
                  id="checkbox"
                  value="swiming pool"
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
                  <label htmlFor="checkbox" className=" col-span-2">
                 Garden
                </label>
                <input
                  type="checkbox"
                  name="garden"
                  id="checkbox"
                  value="garden"
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
                  <label htmlFor="checkbox" className=" col-span-2">
                 Parking Zone
                </label>
                <input
                  type="checkbox"
                  name="parking"
                  id="checkbox"
                  value="parking"
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
                  <label htmlFor="checkbox" className=" col-span-2">
                 Gym
                </label>
                <input
                  type="checkbox"
                  name="gym"
                  id="checkbox"
                  value="gym"
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
              </p>
              <div>
          <button
            className=" w-40 h-10 bg-green-300 cursor-pointer my-3"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Filters;