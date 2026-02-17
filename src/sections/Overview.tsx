import me from "@/assets/images/me.jpg"
import Image from "next/image"

export default function Overview() {
  return (
    <main id="overview" className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-col items-center space-y-4">
        <Image
        width={280}
        height={280}
        src={me.src}
        alt="Isuru Herath"
        className="w-80 h-80 rounded-full object-cover"
        />
      <h1 className="text-2xl">Software Engineer at Surge Global</h1>
      <h1 className="text-2xl">Graduate from SLIIT</h1>
      <h1 className="text-2xl">Based in 🇱🇰</h1>
      </div>
    </main>
  );
}