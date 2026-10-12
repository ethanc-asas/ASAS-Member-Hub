export const memberProfile = {
  firstName: "Justin",
  fullName: "Justin Bartlett",
  email: "justin.bartlett@example.com",
};

export const announcements = [
  { id:"update-intern", label:"APPLICATIONS", title:"2027 D.C. Animal Agriculture Policy Internship", description:"Summer 2027 internship with a $7,500 stipend for eligible ASAS student members.", dateLabel:"Due Nov 6, 2026", url:"https://www.asas.org/foundation/Inspire-Ignite-Invest/2027-dc-policy-intern-guidelines" },
  { id:"update-awards", label:"AWARDS", title:"2027 National Award Nominations", description:"Review award categories and nomination requirements ahead of the upcoming cycle.", dateLabel:"Due Jan 7, 2027", url:"https://www.asas.org/about/national-awards" },
];

export type EventItem = { id:string; title:string; dateLabel:string; location:string; category:string; detail:string; url:string; deadline?:string; status?:string };
export const sampleEvents: EventItem[] = [
  { id:"southern-2027", title:"2027 Southern Section Annual Meeting", dateLabel:"Feb 7–9, 2027", location:"Knoxville Convention Center · Knoxville, TN", category:"SECTION MEETING", detail:"Early-bird registration ends October 30, 2026; advance registration ends January 8, 2027.", url:"https://members.asas.org/events/2027-southern-section-annual-meeting/580/", deadline:"Oct 30, 2026", status:"Registration open" },
  { id:"annual-2027", title:"2027 ASAS–CSAS–WSASAS Annual Meeting", dateLabel:"Jun 27–Jul 1, 2027", location:"SAFE Credit Union Convention Center · Sacramento, CA", category:"ANNUAL MEETING", detail:"Research, education, networking, and collaboration across animal science.", url:"https://www.asas.org/meetings/annual-2027", deadline:"Abstracts due Feb 16, 2027", status:"Plan ahead" },
  { id:"annual-2028", title:"2028 ASAS Annual Meeting", dateLabel:"Jun 25–29, 2028", location:"Peppermill Resort · Reno, NV", category:"FUTURE MEETING", detail:"Save the date for the 2028 annual meeting.", url:"https://www.asas.org/meetings", status:"Save the date" },
  { id:"annual-2029", title:"2029 ASAS Annual Meeting", dateLabel:"Jun 24–28, 2029", location:"Palais des Congrès · Montréal, QC", category:"FUTURE MEETING", detail:"The 2029 annual meeting is scheduled for Montréal, Québec, Canada.", url:"https://www.asas.org/meetings", status:"Save the date" },
];

export type OpportunityItem = { id:string; title:string; type:string; deadline:string; description:string; url:string; status:string };
export const sampleOpportunities: OpportunityItem[] = [
  { id:"dc-intern", title:"D.C. Animal Agriculture Policy Internship", type:"INTERNSHIP", deadline:"Nov 6, 2026 · 5:00 p.m. PT", description:"A 60–90 day summer 2027 internship in Washington, D.C., with a $7,500 stipend. Applicants must be enrolled in a related U.S. undergraduate or graduate program and be ASAS members.", url:"https://www.asas.org/foundation/Inspire-Ignite-Invest/2027-dc-policy-intern-guidelines", status:"Applications open" },
  { id:"national-awards", title:"2027 National Awards", type:"AWARDS", deadline:"Jan 7, 2027", description:"Review national award categories, rules, and nomination requirements.", url:"https://www.asas.org/about/national-awards", status:"Nominations" },
  { id:"abstracts", title:"2027 Annual Meeting Abstracts", type:"RESEARCH", deadline:"Feb 16, 2027 · 3:00 p.m. CT", description:"Submit original completed research, teaching, or extension work for oral or poster consideration. Abstract text is limited to 450 words, excluding title, keywords, and tables.", url:"https://www.asas.org/meetings/annual-2027/abstract-and-poster-information", status:"Research" },
  { id:"foundation", title:"ASAS Foundation Scholarships & Awards", type:"FUNDING", deadline:"Varies by program", description:"Explore travel scholarships, student competitions, lectureships, symposia, and other opportunities supported by ASAS Foundation funds.", url:"https://www.asas.org/foundation/funds", status:"Funding" },
  { id:"undergrad", title:"Undergraduate Scholastic Achievement Award", type:"STUDENT RECOGNITION", deadline:"See program details", description:"Recognition for qualifying undergraduate animal science students.", url:"https://www.asas.org/services/undergraduate-academic-recognition", status:"Students" },
  { id:"career", title:"ASAS Career Center", type:"CAREER", deadline:"Ongoing", description:"Explore career opportunities in academia, industry, and related animal science fields.", url:"https://www.asas.org/services/career-resource-center", status:"Careers" },
];

