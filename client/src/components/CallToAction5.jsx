import { Button } from "flowbite-react";

export default function CallToAction5() {
  return (
    <div className="bg-blue-900 text-white flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-left">
      <div className="p-1 flex-1">
        <img src="../src/assets/WhatsApp Image 2024-08-10 at 21.12.05 (1).jpeg" />
      </div>
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-4xl flex-1 justify-center flex items-start flex-col">
        OUR ACTIVITIES
        </h2>
        <p className="text-gray-50 my-2 flex-1 justify-center flex items-start flex-col">
          1- Workshops and Seminars <br />
          -We shall workshops, seminars and
          conferences on key issues affecting health care, community development
          especially in agriculture and empowerment 2-Sensitizations <br />
          -Sensitizations of key issues shall be at the core of our activities <br /><br />
          3- Charity Outreach <br />
          -We shall reach out to orphans, those affected by
          humanitarian crisis <br />
          -Visit the sick and physically challenged etc
          4-Health Centers/health care <br />
          -The foundation will run a network of
          community health centers <br />
          -Periodically carry a door-to-door study <br /><br />
          4-Education and Vocational Training Institutions <br />
          -Put up vocational training centers for health personnel and community development
          -Recommend some to other areas for employment <br /><br />
          5- Partnership <br />
          -Work closely with the ministry of Vocational Training and other ministries in related areas of interest <br />
          -Identify both private and public organizations and work with them
        </p>
      </div>
    </div>
  );
}
