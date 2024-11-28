import SmartLight from "../../public/assets/smart lights_logo.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-footer-image h-[450px] pl-[20%] pr-[20%] bg-center">
      <div className="pt-10">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <div>
            <Image src={SmartLight} alt="Smart Light" />
          </div>
          <nav className="space-x-20">
            <a href="#" className="text-white-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-white-600 hover:text-gray-800">
              Software Services
            </a>
            <a href="#" className="text-white-600 hover:text-gray-800">
              Follow Us
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-40">
        <div className="w-[500px]">
          <div className="border-t border-gray-400 mb-4"></div>{" "}
          <div className="grid grid-cols-3 divide-x divide-gray-400 text-center">
            <div className="p-2">Privacy Policy</div>
            <div className="p-2">Terms & Conditions</div>
            <div className="p-2">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
