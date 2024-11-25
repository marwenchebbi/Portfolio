export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            I am a passionate Software Engineering student, currently in my 3rd year at the National Engineering School of Sousse. 
            I have solid experience in developing distributed applications, particularly those based on microservices architectures, 
            using Spring Boot for the backend and Angular for the frontend.
          </p>
          <p>
            I am driven by the creation of innovative solutions and the continuous improvement of my skills, especially in designing 
            modular architectures, integrating databases, and implementing secure solutions with Spring Security.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Spring Boot",
              "Angular",
              "Microservices",
              "Spring Security",
              "MySQL",
              "TypeScript",
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
