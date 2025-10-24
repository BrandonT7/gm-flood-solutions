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
    name: "Dam Easy Flood Barriers",
    slug: "Dam Easy",
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
    name: "Dam Easy Titan Flood Barriers",
    slug: "Dam Easy Titan",
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
      // START: REMOVED THE ORIGINAL VIDEOS ARRAY AND REPLACED WITH AN EMPTY ONE
      videos: [],
      // END: REMOVED VIDEOS
      // START: UPDATED EXAMPLE IMAGES WITH 6 PLACEHOLDERS FOR TITAN
      exampleImages: [
        {
          title: "Warehouse Entry Barrier",
          // ACTION REQUIRED: Replace with the actual image URL/path for Titan product
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Titan+Image+1",
        },
        {
          title: "Storefront Panel System",
          // ACTION REQUIRED: Replace with the actual image URL/path for Titan product
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Titan+Image+2",
        },
        {
          title: "Commercial Gate Coverage",
          // ACTION REQUIRED: Replace with the actual image URL/path for Titan product
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Titan+Image+3",
        },
        {
          title: "Modular System Setup",
          // ACTION REQUIRED: Replace with the actual image URL/path for Titan product
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Titan+Image+4",
        },
        {
          title: "High-Rise Protection",
          // ACTION REQUIRED: Replace with the actual image URL/path for Titan product
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Titan+Image+5",
        },
        {
          title: "Side View Profile",
          // ACTION REQUIRED: Replace with the actual image URL/path for Titan product
          src: "https://placehold.co/600x450/1E293B/FFFFFF?text=Titan+Image+6",
        },
      ],
      // END: UPDATED EXAMPLE IMAGES
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
      <div className="prose prose-slate max-w-none">
        <p>
          <b>Effective Date:</b> October 2025
        </p>
        <p>
          GM Flood Solutions (“we,” “us,” or “our”) is committed to protecting
          your privacy. This Privacy Policy describes how we collect, use, and
          share information when you visit our website, request a quote, or
          otherwise interact with us. By using our website, you agree to the
          terms described in this Policy.
        </p>

        <h3>1) Information We Collect</h3>
        <p>
          We collect information from you in several ways to provide and improve
          our services.
        </p>
        <ul>
          <li>
            <b>Information you provide directly:</b> This includes details
            submitted through contact or quote forms such as your name, email
            address, phone number, property details, and any message you send.
          </li>
          <li>
            <b>Automatically collected data:</b> When you visit our site, we may
            collect limited technical data such as your IP address, browser
            type, device identifiers, referral URLs, and pages visited. This
            helps us measure website performance and detect security issues.
          </li>
          <li>
            <b>Cookies and tracking technologies:</b> We use essential cookies
            for site operation and may use optional analytics cookies to improve
            performance. You can control cookie use through your browser
            settings.
          </li>
        </ul>

        <h3>2) How We Use Your Information</h3>
        <p>We use your personal information for purposes such as:</p>
        <ul>
          <li>Responding to inquiries and providing service quotes.</li>
          <li>
            Improving the performance, functionality, and security of our
            website.
          </li>
          <li>
            Communicating with you about updates, promotions, or service-related
            information.
          </li>
          <li>
            Complying with legal obligations and preventing fraud or misuse.
          </li>
        </ul>

        <h3>3) How We Share Information</h3>
        <p>
          We do <b>not sell</b> your personal data. We may share limited
          information with trusted third-party providers that help operate our
          website (e.g., hosting, analytics, or email services). These providers
          are contractually obligated to protect your data and use it only for
          authorized purposes. We may disclose information if required by law or
          to protect our rights and property.
        </p>

        <h3>4) Data Retention</h3>
        <p>
          We retain personal information only as long as necessary to provide
          our services, comply with legal obligations, or resolve disputes. When
          data is no longer needed, it is securely deleted or anonymized.
        </p>

        <h3>5) Security of Your Information</h3>
        <p>
          We implement reasonable administrative, technical, and physical
          safeguards to protect your information. While we strive to secure your
          data, no method of transmission over the Internet is completely
          secure, and we cannot guarantee absolute protection.
        </p>

        <h3>6) Your Rights and Choices</h3>
        <ul>
          <li>Access, correct, or request deletion of your personal data.</li>
          <li>Opt out of marketing or non-essential communications.</li>
          <li>Withdraw consent for analytics or cookie tracking.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:gmfloodsolutions@gmail.com"
            className="underline text-sky-700"
          >
            gmfloodsolutions@gmail.com
          </a>
          .
        </p>

        <h3>7) Links to Third-Party Websites</h3>
        <p>
          Our website may contain links to external websites operated by our
          product partners, such as Dam Easy Flood Barriers. We are not
          responsible for the content or privacy practices of third-party sites.
          We encourage you to review their policies before providing any
          personal data.
        </p>

        <h3>8) Children’s Privacy</h3>
        <p>
          Our website is intended for use by adults and is not directed toward
          children under 13. We do not knowingly collect personal information
          from minors.
        </p>

        <h3>9) Data Transfers</h3>
        <p>
          If you access our site from outside the United States, your data may
          be transferred to servers located within the U.S. By using our site,
          you consent to this transfer.
        </p>

        <h3>10) Governing Law</h3>
        <p>
          This Privacy Policy is governed by the laws of the{" "}
          <b>State of Florida</b>, U.S.A., without regard to its conflict-of-law
          principles.
        </p>

        <h3>11) Updates to This Policy</h3>
        <p>
          We may update this Policy periodically to reflect changes in our
          practices or for other operational, legal, or regulatory reasons. The
          Effective Date above indicates the most recent revision.
        </p>

        <h3>12) Contact Us</h3>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:gmfloodsolutions@gmail.com"
              className="underline text-sky-600"
            >
              gmfloodsolutions@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:7277934584" className="underline text-sky-600">
              (727) 793-4584
            </a>
          </li>
          <li>
            <i>
              No physical mailing address at this time. Please reach out via
              email or phone.
            </i>
          </li>
        </ul>

        <p className="text-sm text-slate-500 mt-6">
          © {new Date().getFullYear()} GM Flood Solutions. All rights reserved.
        </p>
      </div>
    ),
  },

  {
    slug: "conditions-of-use",
    title: "Terms of Service",
    content: (
      <div className="prose prose-slate max-w-none">
        <p>
          <b>Effective Date:</b> October 2025
        </p>
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          GM Flood Solutions website (the “Site”). By using our Site, you agree
          to these Terms. Please read them carefully before proceeding.
        </p>

        <h3>1) Acceptance of Terms</h3>
        <p>
          By accessing this Site, you agree to comply with these Terms and all
          applicable laws and regulations. If you do not agree, you must
          discontinue use immediately.
        </p>

        <h3>2) Services Provided</h3>
        <p>
          GM Flood Solutions offers information about flood barrier products,
          installation services, and contact options for quote requests.
          Information presented is for general educational and marketing
          purposes only and does not constitute engineering or professional
          advice.
        </p>

        <h3>3) Use Restrictions</h3>
        <ul>
          <li>Do not use the Site for illegal or fraudulent activities.</li>
          <li>
            Do not attempt to interfere with the Site’s functionality, servers,
            or security.
          </li>
          <li>
            Do not copy, modify, or redistribute content without our written
            permission.
          </li>
        </ul>

        <h3>4) Intellectual Property</h3>
        <p>
          All content, logos, trademarks, and materials displayed on the Site
          are owned by GM Flood Solutions or licensed for our use. You may not
          reproduce, distribute, or exploit any content without our prior
          written consent.
        </p>

        <h3>5) Disclaimers</h3>
        <p>
          The Site and all content are provided “as is.” GM Flood Solutions
          disclaims all warranties, express or implied, including warranties of
          merchantability or fitness for a particular purpose. We make no
          guarantee that the Site will be error-free, uninterrupted, or that its
          content will always be accurate or up to date.
        </p>

        <h3>6) Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by law, GM Flood Solutions, its
          owners, employees, and partners shall not be liable for any indirect,
          incidental, or consequential damages arising out of your use of the
          Site or reliance on its content.
        </p>

        <h3>7) Indemnification</h3>
        <p>
          You agree to defend, indemnify, and hold harmless GM Flood Solutions
          from and against any claims, damages, liabilities, and expenses
          arising from your use of the Site, your violation of these Terms, or
          infringement of any third-party rights.
        </p>

        <h3>8) Quotes, Pricing, and Product Information</h3>
        <p>
          Product descriptions, specifications, pricing, and availability are
          subject to change without notice. Quotes are estimates and may vary
          based on site conditions, measurements, and material costs. We reserve
          the right to modify or discontinue any product or service at any time.
        </p>

        <h3>9) Links to Other Websites</h3>
        <p>
          Our Site may link to third-party websites such as product
          manufacturers or distributors. We are not responsible for the content
          or privacy practices of external sites.
        </p>

        <h3>10) Termination</h3>
        <p>
          We reserve the right to suspend or terminate your access to the Site
          at any time without notice if you violate these Terms or engage in
          conduct that may harm our business or reputation.
        </p>

        <h3>11) Dispute Resolution</h3>
        <p>
          Any dispute arising out of or relating to these Terms or your use of
          the Site shall be governed by the laws of the <b>State of Florida</b>{" "}
          and resolved exclusively in the state or federal courts located in
          Florida.
        </p>

        <h3>12) Changes to These Terms</h3>
        <p>
          We may revise these Terms periodically. The updated version will be
          posted on this page, and the date above will reflect the latest
          update.
        </p>

        <h3>13) Contact Information</h3>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:gmfloodsolutions@gmail.com"
              className="underline text-sky-600"
            >
              gmfloodsolutions@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:7277934584" className="underline text-sky-600">
              (727) 793-4584
            </a>
          </li>
        </ul>

        <p className="text-sm text-slate-500 mt-6">
          © {new Date().getFullYear()} GM Flood Solutions. All rights reserved.
        </p>
      </div>
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
      : "px-4 reorganize py-2 reorganize text-sm rounded-xl";
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
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        {/* Centered Footer Links */}
        <div className="w-full text-center text-xs md:text-sm text-slate-600">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="#/privacy-policy"
              className="hover:text-sky-700 transition font-medium"
            >
              Privacy Policy
            </a>
            <span className="text-slate-400">|</span>
            <a
              href="#/conditions-of-use"
              className="hover:text-sky-700 transition font-medium"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-slate-100 my-6" />

        {/* Footer Branding */}
        <div className="flex flex-col items-center gap-3 reorganize text-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-slate-100 grid place-items-center ring-1 ring-slate-200">
              <span className="text-[10px] font-bold text-sky-700">GM</span>
            </div>
            <span className="font-semibold tracking-tight text-slate-800">
              GM Flood Solutions
            </span>
          </div>
          <div className="text-[11px] md:text-xs text-slate-500 leading-snug max-w-lg">
            <p className="mb-1">
              © {new Date().getFullYear()} The content on this website is owned
              by us and our licensors. Do not copy any content (including
              images) without consent.
            </p>
            <p className="text-slate-700 font-medium">
              © {new Date().getFullYear()} GM Flood Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
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
                {/* Only show 'See Installation' if there are videos */}
                {details.videos && details.videos.length > 0 && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-2xl"
                  >
                    <a href="#installation">See Installation</a>
                  </Button>
                )}
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

        {/* Examples / Photo Section for Dameasy and Titan (MODIFIED LOGIC) */}
        {/* The section now renders if exampleImages exist for ANY product, not just Dameasy */}
        {details.exampleImages && details.exampleImages.length > 0 && (
          <section
            id="product-examples" // Renamed ID for a generic product photo section
            className="py-16 reorganize bg-white border-t border-slate-200"
          >
            <div className="mx-auto max-w-7xl px-4">
              <div className="text-center mb-10">
                <p className="text-sm reorganize tracking-widest uppercase text-sky-600 font-semibold">
                  In Your Neighborhood, By Your Side
                </p>
                {/* Dynamic Title based on product name */}
                <h2 className="mt-2 reorganize text-3xl md:text-4xl font-semibold text-slate-900">
                  {name} In Action.
                </h2>
                <p className="mt-3 reorganize text-slate-600">
                  See how the {name} system provides reliable protection for{" "}
                  {category.toLowerCase()} properties.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 reorganize lg:grid-cols-3 gap-6">
                {/* Changed to lg:grid-cols-3 to display 6 images well (2 rows of 3) */}
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

        {/* Installation & Video Guide (Only renders if videos array is not empty) */}
        {details.videos && details.videos.length > 0 && (
          <section
            id="installation"
            className="py-16 reorganize bg-white border-t border-slate-200"
          >
            <div className="mx-auto max-w-7xl">
              <VideoCarousel videos={details.videos} productName={name} />
            </div>
          </section>
        )}

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
  // Simple component to render a policy page
  const PolicyPage: React.FC<{ title: string; content: React.ReactNode }> = ({
    title,
    content,
  }) => (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h1>
      <div className="mt-6">{content}</div>
    </div>
  );

  // NEW: Policy Pages Check (fixed)
  const policyPage = POLICY_PAGES.find((p) => p.slug === currentHashPath);
  if (policyPage) {
    return <PolicyPage title={policyPage.title} content={policyPage.content} />;
  }

  // Quote page check
  if (currentHashPath === "quote") {
    return <QuoteFormPage />;
  }

  // Product detail check
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
