"use client";

import { useState } from "react";
import { useForm } from "./useForm";
import { topics } from "@/lib/site";

function Sent({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gold/60 bg-gold-hi/15 p-6" role="status">
      <p className="display text-2xl text-crimson">Thank you.</p>
      <p className="mt-2 text-[1.02rem]">{children}</p>
    </div>
  );
}

function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

const read = (f: HTMLFormElement) => Object.fromEntries(new FormData(f).entries());

/** Messages, prayer requests and visit plans. */
export function ContactForm({ topic = "" }: { topic?: string }) {
  const { submit, status, error } = useForm("contact");
  const [chosen, setChosen] = useState(topic || topics[0]);
  if (status === "sent")
    return <Sent>{chosen === "Prayer request" ? "We are praying with you, and someone will reach out." : "Your message is on its way. Someone from New Season will be in touch soon."}</Sent>;

  return (
    <form
      className="relative grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        submit(read(e.currentTarget));
      }}
    >
      <Honeypot />
      <label className="grid gap-1.5">
        <span className="text-[0.92rem] font-semibold">What is this about?</span>
        <select name="topic" className="field" value={chosen} onChange={(e) => setChosen(e.target.value)}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[0.92rem] font-semibold">Your name</span>
          <input name="name" className="field" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[0.92rem] font-semibold">Phone or email</span>
          <input name="contact" className="field" autoComplete="email" required />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-[0.92rem] font-semibold">{chosen === "Prayer request" ? "How can we pray for you?" : "Your message"}</span>
        <textarea name="message" rows={5} className="field" required />
      </label>
      {error ? (
        <p className="rounded-xl bg-crimson/8 px-4 py-3 text-[0.98rem] text-crimson" role="alert">
          {error}
        </p>
      ) : null}
      <div>
        <button type="submit" className="btn btn-crimson" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : chosen === "Prayer request" ? "Send my prayer request" : "Send message"}
        </button>
      </div>
    </form>
  );
}

const PROGRAMS = ["Chaplaincy certificate", "A degree program", "The honorary doctorate", "The Nehemiah Project (pastors)", "Not sure yet"];

/** An enrollment inquiry for the Seminary & Chaplaincy Institute. */
export function EnrollForm() {
  const { submit, status, error } = useForm("enroll");
  if (status === "sent") return <Sent>The Chancellor’s office has your inquiry and will reach out about classes, costs and the next start date.</Sent>;

  return (
    <form
      className="relative grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const f = e.currentTarget;
        const data = read(f);
        submit({ ...data, programs: new FormData(f).getAll("programs") });
      }}
    >
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[0.92rem] font-semibold">Your name</span>
          <input name="name" className="field" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[0.92rem] font-semibold">Phone or email</span>
          <input name="contact" className="field" autoComplete="email" required />
        </label>
      </div>
      <fieldset className="grid gap-2">
        <legend className="mb-1.5 text-[0.92rem] font-semibold">I’m interested in</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {PROGRAMS.map((p) => (
            <label key={p} className="flex items-center gap-3 rounded-xl border border-ink/15 bg-white px-4 py-3 text-[0.98rem] has-[:checked]:border-crimson has-[:checked]:bg-crimson/5">
              <input type="checkbox" name="programs" value={p} className="h-4 w-4 accent-crimson" />
              {p}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[0.92rem] font-semibold">Online or in person?</span>
          <select name="format" className="field" defaultValue="Either">
            <option>Online</option>
            <option>In person in Augusta</option>
            <option>Either</option>
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className="text-[0.92rem] font-semibold">Your church or ministry (optional)</span>
          <input name="ministry" className="field" />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-[0.92rem] font-semibold">Anything we should know? (optional)</span>
        <textarea name="note" rows={4} className="field" />
      </label>
      {error ? (
        <p className="rounded-xl bg-crimson/8 px-4 py-3 text-[0.98rem] text-crimson" role="alert">
          {error}
        </p>
      ) : null}
      <div>
        <button type="submit" className="btn btn-crimson" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send my inquiry"}
        </button>
      </div>
    </form>
  );
}
