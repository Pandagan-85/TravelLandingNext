"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className=' flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
          <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
            >
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
        <div className='lg:flexCenter hidden'>
          <Button
            type='button'
            title='Login'
            icon='/user.svg'
            variant='btn_dark_green'
          />
        </div>

        <Image
          src={!menuOpen ? "menu.svg" : "star.svg"}
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden'
          onClick={handleMenuToggle}
        />
        {menuOpen && (
          <ul className='absolute top-full left-0 right-0 bg-slate-600 shadow-lg lg:hidden'>
            {NAV_LINKS.map(link => (
              <Link
                key={link.key}
                href={link.href}
                className='block p-4 text-white'
              >
                <li>{link.label}</li>
              </Link>
            ))}
            <div className='p-4'>
              <Button
                type='button'
                title='Login'
                icon='/user.svg'
                variant='btn_dark_green'
              />
            </div>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
