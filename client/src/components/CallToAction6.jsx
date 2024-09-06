import { Button } from "flowbite-react";

export default function CallToAction6() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-left">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-6xl flex-1 justify-center flex items-start flex-col">Who are we?</h2>
        <p className="text-gray-50 my-2 flex-1 justify-center flex items-start flex-col">
          Alheri Medical Foundation and Humanitarian Services (AMFOHS) was
          established in February 2019 by Dr. Tata Devine, originally as a
          medical foundation. The primary mission at its inception was to
          provide accessible healthcare services, particularly to underserved
          and rural communities, addressing critical health challenges and
          improving overall well-being.
          <br /> As AMFOHS grew and the needs of the communities it served
          became more apparent, the organization expanded its scope beyond
          healthcare. Recognizing the interconnectedness of health, education,
          community development, and the environment, AMFOHS broadened its
          services in subsequent years. New departments were created to focus on
          community development, youth empowerment, environmental conservation,
          and partnerships, all aimed at fostering sustainable development and
          improving the quality of life in the communities it serves.
          <br /> Today, AMFOHS operates with a comprehensive approach,
          addressing a wide range of issues from healthcare and education to
          environmental sustainability and youth empowerment, always guided by
          its founding principles of service and compassion.
        </p>
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
      <div className="p-1 flex-1">
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 21.06.54 (1).jpeg" />
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 21.06.56.jpeg" />
      </div>
    </div>
  );
}
