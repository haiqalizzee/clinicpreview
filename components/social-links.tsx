import { clinic } from "@/lib/clinic";
export function SocialLinks() {
  return (
    <nav className="social-icons" aria-label="Social media">
      <a
        href={clinic.socials.instagram}
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      </a>
      <a
        href={clinic.socials.facebook}
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.1 22v-9.1h3.1l.5-3.6h-3.6V7c0-1 .3-1.7 1.8-1.7h1.9V2.1c-.3 0-1.4-.1-2.7-.1-2.8 0-4.7 1.7-4.7 4.9v2.4H7.2v3.6h3.2V22h3.7Z" />
        </svg>
      </a>
      <a
        href={clinic.socials.tiktok}
        aria-label="TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.7 2h-3.4v13.4a3 3 0 1 1-2.6-3V9a6.4 6.4 0 1 0 6 6.4V8.6a8.3 8.3 0 0 0 4.9 1.6V6.8A5 5 0 0 1 16.7 2Z" />
        </svg>
      </a>
      <a
        href={clinic.whatsapp}
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.6 11.7a8.7 8.7 0 0 1-13 7.5L3 20.5l1.3-4.4a8.7 8.7 0 1 1 16.3-4.4Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8.1 7.3c.3-.2.7-.2.9.2l1 2c.1.3 0 .5-.2.7l-.6.6c.8 1.6 1.8 2.6 3.4 3.4l.7-.8c.2-.2.4-.3.7-.1l1.9.9c.4.2.4.6.3.9-.5 1.4-1.6 1.9-2.9 1.4-3.2-1.1-5.7-3.6-6.5-6.4-.3-1.2.3-2.2 1.3-2.8Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </nav>
  );
}
