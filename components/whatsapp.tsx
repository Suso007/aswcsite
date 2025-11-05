import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsFloat() {
  return (
    <a
      href="https://wa.me/919230023018"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[15%] right-0 w-[170px] translate-x-[128px] overflow-hidden bg-[#25d366] text-white rounded-l-sm z-10 transition-all duration-500 ease-in-out shadow-md flex items-center space-x-2 px-3 py-2 hover:translate-x-0"
    >
      <IconBrandWhatsapp className="text-2xl" />
      <span className="font-medium">May I Help You</span>
    </a>
  );
}
