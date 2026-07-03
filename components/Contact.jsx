"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Tell us a bit about the project.";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // In production this would POST to an API route or form handler.
      setStatus("success");
      setForm(initialForm);
    }
  }

  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest2 text-signal">
            Get in touch
          </p>
          <h2 className="font-display text-4xl tracking-tightest md:text-5xl">
            Tell us where
            <br />
            you&apos;re headed.
          </h2>
          <p className="mt-6 max-w-sm text-steel dark:text-steel-dark">
            Share a few details about your project and we&apos;ll follow up
            within two business days with next steps.
          </p>

          <div className="mt-10 space-y-3 font-mono text-sm text-steel dark:text-steel-dark">
            <p>hello@northbound.studio</p>
            <p>+1 (555) 019-2044</p>
            <p>Remote-first, working worldwide</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <Field
            label="Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Jordan Lee"
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="jordan@company.com"
          />
          <div>
            <label
              htmlFor="message"
              className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you looking to build?"
              className="mt-2 w-full resize-none rounded-xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors placeholder:text-steel/60 focus:border-signal dark:border-line-dark dark:text-ink-dark"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-white transition-transform hover:-translate-y-0.5"
          >
            Send message
          </button>

          {status === "success" && (
            <p
              role="status"
              className="rounded-xl border border-signal/30 bg-signal-soft px-4 py-3 text-sm text-signal dark:bg-signal-soft-dark"
            >
              Thanks — your message is in. We&apos;ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type, value, onChange, error, placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-widest2 text-steel dark:text-steel-dark"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-line bg-transparent px-4 py-3 text-ink outline-none transition-colors placeholder:text-steel/60 focus:border-signal dark:border-line-dark dark:text-ink-dark"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
