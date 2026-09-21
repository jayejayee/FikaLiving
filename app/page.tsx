import { supabase } from "@/lib/supabase";
import ContactForm from "./contact-form";


export default async function Home() {
  const { data: FikaLiving, error } = await supabase
    .from("Inquiries")
    .select("*");

  if (error) {
    console.error(error);
  }
    return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Fika Wood home">
          <span className="brand-mark">FL</span>
          <span>-<br />Living</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">The work</a>
          <a href="#story">Our approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="#contact">Begin a piece <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Custom furniture · Angier, NC</p>
            <h1>For the quiet<br /><em>good parts.</em></h1>
            <p className="hero-intro">Custom furniture and cabinetry for the moments that become part of the story: Sunday breakfasts, late-night talks, first homes.</p>
            <a className="button button-dark" href="#work">See the collection <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-image image-frame" role="img" aria-label="A handcrafted walnut chair in a sunlit workshop" />
          <div className="hero-note"><span>01</span><span>Made for<br />living well</span></div>
        </section>

        <section className="intro-band" id="story">
          <p className="section-kicker">A little about us</p>
          <div className="intro-content">
            <h2>Furniture that<br /><em>holds a moment.</em></h2>
            <div>
              <p>- Living is a small, independent shop making one-of-a-kind furniture and cabinetry for the spaces where life actually happens. We work with warm, honest materials and the belief that the best pieces become witnesses to your everyday.</p>
              <a className="text-link" href="#contact">Meet the makers <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div><p className="section-kicker">Selected work</p><h2>Made for the in-between</h2></div>
            <p className="section-aside">A small collection of made-to-order furniture<br />for daily rituals and the years ahead.</p>
          </div>
          <div className="gallery-grid">
            <a className="gallery-card gallery-tall" href="#contact"><div className="gallery-image gallery-chair" /><span className="gallery-label"><strong>The cutting board</strong><small>Walnut</small></span></a>
            <a className="gallery-card" href="#contact"><div className="gallery-image gallery-table" /><span className="gallery-label"><strong>The Side Table</strong><small>Pine / Brazilian Rosewood</small></span></a>
              <a className="gallery-card" href="#contact"><div className="gallery-image gallery-stool" /><span className="gallery-label"><strong></strong><small></small></span></a>
              <a className="gallery-card gallery-wide" href="#contact"><div className="gallery-image gallery-shelf" /><span className="gallery-label"><strong>Wooden toy car</strong><small>Handmade / solid wood</small></span></a>
            <a className="gallery-card" href="#contact"><div className="gallery-image gallery-kitchen" /><span className="gallery-label"><strong>Kitchen remodel</strong><small>Custom cabinetry / warm wood</small></span></a>
          </div>
        </section>

        <section className="process-section">
          <div className="process-image image-frame" role="img" aria-label="Woodworker shaping a piece of timber by hand" />
          <div className="process-copy"><p className="section-kicker">The - way</p><h2>Built around<br /><em>your everyday.</em></h2><p>Every piece starts with a conversation about how you live. We sketch, select timber, and make carefully in our Angier studio, leaving room for the small details that make something unmistakably yours.</p><a className="text-link" href="#contact">Tell us what you have in mind <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-heading"><p className="section-kicker">Start a conversation</p><h2>What will you<br /><em>make room for?</em></h2><p>Tell us a little about your project. We usually reply within two working days.</p><a className="" href=""><span aria-hidden="true"></span></a></div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer"><span>- Living © 2026</span><span>Angier, NC</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
