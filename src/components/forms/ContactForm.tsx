"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Send } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form:", data);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
          <CheckCircle size={24} className="text-gold" />
        </div>
        <h3 className="font-display text-xl text-obsidian">Mesaj trimis!</h3>
        <p className="text-charcoal/60 text-sm max-w-xs">
          Îți mulțumim. Îți vom răspunde în cel mai scurt timp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
            Nume *
          </label>
          <input
            type="text"
            placeholder="Numele tău"
            {...register("name", { required: true })}
            className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
            Telefon *
          </label>
          <input
            type="tel"
            placeholder="+40 7XX XXX XXX"
            {...register("phone", { required: true })}
            className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
          Email
        </label>
        <input
          type="email"
          placeholder="email@exemplu.ro"
          {...register("email")}
          className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
          Subiect
        </label>
        <input
          type="text"
          placeholder="Despre ce este vorba?"
          {...register("subject")}
          className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-charcoal/70 mb-1.5">
          Mesaj *
        </label>
        <textarea
          rows={4}
          placeholder="Scrie-ne mesajul tău..."
          {...register("message", { required: true })}
          className="w-full px-4 py-3 bg-warm border border-warm-dark rounded-sm text-sm text-obsidian placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">Câmp obligatoriu</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-8 py-4 bg-obsidian text-white text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full hover:bg-charcoal transition-all duration-300 disabled:opacity-60 hover:scale-105"
      >
        {loading ? (
          "Se trimite..."
        ) : (
          <>
            <Send size={13} />
            Trimite Mesajul
          </>
        )}
      </button>
    </form>
  );
}
