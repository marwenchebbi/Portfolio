import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="py-24 flex flex-col items-center justify-center text-center">
      <div className="relative w-32 h-32 mb-8">
        <Image
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&h=256&fit=crop"
          alt="Profile"
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Chebbi Marwen</h1>
      <p className="text-xl text-muted-foreground mb-8">Software Engineering Student</p>
      <div className="flex gap-4">
      <Button variant="outline" size="icon" asChild>
  <a
    href="https://github.com/marwenchebbi"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <GithubIcon className="h-5 w-5" />
  </a>
</Button>
<Button variant="outline" size="icon" asChild>
  <a
    href="https://www.linkedin.com/in/marwen-chebbi/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <LinkedinIcon className="h-5 w-5" />
  </a>
</Button>
<Button variant="outline" size="icon" asChild>
  <a
    href="mailto:marwen.chebbi@eniso.u-sousse.tn"
    aria-label="Email"
  >
    <MailIcon className="h-5 w-5" />
  </a>
</Button>

      </div>
    </section>
  );
}