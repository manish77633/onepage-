import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Menu, X, ShieldCheck, Building2, Globe2, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Infrastructure Advisory',
    kicker: 'Projects & Financial Closure',
    text: 'Strategic support for contractors pursuing NHAI, MSRDC and government projects — from bidding and JV structuring to financial closure.',
    tag: 'For contractors · ₹50Cr+ turnover',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=85',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Surety Bonds & BG Advisory',
    kicker: 'Capital & Cash Flow',
    text: 'Insurance-backed surety bond and bank guarantee replacement advisory designed to help preserve BG limits and improve cash flow.',
    tag: 'IRDAI-approved insurer partners',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Dubai Real Estate Capital Bridge',
    kicker: 'Global Wealth',
    text: 'Investment advisory for Indian HNIs across off-plan and ready properties, with access to direct developer relationships.',
    tag: 'Golden Visa eligible opportunities',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    icon: Globe2,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, .36, 1] as [number, number, number, number] } }
}

function App() {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState(0)
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, frontend-only
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, .25], [0, 90])
  const heroOpacity = useTransform(scrollYProgress, [0, .2], [1, .25])

  useEffect(() => {
    const handler = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 30)
    }
    window.addEventListener('scroll', handler)
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenu(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('frontend-only');
    }, 1000);
  }

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <a href="#top" className="brand" onClick={close}>
            <span className="brand-mark">V</span>
            <span><strong>VKA</strong><small>CAPITAL BRIDGE</small></span>
          </a>
          <div className={`nav-links ${menu ? 'open' : ''}`}>
            <a href="#about" onClick={close}>About</a>
            <a href="#services" onClick={close}>Services</a>
            <a href="#why-vka" onClick={close}>Why VKA</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a className="nav-cta mobile-only" href="#contact" onClick={close}>Start a conversation <ArrowUpRight size={15}/></a>
          </div>
          <a className="nav-cta desktop-only" href="#contact">Start a conversation <ArrowUpRight size={15}/></a>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
            {menu ? <X/> : <Menu/>}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-container">
            <motion.div className="hero-copy" style={{ opacity: heroOpacity }}>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="eyebrow">
                <span /> VKA CAPITAL BRIDGE
              </motion.div>
              <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
                Building the bridge<br/>
                between <em>opportunity</em><br/>
                and capital.
              </motion.h1>
              <motion.p initial="hidden" animate="visible" variants={fadeUp}>
                Advisor & Management Consultant across infrastructure, finance and global real estate.
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-actions">
                <a className="button primary" href="#contact">Start a conversation <ArrowUpRight size={17}/></a>
                <a className="text-link" href="#services">Explore services <ArrowDownRight size={17}/></a>
              </motion.div>
            </motion.div>

            <motion.div className="hero-visual" style={{ y: heroY }}>
              <div className="hero-image hero-dubai" />
              <div className="hero-image hero-infra" />
              <div className="visual-label label-dubai">DUBAI <span>GLOBAL REAL ESTATE</span></div>
              <div className="visual-label label-india">INDIA <span>INFRASTRUCTURE</span></div>
              <div className="bridge-line"><i/><span>CAPITAL BRIDGE</span><i/></div>
            </motion.div>
          </div>

          <div className="hero-meta">
            <div><span>01</span><b>India</b></div>
            <div><span>02</span><b>Finance</b></div>
            <div><span>03</span><b>Dubai</b></div>
          </div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i/></div>
        </section>

        <section className="stat-strip">
          <div><strong>35<span>+</span></strong><small>YEARS OF EXPERIENCE</small></div>
          <div><strong>03</strong><small>STRATEGIC VERTICALS</small></div>
          <div><strong>01</strong><small>SINGLE WINDOW ADVISORY</small></div>
          <div><strong>IN → UAE</strong><small>CAPITAL BRIDGE</small></div>
        </section>

        <section id="about" className="section about">
          <div className="section-intro">
            <span className="section-no">01 / ABOUT</span>
            <span className="line"/>
          </div>
          <div className="about-grid">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{once:true, amount:.25}} variants={fadeUp}>
              Experience that<br/><em>connects</em> markets.
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:.25}} variants={fadeUp} className="about-copy">
              <p className="lead">VKA Capital Bridge is an advisory platform connecting Indian infrastructure, structured finance and global real estate.</p>
              <p>Led by <strong>Vinod Agrawal</strong>, we help contractors, developers and investors unlock growth without unnecessary collateral barriers — connecting the right opportunity to the right capital partner.</p>
              <a href="#contact" className="text-link dark">Discover VKA <ArrowUpRight size={16}/></a>
            </motion.div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section service-heading">
            <div className="section-intro light"><span className="section-no">02 / SERVICES</span><span className="line"/></div>
            <div className="service-head-row">
              <h2>Three verticals.<br/><em>One strategic bridge.</em></h2>
              <p>Focused advisory where projects, capital and global wealth intersect.</p>
            </div>
          </div>
          <div className="service-list">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.article
                  key={s.number}
                  className={`service-item ${active === i ? 'active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  initial={{opacity:0, y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}}
                  transition={{duration:.65, delay:i*.08}}
                >
                  <div className="service-content-inner">
                    <div className="service-top-row">
                      <span className="service-number">{s.number}</span>
                      <span className="service-kicker">{s.kicker}</span>
                    </div>
                    <div className="service-title">
                      <h3>{s.title}</h3>
                    </div>
                    <div className="service-desc">
                      <p>{s.text}</p>
                    </div>
                    <div className="service-footer-row">
                      <span className="service-tag">{s.tag}</span>
                      <div className="service-icon">
                        <Icon size={20} className="service-type-icon"/>
                        <ChevronRight size={18} className="service-arrow-icon"/>
                      </div>
                    </div>
                  </div>
                  <div className="service-bg" style={{backgroundImage:`url(${s.image})`}}/>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="split-feature">
          <div className="split-image infra-image">
            <span>01 — INDIA</span>
            <b>Infrastructure<br/>at scale.</b>
          </div>
          <div className="split-copy">
            <span className="section-no">INFRASTRUCTURE ADVISORY</span>
            <h2>From tender<br/>to <em>closure.</em></h2>
            <p>Strategic support across government project bidding, JV structuring and financial closure for established contractors.</p>
            <div className="feature-list">
              <span><Check size={16}/> NHAI / MSRDC / Govt. Project Bidding</span>
              <span><Check size={16}/> JV Structuring & Financial Closure</span>
              <span><Check size={16}/> For Contractors: Turnover ₹50Cr+</span>
            </div>
            <a className="text-link dark" href="#contact">Discuss your project <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section className="split-feature reverse finance-feature">
          <div className="split-copy">
            <span className="section-no">SURETY & BG ADVISORY</span>
            <h2>Protect limits.<br/><em>Unlock cash flow.</em></h2>
            <p>Insurance-backed surety solutions and bank guarantee replacement advisory to help businesses deploy capital more efficiently.</p>
            <div className="feature-list">
              <span><Check size={16}/> Collateral-free surety bonds</span>
              <span><Check size={16}/> Bank guarantee replacement</span>
              <span><Check size={16}/> IRDAI-approved insurer partners</span>
            </div>
            <a className="text-link dark" href="#contact">Explore an advisory route <ArrowUpRight size={16}/></a>
          </div>
          <div className="split-image finance-image"><span>02 — FINANCE</span><b>Capital<br/>without friction.</b></div>
        </section>

        <section className="dubai-feature">
          <div className="dubai-bg"/>
          <div className="dubai-overlay"/>
          <div className="dubai-content">
            <span className="section-no">03 / DUBAI REAL ESTATE</span>
            <h2>From India<br/>to <em>Dubai.</em></h2>
            <p>Investment advisory for Indian HNIs across off-plan and ready properties through direct developer relationships.</p>
            <div className="dubai-metrics">
              <div><strong>7–9<span>%</span></strong><small>RENTAL YIELD*</small></div>
              <div><strong>UAE</strong><small>GOLDEN VISA ELIGIBLE*</small></div>
              <div><strong>01:01</strong><small>DIRECT DEVELOPER ACCESS</small></div>
            </div>
            <p className="dubai-disclaimer" style={{ fontSize: '11px', color: '#8f918f', marginTop: '-20px', marginBottom: '35px' }}>*Indicative/subject to property, market conditions and applicable terms.</p>
            <a className="button light-button" href="#contact">Explore Dubai opportunities <ArrowUpRight size={17}/></a>
          </div>
        </section>

        <section id="why-vka" className="section why">
          <div className="section-intro"><span className="section-no">04 / WHY VKA</span><span className="line"/></div>
          <div className="why-grid">
            <div>
              <h2>One advisor.<br/><em>Three strategic needs.</em></h2>
              <p className="why-lead">Projects. Finance. Global wealth.</p>
            </div>
            <div className="why-points">
              <div><span>01</span><h3>Single window</h3><p>One strategic relationship across projects, finance and global wealth.</p></div>
              <div><span>02</span><h3>Direct access</h3><p>Connections across insurers, banks and Dubai developers.</p></div>
              <div><span>03</span><h3>Advisory first</h3><p>No brokers. A strategy-led approach built around the client's requirement.</p></div>
            </div>
          </div>
          <div className="bridge-diagram">
            <div>PROJECTS</div><span/><strong>VKA<br/><small>CAPITAL BRIDGE</small></strong><span/><div>GLOBAL WEALTH</div>
          </div>
        </section>

        <section className="process">
          <div className="section">
            <div className="section-intro light"><span className="section-no">05 / APPROACH</span><span className="line"/></div>
            <h2>Clarity before<br/><em>connection.</em></h2>
            <div className="process-grid">
              <div><span>01</span><h3>Understand</h3><p>Define the project, capital requirement or investment objective.</p></div>
              <div><span>02</span><h3>Structure</h3><p>Shape an advisory route around the opportunity and its constraints.</p></div>
              <div><span>03</span><h3>Connect</h3><p>Bring the relevant financial, insurance or developer relationship.</p></div>
              <div><span>04</span><h3>Execute</h3><p>Stay focused on the right outcome from strategy through closure.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section">
            <div className="contact-grid">
              <div>
                <span className="section-no">06 / CONTACT</span>
                <h2>Let's build the<br/><em>right bridge.</em></h2>
                <p>Have a project, financing requirement or global investment goal? Start a conversation with VKA.</p>
                <div className="contact-details">
                  <a href="mailto:vinod@vkacapitalbridge.com"><Mail size={17}/> vinod@vkacapitalbridge.com</a>
                  <a href="tel:+919618211000"><Phone size={17}/> +91 96182 11000</a>
                  <a href="https://wa.me/919618211000?text=Hello%20VKA%20Capital%20Bridge,%20I%20would%20like%20to%20discuss%20an%20advisory%20requirement." target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/> WhatsApp us</a>
                  <span><MapPin size={17}/> NCR · Mumbai · Jaipur · Dubai</span>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <label>Name<input required placeholder="Your name"/></label>
                <label>Email<input required type="email" placeholder="you@company.com"/></label>
                <label>Phone<input required placeholder="+91"/></label>
                <label>I'm interested in
                  <select required defaultValue=""><option value="" disabled>Select an area</option><option>Infrastructure Advisory</option><option>Surety Bonds & BG Advisory</option><option>Dubai Real Estate</option><option>General Advisory</option></select>
                </label>
                <label>Message<textarea required rows={3} placeholder="Tell us briefly about your requirement"/></label>
                {formStatus === 'frontend-only' && (
                  <p style={{ color: '#d9534f', fontSize: '13px', margin: 0 }}>
                    Currently the inquiry form is frontend-only and does not permanently store/send submissions. Please use the email or phone above.
                  </p>
                )}
                <button className="button primary submit" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : 'Send enquiry'} <ArrowUpRight size={17}/>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <a href="#top" className="brand footer-brand"><span className="brand-mark">V</span><span><strong>VKA</strong><small>CAPITAL BRIDGE</small></span></a>
          <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#why-vka">Why VKA</a><a href="#contact">Contact</a></div>
          <div className="footer-tag">Projects · Finance · Global Wealth</div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VKA Capital Bridge. All rights reserved.</span>
          <span>Advisory first. Always.</span>
        </div>
        <p className="disclaimer">VKA Capital Bridge is an advisory firm. We are not an insurance company or real estate developer/broker. We facilitate through IRDAI-approved partners and RERA-registered developers.</p>
      </footer>
    </div>
  )
}

export default App
