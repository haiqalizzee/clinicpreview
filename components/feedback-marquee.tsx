"use client";
import { type CSSProperties } from "react";
import { feedback } from "@/lib/clinic";
export function FeedbackMarquee() {
  const repeats = Math.max(1, Math.ceil(4 / Math.max(1, feedback.length)));
  const reviews = Array.from({ length: repeats }, () => feedback).flat();
  return <div className="feedback-motion">
    <div className="feedback-window" tabIndex={0} aria-label="Visitor feedback. Focus or hover to pause scrolling.">
      <div className="feedback-track" id="feedback-track" style={{ "--feedback-duration": `${Math.max(40, reviews.length * 12)}s` } as CSSProperties}>
        {[0, 1].map(copy => <div className={`feedback-group ${copy ? "feedback-copy" : ""}`} key={copy} aria-hidden={copy ? true : undefined} inert={copy ? true : undefined}>
          {reviews.map((item,i) => <figure className={`feedback-review ${i >= feedback.length ? "review-repeat" : ""}`} key={`${item.name}-${i}`} aria-hidden={i >= feedback.length ? true : undefined}><blockquote>“{item.quote.trim()}”</blockquote><figcaption>{item.name}<span>Public review · Shah Alam</span></figcaption></figure>)}
        </div>)}
      </div>
    </div>
  </div>;
}
