import React from "react";

// Optional logo: drop a file named gm-logo.jpeg into /public locally and set this to "/gm-logo.jpeg"
const LOGO_URL = "products/GmLogo.jpeg";

// *************************************************************************
// ACTION REQUIRED: REPLACE THIS WITH YOUR LOGO'S ACTUAL URL OR FILE PATH
// When you host the app, this needs to be a public URL or a path relative
// to your public assets directory (e.g., '/images/your-logo.jpg').
// *************************************************************************
const LOGO_SRC_MANUAL = "products/GMlogo2.png";
// Example: If you upload a file named 'my-logo.jpg' to your public folder, use: '/my-logo.jpg'
// *************************************************************************

// --------------------------------------
// Data Store (defines product details for the new pages)
// ALL Images have been reverted to placeholders, except Dameasy for now.
// --------------------------------------
const PRODUCTS = [
  // REMOVED: GM StormLock product
  {
    name: "Dameasy Flood Barriers",
    slug: "dameasy",
    category: "Residential",
    blurb:
      "Trusted residential flood barrier solution with easy setup and proven results.",
    // UPDATED: Main product image is now the first newly uploaded image
    img: "products/DamEasyBarrier(4).jpeg",
    details: {
      description:
        "The Dameasy barrier uses a patented inflatable seal and adjustable width to create a watertight fit in minutes. It requires no permanent fixings and is easily stored when not needed.",
      features: [
        "Adjustable width, no measuring required",
        "Built-in inflatable pump",
        "Fits standard single and double doors",
        "Lightweight and fully reusable",
      ],
      videos: [
        {
          id: "-xdLObsHoZE",
          title: "DamEasy Flood Barrier - Full Installation",
          description:
            "Step-by-step instructions for placing and securing your DamEasy barrier.",
        },
        {
          id: "5vLkyiTzvPk",
          title: "DamEasy Unboxing & Setup",
          description:
            "Watch how quickly the barrier can be unboxed and prepared for deployment.",
        },
        {
          id: "XsJ2h_f36cU",
          title: "1-Minute Flood Protection Demo",
          description:
            "A quick demonstration of the rapid deployment process under a minute.",
        },
      ],
      // UPDATED: All example images use the new, correct file IDs
      exampleImages: [
        {
          title: "Residential Gateway",
          src: "uploaded:DamEasyBarrier(1).jpg-2679b3cd-62dd-4d1f-b8c9-7b555603adeb",
        },
        {
          title: "Home Entry Protection",
          src: "uploaded:DamEasyBarrier(7).jpeg-8429ed2b-a5fa-4f82-bfda-104b8aa8e2e6",
        },
        {
          title: "Driveway Entrance",
          src: "uploaded:DamEasyBarrier(2).jpg-4e8ea8b3-b29c-453b-ba75-9606e865d0ab",
        },
        {
          title: "Garage Opening Covered",
          src: "uploaded:DamEasyBarrier(10).jpg-3b236d9a-5104-48ad-b36e-b51f825de282",
        },
        {
          title: "Storefront Door",
          src: "uploaded:DamEasyBarrier(3).jpeg-65ffde87-b9b8-4217-99b8-bbabec35b2d3",
        },
        {
          title: "Commercial Frontage",
          src: "uploaded:DamEasyBarrier(5).jpeg-5b362a5a-cf36-424b-a287-a279fc4ce1af",
        },
        {
          title: "Patio Access Protection",
          src: "uploaded:DamEasyBarrier(6).jpg-f5d3381-ba79-4ea1-b6ae-3a67df1560ff",
        },
        {
          title: "Waterfront Property",
          src: "uploaded:DamEasyBarrier(9).jpg-beeb8cd1-29c9-4849-aeea-3c0d3cfb665",
        },
        {
          title: "Entryway Coverage",
          src: "uploaded:DamEasyBarrier(4).jpeg-3af2e4db-3658-43f9-afb0-a2dc35130d8",
        },
        {
          title: "Business Entrance",
          src: "uploaded:DamEasyBarrier(8).jpeg-a87029e9-4986-4660-a2ca-cb9e2c514327",
        },
      ],
    },
  },
  {
    name: "Titan Flood Barriers",
    slug: "titan",
    category: "Commercial",
    blurb:
      "Heavy-duty modular panels for storefronts, warehouses, and commercial entries.",
    img: "https://placehold.co/1600x1200/1E293B/FFFFFF?text=Titan+Barrier", // Placeholder Image
    details: {
      description:
        "Designed for commercial applications, Titan barriers are modular and can be linked to cover massive spans. They are constructed from high-strength aluminum and are rated for the highest flood levels.",
      features: [
        "Modular design for wide openings",
        "Heavy-duty aluminum construction",
        "Ideal for commercial & industrial use",
        "Can be stacked for extra height",
      ],
      videos: [
        {
          id: "titan-install-guide",
          title: "Titan Barrier Deployment",
          description: "How to deploy the commercial Titan modular system.",
        },
      ],
      exampleImages: [
        {
          title: "Warehouse Entry Barrier",
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Warehouse+Barrier",
        },
        {
          title: "Storefront Panel System",
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Storefront+Panel",
        },
        {
          title: "Commercial Gate Coverage",
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Commercial+Gate",
        },
      ],
    },
  },
];

