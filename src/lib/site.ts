/**
 * Everything the church might want to change lives in this file. Pages read
 * from here, so an edit here updates the whole site.
 *
 * An empty string ("") means "we don't know this yet". The site shows it as a
 * dashed pencil blank saying what belongs there. Type the real value in and the
 * blank becomes ordinary text everywhere it appears.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://newseasondivine.elijahdesent.com";

/**
 * While the site lives on a preview address it asks search engines to stay
 * away. Setting NEXT_PUBLIC_SITE_URL to the real domain turns indexing on.
 */
export const isDemo = /\.(dfd\.llc|vercel\.app|elijahdesent\.com)$/.test(
  new URL(siteUrl).hostname,
);

export const org = {
  name: "New Season Divine Ministries",
  short: "New Season",
  initials: "NSDM",
  seminary: "New Season Divine Ministries Theological Seminary & Chaplaincy Institute",
  seminaryShort: "Theological Seminary & Chaplaincy Institute",
  tagline: "A ministry of transformation, restoration, education, empowerment, and Kingdom advancement.",
  motto: "Changing lives through Kingdom education",
  affiliation: "United Ecumenical Communion of Christ",
  city: "Augusta",
  state: "Georgia",
  stateCode: "GA",
  /** Where the church gathers on the Sabbath (from the "Family & Friends" flyer, Sept 2026). */
  venue: "World Outreach Evangelistic Church",
  street: "3521 Jack Kelly Rd.",
  zip: "",
  /** The ministry line on every flyer. Base64 so crawlers can't read it. */
  phoneB64: "NzA2ODI2ODM0MA==",
  /** Live at cash.app/$NewSeasonDM (registered to Sctonda Gordon). */
  cashTag: "NewSeasonDM",
  cashUrl: "https://cash.app/$NewSeasonDM",
  tithelyUrl: "https://give.tithe.ly/?formId=f4636f9a-8ebe-408c-b33d-4f6c8c2a9af9",
  maps: "https://www.google.com/maps/search/?api=1&query=3521+Jack+Kelly+Rd+Augusta+GA",
  /** The ministry has no Facebook Page; the pastors post from their own profiles. */
  facebookHeldin: "https://www.facebook.com/heldin.gordon",
  facebookSctonda: "https://www.facebook.com/sctonda.kelly",
};

export const pastors = {
  heldin: {
    name: "Dr. Heldin C. Gordon",
    role: "Senior Pastor",
    first: "Pastor Heldin",
  },
  sctonda: {
    name: "Dr. Sctonda Kelly Gordon",
    role: "Apostle & Overseer",
    first: "Apostle Sctonda",
    seminaryRole: "Chancellor & President of the Seminary",
  },
};

/** Saturday morning, as it reads on the "Family & Friends" flyer. */
export const sabbath = [
  { at: "10:00", ampm: "AM", name: "Intercessory Prayer" },
  { at: "10:30", ampm: "AM", name: "Sabbath School" },
  { at: "10:50", ampm: "AM", name: "Praise, Worship & Word" },
];

/** Short labels go in the desktop bar; the phone menu and footer use the full label. */
export const nav = [
  { href: "/about", label: "About New Season", short: "About" },
  { href: "/worship", label: "Sabbath Worship", short: "Worship" },
  { href: "/seminary", label: "Seminary & Chaplaincy", short: "Seminary" },
  { href: "/outreach", label: "Outreach & Missions", short: "Outreach" },
  { href: "/on-air", label: "Radio & Television", short: "On Air" },
  { href: "/pastors", label: "Our Pastors", short: "Pastors" },
  { href: "/contact", label: "Contact", short: "Contact" },
];

/* ------------------------------------------------------------------ */
/* Dates that expire themselves. Pages revalidate hourly, so a date    */
/* that has passed drops off the site without anyone touching it.     */
/* ------------------------------------------------------------------ */

