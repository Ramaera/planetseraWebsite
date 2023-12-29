import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const colorMe = useSelector((state) => state.colorUs.color);

  return (
    <>
      <div className="flex items-center justify-center p-6 border-solid  rounded-2xl ">
        <div className="mt-20 border-2 border-black rounded-2xl p-4 ">
          <p
            style={{
              color: colorMe,
            }}
            className="font-semibold 	sm:text-5xl text-2xl flex justify-center"
          >
            Privacy Policy
          </p>
          <p className="py-2 font-semibold text-2xl  ">
            Ramaera Industries Limited
          </p>
          <p className="py-2 font-medium">
            “Planetsera”
            <span className="font-normal ml-1">
              is a trademark of Ramaera Industries Limited, a company
              incorporated under the Companies Act, 2013 with its registered and
              corporate office at H-150, Sector-63, Gautam Buddha Nagar, Uttar
              Pradesh, Noida - 201301, INDIA in the course of its business.
            </span>
          </p>
          <p className="py-2 ">
            The Company respects your privacy and values the trust you place in
            it. Set out below is the Company’s ‘Privacy Policy’ which details
            the manner in which information relating to you is collected, used
            and disclosed
          </p>
          <p className="py-2">
            Customer are advised to read and understand our Privacy Policy
            carefully, as by accessing the website/app you agree to be bound by
            the terms and conditions of the Privacy Policy and consent to the
            collection, storage and use of information relating to you as
            provided herein.
          </p>
          <p className="py-2 ">
            If you do not agree with the terms and conditions of our Privacy
            Policy, including in relation to the manner of collection or use of
            your information, please do not use or access the website/app.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Personal identification information
          </h5>
          <p className="py-2">
            We may automatically track certain information about you based upon
            your behavior on the website. We use this information to do internal
            research on our users’ demographics, interests, and behavior to
            better understand, protect and serve our users. This information is
            compiled and analyzed on an aggregated basis. This information may
            include the URL that you just came from (whether this URL is on the
            website or not), which URL you next go to (whether this URL is on
            the website or not), your computer browser information, your IP
            address, and other information associated with your interaction with
            the website.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Non-personal identification information:{" "}
          </h5>
          <p className="py-2">
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means the type of connection to
            our Site, such as the operating system and the Internet service
            providers utilized and other similar information.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            How is information used?{" "}
          </h5>
          <p className="py-2">
            Ramaera Industries will use your personal information to provide
            personalized features to you on the Site and to provide for
            promotional offers to you through the Site and other channels.
            Ramaera Industries will also provide this information to its
            business associates and partners to get in touch with you when
            necessary to provide the services requested by you. Ramaera
            Industries will use this information to preserve transaction history
            as governed by existing law or policy. Ramaera Industries may also
            use contact information internally to direct its efforts for product
            improvement, to contact you as a survey respondent, to notify you if
            you win any contest; and to send you promotional materials from its
            contest sponsors or advertisers. Ramaera Industries will also use
            this information to serve various promotional and advertising
            materials to you via display advertisements through the Google Ad
            network on third party websites. You can opt out of Google Analytics
            for Display Advertising and customize Google Display network ads
            using the Ads Preferences Manager. Information about Customers on an
            aggregate (exlcuding any information that may identify you
            specifically) covering Customer transaction data and Customer
            demographic and location data may be provided to partners of Ramaera
            Industries for the purpose of creating additional features on the
            website, creating appropriate merchandising or creating new products
            and services and conducting marketing research and statistical
            analysis of customer behavior and transactions.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Web browser cookies:
          </h5>
          <p className="py-2">
            Our Site may use "cookies" to enhance User experience. User's web
            browser places cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. User may
            choose to set their web browser to refuse cookies, or to alert the
            Users when cookies are being sent. If they do so, note that some
            parts of the Site may not function properly.
          </p>
          <p>
            How we use collected information: Future Retail Limited may collect
            and use User's personal information for the following purposes:
          </p>
          <p>To improve customer service:</p>
          <p>
            Information provided by Users helps us respond to the customer
            service requests and support needs, more efficiently.
          </p>
          <p>To personalize User experience:</p>
          <p>
            We may use information in the aggregate to understand how our Users
            as a group use the services and resources provided on our Site.
          </p>
          <p>To improve our Site:</p>
          <p>
            We may use feedback provided by the User/s to improve our products
            and services.
          </p>
          <p>To run a promotion, contest, survey or other Site feature.</p>
          <p>
            To send the User/s information they agreed to receive about topics
            of interest to them.
          </p>
          <p>To send periodic emails.</p>
          <p>
            {" "}
            We may use the email address to respond to the inquiries, questions,
            and/or other requests of User/s. If User/s decide/s to opt to be
            part of our mailing list, then the User/s will receive emails about
            company news, updates, related product or service information, etc.
            If at any time the User/s would like to unsubscribe from receiving
            future emails, they may do so by contacting us via our Site.
          </p>
          <p> To run a promotion, contest, survey or other Site feature.</p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Sharing personal information of User/s:{" "}
          </h5>
          <p className="py-2">
            We do not sell, trade, or rent User's personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding User/s with our subsidiaries, our business partners,
            trusted affiliates and advertisers for the purposes outlined above.
          </p>
          <h5
            style={{
              color: colorMe,
            }}
            className=" font-semibold text-xl"
          >
            Policy updates{" "}
          </h5>
          <p className="py-2">
            Ramaera Industries reserves the right to change or update this
            policy at any time. Such changes shall be effective immediately upon
            posting to the Site.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
