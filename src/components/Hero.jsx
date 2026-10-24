import './Hero.css';
import { ArrowDownRight, Check, CircleDollarSign, Leaf } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-kicker"><span className="kicker-dot"></span> Arise Farms / Pi commerce</div>
        <h1 className="hero-title">
          Food with a <span className="title-highlight">clear origin.</span>
        </h1>
        <p className="hero-description">
          Shop produce from our Lagos farm, settle in Pi, and keep every order close to its source.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
            Browse the harvest <ArrowDownRight size={18} />
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Talk to the farm
          </button>
        </div>
        <div className="hero-trust-row">
          <span><Check size={15} /> Harvested locally</span>
          <span><Check size={15} /> Pi payments</span>
          <span><Check size={15} /> Direct delivery</span>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Acres of Farmland</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
      <div className="hero-aside">
        <div className="hero-aside-image"><img src="/layout.jpeg.png" alt="Fresh produce from Arise Farms" /></div>
        <div className="hero-aside-copy"><span>Field note 01</span><strong>Picked this week</strong><p>Vegetables, honey, grains</p></div>
        <div className="hero-pi-card"><CircleDollarSign size={18} /><span><strong>Pi ready</strong><small>Simple, native checkout</small></span></div>
      </div>
      <div className="hero-scroll"><Leaf size={16} /> Scroll to explore</div>
    </section>
  );
}

export default Hero;