// --------------------------------------
// Policy Data Store (UPDATED WITH USER'S CONTENT)
// --------------------------------------
const POLICY_PAGES = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    content: (
      <>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions is committed to protecting and respecting your
          privacy. This Privacy Policy (this “Policy”) describes how **GM Flood
          Solutions** collects, uses, and discloses personal information of
          users of our services, including our Website (our “Site”). Please read
          this Privacy Policy carefully.
        </p>
        <p className="mt-4 text-slate-700">
          By using our Site, you agree to the terms of this Policy. If you do
          not agree with the terms of this Policy, do not use our Site. Your use
          of our Site for the limited and exclusive purpose of reviewing this
          Policy does not constitute your agreement to this Policy unless you
          make further use of our Site. This Policy may be updated from time to
          time.
        </p>
        <p className="mt-4 text-slate-700">This Policy describes:</p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>The personal information GM Flood Solutions collects</li>
          <li>How GM Flood Solutions collects such information</li>
          <li>How such information is used</li>
          <li>How such information is shared</li>
          <li>How you can contact GM Flood Solutions</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          INFORMATION GM FLOOD SOLUTIONS COLLECTS
        </h3>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions and our third-party service providers may collect
          and process the following types of personal information about you:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Social network profile information</li>
          <li>
            Information we collect when you use our Site, such as your domain
            name, Internet protocol (IP) address, mobile device model, Internet
            service provider, Site access times, websites that referred you to
            us and web pages within our Site that you visit
          </li>
          <li>
            Information you communicate to us through our Site, our social media
            pages or through other means
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          HOW GM FLOOD SOLUTIONS COLLECTS INFORMATION
        </h3>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions and our third-party service providers may collect
          personal information as follows:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>
            We may collect information you provide when you use our Site,
            including when you fill in forms on our Site, subscribe to any of
            our services, complete a survey on our Site, post material to our
            Site or download content from our Site.
          </li>
          <li>
            We may collect information you provide when you contact us by phone,
            email, text message or messaging application on social media.
          </li>
          <li>
            We may collect social network profile information that you have made
            publicly available through your social network account settings if
            you choose to access our social media pages or connect or otherwise
            link to our Site with your own social media page. We also may
            collect customers’ and public feedback on social media.
          </li>
          <li>
            Our Site may use cookies, tracking pixels and other similar
            technologies to collect information about visitors to our Site. A
            cookie is a small amount of data that is sent to your browser from a
            Web server and stored on your computer's hard drive. A tracking
            pixel is a graphic that is loaded when a user visits a website or
            opens an email and is used to track certain user activities.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          HOW GM FLOOD SOLUTIONS USES THE INFORMATION COLLECTED
        </h3>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions and our third-party service providers may use
          information collected to:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>Operate, maintain and improve our Site.</li>
          <li>
            Conduct analytics to help us better understand our customers and
            improve our products and services.
          </li>
          <li>Process and manage purchases made by you.</li>
          <li>
            Respond to your customer service inquiries, post your comments
            related to our products and services on our social network pages and
            take other actions in response to your questions, comments or Site
            activity.
          </li>
          <li>
            Communicate with you about special offers, services and promotions
            that may be of interest to you.
          </li>
          <li>
            Help us develop, customize, deliver, support and improve our
            services.
          </li>
          <li>
            Allow you to participate in interactive features of our service when
            you choose to do so.
          </li>
          <li>Notify you about changes to our service.</li>
          <li>
            Conduct market research in order to serve targeted advertisements.
          </li>
        </ul>

        <p className="mt-4 text-slate-700">
          GM Flood Solutions and our third-party service providers may use the
          information collected from cookies, tracking pixels and other similar
          technologies to target advertising to you personally, through online
          and offline methods including email, display media, video media and
          direct mail. You may opt out of receiving direct mail from us or our
          third-party service providers by clicking{" "}
          <a href="#/do-not-share" className="text-sky-600 underline">
            here
          </a>
          . For detailed information on the cookies we use and the purposes for
          which we use them see our{" "}
          <a href="#/manage-consent" className="text-sky-600 underline">
            Cookie Policy
          </a>
          .
        </p>
        <p className="mt-4 text-slate-700">
          When you log in to or visit our Site, your IP address may be combined
          with other de-identified data (such as a hashed, non-readable email or
          postal address) and such information may be used by third-party
          service providers to send ads and materials to you based on your
          preferences, interests and attributes. Such information may also be
          combined with aggregate information collected from other users or
          sources and used by third-party service providers to conduct market
          research and to better target their advertising. Although you may not
          opt out of receiving online advertisements generally, you may find out
          how to opt out of having your online behavior collected by third-party
          advertisers for advertising purposes. You may visit each ad network's
          website individually to opt-out and review their privacy policies, or
          you may visit the Digital Advertising Alliance’s opt-out website at{" "}
          <a
            href="http://www.aboutads.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 underline"
          >
            http://www.aboutads.info/
          </a>{" "}
          or the Network Advertising Initiative’s opt-out website at{" "}
          <a
            href="http://networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 underline"
          >
            http://networkadvertising.org/
          </a>
          .
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          HOW GM FLOOD SOLUTIONS DISCLOSES THE INFORMATION COLLECTED
        </h3>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions and our third-party service providers may share
          your personal information under the following circumstances:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>
            We may share your personal information with any member of our group
            of companies (our subsidiaries and our ultimate parent company and
            its subsidiaries).
          </li>
          <li>
            We may share your personal information with companies that provide
            services to us, such as credit card processors, website hosts, email
            vendors and other companies that help us provide our services or our
            Site.
          </li>
          <li>
            We may disclose your personal information in response to legal
            process, when required to comply with laws, to combat fraudulent or
            criminal activity, to enforce our agreements, corporate policies and
            the terms of use of our Site, and to protect the rights, property
            and safety of our business, our employees, agents, customers or
            others.
          </li>
          <li>
            We may share technical data that we collect about your browsing
            habits and your device (such as data collected via our cookies,
            tracking pixels and similar technologies, as discussed above) with
            third-party service providers and other advertising companies. This
            enables them and us to better target ads to you and other consumers.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          HOW TO CONTACT GM FLOOD SOLUTIONS
        </h3>
        <p className="mt-4 text-slate-700">
          If you have any questions, comments or requests regarding this Policy,
          please contact us using the contact information shown on our Site, or
          call us directly at **(727) 793-4584**.
        </p>
        <p className="mt-8 reorganize text-sm text-slate-500">
          Last Updated: October 2025 (Revising August 2018 content)
        </p>
      </>
    ),
  },
  {
    slug: "manage-consent",
    title: "Cookie Policy",
    content: (
      <>
        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          What are Cookies?
        </h3>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions and our business partners collect information about
          your use of our website through cookies. **Cookies** are information
          files stored on your computer, tablet or smartphone that help websites
          remember who you are and information about your visit. Cookies can
          help to display the information on a website in a way that matches
          your interests. Most major websites use cookies.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          What Cookies are Used on the GM Flood Solutions Website?
        </h3>
        <p className="mt-4 text-slate-700">
          The cookies and other tracking technologies GM Flood Solutions and our
          business partners use on this website are broadly grouped into the
          following categories:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>
            **Essential** – Some of the cookies on our website are essential for
            us to be able to provide you with a service you have requested.
            These cookies are required to enable our website to work correctly
            or to comply with applicable law – for example, to allow you to
            navigate our website and use essential features or to ensure that
            our website is secure. You may not be able to use our website
            without these cookies.
          </li>
          <li>
            **Analytics** – We use analytics cookies to help us understand how
            users engage with our website. An example is counting the number of
            different people coming to our website or using a particular
            feature, rather than the total number of times the site or feature
            is used. We would find it difficult to analyze how well our website
            was performing and improve it without these cookies.
          </li>
          <li>
            **Functional** – We use cookies to improve your experience by
            remembering your preferences so we know how you like to use our
            website. Examples of this would be remembering you so that you are
            served with the same content or to remember you when you come back
            to the site.
          </li>
          <li>
            **Social** – We use third-party cookies to allow you to share
            content directly on social networking sites like Facebook and X
            (formerly known as Twitter) to improve your experience by
            remembering your preferences so we know how you like to use our
            website – for example, if you wanted to “like” or “tweet” about us
            or our products or services.
          </li>
          <li>
            **Interest-Based Advertising** – You will have noticed that when you
            visit websites you will be shown ads for products and services you
            may wish to buy. To try and ensure that the ads you see are relevant
            to you, third-party cookies may be used to collect information about
            the types of things that interest you -- for example, websites you
            visit and the geography that you are based in. Having these cookies
            does not increase the number of ads you will be shown, but simply
            makes the ads you see more relevant.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          How can I Reject or Opt-Out of Receiving Cookies?
        </h3>
        <p className="mt-4 text-slate-700">
          If you do not wish cookies to be stored on your machine, you can
          delete the cookies from your browser. Most browsers also allow you to
          prevent all or some cookies being stored on your machine in the
          future. For more information on how to delete or disable cookies from
          your browser please use the “help” function within your browser or
          alternatively visit{" "}
          <a
            href="http://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 underline"
          >
            http://www.allaboutcookies.org
          </a>
          .
        </p>
        <p className="mt-4 text-slate-700">
          Please note that we can’t always control third-party cookies stored on
          your machine from our website and where this is the case you will need
          to visit the relevant third party’s website directly to manage cookies
          stored on your machine by them.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Third-Party Cookies (Interest-Based Advertising)
        </h3>
        <p className="mt-4 text-slate-700">
          Some of the cookies described above are stored on your machine by
          third parties when you use our website. Third parties may also read
          cookies on your browser to collect information or to serve content or
          advertisements to you. For more information on these cookies and how
          to disable them, please see the Internet Advertising Bureau website at{" "}
          <a
            href="http://www.youronlinechoices.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 underline"
          >
            http://www.youronlinechoices.com/
          </a>{" "}
          where you will be able to opt-out of receiving Interest-Based
          Advertising cookies from some third parties.
        </p>
        <div className="mt-6 reorganize p-4 border rounded-lg bg-sky-50 border-sky-200">
          <h4 className="font-semibold text-sky-800 mb-2">
            Third-Party Ad Network Opt-Out Links:
          </h4>
          <ul className="space-y-1 text-sm reorganize text-sky-700">
            <li>
              **Google:** For more information and to opt out:{" "}
              <a
                href="https://policies.google.com/privacy#infochoices"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://policies.google.com/privacy#infochoices
              </a>
            </li>
            <li>
              **Microsoft (Bing):** For more information and to opt out:{" "}
              <a
                href="https://choice.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://choice.microsoft.com
              </a>
            </li>
            <li>
              **Meta (formerly Facebook):** For more information and to opt out:{" "}
              <a
                href="http://www.facebook.com/about/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                http://www.facebook.com/about/privacy/
              </a>
            </li>
            <li>
              **iPromote:** More information and to opt out:{" "}
              <a
                href="http://www.ipromote.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                http://www.ipromote.com/privacy-policy/
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-8 reorganize text-sm text-slate-500">
          Last Changed: July 8, 2024.
        </p>
      </>
    ),
  },
  {
    slug: "do-not-share",
    title: "Do Not Share My Personal Information",
    content: (
      <>
        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Opt-Out from the Sharing of Personal Information
        </h3>
        <p className="mt-4 text-slate-700">
          Residents of certain states (including California, Virginia, Colorado,
          Connecticut and Utah, Texas and Oregon) have the right under certain
          circumstances to opt out from the sale or sharing of their personal
          information for purposes of targeting advertising to such persons.
        </p>
        <p className="mt-4 text-slate-700">
          The use of certain third-party cookies and other tracking devices on
          this site may be considered “sharing” under those states’ laws. If you
          are a resident of any of those states and you would like to opt out
          from the “sharing” of personal information, please visit the sites
          listed in our{" "}
          <a href="#/manage-consent" className="text-sky-600 underline">
            Cookie Policy
          </a>{" "}
          section for third-party opt-outs.
        </p>
        <div className="mt-6 p-4 border rounded-lg bg-yellow-50 border-yellow-200">
          <p className="text-lg font-semibold text-yellow-800">
            To submit an opt-out request or for assistance, please call:
          </p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">
            <a href="tel:7277934584" className="hover:text-yellow-700">
              (727) 793-4584
            </a>
          </p>
        </div>
      </>
    ),
  },
  {
    slug: "conditions-of-use",
    title: "Conditions of Use (Terms of Service)",
    content: (
      <>
        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          About These Conditions
        </h3>
        <p className="mt-4 text-slate-700">
          This website promotes the business referred to as **GM Flood
          Solutions**. Throughout these conditions, **GM Flood Solutions** will
          be referred to as **‘we’** and/or **’our’**.
        </p>
        <p className="mt-4 text-slate-700">
          If you access or use any part of this website you agree to these
          conditions. If you do not want to agree to these conditions, do not
          access or use this website. We may change these conditions at any time
          without giving you notice. By continuing to use the website you agree
          to all the changes we make.
        </p>
        <p className="mt-4 text-slate-700">
          We collect and use information in line with our{" "}
          <a href="#/privacy-policy" className="text-sky-600 underline">
            Privacy Policy
          </a>
          . By using this website, you agree to the way in which we collect and
          use your information.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Intellectual Property Rights
        </h3>
        <p className="mt-4 text-slate-700">
          A wide range of intellectual property rights are used in and relating
          to this website, including:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>The trademarks and logos;</li>
          <li>
            The design, text, graphics and other content of the web pages on
            this website, together with all the web addresses associated with
            those web pages; and
          </li>
          <li>All the software used in relation to this website.</li>
        </ul>
        <p className="mt-4 text-slate-700 font-semibold">
          GM Flood Solutions is the owner or the authorized licensee of these
          intellectual property rights. You agree not to copy any content
          (including images) on this website without our consent.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Restrictions on Use
        </h3>
        <p className="mt-4 text-slate-700">
          You cannot use this website for any unlawful purpose, to send spam, to
          harm or harass another person, or in a way that is offensive,
          unacceptable, or damaging to GM Flood Solutions, our customers, or
          suppliers. Specifically, you may not:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>
            Create, check, confirm, update or amend your own or someone else's
            databases, records, or customer lists.
          </li>
          <li>Tamper with, update or change any part of the website.</li>
          <li>
            Use any automated means to monitor or copy the website or its
            content without permission.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          User Content and Permissions
        </h3>
        <p className="mt-4 text-slate-700">
          If you provide any material to this website (e.g., ratings, reviews,
          comments, articles, or uploaded content) (each “User Content”), you
          agree to grant GM Flood Solutions permission, irrevocably and free of
          charge, to use User Content (including altering and adapting it) in
          any media worldwide, for our own marketing, research, and promotional
          activities and our internal business purposes.
        </p>
        <p className="mt-4 text-slate-700">
          **You own your User Content at all times**, and you continue to have
          the right to use it in any way you choose. By providing User Content,
          you confirm it is your own original work, will not contain anything
          illegal, harmful, or defamatory, and does not contain any virus or
          other damaging code.
        </p>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions has no obligation to publish your User Content and
          retains the right to remove any User Content at any time and for any
          reason. We do not edit, pre-vet, or review any User Content displayed
          on the Website.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Message Scanning
        </h3>
        <p className="mt-4 text-slate-700">
          This website is provided by Hibu Inc. ("Hibu"). Hibu shall have the
          right to scan messages sent using the contact form on this website
          manually and automatically and to store such messages. Any personal
          data you include in such messages may be used by Hibu for purposes
          associated with provision of this website and services, disclosed
          where required by law, and used where any of your actions have
          breached these Conditions of Use.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Disclaimers and Limits to Our Liability
        </h3>
        <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
          <li>
            **You use the website at your own risk.** You should not rely on the
            website for advice.
          </li>
          <li>
            As far as the relevant laws allow, GM Flood Solutions does not
            guarantee that there will be no problems with how you use the
            website or that the server is free of viruses or other harmful
            programs.
          </li>
          <li>
            Under no circumstances will GM Flood Solutions be liable for any
            loss of profits, business, goodwill, or corruption to information.
          </li>
          <li>
            If we do not keep to these conditions, we will only be liable for
            losses you have suffered as a **direct result**. We are not liable
            for any other losses resulting from external factors, theft,
            viruses, or relying on external, linked websites.
          </li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Governing Law
        </h3>
        <p className="mt-4 text-slate-700">
          These conditions make up the whole agreement between you and GM Flood
          Solutions in how you use the website. The laws of the **State of New
          York** (without reference to its conflict of laws principles) apply to
          your use of the website and these conditions. By using the website you
          agree that the laws of the State of New York will apply to everything
          relating to you using the website.
        </p>
        <p className="mt-8 reorganize text-sm text-slate-500">
          Revised April 2021. © All rights reserved.
        </p>
      </>
    ),
  },
  {
    slug: "take-down-policy",
    title: "Notice and Take Down Policy",
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-semibold reorganize text-slate-900">
          GM Flood Solutions Defamation, Copyright and Trademark Infringement
          Policy
        </h2>
        <p className="mt-4 text-slate-700">
          As a responsible website publisher, **GM Flood Solutions** supports
          the protection of your reputation and the protection of your
          intellectual property rights. We do not edit, pre-vet, or review any
          third-party material displayed on this website. We operate a **notice
          and take down procedure** regarding such material.
        </p>
        <p className="mt-4 text-slate-700 font-semibold">
          **Please be aware that providing false or misleading information in
          the notification of claim may result in civil and/or criminal
          liability.**
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Notice and Procedure for Claims of Defamation
        </h3>
        <p className="mt-4 text-slate-700">
          If you believe that any content on this website contains statements
          that are defamatory to you, please email our Designated Agent:
          **inappropriatecontent@hibu.com**.
        </p>
        <p className="mt-4 text-slate-700">
          Your written notification must include: your contact information,
          identification and location of the defamatory content, a statement as
          to why the content is untrue and damaging to you, and a good faith
          statement, submitted under the penalty of perjury, that the
          information is accurate and true.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Notice and Procedure for Claims of Copyright Infringement
        </h3>
        <p className="mt-4 text-slate-700">
          If you believe that your copyright has been infringed on this website,
          written notification must be submitted to the following Designated
          Agent:
        </p>
        <div className="mt-3 reorganize p-4 border rounded-lg bg-slate-50 border-slate-200 text-slate-700">
          <p className="font-semibold">GM Flood Solutions Legal Department</p>
          <p>
            **Designated Email:**{" "}
            <a
              href="mailto:inappropriatecontent@hibu.com"
              className="underline"
            >
              inappropriatecontent@hibu.com
            </a>
          </p>
          <p>
            **Mailing Address:** Hibu Inc. Legal Department, P.O. Box 354, East
            Meadow, New York 11554
          </p>
        </div>
        <p className="mt-4 text-slate-700">
          To be effective, the notification must include: a physical or
          electronic signature of the copyright owner's representative,
          identification of the copyrighted work and the infringing material,
          sufficient contact information, and statements of good faith belief
          and accuracy, made under penalty of perjury.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Notice and Procedure for Claims of Trademark Infringement
        </h3>
        <p className="mt-4 text-slate-700">
          If you believe that any content on this website has infringed your
          trademark, please email our Designated Agent:
          **inappropriatecontent@hibu.com**.
        </p>
        <p className="mt-4 text-slate-700">
          Your written notification must include: identification of the
          trademark claimed to be infringed, identification of all the
          infringing material, sufficient contact information, and statements of
          good faith belief and accuracy, made under penalty of perjury.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Repeat Infringers
        </h3>
        <p className="mt-4 text-slate-700">
          It is our policy in appropriate circumstances to disable and/or
          terminate the accounts of users who are repeat infringers.
        </p>
        <p className="mt-8 reorganize text-sm text-slate-500">
          Last Updated: May 2018. © All rights reserved.
        </p>
      </>
    ),
  },
  {
    slug: "accessibility-policy",
    title: "Website Accessibility Policy",
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-semibold reorganize text-slate-900">
          GM Flood Solutions Website Accessibility Statement
        </h2>
        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          GM Flood Solutions Values Digital Inclusion
        </h3>
        <p className="mt-4 text-slate-700">
          **GM Flood Solutions** is committed to providing a fully accessible
          and optimized experience for all of our website visitors. We strive to
          ensure that our website is usable by people with disabilities,
          including those using assistive technologies such as screen readers or
          magnifiers.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Our Commitment to Standards
        </h3>
        <p className="mt-4 text-slate-700">
          GM Flood Solutions endeavors to increase conformance with the **Web
          Content Accessibility Guidelines (WCAG) 2.2, Level AA** Success
          Criteria. We are continually working to improve the user experience
          for everyone and applying the relevant accessibility standards to our
          digital presence.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Third-Party Sites
        </h3>
        <p className="mt-4 text-slate-700">
          Throughout this website, we may use different third-party websites
          such as Facebook, Google Maps, X, and YouTube to spread news and
          information about our products and services. These websites are not
          controlled by GM Flood Solutions and may present challenges for
          individuals with disabilities that we are not able to control or
          remedy.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">Feedback</h3>
        <p className="mt-4 text-slate-700">
          Notice an accessibility barrier? We welcome your feedback on the
          accessibility of our website. Please let us know if you encounter any
          barriers by contacting us directly.
        </p>
        <div className="mt-6 reorganize p-4 border rounded-lg bg-sky-50 border-sky-200">
          <p className="text-lg font-semibold text-sky-800">
            Report an issue or request assistance:
          </p>
          <p className="text-xl font-bold text-sky-900 mt-2">
            <a href="tel:7277934584" className="hover:text-sky-700">
              (727) 793-4584
            </a>
          </p>
        </div>
        <p className="mt-8 reorganize text-sm text-slate-500">
          Last Updated: October 2025.
        </p>
      </>
    ),
  },
];

