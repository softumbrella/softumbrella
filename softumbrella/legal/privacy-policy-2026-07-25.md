# Soft Umbrella Privacy Policy

Last updated: July 25, 2026

## Contents

- [Introduction](#introduction)
- [Services covered](#services-covered-by-this-policy)
- [Our role](#our-role)
- [Information collected or processed through the Services](#information-collected-or-processed-through-the-services)
- [Local processing and device storage](#local-processing-and-device-storage)
- [Software operation and user responsibility](#software-operation-and-user-responsibility)
- [Product-specific privacy practices](#product-specific-privacy-practices)
- [JipConfig for macOS](#jipconfig-for-macos)
- [How we use information](#how-we-use-information)
- [Legal bases](#legal-bases-for-processing-eea-uk-and-similar-jurisdictions)
- [How we share or disclose information](#how-we-share-or-disclose-information)
- [Sensitive information](#sensitive-information)
- [International processing](#international-processing)
- [Cookies and similar technologies](#cookies-and-similar-technologies)
- [Browser privacy signals](#browser-privacy-signals)
- [Data retention](#data-retention)
- [Security](#security)
- [Your privacy rights and choices](#your-privacy-rights-and-choices)
- [US state privacy disclosures](#us-state-privacy-disclosures)
- [Children and minors](#children-and-minors)
- [Changes to this policy](#changes-to-this-policy)
- [Contact us](#contact-us)

## Introduction

Soft Umbrella ("we," "our," or "us") respects your privacy. This Privacy Policy describes how we collect, use, disclose, and otherwise process information in connection with our public website at https://www.softumbrella.com; our mobile, desktop, and macOS applications; product-specific app features; and related support, help, account, update, or download pages we operate for those products (collectively, the "Services"). Unless we post a separate notice for a specific offering, this policy applies to these Services.

Our primary operations are based in the United States. If you access the Services from other jurisdictions, local laws may provide additional rights and protections.

## Services covered by this policy

This policy applies to personal information we process in connection with:

- Soft Umbrella website - pages and content on https://www.softumbrella.com, including information you submit when you contact us or sign up for communications you choose to sign up for there.
- Mobile applications - our Android and iOS applications and their in-app features.
- Desktop and macOS applications - including JipConfig and other desktop applications we distribute directly, together with their local app features and any related update, download, support, or help pages.
- Related support and account pages - support, help, account, update, or download pages we operate for the Services, where personal information is collected as described in this policy.

We may update or discontinue features from time to time. Unless we provide a separate privacy notice for a new offering, updates remain covered by this policy.

## Our role

Soft Umbrella acts as the data controller for personal information for which we determine the purposes and means of processing. Some application data remains solely on your device and is not received or controlled by Soft Umbrella.

## Information collected or processed through the Services

The types of information Soft Umbrella collects or that may be processed through the Services depend on how you use the Services, the product or feature you use, and the choices you make. We may collect information that identifies or relates to you ("personal information") as well as information that does not identify you directly. Categories may include:

- Information you provide to Soft Umbrella - for example, name, email address, username, authentication and account sign-in information, transaction and billing-related information associated with purchases or subscriptions, messages you send us, support materials such as screenshots, logs, configuration information, or diagnostic information, content and information you submit to us or store through features that transmit information to Soft Umbrella, and any other information you choose to submit through forms, email, or in-app flows.
- Automatically collected data - for example, IP address, device and browser or app version, operating system, referring URLs, requested URLs, pages or screens viewed, timestamps, download requests, crash or diagnostic logs, performance data, usage metrics, security or rate-limiting events, and similar technical data collected through the Services, including server logs and comparable technologies in our apps, where those features are implemented or enabled.
- Information from third parties - for example, data from app stores, analytics providers, authentication providers you choose to use, hosting and infrastructure providers, or payment processors, as permitted by law.
- Derived information - for example, structured or processed outputs, saved settings, and similar results generated from content you provide or from your use of features in the Services.

Payment transactions may be processed by third-party app stores or payment processors, and we do not receive full payment card numbers unless expressly stated at the point of collection.

Please do not send passwords, API keys, tokens, `.env` contents, or other sensitive developer information to support unless we specifically request it through an approved secure process.

If we collect a materially different category of personal information, we will provide additional notice at or before collection where required by applicable law.

## Local processing and device storage

Some Soft Umbrella applications process and store information locally on your device. Local app data may include settings, saved content, configuration, run history, logs, or other information you enter into the app. Product-specific sections below explain when a product is designed for local processing, what it stores locally, and whether the app itself transmits that information to Soft Umbrella or a third party.

Information that remains only on your device may not be available to Soft Umbrella, and we may not be able to access, export, correct, or delete it for you. Programs, commands, scripts, websites, or services that you launch, connect, or configure may process information independently according to their own behavior and privacy practices.

## Software operation and user responsibility

Some Soft Umbrella applications allow you to configure or initiate commands, scripts, integrations, or third-party software. User-directed operations may modify or delete data, alter system settings, consume computing resources, disclose information to a destination you select, or produce other intended or unintended effects. You are responsible for reviewing your inputs and configurations, maintaining appropriate backups, and using suitable account permissions and access controls.

Any warning, security check, validation, classification, or suggested action provided by a Service is designed to assist you and is not a guarantee that the Service will identify or prevent every unsafe, malicious, or unintended operation. The absence of a warning does not mean that an operation is safe. Except where a Service expressly blocks an operation, you decide whether to proceed.

To the extent permitted by applicable law, Soft Umbrella is not responsible for loss or damage caused by commands, scripts, configurations, content, integrations, or third-party software that you select, provide, connect, or run, and you assume the risks associated with those user-directed operations. This notice does not limit rights or remedies that cannot be limited under applicable law.

## Product-specific privacy practices

### JipConfig for macOS

JipConfig is a macOS developer tool for configuring and launching local development services. As of the "Last updated" date of this Privacy Policy, JipConfig's current implementation runs its core features locally on your Mac. The current implementation of JipConfig does not include account sign-in, analytics, automatic crash reporting, license validation, cloud sync, or automatic update checks, and the JipConfig app itself does not send your launch profiles, shell commands, environment-variable values, file paths, process output, run history, or command-check findings to Soft Umbrella or a third party.

JipConfig can launch commands, scripts, applications, and tools that you configure. Those commands run outside Soft Umbrella's control and may access files, use environment variables, write logs, or contact external services according to their own behavior.

Before every service start or restart, JipConfig analyzes the configured command locally for selected patterns that may indicate a security risk. It does not execute the command as part of the scan or send the command or findings over a network. JipConfig may display warnings that require your review and blocks a limited set of critical destructive patterns. This pattern-based feature is not antivirus, malware analysis, an endpoint-security product, or a security sandbox; it may not detect every unsafe command, obfuscated operation, or harmful result. A command receiving no warning is not a representation that the command is safe.

JipConfig stores app configuration locally on your Mac. This may include service names, shell commands, launch options, profile names, environment-variable names and values, selected file paths, app settings, and run-history information such as process identifiers, timestamps, exit codes, peak CPU and memory usage, captured `stdout` and `stderr`, and command-check outcomes and finding labels. Unless protected as described below, this information is stored in locally readable JSON files within JipConfig's Application Support directory for your macOS user account. Service commands, process output, run history, and general app settings are not encrypted by JipConfig. Local run output can contain sensitive information if a process prints it.

When you enable protection for an environment profile, JipConfig encrypts that profile's variable payload at rest using AES-GCM. The encryption key is stored in the macOS Keychain. Protected-profile encryption does not encrypt service commands, process output, run history, profile metadata, or other app data. When you separately mark an environment-variable value as secret, JipConfig stores that value in the macOS Keychain rather than in its profile JSON data.

JipConfig requires Touch ID or your Mac password before protected profile variables can be viewed, edited, or used to launch a service. Authentication is performed locally by macOS. JipConfig does not receive your Touch ID biometric data or Mac account password. Protected profiles can be locked manually and are also designed to lock after inactivity or when the Mac sleeps.

Secret and protected-profile values are loaded locally when needed and passed to the service process you choose to launch. For Terminal launches, JipConfig may temporarily create a locally stored launcher script in a restricted temporary directory that contains environment exports, including secret values, and attempts to delete that script before your command runs.

JipConfig does not currently scan, import, or transmit `.env` file contents. If a future version adds `.env` scanning or import, we will describe how that feature works and what is stored before or when you use it.

JipConfig uses local macOS services such as Keychain, Terminal, process APIs, system resource APIs, pasteboard, and unified logging. Local diagnostic logs may include limited operational information such as service names, process identifiers, launch paths, and error messages. JipConfig does not automatically upload those logs.

If you contact Soft Umbrella for JipConfig support, we will process the information you choose to send, such as your email address, message, screenshots, logs, or configuration details. Please review support materials before sending them and remove secrets, tokens, `.env` contents, or other sensitive developer data that you do not want to share.

You can delete services, environment profiles, and run history inside JipConfig. JipConfig is designed to delete Keychain secrets associated with an environment profile when you delete that profile. The shared protected-profile encryption key may remain in Keychain until it is separately removed. Removing the app from your Mac may not automatically remove local Application Support files, Keychain items, pasteboard contents, macOS logs, backups, or saved application state. For instructions on locating and removing JipConfig's local files and Keychain items, contact us.

When you download JipConfig or visit our website or support pages, Soft Umbrella and its hosting or infrastructure providers, such as Cloudflare where used, may receive standard server-log information such as IP address, user agent, requested URL, request timestamp, download request, security or rate-limiting events, and similar technical data as described elsewhere in this Privacy Policy.

## How we use information

We use collected information for purposes reasonably necessary to provide, operate, secure, improve, and support the Services, and as otherwise permitted by applicable law. Uses may include:

- Providing, operating, maintaining, securing, and improving the website, apps, and related support, help, account, update, or download pages;
- Processing content you provide to deliver the Services and related outputs, syncing or storing your content where you enable those features, and maintaining and improving the accuracy and reliability of those features;
- Communicating with you about the Services, including transactional and support messages, and where permitted by law, promotional communications where we offer them;
- Understanding usage, performance, and trends to guide product development and quality assurance, where we implement or enable analytics, diagnostics, or similar product-improvement features;
- Remembering your settings and preferences, organizing saved content, and similar in-app or on-site functionality you use;
- Detecting, investigating, and helping prevent fraud, abuse, security incidents, or harmful activity;
- Complying with law, responding to lawful requests, and enforcing our terms and policies;
- Internal business purposes such as accounting, auditing, and record-keeping;
- Other purposes we describe at the time of collection or for which we obtain your consent where required.

Soft Umbrella does not currently use content received through the Services to train Soft Umbrella's generalized AI or machine-learning models. If that changes, we will update this Privacy Policy and provide any additional notice or consent required by applicable law.

We may use aggregated or de-identified information that cannot reasonably be used to identify you for lawful purposes such as analytics and product improvement.

## Legal bases for processing (EEA, UK, and similar jurisdictions)

Where required by law, we rely on one or more legal bases to process personal information, including: performance of a contract; legitimate interests (such as security, product improvement, and business operations); compliance with legal obligations; and consent where required. When we rely on consent, you can withdraw it as permitted by law.

## How we share or disclose information

We do not currently sell personal information or share personal information for cross-context behavioral advertising. Where implemented or enabled, we may use analytics tools to understand how people use the Services and improve them. We may share or disclose information in the situations below, subject to applicable law and any choices or controls we offer you:

- Service providers - with vendors, contractors, and service providers who perform services on our behalf (for example hosting and infrastructure providers, including Cloudflare where used, analytics, customer support tools, email delivery, security, and payment processing), under contractual or other arrangements we consider appropriate for the nature of the services they provide.
- Platform providers - for desktop applications, platform providers such as Apple may process information through operating-system services, code signing, notarization, security checks, and crash or diagnostic mechanisms enabled at the operating-system level. Where an application is distributed through a platform-operated store, that platform may also process app-download and transaction information.
- Business transfers - in connection with a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, or in the event of insolvency, where information may be transferred as part of that process.
- Legal and safety - when we believe disclosure is required or appropriate to comply with law, regulation, legal process, or governmental requests; to enforce our agreements or policies; or to protect our rights, property, safety, or the rights, property, or safety of our users or others.
- With your direction or consent - when you ask us to share information, use third-party services you connect, or when you otherwise consent.

We may also disclose information to auditors, insurers, and authorities as reasonably necessary for legal, compliance, tax, accounting, security, and corporate governance purposes.

Third-party services are governed by their own privacy policies and practices.

## Sensitive information

Developer tools can involve sensitive technical material such as credentials, API keys, access tokens, secrets, private file paths, logs, and configuration files. You should review and remove sensitive material before sharing screenshots, logs, configuration files, command output, or similar support materials with us.

## International processing

We may process, store, and transfer information in the United States and in other countries where our service providers operate. Those countries may have data protection laws that differ from those where you live. Where required by applicable law, we will use appropriate safeguards, such as contractual protections and transfer mechanisms recognized by applicable law.

## Cookies and similar technologies

Our public website is not designed to set cookies for analytics, advertising, or preference management. Hosting, security, infrastructure, or other service providers may use cookies or similar technologies for security, fraud prevention, load balancing, diagnostics, or similar operational purposes where those services are implemented or enabled. Our apps and third-party service providers may use comparable technologies where necessary to operate features such as authentication, security, diagnostics, crash reporting, update delivery, or service functionality, where those features are implemented or enabled for a particular product. If our use of website cookies or similar tracking technologies changes, we will update this Privacy Policy and provide any notice or choices required by law.

## Browser privacy signals

We do not currently sell personal information or share personal information for cross-context behavioral advertising. Because there is no universally accepted standard for responding to browser Do Not Track signals, our website may not respond to those signals. Where applicable law requires us to recognize a legally valid opt-out preference signal, we will process it as required.

## Data retention

We retain information for as long as reasonably necessary for the purposes described in this policy, including to provide the Services, resolve disputes, comply with legal, tax, and accounting requirements, enforce agreements, and maintain backups or archival copies, unless a longer or shorter period is required or permitted by law.

Retention periods vary by category. We retain support communications for as long as needed to address the request and maintain appropriate business records, security and download logs for periods determined by operational and security needs, privacy request records for as long as needed to administer the request and demonstrate compliance, and transaction records for periods required by tax, accounting, and legal obligations.

For products that store data locally on your device, local data generally remains on that device until you delete it in the app, remove the local files, or delete related Keychain or operating-system records. Uninstalling an app may not remove all local support files, logs, saved application state, backups, pasteboard contents, or Keychain items.

## Security

We implement reasonable technical and organizational measures designed to protect information appropriate to the nature of the processing. No method of transmission or storage is completely secure; we cannot guarantee absolute security.

## Your privacy rights and choices

Depending on your location and applicable law, you may have rights regarding your personal information (for example access, correction, deletion, portability, restriction or objection to certain processing, or withdrawal of consent where processing is consent-based). The availability and scope of these rights vary. To submit a request or question, contact us using the information below. We will respond in accordance with applicable law. You may also have the right to lodge a complaint with a supervisory authority where you live or work, where that right exists.

- Marketing controls - Where we offer promotional communications, you may opt out using the unsubscribe mechanism in those messages.
- App and device settings - Where technologies in our apps can be limited, you may adjust relevant settings in the app or on your device.
- Account controls - You may update account information through your account or by contacting us.
- Authorized agents - Where permitted by law, an authorized agent may submit requests on your behalf, subject to verification.
- Non-discrimination - We will not unlawfully discriminate against you for exercising privacy rights.

How to submit a privacy request: To exercise privacy rights available to you under applicable law, email privacy@softumbrella.com with one of these subject lines (or a substantially similar subject): "Privacy Request - Access", "Privacy Request - Delete", "Privacy Request - Correct", or "Privacy Request - Appeal". Include your full name, email address used with the Services, state/country of residence, and enough detail for us to process your request. We may verify requests by matching information to your account or prior contacts with us, and we may deny or limit requests where permitted by law.

For local-only product data stored on your device, Soft Umbrella may not have access to the data needed to delete or export it for you. We can provide instructions for locating and deleting local app data, but you may need to remove local files or Keychain items on your device.

## US state privacy disclosures

Depending on where you live, US state law may provide additional rights regarding your personal information (for example rights to know, access, delete, correct, or obtain a copy, or rights relating to certain types of processing where those laws apply).

We do not currently sell personal information or share personal information for cross-context behavioral advertising. We may use service providers for analytics, security, hosting, payments, customer support, and similar operational purposes where those services are implemented or enabled.

You may submit requests by contacting us at privacy@softumbrella.com. We may need to verify your identity before processing requests. Where required by law, you may appeal a denied request by replying to our response with "Appeal" in the subject line.

Describe your request with enough detail for us to evaluate and process it under applicable law.

## Children and minors

Our Services are not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us and we will take steps to delete it.

Where applicable law provides additional protections for minors (for example individuals under 16 in certain jurisdictions), we apply those protections as required by law, including additional consent or restricted processing where applicable.

## Changes to this policy

We may update this Privacy Policy from time to time. When we do, we will post the revised version here and update the "Last updated" date. Where required by law, we will provide additional notice or obtain consent.

## Contact us

Soft Umbrella LLC is the controller for personal information described in this Privacy Policy for which we determine the purposes and means of processing.

If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@softumbrella.com.

If you are contacting us to exercise privacy rights, include enough information for us to identify your relationship with Soft Umbrella and process your request.
