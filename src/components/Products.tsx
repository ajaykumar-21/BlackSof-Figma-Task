import Image from "next/image";
import { products } from "@/data/productsData";
import SmartLight from "../../public/assets/smartLight.svg";
import Arrow from "../../public/assets/arrow (2).svg";

const Products: React.FC = () => {
  return (
    <div className="bg-gradient-whitish-gray px-6 md:px-[10%] pt-16 pb-20">
      {/* Title Section */}
      <div className="w-full">
        <div className="bg-gradient-white-shades text-[#00386B] font-bold text-center w-[38px] h-[40px] p-2 md:mx-0">
          Products
        </div>
        <div className="text-black mt-5">
          <div className="font-inter text-[24px] md:text-[30px] font-normal tracking-[0.01em] text-center md:text-left">
            <span className="font-sequel-sans text-[24px] md:text-[30px] font-bold">
              Cutting-edge hardware,
            </span>{" "}
            offerings
          </div>
          <div className="font-inter text-[24px] md:text-[30px] text-center md:text-left">
            helping cities optimize resources and
          </div>
          <div className="font-inter text-[24px] md:text-[30px] text-center md:text-left">
            achieve smart development goals.
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="mt-10 flex flex-wrap gap-5 justify-center md:justify-start">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[48%] lg:w-[30%]"
          >
            <div className="h-10 text-white border-2 border-gray-400 p-2 hover:bg-gray-700 cursor-pointer text-center">
              {product.title}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Product Section */}
      <div className="mt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={SmartLight}
              alt="Smart street Light"
              className="w-full max-w-[400px] lg:max-w-none"
            />
          </div>
          <div className="bg-white-blue-shades w-full lg:w-[50%] flex items-center px-6 py-6 md:px-10">
            <div className="w-full">
              <div className="text-[#818181] text-left text-sm">
                Products 1/5
              </div>
              <div className="font-sequel-sans text-[18px] md:text-[20px] font-semibold text-[#000000] mb-4">
                Centralized Control & Monitoring System
              </div>
              <div className="font-sequel-sans text-[14px] md:text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#000000] mb-3">
                Designed indigenously for street lighting projects, the CCMS
                offers a complete feeder panel for a group of 30-50 street
                lights.
              </div>
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="text-[18px] md:text-[20px] text-[#3661FF]">
                  Know More
                </div>
                <div>
                  <Image src={Arrow} alt="Arrow Icon" />
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
