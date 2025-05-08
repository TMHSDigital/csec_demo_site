# Security Audit Checklist

A basic checklist for conducting security reviews of web applications and systems.

## Network Security

- [ ] Ports and services inventory completed
- [ ] Unnecessary ports/services closed
- [ ] Network traffic encrypted (HTTPS, SSH, etc.)
- [ ] Firewall rules properly configured
- [ ] Network segmentation implemented
- [ ] VPN for remote access configured securely
- [ ] Defense in depth strategy implemented

## Web Application Security

- [ ] Input validation implemented (server-side)
- [ ] Output encoding to prevent XSS
- [ ] SQL injection protection (parameterized queries)
- [ ] CSRF protection mechanisms
- [ ] File upload validation and restrictions
- [ ] Proper session management
- [ ] Cookie security (Secure, HttpOnly, SameSite flags)
- [ ] Content Security Policy implemented
- [ ] X-Frame-Options header set
- [ ] X-Content-Type-Options: nosniff header set
- [ ] Referrer-Policy header set
- [ ] CORS properly configured

## Authentication & Authorization

- [ ] Strong password policy enforced
- [ ] Multi-factor authentication available
- [ ] Secure password storage (proper hashing)
- [ ] Account lockout policy for failed attempts
- [ ] Session timeout implemented
- [ ] Principle of least privilege followed
- [ ] Role-based access control implemented
- [ ] JWT or token security (if applicable)

## Data Protection

- [ ] Sensitive data encrypted at rest
- [ ] Sensitive data encrypted in transit
- [ ] Data classification policy implemented
- [ ] PII/PHI handled according to regulations
- [ ] Proper key management procedures
- [ ] Data minimization principles followed
- [ ] Secure disposal of data when no longer needed

## Infrastructure Security

- [ ] Systems patched and up to date
- [ ] Secure configuration baselines implemented
- [ ] DevOps security practices followed
- [ ] Container security measures implemented
- [ ] Cloud security best practices followed
- [ ] Monitoring and logging implemented
- [ ] Backup procedures tested and verified

## Incident Response

- [ ] Incident response plan documented
- [ ] Security monitoring in place
- [ ] Alerting mechanisms configured
- [ ] Log aggregation and analysis capabilities
- [ ] Recovery procedures documented and tested
- [ ] Communication plan established

## Secure Development

- [ ] Security requirements defined
- [ ] Threat modeling performed
- [ ] Secure coding standards followed
- [ ] Regular code reviews with security focus
- [ ] Pre-commit/pre-push security hooks
- [ ] Automated security testing in CI/CD
- [ ] Dependency vulnerability scanning
- [ ] Third-party code/libraries audited

## Security Testing

- [ ] Regular vulnerability scanning
- [ ] Penetration testing performed
- [ ] DAST (Dynamic Application Security Testing)
- [ ] SAST (Static Application Security Testing)
- [ ] API security testing
- [ ] Fuzz testing
- [ ] Social engineering testing

## Compliance & Documentation

- [ ] Security policies documented
- [ ] Compliance requirements identified
- [ ] Regular security awareness training
- [ ] Vendor security assessment process
- [ ] Asset inventory maintained
- [ ] System architecture documentation
- [ ] Data flow diagrams created and maintained

---

**Note**: This checklist provides a starting point for security audits but is not exhaustive. Security requirements vary based on the nature of systems, data sensitivity, and applicable regulations. 