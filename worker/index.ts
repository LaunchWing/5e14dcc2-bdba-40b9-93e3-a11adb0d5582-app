// Auto-generated entrypoint for Cloudflare Worker

import { IdeationToolsBackendHandler } from './api/IdeationToolsBackend';
import { BusinessPlanningBackendHandler } from './api/BusinessPlanningBackend';
import { WebsiteCreationBackendHandler } from './api/WebsiteCreationBackend';
import { MarketingStrategiesBackendHandler } from './api/MarketingStrategiesBackend';
import { OperationalGuidanceBackendHandler } from './api/OperationalGuidanceBackend';
import { UserAccountManagementBackendHandler } from './api/UserAccountManagementBackend';

const INDEX_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LaunchMate - Your AI Co-Founder for Seamless Startup Success</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-white text-black">
    <header class="bg-green-700 text-white p-4 flex justify-between items-center">
        <div class="flex items-center">
            <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-eeM7RLe3Wv2HZ7Toub47POas/user-rnGwZEmjnwoUoF8lEvadvt0O/img-aEJz2w4MUMifYWANp2nbDLp4.png?st=2025-07-28T03%3A08%3A32Z&se=2025-07-28T05%3A08%3A32Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=cc612491-d948-4d2e-9821-2683df3719f5&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-27T22%3A21%3A16Z&ske=2025-07-28T22%3A21%3A16Z&sks=b&skv=2024-08-04&sig=e%2BO6cLT0zIYSqUvSdXWCN7i6sKE0Hr8yUr3T5VSNuc4%3D" alt="LaunchMate Logo" class="h-12 mr-3">
            <h1 class="text-xl font-bold">LaunchMate</h1>
        </div>
        <nav>
            <ul class="flex space-x-4">
                <li><a href="#features" class="hover:text-gold-500">Features</a></li>
                <li><a href="#pricing" class="hover:text-gold-500">Pricing</a></li>
                <li><a href="#contact" class="hover:text-gold-500">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="p-8">
        <section id="hero" class="text-center my-10">
            <h2 class="text-3xl font-bold text-green-800">Your AI Co-Founder for Seamless Startup Success</h2>
            <p class="text-lg mt-4">LaunchMate helps you turn your business ideas into reality with AI-driven tools and guidance.</p>
            <a href="#signup" class="bg-gold-500 text-white py-2 px-4 rounded mt-6 inline-block">Get Started</a>
        </section>

        <section id="features" class="my-16">
            <h3 class="text-2xl font-bold text-green-800 mb-6">Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Ideation Tools</h4>
                    <p>AI-driven tools to help brainstorm and refine business ideas.</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Business Planning Assistance</h4>
                    <p>Guidance and templates for creating business plans.</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Website Creation</h4>
                    <p>Automated website creation with customizable templates.</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Marketing Strategies</h4>
                    <p>AI-generated marketing strategies tailored to the business type.</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Operational Guidance</h4>
                    <p>Step-by-step guidance on operational execution and management.</p>
                </div>
            </div>
        </section>

        <section id="pricing" class="my-16">
            <h3 class="text-2xl font-bold text-green-800 mb-6">Pricing</h3>
            <p class="text-center">Choose the plan that best suits your needs.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Basic Plan</h4>
                    <p>Access to essential tools and guidance.</p>
                    <p class="mt-4 font-bold">$19/month</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Pro Plan</h4>
                    <p>All features included, with priority support.</p>
                    <p class="mt-4 font-bold">$49/month</p>
                </div>
                <div class="bg-white shadow-md p-6 rounded">
                    <h4 class="text-xl font-semibold text-green-700">Enterprise Plan</h4>
                    <p>Custom solutions for large businesses.</p>
                    <p class="mt-4 font-bold">Contact us for pricing</p>
                </div>
            </div>
        </section>

        <section id="contact" class="my-16">
            <h3 class="text-2xl font-bold text-green-800 mb-6">Contact Us</h3>
            <form id="contact-form" class="max-w-xl mx-auto">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" class="w-full border border-gray-300 p-2 rounded" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="w-full border border-gray-300 p-2 rounded" required>
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="5" class="w-full border border-gray-300 p-2 rounded" required></textarea>
                </div>
                <button type="submit" class="bg-green-700 text-white py-2 px-4 rounded">Send Message</button>
            </form>
        </section>
    </main>

    <footer class="bg-green-700 text-white p-4 text-center">
        <p>&copy; 2023 LaunchMate. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
`;
const STYLE_CSS = `
body {
    font-family: 'Arial', sans-serif;
}

.bg-gold-500 {
    background-color: #FFD700;
}

.text-gold-500 {
    color: #FFD700;
}

.nav-link:hover {
    color: #FFD700;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #2E8B57;
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.3);
}
`;
const SCRIPT_JS = `
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        fetch('/functions/api/handler.ts', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            alert('There was an error sending your message. Please try again later.');
            console.error('Error:', error);
        });
    });
});
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path === '/') return new Response(INDEX_HTML, { headers: { 'Content-Type': 'text/html' } });
    if (path === '/style.css') return new Response(STYLE_CSS, { headers: { 'Content-Type': 'text/css' } });
    if (path === '/script.js') return new Response(SCRIPT_JS, { headers: { 'Content-Type': 'application/javascript' } });
    if (path === '/api/IdeationToolsBackend') return IdeationToolsBackendHandler(request);
    if (path === '/api/BusinessPlanningBackend') return BusinessPlanningBackendHandler(request);
    if (path === '/api/WebsiteCreationBackend') return WebsiteCreationBackendHandler(request);
    if (path === '/api/MarketingStrategiesBackend') return MarketingStrategiesBackendHandler(request);
    if (path === '/api/OperationalGuidanceBackend') return OperationalGuidanceBackendHandler(request);
    if (path === '/api/UserAccountManagementBackend') return UserAccountManagementBackendHandler(request);
    return new Response('Not found', { status: 404 });
  }
};
