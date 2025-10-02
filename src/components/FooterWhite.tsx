import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import ScrollText from "@/components/ScrollText";

export function FooterWhite() {
  return (
    <div className="relative w-full bg-white">
      {/* Zwarte streep */}
      <div className="w-full h-[1px] bg-black opacity-80"></div>

      {/* Ontwerp sectie met links "Ontwerp je eigen tafel" en rechts "Submit" */}
      <div className="w-full flex justify-between items-end -mt-20 mb-20 bg-white">
        <div>
          <ScrollText
            texts={["Ontwerp je eigen tafel"]}
            className="max-w-none [&_div]:!text-black"
          />
        </div>
        <div className="pr-4">
          <ScrollText
            texts={["Submit"]}
            className="max-w-none [&_div]:!text-gray-600"
          />
        </div>
      </div>

      {/* Footer met sociale media en logo */}
      <footer className="w-full py-2 bg-white">
        <div className="flex justify-between items-end">
          <div className="text-black pl-8 flex flex-col gap-2">
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/rick-de-voogt-29413728/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin className="h-6 w-6 text-black" />
              </a>
              <a
                href="https://www.facebook.com/RauwCollectief/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Facebook className="h-6 w-6 text-black" />
              </a>
              <a
                href="https://www.instagram.com/rauwcollectief/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram className="h-6 w-6 text-black" />
              </a>
            </div>
            <p className="text-sm opacity-80">© 2025 Rauw Collectief. All rights reserved.</p>
          </div>
          <div className="pr-2">
            <Image
              src="/Rauw_logo_witzwart.png"
              alt="Rauw Collectief"
              width={180}
              height={90}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
