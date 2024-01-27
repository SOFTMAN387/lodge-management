const Header2 = () => {
    const List = [
      {
        name: "Patna",
        _id:1,
      },
      {
        name: "Gaya",
        _id:2,
      },
      {
        name: "Muzaffarpur",
        _id:3,
      },
      {
        name: "Samastipur...",
        _id:4,
      },
    ];
    return (
      <div>
        <div className="flex px-5  py-3 bg-gray-100 justify-between w-full">
          {
              List.map((e)=>{
                  return(
                      <span key={e._id} >{e.name}</span>
                  )
              })
          }
        </div>
      </div>
    );
  };
  
  export default Header2;