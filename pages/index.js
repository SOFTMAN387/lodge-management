import Image from 'next/image'
import { Inter } from 'next/font/google';
import Header1 from '@/components/Header1';
import Header2 from '@/components/Header2';
import Header3 from '@/components/Header3';
import Header4 from '@/components/Header4';
import Footer from '@/components/Footer';
import Head from "next/head";
import Hotel from '@/components/Hotel';

const inter = Inter({ subsets: ['latin'] })

export default function Home({hotels}) {
  console.log(hotels);
  return (
  <>
  <div>
  <Head>
        <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
        </title>
   </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-50">
        <div className=" my-14">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className=" h-80 w-full "
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            width={200}
            height={200}
            className=" h-40 w-full "
          />
        </div>
        <Header4 />
      </div>
      <div className="grid lg:grid-cols-2">
       {hotels?.map((e) => {
                return (
                  <div  key={e._id}>
                    <Hotel  e={e} />
                  </div>
                );
              })}
      </div>
      <Footer />
    </div>
  
    </>
  )
}


export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels/`,{
      method:"GET",
    }
  );
  const data = await res.json();

  return {
    props: {
      hotels:data.allhotels||null,
    },
  };
}