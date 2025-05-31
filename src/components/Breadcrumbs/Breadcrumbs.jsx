"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  const breadcrumbs = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const label = part
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
      <span key={href}>
        <Link href={href} className={styles.link}>
          {label === "Homepage" ? "Your Notes" : label}
        </Link>
        {index < pathParts.length - 1 && " / "}
      </span>
    );
  });

  return (
    <div className={styles.breadcrumb}>
      <Link href="/" className={styles.link}>
        Homepage
      </Link>
      {pathParts.length > 0 && " / "}
      {breadcrumbs}
    </div>
  );
}
