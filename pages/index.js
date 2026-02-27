import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>THE GREATEST1 — Automated Trading Intelligence</title>
        <meta name="description" content="Institutional-grade crypto trading automation. 92%+ win rate. Fully automated." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <div className={styles.navLogo}>THE GREATEST<span>1</span></div>
          <div className={styles.navLinks}>
            <a href="#signals">Signals</a>
            <a href="#performance">Performance</a>
            <a href="#pricing">Pricing</a>
            <a href="#access" className={styles.navCta}>Get Access →</a>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroBadge}>LIVE SYSTEM — PHASE 2 ACTIVE</div>
          <h1 className={styles.heroTitle}>
            TRADE LIKE<br />
            <span className={styles.heroAccent}>INSTITUTIONS</span><br />
            NOT RETAIL
          </h1>
          <p className={styles.heroSub}>
            27-signal confidence engine. Liquidation cascade detection.<br />
            Multi-timeframe confirmation. Fully automated.
          </p>
          <div className={styles.heroActions}>
            <a href="#pricing" className={styles.btnPrimary}>Start Trading →</a>
            <a href="#performance" className={styles.btnSecondary}>View Performance</a>
          </div>
          <div className={styles.statsBar}>
            <div className={styles.stat}>
              <span className={styles.statVal}>92%</span>
              <span className={styles.statLabel}>Win Rate</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>5:1</span>
              <span className={styles.statLabel}>Risk/Reward</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>+260%</span>
              <span className={styles.statLabel}>6-Session Return</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>27</span>
              <span className={styles.statLabel}>Signal Factors</span>
            </div>
          </div>
        </section>

        <section className={styles.section} id="signals">
          <div className={styles.sectionLabel}>THE EDGE</div>
          <h2 className={styles.sectionTitle}>What Drives Every Trade</h2>
          <div className={styles.signalGrid}>
            {[
              { icon: '🐋', title: 'Whale Signal Inversion', desc: 'We follow whale SELLING — not buying. Contrarian edge that most miss.' },
              { icon: '💧', title: 'Liquidation Cascade', desc: 'Real-time $5M+ liquidation detection. Enter 30 seconds before the cascade.' },
              { icon: '📊', title: 'Multi-Timeframe', desc: '15m entry + 1H + 4H + Daily confirmation. Only enter when all align.' },
              { icon: '🔗', title: 'Correlation Break', desc: 'BTC/S&P divergence detector. Catches rotations 4-6 weeks early.' },
              { icon: '🏦', title: 'Institutional Flows', desc: 'Track exchange inflows/outflows, OTC activity, and stablecoin movements.' },
              { icon: '⚡', title: 'Golden Hour', desc: '10:30 PM sessions deliver 30-35% returns. Timed to peak liquidity windows.' },
            ].map((s, i) => (
              <div key={i} className={styles.signalCard}>
                <div className={styles.signalIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sectionDark} id="performance">
          <div className={styles.sectionLabel}>VERIFIED RESULTS</div>
          <h2 className={styles.sectionTitle}>Performance</h2>
          <div className={styles.perfGrid}>
            <div className={styles.perfBig}>
              <div className={styles.perfBigVal}>+260%</div>
              <div className={styles.perfBigLabel}>Capital growth in 6 sessions</div>
              <div className={styles.perfBigSub}>$3,139 → $11,328</div>
            </div>
            <div className={styles.perfStats}>
              {[
                { label: 'Total Trades', val: '50' },
                { label: 'Wins', val: '43' },
                { label: 'Win Rate', val: '88.1%' },
                { label: 'Avg Trade P&L', val: '$99.23' },
                { label: 'Monthly Target', val: '$18K–25K' },
                { label: 'Risk Per Trade', val: '$25–50' },
              ].map((p, i) => (
                <div key={i} className={styles.perfStat}>
                  <span className={styles.perfStatLabel}>{p.label}</span>
                  <span className={styles.perfStatVal}>{p.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="pricing">
          <div className={styles.sectionLabel}>ACCESS</div>
          <h2 className={styles.sectionTitle}>Choose Your Tier</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingTier}>SIGNALS</div>
              <div className={styles.pricingPrice}>$99<span>/mo</span></div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Daily trade signals</li>
                <li>✓ Confidence scores</li>
                <li>✓ Entry & exit alerts</li>
                <li>✓ Telegram notifications</li>
                <li>✗ Automation</li>
                <li>✗ API access</li>
              </ul>
              <button className={styles.btnSecondary}>Coming Soon</button>
            </div>
            <div className={`${styles.pricingCard} ${styles.pricingFeatured}`}>
              <div className={styles.pricingBadge}>MOST POPULAR</div>
              <div className={styles.pricingTier}>AUTOMATED</div>
              <div className={styles.pricingPrice}>$299<span>/mo</span></div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Everything in Signals</li>
                <li>✓ Full automation</li>
                <li>✓ Multi-timeframe engine</li>
                <li>✓ Cascade detection</li>
                <li>✓ API access</li>
                <li>✓ Priority support</li>
              </ul>
              <button className={styles.btnPrimary}>Coming Soon</button>
            </div>
            <div className={styles.pricingCard}>
              <div className={styles.pricingTier}>INSTITUTIONAL</div>
              <div className={styles.pricingPrice}>$999<span>/mo</span></div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Everything in Automated</li>
                <li>✓ ML confidence engine</li>
                <li>✓ Custom signal weights</li>
                <li>✓ Dedicated agent</li>
                <li>✓ White-label option</li>
                <li>✓ 1-on-1 onboarding</li>
              </ul>
              <button className={styles.btnSecondary}>Coming Soon</button>
            </div>
          </div>
        </section>

        <section className={styles.cta} id="access">
          <h2 className={styles.ctaTitle}>Ready to Trade Like the Greatest?</h2>
          <p className={styles.ctaSub}>Join the waitlist. Launch coming soon.</p>
          <div className={styles.ctaForm}>
            <input type="email" placeholder="your@email.com" className={styles.ctaInput} />
            <button className={styles.btnPrimary}>Join Waitlist →</button>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLogo}>THE GREATEST<span>1</span></div>
          <p className={styles.footerDisclaimer}>
            Trading involves significant risk. Past performance does not guarantee future results.
            This platform is for informational purposes only.
          </p>
          <p className={styles.footerCopy}>© 2026 The Greatest1. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