// --------------------------------------
// Local icons
// --------------------------------------
function StarSolid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118L10.5 13.348a1 1 0 00-1.175 0L6.615 16.283c-.784.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.463a1 1 0 00.95-.69l1.068-3.293z"
      />
    </svg>
  );
}

function CheckBadge({ className = "" }: { className?: string }) {
  // Green circle with white checkmark
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <circle cx="10" cy="10" r="9" fill="#10B981" />
      <path
        d="M6.5 10.2l2.2 2.2 4.8-5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle({ className = "" }: { className?: string }) {
  // Simple checkmark for features list
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.522a1.5 1.5 0 01-2.122 0L9 10.879 7.265 9.143a1.5 1.5 0 012.122-2.122l.535.535 1.85-1.85a1.5 1.5 0 112.122 2.122z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// NEW: Solid circle bullet point (Used as a general icon and now replaces PhoneIcon)
function BulletSolid({ className = "" }: { className?: string }) {
  // Simple solid circle bullet point
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <circle cx="10" cy="10" r="4" />
    </svg>
  );
}

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M11.77 15.23a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 1.06L8.81 10l3.96 3.97a.75.75 0 010 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// NEW: Clock icon
function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// --------------------------------------
// Tiny UI primitives
// --------------------------------------
function Button({
  asChild = false,
  children,
  variant = "solid",
  size = "md",
  className = "",
  disabled = false, // Added disabled prop
  ...props
}: {
  asChild?: boolean;
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
  disabled?: boolean;
  [k: string]: any;
}) {
  const base =
    "inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"; // Added disabled styles
  const sizes =
    size === "lg"
      ? "px-5 py-3 text-sm rounded-2xl"
      : "px-4 reorganize py-2 text-sm rounded-xl";
  const variants =
    variant === "outline"
      ? "border border-slate-300 bg-white reorganize text-slate-700 hover:bg-slate-50"
      : "bg-sky-600 reorganize text-white hover:bg-sky-700";
  const cls = `${base} ${sizes} ${variants} ${className}`.trim();

  const kids = React.Children.toArray(children).filter(Boolean);
  if (asChild && kids.length && React.isValidElement(kids[0])) {
    const merged = `${(
      (kids[0] as any).props.className || ""
    ).trim()} ${cls}`.trim();
    return React.cloneElement(kids[0] as any, {
      ...props,
      className: merged,
      disabled,
    });
  }
  const Tag: any = asChild ? "a" : "button";
  return (
    <Tag {...props} className={cls} disabled={disabled}>
      {kids.length ? kids : "Button"}
    </Tag>
  );
}

