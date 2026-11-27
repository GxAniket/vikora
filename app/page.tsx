
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";

/* Custom social media brand icons */

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="29" height="29" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="5" fill="white" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#ed2345" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="31" height="31" fill="none">
      <path
        d="M12 2.2c-3.4 0-5.2 2.5-5.2 5.7 0 1 .1 2.2.2 3.1-.6.5-1.5.8-2.4 1-.5.1-.7.6-.3 1 .6.6 1.6.9 2.3 1.1-.3 1.3-1.3 2.4-2.7 2.9-.5.2-.4.9.1 1 1.3.3 2.2.1 3.1.8.8.6 1.4 1.1 2.7 1.1 1.1 0 1.7-.5 2.2-.5s1.1.5 2.2.5c1.3 0 1.9-.5 2.7-1.1.9-.7 1.8-.5 3.1-.8.5-.1.6-.8.1-1-1.4-.5-2.4-1.6-2.7-2.9.7-.2 1.7-.5 2.3-1.1.4-.4.2-.9-.3-1-.9-.2-1.8-.5-2.4-1 .1-.9.2-2.1.2-3.1 0-3.2-1.8-5.7-5.2-5.7Z"
        fill="#171717"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="29" height="29" fill="none">
      <path
        d="M21.5 3.6L18.3 20c-.2 1.1-.8 1.4-1.7.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.8 8.8-8c.4-.4-.1-.6-.6-.2L6.3 14.1l-4.6-1.4c-1-.3-1-1 .2-1.5L20 3.1c.8-.3 1.6.2 1.5.5Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="29" height="29" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.8" r="1.2" fill="white" />
    </svg>
  );
}

const socials = [
  {
    name: "YouTube Channel",
    username: "@vikora2011",
    description: "Watch my videos · Subscribe to my channel",
    href: "https://youtube.com/@vikora2011",
    icon: YouTubeIcon,
    color: "youtube",
  },
  {
    name: "Snapchat",
    username: "V5249572",
    description: "Follow me on Snapchat",
    href: "https://www.snapchat.com/add/v5249572",
    icon: SnapchatIcon,
    color: "snapchat",
  },
  {
    name: "Telegram",
    username: "@VIKORA_1609",
    description: "Join my Telegram channel",
    href: "https://t.me/VIKORA_1609",
    icon: TelegramIcon,
    color: "telegram",
  },
  {
    name: "Instagram",
    username: "Follow me on Instagram",
    description: "Photos, memories & more",
    href: null,
    icon: InstagramIcon,
    color: "instagram",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <main className={`site ${theme}-theme`}>
      {/* Background */}
      <div className="background-effects">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        {Array.from({ length: 32 }).map((_, index) => (
          <span
            className="star-particle"
            key={index}
            style={{
              left: `${(index * 37 + 11) % 100}%`,
              top: `${(index * 53 + 7) % 100}%`,
              animationDelay: `${(index % 7) * 0.5}s`,
            }}
          >
            {index % 3 === 0 ? "✦" : "·"}
          </span>
        ))}
      </div>

      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <a href="#" className="brand">
            <span className="brand-icon">V</span>
            <span className="brand-name">
              Vikora<span className="brand-dot">.</span>
            </span>
          </a>

          <div className="nav-right">
            <span className="nav-label">MY LITTLE SPACE</span>

            <button
              className="theme-toggle"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
              title="Change theme"
            >
              {theme === "dark" ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>
          </div>
        </nav>

        {/* Profile */}
        <section className="hero">
          <div className="profile-section">
            <div className="avatar-area">
              <div className="avatar-ring" />

              <div className="avatar-wrapper">
                <div className="avatar">
                  <Image
                    src="/images/vikora.png"
                    alt="Vikora profile photo"
                    fill
                    priority
                    sizes="198px"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>

            <div className="profile-tag">
              <span className="online-dot" />
              WELCOME TO MY WORLD
            </div>

            <h1>
              Вікора<span className="heading-sparkle"> ✨</span>
            </h1>

            <div className="bilingual-description">
              <p className="animated-gradient english-description">
                Everything about me and my life
              </p>

              <h2 className="animated-gradient ukrainian-text">
                Все про мене і моє життя
              </h2>
            </div>

            <div className="country-tag">
              <span className="ukraine-flag">🇺🇦</span>
              <span>Я українка</span>
            </div>
          </div>

          <div className="scroll-indicator">
            <span />
            EXPLORE MY WORLD
            <span />
          </div>
        </section>

        {/* Social media */}
        <section className="social-section">
          <div className="section-heading">
            <span className="eyebrow">
              LET'S STAY CONNECTED
            </span>

            <h2>
              Find Me Online<span className="purple-dot">.</span>
            </h2>

            <p className="social-subtitle animated-gradient">
              Давай залишатися на зв'язку ✨
            </p>

            <Sparkles className="section-sparkle" size={25} />
          </div>

          <div className="social-grid">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href || undefined}
                  target={social.href ? "_blank" : undefined}
                  rel={social.href ? "noopener noreferrer" : undefined}
                  className={`social-card ${social.color} ${
                    !social.href ? "disabled-card" : ""
                  }`}
                  aria-disabled={!social.href}
                  onClick={(event) => {
                    if (!social.href) event.preventDefault();
                  }}
                >
                  <div className="social-icon">
                    <Icon />
                  </div>

                  <div className="social-info">
                    <h3>{social.name}</h3>
                    <p>{social.username}</p>
                    <span>{social.description}</span>
                  </div>

                  <div className="social-arrow">
                    <ArrowUpRight size={21} />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-line" />

          <p className="footer-copyright">
            © 2026 VIKORA <span> - 🇺🇦 УКРАЇНА</span>
          </p>

          <p className="footer-bottom">
            ✨ Все про мене і моє життя ✨
          </p>
        </footer>
      </div>
    </main>
  );
}
