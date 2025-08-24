// File: components/Card.tsx (sudah benar, tidak ada error)
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
}

const Card: FC<CardProps> = ({ children, className, role = "region" }) => {
  return (
    <div
      role={role}
      className={twMerge(
        "p-6 border border-gray-200 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;