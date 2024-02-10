import { Outfit, Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });

interface Project {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({
  description,
  image,
  title,
}: Readonly<Project>) {
  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt="" className="max-h-[360px] " />
      <h3 className={`text-4xl ${playfair.className}`}>{title}</h3>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
}
