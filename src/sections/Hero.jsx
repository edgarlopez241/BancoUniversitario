import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 ">
      <Element>
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Banco Universitario
            </div>
            <h1 className="mb-6 h-1 text-p4 uppercase max-lg:mb-7 max-lg:h-2 max-md:mb-4 max-md:text-5xl max-md:leading-12 hidden sm:block">
              Banca Universitaria al alcanze de tus manos
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 ">
              5 años contigo, El banco Universitario te ofrece soluciones
              financieras personalizadas para estudiantes. Unete a nuestra
              comunidad
            </p>
            <LinkScroll to="" offset={-100} spy smooth>
              <Button to="Productos" icon="/images/zap.svg">
                Prueba
              </Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img src="/images/hero.png" className="size-1230 max-lg:h-auto" />
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Hero;
