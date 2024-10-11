import React from "react";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="pb-14 text-center">
        <h3>
          &copy; Artu.AI L.L.C. Todos los derechos reservados | 646-321-0085 | juanpabloramirez.004@gmail.com | 254 Chapman Rd Ste 209, Newark, Delaware 19702
        </h3>
        <div className="flex justify-center mt-4">
          <a href="https://www.aitechsuite.com/tools/22311?ref=featured&v=146" target="_blank" rel="nofollow">
            <img
              width="150"
              src="https://aitsmarketing.s3.amazonaws.com/aits-verified-tool.svg?width=600"
              alt="Verified Tool on AI Tech Suite"
            />
          </a>
        </div>
      </section>
    </footer>
  );
};
