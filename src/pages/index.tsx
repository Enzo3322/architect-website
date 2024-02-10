import ProjectCard from "@/components/ProjectCard";
import { Outfit, Playfair_Display } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${outfit.className}`}
    >
      <section
        id="hero"
        className="h-52 flex flex-col items-center 
      "
      >
        <h2 className={`text-[72px] mt-20 mb-6 ${playfair.className}`}>
          Make <i>your home</i> an ode to joy
        </h2>
        <p className="max-w-[800px] text-center leading-7 text-xl font-light">
          We turn your empty house to a lovely home, making the compact spaces
          with sapce saving furnitures. Making the unique tastes of yours into
          reality!{" "}
        </p>
      </section>
      <section
        id="about"
        className="py-32  m-auto w-full flex items-center gap-8"
      >
        <div className="flex flex-col gap-6 w-full">
          <h2 className={`${playfair.className} text-6xl leading-[72px]`}>
            We help to bring your dream home to reality
          </h2>
          <p className="font-light leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
            morbi.
          </p>
          <p className="font-light leading-8">
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
            mauris posuere auctor justo. Habitant proin aliquet volutpat leo
            ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
            Faucibus sit odio bibendum lobortis diam.
          </p>
        </div>
        <div className="flex gap-4 w-full">
          <img src="Image.png" alt="" className="h-[480px]" />
          <img src="Image-1.png" alt="" className="mt-[80px] h-[480px]" />
        </div>
      </section>
      <section className="max-w-screen-xl mt-20 w-full m-auto p-5 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <h4 className={`text-6xl ${playfair.className}`}>100%</h4>
          <p className="mt-4">
            SATISFACTION
            <br /> CLIENTS
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <h4 className={`text-6xl ${playfair.className}`}>250</h4>
          <p className="mt-4">
            EMPLOYEES ON <br /> WORLDWIDE
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <h4 className={`text-6xl ${playfair.className}`}>370</h4>
          <p className="mt-4">
            PROJECTS
            <br /> COMPLETED
          </p>
        </div>
      </section>
      <section
        id="services"
        className="max-w-screen-xl mt-20 p-4 m-auto w-full"
      >
        <h2
          className={`${playfair.className} text-6xl leading-[72px] max-w-[800px]`}
        >
          We provide the <i>best solutions</i> for your dream home
        </h2>
        <div className="grid grid-cols-3 gap-8 pt-20">
          <div className="w-96 border border-[#996830] p-10">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M42 6H21V12H9V24H6V42H9V27H21V42H24V9H39V42H42V6ZM12 15H21V24H12V15ZM12 30V33H18V30H12ZM15 18H18V21H15V18ZM30 18H27V21H30V18ZM27 30H30V33H27V30ZM30 36H27V39H30V36ZM27 12H30V15H27V12ZM30 24H27V27H30V24ZM33 12H36V15H33V12ZM36 24H33V27H36V24ZM33 18H36V21H33V18ZM36 30H33V33H36V30ZM33 36H36V39H33V36ZM18 39V36H12V39H18Z"
                fill="#996830"
              />
            </svg>
            <h3 className={`${playfair.className} text-3xl mb-5 mt-20`}>
              Architectural & Interior design
            </h3>
            <p>
              Non diam pretium tristique augue placerat dolor. Accumsan nibh
              nunc, molestie volutpat ipsum, ultricies.
            </p>
          </div>
          <div className="w-96 border border-[#996830] p-10">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M6 6H18.3825L29.7183 12.1832L28.2817 14.8168L17.6175 9H9V39H21V27H15V24H27V27H24V39H39V27H33V24H39V9H30V6H42V42H6V6Z"
                fill="#996830"
              />
            </svg>
            <h3 className={`${playfair.className} text-3xl mb-5 mt-20`}>
              Building
              <br /> Renovation
            </h3>
            <p>
              Non diam pretium tristique augue placerat dolor. Accumsan nibh
              nunc, molestie volutpat ipsum, ultricies.
            </p>
          </div>
          <div className="w-96 border border-[#996830] p-10">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M31.9138 38.0338L41.84 3L7.40332 13.2143L16.0574 22.4865L18.2505 20.4395L12.9046 14.7117L37.4679 7.426L30.3941 32.3922L24.6965 26.8845L22.6114 29.0415L31.9138 38.0338ZM13.1856 25.8733L15.1539 27.8417L24.5933 18.4023L26.7146 20.5237L17.2753 29.963L19.2436 31.9314L9.18658 42.617L2.5 35.9304L13.1856 25.8733ZM13.1223 30.0527L6.8079 35.9956L9.12132 38.3091L15.0643 31.9947L13.1223 30.0527Z"
                fill="#996830"
              />
            </svg>
            <h3 className={`${playfair.className} text-3xl mb-5 mt-20`}>
              Construciton Management
            </h3>
            <p>
              Non diam pretium tristique augue placerat dolor. Accumsan nibh
              nunc, molestie volutpat ipsum, ultricies.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl w-full m-auto gap-8 flex mt-20">
        <div className="w-full">
          <h2 className={`${playfair.className} text-6xl leading-[72px] mb-24`}>
            Some of our crafts made with love
          </h2>
          <ProjectCard
            title="Villa Furnishing & Interior"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
            image="Image-2.png"
          />
        </div>
        <div className="flex flex-col w-full px-14 gap-20">
          <ProjectCard
            title="Luxury Hotel Renovation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
            image="Image-3.png"
          />
          <ProjectCard
            title="Residence Swimming Pool"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
            image="Image-4.png"
          />
        </div>
      </section>
    </main>
  );
}
