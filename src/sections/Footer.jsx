import { socials } from "../constants/";

const Footer = () => {
  return (
    <footer className="bg-s2">
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <ul>
              <li className="opacity-70">
                Dirección: Av. Universidad, Edificio Banco Universitario, piso
                12, Caracas, Venezuela.
              </li>
              <li className="opacity-70">Teléfono: +58 212-555-5555</li>
              <li className="opacity-70">Fax: +58 212-555-5556</li>
              <li className="opacity-70">
                Correo electrónico: info@bancouniversitario.com.ve
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              edgarlopez241 ©
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end text-white">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
