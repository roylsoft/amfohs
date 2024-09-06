import { Button } from "flowbite-react";

export default function CallToAction2() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col gauche">
        <h2 className="text-6xl flex-1 justify-center flex items-start flex-col">
          Our Values
        </h2>
        <p className="text-gray-50 my-2 flex-1 justify-center flex items-start flex-col">
          Accountability: We are accountable to our partners, communities, and
          ourselves. 
          <br /> <br />
          Transparency: Transparency in our work strengthens our
          integrity and trust. 
          <br /> <br />
          Commitment: We are committed to improving
          healthcare standards, advancing education, fostering community
          development, and addressing environmental concerns in our country.
          <br /> <br />
          Sustainability: Our initiatives are designed to create lasting
          impacts.
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
      <div className="p-1 flex-1 droite">
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 21.12.07 (1).jpeg" />
        
      </div>
    </div>
  );
}
