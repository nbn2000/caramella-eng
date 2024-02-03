import { Profile, Menu, Login, Logout } from "@/svg/view";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginModal from "../loginModal";
import { links } from "./links";
import CaramellaLogo from "@/assets/caramella-logo/caramella-logo.png";

const MobileNav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const login = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;

  const handlNavigate = (link: string) => {
    router.push(link);
  };
  return (
    <nav className="lg:flex hidden h-[90px] flex-row items-center justify-between px-1">
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content btn shadow-none">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button ">
              <Menu color="#f2360a" size={20} />
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu flex flex-col gap-4  p-4 w-[250px] h-full bg-white text-base-content">
              {links.map((i, idx) => (
                <li
                  key={idx}
                  className="active:bg-gray-500 hover:bg-gray-500 rounded-sm"
                >
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay w-full l-1125 text-text232 hover:text-white active:text-white"
                    onClick={() => handlNavigate(i.link)}
                  >
                    {i.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[50%] p-[2px]">
        <Link href="/">
          <Image
            width={0}
            height={0}
            className="w-full -hue-rotate-[50deg]"
            src={CaramellaLogo}
            alt="Caramella logo"
          />
        </Link>
      </div>
      {login ? (
        <details className="dropdown  ">
          <summary className="m-1 btn shadow-none">
            <div className="flex flex-row items-center justify-center gap-[0.31rem]">
              <Profile color="#F2360A" />{" "}
            </div>
          </summary>
          <ul className="p-2 shadow menu bg-white opacity-100 dropdown-content z-50 rounded-box w-52 right-0">
            <li>
              <span className="l-1125 text-text232">{login?.phoneNumber}</span>
            </li>
            {login?.userName && (
              <li>
                <span className="l-1125 text-text232">{login?.userName}</span>
              </li>
            )}
            <li>
              <button
                className="flex flex-row justify-start items-center"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                <div className="w-[24px]">
                  <Logout color="#F2360A" />
                </div>
                <span className="l-1125 text-text232 w-max">Чиқиш</span>
              </button>
            </li>
          </ul>
        </details>
      ) : (
        <>
          <button onClick={() => setOpen(true)}>
            <Login color="#F2360A" />
          </button>
          <LoginModal setOpen={setOpen} open={open} />
        </>
      )}
    </nav>
  );
};

export default MobileNav;
