import { Button } from "./components/Button";
import { Greeting } from "./components/Greeting";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-100">
      
      
      <div>
        <Projects />
      </div>
    </main>
  );
}