export const sampleResources = [
  { id:"member-login", title:"Member Portal", description:"Manage your account and membership services.", icon:"person-circle-outline", url:"https://members.asas.org/index.html", category:"MEMBERSHIP" },
  { id:"membership", title:"Membership Options & Dues", description:"Compare membership types, benefits, eligibility, and dues.", icon:"card-outline", url:"https://www.asas.org/join-asas", category:"MEMBERSHIP" },
  { id:"jas", title:"Journal of Animal Science", description:"Research published through ASAS's flagship journal.", icon:"book-outline", url:"https://academic.oup.com/jas", category:"PUBLICATIONS" },
  { id:"tas", title:"Translational Animal Science", description:"Applied and translational animal science research.", icon:"flask-outline", url:"https://academic.oup.com/tas", category:"PUBLICATIONS" },
  { id:"animal-frontiers", title:"Animal Frontiers", description:"Perspectives and topical reviews across animal agriculture.", icon:"earth-outline", url:"https://www.asas.org/animal-frontiers", category:"PUBLICATIONS" },
  { id:"taking-stock", title:"Taking Stock", description:"ASAS news covering science, industry, policy, and Society updates.", icon:"newspaper-outline", url:"https://www.asas.org/taking-stock", category:"NEWS" },
  { id:"students", title:"Graduate Student Resources", description:"Professional development, student leadership, networking, and funding.", icon:"school-outline", url:"https://www.asas.org/services/student-resources", category:"STUDENTS" },
  { id:"career", title:"Career Resource Center", description:"Career resources and opportunities in animal science.", icon:"briefcase-outline", url:"https://www.asas.org/services/career-resource-center", category:"CAREERS" },
  { id:"calendar", title:"ASAS Event Calendar", description:"Official events and registration information.", icon:"calendar-outline", url:"https://members.asas.org/events/", category:"EVENTS" },
  { id:"public-policy", title:"Public Policy", description:"ASAS policy programs, science communication, and outreach.", icon:"megaphone-outline", url:"https://www.asas.org/about/public-policy", category:"ADVOCACY" },
  { id:"foundation", title:"ASAS Foundation Funds", description:"Programs supporting students, early-career scientists, awards, and travel.", icon:"heart-outline", url:"https://www.asas.org/foundation/funds", category:"FOUNDATION" },
  { id:"contact", title:"Contact ASAS", description:"Get help with membership, programs, meetings, and Society services.", icon:"chatbubble-ellipses-outline", url:"https://www.asas.org/about/contact-us", category:"SUPPORT" },
];

export const membershipTypes = [
  {name:"Professional", price:"$250 / year", note:"For professionals in animal science and related disciplines."},
  {name:"Support Staff", price:"$125 / year", note:"For administrative, laboratory, and farm support roles."},
  {name:"Postdoctoral", price:"$100 / year", note:"Certification of eligibility is required."},
  {name:"Graduate Student", price:"$50 / year", note:"For eligible graduate students; confirm requirements online."},
  {name:"Undergraduate Student", price:"$10 / year", note:"For eligible undergraduate students."},
  {name:"Transitional", price:"$150 / year", note:"Designed to help members transition from student to professional membership."},
  {name:"Lifetime", price:"$3,750", note:"For individuals with interests or responsibilities in animal science."},
];
