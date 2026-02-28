import styles from '../styles/Success.module.css'

export default function Success() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>✓</div>
        <h1>You're In.</h1>
        <p>Welcome to The Greatest1. Your subscription is active.</p>
        <p className={styles.sub}>Check your email for next steps. Trading begins shortly.</p>
        <a href="/" className={styles.btn}>Back to Home</a>
      </div>
    </div>
  )
}
