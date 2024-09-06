import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble
} from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
export default function FooterCom() {
  return (
    <Footer container className="bg-blue-900 text-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/" className="flex flex-col items-center">
              <div className="flex items-center justify-center w-24 h-24 bg-purple-1000 rounded-full overflow-hidden">
                <img
                  src="../src/assets/logo.png" // Assurez-vous que le chemin est correct
                  alt="Logo"
                  className="h-20 w-auto" // Ajustez la hauteur ici
                />
              </div>
              <span className="mt-2 text-white text-md font-semibold">
                ACTION FOR BETTER WORLD
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AMFOHS Projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sahandghavidel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
          <Footer.Copyright
            href="#"
            by="AMFOHS Powered by Royalsoftindustry"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/roylsoft"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={FaWhatsapp} />
            
          </div>
        </div>
      </div>
    </Footer>
  );
}
