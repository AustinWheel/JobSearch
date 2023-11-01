import { useState, useEffect } from 'react'
import axios from 'axios';

const rapidApiKey = "";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
      params: { ...query },
    };
  
    const fetchData = async () => {
      setIsLoading(true);
  
      try {
        const response = await axios.request(options);
        setData(response.data.data);


        // const response = {
        //     "status": "OK",
        //     "request_id": "f1c054f6-bf05-4053-a989-5e06acc77f2b",
        //     "parameters": {
        //       "query": "python developer in texas, usa",
        //       "page": 1,
        //       "num_pages": 1
        //     },
        //     "data": [
        //       {
        //         "employer_name": "Patterned Learning AI",
        //         "employer_logo": null,
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "PQ5Tvzlj5cbYnvcvAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Junior Python Developer-US/Canada",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/Patterned-Learning-AI/Job/Junior-Python-Developer-US-Canada/-in-Houston,TX?jid=1c72a6a406337dcc",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.6674,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/Patterned-Learning-AI/Job/Junior-Python-Developer-US-Canada/-in-Houston,TX?jid=1c72a6a406337dcc",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Jobgether",
        //             "apply_link": "https://jobgether.com/offer/648b3cd353084a4c349b008b-junior-python-developer",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "Junior Python Developer - US/Canada Residents only, Full-Time, Salary $75K-$85K\n\nMinimum 1 year of work experience - fully remote position. Freshers are also encouraged to apply.\n\nAbout us: The Future of AI is Patterned We are a stealth-mode technology startup that is revolutionizing the way AI is used. Our platform uses pattern recognition to train AI models that are more accurate, efficient, and robust than ever before.\n\nWe are backed by top investors and we are hiring for almost everything! If you are passionate about AI and want to be a part of something big, then we want to hear from you.\n\nMake a positive impact on the world. Be a part of a fast-growing startup. If you are interested, please visit our website.\n\nWe are looking for people who are:\n\nPassionate about AI.\n\nExcellent problem solvers.\n\nTeam players.\n\nDriven to succeed.\n\nResponsibilities:\n• Collaborate with senior developers to design and develop Python applications.\n• Write clean, efficient, and maintainable code that follows best practices.\n• Participate in code reviews and provide constructive feedback.\n• Debug and fix issues in the existing codebase.\n• Assist in testing and quality assurance processes.\n• Stay updated with the latest trends and technologies in Python development.\n\nRequirements:\n• Bachelor's degree in Computer Science, Software Engineering, or a related field.\n• Strong knowledge of Python programming language.\n• Familiarity with web frameworks such as Django or Flask.\n• Experience with version control systems, preferably Git.\n• Basic understanding of front-end technologies (HTML, CSS, JavaScript).\n• Good problem-solving and analytical skills.\n• Excellent communication and teamwork abilities.\n• Self-motivated and eager to learn.\n\nNice to have:\n• Experience with database systems such as MySQL, PostgreSQL, or MongoDB.\n• Knowledge of RESTful APIs and integration.\n• Familiarity with cloud platforms such as AWS or Azure.\n• Understanding of agile development methodologies.\n• Benefits\n\nSpecial Benefits you will love:\n• Flexible vacation, unlimited paid holidays, and paid sick days\n• 401(k) with up to 2% employer match\n• Health, vision, and dental insurance\n\nWhy Patterned Learning AI?\n\nPatterned Learning AI is made up of incredibly bright, mission-driven coworkers who are passionate about using technology to solve real-world problems---and we're growing quickly. In order to continue building an engaging and dynamic organization, we're committed to giving everyone the support they need to do great work.\n\nWe believe diverse perspectives and backgrounds are critical to building great technology, and our goal is to cultivate an environment where people feel equally valued and respected. Patterned Learning AI is proud to be an equal opportunity workplace, and we welcome applicants from all backgrounds regardless of race, color, ancestry, religion, gender identity or expression, sexual orientation, marital status, age, citizenship, socioeconomic status, disability, or veteran status.\n\nEmployment Type: FULL_TIME",
        //         "job_is_remote": true,
        //         "job_posted_at_timestamp": 1697612400,
        //         "job_posted_at_datetime_utc": "2023-10-18T07:00:00.000Z",
        //         "job_city": "Houston",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 29.760427,
        //         "job_longitude": -95.369804,
        //         "job_benefits": [
        //           "dental_coverage",
        //           "health_insurance",
        //           "retirement_savings",
        //           "paid_time_off"
        //         ],
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=PQ5Tvzlj5cbYnvcvAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": 12,
        //           "experience_mentioned": true,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": true,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": null,
        //         "job_max_salary": null,
        //         "job_salary_currency": null,
        //         "job_salary_period": null,
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Minimum 1 year of work experience - fully remote position",
        //             "Bachelor's degree in Computer Science, Software Engineering, or a related field",
        //             "Strong knowledge of Python programming language",
        //             "Familiarity with web frameworks such as Django or Flask",
        //             "Experience with version control systems, preferably Git",
        //             "Basic understanding of front-end technologies (HTML, CSS, JavaScript)",
        //             "Good problem-solving and analytical skills",
        //             "Excellent communication and teamwork abilities",
        //             "Self-motivated and eager to learn",
        //             "Experience with database systems such as MySQL, PostgreSQL, or MongoDB",
        //             "Knowledge of RESTful APIs and integration",
        //             "Familiarity with cloud platforms such as AWS or Azure",
        //             "Understanding of agile development methodologies"
        //           ],
        //           "Responsibilities": [
        //             "Collaborate with senior developers to design and develop Python applications",
        //             "Write clean, efficient, and maintainable code that follows best practices",
        //             "Participate in code reviews and provide constructive feedback",
        //             "Debug and fix issues in the existing codebase",
        //             "Assist in testing and quality assurance processes",
        //             "Stay updated with the latest trends and technologies in Python development"
        //           ],
        //           "Benefits": [
        //             "Junior Python Developer - US/Canada Residents only, Full-Time, Salary $75K-$85K",
        //             "Benefits",
        //             "Flexible vacation, unlimited paid holidays, and paid sick days",
        //             "401(k) with up to 2% employer match",
        //             "Health, vision, and dental insurance"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "Magnus Technology Solutions",
        //         "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jDxj9ijK5FI1q7aYX2LJr7YxTpzqyPhX_-tp&s=0",
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "70TAzH8W_MHzd5k5AAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Python Developer (Entry Level)",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/Magnus-Technology-Solutions/Job/Python-Developer-(Entry-Level)/-in-Frisco,TX?jid=8078428a471c9c19",
        //         "job_apply_is_direct": true,
        //         "job_apply_quality_score": 0.711,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/Magnus-Technology-Solutions/Job/Python-Developer-(Entry-Level)/-in-Frisco,TX?jid=8078428a471c9c19",
        //             "is_direct": true
        //           },
        //           {
        //             "publisher": "LinkedIn",
        //             "apply_link": "https://www.linkedin.com/jobs/view/python-developer-entry-level-at-tektalent-inc-3740266699",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "BeBee",
        //             "apply_link": "https://us.bebee.com/job/20231028-3bc803db1a32a45d44cf48d7eb44fad5",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "We are seeking a Python Developer (Entry Level) to become an integral part of our team! You will be responsible for creating and modifying computer application software or specialized utility programs.\n\nResponsibilities:\n• Analyze user needs and develop software solutions\n• Work with project manager or product owner to meet specification needs\n• Recommend software upgrades to optimize operational efficiency\n• Collaborate with other developers to design and optimize code\n• Create flowcharts and user guides for new and existing programs\n• Document all programming tasks and procedures\n• Perform routine software maintenance\n\nQualifications:\n• Previous experience in software development, computer engineering, or other related fields\n• Knowledge of Java, Python, or other programming languages\n• Familiarity with relational databases such as MySQL, Oracle, and SQL Server\n• Deadline and detail-oriented\n• Strong analytical and critical thinking skills\n\nCompany DescriptionMagnus Technology Solutions provide quick orientation / training for professionals & placement for candidates having work authorization in USA. We work on #Selenium, #QA_Testing, #QA_Automation, #Manual_Testing #Dotnet, #java, #j2ee, #java_UI, #Angular, #React, #Python, #DevOps, #Salesforce, #Hadoop, #IOS, #Android, #RPA, #Mulesoft and any #Developer related #Technologies.",
        //         "job_is_remote": true,
        //         "job_posted_at_timestamp": 1697481811,
        //         "job_posted_at_datetime_utc": "2023-10-16T18:43:31.000Z",
        //         "job_city": "Frisco",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 33.150673,
        //         "job_longitude": -96.82361,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=70TAzH8W_MHzd5k5AAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": true,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": false,
        //           "degree_preferred": false,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": 80000,
        //         "job_max_salary": 100000,
        //         "job_salary_currency": "USD",
        //         "job_salary_period": "YEAR",
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Previous experience in software development, computer engineering, or other related fields",
        //             "Knowledge of Java, Python, or other programming languages",
        //             "Familiarity with relational databases such as MySQL, Oracle, and SQL Server",
        //             "Deadline and detail-oriented",
        //             "Strong analytical and critical thinking skills",
        //             "Company DescriptionMagnus Technology Solutions provide quick orientation / training for professionals & placement for candidates having work authorization in USA"
        //           ],
        //           "Responsibilities": [
        //             "You will be responsible for creating and modifying computer application software or specialized utility programs",
        //             "Analyze user needs and develop software solutions",
        //             "Work with project manager or product owner to meet specification needs",
        //             "Recommend software upgrades to optimize operational efficiency",
        //             "Collaborate with other developers to design and optimize code",
        //             "Create flowcharts and user guides for new and existing programs",
        //             "Document all programming tasks and procedures",
        //             "Perform routine software maintenance"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "SynergisticIT",
        //         "employer_logo": null,
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "7oKm_SkxjLxpFtVuAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "PYTHON DEVELOPER(ENTRY LEVEL)",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.6736,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "SynergisticIT is committed to fast track your career by increasing your career prospects. We provide a broad spectrum of career advancement solutions. Whether you are struggling to find a job or hustling to get noticed by the hiring managers, we can help you stand out in your professional endeavors.\nTrusted by thousands of tech enthusiasts, SynergisticIT can bridge your skill and knowledge gap to make you competent for high-tech jobs. Our invaluable business acumen helps us assist thriving job seekers in achieving their career goals.\nCurrently, we are looking for adept entry-level Python Developers to work with our elite group of clients, namely Client, PayPal, Expedia Group, Google, Apple, Cognizant, Ford, Cisco, Walmart Labs, etc.\n\nRequired Qualifications and Background\n• Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,\n• Mathematics or Statistics background\nSkills Required\n• 0 to 2 years of experience in Python development\n• Deep understanding of the software development life cycle\n• Knowledge of Linear Algebra, Statistics, and Mathematics concepts\n• Excellent written and verbal communication skills\n• Technically inquisitive, self-learner, team player, and highly motivated\n• Strong work ethics and creative problem-solving abilities\n\nPreferred Skills\n• Deep Learning\n• Data visualization\n• Scal\n• NLP\n• Django\nRoles and Responsibilities\ns an entry-level Python Developer, you need to perform the following duties:\n• Write server-side web application logic\n• Write scalable and effective codes in Python\n• Develop backend components to boost overall application's performance\n• Executing tests and fixing bugs in applications and software\n• Implement data protection and security solutions\n• Connect applications with third-party web services\n• Support frontend developers by integrating UI elements into Python applications\n\nBenefits\n• Competitive salary\n• Flexible work schedule & part-time off\n• E-verified\n• H1B Filing\n• No relocation\n• On job technical support\n• Skill Enhancement\n• Opportunity to work with Fortune 500 Companies\n\nWho can apply?\nThis job opportunity is best suited for recent IT graduates who want to make a mark in the tech industry and upskill their IT talent. Anyone with a basic knowledge of Python programming or having some experience in building Python software solutions can apply for this position.\nNo third-party candidates or c2c candidates\n\nIf you are interested, please apply to the posting.\n\nNo phone calls please, Shortlisted candidates would be reached out.",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1626998400,
        //         "job_posted_at_datetime_utc": "2021-07-23T00:00:00.000Z",
        //         "job_city": "Austin",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 30.267153,
        //         "job_longitude": -97.74306,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=7oKm_SkxjLxpFtVuAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": true,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": true,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": 65000,
        //         "job_max_salary": 140000,
        //         "job_salary_currency": "USD",
        //         "job_salary_period": "YEAR",
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,",
        //             "Mathematics or Statistics background",
        //             "0 to 2 years of experience in Python development",
        //             "Deep understanding of the software development life cycle",
        //             "Knowledge of Linear Algebra, Statistics, and Mathematics concepts",
        //             "Excellent written and verbal communication skills",
        //             "Technically inquisitive, self-learner, team player, and highly motivated",
        //             "Strong work ethics and creative problem-solving abilities",
        //             "Support frontend developers by integrating UI elements into Python applications"
        //           ],
        //           "Responsibilities": [
        //             "Write server-side web application logic",
        //             "Write scalable and effective codes in Python",
        //             "Develop backend components to boost overall application's performance",
        //             "Executing tests and fixing bugs in applications and software",
        //             "Implement data protection and security solutions",
        //             "Connect applications with third-party web services"
        //           ],
        //           "Benefits": [
        //             "Competitive salary",
        //             "Flexible work schedule & part-time off",
        //             "No relocation",
        //             "On job technical support",
        //             "Opportunity to work with Fortune 500 Companies"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "SynergisticIT",
        //         "employer_logo": null,
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "XWighWMc97OoKReOAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Entry Level Python Developer",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer/-in-Dallas,TX?jid=2b63fe81523a73bf",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.6734,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer/-in-Dallas,TX?jid=2b63fe81523a73bf",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "LinkedIn",
        //             "apply_link": "https://www.linkedin.com/jobs/view/entry-level-python-developer-at-synergisticit-3677688983",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "SYNERGISTICIT wants every candidate to know that the Job Market is Challenging and to stand out, you need to have exceptional skills and technologies and that's where we come in to make sure you get the attention which you need\n\nSynergisticIT understands the complex nature of the job market and how difficult it can be to secure a position, especially for fresh graduates. Therefore, we assist and help tech-savvies to convert their passions into professions. We go above and beyond to keep you working in your niche.\ns we focus on long-term success, we provide complete career development solutions. From job search to upskilling portfolio and interview preparation, we can guide you at every step of your career.\nSynergisticIT spares no efforts to connect you with a large network of tech giants, including Google, Apple, PayPal, Dell, Cisco, Client, etc. Presently, we are actively looking for entry-level Java Developers with a driven mindset. Get the right opportunity and gain experience in building web-centric solutions on Java.\n\nWho Should Apply : Recent Computer science/Engineering /Mathematics/Statistics or Science Graduates or anyone looking to make their career in IT Industry\n\nWe also assist in filing for STEM extension and H1b and Green card filing.\n\nCandidates who are serious about their future in the IT Industry and have set big goals for themselves.\n\nCandidates having difficulty in finding jobs or cracking interviews or who wants to improve their skill portfolio. We also offer Skill Enhancement Programs if the candidates are missing skills or experience which our clients need with great outcomes\n\nCandidates can benefit from skill enhancement if they fall into the below categories. If they are qualified with enough skills then no need for skill enhancement\n\nCandidates who Lack Experience\nHave had a break in careers\nLack Technical Competency\ncandidates who want to get employed and make a career in the Tech Industry\n\nPlease also check the below links :\n\nhttps://www.synergisticit.com/candidate-outcomes/\n\nhttps://www.synergisticit.com/java-track/\n\nhttps://www.synergisticit.com/data-science-track/\n\nhttps://www.synergisticit.com/which-is-the-best-option-for-tech-job-seekers-staffing-companies-consulting-companies-bootcamps-or-synergisticit/\n\nhttps://www.synergisticit.com/contact-us/\n\nIf the skills are not a match candidates can opt for Skill enhancement. Or their resume can be sent out to clients to see if responses are achievable\nREQUIRED SKILLS For Java/Software Programmers :\n• Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Knowledge of Core Java , javascript , C++ or software programming\n• Spring boot, Microservices and REST API's experience\n• Excellent written and verbal communication skills\nFor data Science/Machine learning\nREQUIRED SKILLS\n• Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Knowledge of Statistics, Python, data visualization tools\n• Excellent written and verbal communication skills\nPreferred skills: NLP, Text mining, Tableau, Time series analysis\nTechnical skills are required by clients for selection even if its Junior or entry level position each additional Technical skill helps a candidate's resume to be picked by clients over other job seekers.\nClients hire candidates with the right technical skills which they need and reject candidates who lack the required technical skills.\n\nNo third party candidates or c2c candidates\nPlease apply to the posting\nNo phone calls please. Shortlisted candidates would be reached out",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1687478400,
        //         "job_posted_at_datetime_utc": "2023-06-23T00:00:00.000Z",
        //         "job_city": "Dallas",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 32.776665,
        //         "job_longitude": -96.79699,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=XWighWMc97OoKReOAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": true,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": true,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": 75000,
        //         "job_max_salary": 125000,
        //         "job_salary_currency": "USD",
        //         "job_salary_period": "YEAR",
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Get the right opportunity and gain experience in building web-centric solutions on Java",
        //             "Who Should Apply : Recent Computer science/Engineering /Mathematics/Statistics or Science Graduates or anyone looking to make their career in IT Industry",
        //             "Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT",
        //             "Highly motivated, self-learner, and technically inquisitive",
        //             "Experience in programming language Java and understanding of the software development life cycle",
        //             "Knowledge of Core Java , javascript , C++ or software programming",
        //             "Spring boot, Microservices and REST API's experience",
        //             "Excellent written and verbal communication skills",
        //             "For data Science/Machine learning",
        //             "Knowledge of Statistics, Python, data visualization tools",
        //             "Technical skills are required by clients for selection even if its Junior or entry level position each additional Technical skill helps a candidate's resume to be picked by clients over other job seekers"
        //           ],
        //           "Responsibilities": [
        //             "Or their resume can be sent out to clients to see if responses are achievable"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "Company Name",
        //         "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozpyZ2-Blq6K0b_7uk1IBsPMU6UbpYVLrjwqL&s=0",
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "Radley James",
        //         "job_id": "ZLHPTnm0vUZhlFhdAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Python Developer – Houston, TX (Hybrid)",
        //         "job_apply_link": "https://www.radleyjames.com/job/python-developer-houston-tx-hybrid/",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.6784,
        //         "apply_options": [
        //           {
        //             "publisher": "Radley James",
        //             "apply_link": "https://www.radleyjames.com/job/python-developer-houston-tx-hybrid/",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "LinkedIn",
        //             "apply_link": "https://www.linkedin.com/jobs/view/python-developer-at-radley-james-3747350447",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Jooble",
        //             "apply_link": "https://jooble.org/jdp/8291217604751556103/Python-Developer-+-Houston%2C-TX-(Hybrid)-Houston%2C-TX",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Jobilize",
        //             "apply_link": "https://www.jobilize.com/job/us-tx-houston-python-developer-radley-james-hiring-now-job-immediately",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "Python Developer\n\nHouston, Texas, United States (Hybrid)\n\nA leading hedge fund with a global reputation for being one of the best in the industry is looking to add a mid to senior developer to its Houston office.\n\nThis individual will be working on expanding their global analytics and trading-related tools and APIs, liaising between external and internal sources and tools of data and databases to create new pipelines as well as helping create analytics apps to be used by the traders, data scientists and quants.\n\nQualifications:\n• Computer science or related degree from a top university\n• 3+ years experience in Python, Beautiful Soup, Selenium, etc.\n• Experience with AWS, docker, Kubernetes are all a plus\n\nIndustry-leading compensation on offer with exceptional bonuses\n\nIf interested please get in touch by applying or at Volkan.ozbicer@radleyjames.com with your resume if you have further questions.",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1694595106,
        //         "job_posted_at_datetime_utc": "2023-09-13T08:51:46.000Z",
        //         "job_city": "Houston",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 29.760427,
        //         "job_longitude": -95.369804,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=ZLHPTnm0vUZhlFhdAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": null,
        //         "job_offer_expiration_timestamp": null,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": 36,
        //           "experience_mentioned": true,
        //           "experience_preferred": true
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": false,
        //           "degree_preferred": false,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": null,
        //         "job_max_salary": null,
        //         "job_salary_currency": null,
        //         "job_salary_period": null,
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Computer science or related degree from a top university",
        //             "3+ years experience in Python, Beautiful Soup, Selenium, etc"
        //           ],
        //           "Responsibilities": [
        //             "This individual will be working on expanding their global analytics and trading-related tools and APIs, liaising between external and internal sources and tools of data and databases to create new pipelines as well as helping create analytics apps to be used by the traders, data scientists and quants"
        //           ],
        //           "Benefits": [
        //             "Industry-leading compensation on offer with exceptional bonuses"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4"
        //       },
        //       {
        //         "employer_name": "SynergisticIT",
        //         "employer_logo": null,
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "_2zrRnwarpf3YwwEAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Entry Level Python Developer",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer/-in-Houston,TX?jid=b5db608a2de13d7e",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.5756,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer/-in-Houston,TX?jid=b5db608a2de13d7e",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Trabajo.org",
        //             "apply_link": "https://us.trabajo.org/job-835-20231021-7e8d09b4a263aa6966de4b991d875608",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "BeBee",
        //             "apply_link": "https://us.bebee.com/job/20231027-eb1fb84cb35560553e71ea0192bd45f1",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Jobrapido.com",
        //             "apply_link": "https://us.jobrapido.com/jobpreview/3024201977",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Jobilize",
        //             "apply_link": "https://www.jobilize.com/job/us-tx-houston-entry-level-python-developer-synergisticit-hiring-now",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "About Us:\nSynergistic IT is a full-service staffing and placement firm servicing client in America for the past 12+ years. We are dedicated towards fulfilling the IT needs of our clients. From staffing to full implementation of projects we provide the highest quality IT Services. We Intend to deliver exceptional student outcome. We don't just help you secure a tech job but build a solid career in technology.\n\nJob Description:\n• Should know how to work in large verities of libraries, frameworks, and modules\n• Duck typing, string, tuple and Lambda knowledge required\n• Django Frame work required\n• Worked on Django model, CBV, Django CRUD operation\n\nSkills Required-\n• Knowledge of Python web frameworks and event-driven programming in Python.\n• Basic understanding of front-end technologies.\n• High attention to detail.\n• Excellent communication and problem-solving skills.\n• Proficient understanding of code versioning tools\n• Know the classes of SCALA, Traits of SCALA, and Collection of SCALA\n\nEducation Requirement: -\nBachelors, Masters in Computer Science/ Computer Engineering/ Information Systems/Information Technology/ Electrical Engineering/ Mechanical Engineering.\n\nBenefits:\n• On Job Technical support\n• E- verified\n• Help to get H1B Employer.\n• Full time position\n\nCandidate who are missing the required skills, might be provided an option to enhance their skills, so that they can also apply for the role and can make a career in IT industry.\n\nIf you do respond via e-mail, please include a daytime phone number so that we can reach you. In considering candidates, time is of the essence, so please respond ASAP. Thank you",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1670227200,
        //         "job_posted_at_datetime_utc": "2022-12-05T08:00:00.000Z",
        //         "job_city": "Houston",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 29.760427,
        //         "job_longitude": -95.369804,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=_2zrRnwarpf3YwwEAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": false,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": false,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": null,
        //         "job_max_salary": null,
        //         "job_salary_currency": null,
        //         "job_salary_period": null,
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Knowledge of Python web frameworks and event-driven programming in Python",
        //             "Basic understanding of front-end technologies",
        //             "High attention to detail",
        //             "Excellent communication and problem-solving skills",
        //             "Proficient understanding of code versioning tools",
        //             "Know the classes of SCALA, Traits of SCALA, and Collection of SCALA",
        //             "Bachelors, Masters in Computer Science/ Computer Engineering/ Information Systems/Information Technology/ Electrical Engineering/ Mechanical Engineering"
        //           ],
        //           "Responsibilities": [
        //             "Should know how to work in large verities of libraries, frameworks, and modules",
        //             "Django Frame work required",
        //             "Worked on Django model, CBV, Django CRUD operation"
        //           ],
        //           "Benefits": [
        //             "On Job Technical support",
        //             "Full time position"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "SynergisticIT",
        //         "employer_logo": null,
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "YDo22XF_YmHArQP8AAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Entry Level Python Developer (Remote)",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer-(Remote)/-in-Addison,TX?jid=461c728c6f69dfc1",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.6743,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer-(Remote)/-in-Addison,TX?jid=461c728c6f69dfc1",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "SYNERGISTICIT is aware that the Job Market is Challenging because of Tech Layoffs. The Job market is flooded with hundreds and thousands of laid-off Jobseekers competing with existing Jobseekers. For entry-level Job seekers to get client interviews and jobs they need to differentiate themselves by ensuring they have exceptional skills and technologies to be noticed by clients.\nSince 2010 we have helped Jobseekers differentiate themselves by providing clients with candidates who have the requisite skills and experience to outperform at interviews and clients. Here at SynergisticIT We just don't focus on getting you a Job we make careers. All Positions are open for all visas and US citizens We at Synergisticit understand the problem of the mismatch between employer's requirements and Employee skills and that's why since 2010 we have helped thousands of candidates get jobs at technology clients like Apple, Google, and Paypal, western union, Client, visa, Walmart labs, etc., to name a few. We have an excellent reputation with the clients. Currently, we are looking for Entry Level Python Developer (Remote)\nWho Should Apply Recent Computer Science/Engineering /Mathematics/Statistics or Science Graduates looking to make their careers in IT Industry We welcome candidates with all visas and citizens to apply. We assist in filing for STEM extension and also for H1b and Green card filing to Candidates\nWe also offer Skill enhancement programs for candidates who are either missing skills or lacking Industry/Client experience with Projects and skills. Candidates have difficulty finding jobs or cracking interviews or want to improve their skill portfolio. If they are qualified with enough skills and have hands-on project work with clients then no need for skill enhancement.\nCandidates can benefit from skill enhancement if they fall into the below categories.\nCandidates who Lack Experience or are fresher with No actual Job experience with projects with clients who Have had a break in careers Lack Technical Competency or skills being demanded by clients Different visa candidates (Like OPT/H4EAD/L2EAD) who want to get employed and settle down in the USA please check the below links to see success outcomes of our candidates https://www.synergisticit.com/candidate-outcomes/\nWatch the below videos of us participating in Industry events with the Top companies in Technology at Oracle Cloud World/Oracle Java One (Las Vegas) and at Gartner Data Analytics Summit (Florida)\nOracle Cloud World Event (OCW) Las Vegas 2022 | SynergisticIT - YouTube https://www.youtube.com/watch?v=OAFOhcGy9Z8\nhttps://www.youtube.com/watch?v=EmO7NrWHkLM https://www.youtube.com/watch?v=NVBU9RYZ6UI\nhttps://www.youtube.com/watch?v=Yy74yvjatVg SynergisticIT at Gartner Data and Analytics Summit 2023 - YouTube\nhttps://www.synergisticit.com/java-track/ https://www.synergisticit.com/data-science-track/ https://www.synergisticit.com/contact-us/\nIf you have relevant skills and industry experience, please apply if not then candidates can opt for Skill enhancement.\nFor getting help with interviews please visit\nhttps://www.synergisticit.com/interview-questions/\nREQUIRED SKILLS for Java /Software Programmers\n• Bachelor's degree or Master's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Project work on the skills\n• Knowledge of Core Java, java script, C++ or software programming\n• Spring boot, Micro-services, Docker, Jenkins and REST API's experience\n• Excellent written and verbal communication skills\nFor data Science/Machine learning\nREQUIRED SKILLS\n• Bachelor's degree or Master's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Project work on the technologies needed\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in the programming language Java and understanding of the software development life cycle\n• Knowledge of Statistics, SAS, Python, Computer Vision, and data visualization tools\n• Excellent written and verbal communication skills\nPreferred skills: NLP, Text mining, Tableau, Power BI, Time series analysis\nPlease understand skills and relevant experience on real-world projects are required by clients for selection even if it's a Junior or entry-level position the additional skills and Project work with hands-on experience building projects at the client site are the only way a candidate can be picked by clients. If not having the skills or hands-on project work at the client site, candidates can opt for skill enhancement to gain the required skills and project work. No third-party candidates or c2c candidates\nplease only apply to the posting",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1686268800,
        //         "job_posted_at_datetime_utc": "2023-06-09T00:00:00.000Z",
        //         "job_city": "Addison",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 32.96179,
        //         "job_longitude": -96.82917,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=YDo22XF_YmHArQP8AAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": true,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": true,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": 80000,
        //         "job_max_salary": 145000,
        //         "job_salary_currency": "USD",
        //         "job_salary_period": "YEAR",
        //         "job_highlights": {
        //           "Qualifications": [
        //             "REQUIRED SKILLS for Java /Software Programmers",
        //             "Bachelor's degree or Master's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT",
        //             "Highly motivated, self-learner, and technically inquisitive",
        //             "Experience in programming language Java and understanding of the software development life cycle",
        //             "Knowledge of Core Java, java script, C++ or software programming",
        //             "Spring boot, Micro-services, Docker, Jenkins and REST API's experience",
        //             "Excellent written and verbal communication skills",
        //             "For data Science/Machine learning",
        //             "Project work on the technologies needed",
        //             "Knowledge of Statistics, SAS, Python, Computer Vision, and data visualization tools",
        //             "Please understand skills and relevant experience on real-world projects are required by clients for selection even if it's a Junior or entry-level position the additional skills and Project work with hands-on experience building projects at the client site are the only way a candidate can be picked by clients",
        //             "If not having the skills or hands-on project work at the client site, candidates can opt for skill enhancement to gain the required skills and project work"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "7-Eleven",
        //         "employer_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/791px-7-eleven_logo.svg.png",
        //         "employer_website": "http://www.7-eleven.com",
        //         "employer_company_type": "Retail",
        //         "job_publisher": "Trabajo.org",
        //         "job_id": "s-VUaVlYNsWaaYaMAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Python Developer",
        //         "job_apply_link": "https://us.trabajo.org/job-1842-20231029-ca4b7fed5eda7f92cd04cfd3d4ad8b33",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.484,
        //         "apply_options": [
        //           {
        //             "publisher": "Trabajo.org",
        //             "apply_link": "https://us.trabajo.org/job-1842-20231029-ca4b7fed5eda7f92cd04cfd3d4ad8b33",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "BeBee",
        //             "apply_link": "https://us.bebee.com/job/20231021-61988e8c66cb094b461ebb6eadc056bd",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Texas Jobs - Tarta.ai",
        //             "apply_link": "https://texas.tarta.ai/j/BlqnPooBcRajQcTjzAe-0823-full-stack-developer-in-irving-texas-at-mitchell-martin",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "ONLY W2 CANDIDATES PLEASE\n\nJOB TITLE:\nFull Stack Developer Sr\n\nLocation:\nIRVING, TX (HYBRID)\n\nWork\n\nLocation:\n3200 HACKBERRY RD IRVING, TX 75063 | Loc: 0000239Duration: 6 Months\n\nJob Description:\n\nA full stack developer is a web developer or engineer who works with both the front and back ends of a website or application meaning they can tackle projects that involve databases, APIs, build user-facing websites, or even work with clients during the planning phase of projects.\nFull-stack Engineer – NodeJS",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1698589989,
        //         "job_posted_at_datetime_utc": "2023-10-29T14:33:09.000Z",
        //         "job_city": "Irving",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 32.81402,
        //         "job_longitude": -96.94889,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=s-VUaVlYNsWaaYaMAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-05T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1699142400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": false,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": false,
        //           "degree_preferred": false,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": null,
        //         "job_max_salary": null,
        //         "job_salary_currency": null,
        //         "job_salary_period": null,
        //         "job_highlights": {},
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_naics_code": "445120",
        //         "job_naics_name": "Convenience Stores"
        //       },
        //       {
        //         "employer_name": "SynergisticIT",
        //         "employer_logo": null,
        //         "employer_website": null,
        //         "employer_company_type": null,
        //         "job_publisher": "ZipRecruiter",
        //         "job_id": "Igbv8bfzTXdNVxDAAAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Entry Level Python Developer (Remote)",
        //         "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer-(Remote)/-in-Houston,TX?jid=5b8da794ca11313b",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.6732,
        //         "apply_options": [
        //           {
        //             "publisher": "ZipRecruiter",
        //             "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/Entry-Level-Python-Developer-(Remote)/-in-Houston,TX?jid=5b8da794ca11313b",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "LinkedIn",
        //             "apply_link": "https://www.linkedin.com/jobs/view/entry-level-data-analyst-at-synergisticit-3649694352",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "BeBee",
        //             "apply_link": "https://us.bebee.com/job/20231026-2605496efb9ed00b147cd23f8ac1abcb",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "SYNERGISTICIT wants every candidate to know that the Job Market is Challenging and to stand out you need to have exceptional skills and technologies and that's where we come in to make sure you get the attention which you need\n\nWe at Synergisticit understand the problem of the mismatch between employer's requirements and Employee skills and that's why since 2010 we have helped thousands of candidates get jobs at technology clients like apple, google, Paypal, western union, Client, visa, walmart labs etc to name a few.\n\nWe have an excellent reputation with the clients. Currently, We are looking for entry-level software programmers, IT enthusiasts, Python/Java developers, Data analysts/ Data Scientists.\n\nWho Should Apply Recent IT Graduates looking to make their careers in IT Industry Candidates having basic knowledge or with one or two years of experience in JAVA, C++, Core JAVA.\n\nWe welcome candidates with all visas and citizens to apply.\n\nWe assist in filing for STEM extension and also for H1b and Green card filing to Candidates looking to upskill/enhance their IT skills.\n\nCandidates who are serious about their future in the IT Industry and have set big goals for themselves.\n\nCandidates having difficulty in finding jobs or cracking interviews or who wants to improve their skill portfolio. We also offer Skill enhancement programs if the candidates are missing skills or experience which our clients need with great outcomes\n\nCandidates can benefit from skill enhancement if they fall into the below categories. If they are qualified with enough skills then no need for skill enhancement\n\nCandidates who Lack Experience\nHave had a break in careers\nLack Technical Competency\nDifferent visa candidates who want to get employed and settle down in the USA\n\nplease also check the below links\n\nhttps://www.synergisticit.com/candidate-outcomes/\n\nhttps://www.synergisticit.com/java-track/\n\nhttps://www.synergisticit.com/data-science-track/\n\nhttps://www.synergisticit.com/blog/\nREQUIRED SKILLS\n• Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Knowledge of Core Java , javascript , C++ or software programming\n• Excellent written and verbal communication skills\nPreferred skills: knowledge of Spring Boot, microservices\n\nPlease understand skills are required by clients for selection even if its Junior or entry level position the additional skills are the only way a candidate can be picked by clients.\nNo third party candidates or c2c candidates\nTo apply for this position, please apply to the posting\n\nNo phone calls please . Shortlisted candidates would be reached out\n\nSYNERGISTICIT wants every candidate to know that the Job Market is Challenging and to stand out you need to have exceptional skills and technologies and that's where we come in to make sure you get the attention which you need\n\nPosition open for all visas and US citizens\n\nWe at Synergisticit understand the problem of the mismatch between employer's requirements and Employee skills and that's why since 2010 we have helped thousands of candidates get jobs at technology clients like apple, google, Paypal, western union, Client, visa, walmart labs etc to name a few.\n\nWe have an excellent reputation with the clients. Currently, We are looking for entry-level software programmers, IT enthusiasts, Python/Java developers, Data analysts/ Data Scientists.\n\nWho Should Apply Recent Computer science/Engineering /Mathematics/Statistics or Science Graduates looking to make their careers in IT Industry\n\nWe welcome candidates with all visas and citizens to apply.\n\nWe assist in filing for STEM extension and also for H1b and Green card filing to Candidates\n\nCandidates who are serious about their future in the IT Industry and have set big goals for themselves.\n\nCandidates having difficulty in finding jobs or cracking interviews or who wants to improve their skill portfolio. We also offer Skill enhancement programs if the candidates are missing skills or experience which our clients need with great outcomes\n\nCandidates can benefit from skill enhancement if they fall into the below categories. If they are qualified with enough skills then no need for skill enhancement\n\nCandidates who Lack Experience\nHave had a break in careers\nLack Technical Competency\nDifferent visa candidates who want to get employed and settle down in the USA\n\nplease also check the below links\n\nhttps://www.synergisticit.com/candidate-outcomes/\n\nhttps://www.synergisticit.com/java-track/\n\nhttps://www.synergisticit.com/data-science-track/\n\nhttps://www.synergisticit.com/which-is-the-best-option-for-tech-job-seekers-staffing-companies-consulting-companies-bootcamps-or-synergisticit/\n\nhttps://www.synergisticit.com/contact-us/\n\nIf not a match candidates can opt for Skill enhancement\nREQUIRED SKILLS For java / Software Programmers\n• Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Knowledge of Core Java , javascript , C++ or software programming\n• Spring boot, Microservices and REST API's experience\n• Excellent written and verbal communication skills\nFor data Science/Machine learning\nREQUIRED SKILLS\n• Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Knowledge of Statistics, Python, data visualization tools\n• Excellent written and verbal communication skills\nPreferred skills: NLP, Text mining, Tableau, Time series analysis\nPlease understand skills are required by clients for selection even if its Junior or entry level position the additional skills are the only way a candidate can be picked by clients.\n\nNo third party candidates or c2c candidates\n\nPlease understand skills are required by clients for selection even if its Junior or entry level position the additional skills are the only way a candidate can be picked by clients.\n\nNo third party candidates or c2c candidates\nplease apply to the posting\n\nNo phone calls please. Shortlisted candidates would be reached out",
        //         "job_is_remote": false,
        //         "job_posted_at_timestamp": 1674691200,
        //         "job_posted_at_datetime_utc": "2023-01-26T00:00:00.000Z",
        //         "job_city": "Houston",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 29.760427,
        //         "job_longitude": -95.369804,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=Igbv8bfzTXdNVxDAAAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2023-11-30T00:00:00.000Z",
        //         "job_offer_expiration_timestamp": 1701302400,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": 12,
        //           "experience_mentioned": true,
        //           "experience_preferred": false
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": true,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": 75000,
        //         "job_max_salary": 150000,
        //         "job_salary_currency": "USD",
        //         "job_salary_period": "YEAR",
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Who Should Apply Recent IT Graduates looking to make their careers in IT Industry Candidates having basic knowledge or with one or two years of experience in JAVA, C++, Core JAVA",
        //             "Different visa candidates who want to get employed and settle down in the USA",
        //             "Bachelors degree or Masters degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT",
        //             "Highly motivated, self-learner, and technically inquisitive",
        //             "Experience in programming language Java and understanding of the software development life cycle",
        //             "Knowledge of Core Java , javascript , C++ or software programming",
        //             "Excellent written and verbal communication skills",
        //             "Please understand skills are required by clients for selection even if its Junior or entry level position the additional skills are the only way a candidate can be picked by clients",
        //             "Who Should Apply Recent Computer science/Engineering /Mathematics/Statistics or Science Graduates looking to make their careers in IT Industry",
        //             "Spring boot, Microservices and REST API's experience",
        //             "For data Science/Machine learning",
        //             "Knowledge of Statistics, Python, data visualization tools"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_occupational_categories": [
        //           "15-1132.00: Software Developers, Applications"
        //         ]
        //       },
        //       {
        //         "employer_name": "Dice",
        //         "employer_logo": "https://s24.q4cdn.com/133441296/files/images/brands/dice.png",
        //         "employer_website": null,
        //         "employer_company_type": "Information",
        //         "job_publisher": "Jobgether",
        //         "job_id": "kAJhRp1STtLSsuR7AAAAAA==",
        //         "job_employment_type": "FULLTIME",
        //         "job_title": "Python Developer - Remote in Texas (USA)",
        //         "job_apply_link": "https://jobgether.com/offer/6539190b64a13bb96e8b2987-python-developer-remote",
        //         "job_apply_is_direct": false,
        //         "job_apply_quality_score": 0.5634,
        //         "apply_options": [
        //           {
        //             "publisher": "Jobgether",
        //             "apply_link": "https://jobgether.com/offer/6539190b64a13bb96e8b2987-python-developer-remote",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "Jooble",
        //             "apply_link": "https://jooble.org/jdp/-7119918072817917700/Python-Developer-+-Remote-San-Antonio%2C-TX",
        //             "is_direct": false
        //           },
        //           {
        //             "publisher": "CareerBuilder",
        //             "apply_link": "https://www.careerbuilder.com/job/J3S4SY60LL0JCTFDPWY",
        //             "is_direct": true
        //           },
        //           {
        //             "publisher": "Python Jobs",
        //             "apply_link": "https://pythonjob.xyz/job/2X00HeW6nwa0xAwpfopawptWYHs/Python%20Developer%20-%20Remote",
        //             "is_direct": false
        //           }
        //         ],
        //         "job_description": "This a Full Remote job, the offer is available from: Texas (USA)\n\n\"\n\nDice is the leading career destination for tech experts at every stage of their careers. Our client, Dunhill Professional Search, is seeking the following. Apply via Dice today! **\n\nPosition Description:**\n• Attend Daily Scrum calls communicating your accomplishments, objectives, and blockers\n• Decompose User Stories and Tasks into subtasks required to complete, along with acceptance criteria\n• Implement User Stories using feature branches\n• Commit code changes regularly and merge feature branches when they are complete\n• Participate in code review processes\n• Utilize Sonarqube to track code coverage to maintain target levels of unit test coverage\n• Attend Daily Scrum calls communicating your accomplishments, objectives, and blockers\n• Attend and present at Sprint Demos to incorporate customer feedback into future work\n• Participate in Sprint retrospective and offer ideas for process improvement\n• Contribute to system documentation like version description documents, system administration manual, data mapping, and system installation guide.\n• Provide support to DHA and Cloud One teams for deployment during development\n\nRequirements :\n• with a Bachelor's degree in computer science, engineering, or related field preferred\n• Strong Python experience\n• Strong Object-Oriented programmer\n• Familiarity with micro-service architecture\n• Develop, maintain, and enhance web applications using Python, Django, and FastAPI.\n• Design, create, and optimize database schemas in PostgreSQL.\n• Implement and maintain unit tests for code quality and reliability.\n• Collaborate with the development team to architect and build scalable solutions.\n• Utilize software design patterns to create efficient and maintainable code.\n• Contribute to code reviews and provide constructive feedback to team members.\n• Troubleshoot and resolve software defects and issues.\n• Stay up-to-date with industry best practices and emerging technologies.\n• Strong communication skills and the ability to work collaboratively in a team.\n• Self-motivated, detail-oriented, and able to manage multiple tasks and changing priorities.\n\nNice to haves :\n• Experience working with healthcare data in interoperable formats (e.g. HL7, FHIR, strong emphasis on HL7)\n• Intermediate Java Experience\n• Experience with secure coding principles, software security remediations, and STIGs\n• Some AWS Cloud native experience\n• Strong understanding of Agile principles\n• Experience with Docker/Kubernetes/Gitlab CI/CD a plus\n\n#cjpost\n\nPython Developer - Remote\n\n\"This offer from \"Dice\" has been enriched by Jobgether and got a 78.5% flex score.",
        //         "job_is_remote": true,
        //         "job_posted_at_timestamp": 1698237857,
        //         "job_posted_at_datetime_utc": "2023-10-25T12:44:17.000Z",
        //         "job_city": "San Antonio",
        //         "job_state": "TX",
        //         "job_country": "US",
        //         "job_latitude": 29.42519,
        //         "job_longitude": -98.49459,
        //         "job_benefits": null,
        //         "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=kAJhRp1STtLSsuR7AAAAAA%3D%3D",
        //         "job_offer_expiration_datetime_utc": "2024-01-28T07:17:44.000Z",
        //         "job_offer_expiration_timestamp": 1706426264,
        //         "job_required_experience": {
        //           "no_experience_required": false,
        //           "required_experience_in_months": null,
        //           "experience_mentioned": true,
        //           "experience_preferred": true
        //         },
        //         "job_required_skills": null,
        //         "job_required_education": {
        //           "postgraduate_degree": false,
        //           "professional_certification": false,
        //           "high_school": false,
        //           "associates_degree": false,
        //           "bachelors_degree": false,
        //           "degree_mentioned": true,
        //           "degree_preferred": true,
        //           "professional_certification_mentioned": false
        //         },
        //         "job_experience_in_place_of_education": false,
        //         "job_min_salary": null,
        //         "job_max_salary": null,
        //         "job_salary_currency": null,
        //         "job_salary_period": null,
        //         "job_highlights": {
        //           "Qualifications": [
        //             "Strong Python experience",
        //             "Strong Object-Oriented programmer",
        //             "Familiarity with micro-service architecture",
        //             "Develop, maintain, and enhance web applications using Python, Django, and FastAPI",
        //             "Stay up-to-date with industry best practices and emerging technologies",
        //             "Strong communication skills and the ability to work collaboratively in a team",
        //             "Self-motivated, detail-oriented, and able to manage multiple tasks and changing priorities",
        //             "Experience working with healthcare data in interoperable formats (e.g. HL7, FHIR, strong emphasis on HL7)",
        //             "Intermediate Java Experience",
        //             "Experience with secure coding principles, software security remediations, and STIGs",
        //             "Some AWS Cloud native experience",
        //             "Strong understanding of Agile principles"
        //           ],
        //           "Responsibilities": [
        //             "Attend Daily Scrum calls communicating your accomplishments, objectives, and blockers",
        //             "Decompose User Stories and Tasks into subtasks required to complete, along with acceptance criteria",
        //             "Implement User Stories using feature branches",
        //             "Commit code changes regularly and merge feature branches when they are complete",
        //             "Participate in code review processes",
        //             "Utilize Sonarqube to track code coverage to maintain target levels of unit test coverage",
        //             "Attend and present at Sprint Demos to incorporate customer feedback into future work",
        //             "Participate in Sprint retrospective and offer ideas for process improvement",
        //             "Contribute to system documentation like version description documents, system administration manual, data mapping, and system installation guide",
        //             "Provide support to DHA and Cloud One teams for deployment during development",
        //             "Design, create, and optimize database schemas in PostgreSQL",
        //             "Implement and maintain unit tests for code quality and reliability",
        //             "Collaborate with the development team to architect and build scalable solutions",
        //             "Utilize software design patterns to create efficient and maintainable code",
        //             "Contribute to code reviews and provide constructive feedback to team members",
        //             "Troubleshoot and resolve software defects and issues"
        //           ]
        //         },
        //         "job_job_title": null,
        //         "job_posting_language": "en",
        //         "job_onet_soc": "15113200",
        //         "job_onet_job_zone": "4",
        //         "job_naics_code": "519130",
        //         "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
        //       }
        //     ]
        //   }
        // setData(response.data);


        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };
  
    return { data, isLoading, error, refetch };
  };
export default useFetch