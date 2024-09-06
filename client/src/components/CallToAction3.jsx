import { Button } from "flowbite-react";

export default function CallToAction3() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-left">
      <div className="flex-1 justify-center flex flex-col gauche">
        <h2 className="text-6xl flex-1 justify-center flex items-start flex-col">
          Who are we?
        </h2>
        <div className="my-2">
          <iframe
            src="https://www.google.com/maps/place/Hotel+Santa+Belle,+Obili/@3.8544197,11.4901803,15z/data=!4m2!3m1!1s0x0:0x38e89e47fbfb2a91?sa=X&ved=1t:2428&ictx=111"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://alhips.nfonap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schools
          </a>
        </Button>
      </div>
      <div className="p-1 flex-1 droite">
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 21.06.54 (1).jpeg" />
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 21.06.56.jpeg" />
      </div>
    </div>
  );
}
