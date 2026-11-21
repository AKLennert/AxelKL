import { useState } from "react";
import { links, site } from "../data/content";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// FormSubmit emails the message to Axel, then redirects to /thanks.
const FORM_ACTION = "https://formsubmit.co/46417a35ba6d3442d7fc86a967275a38";

export default function Contact() {
  useDocumentTitle("Contact");
  const [sending, setSending] = useState(false);
  const thanksUrl = `${window.location.origin}/thanks`;

  return (
    <section className="page">
      <header className="page__head">
        <p className="eyebrow">Contact</p>
        <h1 className="page__title">Let&apos;s work together.</h1>
        <p className="page__lede">
          Have a project, internship or collaboration in mind? Send a message
          and I&apos;ll get back to you.
        </p>
      </header>

      <div className="contact-page__grid">
        <form
          className="form"
          action={FORM_ACTION}
          method="POST"
          onSubmit={() => setSending(true)}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={thanksUrl} />
          <input type="hidden" name="_subject" value="New AxelKL.com contact" />
          <input type="hidden" name="_template" value="table" />
          {/* Honeypot: bots fill this in, people never see it. */}
          <input
            type="text"
            name="_honey"
            className="form__honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form__row">
            <label className="form__field">
              <span className="form__label">Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className="form__field">
              <span className="form__label">Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>
          <label className="form__field">
            <span className="form__label">Subject</span>
            <input type="text" name="subject" required />
          </label>
          <label className="form__field">
            <span className="form__label">Message</span>
            <textarea name="message" rows={6} required />
          </label>

          <div>
            <button type="submit" className="btn btn--solid" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>

        <aside>
          <h2 className="eyebrow">Other ways to connect</h2>
          <ul className="facts">
            <li>
              <span className="facts__key">Email</span>
              <a className="facts__val" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <span className="facts__key">LinkedIn</span>
              <a
                className="facts__val"
                href={links.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                in/aklennert
              </a>
            </li>
            <li>
              <span className="facts__key">GitHub</span>
              <a
                className="facts__val"
                href={links.github.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                AKLennert
              </a>
            </li>
            <li>
              <span className="facts__key">Availability</span>
              <span className="facts__val facts__val--status">
                <span className="hero__status-dot" aria-hidden="true" />
                {site.status}
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
