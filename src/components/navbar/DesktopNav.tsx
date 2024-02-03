import { Profile, Login, Logout } from "@/svg/view";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import CaramellaLogo from "@/assets/caramella-logo/caramella-logo.png";
import { links } from "./links";

const LoginModal = dynamic(() => import("../loginModal"), { ssr: false });

const DesktopNav = () => {
  const login = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : null;
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-[130px] flex flex-row justify-between items-center container-p lg:hidden">
      <div className="w-[12%] p-[2px]">
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
      <div className="flex flex-row justify-center items-center gap-[3.44rem] 1xl:gap-4 xl:gap-2">
        {links.map((i, idx) => (
          <div className="relative w-max" key={"linksDesktopNav" + idx}>
            <Link href={i.link} className="l-1125 text-text232">
              {i.label}
            </Link>
            <div
              className={`underlineLink absolute bottom-0 bg-orange h-[5px]`}
            ></div>
          </div>
        ))}
      </div>
      {login ? (
        <details className="dropdown">
          <summary className="m-1 btn shadow-none">
            <div className="flex flex-row items-center justify-center gap-[0.31rem]">
              <Profile color="#F2360A" />{" "}
              <span className="l-1125 text-text232">
                {login?.name ? login?.name : "Мижоз"}
              </span>
            </div>
          </summary>
          <ul className="p-2 shadow menu bg-white opacity-100 dropdown-content z-50 rounded-box w-52 -ml-7">
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
          <button
            onClick={() => setOpen(true)}
            className="flex flex-row justify-center items-center gap-[0.31rem]"
          >
            <Login color="#F2360A" />{" "}
            <span className="l-1125 text-text232">Кириш</span>
          </button>
          <LoginModal setOpen={setOpen} open={open} />
        </>
      )}
    </nav>
  );
};

export default DesktopNav;
