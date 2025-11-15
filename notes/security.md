https://owasp.org/www-project-top-ten/
https://blog.appsignal.com/2024/07/03/security-best-practices-for-your-nodejs-application.html
https://expressjs.com/en/advanced/best-practice-security.html
https://youtu.be/064yDG7Rz80?si=Lc0YAdaj-rbugbfs

# Essential Web Security Concepts

<!-- - Use HTTPS/TLS -->
<!-- - CORS & CSRF -->
- input validation & sanitization
- JWT Security — Use tokens correctly (Protect tokens and cookies)
- Password Hashing — bcrypt, argon2
- Rate Limiting — Prevent brute-force attacks
- Secrets Management — Use .env files correctly (Never hardcode secrets or keys)

# Dev & Deployment Security

Covers production setup:
Secure headers (helmet in Express)
Path traversal

# Api Security

Principle of Least privilege / DB users

Reverse Proxy (Nginx) — Handle HTTPS, rate limiting
Docker security (avoid root containers)

# Database Security (MongoDB/Mongoose)

- Store the sanitized data, not raw malicious strings. Sanitize before saving
- Schema validation Validate shapes with Mongoose schemas or Joi so unexpected data doesn’t get persisted
- Schema Validation — Use Mongoose schemas or Joi for strict data validation.

# Frontend & Browser-Side Security (React)

# HTTP Security Headers

https://youtu.be/064yDG7Rz80?si=Pkjp8IgHhx87Fhti

- CSP

- HttpOnly & Secure Cookie prevent JS from reading session cookies (mitigates exfiltration)
- Avoid client-side templating pitfalls
- Safe rich-text workflows
