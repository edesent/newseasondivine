# New Season Divine Ministries: website

New Season Divine Ministries · Augusta, Georgia · Senior Pastor Dr. Heldin C. Gordon and Apostle Dr. Sctonda Kelly Gordon.
Sabbath worship every Saturday at World Outreach Evangelistic Church, 3521 Jack Kelly Rd., Augusta.

Next.js **16.2.1** (App Router) · React 19 · Tailwind CSS **v4** · deployed on Vercel, which rebuilds on every push to `main`.

Preview: https://newseasondivine.elijahdesent.com (hidden from search engines).
Their current site: https://newseasondivineministries.com (GoDaddy Website Builder; the grant form typed it as "newseasondivineminustries").

## The idea

The ministry's seal is a shield in four quarters: a **cross**, a **globe on an open book**, a **dove** and a **crown**, inside a red
ring lettered in white with seven gold stars. The site is built from it:

- **The seal** is redrawn as SVG in `src/components/Seal.tsx`, same concept and colours as their logo. The four quarter symbols are exported separately.
- **The four quarters are the four ministries** (`src/components/Quarters.tsx`): cross = Sabbath worship, globe on the book = Bibles for Kenya,
  dove = outreach to families, crown = the Seminary & Chaplaincy Institute ("Kingdom leaders"). Pointing at a quarter lights its ministry, and vice versa.
- **The red stage curtain** behind their August 2026 graduates is the backdrop (`.curtain` in `globals.css`) for pages that have no photo.
  We never fill a gap with a stock photo.
- **"Every season has a purpose"** (Ecclesiastes 3:1) comes from Apostle Sctonda's own teaching, *7 Spiritual Lessons About Seasons*, which is printed in full on `/pastors`.
- **On the air:** an ON AIR lamp that lights only during the weekday radio hours in Augusta (`OnAir.tsx`), and a radio dial with needles on 93.3 FM and 1380 AM (`RadioDial.tsx`).
- **Type and colour:** Cinzel (the seal's lettering) for headings, Cormorant Garamond italic for Scripture, Instrument Sans for text. Crimson, black and gold from the seal; ivory from their certificates.

## Pages

`/` home · `/worship` Sabbath worship and plan-a-visit form · `/seminary` chaplaincy, graduates, honorary doctorate, enrollment form ·
`/elevation` the Dec 5 celebration · `/outreach` families and the Kenya mission · `/on-air` radio and TV · `/pastors` · `/give` Cash App · `/contact`.

## Dates that expire themselves (src/lib/site.ts)

Pages revalidate hourly, so these drop off without anyone touching them:

- `honorary.deadline` = **2026-10-31**: after it, the "submissions close Oct 31" notices disappear and the program says submissions have closed.
- `elevation.endsOn` = **2026-12-05**: after it, the Dec 5 button, the home-page invitation and the countdown go away, and `/elevation` says the celebration has taken place.

## Fill-in blanks (src/lib/site.ts)

Anything the church hasn't told us is an empty string. The site shows a dashed pencil chip saying what belongs there.

- `elevation.time`, `elevation.place`: start time and venue for Dec 5
- `programs.list`, `programs.tuition`, `programs.nextTerm`: the Seminary's programs, cost and next start date
- On `/outreach`: next family workshop, and when/where food is given out. The Kenya/outreach photo gallery is waiting for their pictures.

Facts to confirm with the Gordons:

- **Where they meet.** The Sabbath address comes from their September 2026 flyer ("Saturday mornings at World Outreach Evangelistic Church, 3521 Jack Kelly Rd").
  The grant form gave 1867 Formosa Dr., which looks like a home or office, so it is **not** on the site.
- **"Accredited".** Their chaplaincy flyer says "Accredited, Accelerated and Affordable". The site says accelerated and affordable but not accredited until they tell us by whom.
- **The Nehemiah Project.** Only "pastors ask about the Nehemiah Project" is public; the site says that and nothing more.
- **Kenya.** No city is marked on the map because we don't know where the missionary department goes. No Kenya or outreach photos were public.
- **Show hours.** Their newest show graphic says radio 9 to 11 AM and TV at 12 noon (an older one said 9 AM to 12 PM). The ON AIR lamp uses 9 to 11, weekdays.
- **The ministry has no Facebook Page.** "15 Minutes with Jesus" links to Pastor Heldin's own profile (facebook.com/heldin.gordon).
- **Photos.** From the pastors' Facebook posts (graduation, Aug 29, 2026), their GoDaddy site, and WNRR's team page. Their flyers that Facebook labels "AI content" were used for wording only, never as pictures.

## Forms

`/api/form` handles the contact/prayer/visit form and the Seminary enrollment inquiry. Messages go to the Slack/Teams incoming webhook in
`FORM_WEBHOOK_URL`. **Until it is set, the forms say they aren't connected** and point people to the phone. Spam defences: signed load-time token,
honeypot, rate limit, no links in free text (an email address in the phone-or-email field is fine).

## Conventions (read before editing)

- **Next 16:** dynamic route `params` and `searchParams` are Promises, so `await` them (see `src/app/contact/page.tsx`).
- **`next/image`:** `priority` is deprecated in Next 16; use `preload`. Leave `quality` at the default (75).
- **Never name a component prop `ref` or `key`** (React 19 reserves them).
- **Custom CSS classes go inside `@layer components`** in `globals.css`.
- **Phone numbers** are base64'd in `site.ts` and assembled in the browser (`Obf`), so crawlers don't harvest them. No raw email appears on the site.
- **Photos** live in `public/photos` and are registered, with alt text, in `src/lib/photos.ts`. Real photos only.
- **Text over photos** sits low on the picture, below the faces, with lead text and buttons in a band beneath (`PageHead.tsx`).
- **The header phone menu** is a sibling of `<header>`, not a child, so it can't be trapped by the bar.
- **Scroll reveals** use a `data-in` attribute and a MutationObserver (`Reveal.tsx`), so pages reached by a link aren't left blank.
- **Don't put `&rsquo;` in wrapped JSX text** (Next 16.2 drops the space before it); type ’ directly.
- **Fonts are self-hosted** in `src/fonts` (no build-time call to Google).

## Going live

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain in Vercel. That flips `robots.txt`, canonicals and the JSON-LD from noindex to indexable.
2. **Delete the two demo-tracking lines in `src/app/layout.tsx`** (the comment and `<script async src="https://www.elijahdesent.com/demo.js" />`),
   then search the repo for `elijahdesent.com/demo.js` and confirm there are no matches.
3. Set `FORM_WEBHOOK_URL`.
