import { Button } from "flowbite-react";

export default function CallToAction1() {
  return (
    <div className="flex flex-col sm:flex-row p-3 bg-blue-900 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-left">
      <div className="p-1 flex-1 gauche">
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 11.27.10 (1).jpeg" />
      </div>
      <div className="flex-1 justify-center flex flex-col droite">
        <h2 className="text-4xl flex-1 justify-center flex items-start flex-col text-white">
          What we do?
        </h2>
        <p className="text-gray-50 my-2 flex-1 justify-center flex items-start flex-col">
          OUR WORK PAGE <br /> <br />At AMFOHS, we drive positive change through
          our dedicated departments: Health, Community Development and Youth
          Empowerment, Agriculture and environmental conservation. <br /> Each
          department focuses on key areas that are interconnected, working
          collaboratively to maximize our impact on communities, particularly in
          vulnerable and rural areas.
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
    </div>
  );
}
