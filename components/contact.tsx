"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setStatus("Failed to send the message. Missing email service configuration.");
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
            <CardDescription>
              Have a question or want to work together? Drop me a message!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button className="w-full" type="submit">
                <SendIcon className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
            {status && <p className="text-center mt-4 text-sm  text-green-600">{status}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