/** Today's date in Augusta, as YYYY-MM-DD. */
export function todayInAugusta(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** True through the whole of `endsOn` (Augusta time). */
export function stillAhead(endsOn: string, now = new Date()) {
  return todayInAugusta(now) <= endsOn;
}

export function daysUntil(date: string, now = new Date()) {
  const a = Date.parse(`${todayInAugusta(now)}T00:00:00Z`);
  const b = Date.parse(`${date}T00:00:00Z`);
  return Math.max(0, Math.round((b - a) / 86_400_000));
}

/**
 * The Ecumenical Elevation & Graduation Celebration. The date is on the grant
 * form and on the seminary's flyers; the time and place haven't been given yet.
 */
export const elevation = {
  name: "Ecumenical Elevation & Graduation Celebration",
  date: "2026-12-05",
  endsOn: "2026-12-05",
  dateText: "Saturday, December 5, 2026",
  month: "DEC",
  day: "5",
  theme: "Honoring today’s leaders for tomorrow’s assignment",
  time: "",
  place: "",
};

export const elevationAhead = (now = new Date()) => stillAhead(elevation.endsOn, now);

/** Honorary doctoral submissions for the 2026 class (from the program flyer). */
export const honorary = {
  deadline: "2026-10-31",
  deadlineText: "October 31, 2026",
};

export const honoraryOpen = (now = new Date()) => stillAhead(honorary.deadline, now);

/* ------------------------------------------------------------------ */
/* Radio and television                                               */
/* ------------------------------------------------------------------ */

export const show = {
  name: "The Sctonda Kelly Gordon Show",
  radio: "WNRR Gospel 1380 AM & 93.3 FM",
  radioShort: "WNRR 1380 AM · 93.3 FM",
  radioUrl: "https://www.wnrrgospel.com/",
  /** Weekdays, Eastern time. The lamp on the site lights during these hours. */
  radioDays: [1, 2, 3, 4, 5],
  radioStart: 9,
  radioEnd: 11,
  tv: "WBPI-TV 49",
  tvTime: "12 Noon",
  /** "Ways to watch", copied from the show's own flyer. */
  watch: [
    { where: "Roku", how: "Search “Watchmen Broadcasting”" },
    { where: "Amazon Fire", how: "Search “Watchmen Broadcasting”" },
    { where: "Glory Star", how: "Search “Watchmen Broadcasting”" },
    { where: "Comcast", how: "Channel 12 & 1049" },
    { where: "WOW", how: "Channels 122 & 168" },
    { where: "AT&T U-verse", how: "Channel 49 & 1049" },
    { where: "Over the air in the CSRA", how: "Channel 49.1" },
    { where: "Facebook Live", how: "WBPI TV-49" },
  ],
};

/** Television appearances that can be watched online. */
export const appearances = [
  {
    kind: "vimeo" as const,
    id: "672832795",
    title: "Club 36 on Watchmen Broadcasting",
    date: "February 4, 2022",
    note: "Dr. Sctonda Kelly Gordon is a guest on Club 36, with James Spencer of the D.L. Moody Center and musical guests B. Chase Williams & ShaBach.",
  },
  {
    kind: "link" as const,
    url: "https://www.wjbf.com/news/first-friday-pearls-and-pants-brunch-headed-to-csra/",
    title: "Good Morning Augusta, WJBF News Channel 6",
    date: "February 25, 2024",
    note: "Weekend anchor Shawn Cabbagestalk talks with Dr. Gordon about the two-day celebration of her 32 years of ministry and media.",
  },
];

/* ------------------------------------------------------------------ */
/* Seminary                                                           */
/* ------------------------------------------------------------------ */

/** Honorary doctorate: fields of recognition, from the program flyer. */
export const honoraryFields = [
  "Ministry, theology & Christian leadership",
  "Education, scholarship & academic leadership",
  "Chaplaincy, pastoral care & humanitarian service",
  "Community development & outreach",
  "Gospel & inspirational music",
  "Broadcasting, communications & media",
  "Business, entrepreneurship & innovation",
  "Fine arts, literature & creative expression",
  "Civic leadership, philanthropy & public service",
];

/** Honorary doctorate: what goes in the submission package. */
export const honoraryPackage = [
  "A completed NSDM Honorary Doctoral Degree application",
  "A current professional biography or résumé",
  "A written statement of your life works and accomplishments (500 to 1,000 words)",
  "A portfolio with documentation: certificates, awards, photos",
  "Two letters of recommendation",
  "A statement of your lasting contribution",
  "Consent for NSDM to verify your credentials and publicly recognize your achievements",
];

/**
 * The programs. Only the chaplaincy certificate is spelled out anywhere public;
 * the full list and tuition are blanks until the Chancellor sends them.
 */
export const programs = {
  list: "Six-month Certified Chaplain Program",
  tuition: "",
  nextTerm: "Monday, September 14, 2026 · 7–9 PM",
};

/** Topics on the contact form. The seminary ones route the same way, but say what the visitor wants. */
export const topics = [
  "Plan a Sabbath visit",
  "Prayer request",
  "Enroll in the Seminary or Chaplaincy Institute",
  "Honorary doctorate",
  "The Nehemiah Project (for pastors)",
  "The Kenya mission",
  "Book Pastor Heldin or Apostle Sctonda",
  "Something else",
];
