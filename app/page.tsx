"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1>Home Page</h1>
      <Link href="/auth/register/USER" className="bg-gray-300">
        Muhendis kayit Sayfasi{" "}
      </Link>
      <Link href="/auth/register/ADMIN" className="bg-gray-300">
        Isletme Sahibi kayit Sayfasi{" "}
      </Link>
      <Link href="/auth/login" className="bg-gray-300">
        Giris Sayfasi
      </Link>
    </div>
  );
};

export default HomePage;
