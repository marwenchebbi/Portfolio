import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Msign from "./images/1.png";
import Ebooking from "./images/ebooking.png";
import Credit from "./images/credit.png"



const projects = [
  {
    title: "Credit App",
    description:
      "A semester project developing an application fro managing credit purchases using Spring Boot and ReactJS with secured services and database integration.",
    image: Credit,
    github: "https://github.com/marwenchebbi/",
    demo: "#"
  },
  {
    title: "E-Booking Platform",
    description:
      "An online booking platform with Spring Boot and PostgreSQL backend, featuring flight and hotel reservation services.",
    image: Ebooking,
    github: "https://github.com/marwenchebbi/",
    demo: "#"
  },
  {
    title: "Msign Website",
    description:
      "Improved website accessibility and performance for TunBraille, adding WCAG-compliant features with HTML, CSS, and JavaScript.",
    image: Msign,
    github: "https://github.com/marwenchebbi/MSign_Company",
    demo: "https://tunbraille.com"
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
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}