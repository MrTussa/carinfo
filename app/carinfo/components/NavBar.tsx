import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full z-10 bg-slate-50 opacity-95 shadow-2xl shadow-white box-border">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex h-5 justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Info Logo"
            width={120}
            height={18}
            className="object-contain"
          />
        </Link>
        {/* 
        <CustomButton
          title="Войти"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        /> */}
      </nav>
    </header>
  );
};

export default NavBar;
