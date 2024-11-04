import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <section id="footer" className="bg-zinc-900 p-6 pb-2 text-sm text-zinc-300">
      <footer className="mx-auto mb-10 grid max-w-7xl grid-cols-4 justify-center gap-8">
        <div className="space-y-4 text-center">
          <h3 className="font-bold uppercase tracking-wide text-zinc-100">
            Socialize with BYO
          </h3>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <button className="rounded-full bg-blue-500 px-4 py-2 uppercase text-zinc-100 hover:bg-blue-700">
            Build your own
          </button>
        </div>
        <div className="space-y-2.5">
          <h3 className="font-bold text-zinc-100">Contact us</h3>
          <p>Address: Strada Palas 7A, Iași 700259 RO</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: buildyourown@ecommerce.com</p>
        </div>
        <div className="space-y-2.5">
          <h3 className="font-bold text-zinc-100">Account</h3>
          <p>Create account</p>
          <p>Sign in</p>
        </div>
        <div className="space-y-2.5">
          <h3 className="font-bold text-zinc-100">Resources</h3>
          <p>Help center</p>
          <p>Privacy & terms</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div>
      </footer>

      <p className="text-center text-xs tracking-tight">
        &copy; 2024 Build Your Own. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
