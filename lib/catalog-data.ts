export interface ServiceDepartment {
  id: string;
  number: string;
  titleKey: string;
  descKey: string;
  image: string;
  categories: {
    en: string;
    am: string;
  }[];
}

export interface CatalogProduct {
  id: string;
  category: 'construction' | 'home' | 'office';
  categoryName: {
    en: string;
    am: string;
  };
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  image: string;
  badge?: {
    en: string;
    am: string;
  };
  specs: string[];
}

export interface ProjectShowcaseItem {
  id: string;
  category: 'residential' | 'commercial' | 'office' | 'construction' | 'renovation';
  categoryLabel: {
    en: string;
    am: string;
  };
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  image: string;
  scope: string;
  isDemo: boolean;
}

export const SERVICE_DEPARTMENTS: ServiceDepartment[] = [
  {
    id: 'construction-materials',
    number: '01',
    titleKey: 'services.s1.title',
    descKey: 'services.s1.desc',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
    categories: [
      { en: 'Cement & Aggregates', am: 'ሲሚንቶ እና ጠጠር' },
      { en: 'Steel & Rebar', am: 'ብረት እና ቆርቆሮ' },
      { en: 'Construction Blocks (HCB)', am: 'የኮንክሪት ብሎኬቶች' },
      { en: 'Roofing Materials', am: 'የጣሪያ ክዳን ቁሳቁሶች' },
      { en: 'Plumbing Materials', am: 'የውሃ እና ፍሳሽ ቧንቧ እቃዎች' },
      { en: 'Electrical Materials', am: 'የኤሌክትሪክ እቃዎች' },
      { en: 'Finishing Materials', am: 'የማጠናቀቂያ እቃዎች (ሴራሚክ/ቀለም)' },
      { en: 'General Construction Supplies', am: 'አጠቃላይ የግንባታ አቅርቦቶች' },
    ],
  },
  {
    id: 'home-furniture',
    number: '02',
    titleKey: 'services.s2.title',
    descKey: 'services.s2.desc',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    categories: [
      { en: 'Living Room Furniture', am: 'የሳሎን እቃዎች' },
      { en: 'Bedroom Furniture', am: 'የመኝታ ቤት እቃዎች' },
      { en: 'Dining Furniture', am: 'የመመገቢያ እቃዎች' },
      { en: 'Storage Solutions & Wardrobes', am: 'ቁምሳጥኖች እና የማስቀመጫ እቃዎች' },
      { en: 'Custom Residential Furniture', am: 'በትዕዛዝ የሚሰሩ የቤት እቃዎች' },
    ],
  },
  {
    id: 'office-furniture',
    number: '03',
    titleKey: 'services.s3.title',
    descKey: 'services.s3.desc',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    categories: [
      { en: 'Office Desks & Executive Stations', am: 'የቢሮ እና የኃላፊ ጠረጴዛዎች' },
      { en: 'Ergonomic Office Chairs', am: 'ኦርቶፔዲክ የቢሮ ወንበሮች' },
      { en: 'Conference & Boardroom Tables', am: 'የስብሰባ አዳራሽ ጠረጴዛዎች' },
      { en: 'Reception Counters & Lounge', am: 'የእንግዳ መቀበያ ቆጣሪዎች' },
      { en: 'Storage Cabinets & Credenzas', am: 'የፋይል ካቢኔቶች እና ሸልፎች' },
      { en: 'Modular Workstations', am: 'የሰራተኞች የጋራ ወርክስቴሽኖች' },
    ],
  },
  {
    id: 'general-contracting',
    number: '04',
    titleKey: 'services.s4.title',
    descKey: 'services.s4.desc',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    categories: [
      { en: 'Building Construction', am: 'የሕንፃ ግንባታ' },
      { en: 'Renovation & Remodeling', am: 'የእድሳት እና የለውጥ ስራዎች' },
      { en: 'Project Coordination', am: 'የፕሮጀክት ቅንጅት' },
      { en: 'Site Management & Supervision', am: 'የሳይት አስተዳደርና ቁጥጥር' },
      { en: 'Finishing Works & Fit-outs', am: 'የማጠናቀቂያ እና የውስጥ ስራዎች' },
      { en: 'General Construction Services', am: 'ጠቅላላ የኮንስትራክሽን አገልግሎቶች' },
    ],
  },
];

