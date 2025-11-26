# Module 1: Get started with web development

In this module, you are introduced to web development. You'll learn about the different types of web developer roles
and the responsibilities of front-end, back-end and full-stack developers. You will get a streamlined overview of the
core technologies of HTML, CSS and JavaScript and explore the concepts that underpin how the internet works.
Furthermore, you will be able to access hands-on exercises to edit a website.

After completing this module, you will be able to:

* Describe the web developer job role.
* Distinguish between front-end, back-end and full-stack developers.
* Explain how data moves through the internet.
* Describe the technologies that underpin the internet.

## Describe the web developer job role

A Web Developer is a technology professional responsible for designing, building, and maintaining websites and web
applications. A Web Developer may collaborate with other developers, designers, content creators, and project managers.

## Distinguish between front-end, back-end and full-stack developers

* Front-End Developer: Focuses on the user interface ensuring websites are responsive (work well on all devices). Uses
  HTML, CSS, and JavaScript within frameworks/libraries.
* Back-End Developer: Focuses in the server, application, and database using back-end languages.
* Full-Stack Developer: Combination of both front-end and back-end.

## Explain how data moves through the internet

* Client requests data
  * Open a browser and type a URL (e.g. www.example.com) or click a link.
  * The client device (computer, phone, etc.) becomes the client sending a request for data.
* DNS resolution to find the server
  * URLs are easy to remember, but the internet works with IP addresses (e.g., 93.184.216.34).
  * The browser sends the domain name to a DNS server (like a phone book).
  * The DNS server returns the IP address of the web server that hosts the site.
* Routing the data request
  * The request is broken into small packets.
  * Each packet travels across the internet through multiple routers, which act like traffic managers.
  * Routers use a set of rules and maps to decide the best path for each packet.
* Packets Travel Across Networks
  * Packets may pass through several networks (source ISP, backbone networks, destination ISP) before reaching the server.
* Server receives the request
  * The web server hosting www.example.com receives the request.
  * The server processes it, fetches the needed data (like an HTML page or image), and prepares a response.
  * This response is also broken into packets and sent back to the client.
* Client receives the response
  * The response packets travel back, possibly along a different route.
  * The client receives and reassembles them in the correct order.
  * The browser interprets the data and displays the website.

## Describe the technologies that underpin the internet

* Physical Infrastructure
  * Data Centers with servers that host websites, apps, cloud services, etc.
* Internet Protocols
  * Standardized rules that define how data is formatted, sent, and received.
  * Internet Layer (Routing & Addressing): Internet Protocol (IPv4 and IPv6) assigns unique addresses (IP addresses)
    to every device.
  * Transport Layer (Reliable Communication): TCP ensures data arrives complete and in order. UDPis faster but doesn't
    guarantee delivery (used for audio, video, gaming).
* Domain Name System (DNS)
  * Converts human-friendly domain names into IP addresses. Acts like the phone book of the internet.
* Application Layer Protocols
  * These define how applications exchange data over the internet.
  * HTTP / HTTPS (HyperText Transfer Protocol): Used to load web pages; HTTPS is the secure version with encryption.
  * FTP / SFTP (File Transfer Protocol): For transferring files between computers.
  * SMTP, POP3, IMAP: Used for sending and receiving emails.
  * WS / WSS (WebSockets): Enables real-time, two-way communication (e.g., chat apps).
  * DNS (again): Is both a service and a protocol that resolves domains.
* Security Technologies
  * TLS/SSL (Transport Layer Security): Encrypts data sent over the internet to protect privacy and prevent tampering.
  * Firewalls, VPNs: Protect data and infrastructure from unauthorized access or attacks.
* Cloud Infrastructure & Content Delivery
  * CDNs (Content Delivery Networks): Distribute web content closer to users geographically to reduce latency.
  * Cloud Providers (AWS, Azure, Google Cloud): Offer scalable computing power, storage, and services.
* Packet Switching
  * Data is broken into small packets, sent independently, and reassembled at the destination for improved efficiency
    and resilience.

## Additional Resources

* HTTP Overview (Mozilla)
  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
* Introduction to Networking by Dr.Charles R Severance
  * https://www.amazon.com/Introduction-Networking-How-Internet-Works/dp/1511654945/
* Chrome Developer Tools Overview (Google)
  * https://developer.chrome.com/docs/devtools/overview/
* Firefox Developer Tools User Docs  (Mozilla)
  * https://firefox-source-docs.mozilla.org/devtools-user/index.html
* Getting Started with Visual Studio Code  (Microsoft)
  * https://code.visualstudio.com/docs