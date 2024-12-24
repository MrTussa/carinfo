"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface LogoButtonProps {
  logo: string | null;
  width: number;
  height: number;
  classname?: string;
  id: string;
}

const LogoButton: React.FC<LogoButtonProps> = ({
  logo,
  width,
  height,
  classname,
  id,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/carinfo/manufacturer/${id}`)}
      className={`flex items-center justify-center ${classname ?? ""}`}
    >
      {logo ? (
        <Image
          src={logo}
          alt="Logo"
          width={width}
          height={height}
          className="rounded-full"
        />
      ) : (
        <span>No Logo</span>
      )}
    </button>
  );
};

export default LogoButton;