export const PRODUCTS_CATALOG: CatalogProduct[] = [
  // Construction Materials
  {
    id: 'prod-steel-rebar',
    category: 'construction',
    categoryName: { en: 'Construction Materials', am: 'የግንባታ ዕቃዎች' },
    title: {
      en: 'High-Tensile Structural Steel Rebar',
      am: 'ከፍተኛ ጥንካሬ ያለው የግንባታ ብረት',
    },
    description: {
      en: 'Certified structural rebar rods for foundations, beams, and columns across diverse structural loads.',
      am: 'ለመሰረት፣ ለቢም እና ለአምዶች የሚሆኑ ደረጃቸውን የጠበቁ የግንባታ ብረቶች።',
    },
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
    badge: { en: 'Top In-Demand', am: 'ተፈላጊ' },
    specs: ['Grade 60 / Standard', 'Diameters 8mm – 32mm', 'Certified Tensile Strength'],
  },
  {
    id: 'prod-portland-cement',
    category: 'construction',
    categoryName: { en: 'Construction Materials', am: 'የግንባታ ዕቃዎች' },
    title: {
      en: 'Premium Portland Pozzolana Cement (PPC & OPC)',
      am: 'ጥራት ያለው ፖርትላንድ ሲሚንቶ (PPC & OPC)',
    },
    description: {
      en: 'High-performance cement batches suited for reinforced concrete, masonry mortar, and civil plastering.',
      am: 'ለኮንክሪት፣ ለግንብ ማያያዣ እና ለፕላስተር የሚውል ከፍተኛ የመያዝ አቅም ያለው ሲሚንቶ።',
    },
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    specs: ['42.5R & 32.5N grades', '50kg Moisture-Resistant Bags', 'Bulk Supply Ready'],
  },
  {
    id: 'prod-concrete-blocks',
    category: 'construction',
    categoryName: { en: 'Construction Materials', am: 'የግንባታ ዕቃዎች' },
    title: {
      en: 'Heavy Duty Hollow Concrete Blocks (HCB)',
      am: 'ከፍተኛ ጥንካሬ ያላቸው የኮንክሪት ብሎኬቶች',
    },
    description: {
      en: 'Machine-vibrated hollow concrete blocks fabricated for exterior partitioning and load-bearing applications.',
      am: 'በማሽን የተመረቱ፣ ለውጭና ለውስጥ ግድግዳ የሚሆኑ ጠንካራ ብሎኬቶች።',
    },
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    specs: ['Sizes 15cm & 20cm', 'Uniform Compressive Strength', 'Direct Site Transport'],
  },
  {
    id: 'prod-roofing-sheets',
    category: 'construction',
    categoryName: { en: 'Construction Materials', am: 'የግንባታ ዕቃዎች' },
    title: {
      en: 'Galvanized & Pre-Painted Roofing Sheets',
      am: 'የጋልቫናይዝድ እና የቀለም ጣሪያ ቆርቆሮ',
    },
    description: {
      en: 'Weather-resistant corrugated metal roofing sheets for residential roofs, warehouses, and industrial sheds.',
      am: 'ዝገትን የሚቋቋም፣ ለመኖሪያ ቤቶች እና ለፋብሪካ ህንፃዎች የሚሆን የጣሪያ ቆርቆሮ።',
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    specs: ['G28 & G30 thickness', 'Anti-Corrosion Coating', 'Multiple Profile Options'],
  },

  // Home Furniture
  {
    id: 'prod-living-sofa',
    category: 'home',
    categoryName: { en: 'Home Furniture', am: 'የቤት ዕቃዎች' },
    title: {
      en: 'Modern L-Shaped Sectional Living Suite',
      am: 'ዘመናዊ የሳሎን ሶፋ ስብስብ',
    },
    description: {
      en: 'Plush high-density foam upholstery with reinforced hardwood inner frame for comfort and enduring beauty.',
      am: 'ከፍተኛ ጥንካሬ ባለው የእንጨት ፍሬም የተሰራ፣ ምቹ እና ማራኪ ዘመናዊ ሶፋ።',
    },
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    badge: { en: 'Modern Design', am: 'ዘመናዊ' },
    specs: ['Stain-Resistant Fabric', 'Kiln-Dried Hardwood Frame', 'Modular Configuration'],
  },
  {
    id: 'prod-dining-set',
    category: 'home',
    categoryName: { en: 'Home Furniture', am: 'የቤት ዕቃዎች' },
    title: {
      en: 'Solid Wood 8-Seater Dining Suite',
      am: 'የባለ 8 ሰው የምግብ ጠረጴዛና ወንበሮች',
    },
    description: {
      en: 'Hand-crafted dining table matched with ergonomic upholstered chairs for elegant family dining.',
      am: 'በጥራት ከተመረተ እንጨት የተሰራ ውብ የመመገቢያ ጠረጴዛ ከሙሉ ወንበሮች ጋር።',
    },
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    specs: ['Treated Hardwood', 'Scratch-Proof Matte Finish', 'Padded Fabric Seating'],
  },
  {
    id: 'prod-master-bedroom',
    category: 'home',
    categoryName: { en: 'Home Furniture', am: 'የቤት ዕቃዎች' },
    title: {
      en: 'King Size Master Bedroom Suite & Dresser',
      am: 'የመኝታ አልጋ እና ኮሞዲኖ ስብስብ',
    },
    description: {
      en: 'Contemporary bed frame featuring integrated headboard lighting, paired nightstands, and spacious dresser.',
      am: 'ዘመናዊ ዲዛይን ያለው የአልጋ ማዕቀፍ፣ ኮሞዲኖዎች እና የልብስ ማስቀመጫ።',
    },
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    specs: ['King / Queen Dimensions', 'Soft-Close Drawer Hardware', 'Custom Finish Options'],
  },
  {
    id: 'prod-custom-wardrobe',
    category: 'home',
    categoryName: { en: 'Home Furniture', am: 'የቤት ዕቃዎች' },
    title: {
      en: 'Modular Built-In Wall Wardrobe',
      am: 'ዘመናዊ ግድግዳ-ተኮር ቁምሳጥን',
    },
    description: {
      en: 'Customizable sliding door wardrobes engineered for efficient space optimization and aesthetic flow.',
      am: 'ቦታ ቆጣቢ በሆነ ተንሸራታች በር የተሰራ፣ ሰፊ እቃ መያዝ የሚችል ዘመናዊ ቁምሳጥን።',
    },
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=800&q=80',
    specs: ['Sliding Mirror / Wood Doors', 'Internal Organizers', 'Custom Dimensions'],
  },

  // Office Furniture
  {
    id: 'prod-exec-desk',
    category: 'office',
    categoryName: { en: 'Office Furniture', am: 'የቢሮ ዕቃዎች' },
    title: {
      en: 'Executive Modern Managerial Desk Suite',
      am: 'የማኔጀር እና የኃላፊ ዘመናዊ ጠረጴዛ',
    },
    description: {
      en: 'Sleek executive workstation with wire management passages, mobile pedestal drawer, and credenza.',
      am: 'የኤሌክትሪክ ሽቦ መደበቂያ፣ ካቢኔትና መሳቢያዎች የተገጠሙለት ፕሮፌሽናል ጠረጴዛ።',
    },
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    badge: { en: 'Executive', am: 'ለኃላፊዎች' },
    specs: ['2.0m & 2.4m Lengths', 'Cable Management Track', 'Lockable Storage'],
  },
  {
    id: 'prod-ergonomic-chair',
    category: 'office',
    categoryName: { en: 'Office Furniture', am: 'የቢሮ ዕቃዎች' },
    title: {
      en: 'High-Back Ergonomic Breathable Mesh Chair',
      am: 'ምቹ እና የሰውነት አቋም ጠባቂ የቢሮ ወንበር',
    },
    description: {
      en: 'Advanced lumbar support with multi-axis armrests, synchro-tilt mechanism, and heavy-duty nylon base.',
      am: 'ለረጅም ሰዓታት ሥራ ምቹ የሆነ፣ የወገብ ድጋፍ ያለው ዘመናዊ ሜሽ ወንበር።',
    },
    image: 'https://images.unsplash.com/photo-1580481077195-c328ad45be4c?auto=format&fit=crop&w=800&q=80',
    specs: ['Adjustable Lumbar Support', 'Breathable Mesh Back', '360° Heavy-Duty Swivel'],
  },
  {
    id: 'prod-conf-table',
    category: 'office',
    categoryName: { en: 'Office Furniture', am: 'የቢሮ ዕቃዎች' },
    title: {
      en: 'Boardroom Conference Table (10–14 Person)',
      am: 'የስብሰባ አዳራሽ ጠረጴዛ (ለ10–14 ሰው)',
    },
    description: {
      en: 'Professional conference table equipped with integrated pop-up power and media sockets.',
      am: 'የኤሌክትሪክ እና የኮምፒውተር ገመድ መሰኪያ የተገጠመለት ጥራት ያለው የስብሰባ ጠረጴዛ።',
    },
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    specs: ['Embedded Power / HDMI Box', 'Scratch-Proof Surface', 'Modular Assembly'],
  },
  {
    id: 'prod-steel-cabinet',
    category: 'office',
    categoryName: { en: 'Office Furniture', am: 'የቢሮ ዕቃዎች' },
    title: {
      en: 'Heavy-Duty Steel Filing & Storage Cabinet',
      am: 'አስተማማኝ የሰነድ ማስቀመጫ የብረት ካቢኔት',
    },
    description: {
      en: 'Electrostatic powder-coated cold-rolled steel cabinet with central multi-point locking system.',
      am: 'በቀላሉ የማይበላሽ፣ በአስተማማኝ ቁልፍ የሚቆለፍ ጠንካራ የሰነድ ማስቀመጫ ካቢኔት።',
    },
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    specs: ['0.8mm Cold-Rolled Steel', 'Central Locking Mechanism', 'Adjustable Shelves'],
  },
];

export const DEMO_PROJECTS: ProjectShowcaseItem[] = [
  {
    id: 'proj-1',
    category: 'commercial',
    categoryLabel: { en: 'Commercial Project', am: 'የንግድ ፕሮጀክት' },
    title: {
      en: 'Multi-Story Mixed-Use Commercial Complex',
      am: 'ባለብዙ ፎቅ የንግድ እና የቢሮ ሕንፃ',
    },
    description: {
      en: 'Demonstration showcase: Coordinated structural material supply and concrete framework management.',
      am: 'የማሳያ ፕሮጀክት፡ የግንባታ እቃዎች አቅርቦት እና የኮንክሪት መዋቅር ቅንጅት።',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    scope: 'Structural Materials & Contracting',
    isDemo: true,
  },
  {
    id: 'proj-2',
    category: 'office',
    categoryLabel: { en: 'Office Furnishing', am: 'የቢሮ ዕቃዎች ማሟላት' },
    title: {
      en: 'Corporate Headquarters Interior Furnishing',
      am: 'የድርጅት ዋና መሥሪያ ቤት የቢሮ ዕቃዎች',
    },
    description: {
      en: 'Demonstration showcase: Turnkey executive desks, modular staff cubicles, and boardroom tables.',
      am: 'የማሳያ ፕሮጀክት፡ የኃላፊዎች ጠረጴዛዎች፣ የሰራተኞች ወርክስቴሽኖች እና የስብሰባ አዳራሽ ማሟላት።',
    },
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    scope: 'Full Office Furniture Fit-Out',
    isDemo: true,
  },
  {
    id: 'proj-3',
    category: 'residential',
    categoryLabel: { en: 'Residential', am: 'የመኖሪያ ፕሮጀክት' },
    title: {
      en: 'Modern Residential Villa Construction & Fit-Out',
      am: 'ዘመናዊ የመኖሪያ ቪላ ግንባታና ማጠናቀቂያ',
    },
    description: {
      en: 'Demonstration showcase: End-to-end building execution, roofing, masonry, and interior living room furniture.',
      am: 'የማሳያ ፕሮጀክት፡ የግንባታ አፈጻጸም፣ የጣሪያ ስራ፣ የድንጋይ ግንብ እና የቤት እቃዎች ማሟላት።',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    scope: 'General Contracting & Home Furniture',
    isDemo: true,
  },
  {
    id: 'proj-4',
    category: 'construction',
    categoryLabel: { en: 'Material Supply', am: 'የግንባታ እቃዎች አቅርቦት' },
    title: {
      en: 'Heavy Civil & Foundation Material Logistics',
      am: 'የመሰረት እና የመዋቅር እቃዎች አቅርቦት ሎጂስቲክስ',
    },
    description: {
      en: 'Demonstration showcase: On-schedule bulk delivery of certified rebar, cement, and aggregates to construction site.',
      am: 'የማሳያ ፕሮጀክት፡ የብረት፣ የሲሚንቶ እና የጠጠር የጅምላ አቅርቦት በቀጥታ ወደ ሳይት።',
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    scope: 'Bulk Material Supply Logistics',
    isDemo: true,
  },
  {
    id: 'proj-5',
    category: 'renovation',
    categoryLabel: { en: 'Renovation', am: 'የእድሳት ስራ' },
    title: {
      en: 'Commercial Facility Renovation & Space Modernization',
      am: 'የንግድ ተቋም እድሳት እና የቦታ ማዘመን ስራ',
    },
    description: {
      en: 'Demonstration showcase: Partition modifications, floor tiling, electrical upgrades, and new workspace layouts.',
      am: 'የማሳያ ፕሮጀክት፡ የውስጥ ግድግዳ ለውጥ፣ የወለል ንጣፍ፣ የኤሌክትሪክ ዝርጋታ እና የስራ ቦታ ማዘመን።',
    },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    scope: 'Interior Renovation & Finishing',
    isDemo: true,
  },
];
