export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            I am a recent Software Engineering graduate from the National Engineering School of Sousse, passionate about developing 
            scalable and efficient solutions. I have experience in collaborative and personal projects, including web and mobile 
            applications, with a strong adherence to best practices and eagerness to contribute to innovative software solutions.
          </p>
          <p>
            My expertise spans full-stack development, blockchain technology, and modern web frameworks. I have successfully 
            implemented cross-platform mobile applications, microservices architectures, and CI/CD pipelines. I am particularly 
            interested in blockchain development, smart contracts, and creating user-friendly applications that solve real-world problems.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "React Native",
              "NestJS",
              "Spring Boot",
              "Angular",
              "React",
              "TypeScript",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Blockchain",
              "Web3",
              "Truffle",
              "Ganache",
              "Spring Security",
              "Tailwind CSS",
              "GitHub Actions",
              "Firebase",
              "REST API",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-muted p-4 rounded-lg text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