function Card({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`rounded-2xl bg-white shadow-md ${className}`}>
      {children}
    </div>
  );
}
function CardHeader({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function CardTitle({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="text-lg reorganize font-semibold text-slate-900">
      {children}
    </h3>
  );
}
function CardContent({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function Badge({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-sky-100 reorganize text-sky-700 px-3 reorganize py-1 reorganize text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

// --------------------------------------
// Reviews header (unchanged)
// --------------------------------------
function ReviewsHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center items-center gap-2 reorganize text-lg font-semibold">
        <span className="flex">
          {[0, 1, 2, 3, 4].map((n) => (
            <StarSolid key={n} className="h-5 w-5 text-yellow-400" />
          ))}
        </span>
        <span className="text-slate-800 reorganize font-semibold">4.8/5</span>
        <span className="text-slate-500 reorganize text-sm">
          Trusted by over 2,000 Florida homeowners
        </span>
      </div>

      <h2 className="mt-3 reorganize text-2xl md:text-3xl font-semibold reorganize text-slate-900">
        Real Protection. Real Results.
      </h2>

      <p className="mt-2 text-slate-600 reorganize text-sm md:text-base">
        Here’s what customers are saying about the Dam Easy Flood Barriers we
        install. <br />
        <span className="text-xs text-slate-500">
          (Reviews courtesy of Dam Easy Flood Barriers' official website.)
        </span>
      </p>
    </div>
  );
}
// --------------------------------------
// Reviews Carousel (unchanged)
// --------------------------------------
const CARD = 360; // px
const GAP = 20; // px
const STEP = CARD + GAP; // px to move per click

function ReviewCard({
  data,
}: {
  data: {
    name: string;
    title: string;
    review: string;
    experience: string;
    photo?: string;
  };
}) {
  return (
    <div className="snap-center flex-none w-[360px] max-w-full select-none">
      <Card className="shadow-md">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-1 mb-3" aria-hidden>
            {[0, 1, 2, 3, 4].map((n) => (
              <StarSolid key={n} className="h-4 w-4 text-yellow-400" />
            ))}
          </div>
          <h3 className="text-lg reorganize font-semibold text-slate-900">
            {data.title}
          </h3>
          <p className="mt-3 reorganize text-slate-700">{data.review}</p>
          <p className="mt-3 reorganize text-slate-600 italic">
            {data.experience}
          </p>
          <div className="mt-5 reorganize flex items-center justify-between reorganize text-sm">
            <div className="flex items-center gap-2">
              {data.photo ? (
                <img
                  src={data.photo}
                  alt={data.name + " photo"}
                  className="h-8 w-8 rounded-full object-cover border border-slate-200 hidden md:block"
                />
              ) : null}
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 reorganize py-1 text-emerald-700 text-xs font-medium">
                <CheckBadge className="h-4 w-4" />
                Verified customer
              </span>
              <span className="text-slate-500">· {data.name}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ReviewCarousel() {
  const reviews = [
    {
      name: "Darrin J",
      title: "Top quality and excellent support",
      review:
        "We purchased 9 of the Easy Dams for our home in Florida and installed them in early July. The team was responsive and professional from start to finish. We received a damaged box, but they immediately sent a replacement seal, no questions asked. The barriers fit perfectly, and their instructional videos were very helpful.",
      experience:
        "Overall: Excellent experience from order to installation—our home feels secure now.",
    },
    {
      name: "Colleen O'Keefe-Safir",
      title: "Peace of mind for Central Florida floods",
      review:
        "I live near a creek that could potentially flood in central Florida. I purchased the barriers for my doors and garage entry, and they’ve given me the greatest peace of mind. The installation was simple and I feel safer knowing they’re ready whenever heavy rains come.",
      experience: "Overall: Worth every penny for the peace of mind.",
    },
    {
      name: "Frank Corso",
      title: "Protection that works on the Intracoastal",
      review:
        "I’m in North East Florida on the Intracoastal Waterway and used the online calculator to determine the best fit. I’ve had the barriers up twice during high-tide events and they performed perfectly. Communication was great and the materials are solid.",
      experience: "Overall: They worked exactly as promised, no leaks.",
    },
    {
      name: "Tod Trousdell",
      title: "St. Augustine tested—passed with flying colors",
      review:
        "Our home in St. Augustine flooded twice last year. After that, we installed barriers, and when another major storm came, the system worked beautifully. The setup was quick, the fit was snug, and our entryways stayed completely dry.",
      experience:
        "Overall: Saved us from another messy cleanup—couldn’t be happier.",
    },
    {
      name: "John H. (Tampa, FL)",
      title: "Perfect for hurricane prep",
      review:
        "After seeing floodwaters reach our doorstep during Ian, I bought two barriers for our front and back doors. They were easy to install and worked perfectly during the next heavy storm. The peace of mind is priceless.",
      experience: "Overall: Simple, fast, and effective protection.",
    },
    {
      name: "Maria S. (Miami, FL)",
      title: "Reliable protection year after year",
      review:
        "We’ve had our barriers for over a year and they’ve already proven themselves twice during tropical storms. We store them in the garage and can set them up in minutes.",
      experience: "Overall: Dependable protection every season.",
    },
  ];

  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = React.useState(false);
  const [auto, setAuto] = React.useState(true);

  const scrollByStep = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const to = el.scrollLeft + dir * STEP;
    el.scrollTo({ left: to, behavior: "smooth" });
  };

  React.useEffect(() => {
    if (!auto || isHover) return;
    const t = setInterval(() => scrollByStep(1), 6000);
    return () => clearInterval(t);
  }, [auto, isHover]);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = () => setAuto(false);
    const onTouchStart = () => setAuto(false);
    const onTouchEnd = () => setTimeout(() => setAuto(true), 4000);
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="mt-10">
      <div className="relative mx-auto w-full">
        <div
          ref={scrollerRef}
          className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="flex items-stretch gap-5 px-4 md:px-0">
            {reviews.map((r, j) => (
              <ReviewCard key={j} data={r} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-2 right-2 flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => scrollByStep(-1)}
            className="pointer-events-auto h-9 w-9 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm grid place-items-center hover:bg-white"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
              <path
                fill="currentColor"
                d="M12.79 15.53a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06L8.81 10l3.98 3.97a.75.75 0 010 1.06z"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => scrollByStep(1)}
            className="pointer-events-auto h-9 w-9 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm grid place-items-center hover:bg-white"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
              <path
                fill="currentColor"
                d="M7.21 4.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06L11.19 10 7.21 6.03a.75.75 0 010-1.06z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------
// Component: Header (Refactored)
// --------------------------------------
function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur reorganize bg-white/80 border-b reorganize border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center shadow-sm ring-1 ring-slate-200 overflow-hidden">
            {LOGO_URL ? (
              <img
                src={LOGO_URL}
                alt="GM Flood Solutions logo"
                className="h-full w-full object-contain reorganize p-1"
              />
            ) : (
              <span className="text-[10px] reorganize font-bold reorganize text-sky-700">
                GM
              </span>
            )}
          </div>
          <div className="leading-tight">
            <p className="font-semibold reorganize tracking-tight">
              GM Flood Solutions
            </p>
            {/* Removed: <p className="text-xs text-slate-500 -mt-0.5">Reusable Flood Barriers</p> */}
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 reorganize text-sm text-slate-600">
          <a href="#products" className="hover:text-slate-900 cursor-pointer">
            Products
          </a>
          <a href="#reviews" className="hover:text-slate-900 cursor-pointer">
            Reviews
          </a>
          <a href="#faq" className="hover:text-slate-900 cursor-pointer">
            FAQ
          </a>
          {/* NEW CONTACT LINK */}
          <a href="#contact" className="hover:text-slate-900 cursor-pointer">
            Contact
          </a>
        </nav>
        {/* UPDATED: Link to the new QuoteFormPage */}
        <Button asChild className="rounded-xl">
          <a href="#/quote">Get a Quote</a>
        </Button>
      </div>
    </header>
  );
}

// --------------------------------------
// Component: Footer (Refactored & Updated)
// --------------------------------------
function Footer() {
  // Array of link objects now references the POLICY_PAGES structure
  const policyLinks = POLICY_PAGES.map((p) => ({
    text: p.title,
    href: `#/${p.slug}`,
  }));

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col items-center justify-between gap-6">
        {/* 1. Policy Links Row */}
        <div className="text-center">
          <nav className="flex flex-wrap items-center justify-center text-xs md:text-sm text-slate-600 gap-x-4 gap-y-2">
            {policyLinks.map((link, index) => (
              <React.Fragment key={link.text}>
                <a
                  href={link.href}
                  className="hover:text-sky-700 transition font-medium"
                >
                  {link.text}
                </a>
                {/* Separator only if not the last item */}
                {index < policyLinks.length - 1 && (
                  <span className="text-slate-300 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* 2. Brand and Copyright Row */}
        <div className="w-full h-[1px] bg-slate-100 hidden sm:block" />

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          {/* Left: Brand Name */}
          <div className="flex items-center gap-3 order-2 md:order-1">
            <div className="h-8 w-8 rounded-md bg-slate-100 reorganize grid place-items-center ring-1 ring-slate-200">
              <span className="text-[10px] reorganize font-bold text-sky-700">
                GM
              </span>
            </div>
            <span className="font-semibold reorganize tracking-tight">
              GM Flood Solutions
            </span>
          </div>

          {/* Center/Right: Full Copyright Notice */}
          <div className="text-xs text-slate-500 order-1 md:order-2">
            <p className="mb-2 md:mb-0">
              © 2025 The content on this website is owned by us and our
              licensors. Do not copy any content (including images) without our
              consent.
            </p>
            <p className="text-sm reorganize text-slate-800 font-medium">
              © 2025 GM Flood Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --------------------------------------
// NEW Component: Policy Page (Reusable)
// --------------------------------------
function PolicyPage({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white reorganize text-slate-900">
      <Header />
      <main className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <Button asChild variant="outline" className="rounded-xl mb-6">
            <a href="#/">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </a>
          </Button>
          <Card className="shadow-xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-semibold reorganize text-slate-900 border-b pb-4">
              {title}
            </h1>
            <div className="mt-6 reorganize text-base leading-relaxed">
              {content}
            </div>
            <p className="mt-10 reorganize text-sm text-red-700 bg-red-50 p-3 rounded-lg border border-red-300">
              **NOTE:** This legal content was provided by the site owner and
              should be reviewed periodically for compliance with applicable
              laws.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// --------------------------------------
// NEW Component: Video Carousel for Installation (UPDATED)
// --------------------------------------
function VideoCarousel({
  videos,
  productName,
}: {
  videos: { id: string; title: string; description: string }[];
  productName: string;
}) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="pt-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl reorganize font-semibold text-slate-900">
          Yes, It Really Is That Dam Easy!
        </h3>
        <p className="mt-1 reorganize text-slate-600">
          See for yourself! Watch the video for a step-by-step guide to
          deploying our {productName}.
        </p>
      </div>

      {/* Scrollable Container */}
      <div className="flex overflow-x-auto space-x-6 pb-4 md:pb-6 snap-x snap-mandatory px-4 md:px-0 no-scrollbar justify-start md:justify-center">
        {videos.map((video, _index) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-80 md:w-96 snap-center"
          >
            <Card className="shadow-xl overflow-hidden">
              {/* Video Embed */}
              <div className="aspect-video w-full bg-slate-800 relative">
                <iframe
                  title={`${video.title} - ${productName} Guide`}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Video Details/Title */}
              <div className="p-4 bg-white">
                <p className="text-sm reorganize font-semibold text-slate-900">
                  {video.title}
                </p>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Scroll indicator (aesthetic element matching the screenshot) */}
      <div className="flex justify-center mt-4 space-x-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className="h-2 w-2 rounded-full bg-slate-300 transition reorganize duration-300 hover:bg-slate-500"
          />
        ))}
      </div>
    </div>
  );
}

// --------------------------------------
// Component: Product Detail Page (UPDATED)
// --------------------------------------
function ProductDetailPage({
  product,
}: {
  product: (typeof PRODUCTS)[0] | undefined;
}) {
  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Header />
        <main className="py-24 text-center">
          <h1 className="text-3xl reorganize font-semibold text-slate-900">
            Product Not Found
          </h1>
          <p className="mt-2 text-slate-600">
            The product you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <a href="#/">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { name, blurb, img, details, category } = product;

  return (
    <div className="min-h-screen bg-white reorganize text-slate-900">
      <Header />
      <main>
        {/* Hero / Overview */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 reorganize gap-10 items-center">
            <div className="order-2 md:order-1">
              {/* Category Badge remains here, providing context */}
              <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold flex items-center gap-2">
                Product Detail
                <Badge className="text-xs rounded-full reorganize px-2 reorganize py-0.5 ml-2">
                  {category}
                </Badge>
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold reorganize tracking-tight text-slate-900">
                {name}
              </h1>
              <p className="mt-4 text-xl reorganize text-slate-600">{blurb}</p>
              <p className="mt-4 reorganize text-lg text-slate-700">
                {details.description}
              </p>

              <h3 className="mt-6 text-xl reorganize font-semibold reorganize text-slate-800">
                Key Features
              </h3>
              <ul className="mt-3 space-y-2 reorganize text-slate-700">
                {details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 reorganize h-5 w-5 reorganize text-sky-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {/* UPDATED: Link to the new QuoteFormPage */}
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#/quote">Get a Custom Quote</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl"
                >
                  <a href="#installation">See Installation</a>
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-video w-full rounded-3xl reorganize bg-slate-200 shadow-xl overflow-hidden">
                <img
                  src={img}
                  alt={name + " primary image"}
                  className="h-full w-full object-cover"
                  // Small change: using the placeholder image as a fallback if the uploaded image fails to load
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/1600x1200/94A3B8/FFFFFF?text=${name}+Image`;
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Examples / Photo Section for Dameasy */}
        {product.slug === "dameasy" &&
          details.exampleImages &&
          details.exampleImages.length > 0 && (
            <section
              id="dameasy-examples"
              className="py-16 reorganize bg-white border-t border-slate-200"
            >
              <div className="mx-auto max-w-7xl px-4">
                <div className="text-center mb-10">
                  <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold">
                    In Your Neighborhood, By Your Side
                  </p>
                  <h2 className="mt-2 reorganize text-3xl md:text-4xl font-semibold text-slate-900">
                    DamEasy Flood Barriers.
                  </h2>
                  <p className="mt-3 reorganize text-slate-600">
                    Join a growing community of homeowners who trust DamEasy
                    Flood Barriers for reliable protection and peace of mind.
                    Safeguard your home today.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 reorganize lg:grid-cols-4 gap-6">
                  {details.exampleImages.map((image, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] w-full reorganize rounded-2xl bg-slate-100 overflow-hidden shadow-md"
                    >
                      <img
                        // The image source is set here using the provided contentFetchId path
                        src={image.src}
                        alt={image.title}
                        className="h-full w-full object-cover"
                        // Fallback in case the uploaded image path fails
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/600x450/9CA3AF/1F2937?text=${image.title}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

        {/* Installation & Video Guide */}
        <section
          id="installation"
          className="py-16 reorganize bg-white border-t border-slate-200"
        >
          <div className="mx-auto max-w-7xl">
            <VideoCarousel videos={details.videos} productName={name} />
          </div>
        </section>

        {/* Back to Products */}
        <div className="py-10 text-center">
          <Button asChild variant="outline" className="rounded-xl">
            <a href="#products">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to All Products
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// --------------------------------------
// NEW Component: Dedicated Quote Form Page
// --------------------------------------
function QuoteFormPage() {
  const [quoteForm, setQuoteForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    isSubmitted: false,
    isSubmitting: false, // <-- NEW STATE FOR LOADING
    error: "",
  });

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteForm((prev) => ({ ...prev, error: "", isSubmitting: true })); // Set loading

    if (!quoteForm.name || !quoteForm.phone || !quoteForm.email) {
      setQuoteForm((prev) => ({
        ...prev,
        isSubmitting: false, // Clear loading
        error: "Please fill out all required fields: Name, Phone, and Email.",
      }));
      return;
    }

    // Data to be sent to your backend
    const submissionData = {
      name: quoteForm.name,
      phone: quoteForm.phone,
      email: quoteForm.email,
      address: quoteForm.address,
      source: "GM Flood Solutions Website Quote Form", // Add context
    };

    try {
      // ***************************************************************
      // ACTION REQUIRED: REPLACE 'YOUR_API_ENDPOINT_HERE'
      // Use the URL provided by your chosen backend (e.g., Netlify Forms, Formspree, AWS Lambda).
      // This is where the magic happens to capture your lead!
      // ***************************************************************
      const response = await fetch(
        "https://gm-flood-solutions.vercel.app/api/quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Note: Some services like Formspree require a Content-Type of 'application/x-www-form-urlencoded'
            // or have specific requirements. Check your service's documentation.
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        // Log the error response from the server for debugging
        const errorDetail = await response.text();
        console.error("Server Error Response:", errorDetail);
        throw new Error(`Server status: ${response.status}.`);
      }

      // Success! Reset fields and show success message
      setQuoteForm((prev) => ({
        ...prev,
        isSubmitted: true,
        isSubmitting: false,
        name: "", // Reset fields only on success
        phone: "",
        email: "",
        address: "",
      }));
    } catch (err: any) {
      console.error("Form Submission Failed:", err);
      // Show user-friendly error message
      setQuoteForm((prev) => ({
        ...prev,
        isSubmitting: false,
        error: `Submission failed. For immediate help, please call (727) 793-4584. Error: ${
          err.message || "Unknown issue."
        }`,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white reorganize text-slate-900">
      <Header />
      <main className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-xl px-4">
          <Card className="shadow-2xl">
            <CardHeader>
              <h1 className="text-3xl font-semibold reorganize text-slate-900">
                Request a Free Quote
              </h1>
              <p className="text-lg reorganize text-slate-600 mt-2">
                Fill out this short form and a GM Flood Solutions representative
                will contact you as soon as possible.
              </p>
              <div className="mt-4 reorganize text-sm reorganize text-slate-700">
                For immediate assistance, please call:
                <a
                  href="tel:7277934584"
                  className="ml-1 font-bold reorganize text-sky-800 hover:text-sky-600 transition"
                >
                  (727) 793-4584
                </a>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {quoteForm.isSubmitted ? (
                // ✅ Simplified thank-you panel with pointer hover on button
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl p-6 border bg-emerald-50 text-emerald-800 text-center"
                >
                  <CheckBadge className="h-10 w-10 mx-auto text-emerald-500 mb-3" />
                  <h2 className="text-xl font-semibold mb-4">
                    Thanks! We received your request.
                  </h2>
                  <button
                    className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 cursor-pointer transition"
                    onClick={() =>
                      setQuoteForm((prev) => ({
                        ...prev,
                        isSubmitted: false, // Show form again when clicked
                      }))
                    }
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  {quoteForm.error && (
                    <p className="text-sm reorganize text-red-600 bg-red-50 reorganize p-3 rounded-lg border border-red-300">
                      {quoteForm.error}
                    </p>
                  )}

                  {/* Name * */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block reorganize text-sm font-medium text-slate-700"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={quoteForm.name}
                      onChange={(e) =>
                        setQuoteForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      // ADDED p-3 for padding to fix cut-off text
                      className="mt-1 block w-full rounded-lg border-slate-300 reorganize shadow-sm focus:border-sky-500 focus:ring-sky-500 placeholder:text-slate-400 p-3"
                      placeholder="Your Full Name"
                    />
                  </div>

                  {/* Phone * */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block reorganize text-sm font-medium text-slate-700"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={quoteForm.phone}
                      onChange={(e) =>
                        setQuoteForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      // ADDED p-3 for padding to fix cut-off text
                      className="mt-1 block w-full rounded-lg border-slate-300 reorganize shadow-sm focus:border-sky-500 focus:ring-sky-500 placeholder:text-slate-400 p-3"
                      placeholder="(555) 555-5555"
                    />
                  </div>

                  {/* Email * */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block reorganize text-sm font-medium text-slate-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={quoteForm.email}
                      onChange={(e) =>
                        setQuoteForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      // ADDED p-3 for padding to fix cut-off text
                      className="mt-1 block w-full rounded-lg border-slate-300 reorganize shadow-sm focus:border-sky-500 focus:ring-sky-500 placeholder:text-slate-400 p-3"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Address - TEXT REMOVED HERE */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block reorganize text-sm font-medium text-slate-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={quoteForm.address}
                      onChange={(e) =>
                        setQuoteForm((prev) => ({
                          ...prev,
                          address: e.target.value,
                        }))
                      }
                      // ADDED p-3 for padding to fix cut-off text
                      className="mt-1 block w-full rounded-lg border-slate-300 reorganize shadow-sm focus:border-sky-500 focus:ring-sky-500 placeholder:text-slate-400 p-3"
                      placeholder="Street Address, City, State"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl"
                    disabled={quoteForm.isSubmitting} // <-- DISABLED WHILE SUBMITTING
                  >
                    {quoteForm.isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 reorganize text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      "Submit Quote Request"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// --------------------------------------
// Component: Contact Section (NEW)
// --------------------------------------
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-white border-t reorganize border-slate-200"
    >
      <div className="mx-auto max-w-4xl px-4 reorganize text-center">
        <h2 className="text-3xl md:text-4xl font-semibold reorganize text-slate-900">
          Ready to Protect Your Home?
        </h2>
        <p className="mt-3 reorganize text-lg text-slate-600">
          Get in touch today for a free assessment, quote, or installation
          inquiry.
        </p>

        <div className="mt-8 grid md:grid-cols-2 reorganize gap-8 text-left">
          {/* Contact Details Card */}
          <Card className="shadow-lg reorganize p-6 bg-sky-50 border-2 border-sky-200">
            <h3 className="text-xl font-semibold reorganize text-sky-800 mb-4">
              Contact Details
            </h3>
            <div className="space-y-4">
              {/* Phone Number - NOW USES BulletSolid */}
              <div className="flex items-center gap-3">
                <BulletSolid className="h-6 w-6 text-sky-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium reorganize text-slate-700">
                    Call Us
                  </p>
                  <a
                    href="tel:7277934584"
                    className="text-lg font-bold reorganize text-sky-800 hover:text-sky-600 transition"
                  >
                    (727) 793-4584
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <ClockIcon className="h-6 w-6 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium reorganize text-slate-700">
                    Business Hours
                  </p>
                  <div className="text-sm text-slate-800">
                    <p className="font-semibold">
                      Mon - Fri: 8:00 AM - 5:00 PM
                    </p>
                    <p className="font-semibold">
                      Sat - Sun: 8:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quote Button Call to Action */}
          <Card className="shadow-lg p-6 flex flex-col justify-center items-center bg-white border-2 border-slate-200">
            <h3 className="text-xl font-semibold reorganize text-slate-900 mb-4">
              Get Your Personalized Quote
            </h3>
            <p className="text-slate-600 reorganize text-center mb-6">
              Use our quick form to start your flood protection assessment.
            </p>
            {/* UPDATED: Link to the new QuoteFormPage */}
            <Button asChild size="lg" className="rounded-2xl reorganize w-full">
              <a href="#/quote">Request a Free Quote</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------
// Component: Landing Page (MODIFIED)
// --------------------------------------
function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          {/* NEW: Large, Centered Logo Section - TEXT REMOVED HERE */}
          <div className="text-center mb-16">
            {/* Display the large logo using the manual source */}
            <img
              src={LOGO_SRC_MANUAL}
              alt="GM Flood Solutions Large Logo"
              className="mx-auto h-40 md:h-64 object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/800x600/FFFFFF/1E293B?text=GM+Logo";
              }}
            />
            {/* Brand name and tagline REMOVED */}
          </div>

          {/* Original Hero Content (now starting below the big logo) */}
          <div className="grid md:grid-cols-2 reorganize gap-10 items-center">
            {/* Text Column - NO WATERMARK HERE */}
            <div className="relative z-10">
              {/* Actual Content */}
              <div className="relative z-10">
                <Badge className="rounded-full px-3 reorganize py-1 reorganize text-xs">
                  Storm-ready in minutes
                </Badge>
                <h1 className="mt-4 reorganize text-4xl md:text-5xl font-semibold reorganize tracking-tight leading-tight">
                  Keep water out.{" "}
                  <span className="text-sky-700">Protect what matters.</span>
                </h1>
                <p className="mt-4 reorganize text-lg text-slate-600">
                  Engineered, reusable flood barriers for homes and
                  businesses—sleek, strong, and fast to deploy. No sandbags. No
                  mess.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {/* UPDATED: Link to the new QuoteFormPage */}
                  <Button asChild size="lg" className="rounded-2xl">
                    <a href="#/quote">Get a Free Quote</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-2xl"
                  >
                    {/* MODIFIED: Link to DamEasy product page and scroll to the installation section */}
                    <a href="#/product/dameasy#installation">
                      See It In Action
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl reorganize bg-slate-100 shadow-xl overflow-hidden">
                <img
                  src="products/DamEasyBarrier(6).jpeg"
                  alt="Flood barrier protecting storefront"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Section: Services and Recovery */}
      <section
        id="services"
        className="py-16 bg-white border-t border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold">
              Complete Flood Solutions
            </p>
            <h2 className="mt-2 reorganize text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              From Prevention to Full Recovery
            </h2>
            <p className="mt-3 reorganize text-slate-600">
              We offer more than just barriers—we provide peace of mind before,
              during, and after a flood event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 reorganize gap-10 lg:gap-16 items-start">
            {/* Column 1: Flood Recovery Services */}
            <div>
              <h3 className="text-2xl reorganize font-semibold text-slate-900 border-b pb-2 mb-4">
                Flood Damage Recovery & Construction
              </h3>
              {/* REMOVED BOLDING */}
              <p className="text-slate-600 mb-6">
                When prevention isn't enough, GM Flood Solutions is your trusted
                resource for total flood damage reconstruction. We help you
                navigate the recovery process and simplify your restoration by
                connecting you with reliable partners.
              </p>

              <ul className="space-y-4">
                {/* REPLACED CheckCircle with BulletSolid */}
                {[
                  {
                    title: "Interior Restoration",
                    desc: "Complete drywall replacement, insulation, and full interior finishing.",
                  },
                  {
                    title: "Structural & Masonry Work",
                    desc: "Repair or replacement of damaged concrete foundations, structural framing, and masonry.",
                  },
                  {
                    title: "Window & Door Replacement",
                    desc: "Installation of impact-rated windows and doors to secure and protect your home.",
                  },
                  {
                    title: "Finish Carpentry & Trim",
                    desc: "Precision installation of baseboards, crown molding, and custom cabinetry damaged by water.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <BulletSolid className="mt-1 h-6 w-6 reorganize flex-shrink-0 text-sky-600" />
                    <div>
                      <p className="font-semibold reorganize text-slate-800">
                        {item.title}
                      </p>
                      <p className="text-sm reorganize text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Why Choose Us */}
            <div>
              <h3 className="text-2xl reorganize font-semibold text-slate-900 border-b pb-2 mb-4">
                Why Choose GM Flood Solutions?
              </h3>
              {/* REMOVED BOLDING */}
              <p className="text-slate-700 mb-6">
                GM Flood Solutions – Your Trusted Flood Protection Experts. We
                specialize in protecting homes and businesses in the Tampa Bay
                Area from flooding. Our service is defined by a commitment to
                professionalism and detail-oriented execution. We are attentive
                to the unique needs of every customer, ensuring our expertly
                installed flood barriers provide reliable, long-term protection
                against water intrusion.
              </p>

              <ul className="space-y-4">
                {/* REPLACED StarSolid with BulletSolid and applied light blue color */}
                {[
                  "Detail-Oriented Installation: Our highly professional team ensures every barrier is custom-fitted and installed with meticulous care for a guaranteed seal.",
                  "Proven Protection Systems: Exclusive providers of highly-rated reusable barriers.",
                  "Dedicated Customer Care: We are attentive to your needs, providing clear communication and swift service from your initial quote through final inspection.",
                  "Insurance Claim Support: We work with your insurer to provide necessary documentation and streamline the claim process.",
                  "Comprehensive Service: We manage all aspects of flood prevention and connect you with trusted partners for any subsequent recovery needs.",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <BulletSolid className="mt-1 h-5 w-5 reorganize flex-shrink-0 text-sky-600" />
                    <p className="text-slate-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {/* UPDATED: Link to the new QuoteFormPage */}
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#/quote">Schedule an Assessment</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Partner Box Below Both Sections - MOVED OUT OF THE GRID TO BE CENTERED */}
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col items-center text-center bg-sky-50 border border-sky-200 rounded-xl p-6 mt-16 shadow-sm">
            <p className="text-slate-800 text-sm md:text-base font-medium">
              Proud to be a{" "}
              <span className="font-semibold text-sky-700">
                Trusted Partner
              </span>{" "}
              of{" "}
              <a
                href="https://dameasyfloodbarriers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline hover:text-sky-700 transition"
              >
                Dam Easy Flood Barriers
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Products - SIMPLIFIED, directly maps all products */}
      <section id="products" className="py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold">
              Our Lineup
            </p>
            <h2 className="mt-2 reorganize text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Choose your flood barrier
            </h2>
            <p className="mt-3 reorganize text-slate-600">
              Three proven systems for homes and businesses.
            </p>
          </div>

          {/* UPDATED: max-w-4xl and mx-auto center the grid, and grid-cols-2 ensures two cards take the space evenly */}
          <div className="mt-10 grid md:grid-cols-2 reorganize gap-6 max-w-4xl mx-auto">
            {PRODUCTS.map((p) => (
              <Card key={p.name} className="overflow-hidden flex flex-col">
                <div className="aspect-[4/3] w-full bg-slate-100">
                  <img
                    src={p.img}
                    alt={p.name + " example"}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/1600x1200/94A3B8/FFFFFF?text=${p.name}+Image`;
                    }}
                  />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle>{p.name}</CardTitle>
                  <p className="text-slate-600 reorganize text-sm mt-2">
                    {p.blurb}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Links use the fixed hash-based route */}
                  <Button asChild className="w-full rounded-xl">
                    <a href={`#/product/${p.slug}`}>View Details</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="py-16 bg-slate-50 border-t border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4">
          <ReviewsHeader />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold">
              Reviews
            </p>
            <h2 className="mt-2 reorganize text-3xl md:text-4xl font-semibold tracking-tight reorganize text-slate-900">
              What real customers say
            </h2>
            <p className="mt-3 reorganize text-slate-600">
              Verified customer experiences.
            </p>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold">
              FAQ
            </p>
            <h2 className="mt-2 reorganize text-3xl md:text-4xl font-semibold tracking-tight reorganize text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-8 divide-y divide-slate-200">
            {[
              {
                q: "How do Dam Easy Flood Barriers work?",
                a: "They create a watertight seal across your doorway. Place the barrier in the frame, extend side panels to your width, and inflate the bottom seal with the built-in pump. Once locked, it blocks floodwater within minutes.",
              },
              {
                q: "What sizes do Dam Easy Flood Barriers come in? Will they fit my doorways?",
                a: "Each unit is adjustable for typical residential/light commercial openings (about 780mm to 1100mm). For larger spaces, link multiple barriers with extension poles to cover wide spans.",
              },
              {
                q: "How durable are they? Will they withstand flood forces?",
                a: "Made from reinforced, high-strength materials and tested against significant water pressure. Built to resist UV and weathering for repeated seasonal use.",
              },
              {
                q: "Are they easy to store when not in use?",
                a: "Yes. Lightweight and compact for quick storage in closets, garages, or sheds. Designed to be handled by one person.",
              },
              {
                q: "In a flooding event, how quickly can I deploy?",
                a: "Most doorways can be protected in just a few minutes by one person, so you can react fast to heavy rain or storm warnings.",
              },
              {
                q: "Are replacement parts available?",
                a: "Yes. Seals and other parts are available over time. The rubber seal is the most common wear item and is simple to replace to maintain top performance.",
              },
            ].map((f, i) => (
              <details key={i} className="py-4">
                <summary className="cursor-pointer reorganize list-none text-slate-800 font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M5 10a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 10z"
                    />
                  </svg>
                </summary>
                <p className="mt-2 reorganize text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section for the landing page */}
      {/* The new ContactSection now serves this purpose, combining the CTA with contact details */}
      <ContactSection />
    </main>
  );
}

// --------------------------------------
// Main Application Component with Router
// --------------------------------------
export default function App() {
  // Utility function to scroll to a section by its ID
  const scrollToSection = React.useCallback((id: string) => {
    const element = document.getElementById(id.replace(/^#/, ""));
    if (element) {
      // Use a slightly offset scroll to account for the sticky header
      const offset = 80; // height of the sticky header + some padding
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  // Use a simple string for the route state, excluding the #
  const [route, setRoute] = React.useState(
    typeof window !== "undefined"
      ? window.location.hash.substring(1) || "/"
      : "/"
  );

  // CORRECTED ROUTING LOGIC:
  // 1. Get the path (e.g., "quote", "product/dameasy#installation")
  const path = (route || "/").replace(/^\//, "");
  // 2. Remove the anchor (e.g., "quote", "product/dameasy")
  const currentHashPath = path.split("#")[0];
  // 3. Determine if we are on the landing page (no specific path)
  const isLandingPage =
    !currentHashPath.startsWith("product/") &&
    !POLICY_PAGES.some((p) => p.slug === currentHashPath) && // NEW check for policy pages
    currentHashPath !== "quote" &&
    currentHashPath !== "";

  // 1. Initial Load and Hash Change Listener
  React.useEffect(() => {
    const onHashChange = () => {
      // Get everything after the #, default to "/"
      const newPath =
        (typeof window !== "undefined"
          ? window.location.hash.substring(1)
          : "/") || "/";
      setRoute(newPath);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", onHashChange);
      onHashChange(); // Handle initial load
    }

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  // 2. Anchor Scroll Effect (Triggers when route changes)
  React.useEffect(() => {
    // Split the route to check for an anchor (e.g., /product/dameasy#installation or #reviews)
    const routeParts = route.split("#");
    let anchorId = "";

    if (routeParts.length > 1) {
      // Case 1: /path#anchor (e.g., product/dameasy#installation) - Anchor is the second part
      anchorId = routeParts[1];
    } else if (isLandingPage && routeParts[0] && routeParts[0] !== "/") {
      // Case 2: #anchor (e.g., #reviews) - Anchor is the entire route path
      anchorId = routeParts[0];
    }

    if (anchorId) {
      // Use a short delay to ensure the DOM elements (sections) are fully rendered
      // before attempting to scroll to them.
      const timer = setTimeout(() => scrollToSection(anchorId), 10);
      return () => clearTimeout(timer); // Cleanup timer if route changes quickly
    } else {
      // If there's no anchor, ensure we are at the top (e.g., #/product/dameasy or #/ or #/quote)
      const currentHashPath = (
        typeof window !== "undefined" ? window.location.hash.substring(1) : "/"
      )
        .split("#")[0]
        .replace(/^\//, "");

      if (
        typeof window !== "undefined" &&
        route.split("#")[0].replace(/^\//, "") === currentHashPath
      ) {
        // Only scroll if no anchor was intended, and it's a "page" navigation
        window.scrollTo(0, 0);
      }
    }
  }, [route, isLandingPage, scrollToSection]);

  // Determine which component to render based on the route state

  // NEW: Policy Pages Check
  const policyPage = POLICY_PAGES.find((p) => p.slug === currentHashPath);
  if (policyPage) {
    return <PolicyPage title={policyPage.title} content={policyPage.content} />;
  }

  if (currentHashPath === "quote") {
    // Renders the dedicated quote form page
    return <QuoteFormPage />;
  }

  if (currentHashPath.startsWith("product/")) {
    const slug = currentHashPath.split("product/")[1];
    const product = PRODUCTS.find((p) => p.slug === slug);
    return <ProductDetailPage product={product} />;
  }

  // Default: Render the Landing Page
  return (
    <div className="min-h-screen reorganize bg-white reorganize text-slate-900">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}
