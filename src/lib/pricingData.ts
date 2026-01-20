export type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

export type PricingData = {
  [key: string]: [Plan, Plan, Plan];
};

export const pricingData: PricingData = {
  "Branding": [
    {
      name: "Starter",
      price: "$999",
      description: "Perfect for startups needing a quick visual identity.",
      features: ["Logo Design (3 Concepts)", "Color Palette", "Typography Selection", "Business Card Design"],
    },
    {
      name: "Basic",
      price: "$2,499",
      description: "A comprehensive brand foundation for growing businesses.",
      features: ["Everything in Starter", "Full Brand Guidelines", "Social Media Kit", "Letterhead & Envelope Design", "Email Signature"],
      recommended: true,
    },
    {
      name: "Pro",
      price: "$4,999+",
      description: "Complete brand domination with strategy and execution.",
      features: ["Everything in Basic", "Brand Strategy Session", "Tone of Voice Guide", "Marketing Collateral (3 items)", "Brand Launch Support"],
    },
  ],
  "Digital Marketing": [
    {
      name: "Starter",
      price: "$1,500/mo",
      description: "Essential social presence to keep your audience engaged.",
      features: ["Social Media Management (2 Platforms)", "12 Posts/Month", "Community Management", "Monthly Report"],
    },
    {
      name: "Basic",
      price: "$3,000/mo",
      description: "Growth-focused strategy to drive traffic and leads.",
      features: ["Everything in Starter", "SEO Optimization", "PPC Campaign Management (Ad spend separate)", "Blog Content (2 articles/mo)"],
      recommended: true,
    },
    {
      name: "Pro",
      price: "$5,000/mo+",
      description: "Full-scale aggressive growth engine.",
      features: ["Everything in Basic", "Omnichannel Strategy", "Video Content Creation", "Advanced Analytics Dashboard", "Weekly Strategy Calls"],
    },
  ],
  "Printing": [
    {
        name: "Starter",
        price: "Custom",
        description: "Standard business essentials.",
        features: ["Business Cards", "Flyers", "Brochures", "Basic Paper Stock"],
    },
    {
        name: "Basic",
        price: "Custom",
        description: "Premium materials for higher impact.",
        features: ["Spot UV Cards", "Foiled Letterheads", "Presentation Folders", "Premium Stock Options"],
        recommended: true,
    },
    {
        name: "Pro",
        price: "Custom",
        description: "Luxury and large format printing.",
        features: ["Large Format Banners", "Custom Packaging", "Embossed Stationery", "Complex Die-cuts"],
    },
  ],
  "Corporate Gift": [
    {
        name: "Starter",
        price: "$50/pack",
        description: "Thoughtful entry-level gifting.",
        features: ["Branded Notebook", "Pen Set", "Tote Bag"],
    },
    {
        name: "Basic",
        price: "$120/pack",
        description: "Impressive quality for valued partners.",
        features: ["Premium Tech Accessories", "Insulated Drinkware", "Custom Apparel", "Premium Packaging"],
        recommended: true,
    },
    {
        name: "Pro",
        price: "$250/pack+",
        description: "Exquisite luxury experiences.",
        features: ["Luxury Leather Goods", "High-end Electronics", "Custom Curated Experience", "Personalized Notes"],
    },
  ],
  "Website Development": [
    {
        name: "Starter",
        price: "$2,999",
        description: "High-converting landing page.",
        features: ["Single Page / Landing Page", "Mobile Responsive", "Basic SEO", "Contact Form"],
    },
    {
        name: "Basic",
        price: "$5,999",
        description: "Multi-page corporate website.",
        features: ["Up to 10 Pages", "CMS Integration", "Advanced Animations", "Newsletter Signup"],
        recommended: true,
    },
    {
        name: "Pro",
        price: "$10,000+",
        description: "Complex web applications and e-commerce.",
        features: ["Custom Web App / E-commerce", "User Authentication", "Database Integration", "API Development", "Ongoing Maintenance"],
    },
  ],
  "Video Production": [
    {
        name: "Starter",
        price: "$1,500",
        description: "Social media ready content.",
        features: ["30s Social Reel", "Basic Editing", "Music Licensing", "1 Revision Round"],
    },
    {
        name: "Basic",
        price: "$4,500",
        description: "Professional brand overview.",
        features: ["2-3 Minute Brand Film", "Professional Crew", "Motion Graphics", "Color Grading"],
        recommended: true,
    },
    {
        name: "Pro",
        price: "$10,000+",
        description: "Broadcast quality commercials.",
        features: ["TV Commercial Production", "Scripting & Storyboarding", "Casting & Locations", "Advanced VFX"],
    },
  ]
};
