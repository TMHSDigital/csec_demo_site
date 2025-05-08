# Security Testing Guide

This guide provides step-by-step instructions for using the cybersecurity tools featured on the main site to test the vulnerabilities in our designated test environment.

## Prerequisites

- Basic understanding of web security concepts
- Featured tools installed on your system
- Legal authorization (you are the owner of the site or an authorized tester)

## 1. Reconnaissance with Nmap

### Port and Service Discovery

```bash
# Basic scan of the domain
nmap -A tmhsdigtal.github.io

# Scan with version detection
nmap -sV tmhsdigtal.github.io

# Scan for specific web vulnerabilities
nmap --script "http-*" tmhsdigtal.github.io
```

### What to Look For

- Open ports and running services
- Server software and versions
- Potential security misconfigurations
- Unusual open ports or services

## 2. Web Vulnerability Testing with OWASP ZAP

### Setting Up the Test

1. Launch OWASP ZAP
2. Enter the URL in the quick start panel: `https://tmhsdigtal.github.io/test-environment.html`
3. Click "Attack" to perform an automated scan

### Manual Testing (XSS)

1. Navigate to the XSS test section on the test page
2. In ZAP, turn on the HUD (Heads Up Display)
3. Right-click on the input field and select "Open in Request Editor"
4. Try various XSS payloads:
   ```
   <script>alert('XSS')</script>
   <img src="x" onerror="alert('XSS')">
   ```

### Manual Testing (SQL Injection)

1. Navigate to the SQL Injection test section
2. In ZAP, intercept the form submission
3. Try standard SQL injection payloads:
   ```
   admin' OR '1'='1
   ' OR 1=1 --
   ```

## 3. Web Traffic Analysis with Wireshark

### Capturing and Analyzing Traffic

1. Start Wireshark and select your network interface
2. Apply a display filter for the domain: `http.host contains "tmhsdigtal.github.io"`
3. Navigate to the test environment page in your browser
4. Observe the HTTP/HTTPS traffic

### Analyzing Headers and Responses

1. Look for the security headers in responses
2. Check for information disclosure in headers
3. Examine cookie properties and session management

## 4. Advanced Testing with Burp Suite

### Proxy Configuration

1. Configure your browser to use Burp Suite as a proxy (default: 127.0.0.1:8080)
2. Add the domain to your scope in Target settings
3. Enable proxy interception in Burp

### Testing IDOR Vulnerability

1. Navigate to the IDOR test section
2. Intercept the request when clicking "Get User Profile"
3. Modify the user ID parameter
4. Forward the request and observe the results

### Testing Unvalidated Redirects

1. Go to the redirect test section
2. Enter a URL and intercept the request
3. Analyze how the redirect is implemented
4. Test with different malicious URLs

## 5. Documenting Findings

After discovering vulnerabilities, document them using the provided templates:

1. Use the [Vulnerability Report Template](VULNERABILITY_REPORT_TEMPLATE.md)
2. Include screenshots, payloads used, and steps to reproduce
3. Suggest proper remediation techniques
4. Maintain evidence of your authorized testing

## 6. Scope Limitations

Remember these important limitations:

- Only test the designated domain (tmhsdigtal.github.io)
- Focus primarily on the test-environment.html page
- Do not perform DoS attacks
- Do not attempt to compromise GitHub Pages infrastructure
- Stop testing if you discover a vulnerability in the main site (not the test page)

## 7. Legal Considerations

Your testing is explicitly authorized under these conditions:

- You are the site owner or have permission
- Testing is limited to the scope defined in the security policy
- All activities are non-destructive
- No user data is compromised or exfiltrated

## Learning Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Security Academy](https://portswigger.net/web-security)
- [SANS Security Resources](https://www.sans.org/security-resources/) 