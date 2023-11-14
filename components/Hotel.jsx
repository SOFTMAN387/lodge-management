import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="rounded-lg h-auto justify-center items-center w-auto mb-5 p-5 border-b-2 border-full border-red-500 rounded-md m-5">
      <div className="flex justify-center items-center">
      <Image
          src={e.banner}
          alt="hotel"
          width={300}
          height={300}
          className=" w-96 h-60"
        />
      </div>
       
        <div className="flex justify-center items-center gap-1">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={100}
                    height={200}
                    className=" w-20 h-16 object-cover m-2  "
                  />
                );
              })
            : ""}
        </div>
        <div className=" ml-20 flex justify-center items-center flex-col md:text-xl sm:text-xl">
          <h2 className="font-bold text-xl  line-clamp-1">{e?.name}</h2>
          <p className=" text-justify text-lg">{e?.description}</p>
          <div className=" text-xl ">
            <span className=" font-bold">Facilities : </span>
            <ul className=" flex flex-col  lg:flex-row ">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : &#8377; {e?.price}
            </button>
            <Link
              href={`/hotels/${e._id}`}
              className=" font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Hotel;
