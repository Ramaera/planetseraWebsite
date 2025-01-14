import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="flex items-center justify-center sm:p-6 p-3 border-solid  rounded-2xl ">
        <div className="mt-20 border-2 border-[#494747] rounded-2xl sm:p-4 p-3 ">
          <h2
            style={{
              color: colorMe,
            }}
            className="font-semibold	sm:text-5xl text-2xl flex justify-center"
          >
            Terms And Conditions
          </h2>
          <p className="sm:mt-10 mt-5">
            Planetsera is the trademark of Ramaera Industries Limited, and it
            provides Planetsera, which is a provider of online shopping
            facilities, to the public at large. Ramaera Industries Limited is a
            company incorporated under the Companies Act, 2013 and has its
            registered office at H-150, Sector-63, Gautam Buddha Nagar, Uttar
            Pradesh, Noida - 201301, INDIA.
          </p>
          <p className="py-2">
            It is advisable that all registrants on the website
            www.planetsera.com or the mobile application of Ramaera Industries
            accept the terms and conditions, as well as the Privacy Policy and
            agree to the contents therein. If you do not agree/accept the terms
            and conditions, then please do not proceed further. If you proceed
            further, then it shall be deemed acceptance of these terms and
            conditions, and you shall be unconditionally bound by them.
          </p>

          <p className="py-2">
            Rule 3(1) of the Information Technology (Intermediary) Guidelines,
            2011 is the statutory legislation governing the rules, and these are
            in consonance with the same. These form part of the electronic
            record as per the Information Technology Act and its amending
            legislation and provisions. This record is generated by a computer
            system and thus does not require any physical or digital signature.
            The company is not liable to inform registered or non-registered
            users before or after making any amendments to the Terms and
            Conditions. The revised version of the terms and conditions might or
            might not be available on the website instantly.
          </p>
          <p className="py-2">
            The company requires every user to accept the terms and conditions
            in a specified manner before proceeding with the usage of the
            website and the mobile application of the company. Also, the
            continuous usage of the website or the mobile application shall
            affirm the acceptance of the terms and conditions.
          </p>
          <p className="py-2">
            Please read the terms and conditions enlisted below before you use
            the services of the website or the mobile application. The use of
            materials, services, and other information on the website legally
            signifies that you have accepted the terms and conditions of the
            website and the mobile application.
          </p>
          <p className="py-2">
            In case of any clarifications, please feel free to revert at
            info@planetsera.com.
          </p>
          <h2
            style={{
              color: colorMe,
            }}
            className="font-semibold	mt-8 sm:text-xl"
          >
            INTELLECTUAL PROPERTY POLICY
          </h2>
          <p className="py-2">
            This website is the sole and exclusive proprietary right of Ramaera
            Industries Limited. All the intellectual property with respect to
            the products, material, content, concept, and photographs is duly
            protected by the relevant IPR laws and are exclusively owned by the
            company or its subsidiaries or associate companies. The website is
            protected under the Copyright Act as applicable in India and also
            under the international convention to which India is a signatory,
            and thus has worldwide protection under copyright laws in that the
            concept, material, pictures, and any other data available on this
            portal exclusively belongs to the company.
          </p>
          <p className="py-2">
            The company’s name and works, or its service marks/names are
            trademarks owned by the company. The user undertakes not to
            display/use the same in any manner without the written prior
            permission of the company.
          </p>
          <p className="py-2">
            The user is advised not to misuse any IP of the website, content, or
            company in any manner whatsoever. Any misuse by the user shall be
            construed to be a malafide infringement, and the company shall
            enforce its IP rights strictly against the user.
          </p>
          <p className="py-2">
            Any reference to the names, marks, products, or services of third
            parties is merely an advertisement or hyperlink solely provided for
            the purposes of a user friendly customer interface as per the
            requirements of the customer. They do not imply any company
            sponsorship, affiliation, or recommendation between the company and
            such a third party.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
