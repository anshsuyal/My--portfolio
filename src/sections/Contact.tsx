import { motion } from 'framer-motion'
import { type FormEvent, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { toast } from 'sonner'
import { SITE } from '../constants/site'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

function validate(name: string, email: string, message: string): string | null {
  if (!name) return 'Name is required.'
  if (name.length > MAX_NAME_LENGTH) return `Name must be ${MAX_NAME_LENGTH} characters or fewer.`
  if (!email) return 'Email is required.'
  if (email.length > MAX_EMAIL_LENGTH) return `Email must be ${MAX_EMAIL_LENGTH} characters or fewer.`
  if (!EMAIL_RE.test(email)) return 'Please enter a valid email address.'
  if (!message) return 'Message is required.'
  if (message.length > MAX_MESSAGE_LENGTH) return `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`
  return null
}

export function Contact() {
  const [pending, setPending] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const error = validate(name, email, message)
    if (error) {
      toast.error(error)
      return
    }

    setPending(true)
    try {
      if (!SITE.formEndpoint) {
        await new Promise((r) => setTimeout(r, 1000))
        toast.success("Thanks for reaching out! I'll get back to you soon.")
        form.reset()
        return
      }

      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Failed to send')

      toast.success('Message sent successfully!')
      form.reset()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 md:py-32 md:px-8 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]">Contact</p>
            <h2 className="mt-4 font-display text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Let&rsquo;s talk about your next project<span className="text-[#6366f1]">.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
              I&rsquo;m always open to new opportunities, collaborations, or just a friendly chat about technology.
            </p>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${SITE.email}`} className="group flex items-center gap-4 text-white transition-colors">
                <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)] group-hover:scale-110 transition-transform">
                  <FiMail size={18} />
                </div>
                <span className="text-base font-bold">{SITE.email}</span>
              </a>
              <a href={`tel:${SITE.phone}`} className="group flex items-center gap-4 text-white transition-colors">
                <div className="accent-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)] group-hover:scale-110 transition-transform">
                  <FiPhone size={18} />
                </div>
                <span className="text-base font-bold">{SITE.phone}</span>
              </a>
            </div>

            <div className="mt-12 flex gap-3">
              {[
                { icon: FiGithub, href: SITE.social.github },
                { icon: FiLinkedin, href: SITE.social.linkedin },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] transition-all hover:scale-110 hover:border-[#6366f1]/40 hover:text-[#6366f1] active:scale-95"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] md:p-10"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative">
                  <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focusedField === 'name' ? 'text-[#6366f1]' : 'text-white/40'}`}>Name</label>
                  <input
                    name="name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base font-semibold text-white outline-none transition-all focus:border-[#6366f1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative">
                  <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focusedField === 'email' ? 'text-[#6366f1]' : 'text-white/40'}`}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base font-semibold text-white outline-none transition-all focus:border-[#6366f1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label className={`text-[10px] font-black uppercase tracking-widest transition-colors ${focusedField === 'message' ? 'text-[#6366f1]' : 'text-white/40'}`}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base font-semibold text-white outline-none transition-all focus:border-[#6366f1] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.2)] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={pending}
                className="accent-gradient group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_4px_14px_rgba(99,102,241,0.25)] transition-all hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
              >
                {pending ? 'Sending...' : 'Send Message'}
                {!pending && <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
