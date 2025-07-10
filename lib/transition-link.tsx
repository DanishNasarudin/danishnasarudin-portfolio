"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    if (!body) return;

    body.classList.add("page-transition");

    await sleep(200);

    router.push(href);
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      {...props}
      className={className}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
