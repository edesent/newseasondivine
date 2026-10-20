/**
 * Every photo on the site, with its alt text. Real photos only: from the
 * pastors' Facebook posts, the ministry's old site and WNRR's team page.
 * Each was opened and described by hand before it was named.
 */
export type Photo = { src: string; alt: string; w: number; h: number };

const p = (file: string, alt: string, w: number, h: number): Photo => ({ src: `/photos/${file}`, alt, w, h });

export const photos = {
  graduationSanctuary: p(
    "graduation-sanctuary.jpg",
    "Graduates of the New Season Divine Ministries seminary in doctoral robes and gold chaplain stoles, standing before a red stage curtain with their diplomas",
    2000,
    1500,
  ),
  graduationLine: p(
    "graduation-line.jpg",
    "A line of new graduates and faculty in robes holding certificates, beside a New Season Divine Ministries banner reading “Educating, Equipping and Empowering”",
    2000,
    1500,
  ),
  chaplainsFour: p(
    "chaplains-four.jpg",
    "Four new chaplains in clerical collars and gold stoles, smiling and holding their diploma covers",
    1500,
    2000,
  ),
  heldin: p(
    "heldin-gordon.jpg",
    "Pastor Heldin C. Gordon smiling in a clerical collar and gold chaplain stole, holding his diploma",
    540,
    720,
  ),
  sctonda: p(
    "sctonda-gordon.jpg",
    "Apostle Dr. Sctonda Kelly Gordon in a pearl necklace, wearing a lapel microphone on a television set",
    1500,
    2000,
  ),
  sctondaRobe: p(
    "sctonda-robe-podium.jpg",
    "Dr. Sctonda Kelly Gordon in a doctoral robe and red tam, speaking at a podium under blue stage light",
    720,
    960,
  ),
  sctondaStudio: p(
    "sctonda-wnrr-studio.jpg",
    "Dr. Sctonda Kelly Gordon smiling in the WNRR radio studio beside the microphone and mixing board",
    960,
    960,
  ),
  sctondaPulpit: p(
    "sctonda-pulpit.jpg",
    "Apostle Sctonda Kelly Gordon praying into a microphone at a clear acrylic pulpit in front of a stone wall lit purple",
    1500,
    2000,
  ),
  fifteenMinutes: p(
    "fifteen-minutes.jpg",
    "Pastor Heldin and Apostle Sctonda Gordon at a table with an open Bible during a “15 Minutes with Jesus” broadcast",
    960,
    540,
  ),
  certificate: p(
    "chaplain-certificate.jpg",
    "A chaplain certificate of completion from Higher Ground Ministries and the New Season Divine Ministries Theological Seminary & Chaplaincy Institute",
    1566,
    2000,
  ),
  doveAwards: p(
    "dove-awards.jpg",
    "Dr. Sctonda Kelly Gordon wearing a gold medal on the red carpet at the Dove Awards",
    960,
    957,
  ),
  stole: p(
    "stole-diploma.jpg",
    "A graduate’s gold stole with a white cross, and a blue diploma cover",
    646,
    2000,
  ),
};
