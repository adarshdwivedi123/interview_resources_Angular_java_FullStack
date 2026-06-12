What is XSS?
Cross Site Scripting — attacker injects malicious script into your app that runs in victim's browser.
html<!-- Attacker tries to inject this -->
<script>document.cookie</script>
<!-- or -->
<img src="x" onerror="stealCookies()">

1. Angular's Built-in Protection (Automatic)
Angular automatically escapes all values bound to the DOM.
typescript// Component
this.userInput = '<script>alert("hacked")</script>';
html<!-- Angular escapes it automatically — safe -->
<div>{{ userInput }}</div>
<!-- Renders as text, not script -->
✅ Always use interpolation {{ }} — never build HTML manually.

--------------------------------------------------------------------------

2. Avoid innerHTML — Use DomSanitizer Instead
typescript// ❌ DANGEROUS — bypasses Angular security
this.el.nativeElement.innerHTML = userInput;

// ❌ DANGEROUS
<div [innerHTML]="userInput"></div>
If you must use innerHTML, sanitize first:
typescriptimport { DomSanitizer } from '@angular/platform-browser';

constructor(private sanitizer: DomSanitizer) {}

getSafeHtml(html: string) {
  return this.sanitizer.sanitize(SecurityContext.HTML, html);
}
html<!-- Safe -->
<div [innerHTML]="getSafeHtml(userInput)"></div>

3. Never Use bypassSecurityTrust Unless Absolutely Necessary
typescript// ❌ Only use if you 100% trust the source
this.sanitizer.bypassSecurityTrustHtml(html);
this.sanitizer.bypassSecurityTrustScript(script);
this.sanitizer.bypassSecurityTrustUrl(url);
this.sanitizer.bypassSecurityTrustResourceUrl(url);
this.sanitizer.bypassSecurityTrustStyle(style);

If you use bypassSecurityTrust — you take full responsibility for XSS protection.


4. Content Security Policy (CSP)
Add CSP headers on your server to restrict what scripts can run.
// In your server/nginx config
Content-Security-Policy: 
  default-src 'self';
  script-src 'self';
  style-src 'self';
  img-src 'self' data:;
This blocks inline scripts even if injected.

5. Sanitize User Input on Backend Too
Never trust frontend sanitization alone.
java// Java Spring Boot — sanitize input
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;

public String sanitize(String input) {
  return Jsoup.clean(input, Safelist.basic());
}

6. Use HttpOnly and Secure Cookies
Prevents JavaScript from accessing cookies even if XSS happens.
java// Spring Boot
Cookie cookie = new Cookie("token", jwtToken);
cookie.setHttpOnly(true);   // JS cannot access
cookie.setSecure(true);     // HTTPS only
response.addCookie(cookie);

7. Avoid Direct DOM Manipulation
typescript// ❌ DANGEROUS
document.getElementById('div').innerHTML = userInput;

// ✅ SAFE — use Angular binding
<div>{{ userInput }}</div>

8. Validate and Encode URL Parameters
typescript// ❌ Dangerous
window.location.href = userInput;

// ✅ Safe — sanitize URL
const safeUrl = this.sanitizer.sanitize(
  SecurityContext.URL, userInput
);