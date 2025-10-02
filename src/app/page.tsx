import Image from "next/image";
import TypewriterTitle from "@/components/TypewriterTitle";
import { Navbar } from "@/components/Navbar";
import ScrollText from "@/components/ScrollText";
import { PixelImage } from "@/components/PixelImage";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-black">
      <Navbar
        navigationLinks={[
          { href: '#', label: 'Producten', active: true },
          { href: '#leren', label: 'Leren' },
          { href: '#contact', label: 'Contact' },
        ]}
        signInText="Login"
        ctaText="Start"
      />
      {/* Container voor sticky sectie - beperkt tot 0.15x viewport */}
      <div className="relative h-[150vh] bg-black">
        {/* Scrolling text - verdwijnt naar boven */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20 pt-1">
          <TypewriterTitle
            sequences={[
              { text: "Rauw", deleteAfter: true },
              { text: "Collectief", deleteAfter: true },
              { text: "Rauw", deleteAfter: false },
            ]}
            typingSpeed={80}
            startDelay={300}
            autoLoop={false}
            loopDelay={2000}
          />
        </div>

        {/* Sticky image - blijft staan binnen deze container */}
        <div className="sticky top-0 w-full flex flex-col justify-center items-center min-h-screen z-10">
          <Image
            src="/fd20b279-c191-4d15-b018-e54e2bebc8fb.jpg"
            alt="Header image"
            width={1200}
            height={2000}
            priority
            className="w-auto max-w-[60vw] object-cover opacity-0 animate-[fadeIn_1.5s_ease-in-out_3s_forwards]"
            style={{ height: '100vh' }}
          />
          <div className="w-full h-[1px] bg-white mt-4 opacity-80"></div>
        </div>
      </div>

      {/* Content na de afbeelding */}
      <div className="relative bg-black z-30 pb-32" style={{ minHeight: '2500px' }}>
        <div className="absolute top-0 left-0">
          <ScrollText
            texts={[
              "What's on:",
              "Bestsellers..."
            ]}
            className="max-w-none"
          />
        </div>
        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 flex gap-12">
          <PixelImage src="/bestseller1.jpg" grid="4x6" />
          <PixelImage src="/bestseller2.jpg" grid="4x6" />
          <PixelImage src="/bestseller3.jpg" grid="4x6" />
        </div>
        {/* 4 afbeeldingen, waarbij de 3 rechtse gecentreerd zijn onder de eerste rij */}
        <div className="absolute top-[500px] left-1/2 -translate-x-1/2 flex gap-12 -ml-8">
          <div className="-ml-[calc(12rem+3rem)]">
            <PixelImage src="/bestseller4.jpg" grid="4x6" />
          </div>
          <PixelImage src="/bestseller5.jpg" grid="4x6" />
          <PixelImage src="/bestseller6.jpg" grid="4x6" />
          <PixelImage src="/bestseller7.jpg" grid="4x6" />
        </div>
        {/* Witte streep onder bestsellers */}
        <div className="absolute top-[1050px] w-full h-[1px] bg-white opacity-80"></div>

        {/* Over Rauw Collectief sectie */}
        <div className="absolute top-[1070px] left-0 w-full flex justify-between items-start bg-black px-8">
          <div>
            <ScrollText
              texts={[
                "Over",
                "Rauw Collectief"
              ]}
              className="max-w-none"
            />
            <div className="text-white text-lg -mt-16 max-w-xl leading-relaxed bg-black">
              <p>We make beautifully functional furniture.<br />
              Every design we release is the result of a<br />
              thorough and iterative process, culminating<br />
              in timeless pieces that can be enjoyed across<br />
              generations.</p>
              <a href="#" className="inline-block mt-6 text-white underline hover:text-white/80 transition-colors">
                Learn more →
              </a>
            </div>
          </div>
          <video
            src="/rauw_opname.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-auto h-[850px] object-cover rounded-lg relative top-12 -left-32"
          />
        </div>

        {/* Witte streep onder video - start nieuwe sectie */}
        <div className="absolute top-[2300px] w-full h-[1px] bg-white opacity-80"></div>

        {/* Ontwerp sectie met links "Ontwerp je eigen tafel" en rechts "Submit" */}
        <div className="absolute top-[2220px] w-full flex justify-between items-end">
          <div className="pl-4">
            <ScrollText
              texts={["Ontwerp je eigen tafel"]}
              className="max-w-none"
            />
          </div>
          <div className="pr-4">
            <ScrollText
              texts={["Submit"]}
              className="max-w-none [&_div]:text-gray-400"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute top-[2420px] w-full py-2 bg-black">
          <div className="flex justify-between items-end">
            <div className="text-white pl-8 flex flex-col gap-2">
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/rick-de-voogt-29413728/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a href="https://www.facebook.com/RauwCollectief/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a href="https://www.instagram.com/rauwcollectief/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
              </div>
              <p className="text-sm opacity-80">© 2025 Rauw Collectief. All rights reserved.</p>
            </div>
            <div className="pr-2">
              <Image
                src="/Rauw_logo.jpg"
                alt="Rauw Collectief"
                width={180}
                height={90}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
