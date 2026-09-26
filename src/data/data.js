export const categories = [
  {
    id: "technology",
    label: "Technology",
    companies: [
      {
        name: "NVIDIA",
        careersUrl:
          "https://jobs.nvidia.com/careers?query={query}&start=0&pid=893397487444&sort_by=timestamp",
        logo: "https://iprsoftwaremedia.com/219/files/202512/692f56983d6332f89cbbc58b_nvidia-logo-horiz-wht-16x9/nvidia-logo-horiz-wht-16x9_thmb.png?v=44a60e3f-c4e5-4d8a-879f-ec5121ad6f4b",
        confidence_score_to_join: "96%",
        type: "mnc",
        approx_employee_count: 30000,
        specialized_in: "GPU Computing, AI Hardware, Deep Learning Systems",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 28LPA, finance_head: 65LPA",
      },
      {
        name: "Adobe",
        careersUrl:
          "https://careers.adobe.com/us/en/search-results?keywords={query}",
        logo: "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=1200&format=pjpg&optimize=medium",
        confidence_score_to_join: "94%",
        type: "mnc",
        approx_employee_count: 29000,
        specialized_in:
          "Digital Media, Creative Software, Enterprise Cloud Solutions",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 26LPA, finance_head: 55LPA",
      },
      {
        name: "ServiceNow",
        careersUrl:
          "https://careers.servicenow.com/jobs/?search={query}&origin=global",
        logo: "https://brandlogos.net/wp-content/uploads/2022/07/servicenow-logo_brandlogos.net_aazvs-512x512.png",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 23000,
        specialized_in: "Enterprise Workflow Automation, IT Management",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 24LPA, finance_head: 50LPA",
      },
      {
        name: "Salesforce",
        careersUrl:
          "https://www.salesforce.com/company/careers/jobs/?search={query}&page=1",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/960px-Salesforce.com_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210504050649",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 72000,
        specialized_in: "Enterprise CRM, Cloud Software, Data Analytics",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 25LPA, finance_head: 52LPA",
      },
      {
        name: "Databricks",
        careersUrl:
          "https://www.databricks.com/company/careers/open-positions?department=all&location=all&search={query}",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "95%",
        type: "growth_stage",
        approx_employee_count: 7000,
        specialized_in:
          "Data Lakehouse, Apache Spark, Enterprise AI Infrastructure",
        average_salary:
          "senior_engg: 50LPA, hr_manager: 30LPA, finance_head: 70LPA",
      },
      {
        name: "Atlassian",
        careersUrl:
          "https://www.atlassian.com/company/careers/all-jobs?team={query}&location=&search={query}",
        logo: "https://atlassian.design/assets/dab2e15ce8c4/21f597d1f31e99180e9ccf2e82b47ac0/logo-centered.png",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 11000,
        specialized_in:
          "Developer Collaboration Tools, Agile Workflows (Jira, Confluence)",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 27LPA, finance_head: 58LPA",
      },
      {
        name: "CrowdStrike",
        careersUrl:
          "https://crowdstrike.wd5.myworkdayjobs.com/en-GB/crowdstrikecareers?q={query}",
        logo: "https://1000logos.net/wp-content/uploads/2024/08/CrowdStrike-Emblem.png",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 9000,
        specialized_in: "Endpoint Security, Cloud Threat Protection",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 48LPA",
      },
      {
        name: "Palo Alto Networks",
        careersUrl:
          "https://jobs.paloaltonetworks.com/en/search-jobs?k={query}&l=&orgIds=47263",
        logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imwidth=480",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 15000,
        specialized_in: "Cybersecurity, Next-Gen Firewalls, Cloud Security",
        average_salary:
          "senior_engg: 37LPA, hr_manager: 24LPA, finance_head: 50LPA",
      },
      {
        name: "Snowflake",
        careersUrl:
          "https://careers.snowflake.com/us/en/search-results?keywords={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/1280px-Snowflake_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 7000,
        specialized_in: "Cloud Data Warehousing, Enterprise Data Architecture",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 26LPA, finance_head: 60LPA",
      },
      {
        name: "Intuit",
        careersUrl:
          "https://jobs.intuit.com/search-jobs?k={query}&l=&orgIds=27595",
        logo: "https://logos-world.net/wp-content/uploads/2023/12/Intuit-Emblem.png",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 18000,
        specialized_in: "Financial Management Platforms (TurboTax, QuickBooks)",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 25LPA, finance_head: 52LPA",
      },
      {
        name: "Cloudflare",
        careersUrl: "https://www.cloudflare.com/careers/jobs/?search={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Cloudflare_Logo.svg/3840px-Cloudflare_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 4000,
        specialized_in:
          "Content Delivery Network, Edge Computing, DDoS Mitigation",
        average_salary:
          "senior_engg: 39LPA, hr_manager: 24LPA, finance_head: 50LPA",
      },
      {
        name: "Datadog",
        careersUrl: "https://careers.datadoghq.com/all-jobs/?s={query}",
        logo: "https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud4/media/image/Datadog_Logo_White%20on%20purle%20BG.png?VersionId=RkAgRAQ3dPrbgREIjvPmLPeoOKoweKB8",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 5200,
        specialized_in: "Cloud Monitoring, Observability Platform",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 48LPA",
      },
      {
        name: "Stripe",
        careersUrl: "https://stripe.com/careers/search?query={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/3840px-Stripe_Logo%2C_revised_2016.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "94%",
        type: "late_startup",
        approx_employee_count: 8000,
        specialized_in: "Financial Infrastructure, Payment Gateway Engineering",
        average_salary:
          "senior_engg: 48LPA, hr_manager: 29LPA, finance_head: 68LPA",
      },
      {
        name: "Workday",
        careersUrl:
          "https://workday.wd5.myworkdayjobs.com/Workday/?q={query}&source=Careers_Website",
        logo: "https://images.seeklogo.com/logo-png/25/1/workday-logo-png_seeklogo-255730.png",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 18800,
        specialized_in:
          "Cloud Human Capital Management, Enterprise Financial Systems",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 22LPA, finance_head: 46LPA",
      },
      {
        name: "Cisco",
        careersUrl:
          "https://careers.cisco.com/global/en/search-results?keywords={query}",
        logo: "https://logodownload.org/wp-content/uploads/2014/04/cisco-logo-0.png",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 84000,
        specialized_in: "Networking Infrastructure, IoT, Enterprise Hardware",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 20LPA, finance_head: 42LPA",
      },
      {
        name: "AMD",
        careersUrl:
          "https://careers.amd.com/careers-home/jobs?keywords={query}&sortBy=relevance&page=1",
        logo: "https://cdn.freebiesupply.com/logos/large/2x/amd-4-logo-png-transparent.png",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 26000,
        specialized_in: "Semiconductor Processors, Graphics Accelerators",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 21LPA, finance_head: 45LPA",
      },
      {
        name: "Intel",
        careersUrl:
          "https://intel.wd1.myworkdayjobs.com/en-US/External?q={query}&shared_id=NTA3OGJmNzQtNjNiOS00MWYyLWJlNDItYjdhMDAyM2I2OWVh&jobFamilyGroup=ace7a3d23b7e01a0544279031a0ec85c",
        logo: "https://images.hindustantimes.com/tech/img/2020/09/03/1600x900/Intel_1599127503950_1599127526950.JPG",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 124000,
        specialized_in:
          "Microprocessor Architecture, Semiconductor Fabrication",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 19LPA, finance_head: 40LPA",
      },
      {
        name: "IBM",
        careersUrl:
          "https://www.ibm.com/in-en/careers/search?q={query}&sort=dcdate_desc",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "81%",
        type: "mnc",
        approx_employee_count: 280000,
        specialized_in: "Hybrid Cloud Infrastructure, Enterprise IT Consulting",
        average_salary:
          "senior_engg: 22LPA, hr_manager: 18LPA, finance_head: 38LPA",
      },
      {
        name: "Oracle",
        careersUrl:
          "https://careers.oracle.com/en/sites/jobsearch/jobs?keyword={query}&location=BENGALURU%2C+KARNATAKA%2C+India&locationId=300001842985425&locationLevel=city&mode=location&radius=25&radiusUnit=MI",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/3840px-Oracle_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 164000,
        specialized_in: "Database Management Systems, OCI Cloud Services",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 40LPA",
      },
      {
        name: "SAP",
        careersUrl:
          "https://jobs.sap.com/search/?createNewAlert=false&q={query}&locationsearch=&optionsFacetsDD_department=&optionsFacetsDD_customfield3=&optionsFacetsDD_country=",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1280px-SAP_2011_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 108000,
        specialized_in:
          "Enterprise Resource Planning (ERP), Business Operations Software",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 20LPA, finance_head: 42LPA",
      },
      {
        name: "Uber",
        careersUrl: "https://jobs.uber.com/en/jobs/?search={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRR_y9up5G9TXo_EYiVd_edmGWiVnadcAQ9TnmuG5p6-zpdSV7Bb8tyQqQ&s=10",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 30000,
        specialized_in:
          "Distributed Logistics, Mobility Applications, Real-Time Systems",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 25LPA, finance_head: 55LPA",
      },
      {
        name: "Airbnb",
        careersUrl:
          "https://careers.airbnb.com/positions/?_search_input={query}",
        logo: "https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 6900,
        specialized_in: "Marketplace Infrastructure, Consumer Web Platforms",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 28LPA, finance_head: 62LPA",
      },
      {
        name: "Spotify",
        careersUrl:
          "https://www.lifeatspotify.com/jobs?c={query}&c=client-c&c=data&c={query}&c={query}&c=machine-learning&c=mobile&c={query}&c=security&c=tech-research&c=web&j=permanent",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/960px-Spotify_logo_with_text.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 9000,
        specialized_in:
          "Audio Streaming Technology, Recommendation Engine Algorithms",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 23LPA, finance_head: 48LPA",
      },
      {
        name: "LinkedIn",
        careersUrl:
          "https://www.linkedin.com/company/linkedin/jobs/?src=direct%2Fnone&veh=direct%2Fnone",
        logo: "https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 19000,
        specialized_in: "Social Networking Architecture, Graph Databases",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 26LPA, finance_head: 58LPA",
      },
      {
        name: "Qualcomm",
        careersUrl:
          "https://careers.qualcomm.com/careers?query={query}&start=0&pid=446718450778&sort_by=relevance",
        logo: "https://1000logos.net/wp-content/uploads/2020/08/Qualcomm-Logo.png",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 50000,
        specialized_in: "Wireless Communication Standards (5G/6G), Mobile SoCs",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 20LPA, finance_head: 43LPA",
      },
      {
        name: "MongoDB",
        careersUrl: "https://www.mongodb.com/company/careers/see-jobs",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/3840px-MongoDB_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 5000,
        specialized_in: "NoSQL Database Engines, Cloud Data Distribution",
        average_salary:
          "senior_engg: 37LPA, hr_manager: 23LPA, finance_head: 49LPA",
      },
      {
        name: "Autodesk",
        careersUrl: "https://autodesk.wd1.myworkdayjobs.com/Ext?q={query}",
        logo: "https://damassets.autodesk.net/content/dam/mgs/mgs/brand-elements/autodesk%20logo/logo-fomats-cmykR1-1378x400.jpg",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 14000,
        specialized_in: "3D Design, Engineering CAD/CAM Software",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 45LPA",
      },
      {
        name: "Texas Instruments",
        careersUrl:
          "https://careers.ti.com/en/sites/CX/jobs?keyword={query}&mode=location",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/TexasInstruments-Logo.svg/3840px-TexasInstruments-Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 34000,
        specialized_in: "Analog Semiconductor Engineering, Embedded Processors",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 19LPA, finance_head: 39LPA",
      },
      {
        name: "Block / Square",
        careersUrl: "https://block.xyz/careers/jobs?query={query}",
        logo: "https://mms.businesswire.com/media/20211201006139/en/932239/4/5452282_Block_lockup_positive_white_480.gif",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 12000,
        specialized_in:
          "Point-of-Sale Hardware/Software, Merchant Financial Services",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 24LPA, finance_head: 52LPA",
      },
      {
        name: "Palantir",
        careersUrl:
          "https://www.palantir.com/careers/open-positions/?search={query}",
        logo: "https://1000logos.net/wp-content/uploads/2022/08/Palantir-Logo.jpg",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 3800,
        specialized_in: "Big Data Analytics, Defense Systems Integration",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 25LPA, finance_head: 56LPA",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    companies: [
      {
        name: "Citadel",
        careersUrl:
          "https://www.citadel.com/careers/open-opportunities?jobTitle={query}&selected-job-sections=388,389,387,390&current_page=1&sort_order=DESC&per_page=10&action=careers_listing_filter",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Citadel_LLC_Logo.svg/3840px-Citadel_LLC_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "97%",
        type: "hedge_fund",
        approx_employee_count: 4500,
        specialized_in: "Quantitative Trading, High-Frequency Market Making",
        average_salary:
          "senior_engg: 90LPA, hr_manager: 35LPA, finance_head: 120LPA",
      },
      {
        name: "Jane Street",
        careersUrl:
          "https://www.janestreet.com/join-jane-street/open-roles/?type=experienced-candidates&location=all-locations&department=technology",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1v80cHiGlhdl5FJVm3CImHsO6fnBGjaDcTRBnc6ZONI9tMZfRpPaYNg&s=10",
        confidence_score_to_join: "98%",
        type: "prop_trading",
        approx_employee_count: 2600,
        specialized_in:
          "Quantitative Analysis, Proprietary Trading Architecture",
        average_salary:
          "senior_engg: 110LPA, hr_manager: 38LPA, finance_head: 140LPA",
      },
      {
        name: "Two Sigma",
        careersUrl:
          "https://careers.twosigma.com/careers/OpenRoles/software?listFilterMode=1&jobRecordsPerPage=10&",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4CMNnFN_5zqBFA4V9jyTldcM_VLfcjzioupV2hg5Yu6qOnwFsnuoTe8&s=10",
        confidence_score_to_join: "95%",
        type: "hedge_fund",
        approx_employee_count: 2000,
        specialized_in: "Systematic Trading, Machine Learning in Finance",
        average_salary:
          "senior_engg: 85LPA, hr_manager: 32LPA, finance_head: 110LPA",
      },
      {
        name: "Morgan Stanley",
        careersUrl:
          "https://morganstanley.eightfold.ai/careers?source=mscom&query={query}&start=0&pid=549800183752&sort_by=relevance",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/3840px-Morgan_Stanley_Logo_1.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 80000,
        specialized_in: "Investment Banking, Global Wealth Management",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 24LPA, finance_head: 65LPA",
      },
      {
        name: "BlackRock",
        careersUrl:
          "https://careers.blackrock.com/search-jobs?k={query}&l=&orgIds=45831",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNMJqRd2jQ95kTNK_LWththVe6Q-tsUm4kBJx_hfY1P1Jwi7etk9O5dQX&s=10",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 19800,
        specialized_in: "Asset Management, Aladdin Risk Platform",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 25LPA, finance_head: 70LPA",
      },
      {
        name: "Visa",
        careersUrl: "https://visa.wd5.myworkdayjobs.com/Visa?q={query}",
        logo: "https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 28800,
        specialized_in: "Global Digital Payments, Payment Protocol Security",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 24LPA, finance_head: 60LPA",
      },
      {
        name: "Mastercard",
        careersUrl: "https://careers.mastercard.com/us/en/search-results",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 33000,
        specialized_in:
          "Payment Processing Networks, Financial Tech Innovation",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 24LPA, finance_head: 58LPA",
      },
      {
        name: "American Express",
        careersUrl:
          "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword={query}&intlink=us-amex-career-en-us-search",
        logo: "https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/product/images/CHCKOUTSQ.jpg",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 77000,
        specialized_in: "Consumer Credit Services, Fraud Detection Systems",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 22LPA, finance_head: 55LPA",
      },
      {
        name: "Fidelity Investments",
        careersUrl:
          "https://jobs.fidelity.com/in/jobs/?search={query}&pagesize=20&origin=filtered#results",
        logo: "https://1000logos.net/wp-content/uploads/2017/11/Fidelity-Logo.png",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 74000,
        specialized_in: "Brokerage Systems, Mutual Fund Administration",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 21LPA, finance_head: 50LPA",
      },
      {
        name: "Capital One",
        careersUrl:
          "https://www.capitalonecareers.com/search-jobs?l=&k={query}&orgIds=234",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/960px-Capital_One_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20220620210501",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 52000,
        specialized_in: "Digital Banking, Credit Card Risk Modeling",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 22LPA, finance_head: 52LPA",
      },
      {
        name: "Blackstone",
        careersUrl:
          "https://blackstone.wd1.myworkdayjobs.com/en-US/Blackstone_Careers?q={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/The_Blackstone_Group_logo_%282%29.svg/1280px-The_Blackstone_Group_logo_%282%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "94%",
        type: "private_equity",
        approx_employee_count: 4700,
        specialized_in: "Alternative Asset Management, Private Equity Strategy",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 28LPA, finance_head: 95LPA",
      },
      {
        name: "S&P Global",
        careersUrl: "https://careers.spglobal.com/jobs?keywords={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/S%26P_Global_logo.svg/3840px-S%26P_Global_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 40000,
        specialized_in: "Financial Analytics, Credit Ratings Systems",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "Point72",
        careersUrl:
          "https://careers.point72.com/?experience=experienced%20professionals&location=bengaluru,%20india&area={query}&focus={query}&%20system%20engineering",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Point72logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "93%",
        type: "hedge_fund",
        approx_employee_count: 2500,
        specialized_in: "Discretionary Investment, Quantitative Research",
        average_salary:
          "senior_engg: 75LPA, hr_manager: 30LPA, finance_head: 100LPA",
      },
      {
        name: "Bank of America",
        careersUrl:
          "https://careers.bankofamerica.com/en-us/job-search?ref=search&search=jobsByKeyword&rows=10&start=0&keywords={query}",
        logo: "https://1000logos.net/wp-content/uploads/2016/10/Bank-of-America-Logo.png",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 213000,
        specialized_in: "Commercial Banking, Global Markets Engineering",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 19LPA, finance_head: 45LPA",
      },
      {
        name: "Barclays",
        careersUrl:
          "https://search.jobs.barclays/search-jobs?k={query}&l=&orgIds=13015",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Barclays-Logo.svg/3840px-Barclays-Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 90000,
        specialized_in: "Corporate Banking, Wealth Management",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 44LPA",
      },
      {
        name: "HSBC",
        careersUrl:
          "https://portal.careers.hsbc.com/careers?query={query}&location=India&pid=563774612231930&domain=hsbc.com&sort_by=relevance&triggerGoButton=false",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/960px-HSBC_logo_%282018%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 220000,
        specialized_in:
          "International Trade Finance, Retail Banking Operations",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 18LPA, finance_head: 42LPA",
      },
      {
        name: "UBS",
        careersUrl:
          "https://jobs.ubs.com/TGnewUI/Search/home/HomeWithPreLoad?partnerid=25008&siteid=5012&PageType=searchResults&SearchType=linkquery&LinkID=15231#keyWordSearch={query}&locationSearch=",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/UBS_Logo.png/330px-UBS_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 110000,
        specialized_in: "Global Wealth Allocation, Investment Strategy",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 20LPA, finance_head: 50LPA",
      },
      {
        name: "Deutsche Bank",
        careersUrl:
          "https://careers.db.com/professionals/search-roles/#/professional/results/?jobIdSearch={query}",
        logo: "https://1000logos.net/wp-content/uploads/2017/09/Color-Deutsche-Bank-Logo.jpg",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 90000,
        specialized_in:
          "Capital Markets Infrastructure, Corporate Risk Systems",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 45LPA",
      },
      {
        name: "BNP Paribas",
        careersUrl:
          "https://group.bnpparibas/en/careers/all-job-offers?q={query}",
        logo: "https://logos-world.net/wp-content/uploads/2021/02/BNP-Paribas-Logo-2009-present.jpg",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 183000,
        specialized_in: "European Retail Banking, Corporate Finance Solutions",
        average_salary:
          "senior_engg: 23LPA, hr_manager: 17LPA, finance_head: 41LPA",
      },
      {
        name: "Citigroup",
        careersUrl: "https://jobs.citi.com/search-jobs?k={query}&l=&orgIds=287",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Citi_logo_March_2023.svg/1280px-Citi_logo_March_2023.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 238000,
        specialized_in: "Consumer Banking Platforms, Transaction Services",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 18LPA, finance_head: 43LPA",
      },
      {
        name: "Moody's",
        careersUrl:
          "https://careers.moodys.com/en/search-jobs?k={query}&l=India&orgIds=49841",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Moody%27s_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 15000,
        specialized_in: "Risk Assessment, Credit Rating Infrastructure",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 19LPA, finance_head: 46LPA",
      },
      {
        name: "MSCI",
        careersUrl:
          "https://careers.msci.com/job-search?production__mscicare2201__sort-rank%5Bquery%5D={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/MSCI_logo_2019.svg/3840px-MSCI_logo_2019.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 5800,
        specialized_in: "Equity Indices, Risk Analytics Tools",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "Charles Schwab",
        careersUrl:
          "https://www.schwabjobs.com/search-jobs/?orgIds=27326&alcipm=1269750-1254788-1269844-1269843",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Charles_Schwab_Corporation_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 36000,
        specialized_in: "Retail Wealth Management, Automated Investing",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 19LPA, finance_head: 45LPA",
      },
      {
        name: "Vanguard",
        careersUrl:
          "https://www.vanguardjobs.com/job-search-results/?keyword={query}",
        logo: "https://1000logos.net/wp-content/uploads/2021/05/Vanguard-logo.png",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 20000,
        specialized_in: "Index Fund Management, Passive Investment Tech",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 20LPA, finance_head: 46LPA",
      },
      {
        name: "Interactive Brokers",
        careersUrl:
          "https://jobs.dayforcehcm.com/ibgllc/CANDIDATEPORTAL?searchText={query}",
        logo: "https://download.logo.wine/logo/Interactive_Brokers/Interactive_Brokers-Logo.wine.png",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 2900,
        specialized_in: "Automated Trading Platforms, Direct Market Access",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 55LPA",
      },
      {
        name: "State Street",
        careersUrl:
          "https://careers.statestreet.com/global/en/search-results?m=3&keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBAyWnOzTQnxYXfg3Hyz_HZRdZCHQN-TlqyEcpD4YeBum9eJx-NmPCPps&s=10",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 42000,
        specialized_in: "Institutional Custody, Asset Servicing Technology",
        average_salary:
          "senior_engg: 22LPA, hr_manager: 17LPA, finance_head: 40LPA",
      },
      {
        name: "Ramp",
        careersUrl: "https://ramp.com/careers#jobs",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZRXcTHZQWVGXlAnaZJ50fxmP89s2YTuEduI4LYPLZZ8c0yzsFpncb13Z&s=10",
        confidence_score_to_join: "94%",
        type: "earlystartup",
        approx_employee_count: 900,
        specialized_in: "Corporate Card Management, Spend Automation Platforms",
        average_salary:
          "senior_engg: 50LPA, hr_manager: 28LPA, finance_head: 72LPA",
      },
      {
        name: "Brex",
        careersUrl: "https://www.brex.com/careers?department={query}",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Brex_Inc._Corporate_Logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "90%",
        type: "growth_stage",
        approx_employee_count: 1100,
        specialized_in: "B2B Financial Services, Startup Cash Management",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 25LPA, finance_head: 65LPA",
      },
      {
        name: "Apollo Global Management",
        careersUrl:
          "https://athene.wd5.myworkdayjobs.com/en-GB/Apollo_Careers?q={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfL1_Gzk_7CT02fVoW4wIo_nSN0UyGoq4MCEGq8chRlks2Nq--BXnw-U&s=10",
        confidence_score_to_join: "92%",
        type: "private_equity",
        approx_employee_count: 2800,
        specialized_in: "Credit & Yield Strategy, Private Equity Investment",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 27LPA, finance_head: 90LPA",
      },
      {
        name: "The Carlyle Group",
        careersUrl: "https://carlyle.wd1.myworkdayjobs.com/Carlyle?q={query}",
        logo: "https://download.logo.wine/logo/The_Carlyle_Group/The_Carlyle_Group-Logo.wine.png",
        confidence_score_to_join: "91%",
        type: "private_equity",
        approx_employee_count: 2200,
        specialized_in: "Global Private Asset Allocation, Buyouts",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 26LPA, finance_head: 88LPA",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail",
    companies: [
      {
        name: "Amazon",
        careersUrl:
          "https://amazon.jobs/content/en/job-categories/software-development?cmpid=DS_ANAL200537D",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cz4mYyrdWAGe3fgXKr4hIHCFmVf3zXL1xpbXTmsbw6Cs6pHsueblUdDj&s=10",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 1500000,
        specialized_in:
          "E-Commerce Logistics, E-Retail Platforms, Cloud Ecosystems",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 25LPA, finance_head: 60LPA",
      },
      {
        name: "Lowe's",
        careersUrl: "https://talent.lowes.com/us/en/search-results",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Lowes_Companies_Logo.svg/250px-Lowes_Companies_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 300000,
        specialized_in: "Omnichannel Hardware Retail, Supply Chain Systems",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "IKEA",
        careersUrl:
          "https://www.seeacareerwithus.com/search-jobs?keyword={query}#search-results",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/960px-Ikea_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 208000,
        specialized_in:
          "Furniture Retail Infrastructure, Global Supply Logistics",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Lululemon",
        careersUrl:
          "https://careers.lululemon.com/en_US/careers/SearchCareer/software?listFilterMode=1&jobRecordsPerPage=10&",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlnW56ZQb9WlL1pXv2wbrFqZIQonrfjl2J21RBhVRtQ&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 38000,
        specialized_in: "Athletic Retail Operations, E-Commerce Analytics",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 22LPA, finance_head: 48LPA",
      },
      {
        name: "LVMH",
        careersUrl:
          "https://www.lvmh.com/en/join-us/our-job-offers?PRD-en-us-timestamp-desc%5Bquery%5D={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqKasa_XeEC35xXTdJZPhZALsmfxEhe_wlKxK8CMomw&s=10",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 213000,
        specialized_in:
          "Luxury Brand Distribution, Premium Retail Infrastructure",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 26LPA, finance_head: 65LPA",
      },
      {
        name: "Chewy",
        careersUrl:
          "https://careers.chewy.com/us/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_C5M-bV5N3EPSvo5VU2LnugvPzSPnVlyWUQ4njt-pvw&s=10",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 20000,
        specialized_in:
          "E-Commerce Pet Care Distribution, Automated Order Fulfillment",
        average_salary:
          "senior_engg: 33LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "Wayfair",
        careersUrl:
          "https://www.wayfair.com/careers/jobs?keywords={query}&locationIds=&stateIds=&countryIds=",
        logo: "https://logos-world.net/wp-content/uploads/2022/03/Wayfair-Symbol.png",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 11000,
        specialized_in: "Home Goods E-Commerce, Specialized Logistics",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 20LPA, finance_head: 44LPA",
      },
      {
        name: "REI",
        careersUrl: "https://www.rei.jobs/careers-home/jobs?keywords={query}",
        logo: "https://i.pinimg.com/736x/6b/7a/1c/6b7a1cfee87b1296d136bb1a80b32ae3.jpg",
        confidence_score_to_join: "90%",
        type: "enterprise",
        approx_employee_count: 16000,
        specialized_in: "Outdoor Equipment Co-Op Retail, Supply Chain Planning",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 40LPA",
      },
      {
        name: "Adidas",
        careersUrl:
          "https://careers.adidas-group.com/jobs?brand=&team=&type=&keywords={query}&location=%5B%5D&sort=&locale=en&offset=0",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMDus9dbrd7WIKwByQTL7RokXdndy5ujEq6LZT6Gi0A&s=10",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 59000,
        specialized_in:
          "Sportswear Retail Engineering, Digital Direct-to-Consumer Platforms",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 21LPA, finance_head: 48LPA",
      },
      {
        name: "Puma",
        careersUrl:
          "https://about.puma.com/en/careers/job-openings?area=all&q={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzQn3MmXPw-Pr9PAWalq3q60mDRUipI41-I0NhADaPw&s=10",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 20000,
        specialized_in: "Global Athletic Footwear Retail, Supply Chain",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "TJX Companies",
        careersUrl:
          "https://jobs.tjx.com/global/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-167xkjIyTiyosJMLEX1xfh0xTDrNL2O423xktd9Uw&s=10",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 349000,
        specialized_in:
          "Off-Price Retail Operations, Inventory Distribution Networks",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 18LPA, finance_head: 40LPA",
      },
      {
        name: "CVS Health",
        careersUrl:
          "https://jobs.cvshealth.com/us/en/search-results?keywords={query}",
        logo: "https://download.logo.wine/logo/CVS_Health/CVS_Health-Logo.wine.png",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 300000,
        specialized_in:
          "Pharmacy Retail Management, Healthcare Retail Logistics",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 45LPA",
      },
      {
        name: "Best Buy",
        careersUrl:
          "https://jobs.bestbuy.com/bby?id=all_jobs&spa=1&q={query}&r=25&s=relevance&country=US",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8BDoscrJYFDZvx3t8caOvH_xaA8ML3Uf26UjbY8Dch4l9rKypC52n8Y&s=10",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 85000,
        specialized_in:
          "Consumer Electronics Retail, Technical Services Network",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "Nordstrom",
        careersUrl: "https://careers.nordstrom.com/jobs?keyword={query}",
        logo: "https://1000logos.net/wp-content/uploads/2022/08/Nordstrom-logo.png",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 60000,
        specialized_in:
          "Department Store Retail Systems, E-Commerce Operations",
        average_salary:
          "senior_engg: 29LPA, hr_manager: 20LPA, finance_head: 44LPA",
      },
      {
        name: "AutoZone",
        careersUrl:
          "https://careers.autozone.com/hcmUI/CandidateExperience/en/sites/CX_1/jobs?keyword={query}&mode=location",
        logo: "https://images.seeklogo.com/logo-png/50/1/autozone-logo-png_seeklogo-504766.png",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 115000,
        specialized_in:
          "Automotive Parts Distribution, Retail Inventory Operations",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 40LPA",
      },
      {
        name: "Bath & Body Works",
        careersUrl: "https://careers.bathandbodyworks.com/jobs?keyword={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lg4rMjNDxzJlcW0BjtOBlMwGsu_4l0qzKXTP1P32hR1-3MECfM6mOdQ&s=10",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 56000,
        specialized_in:
          "Specialty Retail Network, Consumer Personal Care Supply Chain",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 18LPA, finance_head: 41LPA",
      },
      {
        name: "Dollar General",
        careersUrl:
          "https://careers.dollargeneral.com/jobs?keywords={query}&location=",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-IEf1YMiun5EjRtl-4wnTg29RgCBwJHJEBEm20RJtBbtsSAvtRlABa44&s=10",
        confidence_score_to_join: "80%",
        type: "mnc",
        approx_employee_count: 185000,
        specialized_in: "Discount Variety Store Logistics, Retail Operations",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 17LPA, finance_head: 38LPA",
      },
      {
        name: "O'Reilly Auto Parts",
        careersUrl:
          "https://careers.oreillyauto.com/us/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlBnH5e1vv3TBt67i8BEWcQJ1t19_Vkdy4zYZMi8sww&s=10",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 88000,
        specialized_in:
          "Automotive Replacement Retail, Regional Distribution Logistics",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 39LPA",
      },
      {
        name: "Gap Inc.",
        careersUrl:
          "https://www.gapinc.com/en-us/careers/job-search?query={query}&currentPage=1&sort=score",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Gap_logo.svg/1280px-Gap_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 85000,
        specialized_in: "Apparel Retail Management, Global Sourcing Networks",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "Kohl's",
        careersUrl: "https://careers.kohls.com/search-results?keywords={query}",
        logo: "https://logos-world.net/wp-content/uploads/2022/02/Kohls-Logo.png",
        confidence_score_to_join: "81%",
        type: "mnc",
        approx_employee_count: 95000,
        specialized_in:
          "Department Store Omnichannel Retail, Inventory Tracking",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 40LPA",
      },
      {
        name: "Under Armour",
        careersUrl:
          "https://careers.underarmour.com/search/?searchby=location&createNewAlert=false&q={query}&locationsearch=&geolocation=",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-5P-Yt65PHnhQnAfSo3rJb9hqmkuWSwxHR7TzJy3EsieTNQMH6nKSEo&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 15000,
        specialized_in:
          "Performance Apparel Retail, Direct E-Commerce Channels",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "PetSmart",
        careersUrl: "https://careers.petsmart.com/jobs?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU0EGtlm_-TuFnLR-QUnD7MMf9WD48cbdNbQf7tpP2Q&s=10",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 50000,
        specialized_in: "Specialty Pet Retail, In-Store Service Logistics",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 39LPA",
      },
      {
        name: "Petco",
        careersUrl:
          "https://careers.petco.com/search-jobs?k={query}&l=&orgIds=47428",
        logo: "https://images.seeklogo.com/logo-png/32/1/petco-logo-png_seeklogo-326854.png",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 27000,
        specialized_in:
          "Pet Health Retail Infrastructure, Store Fulfillment Operations",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 17LPA, finance_head: 38LPA",
      },
      {
        name: "Foot Locker",
        careersUrl: "https://careers.footlocker.com/jobs?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEDadhQYibz042p9zS8YkZjVfPzovqaJDsqv7t6SEUqpxStiu5ykLNIE&s=10",
        confidence_score_to_join: "81%",
        type: "mnc",
        approx_employee_count: 45000,
        specialized_in:
          "Footwear Retail Operations, Brand Distribution Partnerships",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 39LPA",
      },
      {
        name: "Albertsons Companies",
        careersUrl:
          "https://eofd.fa.us6.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/jobs?keyword={query}&mode=location",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFTXfeWw_-GQiYuj2znxT4mcH1wdTDAHwW5G1YNuKdFtar8udDphcnQs&s=10",
        confidence_score_to_join: "81%",
        type: "mnc",
        approx_employee_count: 290000,
        specialized_in:
          "Grocery Supermarket Retail, Perishable Goods Supply Chain",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 18LPA, finance_head: 41LPA",
      },
      {
        name: "H&M",
        careersUrl: "https://career.hm.com/search/?f={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/3840px-H%26M-Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 100000,
        specialized_in:
          "Fast-Fashion Retail Chains, Global Garment Supply Networks",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "Urban Outfitters",
        careersUrl:
          "https://hub-urbn.icims.com/jobs/search?ss=1&searchKeyword={query}&searchRelation=keyword_all",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWu7RSnG2TiE5N2Ya0twFB9vzZ9Zrc8NKWoAvdFItJma5xds9479BjJPQr&s=10",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 24000,
        specialized_in:
          "Lifestyle Consumer Retail, Specialty Brand Merchandising",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 18LPA, finance_head: 40LPA",
      },
      {
        name: "Walgreens",
        careersUrl:
          "https://jobs.walgreens.com/en/search-jobs?k={query}&l=&orgIds=1242",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Walgreens_2020_initial_W_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "80%",
        type: "mnc",
        approx_employee_count: 330000,
        specialized_in:
          "Pharmacy & Retail Store Chains, Healthcare Product Distribution",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 39LPA",
      },
      {
        name: "VF Corporation (Vans, The North Face)",
        careersUrl: "https://vfc.wd5.myworkdayjobs.com/vfc_careers?q={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrBtNjTwrnOKWEN4Ik43jxqS5gFsfGIGHHGB741Jl2Q&s=10",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 35000,
        specialized_in:
          "Apparel Brand Portfolios, Global Retail Infrastructure",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "Dollar Tree",
        careersUrl: "https://careers.dollartree.com/us/en",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05HncD5uFPPXb_t9VJ7UKHUPPKZjb43yIOj91ZoNZVA&s=10",
        confidence_score_to_join: "79%",
        type: "mnc",
        approx_employee_count: 200000,
        specialized_in:
          "Discount Merchandise Chains, Large-Scale Retail Logistics",
        average_salary:
          "senior_engg: 23LPA, hr_manager: 17LPA, finance_head: 37LPA",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    companies: [
      {
        name: "Eli Lilly and Company",
        careersUrl:
          "https://careers.lilly.com/us/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ze1_T89qqtXaD6-nxgoecPGnzuDpgxQSw4uj14pHvA&s=10",
        confidence_score_to_join: "95%",
        type: "mnc",
        approx_employee_count: 43000,
        specialized_in:
          "Pharmaceutical Research, Endocrine & Oncology Treatments",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 23LPA, finance_head: 55LPA",
      },
      {
        name: "Intuitive Surgical",
        careersUrl:
          "https://careers.intuitive.com/en/jobs/?search={query}&origin=global",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8scmAl3A5O3-lDMKK3nxu168wDG80nlLpwj8wdmn1FkWu0h0OF1hW5T3&s=10",
        confidence_score_to_join: "94%",
        type: "mnc",
        approx_employee_count: 13000,
        specialized_in:
          "Robotic Surgical Systems (da Vinci), Surgical Robotics Engineering",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 25LPA, finance_head: 60LPA",
      },
      {
        name: "Johnson & Johnson",
        careersUrl:
          "https://www.careers.jnj.com/en/jobs/?search={query}&country=&origin=global",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCT32LJexbieFQ6-_RqgDK660VQWrPxsP4gFm6B_jC2hCnSwpgw_6RUhc&s=10",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 131000,
        specialized_in: "Pharmaceuticals, Medical Technology Equipment",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 22LPA, finance_head: 52LPA",
      },
      {
        name: "Roche",
        careersUrl:
          "https://careers.roche.com/global/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwrwZByg5bOMpnVgxHfuaf4mFB2-2PGuUnf7C8PqHEfewbM8XDsuW088uo&s=10",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 103000,
        specialized_in: "In-Vitro Diagnostics, Targeted Oncology Therapeutics",
        average_salary:
          "senior_engg: 29LPA, hr_manager: 22LPA, finance_head: 54LPA",
      },
      {
        name: "Thermo Fisher Scientific",
        careersUrl:
          "https://jobs.thermofisher.com/global/en/search-results?m=3&keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuf9gQ8WVBy5jk8z01Y4BoMQOyCR8VdLzlEq8qHvNk8Q&s=10",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 122000,
        specialized_in:
          "Life Sciences Instruments, Diagnostic Analytical Hardware",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "Stryker",
        careersUrl: "https://careers.stryker.com/jobs?keyword={query}",
        logo: "https://www.leaders-in-law.com/wp-content/uploads/2025/03/Stryker-Company-Logo.jpg",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 51000,
        specialized_in: "Orthopedic Implants, Medical Equipment Engineering",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 21LPA, finance_head: 50LPA",
      },
      {
        name: "Danaher Corporation",
        careersUrl:
          "http://jobs.danaher.com/global/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHA4VJg8YxQHCtfbmKtjb0sB97OWGBygcr_k4eJV_AcQV4C1W4v4vA9_c&s=10",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 63000,
        specialized_in:
          "Medical Diagnostics Systems, Life Science Instrumentation",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 21LPA, finance_head: 50LPA",
      },
      {
        name: "Abbott Laboratories",
        careersUrl:
          "https://www.jobs.abbott/us/en/c/information-technology-jobs",
        logo: "https://brandlogos.net/wp-content/uploads/2012/10/abbott-logo-vector.png",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 114000,
        specialized_in: "Continuous Glucose Monitors, Vascular Devices",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "AstraZeneca",
        careersUrl:
          "https://careers.astrazeneca.com/search-jobs?k={query}&l=&orgIds=7684",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzk4fqIFpmmbVf5__Ec9VmEjsM34h5FjmaNY9Zr8lv-2yzMuM4MOAsqwF&s=10",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 89000,
        specialized_in: "Biopharmaceuticals, Oncology & Respiratory Medicines",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 21LPA, finance_head: 50LPA",
      },
      {
        name: "Novo Nordisk",
        careersUrl:
          "http://novonordisk.com/careers/find-a-job/career-search-results.html?searchText={query}&countries=Denmark%3BUnited+States%3BChina+Mainland%3BArgentina%3BAustralia%3BBrazil%3BCanada%3BCzech+Republic%3BFrance%3BGermany%3BIndia%3BIndonesia%3BIraq%3BIsrael%3BItaly%3BJapan%3BMalaysia%3BMexico%3BPhilippines%3BPoland%3BSaudi+Arabia%3BSlovakia%3BSouth+Korea%3BSwitzerland%3BTaiwan%3BThailand%3BTurkey%3BUnited+Kingdom%3BVietnam&categories={query}",
        logo: "https://1000logos.net/wp-content/uploads/2020/09/Novo-Nordisk-Logo.png",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 64000,
        specialized_in: "Diabetes Care, Metabolic Disorder Therapeutics",
        average_salary:
          "senior_engg: 29LPA, hr_manager: 22LPA, finance_head: 52LPA",
      },
      {
        name: "Novartis",
        careersUrl:
          "https://www.novartis.com/careers/career-search?search_api_fulltext={query}&op=Submit&field_job_posted_date=All",
        logo: "https://1000logos.net/wp-content/uploads/2020/03/Novartis-Logo.jpg",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 76000,
        specialized_in: "Gene Therapies, Innovative Oncology Products",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "Boston Scientific",
        careersUrl:
          "https://bostonscientific.eightfold.ai/careers?query={query}&start=0&pid=563602813404264&sort_by=relevance",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Boston_Scientific_Logo.svg/1280px-Boston_Scientific_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 48000,
        specialized_in: "Interventional Medical Technology, Cardiac Implants",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 20LPA, finance_head: 49LPA",
      },
      {
        name: "Sanofi",
        careersUrl:
          "https://jobs.sanofi.com/en/search-jobs?k={query}&l=&orgIds=2649",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sanofi_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 86000,
        specialized_in: "Immunology Treatments, Vaccine Manufacturing",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 19LPA, finance_head: 46LPA",
      },
      {
        name: "Amgen",
        careersUrl:
          "https://careers.amgen.com/en/search-jobs?k={query}&l=&orgIds=87",
        logo: "https://logos-world.net/wp-content/uploads/2023/06/Amgen-Emblem.png",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 27000,
        specialized_in: "Biotechnology Therapies, Molecular Oncology",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 21LPA, finance_head: 50LPA",
      },
      {
        name: "Regeneron",
        careersUrl:
          "https://careers.regeneron.com/en/jobs/?keyword={query}&origin=global",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpY2iq-1GvHyG1nlLyBsG2rMmXOJ7rOUCQZ5Q6lB0cIMtPz-JE84X42fg&s=10",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 12000,
        specialized_in: "Monoclonal Antibody Research, Biopharmaceuticals",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 22LPA, finance_head: 53LPA",
      },
      {
        name: "Gilead Sciences",
        careersUrl:
          "https://gilead.wd1.myworkdayjobs.com/gileadcareers?q={query}",
        logo: "https://www.logo.wine/a/logo/Gilead_Sciences/Gilead_Sciences-Logo.wine.svg",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 18000,
        specialized_in: "Antiviral Drug Development, Cell Therapy",
        average_salary:
          "senior_engg: 29LPA, hr_manager: 21LPA, finance_head: 51LPA",
      },
      {
        name: "AbbVie",
        careersUrl:
          "https://careers.abbvie.com/en/jobs?q={query}&options=&page=1&la=0&lo=0&lr=100",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/AbbVie_logo.svg/3840px-AbbVie_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 50000,
        specialized_in: "Immunology Therapeutics, Specialty Medicine",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "GE HealthCare",
        careersUrl:
          "https://careers.gehealthcare.com/global/en/search-results?keywords={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/GE_HealthCare_logo_2023.svg/1280px-GE_HealthCare_logo_2023.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 51000,
        specialized_in:
          "Diagnostic Imaging (MRI, CT), Precision Care Technology",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 19LPA, finance_head: 46LPA",
      },
      {
        name: "Siemens Healthineers",
        careersUrl:
          "https://jobs.siemens-healthineers.com/en_US/searchjobs/SearchJobs/software?listFilterMode=1&folderRecordsPerPage=6&",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Siemens_Healthineers_logo.svg/1280px-Siemens_Healthineers_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 71000,
        specialized_in:
          "Medical Imaging Infrastructure, Advanced Laboratory Diagnostics",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 19LPA, finance_head: 45LPA",
      },
      {
        name: "Bristol Myers Squibb",
        careersUrl:
          "https://app.eightfold.ai/careers?domain=bms.com&query={query}&start=0&pid=137481769938&sort_by=relevance",
        logo: "https://companieslogo.com/img/orig/BMY-03bb5df8.png?t=1720244491",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 34000,
        specialized_in: "Biopharmaceutical Innovation, Oncology Drugs",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "GSK",
        careersUrl:
          "https://jobs.gsk.com/gb/en/search-results?keywords={query}&location=&lang=en-gb",
        logo: "https://1000logos.net/wp-content/uploads/2017/01/GSK-Logo-1.jpg",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 70000,
        specialized_in: "Vaccine R&D, Infectious Disease Therapeutics",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 18LPA, finance_head: 44LPA",
      },
      {
        name: "Philips Healthcare",
        careersUrl: "https://www.careers.philips.com/in/en/search-results",
        logo: "https://www.freepnglogos.com/uploads/philips-logo-7.png",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 69000,
        specialized_in:
          "Health Technology Solutions, Patient Monitoring Systems",
        average_salary:
          "senior_engg: 23LPA, hr_manager: 18LPA, finance_head: 42LPA",
      },
      {
        name: "IQVIA",
        careersUrl:
          "https://jobs.iqvia.com/en/jobs?keywords={query}#job-listing",
        logo: "https://logos-world.net/wp-content/uploads/2025/11/IQVIA-Logo.jpg",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 87000,
        specialized_in:
          "Clinical Research Data, Healthcare Analytics Platforms",
        average_salary:
          "senior_engg: 22LPA, hr_manager: 17LPA, finance_head: 40LPA",
      },
      {
        name: "Baxter International",
        careersUrl:
          "https://jobs.baxter.com/en/search-jobs?k={query}&l=&orgIds=152",
        logo: "https://pbs.twimg.com/profile_images/1921960609177866240/FifCFrdM_400x400.jpg",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 60000,
        specialized_in:
          "Renal & Hospital Products, Critical Care Infrastructure",
        average_salary:
          "senior_engg: 22LPA, hr_manager: 17LPA, finance_head: 39LPA",
      },
      {
        name: "Becton Dickinson (BD)",
        careersUrl:
          "https://jobs.bd.com/en/search-jobs?k={query}&l=&orgIds=159",
        logo: "https://cdn.cookielaw.org/logos/29abe976-120d-4d7e-9a5c-6762f9a8b2cc/cbee6830-1220-444a-b948-7a1a83716eaf/45de13cf-6fa2-4263-81ac-101dd176d218/BD_2-Color_RGB.png",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 77000,
        specialized_in: "Medical Reagents, Medication Delivery Devices",
        average_salary:
          "senior_engg: 23LPA, hr_manager: 18LPA, finance_head: 41LPA",
      },
      {
        name: "Cigna Group",
        careersUrl:
          "https://jobs.thecignagroup.com/us/en/search-results?keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mpDCo6GuE-v1S4fy6iTCEkuOYno9oVupyY3xXx1LLwLbDE39fNgbdLQ&s=10",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 70000,
        specialized_in:
          "Managed Healthcare Services, Pharmacy Benefit Management",
        average_salary:
          "senior_engg: 25LPA, hr_manager: 18LPA, finance_head: 43LPA",
      },
      {
        name: "Elevance Health",
        careersUrl: "https://careers.elevancehealth.com/jobs?keyword={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5P8FE630nsasDdE7Omwa5XAJeuTE2JjJoCITzKdo_xsd2DKnwN5wJEA&s=10",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 100000,
        specialized_in:
          "Healthcare Insurance Digital Platforms, Health Analytics",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 18LPA, finance_head: 42LPA",
      },
      {
        name: "Humana",
        careersUrl:
          "https://careers.humana.com/us/en/search-results?keywords={query}",
        logo: "https://logos-world.net/wp-content/uploads/2022/07/Humana-Symbol.png",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 67000,
        specialized_in:
          "Health Insurance Platforms, Senior Wellness Technology",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 17LPA, finance_head: 41LPA",
      },
      {
        name: "Cleveland Clinic",
        careersUrl:
          "https://jobs.clevelandclinic.org/job-search-results/?keyword={query}",
        logo: "https://img.logo.dev/clevelandclinic.org?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=512&retina=true&format=png",
        confidence_score_to_join: "89%",
        type: "enterprise",
        approx_employee_count: 77000,
        specialized_in:
          "Hospital Clinical Systems, Health Informatics Research",
        average_salary:
          "senior_engg: 22LPA, hr_manager: 16LPA, finance_head: 38LPA",
      },
      {
        name: "Mayo Clinic",
        careersUrl: "https://jobs.mayoclinic.org/",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Mayo_Clinic_logo.svg/960px-Mayo_Clinic_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "91%",
        type: "enterprise",
        approx_employee_count: 76000,
        specialized_in:
          "Academic Medical Research, Digital Healthcare Infrastructure",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 17LPA, finance_head: 40LPA",
      },
    ],
  },
  {
    id: "ai-orchestration",
    label: "AI Orchestration",
    companies: [
      {
        name: "Anthropic",
        careersUrl: "https://www.anthropic.com/careers/jobs",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s5UVPuNYcZQ9e7sOF0HXsfgZttAZg0bqjgmNkY28DNwnX0pP5tgOA6E&s=10",
        confidence_score_to_join: "97%",
        logoSize: "bg-[size:500px_auto]",
        type: "earlystartup",
        approx_employee_count: 1000,
        specialized_in: "AI Safety Alignment, Claude LLM Architecture",
        average_salary:
          "senior_engg: 75LPA, hr_manager: 35LPA, finance_head: 110LPA",
      },
      {
        name: "OpenAI",
        careersUrl: "https://openai.com/careers/search/?q={query}",
        logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/openai.svg",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "96%",
        type: "growth_stage",
        approx_employee_count: 4500,
        specialized_in:
          "Generative Pre-trained Transformers, Frontier AI Models",
        average_salary:
          "senior_engg: 80LPA, hr_manager: 38LPA, finance_head: 120LPA",
      },
      {
        name: "Hugging Face",
        careersUrl: "https://apply.workable.com/huggingface#jobs",
        logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
        confidence_score_to_join: "95%",
        type: "growth_stage",
        approx_employee_count: 300,
        specialized_in: "Open Source AI Repositories, Model Hosting Pipelines",
        average_salary:
          "senior_engg: 50LPA, hr_manager: 26LPA, finance_head: 70LPA",
      },
      {
        name: "Cohere",
        careersUrl:
          "https://jobs.ashbyhq.com/cohere?departmentId=68960387-27ac-4599-81a6-0b61399ef7eb&employmentType=FullTime",
        logo: "https://avatars.githubusercontent.com/u/54850923?s=280&v=4",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "92%",
        type: "earlystartup",
        approx_employee_count: 400,
        specialized_in: "Enterprise LLMs, RAG Optimization Engines",
        average_salary:
          "senior_engg: 55LPA, hr_manager: 28LPA, finance_head: 75LPA",
      },
      {
        name: "LangChain",
        careersUrl: "https://www.langchain.com/careers#explore-jobs",
        logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAiZAAZAA0",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "94%",
        type: "earlystartup",
        approx_employee_count: 120,
        specialized_in: "LLM Orchestration Frameworks, Agentic Workflows",
        average_salary:
          "senior_engg: 48LPA, hr_manager: 25LPA, finance_head: 65LPA",
      },
      {
        name: "Pinecone",
        careersUrl: "https://www.pinecone.io/careers/#open-roles",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Pinecone-Full-Logo-Black.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "91%",
        type: "earlystartup",
        approx_employee_count: 250,
        specialized_in:
          "Vector Database Engines, High-Performance Similarity Search",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 24LPA, finance_head: 62LPA",
      },
      {
        name: "Scale AI",
        careersUrl: "https://scale.com/careers",
        logo: "https://scale.com/static/global/logo-organization-lockup.png",
        confidence_score_to_join: "90%",
        type: "growth_stage",
        approx_employee_count: 1000,
        specialized_in: "AI Data Annotation, Fine-Tuning Infrastructure",
        average_salary:
          "senior_engg: 46LPA, hr_manager: 25LPA, finance_head: 68LPA",
      },
      {
        name: "Mistral AI",
        careersUrl:
          "https://jobs.ashbyhq.com/mistral.ai?departmentId=0e254708-ce04-4bd7-8fbe-c6b9a45e0f16",
        logo: "https://mistral.ai/_astro/cover-logo-lockup-gradient_Z15lru1.webp?dpl=6ab0eb9273e161000992bbba",
        confidence_score_to_join: "95%",
        type: "earlystartup",
        approx_employee_count: 150,
        specialized_in:
          "Open-Weight Frontier Language Models, Efficient Inference",
        average_salary:
          "senior_engg: 65LPA, hr_manager: 30LPA, finance_head: 90LPA",
      },
      {
        name: "Anyscale (Ray)",
        careersUrl: "https://jobs.ashbyhq.com/anyscale",
        logo: "https://images.ctfassets.net/xjan103pcp94/6tcZ6Cd3xnayFKAntTajfr/79d44902fdacfe5af6bade10875838a7/anyscale-og.png",
        confidence_score_to_join: "93%",
        type: "earlystartup",
        approx_employee_count: 300,
        specialized_in: "Distributed AI Compute Platforms, Ray Orchestration",
        average_salary:
          "senior_engg: 50LPA, hr_manager: 26LPA, finance_head: 72LPA",
      },
      {
        name: "Together AI",
        careersUrl: "https://www.together.ai/careers#roles",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZLWjX9JoTWqwWxlnyoCIc5y5o39IRC4N9dxQU-Qc90kYxjwYeLZrA9OY&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "93%",
        type: "earlystartup",
        approx_employee_count: 180,
        specialized_in: "Decentralized Cloud Inference, Fast Model Training",
        average_salary:
          "senior_engg: 52LPA, hr_manager: 27LPA, finance_head: 75LPA",
      },
      {
        name: "Weights & Biases",
        careersUrl: "https://coreweave.com/careers/weights-biases",
        logo: "https://docs.earthmover.io/assets/images/wandb-logo-5517657b58f11a51392e26c79914bb8d.png",
        confidence_score_to_join: "91%",
        type: "growth_stage",
        approx_employee_count: 350,
        specialized_in: "MLOps Experiment Tracking, Model Developer Tooling",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 24LPA, finance_head: 60LPA",
      },
      {
        name: "Modal",
        careersUrl: "http://modal.com/company#careers",
        logo: "https://modal-cdn.com/modal-logo-icon.png",
        confidence_score_to_join: "94%",
        type: "earlystartup",
        approx_employee_count: 50,
        specialized_in: "Serverless Cloud Compute for AI workloads",
        average_salary:
          "senior_engg: 50LPA, hr_manager: 25LPA, finance_head: 70LPA",
      },
      {
        name: "Fireworks AI",
        careersUrl: "https://fireworks.ai/careers",
        logo: "https://img.logo.dev/fireworks.ai?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "92%",
        type: "earlystartup",
        approx_employee_count: 80,
        specialized_in: "Low-Latency Generative AI API Inference",
        average_salary:
          "senior_engg: 48LPA, hr_manager: 24LPA, finance_head: 68LPA",
      },
      {
        name: "LlamaIndex",
        careersUrl: "https://www.llamaindex.ai/careers#roles",
        logo: "https://cdn.bap-software.net/2024/05/27174818/LlamaIndex-e1716781781228.png",
        confidence_score_to_join: "93%",
        type: "earlystartup",
        approx_employee_count: 60,
        specialized_in: "Data Ingestion Frameworks for LLM Applications",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 23LPA, finance_head: 62LPA",
      },
      {
        name: "Qdrant",
        careersUrl:
          "https://jobs.ashbyhq.com/qdrant.tech?departmentId=788f6f7d-8ba8-4df1-a936-4542d9ead2ec",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1O8VLYIegCx12gpqP1L5uUZvVofCeg4wBKVImeuHWjDUDVt7kdhaMdbT&s=10",
        logoSize: "bg-[size:150px_auto]",
        confidence_score_to_join: "90%",
        type: "earlystartup",
        approx_employee_count: 90,
        specialized_in: "Vector Search Engine Architecture, Neural Search",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 22LPA, finance_head: 60LPA",
      },
      {
        name: "Chroma",
        careersUrl: "https://www.trychroma.com/careers",
        logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/chroma.webp",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "91%",
        type: "earlystartup",
        approx_employee_count: 40,
        specialized_in: "Open-Source AI Embeddings Database Engine",
        average_salary:
          "senior_engg: 44LPA, hr_manager: 22LPA, finance_head: 60LPA",
      },
      {
        name: "Arize AI",
        careersUrl: "https://arize.com/careers/#open-roles",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgke5V4KwsL1p-CSxdDy9O7EvXZ9WyTVzQYsJoxiKhYK82m5OBzLn1xXUY&s=10",
        confidence_score_to_join: "89%",
        type: "earlystartup",
        approx_employee_count: 120,
        specialized_in: "LLM Observability, Model Drift Monitoring",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 22LPA, finance_head: 58LPA",
      },
      {
        name: "Braintrust",
        careersUrl: "https://www.braintrust.dev/careers",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybKOTFngYcYqFwrhGNPGvOwfuGOZi2waeWFo3W7y-BA&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "90%",
        type: "earlystartup",
        approx_employee_count: 50,
        specialized_in: "Enterprise AI Evaluation Platforms",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 23LPA, finance_head: 64LPA",
      },
      {
        name: "Unstructured.io",
        careersUrl: "https://unstructured.io/careers",
        logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/unstructured-color.png",
        confidence_score_to_join: "91%",
        type: "earlystartup",
        approx_employee_count: 110,
        specialized_in: "ETL for Unstructured Data in LLM Applications",
        average_salary:
          "senior_engg: 43LPA, hr_manager: 23LPA, finance_head: 62LPA",
      },
      {
        name: "Cognition (Devin)",
        careersUrl: "https://cognition.com/careers",
        logo: "https://img.logo.dev/cognition.ai?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=512&retina=true&format=png",
        confidence_score_to_join: "95%",
        type: "earlystartup",
        approx_employee_count: 70,
        specialized_in: "Autonomous AI Software Engineering Agents",
        average_salary:
          "senior_engg: 70LPA, hr_manager: 32LPA, finance_head: 95LPA",
      },
      {
        name: "CrewAI",
        careersUrl: "https://apply.workable.com/crewai/?lng=en",
        logo: "https://images.seeklogo.com/logo-png/61/2/crewai-logo-png_seeklogo-619843.png",
        confidence_score_to_join: "92%",
        type: "earlystartup",
        approx_employee_count: 30,
        specialized_in: "Multi-Agent System Orchestration Frameworks",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 22LPA, finance_head: 60LPA",
      },
      {
        name: "Milvus (Zilliz)",
        careersUrl: "https://zilliz.com/careers#open-positions",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNbMepR3tOUIP2oAwpX2mJxjBOLHWLGCKW-LouWlPioS-lbD1S9woiMw&s=10",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 220,
        specialized_in: "Massive-Scale Vector Database Infrastructure",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 21LPA, finance_head: 55LPA",
      },
      {
        name: "AWS Bedrock / SageMaker",
        careersUrl:
          "https://www.amazon.jobs/en/search?base_query={query}&loc_query=",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 1500000,
        specialized_in: "Managed Foundation Model Infrastructure",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 25LPA, finance_head: 60LPA",
      },
      {
        name: "Google Cloud Vertex AI",
        careersUrl:
          "https://www.google.com/about/careers/applications/jobs/results/?q={query}&hl=en",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DJlHFx6DABEf2zSntwp_tgHMCH-k-W1Nxdl7qEgk-OTGqlbQHwFCfIk1&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 180000,
        specialized_in: "Enterprise Generative AI Platform, TPU Infrastructure",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 27LPA, finance_head: 65LPA",
      },
      {
        name: "Snorkel AI",
        careersUrl: "https://snorkel.ai/join-us/#jobs",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPN6Ug9Jh8fiZ4z_JoDpxBWfCXxcvyeMATGC5pYyC6oxbT8k9t5sulb5Y-&s=10",
        confidence_score_to_join: "88%",
        type: "earlystartup",
        approx_employee_count: 200,
        specialized_in: "Programmatic Data Development for AI Models",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 22LPA, finance_head: 58LPA",
      },
      {
        name: "Labelbox",
        careersUrl: "https://labelbox.com/company/jobs/",
        logo: "https://cdn.dribbble.com/userupload/29889734/file/original-d0a49b84a094fff27917ceb36feb51f0.png?format=webp&resize=400x300&vertical=center",
        confidence_score_to_join: "87%",
        type: "earlystartup",
        approx_employee_count: 250,
        specialized_in: "Data Alignment & RLHF Data Pipeline Systems",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 21LPA, finance_head: 55LPA",
      },
      {
        name: "Dataiku",
        careersUrl:
          "https://job-boards.greenhouse.io/dataiku?keyword={query}&departments%5B%5D=4039139004",
        logo: "https://images.seeklogo.com/logo-png/44/1/dataiku-logo-png_seeklogo-442441.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 1200,
        specialized_in:
          "Everyday AI Platforms, Enterprise Data Science Collaboration",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "Domino Data Lab",
        careersUrl: "https://domino.ai/careers?department=Engineering",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAlfA10E5sHWBnCZtbHMQXTP5NrnDSl_Z0Zl-cMFybUZrcnFA1U3Oo_9A&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "86%",
        type: "growth_stage",
        approx_employee_count: 450,
        specialized_in: "Enterprise AI Lifecycle Orchestration Infrastructure",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 21LPA, finance_head: 48LPA",
      },
      {
        name: "ClearML",
        careersUrl: "https://clear.ml/careers",
        logo: "https://pbs.twimg.com/profile_images/1344680895039598593/VEKe_N_V_400x400.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "88%",
        type: "earlystartup",
        approx_employee_count: 100,
        specialized_in: "Open-Source MLOps Orchestration Stack",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 20LPA, finance_head: 50LPA",
      },
    ],
  },
  {
    id: "e-commerce",
    label: "E-Commerce",
    companies: [
      {
        name: "Shopify",
        careersUrl:
          "https://www.shopify.com/in/careers/disciplines/engineering-data",
        logo: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 11000,
        specialized_in: "Merchant Commerce Engines, Scalable Cart Protocols",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 25LPA, finance_head: 58LPA",
      },
      {
        name: "Flipkart",
        careersUrl:
          "https://flipkart.turbohire.co/dashboardv2?orgId=4d757ba0-3d57-448a-b82c-238ed87ac90f&type=0",
        logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 22000,
        specialized_in: "High-Volume Retail Logistics, Indian E-Commerce Tech",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 22LPA, finance_head: 55LPA",
      },
      {
        name: "Mercado Libre",
        careersUrl:
          "https://careers-meli.mercadolibre.com/en/positions?query={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDun8hh_B_awM2UoPBaIiao7rDT2WjKxIz5scI1Uk_4-_YdQlB0OlTYQMP&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 58000,
        specialized_in: "Latin American Marketplace Logistics & Fintech",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 23LPA, finance_head: 52LPA",
      },
      {
        name: "Meesho",
        careersUrl: "https://www.meesho.io/jobs?d=engineering",
        logo: "https://i.pinimg.com/736x/38/b4/84/38b484fcc4ab08c2fa2f23a2ae97b727.jpg",
        confidence_score_to_join: "88%",
        type: "growth_stage",
        approx_employee_count: 2000,
        specialized_in:
          "Social Commerce Architecture, Tier-2/3 Retail Logistics",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 24LPA, finance_head: 58LPA",
      },
      {
        name: "eBay",
        careersUrl: "https://jobs.ebayinc.com/us/en/jobs-in-india",
        logo: "https://download.logo.wine/logo/EBay/EBay-Logo.wine.png",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 12300,
        specialized_in:
          "Global Auction Engine Platforms, Consumer Marketplaces",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 21LPA, finance_head: 48LPA",
      },
      {
        name: "Etsy",
        careersUrl: "https://careers.etsy.com/jobs/search?query={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/3840px-Etsy_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 2800,
        specialized_in:
          "Handmade Goods Marketplace, Personalized Search Algorithms",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 23LPA, finance_head: 50LPA",
      },
      {
        name: "Instacart",
        careersUrl: "https://www.instacart.careers/current-openings",
        logo: "https://logos-world.net/wp-content/uploads/2022/02/Instacart-Logo.png",
        confidence_score_to_join: "86%",
        type: "growth_stage",
        approx_employee_count: 3500,
        specialized_in: "Same-Day Grocery Delivery Real-Time Logistics",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 24LPA, finance_head: 55LPA",
      },
      {
        name: "Rakuten",
        careersUrl: "https://rakuten.openings.co/rakuten/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Rakuten_Global_Brand_Logo.svg",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 32000,
        specialized_in:
          "Japanese E-Commerce Systems, Digital Ecosystem Platforms",
        average_salary:
          "senior_engg: 24LPA, hr_manager: 18LPA, finance_head: 42LPA",
      },
      {
        name: "Zalando",
        careersUrl: "https://jobs.zalando.com/en/jobs?q={query}",
        logo: "https://logos-world.net/wp-content/uploads/2023/01/Zalando-Logo.png",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 16000,
        specialized_in:
          "European Online Fashion Retail Tech, Supply Distribution",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 20LPA, finance_head: 46LPA",
      },
      {
        name: "Delivery Hero",
        careersUrl:
          "https://careers.deliveryhero.com/jobs?q={query}&options=&page=1",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwizFo3D6GgPFsVNw0BrUIvqvDdsE0mRsBizRJbGQIVg&s=10",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 50000,
        specialized_in: "Quick Commerce, Global Food Logistics",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 44LPA",
      },
      {
        name: "Klaviyo",
        careersUrl:
          "https://www.klaviyo.com/careers/search-jobs?keywords={query}",
        logo: "https://mms.businesswire.com/media/20220323005313/en/1398264/4/Klaviyo_primary_mark_poppy-SQ.jpg",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 1600,
        specialized_in:
          "E-Commerce Customer Data Platforms, Automated Marketing",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 24LPA, finance_head: 52LPA",
      },
      {
        name: "BigCommerce",
        careersUrl:
          "https://bigcommerce.wd12.myworkdayjobs.com/Commerce/?q={query}",
        logo: "https://storage.googleapis.com/s.mkswft.com/RmlsZTo3NzQyZWFmYy1iMTY5LTQxNzItYTcxNi1iNWRjNzA1YWRjMDA=/bg-image.webp",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 1400,
        specialized_in: "Open SaaS E-Commerce Architecture",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "commercetools",
        careersUrl: "https://commercetools.com/careers#open-positions",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnals1WffySZS2cb09rimbm4VddiNDRjflNmdAvAGfsN6QbFQmrLS-qbsR&s=10",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 700,
        specialized_in: "Headless Composable Commerce APIs",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Shopee (Sea Group)",
        careersUrl:
          "https://careers.shopee.sg/jobs?limit=50&offset=0&name={query}",
        logo: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 60000,
        specialized_in: "Southeast Asian Marketplace Architecture",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "WooCommerce (Automattic)",
        careersUrl: "https://automattic.com/work-with-us/jobs/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOMSdM1j_OPpMXrCZKZ7QXj8L6h22AYbkYTupNX9tZFuvvH5Bd_Vd28Ye&s=10",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 2000,
        specialized_in: "Open-Source E-Commerce Plugins & Extensions",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "VTEX",
        careersUrl: "https://job-boards.greenhouse.io/vtex?keyword={query}",
        logo: "https://yt3.googleusercontent.com/0fnmJ6X1_lfACSaN70A1oPdwemIcTKgi-UmENgJ480SKuhVAP089-RqJhUPGlC0pQkNS5aiN4A=s900-c-k-c0x00ffffff-no-rj",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 1600,
        specialized_in: "Enterprise Composable Commerce Frameworks",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 18LPA, finance_head: 42LPA",
      },
      {
        name: "Attentive",
        careersUrl: "https://www.attentive.com/careers#jobs",
        logo: "https://cdn.prod.website-files.com/68485e1e40741050193e3d29/6a0cda24498c94725c1061b8_Rebrand%20External%20Launch_blog_feat-image_1440x1040.png",
        confidence_score_to_join: "88%",
        type: "growth_stage",
        approx_employee_count: 1300,
        specialized_in: "SMS Direct-to-Consumer Marketing Systems",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 21LPA, finance_head: 48LPA",
      },
      {
        name: "Yotpo",
        careersUrl: "https://www.yotpo.com/careers/#jobs",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nuac5H9wwEM3rvtP7VlNCliqZ898e-XoM7KtMsHTkaxuFV_mB-tTxGA&s=10",
        confidence_score_to_join: "87%",
        type: "growth_stage",
        approx_employee_count: 800,
        specialized_in: "E-Commerce Review Platforms & Loyalty Infrastructure",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Bolt",
        careersUrl: "https://bolt.eu/en/careers/positions/?search={query}",
        logo: "https://assets.cms.bolt.eu/Newsroom_Media_6_fb89b72f94.webp",
        confidence_score_to_join: "86%",
        type: "growth_stage",
        approx_employee_count: 4000,
        specialized_in: "One-Click Checkout Infrastructure, Urban Mobility",
        average_salary:
          "senior_engg: 33LPA, hr_manager: 21LPA, finance_head: 47LPA",
      },
      {
        name: "Deliveroo",
        careersUrl:
          "https://careers.deliveroo.co.uk/join-the-team/?search={query}",
        logo: "https://kwx34f0sv48hjozz.public.blob.vercel-storage.com/social-banner/deliveroo.co.uk/6e8bae7dbd321ef80b35c24d9b018435.jpeg",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 4000,
        specialized_in: "Real-Time Food Delivery Optimization",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Just Eat Takeaway",
        careersUrl:
          "https://careers.justeattakeaway.com/global/en/search-results?m=3&keywords={query}",
        logo: "https://www.logo.wine/a/logo/Just_Eat/Just_Eat-Logo.wine.svg",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 15000,
        specialized_in: "Global Online Food Order Aggregation Platforms",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "StockX",
        careersUrl: "https://careers.stockx.com/jobs?search={query}",
        logo: "https://logos-world.net/wp-content/uploads/2025/04/StockX-Logo.png",
        confidence_score_to_join: "85%",
        type: "growth_stage",
        approx_employee_count: 1500,
        specialized_in: "Bid/Ask Resale Marketplace Technology",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 44LPA",
      },
      {
        name: "Vinted",
        careersUrl: "https://careers.vinted.com/jobs?q={query}",
        logo: "https://cdn.prod.website-files.com/6450bd5a51a4509928f3d530/6899128ee5c678660b405498_Vinted_1200x630px_Opengraph-image.png",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 2000,
        specialized_in: "C2C Second-Hand Apparel Marketplace Platforms",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "ASOS",
        careersUrl:
          "https://www.asoscareers.com/job-search?production__asoscare2201__sort-rank%5Bquery%5D={query}",
        logo: "https://1000logos.net/wp-content/uploads/2021/04/Asos-logo.png",
        confidence_score_to_join: "81%",
        type: "mnc",
        approx_employee_count: 3300,
        specialized_in: "E-Commerce Fashion Catalog Platforms",
        average_salary:
          "senior_engg: 26LPA, hr_manager: 18LPA, finance_head: 40LPA",
      },
      {
        name: "Revolve",
        careersUrl:
          "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=02835ad7-1b2e-4eb2-9773-3454d03b1a3e&ccId=19000101_000001&lang=en_US",
        logo: "https://logos-world.net/wp-content/uploads/2023/01/Revolve-Logo.png",
        confidence_score_to_join: "83%",
        type: "mnc",
        approx_employee_count: 1000,
        specialized_in: "Data-Driven Fashion E-Commerce Operations",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 18LPA, finance_head: 41LPA",
      },
      {
        name: "Poshmark",
        careersUrl: "https://poshmark.com/careers",
        logo: "https://i0.wp.com/newsroom.poshmark.com/wp-content/uploads/2026/03/cropped-appicon-iOS.png?fit=240%2C240&ssl=1",
        confidence_score_to_join: "84%",
        type: "mnc",
        approx_employee_count: 800,
        specialized_in: "Social Shopping Platforms, C2C Resale Networks",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "Alibaba Group",
        careersUrl:
          "https://campus-talent.alibaba.com/campus/position?batchId=100000760001&search={query}",
        logo: "https://download.logo.wine/logo/Alibaba_Group/Alibaba_Group-Logo.wine.png",
        confidence_score_to_join: "81%",
        type: "mnc",
        approx_employee_count: 220000,
        specialized_in: "Global Wholesale/Retail Trade Platforms",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 48LPA",
      },
      {
        name: "Lazada",
        careersUrl:
          "https://www.lazada.com/en/careers/job-search/?category=&keywords={query}",
        logo: "https://logos-world.net/wp-content/uploads/2022/06/Lazada-Symbol.png",
        confidence_score_to_join: "82%",
        type: "mnc",
        approx_employee_count: 10000,
        specialized_in: "Southeast Asia Regional E-Commerce Platforms",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 18LPA, finance_head: 42LPA",
      },
      {
        name: "Ankorstore",
        careersUrl: "https://my.ankorstore.com/join-us/en#opportunities",
        logo: "https://cdn-images.welcometothejungle.com/XBuedJELH8bBB3R498SFySMGbF_zZ_mo1PM5U6-3BBw/rs:auto:400::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9vcmdhbml6YXRpb24vbG9nby8wMjU5LzE1NzU4OS8zMjliNjMwMy02ODYwLTRjY2EtOTBjMC02OTQ0OThhYWZlMTMucG5n",
        confidence_score_to_join: "84%",
        type: "growth_stage",
        approx_employee_count: 600,
        specialized_in:
          "B2B Wholesale E-Commerce Platforms for Independent Retailers",
        average_salary:
          "senior_engg: 29LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "Spryker",
        careersUrl: "https://spryker.com/career/open-positions",
        logo: "https://getlogovector.com/wp-content/uploads/2019/06/spryker-logo-vector.png",
        confidence_score_to_join: "85%",
        type: "growth_stage",
        approx_employee_count: 600,
        specialized_in: "Enterprise B2B Composable Commerce Technology",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 44LPA",
      },
    ],
  },
  {
    id: "saas",
    label: "SaaS",
    companies: [
      {
        name: "HubSpot",
        careersUrl: "https://www.hubspot.com/careers/jobs?q={query}&page=1",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/3840px-HubSpot_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "96%",
        type: "mnc",
        approx_employee_count: 7600,
        specialized_in:
          "Inbound Marketing Automation, Customer Platform Systems",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 25LPA, finance_head: 55LPA",
      },
      {
        name: "Figma",
        careersUrl: "https://www.figma.com/careers/#job-openings",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNX0cOHVgJYE1YnD0lCGFqd-x48qmi1qvJSdCF5h3044PdL-uBqb3p5TJ&s=10",
        confidence_score_to_join: "96%",
        type: "growth_stage",
        approx_employee_count: 1300,
        specialized_in: "Browser-Based Collaborative Design Software Engine",
        average_salary:
          "senior_engg: 50LPA, hr_manager: 28LPA, finance_head: 72LPA",
      },
      {
        name: "Canva",
        careersUrl:
          "https://www.lifeatcanva.com/en/jobs/?search={query}&pagesize=20#results",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Canva_logo.svg/3840px-Canva_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "95%",
        type: "growth_stage",
        approx_employee_count: 4500,
        specialized_in: "Freemium Visual Design Systems, Web Publishing Tools",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 26LPA, finance_head: 60LPA",
      },
      {
        name: "Notion",
        careersUrl: "https://www.notion.com/careers?department=engineering",
        logo: "https://cdn.dribbble.com/userupload/30613445/file/still-cb1bfc4919e3b77afd442d6440d79d16.png",
        confidence_score_to_join: "94%",
        type: "growth_stage",
        approx_employee_count: 600,
        specialized_in:
          "All-in-One Knowledge Management Systems, Workspace Tech",
        average_salary:
          "senior_engg: 48LPA, hr_manager: 27LPA, finance_head: 68LPA",
      },
      {
        name: "Zendesk",
        careersUrl: "https://zendesk.wd1.myworkdayjobs.com/zendesk?q={query}",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 6000,
        specialized_in: "Customer Service CRM, Helpdesk Automation Platforms",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 22LPA, finance_head: 48LPA",
      },
      {
        name: "Freshworks",
        careersUrl: "https://careers.smartrecruiters.com/Freshworks",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4y2lNxbVFK7EUb8Zy--xEXFLva5OUGQEx2Npo3-7aw&s=10",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 4900,
        specialized_in: "Mid-Market CRM, IT Service Management Platforms",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Zoho",
        careersUrl: "https://www.zoho.com/careers/",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/960px-ZOHO_logo_2023.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "91%",
        type: "enterprise",
        approx_employee_count: 15000,
        specialized_in: "Bootstrapped Enterprise Application Suites",
        average_salary:
          "senior_engg: 18LPA, hr_manager: 14LPA, finance_head: 35LPA",
      },
      {
        name: "DocuSign",
        careersUrl:
          "https://careers.docusign.com/careers-home/jobs?page=1&keywords={query}",
        logo: "https://images.ctfassets.net/3fcisxc3a6xz/docusign_logo_black_text_on_white_0.png/e9c3ea9388b6b21f45118eb200d56aea/ds-logo-on-white.png",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 6800,
        specialized_in:
          "Electronic Signature Protocols, Contract Lifecycle SaaS",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 48LPA",
      },
      {
        name: "Dropbox",
        careersUrl:
          "https://www.dropbox.jobs/en/jobs/?search={query}&pagesize=20#results",
        logo: "https://download.logo.wine/logo/Dropbox_(service)/Dropbox_(service)-Logo.wine.png",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 2700,
        specialized_in: "Cloud Storage File Synchronization Systems",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 52LPA",
      },
      {
        name: "Airtable",
        careersUrl: "https://airtable.com/careers/roles",
        logo: "https://images.seeklogo.com/logo-png/29/1/airtable-logo-png_seeklogo-294322.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 900,
        specialized_in: "Low-Code Relational Database Workspaces",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 25LPA, finance_head: 62LPA",
      },
      {
        name: "Miro",
        careersUrl:
          "https://miro.com/careers/open-positions/?page=1&keyword={query}",
        logo: "https://logos-world.net/wp-content/uploads/2023/09/Miro-Logo.png",
        confidence_score_to_join: "91%",
        type: "growth_stage",
        approx_employee_count: 1800,
        specialized_in: "Visual Collaboration Digital Whiteboarding Platforms",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 52LPA",
      },
      {
        name: "Monday.com",
        careersUrl: "https://monday.com/careers#search",
        logo: "https://download.logo.wine/logo/Monday.com/Monday.com-Logo.wine.png",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 2200,
        specialized_in: "Work Operating System (Work OS) Infrastructure",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 23LPA, finance_head: 50LPA",
      },
      {
        name: "Asana",
        careersUrl: "https://asana.com/jobs/all",
        logo: "https://assets.asana.biz/transform/34b29128-409a-42d0-b86d-7dd377c5b492/logo-primary-bright",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 1800,
        specialized_in: "Enterprise Task Management Graph Architecture",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 48LPA",
      },
      {
        name: "Gong",
        careersUrl: "https://www.gong.io/careers#job-grid",
        logo: "https://logosandtypes.com/wp-content/uploads/2023/03/Gong.png",
        confidence_score_to_join: "92%",
        type: "growth_stage",
        approx_employee_count: 1400,
        specialized_in: "Revenue Intelligence, Sales Conversation NLP",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 24LPA, finance_head: 58LPA",
      },
      {
        name: "Intercom",
        careersUrl: "https://fin.ai/careers/listings",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Intercom_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "90%",
        type: "growth_stage",
        approx_employee_count: 1000,
        specialized_in: "AI Customer Messaging Protocols",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 22LPA, finance_head: 52LPA",
      },
      {
        name: "Zapier",
        careersUrl: "https://zapier.com/jobs#job-openings",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7ggROdj3X81RDWanf7eGng7lgd1HqMaMROzWQh1ARcqL-TsQyaScOAc&s=10",
        confidence_score_to_join: "93%",
        type: "growth_stage",
        approx_employee_count: 800,
        specialized_in: "No-Code API Automation Workflow Engine",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 55LPA",
      },
      {
        name: "UiPath",
        careersUrl: "https://www.uipath.com/careers/jobs",
        logo: "https://images.seeklogo.com/logo-png/61/2/uipath-logo-png_seeklogo-618304.png",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 4000,
        specialized_in: "Robotic Process Automation (RPA), Enterprise AI",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "Veeva Systems",
        careersUrl:
          "https://careers.veeva.com/job-search-results/?search={query}&remote=false&ts=&regions=&office_locations=",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Veeva_Systems_Logo.svg/3840px-Veeva_Systems_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 7000,
        specialized_in: "Vertical Life Sciences Cloud Software Architecture",
        average_salary:
          "senior_engg: 33LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "Qualtrics",
        careersUrl:
          "https://www.qualtrics.com/careers/us/en/search-results?m=3&keywords={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFFgkyQeAQbII7Fflyqdb5pCVIoqoDHZJM80q_yNi-V_33hgwaVsa9ks&s=10",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 5000,
        specialized_in: "Experience Management (XM) Analytics Platforms",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "Toast",
        careersUrl:
          "https://careers.toasttab.com/jobs/search?page=1&query={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Toast_logo.svg/3840px-Toast_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "89%",
        type: "mnc",
        approx_employee_count: 4500,
        specialized_in: "Restaurant Management Systems, POS Cloud SaaS",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 22LPA, finance_head: 48LPA",
      },
      {
        name: "Procore Technologies",
        careersUrl:
          "https://careers.procore.com/jobs/search?page=1&query={query}",
        logo: "https://1000logos.net/wp-content/uploads/2024/09/Procore-Emblem.png",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 3800,
        specialized_in: "Construction Management Vertical SaaS Platforms",
        average_salary:
          "senior_engg: 33LPA, hr_manager: 21LPA, finance_head: 47LPA",
      },
      {
        name: "1Password",
        careersUrl: "https://jobs.ashbyhq.com/1password",
        logo: "https://images.ctfassets.net/2h488pz7kgfv/1bxxVrlEekd4d2dL47OObo/719ddfd53ea1a034785e7cb11df59d44/press-1password-logo-1248x832.webp",
        confidence_score_to_join: "92%",
        type: "growth_stage",
        approx_employee_count: 1200,
        specialized_in: "Enterprise Credential Management Vault Systems",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "Smartsheet",
        careersUrl:
          "https://www.smartsheet.com/careers-list?location=&department=&position={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PMRlqzsjvGVcDSAeWxuJXvlidtBkyNdLnV4Ek9Sk5rzvjxtU9fx_2i4&s=10",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 3300,
        specialized_in: "Enterprise Dynamic Work Management Platforms",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 44LPA",
      },
      {
        name: "ClickUp",
        careersUrl: "https://clickup.com/careers",
        logo: "https://easynote.com/wp-content/uploads/2023/03/ClickUp-Logo-1024x576.png",
        confidence_score_to_join: "84%",
        type: "growth_stage",
        approx_employee_count: 900,
        specialized_in: "All-in-One Productivity Project Suites",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "Outreach",
        careersUrl: "https://www.outreach.ai/company/working-at-outreach#roles",
        logo: "https://cdn.prod.website-files.com/696ea7504e736c595e9a2313/6a457aceaaa4ce4ad9ef6b68_outreach-logo-stacked.svg",
        confidence_score_to_join: "86%",
        type: "growth_stage",
        approx_employee_count: 1000,
        specialized_in: "Sales Execution Platforms, Revenue Workflow Tech",
        average_salary:
          "senior_engg: 33LPA, hr_manager: 21LPA, finance_head: 47LPA",
      },
      {
        name: "Salesloft",
        careersUrl: "https://www.salesloft.com/company/careers",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Salesloft-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        confidence_score_to_join: "87%",
        type: "growth_stage",
        approx_employee_count: 900,
        specialized_in: "Sales Engagement Digital Workspaces",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Typeform",
        careersUrl: "https://www.typeform.com/careers/engineering",
        logo: "https://cdn.prod.website-files.com/66ffe2174aa8e8d5661c2708/6889ccfec828e151ddd96537_ogimage.png",
        confidence_score_to_join: "88%",
        type: "growth_stage",
        approx_employee_count: 450,
        specialized_in: "Conversational Form Builder Engines",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "Make (Integromat)",
        careersUrl:
          "https://www.make.com/en/careers?location=All+Offices&department=All+Departments#jobsList",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOAS5jP2yiWlddhBhiUvda68SpqJ2PkiltimE5hRQnuOYU0-Uldae5kU9&s=10",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 500,
        specialized_in: "Visual Workflow & System Integration Engines",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 20LPA, finance_head: 44LPA",
      },
      {
        name: "New Relic",
        careersUrl: "https://newrelic.com/careers?search={query}",
        logo: "https://images.seeklogo.com/logo-png/44/1/new-relic-logo-png_seeklogo-441431.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 2200,
        specialized_in: "Full-Stack Software Observability Analytics",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "PagerDuty",
        careersUrl:
          "https://careers.pagerduty.com/jobs/search?page=1&query={query}",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH2LlbTLbt_sR91qSD7TVS6QlpP5FTpAg8gO1xl3Avnw5ul16VeYPHRc&s=10",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 1200,
        specialized_in: "Digital Operations Incident Response Systems",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
    ],
  },
  {
    id: "enterprise-b2b-infrastructure",
    label: "Enterprise B2B Infrastructure",
    companies: [
      {
        name: "Microsoft Azure",
        careersUrl:
          "https://apply.careers.microsoft.com/careers?query={query}&start=0&pid=1970393556994428&sort_by=relevance",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWlIYYJ5BUhaG2ENO1WGtWaRlAlv-ex7iU32JDkrqog&s",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 220000,
        specialized_in: "Enterprise Identity, Hybrid Cloud Infrastructure",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 26LPA, finance_head: 58LPA",
      },
      {
        name: "Confluent",
        careersUrl: "https://www.ibm.com/careers/search?q={query}",
        logo: "https://1000logos.net/wp-content/uploads/2024/09/Confluent-Logo.png",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 2800,
        specialized_in:
          "Event Streaming Platforms, Apache Kafka Data Pipelines",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 24LPA, finance_head: 52LPA",
      },
      {
        name: "Red Hat",
        careersUrl: "https://redhat.wd5.myworkdayjobs.com/jobs/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IIqzxLp-5telj1tUpqRknCvEBvzj3a_Rj6_LAQ_o6J3Quw8uGN0reOQ5&s=10",
        confidence_score_to_join: "92%",
        type: "mnc",
        approx_employee_count: 20000,
        specialized_in: "Enterprise Open-Source Linux OS, OpenShift Kubernetes",
        average_salary:
          "senior_engg: 30LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "GitLab",
        careersUrl: "https://about.gitlab.com/jobs/all-jobs/?dept=Engineering",
        logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "93%",
        type: "mnc",
        approx_employee_count: 2200,
        specialized_in: "DevOps Lifecycle Platform, Remote-First Architecture",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 52LPA",
      },
      {
        name: "GitHub",
        careersUrl:
          "https://www.github.careers/careers-home/jobs?keywords={query}",
        logo: "https://cdn-icons-png.flaticon.com/256/25/25231.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "94%",
        type: "mnc",
        approx_employee_count: 3000,
        specialized_in:
          "Version Control Repositories, Developer AI Copilot Systems",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 26LPA, finance_head: 58LPA",
      },
      {
        name: "Vercel",
        careersUrl: "https://vercel.com/careers#positions",
        logo: "https://logos-world.net/wp-content/uploads/2024/10/Vercel-Logo.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "94%",
        type: "growth_stage",
        approx_employee_count: 500,
        specialized_in:
          "Frontend Cloud Infrastructure, Next.js Development Stack",
        average_salary:
          "senior_engg: 48LPA, hr_manager: 26LPA, finance_head: 68LPA",
      },
      {
        name: "Elastic",
        careersUrl: "https://jobs.elastic.co/?q={query}&size=n_5_n",
        logo: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 3200,
        specialized_in: "Search Engine Infrastructure, Log Analytics Platforms",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "CockroachLabs",
        careersUrl: "https://www.cockroachlabs.com/careers/open-positions/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHExKViweZMAQYeUaWUpBZdgVc1-xRqeXpvRkBKmHeUwJ2JBS_1EaVsg9&s=10",
        confidence_score_to_join: "92%",
        type: "growth_stage",
        approx_employee_count: 450,
        specialized_in: "Cloud-Native Distributed SQL Databases",
        average_salary:
          "senior_engg: 42LPA, hr_manager: 24LPA, finance_head: 58LPA",
      },
      {
        name: "ClickHouse",
        careersUrl: "https://clickhouse.com/company/careers?search={query}",
        logo: "https://garethdjones.com/assets/images/posts/clickhouse/ch-logo.gif",
        confidence_score_to_join: "93%",
        type: "growth_stage",
        approx_employee_count: 250,
        specialized_in: "Real-Time Column-Oriented DBMS",
        average_salary:
          "senior_engg: 45LPA, hr_manager: 24LPA, finance_head: 62LPA",
      },
      {
        name: "Redis",
        careersUrl:
          "https://redis.io/company/careers/current-job-openings/?search=software",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo-redis_%28old%29.svg/3840px-Logo-redis_%28old%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 800,
        specialized_in: "In-Memory Data Structure Stores, Fast Caching Engines",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "Pure Storage",
        careersUrl:
          "https://www.everpuredata.com/company/careers/opportunities.html",
        logo: "https://images.seeklogo.com/logo-png/34/1/pure-storage-logo-png_seeklogo-342024.png",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 4300,
        specialized_in: "All-Flash Enterprise Data Storage Systems",
        average_salary:
          "senior_engg: 34LPA, hr_manager: 21LPA, finance_head: 48LPA",
      },
      {
        name: "Sentry",
        careersUrl: "https://sentry.io/careers/#openings",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveL6_dLQFBtlZz9KECdt0Q3hxjz03DBUCPB0-XbwR-h_lZCtffXywBx5k&s=10",
        confidence_score_to_join: "92%",
        type: "growth_stage",
        approx_employee_count: 400,
        specialized_in:
          "Application Performance Monitoring, Code Error Tracking",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 23LPA, finance_head: 55LPA",
      },
      {
        name: "JFrog",
        careersUrl: "https://join.jfrog.com/#open-positions",
        logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jfrog-3yct5rspgi4t2fqp44s7wb.png/jfrog-dm7conmere67czblp5ikj6.png?_a=DATAiZAAZAA0",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 1500,
        specialized_in: "Universal Binary Repository Management Systems",
        average_salary:
          "senior_engg: 32LPA, hr_manager: 21LPA, finance_head: 46LPA",
      },
      {
        name: "Docker",
        careersUrl: "https://www.docker.com/career-openings/",
        logo: "https://www.docker.com/app/uploads/2026/02/Docker_Logo_Scale_660x400.png",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 600,
        specialized_in: "Software Containerization Standards, Runtime Tools",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 23LPA, finance_head: 52LPA",
      },
      {
        name: "Fastly",
        careersUrl: "https://www.fastly.com/about/careers/current-openings",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Fastly_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "87%",
        type: "mnc",
        approx_employee_count: 1200,
        specialized_in: "Programmable Edge Cloud Platforms",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 48LPA",
      },
      {
        name: "Akamai",
        careersUrl:
          "https://jobs.akamai.com/en/sites/CX_1/jobs?keyword={query}&mode=location",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Akamai_logo.svg/3840px-Akamai_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "86%",
        type: "mnc",
        approx_employee_count: 10000,
        specialized_in: "Global Content Delivery Networks, Cloud Security",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
      {
        name: "Arista Networks",
        careersUrl: "https://www.arista.com/en/careers",
        logo: "https://img.logo.dev/arista.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=128&retina=true&format=png",
        confidence_score_to_join: "91%",
        type: "mnc",
        approx_employee_count: 4000,
        specialized_in: "Software-Driven Cloud Networking Equipment",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "Nutanix",
        careersUrl:
          "https://careers.nutanix.com/en/jobs/?country=&search={query}&origin=global",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQdwx1-AWJz8FauHU9Q9KAPKlCU77YxWynhKfWA6J60PJVCVKmAy-KXlp&s=10",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 6500,
        specialized_in: "Hyperconverged Cloud Infrastructure Stack",
        average_salary:
          "senior_engg: 31LPA, hr_manager: 20LPA, finance_head: 45LPA",
      },
      {
        name: "Rubrik",
        careersUrl: "https://www.rubrik.com/company/careers#positions",
        logo: "https://www.rubrik.com/content/dam/rubrik/brand/logos/logomark/Rubrik_Logomark_Gradient.png",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "90%",
        type: "mnc",
        approx_employee_count: 3500,
        specialized_in: "Zero Trust Data Security, Enterprise Backup Systems",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 24LPA, finance_head: 54LPA",
      },
      {
        name: "Cohesity",
        careersUrl: "https://www.cohesity.com/careers/open-positions/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILPEJgdXS7_J00ULBAPtdu-j1y3ifs4vczagnn7bUPv44ru75-tTY-4RM&s=10",
        confidence_score_to_join: "88%",
        type: "growth_stage",
        approx_employee_count: 2200,
        specialized_in: "AI-Powered Data Management Platforms",
        average_salary:
          "senior_engg: 35LPA, hr_manager: 22LPA, finance_head: 48LPA",
      },
      {
        name: "NetApp",
        careersUrl: "https://careers.netapp.com/search-jobs",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/NetApp_logo.svg/960px-NetApp_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20150107130530",
        logoSize: "bg-[size:160px_auto]",
        confidence_score_to_join: "85%",
        type: "mnc",
        approx_employee_count: 12000,
        specialized_in: "Hybrid Cloud Storage Infrastructure",
        average_salary:
          "senior_engg: 28LPA, hr_manager: 19LPA, finance_head: 42LPA",
      },
      {
        name: "dbt Labs",
        careersUrl: "https://www.getdbt.com/about-us/careers#roles",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrgYJyjuFr2ymY8NvlnHYOfYl_Hg5ue_6HE7UYbPqYRME9spU4Rcia3U&s=10",
        confidence_score_to_join: "91%",
        type: "growth_stage",
        approx_employee_count: 400,
        specialized_in: "Analytics Engineering Data Transformation Tools",
        average_salary:
          "senior_engg: 40LPA, hr_manager: 23LPA, finance_head: 58LPA",
      },
      {
        name: "Fivetran",
        careersUrl: "https://www.fivetran.com/careers?q={query}#jobs",
        logo: "https://cdn.prod.website-files.com/6130fa1501794ed4d11867ba/6267492360c41b79149c466a_fivetran_OGI.png",
        confidence_score_to_join: "89%",
        type: "growth_stage",
        approx_employee_count: 1200,
        specialized_in: "Automated Cloud Data Integration Pipelines",
        average_salary:
          "senior_engg: 36LPA, hr_manager: 22LPA, finance_head: 50LPA",
      },
      {
        name: "Temporal",
        careersUrl: "https://temporal.io/careers#become-a-temporalite",
        logo: "https://images.ctfassets.net/0uuz8ydxyd9p/4trsvKnpkfJ9qTRn8Xtmyg/9e0b94c252f0c540e5986cf19a5e33b1/Temporal_LogoLockup_Vertical_dark_1.svg",
        confidence_score_to_join: "94%",
        type: "earlystartup",
        approx_employee_count: 150,
        specialized_in: "Open-Source Durable Execution Workflow Platform",
        average_salary:
          "senior_engg: 48LPA, hr_manager: 25LPA, finance_head: 68LPA",
      },
      {
        name: "Astronomer (Airflow)",
        careersUrl: "https://www.astronomer.io/careers/#openings",
        logo: "https://avatars.githubusercontent.com/u/12449437?s=280&v=4",
        logoSize: "bg-[size:200px_auto]",
        confidence_score_to_join: "90%",
        type: "growth_stage",
        approx_employee_count: 300,
        specialized_in: "Unified Apache Airflow Data Orchestration Platforms",
        average_salary:
          "senior_engg: 38LPA, hr_manager: 22LPA, finance_head: 52LPA",
      },
      {
        name: "Equinix",
        careersUrl: "https://careers.equinix.com/jobs/search?query={query}",
        logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Equinix_logo.svg/1280px-Equinix_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
        confidence_score_to_join: "88%",
        type: "mnc",
        approx_employee_count: 13000,
        specialized_in: "Global Digital Infrastructure & Data Center Services",
        average_salary:
          "senior_engg: 27LPA, hr_manager: 19LPA, finance_head: 43LPA",
      },
    ],
  },
];
