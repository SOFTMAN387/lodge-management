const Header2 = () => {
    const List = [
      {
        name: "Patna",
        _id:1,
      },
      {
        name: "Kolkata",
        _id:2,
      },
      {
        name: "Mumbai",
        _id:2,
      },
      {
        name: "Delhi",
        _id:4,
      },
      {
        name: "Hyderabad",
        _id:5,
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