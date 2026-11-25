export function NewsletterSignup() {
  return (
    <div className="visit-newsletter">
      <span className="visit-panel-label">A little something extra</span>
      <h3>Good news<br />from the diner.</h3>
      <p>Be first to hear about specials, fresh favourites, and what’s happening at Ken’s.</p>
      <form>
        <label htmlFor="newsletter-email">Your email address</label>
        <div className="visit-signup-row">
          <input id="newsletter-email" name="newsletter-email" type="email" placeholder="you@example.com" autoComplete="email" aria-describedby="newsletter-note" disabled />
          <button type="submit" disabled>Join the list <span aria-hidden="true">↗</span></button>
        </div>
        <small id="newsletter-note">Online signup coming soon.</small>
      </form>
    </div>
  );
}
