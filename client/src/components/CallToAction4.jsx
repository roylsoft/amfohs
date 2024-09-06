import { Button } from "flowbite-react";

export default function CallToAction4() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col gauche">
        <h2 className="text-4xl flex-1 justify-center flex items-start flex-col">
          CONTACT US
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-2 mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> <br />director@alherimedicalfoundation.org</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> +237 654 30 55 08</p>
          <p className="text-gray-700 mb-2"><strong>Address:</strong><br /> 727 Obili, Yaounde VI, Cameroon</p>
        </div>
        {/* <Button
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
        </Button> */}
      </div>
      <div className="p-1 flex-1 droite">
        <img src="../src/assets/image1.jpeg" />
      </div>
    </div>
  );
}
