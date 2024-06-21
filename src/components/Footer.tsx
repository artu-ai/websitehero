import React from "react";

export const Footer = () => {
  return (  
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="pb-14 text-center">
        <h3>
          &copy; Artu. Todos los derechos reservados
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/jovenjuanpi"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            GitHub
          </a>
        </h3>
      </section>
    </footer>
  );
};
