import { Instagram, Telegram, Facebook } from "@/svg/view";
import Image from "next/image";
import Link from "next/link";
import CaramellaLogo2 from "@/assets/caramella-logo/caramella-logo2.png";

const Footer = () => {
  return (
    <footer className="min-h-[280px] bg-orange text-[#F0F0F0] ">
      <div className="flex flex-row justify-between items-start p-8 w-full max-w-[1400px] mx-auto lg:flex-wrap md:gap-6 md:justify-center md:items-center">
        <div className="flex flex-col justify-center gap-8 md:items-center md:gap-4">
          <div className="flex flex-row justify-between items-center w-[100%] gap-3 md:flex-col md:justify-center">
            <div className="w-[140px] p-[2px] ">
              <Link href="/">
                <Image
                  width={0}
                  height={0}
                  className="w-full"
                  src={CaramellaLogo2}
                  alt="Caramella logo"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="h-175063 ">Working Hours</h3>
              <div className="flex flex-row justify-between items-center">
                <p className="b-0875 max-w-[500px] text-white md:text-center">
                  Mon-Sun:
                </p>
                <p className="b-0875 max-w-[500px] text-white md:text-center">
                  9:00-18:00
                </p>
              </div>
            </div>
          </div>
          <p className="b-0875 max-w-[500px] text-white md:text-center">
            Enjoy a symphony of sweets: Immerse yourself in a world of
            irresistible cakes and pastries, each baked to perfection.
            Experience the true essence of joy and quality craftsmanship.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-16 xl:gap-8">
          <div className="flex flex-col justify-start items-start gap-4 pt-10 px-6 md:pt-0">
            <Link href="/" className="l-1125 !font-bold">
              Home
            </Link>
            <Link href="/about" className="l-1125 !font-bold">
              About
            </Link>
            <Link href="/menu" className="l-1125 !font-bold">
              Menu
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-4 pt-10 px-6 md:pt-0">
            <Link href="/career" className="l-1125 !font-bold">
              Career
            </Link>
            <Link href="/cart" className="l-1125 !font-bold">
              Cart
            </Link>
            <Link href="/contact" className="l-1125 !font-bold">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end gap-4 md:justify-center md:items-center md:gap-2">
          <h3 className="b-125 uppercase !font-bold">Contacts</h3>
          <div className="flex flex-col justify-center items-center gap-2 font-medium leading-8 tracking-widest">
            <span>+99891 352 4474</span>
            <span>+99833 052 4474</span>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Telegram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="h-[2px] w-full bg-[#F0F0F0]" />
        <div className="w-full flex flex-row justify-between items-center py-3 px-4 md:flex-col max-w-[1400px] mx-auto">
          <h3>Copyright © 2023 all rights reserved</h3>
          <Link
            href="https://github.com/nbn2000"
            className="underline"
            target="_blank"
          >
            Designed by <strong>Makhmudov Nodirbek</strong>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
