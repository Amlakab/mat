export type Language = 'en' | 'am';

export interface Translations {
  [key: string]: {
    en: string;
    am: string;
  };
}

export const translations: Translations = {
  // Brand & Header
  'brand.name': {
    en: 'MAT Engineering & Trading PLC',
    am: 'ማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ',
  },
  'brand.subtitle': {
    en: 'Engineering, Supply & General Contracting',
    am: 'ኢንጂነሪንግ፣ አቅርቦት እና ጠቅላላ ኮንትራክተር',
  },
  'brand.gm': {
    en: 'General Manager: Amare Tesfa',
    am: 'ዋና ሥራ አስኪያጅ፡ አማረ ተስፋ',
  },
  'brand.phone': {
    en: '0911 994 405',
    am: '0911 994 405',
  },
  'brand.location': {
    en: 'Ethiopia',
    am: 'ኢትዮጵያ',
  },

  // Navigation
  'nav.home': { en: 'Home', am: 'ዋና ገጽ' },
  'nav.about': { en: 'About Us', am: 'ስለ እኛ' },
  'nav.services': { en: 'Services', am: 'አገልግሎቶች' },
  'nav.products': { en: 'Products', am: 'ምርቶች' },
  'nav.projects': { en: 'Projects', am: 'ፕሮጀክቶች' },
  'nav.why_us': { en: 'Why Choose Us', am: 'ለምን እኛ?' },
  'nav.contact': { en: 'Contact', am: 'ያግኙን' },
  'nav.get_quote': { en: 'Get a Quote', am: 'ዋጋ ይጠይቁ' },
  'nav.call_now': { en: 'Call Now', am: 'አሁኑኑ ይደውሉ' },

  // Hero Section
  'hero.tag': {
    en: 'Established Ethiopian Engineering & Contracting Partner',
    am: 'አስተማማኝ የኢትዮጵያ ኢንጂነሪንግ እና ኮንትራክተር አጋር',
  },
  'hero.headline': {
    en: 'Building Better. Supplying Better. Furnishing Better.',
    am: 'የተሻለ ግንባታ። የተሻለ አቅርቦት። የተሻለ የቤትና ቢሮ ዕቃዎች።',
  },
  'hero.subheadline': {
    en: 'MAT Engineering and Trading PLC provides construction materials, quality home and office furniture, and reliable general contracting services for residential, commercial, and institutional projects.',
    am: 'ማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ ለመኖሪያ፣ ለንግድ እና ለተቋማት ፕሮጀክቶች ጥራት ያላቸውን የግንባታ ዕቃዎች፣ የቤትና ቢሮ ዕቃዎች እንዲሁም አስተማማኝ ጠቅላላ የኮንትራክተር አገልግሎት ያቀርባል።',
  },
  'hero.primary_cta': {
    en: 'Request a Quote',
    am: 'የዋጋ ማቅረቢያ ይጠይቁ',
  },
  'hero.secondary_cta': {
    en: 'Explore Our Services',
    am: 'አገልግሎቶቻችንን ይመልከቱ',
  },
  'hero.card1.title': {
    en: 'Construction Materials',
    am: 'የግንባታ ዕቃዎች',
  },
  'hero.card1.desc': {
    en: 'Reliable supply of quality construction materials for projects of different sizes.',
    am: 'ለተለያዩ ደረጃ ፕሮጀክቶች ጥራት ያላቸው የግንባታ ቁሳቁሶች አስተማማኝ አቅርቦት።',
  },
  'hero.card2.title': {
    en: 'Home & Office Furniture',
    am: 'የቤትና ቢሮ ዕቃዎች',
  },
  'hero.card2.desc': {
    en: 'Modern, functional, and durable furniture solutions for homes, offices, and commercial spaces.',
    am: 'ለመኖሪያ ቤቶች፣ ለቢሮዎች እና ለንግድ ቦታዎች ዘመናዊ፣ ጠንካራ እና ውብ የዕቃዎች አማራጮች።',
  },
  'hero.card3.title': {
    en: 'General Contracting',
    am: 'ጠቅላላ ኮንትራክተር',
  },
  'hero.card3.desc': {
    en: 'Professional project execution, construction, coordination, and contracting services.',
    am: 'ሙያዊ የፕሮጀክት አፈጻጸም፣ ግንባታ፣ ቅንጅት እና የኮንትራክተር አገልግሎቶች።',
  },

  // About Section
  'about.badge': {
    en: 'About MAT Engineering and Trading PLC',
    am: 'ስለ ማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ',
  },
  'about.title': {
    en: 'Committed to Dependability, Integrity & Practical Solutions',
    am: 'ለአስተማማኝነት፣ ለቅንነት እና ለተጨባጭ መፍትሄዎች ቁርጠኛ',
  },
  'about.p1': {
    en: 'MAT Engineering and Trading PLC is a diversified Ethiopian company providing construction materials, furniture solutions, and general contracting services.',
    am: 'ማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ የግንባታ ዕቃዎችን፣ የቤትና ቢሮ እቃዎችን እንዲሁም የጠቅላላ ኮንትራክተር አገልግሎቶችን የሚያቀርብ ዘርፈ-ብዙ የኢትዮጵያ ኩባንያ ነው።',
  },
  'about.p2': {
    en: 'Our goal is to provide customers with dependable products, professional service, competitive solutions, and reliable project execution.',
    am: 'ዓላማችን ለደንበኞቻችን አስተማማኝ ምርቶችን፣ ሙያዊ አገልግሎትን፣ ተወዳዳሪ መፍትሄዎችን እና ጥራት ያለው የፕሮጀክት አፈጻጸምን ማቅረብ ነው።',
  },
  'about.p3': {
    en: 'We work with homeowners, businesses, contractors, institutions, and organizations to help turn construction and furnishing requirements into successful results.',
    am: 'የግንባታ እና የዕቃ ማሟላት ፍላጎቶችን ወደ ተጨባጭ እና ስኬታማ ውጤት ለመቀየር ከመኖሪያ ቤት ባለቤቶች፣ ከንግድ ድርጅቶች፣ ከኮንትራክተሮች እና ከተቋማት ጋር በቅርበት እንሰራለን።',
  },
  'about.pillar1': {
    en: 'Quality Products',
    am: 'ጥራት ያላቸው ምርቶች',
  },
  'about.pillar1.sub': {
    en: 'Sourced and inspected to meet rigorous Ethiopian building and safety standards.',
    am: 'የኢትዮጵያን የግንባታ እና የደህንነት ደረጃዎች በሚያሟላ መልኩ የተመረጡ።',
  },
  'about.pillar2': {
    en: 'Reliable Service',
    am: 'አስተማማኝ አገልግሎት',
  },
  'about.pillar2.sub': {
    en: 'Punctual deliveries, consistent communication, and dependable project support.',
    am: 'ወቅቱን የጠበቀ አቅርቦት፣ ቋሚ ግንኙነት እና የታመነ የፕሮጀክት ድጋፍ።',
  },
  'about.pillar3': {
    en: 'Professional Team',
    am: 'ባለሙያ ቡድን',
  },
  'about.pillar3.sub': {
    en: 'Experienced technical personnel, site coordinators, and knowledgeable staff.',
    am: 'ልምድ ያላቸው የቴክኒክ ባለሙያዎች፣ የሳይት አስተባባሪዎች እና ሰራተኞች።',
  },
  'about.pillar4': {
    en: 'Customer Focused',
    am: 'በደንበኛ ላይ ያተኮረ',
  },
  'about.pillar4.sub': {
    en: 'Tailored solutions aligned with your technical specifications and project budget.',
    am: 'ከእርስዎ ቴክኒካዊ ፍላጎት እና የፕሮጀክት በጀት ጋር የተጣጣሙ መፍትሄዎች።',
  },

  // Services Section
  'services.badge': {
    en: 'Our Core Capabilities',
    am: 'ዋና ዋና አገልግሎቶቻችን',
  },
  'services.title': {
    en: 'Comprehensive Services Built for Real Results',
    am: 'ለተጨባጭ ውጤት የተገነቡ አጠቃላይ አገልግሎቶች',
  },
  'services.subtitle': {
    en: 'Explore our dedicated departments covering end-to-end supply, furnishings, and contracting execution.',
    am: 'አቅርቦትን፣ የዕቃዎች ማሟላትን እና የኮንትራክተር ሥራዎችን በአንድ ላይ ያካተቱትን ክፍሎቻችንን ይመልከቱ።',
  },
  'services.s1.num': { en: '01', am: '01' },
  'services.s1.title': {
    en: 'Construction Material Supply',
    am: 'የግንባታ ዕቃዎች አቅርቦት',
  },
  'services.s1.desc': {
    en: 'Provide construction materials for residential, commercial, and institutional projects with prompt site delivery.',
    am: 'ለመኖሪያ፣ ለንግድ እና ለተቋማት ግንባታ የሚያስፈልጉ ዕቃዎችን በቀጥታ ወደ ሳይት በፍጥነት እናቀርባለን።',
  },
  'services.s1.note': {
    en: 'Product categories available for supply; catalog is periodically updated to match market availability.',
    am: 'የምርት ምድቦች ለአቅርቦት የተዘጋጁ፤ ዝርዝሩ እንደ ገበያው ሁኔታ በየወቅቱ ይሻሻላል።',
  },
  'services.s2.num': { en: '02', am: '02' },
  'services.s2.title': {
    en: 'Home Furniture',
    am: 'የቤት ዕቃዎች',
  },
  'services.s2.desc': {
    en: 'Offer furniture solutions for homes, apartments, and residential spaces with modern ergonomics and lasting durability.',
    am: 'ለመኖሪያ ቤቶች፣ ለአፓርታማዎች እና ለመኖሪያ ስፍራዎች ዘመናዊ፣ ምቹ እና ዘላቂ የሆኑ የቤት ዕቃዎችን እናቀርባለን።',
  },
  'services.s3.num': { en: '03', am: '03' },
  'services.s3.title': {
    en: 'Office Furniture',
    am: 'የቢሮ ዕቃዎች',
  },
  'services.s3.desc': {
    en: 'Provide practical and professional furniture solutions for modern workplaces, conference rooms, and reception suites.',
    am: 'ለዘመናዊ የሥራ ቦታዎች፣ ለስብሰባ አዳራሾች እና ለእንግዳ መቀበያዎች ተግባራዊና ፕሮፌሽናል የዕቃ አማራጮች።',
  },
  'services.s4.num': { en: '04', am: '04' },
  'services.s4.title': {
    en: 'General Contracting',
    am: 'ጠቅላላ ኮንትራክተር',
  },
  'services.s4.desc': {
    en: 'Provide professional contracting, site management, finishing, and project execution services tailored to client specifications.',
    am: 'በደንበኛው ፍላጎትና ዝርዝር መመሪያ መሰረት ሙያዊ የግንባታ፣ የማጠናቀቂያ እና የሳይት አስተዳደር አገልግሎት።',
  },

  // Products Section
  'products.badge': {
    en: 'Product Catalog',
    am: 'የምርት ማውጫ',
  },
  'products.title': {
    en: 'Quality Materials & Commercial Furnishings',
    am: 'ጥራት ያላቸው ዕቃዎች እና የቢሮ/ቤት ቁሳቁሶች',
  },
  'products.subtitle': {
    en: 'Browse our primary categories. Contact us directly or click Request a Quote for tailored pricing.',
    am: 'ዋና ዋና ምድቦቻችንን ያስሱ። ለትክክለኛ የዋጋ ዝርዝር በቀጥታ ያግኙን ወይም ዋጋ ይጠይቁ የሚለውን ይጫኑ።',
  },
  'products.filter.all': { en: 'All Products', am: 'ሁሉም ምርቶች' },
  'products.filter.materials': { en: 'Construction Materials', am: 'የግንባታ ዕቃዎች' },
  'products.filter.home': { en: 'Home Furniture', am: 'የቤት ዕቃዎች' },
  'products.filter.office': { en: 'Office Furniture', am: 'የቢሮ ዕቃዎች' },
  'products.request_quote': { en: 'Request a Quote', am: 'ዋጋ ይጠይቁ' },
  'products.catalog_note': {
    en: 'Note: Catalog represents core product categories and demo inventory. Full specifications and batch prices are quoted on request.',
    am: 'ማሳሰቢያ፡ ይህ ዝርዝር ዋና ዋና የምርት ምድቦችን ያሳያል። ሙሉ ዝርዝር እና የጅምላ ዋጋ በጥያቄ መሰረት ይቀርባል።',
  },

  // Projects Section
  'projects.badge': {
    en: 'Project Portfolio',
    am: 'የፕሮጀክት ማሳያ',
  },
  'projects.title': {
    en: 'Project Capability Showcase',
    am: 'የፕሮጀክት አቅም ማሳያ',
  },
  'projects.subtitle': {
    en: 'Demonstrating our scope across residential, commercial, office, and general construction sectors.',
    am: 'በመኖሪያ፣ በንግድ፣ በቢሮ እና በአጠቃላይ ግንባታ ዘርፍ ያለንን አቅም የሚያሳይ ማሳያ።',
  },
  'projects.demo_badge': {
    en: 'Demo Portfolio Showcase',
    am: 'የማሳያ ፕሮጀክት ካርድ',
  },
  'projects.note': {
    en: 'Representative project types illustrating MAT Engineering & Trading PLC capabilities. Client-specific case studies will be updated regularly.',
    am: 'የማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማን የስራ አድማስ የሚያሳዩ ተምሳሌታዊ ፕሮጀክቶች። የተጠናቀቁ ፕሮጀክቶች ዝርዝር በየጊዜው ይታከላል።',
  },

  // Why Choose Us
  'why.badge': {
    en: 'The MAT Advantage',
    am: 'የማት ልዩ ብልጫዎች',
  },
  'why.title': {
    en: 'Why Partner with MAT Engineering & Trading PLC?',
    am: 'ከማት ኢንጂነሪንግ እና ትሬዲንግ ጋር ለምን ይሰራሉ?',
  },
  'why.reason1.title': {
    en: 'Quality',
    am: 'ጥራት',
  },
  'why.reason1.desc': {
    en: 'We focus on providing dependable products and practical solutions that stand the test of time.',
    am: 'ዘላቂ እና አስተማማኝ የሆኑ ጥራት ያላቸውን ምርቶችና ተግባራዊ መፍትሄዎችን በማቅረብ ላይ እናተኩራለን።',
  },
  'why.reason2.title': {
    en: 'Reliability',
    am: 'አስተማማኝነት',
  },
  'why.reason2.desc': {
    en: 'We aim to deliver consistent service, predictable communication, and dependable project support.',
    am: 'ቀጣይነት ያለው አገልግሎት፣ ግልጽ ግንኙነት እና አስተማማኝ የፕሮጀክት አጋርነት ለመስጠት እንተጋለን።',
  },
  'why.reason3.title': {
    en: 'One Business, Multiple Solutions',
    am: 'አንድ ድርጅት፣ ዘርፈ-ብዙ መፍትሄዎች',
  },
  'why.reason3.desc': {
    en: 'Construction materials, furniture, and contracting services integrated under one experienced company.',
    am: 'የግንባታ እቃዎች፣ የቤትና ቢሮ ቁሳቁሶች እንዲሁም የኮንትራክተር አገልግሎቶች በአንድ ኩባንያ ስር ተቀናጅተዋል።',
  },
  'why.reason4.title': {
    en: 'Customer Focus',
    am: 'በደንበኛ ላይ ያተኮረ',
  },
  'why.reason4.desc': {
    en: 'We listen to customer requirements and work collaboratively toward practical and economical solutions.',
    am: 'የደንበኞቻችንን ፍላጎት በጥሞና በማዳመጥ ተግባራዊ፣ ወጪ ቆጣቢ እና ውጤታማ መፍትሄዎችን እናዘጋጃለን።',
  },
  'why.reason5.title': {
    en: 'Professional Service',
    am: 'ሙያዊ አገልግሎት',
  },
  'why.reason5.desc': {
    en: 'We approach every project with attention to quality, clear coordination, and disciplined execution.',
    am: 'እያንዳንዱን ፕሮጀክት በጥራት ቁጥጥር፣ በግልጽ ቅንጅት እና በሥነ-ምግባር የታነጸ አፈጻጸም እንከውናለን።',
  },

  // CTA Section
  'cta.headline': {
    en: 'Planning a Construction or Furnishing Project?',
    am: 'የግንባታ ወይም የዕቃዎች ማሟላት ፕሮጀክት አቅደዋል?',
  },
  'cta.subheadline': {
    en: 'Talk to MAT Engineering and Trading PLC today.',
    am: 'ዛሬውኑ ከማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ ጋር ይወያዩ።',
  },
  'cta.btn.call': {
    en: 'Call Us: 0911 994 405',
    am: 'ይደውሉልን፡ 0911 994 405',
  },
  'cta.btn.quote': {
    en: 'Request a Quote',
    am: 'የዋጋ ማቅረቢያ ይጠይቁ',
  },

  // Contact Section
  'contact.badge': {
    en: 'Get in Touch',
    am: 'ያግኙን',
  },
  'contact.title': {
    en: 'Contact MAT Engineering & Trading PLC',
    am: 'ከማት ኢንጂነሪንግ እና ትሬዲንግ ጋር ይገናኙ',
  },
  'contact.subtitle': {
    en: 'Have questions, need a bulk supply quote, or looking for contracting consultation? Reach out directly.',
    am: 'ጥያቄ አለዎት፣ የጅምላ ዕቃ ዋጋ ይፈልጋሉ ወይስ የኮንትራክተር ማማከር ይሻሉ? በቀጥታ ያግኙን።',
  },
  'contact.form.name': { en: 'Full Name', am: 'ሙሉ ስም' },
  'contact.form.phone': { en: 'Phone Number', am: 'ስልክ ቁጥር' },
  'contact.form.email': { en: 'Email Address', am: 'ኢሜይል አድራሻ' },
  'contact.form.service': { en: 'Service Needed', am: 'የሚፈልጉት አገልግሎት' },
  'contact.form.message': { en: 'Message / Project Details', am: 'መልዕክት / የፕሮጀክት ዝርዝር' },
  'contact.form.submit': { en: 'Send Message', am: 'መልዕክቱን ላክ' },
  'contact.form.sending': { en: 'Sending...', am: 'በመላክ ላይ...' },
  'contact.form.success': {
    en: 'Thank you! Your inquiry has been recorded. We will contact you shortly.',
    am: 'እናመሰግናለን! ጥያቄዎ ደርሶናል። በአጭር ጊዜ ውስጥ እንደውላለን።',
  },
  'contact.info.gm_title': { en: 'General Manager', am: 'ዋና ሥራ አስኪያጅ' },
  'contact.info.gm_name': { en: 'Amare Tesfa', am: 'አማረ ተስፋ' },
  'contact.info.phone_label': { en: 'Direct Phone', am: 'የቀጥታ ስልክ' },
  'contact.info.location_label': { en: 'Location', am: 'አድራሻ' },
  'contact.info.location_val': { en: 'Ethiopia', am: 'ኢትዮጵያ' },
  'contact.info.hours_label': { en: 'Business Hours', am: 'የሥራ ሰዓት' },
  'contact.info.hours_val': { en: 'Monday – Saturday: 8:30 AM – 5:30 PM', am: 'ከሰኞ – ቅዳሜ፡ ከጠዋቱ 2:30 – 11:30' },
  'contact.map_placeholder': {
    en: 'Business Location Map (Ready for official office coordinates)',
    am: 'የቢሮ ካርታ ቦታ (ትክክለኛ የቢሮ አድራሻ ለመጨመር የተዘጋጀ)',
  },

  // Modal Quote
  'modal.quote_title': {
    en: 'Request a Formal Quote',
    am: 'ይፋዊ የዋጋ ማቅረቢያ ይጠይቁ',
  },
  'modal.quote_subtitle': {
    en: 'Specify your requirements and our team will get back to you with competitive pricing.',
    am: 'ፍላጎትዎን ይግለጹ፤ ቡድናችን በተወዳዳሪ ዋጋ በአፋጣኝ መልስ ይሰጥዎታል።',
  },
  'modal.field.service': { en: 'Department / Service', am: 'የሥራ ዘርፍ / አገልግሎት' },
  'modal.field.item': { en: 'Item or Project Scope', am: 'የእቃው ዓይነት ወይም የፕሮጀክቱ መጠን' },
  'modal.field.qty': { en: 'Estimated Quantity / Size', am: 'የተገመተ ብዛት ወይም ስፋት' },
  'modal.field.submit': { en: 'Submit Quote Request', am: 'የዋጋ ጥያቄውን አስገባ' },
  'modal.success_title': { en: 'Quote Request Received!', am: 'የዋጋ ጥያቄዎ ደርሶናል!' },
  'modal.success_desc': {
    en: 'Our General Manager Amare Tesfa and technical sales team will review your requirements and reach out on your provided phone number.',
    am: 'ዋና ሥራ አስኪያጅ አማረ ተስፋ እና የቴክኒክ ቡድናችን ጥያቄዎን ተመልክተው በስልክ ቁጥርዎ ያነጋግሩዎታል።',
  },

  // Footer
  'footer.desc': {
    en: 'MAT Engineering and Trading PLC is a trusted Ethiopian partner for high-grade construction materials, residential & commercial furniture, and reliable general contracting services.',
    am: 'ማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ ጥራት ላላቸው የግንባታ ዕቃዎች፣ የቤትና ቢሮ እቃዎች እንዲሁም ለጠቅላላ ኮንትራክተር አገልግሎቶች አስተማማኝ የኢትዮጵያ አጋር ነው።',
  },
  'footer.quick_links': { en: 'Quick Links', am: 'ፈጣን ማያያዣዎች' },
  'footer.departments': { en: 'Core Departments', am: 'ዋና ዋና ዘርፎች' },
  'footer.contact_info': { en: 'Contact Details', am: 'የመገናኛ አድራሻ' },
  'footer.copyright': {
    en: '© 2026 MAT Engineering and Trading PLC. All rights reserved.',
    am: '© 2026 ማት ኢንጂነሪንግ እና ትሬዲንግ ኃ/የተ/የግ/ማ። መብቱ በህግ የተጠበቀ ነው።',
  },
  'footer.ethiopia_pride': {
    en: 'Proudly serving projects across Ethiopia.',
    am: 'በመላው ኢትዮጵያ ለሚከናወኑ ፕሮጀክቶች በኩራት ያገለግላል።',
  },
};

export function getTranslation(key: string, lang: Language, fallback?: string): string {
  const item = translations[key];
  if (!item) {
    return fallback || key;
  }
  return item[lang] || item['en'] || fallback || key;
}
