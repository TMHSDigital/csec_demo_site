// Sample data for cybersecurity tools
const toolsData = [
  {
    id: "nmap",
    name: "Nmap",
    category: "network",
    categoryDisplay: "Network Analysis",
    description: "Nmap (Network Mapper) is a free and open-source utility for network discovery and security auditing. It uses raw IP packets to determine what hosts are available on the network, what services they are offering, what operating systems they are running, and more.",
    installCommand: "sudo apt install nmap  # Debian/Ubuntu\nsudo dnf install nmap  # Fedora/RHEL\nbrew install nmap      # macOS",
    usageExample: "# Basic network scan\nnmap 192.168.1.0/24\n\n# Aggressive scan with OS detection\nnmap -A 192.168.1.1\n\n# Scan specific ports\nnmap -p 22,80,443 example.com\n\n# Scan this website (legal for testing)\nnmap -A yoursite.github.io",
    documentationUrl: "https://nmap.org/docs.html"
  },
  {
    id: "wireshark",
    name: "Wireshark",
    category: "network",
    categoryDisplay: "Network Analysis",
    description: "Wireshark is the world's foremost network protocol analyzer. It lets you capture and interactively browse the traffic running on a computer network. It is the de facto standard across many industries and educational institutions.",
    installCommand: "sudo apt install wireshark  # Debian/Ubuntu\nsudo dnf install wireshark  # Fedora/RHEL\nbrew install --cask wireshark  # macOS",
    usageExample: "# Launch Wireshark GUI\nwireshark\n\n# Capture packets on interface eth0\ntshark -i eth0\n\n# Capture and save to file\ntshark -i eth0 -w capture.pcap",
    documentationUrl: "https://www.wireshark.org/docs/"
  },
  {
    id: "metasploit",
    name: "Metasploit Framework",
    category: "pentest",
    categoryDisplay: "Penetration Testing",
    description: "The Metasploit Framework is a powerful open-source platform for developing, testing, and executing exploits. It provides a complete environment for penetration testing and exploit development.",
    installCommand: "sudo apt install metasploit-framework  # Debian/Ubuntu\nsudo dnf install metasploit-framework  # Fedora/RHEL\nbrew install metasploit  # macOS",
    usageExample: "# Start Metasploit console\nmsfconsole\n\n# Search for exploits\nmsf> search apache\n\n# Use a specific exploit\nmsf> use exploit/multi/http/apache_mod_cgi_bash_env_exec",
    documentationUrl: "https://docs.metasploit.com/"
  },
  {
    id: "volatility",
    name: "Volatility",
    category: "forensics",
    categoryDisplay: "Forensics",
    description: "Volatility is an open-source memory forensics framework for incident response and malware analysis. It's used for extracting digital artifacts from volatile memory (RAM) samples.",
    installCommand: "pip install volatility3  # Install Volatility 3\n\n# For Volatility 2\ngit clone https://github.com/volatilityfoundation/volatility.git\ncd volatility\npython setup.py install",
    usageExample: "# List available plugins\nvolatility -h\n\n# Identify the operating system profile\nvolatility -f memory.dmp imageinfo\n\n# List running processes\nvolatility -f memory.dmp --profile=Win10x64_19041 pslist",
    documentationUrl: "https://volatility3.readthedocs.io/en/latest/"
  },
  {
    id: "burpsuite",
    name: "Burp Suite",
    category: "pentest",
    categoryDisplay: "Penetration Testing",
    description: "Burp Suite is an integrated platform for performing security testing of web applications. Its various tools work seamlessly together to support the entire testing process, from initial mapping to analysis of web applications.",
    installCommand: "# Download from official website\n# https://portswigger.net/burp/communitydownload\n\n# Kali Linux\nsudo apt install burpsuite",
    usageExample: "# Launch Burp Suite\njava -jar burpsuite_community.jar\n\n# Configure browser to use proxy\n# Set proxy to 127.0.0.1:8080 in browser settings\n\n# You can legally test this site with Burp Suite\n# Add this domain to your scope in Target settings",
    documentationUrl: "https://portswigger.net/burp/documentation"
  },
  {
    id: "autopsy",
    name: "Autopsy",
    category: "forensics",
    categoryDisplay: "Forensics",
    description: "Autopsy is a digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools. It is used by law enforcement, military, and corporate examiners to investigate what happened on a computer.",
    installCommand: "# Download from official website\n# https://www.autopsy.com/download/\n\n# Debian/Ubuntu\nsudo apt install autopsy",
    usageExample: "# Launch Autopsy\nautopsy\n\n# Create a new case\n# Follow GUI instructions to add data sources",
    documentationUrl: "http://sleuthkit.org/autopsy/docs/user-docs/latest/"
  },
  {
    id: "owasp-zap",
    name: "OWASP ZAP",
    category: "pentest",
    categoryDisplay: "Penetration Testing",
    description: "OWASP Zed Attack Proxy (ZAP) is a free, open-source penetration testing tool being maintained by the Open Web Application Security Project. ZAP is designed specifically for testing web applications and is both flexible and extensible.",
    installCommand: "# Download from official website\n# https://www.zaproxy.org/download/\n\n# Kali Linux\nsudo apt install zaproxy\n\n# Using Docker\ndocker pull owasp/zap2docker-stable",
    usageExample: "# Launch ZAP\nzaproxy\n\n# Quick scan using the command line\nzap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' https://yoursite.github.io\n\n# Authenticated scan\nzap-cli spider https://yoursite.github.io",
    documentationUrl: "https://www.zaproxy.org/docs/"
  }
]; 