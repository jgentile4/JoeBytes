import React, { useEffect } from 'react'; // Import React and useEffect
import { Card, CardContent } from "@/components/ui/card"; // Import Card components
import { Button } from "@/components/ui/button"; // Import Button component

export default function JoeBytesHome() {
  useEffect(() => {
    // This script is for adding the Tidio chatbot
   // const script = document.createElement("script");
   // script.src = "//code.tidio.co/m8h58rif2olt6ajcbxfts3y4ntxuhym8.js"; 
   // script.async = true;
  //  document.body.appendChild(script);                                                     fix once tested
  }, []); // Empty dependency array means it runs only once when the component mounts

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-950 p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">JoeBytes</h1>
          <nav className="space-x-6">
            <a href="#services" className="hover:text-blue-300">Services</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-300">Repairing the Future, One Device at a Time.</h2>
        <p className="mb-6 text-gray-300">Fast, affordable, and expert IT repair services by JoeBytes.</p>
        <Button className="bg-blue-500 hover:bg-blue-600">Book a Repair</Button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-blue-300">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Laptop Repair (All Brands)",
              "Kid Devices / Chromebooks Repair",
              "Desktop PC Repair & Tune-Ups",
              "Screen Replacement (Laptops)",
              "Operating System Install / Reinstall",
              "Hardware Upgrades (RAM, SSD, etc.)",
              "Slow Computer Fixes",
              "Printer Setup & Troubleshooting",
              "Network Setup / Wi-Fi Issues",
              "Remote Support"
            ].map((service, index) => (
              <Card key={index} className="bg-gray-800 border border-gray-700">
                <CardContent className="p-4 text-white">{service}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-gray-300">
          <h3 className="text-3xl font-bold mb-6 text-blue-300">About JoeBytes</h3>
          <p>
            JoeBytes is your go-to solution for fast, professional, and affordable IT repair. Whether it’s fixing a kid’s Chromebook or upgrading your desktop, Joe brings years of experience and a passion for tech to every job.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-gray-300">
          <h3 className="text-3xl font-bold mb-6 text-blue-300">Get in Touch</h3>
          <form 
            action="https://formsubmit.co/josephgentile391@outlook.com" 
            method="POST" 
            className="grid gap-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded bg-gray-800 border border-gray-700" />
            <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded bg-gray-800 border border-gray-700" />
            <textarea name="message" placeholder="How can we help you?" rows="4" required className="p-3 rounded bg-gray-800 border border-gray-700"></textarea>
            <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-gray-950 text-gray-500">
        © {new Date().getFullYear()} JoeBytes. All rights reserved.
      </footer>
    </div>
  );
}
