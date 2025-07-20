"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Msign from "./images/1.png";
import Ebooking from "./images/ebooking.png";
import Credit from "./images/credit.png";
import CryptoWallet from "./images/crypto-wallet.png";
import InvoiceMaker from "./images/invoice-maker.png";



const projects = [
  {
    title: "Crypto Wallet App",
    description:
      "This project is a cross‑platform mobile application designed to manage a custom cryptocurrency within a secure and user‑friendly ecosystem. It allows users to seamlessly send and receive tokens, exchange them with USDT, and view detailed transaction histories in real time. The app features a rewards system through integration with the Trello project management platform.",
    image: CryptoWallet,
    github: "https://github.com/marwenchebbi/",
    demo: "#"
  },
  {
    title: "Credit App",
    description:
      "A semester project developing an application fro managing credit purchases using Spring Boot and ReactJS with secured services and database integration. Includes Docker Compose configuration for local testing with PostgreSQL database and MailDev for email testing.",
    image: Credit,
    github: "https://github.com/marwenchebbi/",
    demo: "#",
    dockerCompose: `services:
  postgres:
    container_name: Credit-db-dt
    image: postgres
    environment:
      POSTGRES_USER: username
      POSTGRES_PASSWORD: password
      PGDATA: /var/lib/postgresql/data
      POSTGRES_DB: credit-db
    volumes:
      - postgres:/data/postgres
    ports:
      - 5432:5432
    networks:
      - creditappbackend-main_credit-app
  mail-dev:
    container_name: mail-Credit-dt
    image: maildev/maildev
    ports:
      - 1080:1080
      - 1025:1025
    networks:
        - creditappbackend-main_credit-app
  credit-app-back:
    container_name: credit-app-back
    image: marwenchebbi/credit-app-back:1.0.4
    ports:
      - 8882:8882
    depends_on:
      - postgres
    environment:
      SPRING_DATASOURCE_URL : jdbc:postgresql://postgres:5432/credit-db
      SPRING_DATASOURCE_USERNAME: username
      SPRING_DATASOURCE_PASSWORD: password
      SPRING_MAIL_HOST: mail-dev
      SPRING_MAIL_PORT: 1025
    networks:
      - creditappbackend-main_credit-app
  credit-app-front:
    container_name: credit-app-front
    image: marwenchebbi/credit-app-front:1.0.2
    ports:
      - 3000:3000
    depends_on:
      - credit-app-back
    environment:
      REACT_APP_API_URL: http://localhost:8882
    networks:
      - creditappbackend-main_credit-app

networks:
  creditappbackend-main_credit-app:
    driver: bridge
volumes:
  postgres:
    driver: local`
  },
  {
    title: "E-Booking Platform",
    description:
      "An online booking platform with Spring Boot and PostgreSQL backend, featuring flight and hotel reservation services. Includes Docker Compose configuration for local testing with PostgreSQL database. Note: Add '/admin' or '/user' to the URL path to access the application.",
    image: Ebooking,
    github: "https://github.com/marwenchebbi/",
    demo: "#",
    dockerCompose: `services:
  postgres:
    container_name: postgres-sql-dt-e-booking
    image: postgres
    environment:
      POSTGRES_USER: username
      POSTGRES_PASSWORD: password
      POSTGRES_DB: e-booking-db
      PGDATA: /var/lib/postgresql/data
    volumes:
      - postgres-data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - myNetwork

  e-booking-back:
    container_name: spring-boot-app
    image: marwenchebbi/e-booking-back:latest
    ports:
      - "8075:8075"
    depends_on:
      - postgres
    restart: unless-stopped
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/e-booking-db
      SPRING_DATASOURCE_USERNAME: username
      SPRING_DATASOURCE_PASSWORD: password
    networks:
      - myNetwork
  e-booking-front:
    container_name: e-booking-front
    image: marwenchebbi/e-booking-front:latest
    ports:
      - "4200:4200"
    depends_on:
      - e-booking-back
    networks:
      - myNetwork

networks:
  myNetwork:
    driver: bridge

volumes:
  postgres-data:
    driver: local`
  },
  {
    title: "Invoice Maker",
    description:
      "A web-based invoice creation tool with a clean, user-friendly interface. Features include customizable billing information, itemized lists, tax and discount calculations, multiple currency support, and professional invoice generation.",
    image: InvoiceMaker,
    github: "https://github.com/marwenchebbi/invoice-maker",
    demo: "https://invoice-maker.netlify.app/"
  },
  {
    title: "Msign Website",
    description:
      "Improved website accessibility and performance for TunBraille, adding WCAG-compliant features with HTML, CSS, and JavaScript. Implemented CI/CD pipeline using GitHub Actions to automatically build and deploy the application to Firebase hosting.",
    image: Msign,
    github: "https://github.com/marwenchebbi/MSign_Company",
    demo: "https://msignproject-231a4.web.app/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo !== "#" && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.dockerCompose && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(project.dockerCompose);
                        alert('Docker Compose configuration copied to clipboard!');
                      } catch (err) {
                        console.error('Failed to copy to clipboard:', err);
                        alert('Failed to copy to clipboard. Please copy manually from the console.');
                        console.log('Docker Compose configuration:', project.dockerCompose);
                      }
                    }}
                  >
                    📋 Docker Compose
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}