import ButtonSvg from "@/app/assets/svg/ButtonSvg";

import { ReactNode } from "react";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
}: {
  className?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  px?: string;
  white?: boolean;
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanclasses = `relative z-10`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanclasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
