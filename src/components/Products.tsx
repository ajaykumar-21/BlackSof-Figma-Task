import Image from "next/image";
import { products } from "@/data/productsData";
import SmartLight from "../../public/smartLight.svg";
import Arrow from "../../public/arrow (2).svg";

const Products: React.FC = () => {
  return (
    <div className="conatiner bg-gradient-whitish-gray pl-[20%] pr-[20%] pt-24 pb-20">
      <div className="w-auto h-auto">
        <div className="bg-gradient-white-shades text-[#00386B] text-center w-[38px] h-[40px] p-2">
          Ecosystem
        </div>
        <div className="text-black w-full w-[622px] h-[136px] text-[#000000]">
          <div className="font-inter text-[40px] font-normal mt-5 tracking-[0.01em] text-left">
            <span className="font-sequel-sans text-[40px] font-bold leading-[72px]">
              Cutting-edge hardware,
            </span>{" "}
            offerings
          </div>
          <div className="font-inter text-[40px] mt-1">
            helping cities optimize resources and
          </div>
          <div className="font-inter text-[40px] mt-1">
            achieve smart development goals.
          </div>
        </div>
      </div>
      <div className="mt-32 flex flex-wrap gap-5">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-10 text-white border-2 border-gray-400 p-2 hover:bg-gray-700 cursor-pointer">
              {product.title}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[413px] mt-10">
        <div className="flex">
          <div className="w-[50%]">
            <Image src={SmartLight} alt="Smart street Light" />
          </div>
          <div className="bg-white-blue-shades w-[50%] flex items-center pl-10">
            <div className="w-[336px] h-[245.87px]">
              <div className="text-[#818181] text-left">Products 1/5</div>
              <div className="font-sequel-sans text-[30px] font-semibold text-[#000000] mb-4">
                Centralized Control & Monitoring System
              </div>
              <div className="font-sequel-sans text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#000000] mb-3">
                Designed indigenously for street lighting projects, the CCMS
                offers a complete feeder panel for a group of 30-50 street
                lights.
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="text-[20px] text-[#3661FF]">Know More</div>
                <div>
                  <Image src={Arrow} alt="Arrow Icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;