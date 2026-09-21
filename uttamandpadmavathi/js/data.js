/**
 * UTTAM & PADHMAVATHI | Verified Research Intelligence Dataset
 * Research Date: September 20, 2026
 * Sources: Election Commission of India, PRS Legislative Research,
 * Telangana State Gazette, The Hindu, The Indian Express, Deccan Chronicle
 */

const ARCHIVE_DATA = {
  en: {
    hero: {
      tag: "INC • Verified Intelligence Archive • Telangana",
      title: "UTTAM <span class=\"hero-amp\">&amp;</span> PADHMAVATHI",
      subtitle: "From Military Service to Public Service — Two Distinct Journeys, One Shared Public Record",
      uttamRole: "Minister for Irrigation & Civil Supplies",
      uttamBio: "Former IAF Fighter Pilot (MiG-21/23), ADC to President of India, 6-Time Elected MLA & MP.",
      padmavathiRole: "MLA, Kodad Constituency",
      padmavathiBio: "Architect by profession, Graduate Professional, Champion of Women-Friendly Urban Infrastructure.",
      stats: [
        { num: "25+", label: "Years Public Service" },
        { num: "08", label: "Electoral Mandates" },
        { num: "3.1 Cr", label: "Fine Rice Beneficiaries" },
        { num: "35 Yrs", label: "Public Partnership" }
      ]
    },
    manifesto: {
      lead: "Editorial Manifesto",
      quote: "“Two distinct trajectories. One disciplined by the skies of the <em>Indian Air Force</em>, the other shaped by <em>architectural precision</em> and grassroots representation.”",
      col1: "In modern Indian politics, representation often succumbs to spectacle. The combined public record of Nalamada Uttam Kumar Reddy and Nalamada Padmavathi Reddy stands as an institutional study in enduring constituency trust, administrative governance, and infrastructural resolve.",
      col2: "Serving adjacent assembly constituencies in Suryapet district—Huzurnagar and Kodad—their work bridges national water security frameworks with ground-level municipal sanitation, female economic autonomy, and massive job-creation initiatives."
    },
    uttam: {
      eyebrow: "Individual Profile • 01",
      name: "N. UTTAM KUMAR REDDY",
      pills: [
        "Cabinet Minister, Telangana",
        "MLA, Huzurnagar (6th Term)",
        "Former MP, Nalgonda (17th Lok Sabha)",
        "Former TPCC President (2015–2021)",
        "Ex-Flt Lt, Indian Air Force"
      ],
      bio: "Nalamada Uttam Kumar Reddy (born June 20, 1962) holds the pivotal Irrigation & Command Area Development and Food & Civil Supplies portfolios in the Government of Telangana. A graduate of the prestigious National Defence Academy (NDA) 61st Course, Reddy flew front-line combat aircraft before dedicating over two and a half decades to public governance.",
      facts: [
        { label: "Native Village", val: "Tatipamula, Tirumalagiri Mandal" },
        { label: "Education", val: "B.Sc., National Defence Academy, Pune" },
        { label: "Legislative Record", val: "Kodad (1999–2009), Huzurnagar (2009–2019, 2023–Present)" },
        { label: "Parliamentary Record", val: "Nalgonda Lok Sabha (2019–2024), 85% Attendance, 187 Questions" }
      ],
      military: {
        title: "The Fighter Pilot & Rashtrapati Bhavan",
        tag: "Service No: 16971 F(P) • Flight Lieutenant",
        points: [
          { label: "Aircraft Flown", val: "MiG-21 & MiG-23 supersonic fighters" },
          { label: "Operational Theatres", val: "Indo-China Border (Tezpur, Assam) & Western Sector" },
          { label: "Decorations", val: "Gallantry commendations for Siachen Glacier operations" },
          { label: "Presidential Aide", val: "ADC to Presidents R. Venkataraman & Dr. Shankar Dayal Sharma" }
        ]
      }
    },
    padmavathi: {
      eyebrow: "Individual Profile • 02",
      name: "N. PADMAVATHI REDDY",
      pills: [
        "MLA, Kodad (2014–2018, 2023–Present)",
        "Architect & Urban Planner",
        "Graduate Professional",
        "Legislative Voice for Women's Rights"
      ],
      bio: "Nalamada Padmavathi Reddy represents the Kodad Assembly constituency in the 3rd Telangana Legislative Assembly. As one of the few professional architects in Indian state legislatures, she brings structured spatial planning, urban governance acumen, and an uncompromising voice for women's dignity to public policy.",
      facts: [
        { label: "Profession", val: "Architect & Politician" },
        { label: "Constituency", val: "Kodad (Assembly Constituency No. 90)" },
        { label: "2023 Mandate", val: "1,25,783 Votes (58,172 Win Margin — 60.2%)" },
        { label: "Core Priorities", val: "Women-Friendly Urban Infra, Self-Help Finance, Youth Skill Parks" }
      ],
      service: {
        title: "Architectural Planning in Legislative Reform",
        tag: "Urban Governance & Social Infrastructure",
        points: [
          { label: "CURE Bill 2026", val: "Pioneered mandatory women's restrooms in commercial complexes" },
          { label: "Municipal Hygiene", val: "Comprehensive medical & organic waste processing mandates" },
          { label: "Economic Autonomy", val: "Srinidhi Centers established under Indiramma Mahila Shakti" },
          { label: "Institutional Decorum", val: "Vocal champion of female law-enforcement personnel rights" }
        ]
      }
    },
    together: {
      eyebrow: "Shared Public Record",
      title: "ADJACENT CONSTITUENCIES.<br><span class=\"gradient-text-inc\">ONE DEVELOPMENT CORRIDOR.</span>",
      lead: "Together representing Huzurnagar and Kodad in Suryapet district, Uttam and Padmavathi Reddy form one of Telangana's most synchronized public service partnerships.",
      synergies: [
        { num: "01", title: "Mega Employment Corridor", desc: "Co-hosted the Kodad Mega Job Mela (Sept 19, 2026), bringing 300+ national corporations to recruit rural & urban youth directly." },
        { num: "02", title: "Water Security & Agriculture", desc: "Harmonized command area irrigation networks across Krishna basin canals, securing crop cycles for hundreds of thousands of farmers." },
        { num: "03", title: "Women-Centric Welfare", desc: "Integrated Indiramma housing, Srinidhi micro-credit centers, and fine rice distribution across adjacent talukas." },
        { num: "04", title: "Grassroots Racchabanda", desc: "Direct participatory village democracy meetings, personally resolving land titling and civic grievances on location." }
      ]
    },
    timeline: [
      { year: "1979", person: "uttam", title: "National Defence Academy Induction", desc: "Joined the 61st NDA Course on January 1, 1979, embarking on nine years of active military duty.", source: "IAF Service Record" },
      { year: "1982", person: "uttam", title: "Commissioned as IAF Fighter Pilot", desc: "Commissioned as Pilot Officer (16971 F(P)). Commenced combat pilot flying on MiG-21 and MiG-23 supersonic jets.", source: "Gazette of India" },
      { year: "1987", person: "uttam", title: "Weapons Employment & Siachen Operations", desc: "Completed Weapons Employment Course at CAW. Stationed across Forward Western & Tezpur sectors; gallantry commendations for Siachen missions.", source: "Defence Ministry" },
      { year: "1990", person: "uttam", title: "Aide-de-Camp to the President of India", desc: "Served as ADC to the President of India at Rashtrapati Bhavan under President R. Venkataraman and Dr. Shankar Dayal Sharma.", source: "Rashtrapati Bhavan Archive" },
      { year: "1991", person: "uttam", title: "Voluntary Retirement After Wartime Injury", desc: "Retired voluntarily on June 30, 1991 following injury sustained during combat aircraft ejection, entering civilian public service.", source: "Official Biography" },
      { year: "1999", person: "uttam", title: "Electoral Debut — MLA Kodad", desc: "Secured first electoral triumph as MLA for Kodad Assembly Constituency in united Andhra Pradesh.", source: "Election Commission of India" },
      { year: "2004", person: "uttam", title: "Minister for Irrigation & Energy (AP)", desc: "Re-elected MLA Kodad; inducted into the Andhra Pradesh Cabinet holding key infrastructure portfolios.", source: "State Government Records" },
      { year: "2009", person: "uttam", title: "Constituency Shift to Huzurnagar", desc: "Elected MLA from the newly carved Huzurnagar Assembly Constituency with a resounding majority.", source: "ECI Stat Report" },
      { year: "2014", person: "both", title: "Historic Dual Mandate Post-Bifurcation", desc: "Landmark electoral sweep: Uttam Kumar Reddy elected MLA Huzurnagar (4th Term) and N. Padmavathi Reddy elected MLA Kodad (1st Term).", source: "Telangana Assembly ECI 2014" },
      { year: "2015", person: "uttam", title: "Appointed TPCC President", desc: "Assumed presidency of the Telangana Pradesh Congress Committee on March 2, leading the organization for over six formative years.", source: "AICC Communique" },
      { year: "2018", person: "uttam", title: "Retained Huzurnagar Assembly", desc: "Re-elected MLA Huzurnagar with 92,996 votes against fierce opposition in Telangana Assembly elections.", source: "ECI 2018" },
      { year: "2019", person: "uttam", title: "Elected Member of Parliament (Nalgonda)", desc: "Won the Nalgonda Lok Sabha seat by over 100,000 votes. Served with distinction on the Parliamentary Standing Committee on Defence.", source: "Lok Sabha Secretariat" },
      { year: "2023", person: "both", title: "Landmark Dual Resurgence", desc: "Resounding victories: Uttam re-elected MLA Huzurnagar (44,888 margin); Padmavathi elected MLA Kodad (1,25,783 votes, 58,172 margin).", source: "ECI Dec 2023" },
      { year: "2023", person: "uttam", title: "Inducted as Cabinet Minister", desc: "Sworn into the Telangana Cabinet on December 7, 2023, heading the Irrigation, Command Area Development and Civil Supplies departments.", source: "Telangana Gazette" },
      { year: "2025", person: "both", title: "Fine Rice Scheme & 35th Anniversary", desc: "Rolled out the 6kg/person fine rice guarantee covering 3.1 Crore citizens; celebrated 35th wedding anniversary in April 2025.", source: "Civil Supplies Dept" },
      { year: "2026", person: "both", title: "Water Security Pledge & Mega Job Mela", desc: "Pledged 30-month completion of PRLIS, defended Krishna river rights before KWDT-II, and co-hosted the 300-firm Kodad Job Mela.", source: "The Hindu / Indian Express" }
    ],
    recordMetrics: [
      { num: "30 Mo.", title: "PRLIS Operational Target", desc: "₹5,000 Cr committed for land acquisition to deliver water across southern Telangana." },
      { num: "3.15 Cr", title: "Ration Card Coverage", desc: "Complete saturation of new digital cards providing subsidized fine rice." },
      { num: "568 TMC", title: "Krishna Water Claim", desc: "Vigorous defense before KWDT-II for Telangana's rightful 70% share of 811 TMC." },
      { num: "300+", title: "Job Mela Companies", desc: "Direct recruitment drive in Kodad securing employment pathways for local youth." }
    ],
    projects: [
      {
        index: "01",
        name: "Palamuru-Rangareddy Lift Irrigation Scheme",
        tag: "Flagship Irrigation",
        person: "Uttam Kumar Reddy",
        budget: "₹5,000 Cr Allocated",
        status: "30-Month Target (March 2026 Pledge)",
        desc: "Transformative lift irrigation scheme designed to draw Krishna waters to parched lands in Nagarkurnool, Mahabubnagar, Vikarabad, and Rangareddy. Fast-tracking pending package executions and rehabilitation payouts.",
        source: "The Hindu / New Indian Express"
      },
      {
        index: "02",
        name: "Statewide Fine Rice (Sanna Biyyam) Distribution",
        tag: "Food & Civil Supplies",
        person: "Uttam Kumar Reddy",
        budget: "Statewide Budgetary Allocation",
        status: "Fully Implemented (3.1 Cr Beneficiaries)",
        desc: "Revolutionized the public distribution system by replacing coarse grains with 6kg of nutritious premium fine rice per individual per month across all white ration-card holding families.",
        source: "Civil Supplies Department"
      },
      {
        index: "03",
        name: "Mandatory Women's Restrooms & CURE Bill 2026",
        tag: "Urban Governance & Sanitation",
        person: "Padmavathi Reddy",
        budget: "Legislative Reform",
        status: "Passed / Under Implementation",
        desc: "Pioneered landmark urban legislation making dignified, accessible women's hygiene facilities legally mandatory in every commercial complex and shopping mall across Telangana municipalities.",
        source: "Telangana Assembly Monsoon Session 2026"
      },
      {
        index: "04",
        name: "Kalwakurthy, Nettempadu, Bhima & Koilsagar Projects",
        tag: "Water Security",
        person: "Uttam Kumar Reddy",
        budget: "₹1,546 Cr Total Allocation",
        status: "March 2027 Completion Deadline",
        desc: "Systematic capital infusion (₹909 Cr for Kalwakurthy, ₹252 Cr for Nettempadu, ₹200 Cr for Bhima, ₹185 Cr for Koilsagar) to finalize tail-end canal distribution networks.",
        source: "Irrigation Dept Gazette"
      },
      {
        index: "05",
        name: "Srinidhi Women Self-Employment Centers",
        tag: "Women's Empowerment",
        person: "Padmavathi Reddy",
        budget: "Indiramma Mahila Shakti Scheme",
        status: "Operational in Kodad & Munagala",
        desc: "Establishing specialized micro-finance and entrepreneurial manufacturing nodes empowering thousands of self-help group women with zero-interest loans and technical skills.",
        source: "Sakshitha News / Rural Dev Dept"
      },
      {
        index: "06",
        name: "Munneru-Palair Gravity Link Scheme",
        tag: "Water Management",
        person: "Uttam Kumar Reddy",
        budget: "State Irrigation Outlay",
        status: "Implementation Taken Up",
        desc: "Game-changer gravity canal diversion delivering 50 TMC annually across Khammam, Suryapet, and Krishna basin reservoirs, accompanied by 2 MW green hydropower generation.",
        source: "The Hans India"
      }
    ],
    gallery: [
      {
        id: "gal-1",
        src: "images/image copy 6.png",
        title: "Public Address at Huzurnagar",
        category: "uttam",
        year: "2024",
        location: "Huzurnagar, Suryapet",
        desc: "Addressing thousands of farmers and constituents on canal desiltation and agricultural power reliability.",
        source: "Press Information"
      },
      {
        id: "gal-2",
        src: "images/image copy 2.png",
        title: "People's Mandate in Kodad",
        category: "padmavathi",
        year: "2023",
        location: "Kodad Constituency",
        desc: "Namaste greeting upon winning the Kodad legislative assembly seat with an overwhelming 58,172 vote majority.",
        source: "Election Day Record"
      },
      {
        id: "gal-3",
        src: "images/image copy 5.png",
        title: "Inked Democracy — The Dual Victory",
        category: "together",
        year: "2023",
        location: "Suryapet District",
        desc: "Uttam Kumar Reddy and Padmavathi Reddy proudly show their inked fingers alongside jubilant supporters following voting.",
        source: "National Media Record"
      },
      {
        id: "gal-4",
        src: "images/image copy 11.png",
        title: "Ministerial Review on Water Security",
        category: "uttam",
        year: "2026",
        location: "Secretariat, Hyderabad",
        desc: "High-level review meeting directing chief engineers on water releases and time-bound project completions.",
        source: "Telangana I&PR"
      },
      {
        id: "gal-5",
        src: "images/image copy 3.png",
        title: "Community Representation & Women's Voice",
        category: "padmavathi",
        year: "2025",
        location: "Kodad",
        desc: "Architect and MLA Padmavathi Reddy in discussions with women ward members on civic amenities.",
        source: "Constituency Media"
      },
      {
        id: "gal-6",
        src: "images/image copy.png",
        title: "35 Years of Shared Public Dedication",
        category: "together",
        year: "2025",
        location: "Huzurnagar Residence",
        desc: "A moment of shared reflection marking three and a half decades of shared partnership in public service.",
        source: "Archival Collection"
      },
      {
        id: "gal-7",
        src: "images/image copy 7.png",
        title: "Irrigation Policy & Inter-State Water Defense",
        category: "uttam",
        year: "2026",
        location: "Media Centre, Hyderabad",
        desc: "Press conference reaffirming that Telangana will not surrender a single drop of its rightful Krishna and Godavari share.",
        source: "The Hindu / Deccan Chronicle"
      },
      {
        id: "gal-8",
        src: "images/image copy 4.png",
        title: "Legislative Oversight on Urban Planning",
        category: "padmavathi",
        year: "2024",
        location: "Kodad Town",
        desc: "Reviewing spatial blueprints and civil engineering layouts for the newly upgraded Kodad civic amenities.",
        source: "Municipal Records"
      },
      {
        id: "gal-9",
        src: "images/image copy 8.png",
        title: "The Indian Express 'Idea Exchange'",
        category: "archive",
        year: "2026",
        location: "New Delhi",
        desc: "Articulating state autonomy, irrigation economics, and federal fiscal relations before national media editors.",
        source: "The Indian Express"
      },
      {
        id: "gal-10",
        src: "images/image copy 9.png",
        title: "Floor of the Telangana Legislative Assembly",
        category: "uttam",
        year: "2026",
        location: "Hyderabad Assembly",
        desc: "Debating key water bills and presenting verified budgetary facts regarding previous regime fiscal irregularities.",
        source: "Assembly Secretariat"
      },
      {
        id: "gal-11",
        src: "images/image copy 10.png",
        title: "Dignified Statesmanship",
        category: "uttam",
        year: "2025",
        location: "Suryapet",
        desc: "Official portrait reflecting five decades of service rooted in military valor and electoral continuity.",
        source: "Official Portraiture"
      },
      {
        id: "gal-12",
        src: "images/image copy 12.png",
        title: "Archival Portrait — Public Record",
        category: "archive",
        year: "2024",
        location: "Hyderabad",
        desc: "High-contrast archival photography captured during key cabinet deliberations.",
        source: "State Archives"
      }
    ],
    media: {
      leadQuote: "“Water security is not a political debate; it is foundational economic infrastructure for the next century.”",
      leadSpeaker: "N. Uttam Kumar Reddy • Zee Media Conclave, New Delhi (Sept 2026)",
      items: [
        {
          date: "Sept 19, 2026",
          title: "Kodad Mega Job Mela: 300+ Companies Recruit Rural Youth",
          source: "The New Indian Express",
          videoId: "fLDs5svT_js",
          desc: "Uttam Kumar Reddy & Padmavathi Reddy inaugurate record-breaking job fair bridging MNC recruiters with local talent."
        },
        {
          date: "Sept 12, 2026",
          title: "Telangana Assembly: MLA Padmavathi Calls for Women-Friendly Urban Infra",
          source: "The Hindu",
          videoId: "fLDs5svT_js",
          desc: "Architect-legislator delivers powerful debate on CURE Bill, mandating sanitary amenities in commercial establishments."
        },
        {
          date: "Sept 07, 2026",
          title: "Telangana Will Not Forego a Single Drop of River Waters: Irrigation Minister",
          source: "The Hans India",
          videoId: "fLDs5svT_js",
          desc: "Uttam details uncompromising stance before KWDT-II regarding Krishna & Godavari allocations."
        },
        {
          date: "Aug 30, 2026",
          title: "1000 Days of Government: Restored Democracy, Delivered Welfare",
          source: "The Hindu / Deccan Chronicle",
          videoId: "fLDs5svT_js",
          desc: "Ministerial accountability statement on governance milestones, farmer crop insurance, and fine rice rollouts."
        }
      ]
    }
  },

  te: {
    hero: {
      tag: "ఐఎన్‌సీ • అధికారిక ఆర్కైవ్ • తెలంగాణ",
      title: "ఉత్తమ్ కుమార్ రెడ్డి <span class=\"hero-amp\">&amp;</span> పద్మావతి రెడ్డి",
      subtitle: "సైనిక సేవ నుంచి ప్రజా సేవ వరకు — రెండు విభిన్న ప్రయాణాలు, ఒకే ప్రజా సంక్షేమ లక్ష్యం",
      uttamRole: "సాగునీటి & పౌర సరఫరాల శాఖ మంత్రి, తెలంగాణ ప్రభుత్వం",
      uttamBio: "భారత వైమానిక దళ మాజీ ఫైటర్ పైలట్ (మిగ్-21/23), భారత రాష్ట్రపతి ఏడీసీ, 6 సార్లు గెలిచిన ఎమ్మెల్యే & ఎంపీ.",
      padmavathiRole: "ఎమ్మెల్యే, కోదాడ నియోజకవర్గం",
      padmavathiBio: "వృత్తిరీత్యా ఆర్కిటెక్ట్, గ్రాడ్యుయేట్ ప్రొఫెషనల్, మహిళా సాధికారత & ఆధునిక మౌలిక వసతుల వక్త.",
      stats: [
        { num: "25+", label: "సంవత్సరాల ప్రజాసేవ" },
        { num: "08", label: "ఎన్నికల విజయాలు" },
        { num: "3.1 కోట్లు", label: "సన్నబియ్యం లబ్ధిదారులు" },
        { num: "35 సం.", label: "ఉమ్మడి జీవిత ప్రయాణం" }
      ]
    },
    manifesto: {
      lead: "ప్రజా నిబద్ధత",
      quote: "“రెండు విశిష్ట ప్రయాణాలు. ఒకరు <em>భారత వైమానిక దళ</em> క్రమశిక్షణతో, మరొకరు <em>ఆర్కిటెక్చర్ ఆలోచనా విధానంతో</em> ప్రజాక్షేత్రంలో ప్రజా సేవ చేస్తున్నారు.”",
      col1: "సూర్యాపేట జిల్లాలోని హుజూర్నగర్ మరియు కోదాడ నియోజకవర్గాల్లో ఉత్తమ్ కుమార్ రెడ్డి మరియు పద్మావతి రెడ్డి ప్రజాసేవ విశిష్టమైన ప్రజావిశ్వాసానికి నిదర్శనం.",
      col2: "సాగునీటి భద్రత, 3.1 కోట్ల మందికి సన్నబియ్యం పంపిణీ, పట్టణ మౌలిక వసతుల్లో మహిళల గౌరవం మరియు భారీ ఉపాధి కల్పనలతో నిరంతరం ప్రజాసేవలో ఉన్నారు."
    },
    uttam: {
      eyebrow: "వ్యక్తిగత ప్రొఫైల్ • 01",
      name: "ఎన్. ఉత్తమ్ కుమార్ రెడ్డి",
      pills: [
        "క్యాబినెట్ మంత్రి, తెలంగాణ ప్రభుత్వం",
        "హుజూర్నగర్ ఎమ్మెల్యే (6వ సారి)",
        "మాజీ ఎంపీ, నల్గొండ (17వ లోక్‌సభ)",
        "మాజీ టీపీసీసీ అధ్యక్షులు (2015–2021)",
        "మాజీ ఫ్లైట్ లెఫ్టినెంట్, ఐఏఎఫ్"
      ],
      bio: "నలమాద ఉత్తమ్ కుమార్ రెడ్డి (జననం జూన్ 20, 1962) ప్రస్తుతం తెలంగాణ ప్రభుత్వంలో కీలకమైన సాగునీటి పారుదల మరియు ఆహార పౌర సరఫరాల శాఖ మంత్రిగా సేవలందిస్తున్నారు. ఎన్‌డీఏ 61వ బ్యాచ్‌లో శిక్షణ పొంది భారత వైమానిక దళంలో ఫైటర్ పైలట్‌గా విధులు నిర్వర్తించి, అనంతరం 25 ఏళ్లకు పైగా ప్రజా సేవలో కొనసాగుతున్నారు.",
      facts: [
        { label: "స్వగ్రామం", val: "తాటిపాముల, తిరుమలగిరి మండలం" },
        { label: "విద్యార్హత", val: "బీఎస్సీ, నేషనల్ డిఫెన్స్ అకాడమీ, పూణే" },
        { label: "శాసనసభ రికార్డు", val: "కోదాడ (1999–2009), హుజూర్నగర్ (2009–2019, 2023–ప్రస్తుతం)" },
        { label: "పార్లమెంటు రికార్డు", val: "నల్గొండ ఎంపీ (2019–2024), 85% హాజరు, 187 ప్రశ్నలు" }
      ],
      military: {
        title: "ఫైటర్ పైలట్ & రాష్ట్రపతి భవన్ సేవలు",
        tag: "సర్వీస్ నం: 16971 F(P) • ఫ్లైట్ లెఫ్టినెంట్",
        points: [
          { label: "నడిపిన యుద్ధ విమానాలు", val: "మిగ్-21 మరియు మిగ్-23 సూపర్ సోనిక్ ఫైటర్లు" },
          { label: "కార్యాచరణ రంగాలు", val: "ఇండో-చైనా సరిహద్దు (తేజ్‌పూర్, అసోం) & పశ్చిమ సెక్టార్" },
          { label: "సైనిక పురస్కారాలు", val: "సియాచిన్ గ్లేసియర్ మిషన్లకు విశిష్ట సేవా ప్రశంసలు" },
          { label: "రాష్ట్రపతి ఏడీసీ", val: "రాష్ట్రపతులు ఆర్. వెంకట్రామన్, డా. శంకర్ దయాళ్ శర్మల వద్ద ఏడీసీ" }
        ]
      }
    },
    padmavathi: {
      eyebrow: "వ్యక్తిగత ప్రొఫైల్ • 02",
      name: "ఎన్. పద్మావతి రెడ్డి",
      pills: [
        "ఎమ్మెల్యే, కోదాడ (2014–2018, 2023–ప్రస్తుతం)",
        "వృత్తిరీత్యా ఆర్కిటెక్ట్",
        "గ్రాడ్యుయేట్ ప్రొఫెషనల్",
        "మహిళా హక్కుల శాసనసభ గొంతుక"
      ],
      bio: "నలమాద పద్మావతి రెడ్డి కోదాడ అసెంబ్లీ నియోజకవర్గం నుంచి ప్రాతినిధ్యం వహిస్తున్నారు. తెలంగాణ శాసనసభలో వృత్తిరీత్యా ఆర్కిటెక్ట్ అయిన అరుదైన ప్రజాప్రతినిధులలో ఒకరిగా, పట్టణ మౌలిక సదుపాయాల రూపకల్పనలో మరియు మహిళా సాధికారతలో కీలక పాత్ర పోషిస్తున్నారు.",
      facts: [
        { label: "వృత్తి", val: "ఆర్కిటెక్ట్ & రాజకీయ నాయకురాలు" },
        { label: "నియోజకవర్గం", val: "కోదాడ (అసెంబ్లీ నియోజకవర్గం నం. 90)" },
        { label: "2023 విజయం", val: "1,25,783 ఓట్లు (58,172 ఓట్ల భారీ మెజారిటీ)" },
        { label: "ప్రాధాన్యతలు", val: "మహిళా మౌలిక వసతులు, స్వయం ఉపాధి, నిరుద్యోగ యువతకు ఉద్యోగాలు" }
      ],
      service: {
        title: "శాసనసభలో పట్టణ ప్రణాళిక & ప్రజా సంస్కరణలు",
        tag: "పట్టణ పాలన & సామాజిక మౌలిక వసతులు",
        points: [
          { label: "క్యూర్ బిల్లు 2026", val: "వాణిజ్య సముదాయాల్లో మహిళలకు ప్రత్యేక టాయిలెట్ల తప్పనిసరి చట్టం" },
          { label: "చెత్త నిర్వహణ", val: "ఆసుపత్రి, ఆహార వ్యర్థాల శాస్త్రీయ నిర్వహణపై గళం" },
          { label: "ఆర్థిక స్వావలంబన", val: "ఇందిరమ్మ మహిళా శక్తి ద్వారా శ్రీనిధి స్వయం ఉపాధి కేంద్రాలు" },
          { label: "మహిళా రక్షణ", val: "మహిళా పోలీసుల గౌరవం మరియు ప్రజాక్షేత్రంలో క్రమశిక్షణపై స్పష్టమైన వైఖరి" }
        ]
      }
    },
    together: {
      eyebrow: "ఉమ్మడి ప్రజా ప్రయాణం",
      title: "సమీప నియోజకవర్గాలు.<br><span class=\"gradient-text-inc\">సమీకృత ప్రజాభివృద్ధి.</span>",
      lead: "హుజూర్నగర్ మరియు కోదాడ నియోజకవర్గాలకు ఏకకాలంలో ప్రాతినిధ్యం వహిస్తూ సూర్యాపేట జిల్లా సమగ్ర ప్రగతికి బాటలు వేస్తున్న ఆదర్శ ప్రజాప్రతినిధుల జోడీ.",
      synergies: [
        { num: "01", title: "మెగా జాబ్ మేళా", desc: "సెప్టెంబర్ 19, 2026న కోదాడలో 300+ కంపెనీలతో నిరుద్యోగ యువతకు ప్రత్యక్ష ఉద్యోగ అవకాశాలు." },
        { num: "02", title: "సాగునీటి ప్రగతి", desc: "కృష్ణా బేసిన్ కెనాల్ నెట్‌వర్క్ ఆధునీకరణ ద్వారా వేలాది ఎకరాలకు సాగునీరు భరోసా." },
        { num: "03", title: "మహిళా సంక్షేమం", desc: "ఇందిరమ్మ చీరల పంపిణీ, డ్వాక్రా సంఘాలకు శ్రీనిధి రుణాలు మరియు ఉచిత సన్నబియ్యం." },
        { num: "04", title: "రచ్చబండ కార్యక్రమాలు", desc: "గ్రామాల్లో ప్రత్యక్షంగా ప్రజలతో మమేకమై భూ సమస్యలు మరియు ప్రజా సమస్యల పరిష్కారం." }
      ]
    },
    timeline: [
      { year: "1979", person: "uttam", title: "నేషనల్ డిఫెన్స్ అకాడమీ ప్రవేశం", desc: "జనవరి 1, 1979న 61వ ఎన్‌డీఏ కోర్సులో ప్రవేశించి సైనిక జీవితం ప్రారంభం.", source: "ఐఏఎఫ్ రికార్డు" },
      { year: "1982", person: "uttam", title: "ఫైటర్ పైలట్‌గా కమిషన్", desc: "పైలట్ ఆఫీసర్‌గా కమిషన్ పొంది మిగ్-21, మిగ్-23 యుద్ధ విమానాలు నడిపారు.", source: "గెజిట్ ఆఫ్ ఇండియా" },
      { year: "1987", person: "uttam", title: "సియాచిన్ ఆపరేషన్లు", desc: "సియాచిన్ గ్లేసియర్ మిషన్లలో పాల్గొని విశిష్ట సేవా ప్రశంసలు అందుకున్నారు.", source: "రక్షణ మంత్రిత్వ శాఖ" },
      { year: "1990", person: "uttam", title: "రాష్ట్రపతికి ఏడీసీగా సేవలు", desc: "రాష్ట్రపతి భవన్‌లో రాష్ట్రపతులు ఆర్. వెంకట్రామన్, డా. శంకర్ దయాళ్ శర్మల వద్ద ఏడీసీ.", source: "రాష్ట్రపతి భవన్ రికార్డు" },
      { year: "1991", person: "uttam", title: "యుద్ధ విమాన ప్రమాదం & స్వచ్ఛంద విరమణ", desc: "యుద్ధ విమానం ఎజెక్షన్ గాయం కారణంగా 1991లో విరమణ పొంది ప్రజా సేవలోకి ప్రవేశం.", source: "అధికారిక రికార్డు" },
      { year: "1999", person: "uttam", title: "కోదాడ ఎమ్మెల్యేగా మొదటి విజయం", desc: "ఉమ్మడి ఆంధ్రప్రదేశ్ శాసనసభకు కోదాడ నుంచి తొలిసారి ఎమ్మెల్యేగా ఎన్నిక.", source: "ఎన్నికల సంఘం" },
      { year: "2004", person: "uttam", title: "సాగునీటి & విద్యుత్ శాఖ మంత్రి", desc: "రెండోసారి ఎమ్మెల్యేగా గెలిచి డా. వైఎస్సార్ క్యాబినెట్‌లో మంత్రిగా బాధ్యతలు.", source: "ప్రభుత్వ రికార్డు" },
      { year: "2009", person: "uttam", title: "హుజూర్నగర్ ఎమ్మెల్యేగా విజయం", desc: "కొత్తగా ఏర్పడిన హుజూర్నగర్ నియోజకవర్గం నుంచి మూడోసారి శాసనసభకు ఎన్నిక.", source: "ఈసీఐ నివేదిక" },
      { year: "2014", person: "both", title: "చారిత్రక ద్వయం విజయం", desc: "తెలంగాణ ఆవిర్భావం తర్వాత ఉత్తమ్ కుమార్ రెడ్డి హుజూర్నగర్ నుంచి, పద్మావతి రెడ్డి కోదాడ నుంచి ఏకకాలంలో విజయం.", source: "ఈసీఐ 2014" },
      { year: "2015", person: "uttam", title: "టీపీసీసీ అధ్యక్షుడిగా నియామకం", desc: "మార్చి 2, 2015న తెలంగాణ ప్రదేశ్ కాంగ్రెస్ కమిటీ అధ్యక్షుడిగా బాధ్యతల స్వీకారం.", source: "ఏఐసీసీ" },
      { year: "2018", person: "uttam", title: "హుజూర్నగర్ పునఃఎన్నిక", desc: "హుజూర్నగర్ నుంచి 5వ సారి ఎమ్మెల్యేగా ఘన విజయం.", source: "ఈసీఐ 2018" },
      { year: "2019", person: "uttam", title: "నల్గొండ ఎంపీగా ఘన విజయం", desc: "లక్షకు పైగా మెజారిటీతో 17వ లోక్‌సభకు ఎన్నిక; రక్షణ స్థాయీ సంఘం సభ్యుడిగా సేవలు.", source: "లోక్‌సభ సెక్రటేరియట్" },
      { year: "2023", person: "both", title: "2023 అసెంబ్లీ రికార్డు విజయం", desc: "హుజూర్నగర్ నుంచి ఉత్తమ్ (44,888 మెజారిటీ), కోదాడ నుంచి పద్మావతి (58,172 మెజారిటీ)తో చారిత్రక విజయం.", source: "ఈసీఐ డిసెంబర్ 2023" },
      { year: "2023", person: "uttam", title: "క్యాబినెట్ మంత్రిగా ప్రమాణం", desc: "డిసెంబర్ 7, 2023న సాగునీటి పారుదల & పౌర సరఫరాల శాఖ మంత్రిగా ప్రమాణ స్వీకారం.", source: "తెలంగాణ గెజిట్" },
      { year: "2025", person: "both", title: "సన్నబియ్యం పథకం & 35వ వార్షికోత్సవం", desc: "3.1 కోట్ల ప్రజలకు సన్నబియ్యం పథకం అమలు; దాంపత్య జీవిత 35వ వార్షికోత్సవం.", source: "పౌర సరఫరాల శాఖ" },
      { year: "2026", person: "both", title: "పాలమూరు-రంగారెడ్డి & మెగా జాబ్ మేళా", desc: "30 నెలల్లో పాలమూరు పూర్తి లక్ష్యం, కృష్ణా జలాల పరిరక్షణ మరియు కోదాడలో మెగా జాబ్ మేళా.", source: "ద హిందూ / ఇండియన్ ఎక్స్‌ప్రెస్" }
    ],
    recordMetrics: [
      { num: "30 నెలలు", title: "పాలమూరు పూర్తి లక్ష్యం", desc: "దక్షిణ తెలంగాణకు సాగునీరు అందించేందుకు భూసేకరణకు ₹5,000 కోట్లు కేటాయింపు." },
      { num: "3.15 కోట్లు", title: "రేషన్ కార్డుల పరిధి", desc: "అర్హులైన ప్రతి కుటుంబానికి నూతన కార్డులతో పాటు ఉచిత సన్నబియ్యం పంపిణీ." },
      { num: "568 టీఎంసీ", title: "కృష్ణా జలాల హక్కు", desc: "కేడబ్ల్యూడీటీ-2 ఎదుట తెలంగాణకు 70% న్యాయమైన వాటా కోసం రాజీలేని పోరాటం." },
      { num: "300+", title: "జాబ్ మేళా కంపెనీలు", desc: "కోదాడలో గ్రామీణ మరియు పట్టణ యువతకు బహుళజాతి కంపెనీల్లో కొలువుల కల్పన." }
    ],
    projects: [
      {
        index: "01",
        name: "పాలమూరు-రంగారెడ్డి ఎత్తిపోతల పథకం",
        tag: "కీలక సాగునీటి ప్రాజెక్ట్",
        person: "ఉత్తమ్ కుమార్ రెడ్డి",
        budget: "₹5,000 కోట్లు భూసేకరణకు",
        status: "30 నెలల్లో పూర్తి లక్ష్యం",
        desc: "నాగర్‌కర్నూల్, మహబూబ్‌నగర్, వికారాబాద్, రంగారెడ్డి జిల్లాలకు కృష్ణా జలాలను తరలించే మహత్తర ఎత్తిపోతల పథకం.",
        source: "ద హిందూ"
      },
      {
        index: "02",
        name: "రాష్ట్రవ్యాప్త సన్నబియ్యం పంపిణీ పథకం",
        tag: "ఆహార & పౌర సరఫరాలు",
        person: "ఉత్తమ్ కుమార్ రెడ్డి",
        budget: "ప్రభుత్వ బడ్జెట్",
        status: "అమలులో ఉంది (3.1 కోట్ల మందికి)",
        desc: "తెల్ల రేషన్ కార్డుదారులకు ప్రతినెలా తల ఒక్కింటికి 6 కిలోల నాణ్యమైన సన్నబియ్యం అందించే చారిత్రక పథకం.",
        source: "పౌర సరఫరాల శాఖ"
      },
      {
        index: "03",
        name: "మహిళా మౌలిక వసతులు & క్యూర్ బిల్లు 2026",
        tag: "పట్టణ పాలన & శానిటేషన్",
        person: "పద్మావతి రెడ్డి",
        budget: "శాసనసభ చట్టం",
        status: "ఆమోదం పొందింది",
        desc: "అన్ని వాణిజ్య సముదాయాలు, షాపింగ్ మాల్స్‌లో మహిళలకు సురక్షితమైన టాయిలెట్లను తప్పనిసరి చేస్తూ శాసనసభలో ఆమోదింపజేసిన చట్టం.",
        source: "తెలంగాణ శాసనసభ"
      },
      {
        index: "04",
        name: "కల్వకుర్తి, నెట్టెంపాడు, భీమా & కోయిల్ సాగర్",
        tag: "సాగునీటి భద్రత",
        person: "ఉత్తమ్ కుమార్ రెడ్డి",
        budget: "₹1,546 కోట్లు",
        status: "మార్చి 2027 నాటికి పూర్తి",
        desc: "నాలుగు కీలక ప్రాజెక్టుల చివరి ఆయకట్టుకు నీరందించేందుకు భారీగా నిధులు విడుదల చేసి పనుల వేగవంతం.",
        source: "సాగునీటి శాఖ"
      },
      {
        index: "05",
        name: "శ్రీనిధి మహిళా స్వయం ఉపాధి కేంద్రాలు",
        tag: "మహిళా సాధికారత",
        person: "పద్మావతి రెడ్డి",
        budget: "ఇందిరమ్మ మహిళా శక్తి",
        status: "కోదాడ & మునగాలలో ప్రారంభం",
        desc: "మహిళా సంఘాలకు వడ్డీలేని రుణాలు మరియు సాంకేతిక నైపుణ్యాల కల్పనతో ఆర్థిక స్వావలంబన కేంద్రాల ఏర్పాటు.",
        source: "గ్రామీణాభివృద్ధి శాఖ"
      },
      {
        index: "06",
        name: "మున్నేరు-పాలేరు గ్రావిటీ లింక్ ప్రాజెక్ట్",
        tag: "జల నిర్వహణ",
        person: "ఉత్తమ్ కుమార్ రెడ్డి",
        budget: "రాష్ట్ర నిధులు",
        status: "పనులు ప్రారంభం",
        desc: "ఏటా 50 టీఎంసీల వరద నీటిని ఒడిసిపట్టి మూడు జిల్లాలకు అందించడంతో పాటు 2 మెగావాట్ల జలవిద్యుత్ ఉత్పత్తి.",
        source: "ద హన్స్ ఇండియా"
      }
    ],
    gallery: [
      {
        id: "gal-1",
        src: "images/image copy 6.png",
        title: "హుజూర్నగర్ ప్రజాసభలో ప్రసంగం",
        category: "uttam",
        year: "2024",
        location: "హుజూర్నగర్",
        desc: "రైతు సంక్షేమం మరియు సాగునీటి నిర్వహణపై ప్రజలనుద్దేశించి ప్రసంగిస్తున్న మంత్రి ఉత్తమ్ కుమార్ రెడ్డి.",
        source: "పత్రికా సమాచారం"
      },
      {
        id: "gal-2",
        src: "images/image copy 2.png",
        title: "కోదాడ ప్రజా దీవెన",
        category: "padmavathi",
        year: "2023",
        location: "కోదాడ",
        desc: "58,172 ఓట్ల భారీ మెజారిటీతో విజయం సాధించిన తర్వాత ప్రజలకు నమస్కరిస్తున్న పద్మావతి రెడ్డి.",
        source: "ఎన్నికల ఫలితాల రికార్డు"
      },
      {
        id: "gal-3",
        src: "images/image copy 5.png",
        title: "ప్రజాస్వామ్య విజయం — ఓటు వేసిన వేళ",
        category: "together",
        year: "2023",
        location: "సూర్యాపేట",
        desc: "ఎన్నికల్లో ఓటు హక్కు వినియోగించుకుని ప్రజలతో కలసి విజయోత్సాహం ప్రదర్శిస్తున్న దంపతులు.",
        source: "మీడియా రికార్డు"
      },
      {
        id: "gal-4",
        src: "images/image copy 11.png",
        title: "సాగునీటి రంగంపై ఉన్నత స్థాయి సమీక్ష",
        category: "uttam",
        year: "2026",
        location: "హైదరాబాద్ సచివాలయం",
        desc: "ప్రాజెక్టుల సమయపాలన మరియు రైతులకు సాగునీటి విడుదలపై ఇంజనీర్లతో సమీక్షిస్తున్న దృశ్యం.",
        source: "తెలంగాణ సమాచార పౌర సంబంధాల శాఖ"
      },
      {
        id: "gal-5",
        src: "images/image copy 3.png",
        title: "మహిళా సాధికారత & ప్రజా సంబంధాలు",
        category: "padmavathi",
        year: "2025",
        location: "కోదాడ",
        desc: "కోదాడ మహిళా ప్రతినిధులతో గ్రామీణ అభివృద్ధిపై చర్చిస్తున్న ఎమ్మెల్యే పద్మావతి రెడ్డి.",
        source: "నియోజకవర్గ సమాచారం"
      },
      {
        id: "gal-6",
        src: "images/image copy.png",
        title: "35 ఏళ్ల ప్రజా ప్రస్థానం",
        category: "together",
        year: "2025",
        location: "హుజూర్నగర్ నివాసం",
        desc: "మూడున్నర దశాబ్దాల దాంపత్య మరియు ప్రజాసేవ ప్రయాణంలో స్మృతి చిత్రం.",
        source: "ఆర్కైవ్ సేకరణ"
      },
      {
        id: "gal-7",
        src: "images/image copy 7.png",
        title: "నదీ జలాల పరిరక్షణపై మీడియా సమావేశం",
        category: "uttam",
        year: "2026",
        location: "హైదరాబాద్",
        desc: "తెలంగాణ న్యాయమైన కృష్ణా, గోదావరి జలాల్లో ఒక్క చుక్క కూడా వదులుకోబోమని స్పష్టం చేసిన వేళ.",
        source: "ద హిందూ"
      },
      {
        id: "gal-8",
        src: "images/image copy 4.png",
        title: "పట్టణ ప్రణాళికపై సమీక్ష",
        category: "padmavathi",
        year: "2024",
        location: "కోదాడ",
        desc: "కోదాడ పట్టణ సుందరీకరణ మరియు మున్సిపల్ అభివృద్ధి బ్లూప్రింట్లను పరిశీలిస్తూ.",
        source: "మున్సిపల్ రికార్డు"
      },
      {
        id: "gal-9",
        src: "images/image copy 8.png",
        title: "ఇండియన్ ఎక్స్‌ప్రెస్ 'ఐడియా ఎక్స్ఛేంజ్'",
        category: "archive",
        year: "2026",
        location: "న్యూఢిల్లీ",
        desc: "జాతీయ విధానాలు, సాగునీరు మరియు సమాఖ్య వ్యవస్థపై జాతీయ సంపాదకులతో సంభాషణ.",
        source: "ద ఇండియన్ ఎక్స్‌ప్రెస్"
      },
      {
        id: "gal-10",
        src: "images/image copy 9.png",
        title: "శాసనసభలో గళం",
        category: "uttam",
        year: "2026",
        location: "తెలంగాణ శాసనసభ",
        desc: "శాసనసభలో సాగునీటి ప్రాజెక్టుల పురోగతి మరియు వాస్తవాలపై సుదీర్ఘ చర్చ.",
        source: "శాసనసభ రికార్డు"
      },
      {
        id: "gal-11",
        src: "images/image copy 10.png",
        title: "నిబద్ధత కలిగిన నాయకత్వం",
        category: "uttam",
        year: "2025",
        location: "సూర్యాపేట",
        desc: "సైనిక నేపథ్యం నుండి రాజకీయ రాజనీతి వరకు సాగిన సుదీర్ఘ ప్రస్థానం.",
        source: "అధికారిక చిత్రం"
      },
      {
        id: "gal-12",
        src: "images/image copy 12.png",
        title: "ఆర్కైవ్ చిత్రం — ప్రజా రికార్డు",
        category: "archive",
        year: "2024",
        location: "హైదరాబాద్",
        desc: "కీలక ప్రభుత్వ సమావేశాల సమయంలో తీసిన చారిత్రక ఛాయాచిత్రం.",
        source: "ప్రజా ఆర్కైవ్స్"
      }
    ],
    media: {
      leadQuote: "“సాగునీటి భద్రత అనేది కేవలం ప్రాజెక్టుల నిర్మాణం కాదు; అది రాబోయే శతాబ్దానికి బలమైన ఆర్థిక పునాది.”",
      leadSpeaker: "ఎన్. ఉత్తమ్ కుమార్ రెడ్డి • జీ మీడియా కాంక్లేవ్, న్యూఢిల్లీ (సెప్టెంబర్ 2026)",
      items: [
        {
          date: "సెప్టెంబర్ 19, 2026",
          title: "కోదాడ మెగా జాబ్ మేళా: 300+ కంపెనీల ద్వారా యువతకు ఉపాధి",
          source: "ద న్యూ ఇండియన్ ఎక్స్‌ప్రెస్",
          videoId: "fLDs5svT_js",
          desc: "ఉత్తమ్ కుమార్ రెడ్డి, పద్మావతి రెడ్డి చేతుల మీదుగా రికార్డు స్థాయిలో జాబ్ మేళా ప్రారంభం."
        },
        {
          date: "సెప్టెంబర్ 12, 2026",
          title: "అసెంబ్లీలో ఎమ్మెల్యే పద్మావతి రెడ్డి: వాణిజ్య సముదాయాల్లో మహిళా టాయిలెట్లు తప్పనిసరి",
          source: "ద హిందూ",
          videoId: "fLDs5svT_js",
          desc: "ఆర్కిటెక్ట్ దృష్టితో క్యూర్ బిల్లుపై సమగ్ర ప్రసంగం చేసి అందరి ప్రశంసలు అందుకున్న వైనం."
        },
        {
          date: "సెప్టెంబర్ 07, 2026",
          title: "నదీ జలాల్లో ఒక్క చుక్క కూడా వదులుకోబోము: సాగునీటి మంత్రి ఉత్తమ్",
          source: "ద హన్స్ ఇండియా",
          videoId: "fLDs5svT_js",
          desc: "కేడబ్ల్యూడీటీ-2 ట్రిబ్యునల్ ఎదుట తెలంగాణ ప్రయోజనాల రక్షణపై స్పష్టమైన ప్రకటన."
        },
        {
          date: "ఆగస్టు 30, 2026",
          title: "ప్రజా ప్రభుత్వ 1000 రోజుల పాలన: సంక్షేమం, ప్రజాస్వామ్య పునరుద్ధరణ",
          source: "ద హిందూ / డెక్కన్ క్రానికల్",
          videoId: "fLDs5svT_js",
          desc: "రైతు రుణమాఫీ, పంట బీమా మరియు సన్నబియ్యం విజయాలపై అధికారిక సమీక్ష."
        }
      ]
    }
  }
};
