"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      title: "Quest Management",
      description: "Add, edit, complete, and delete your adventures with themed commands",
      icon: "🗺️",
      commands: ["add", "edit", "done", "delete"],
    },
    {
      title: "Adventure Status",
      description: "Track your progress with Uncharted and Discovered quest states",
      icon: "🏆",
      commands: ["list", "list --status"],
    },
    {
      title: "Priority System",
      description: "Organize quests by Low, Medium, and High priority levels",
      icon: "⚡",
      commands: ["--priority High", "--priority Medium"],
    },
    {
      title: "Rich Terminal",
      description: "Beautiful colored output with ASCII art and themed messages",
      icon: "🎨",
      commands: ["Colored tables", "ASCII art", "Themed messages"],
    },
  ]

  const commands = [
    { cmd: 'python indiana.py add "Find the Holy Grail"', desc: "Add a new quest to your journal" },
    { cmd: "python indiana.py list", desc: "View all your current quests" },
    { cmd: "python indiana.py done 1", desc: "Mark quest as discovered" },
    { cmd: "python indiana.py list --priority High", desc: "Filter by priority level" },
    { cmd: 'python indiana.py edit 1 "Updated quest"', desc: "Modify existing quest" },
    { cmd: "python indiana.py delete 1", desc: "Remove quest from journal" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 py-16 relative">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            {/* ASCII Art Header */}
            <div className="font-mono text-primary mb-8 text-sm md:text-base leading-tight">
              <pre className="whitespace-pre-wrap">
                {`    ___           _ _                   _                           
   |_ _|_ __   __| (_) __ _ _ __   __ _  | | ___  _ __   ___  ___    
    | || '_ \\ / _\` | |/ _\` | '_ \\ / _\` | | |/ _ \\| '_ \\ / _ \\/ __|   
    | || | | | (_| | | (_| | | | | (_| | | | (_) | | | |  __/\\__ \\   
   |___|_| |_|\\__,_|_|\\__,_|_| |_|\\__,_| |_|\\___/|_| |_|\\___||___/   
                                                                    
                    🎩 T O - D O   Q U E S T 🎩                    `}
              </pre>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Adventure Awaits!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your boring to-do list into an epic quest journal with this Python CLI application inspired by
              the legendary archaeologist himself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="animate-pulse-glow text-lg px-8 py-3">
                Start Your Adventure
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Quest Features</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Every great adventurer needs the right tools for their journey
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">{feature.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {feature.commands.map((cmd, cmdIndex) => (
                      <Badge key={cmdIndex} variant="secondary" className="text-xs">
                        {cmd}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <span>🚀</span> Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-primary mb-2"># Install dependencies</div>
                  <div className="text-foreground">pip install rich</div>
                  <div className="text-primary mt-4 mb-2"># Start your first quest</div>
                  <div className="text-foreground">python indiana.py add "Find the Lost Ark"</div>
                </div>
                <p className="text-muted-foreground">
                  Get started in seconds with just two simple commands. The adventure begins immediately!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <span>💎</span> Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Beautiful colored terminal output</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Adventure-themed messaging system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>JSON-based persistent storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Priority and deadline management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Powerful filtering and search</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Command Examples</CardTitle>
              <CardDescription className="text-center">
                Master these commands to become a true quest adventurer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {commands.map((command, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <div className="font-mono text-sm text-primary mb-2">{command.cmd}</div>
                    <div className="text-sm text-muted-foreground">{command.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Adventure Messages</CardTitle>
              <CardDescription className="text-center">Every action comes with its own themed response</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl">🗺️</div>
                  <div className="font-semibold text-primary">Quest Added</div>
                  <div className="text-sm text-muted-foreground">"Quest ditambahkan ke jurnal!"</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🏆</div>
                  <div className="font-semibold text-secondary">Quest Completed</div>
                  <div className="text-sm text-muted-foreground">"Quest berhasil ditemukan!"</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">💀</div>
                  <div className="font-semibold text-destructive">Quest Deleted</div>
                  <div className="text-sm text-muted-foreground">"Quest hilang dalam perjalanan..."</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">"It's not the years, honey. It's the mileage." - Indiana Jones</p>
          <p className="text-sm text-muted-foreground">⚡ The adventure continues... Until the next quest! ⚡</p>
        </div>
      </footer>
    </main>
  )
}
