"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstallationPage() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(stepIndex)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const installationSteps = [
    {
      title: "Download the Application",
      description: "Get the Indiana Jones CLI files",
      commands: ["# Download from GitHub or copy the files", "# Ensure you have: indiana.py, requirements.txt"],
      details: "Download the main application files including the Python script and requirements file.",
    },
    {
      title: "Install Python Dependencies",
      description: "Install the Rich library for beautiful terminal output",
      commands: ["pip install rich", "# Or install from requirements file:", "pip install -r requirements.txt"],
      details: "The Rich library provides colored terminal output, tables, and beautiful formatting.",
    },
    {
      title: "Verify Installation",
      description: "Test that everything is working correctly",
      commands: ["python indiana.py help", "# You should see the ASCII art and help menu"],
      details: "This command will display the Indiana Jones ASCII art and available commands.",
    },
    {
      title: "Create Your First Quest",
      description: "Add your first adventure to the quest journal",
      commands: [
        'python indiana.py add "Find the Lost Ark" --priority High',
        "# Your first quest is now in the journal!",
      ],
      details: "This creates your first quest with high priority and saves it to quests.json.",
    },
  ]

  const systemRequirements = [
    { requirement: "Python 3.6+", status: "Required", description: "Core Python installation" },
    { requirement: "Rich Library", status: "Required", description: "For colored terminal output" },
    { requirement: "JSON Support", status: "Built-in", description: "For quest data storage" },
    { requirement: "Terminal/Command Line", status: "Required", description: "To run CLI commands" },
  ]

  const troubleshooting = [
    {
      problem: "Command not found: python",
      solution: "Try using 'python3' instead of 'python', or ensure Python is in your PATH",
      commands: ["python3 indiana.py help", "# Or check Python installation:", "python --version"],
    },
    {
      problem: "ModuleNotFoundError: No module named 'rich'",
      solution: "Install the Rich library using pip",
      commands: ["pip install rich", "# Or try with pip3:", "pip3 install rich"],
    },
    {
      problem: "Permission denied when creating quests.json",
      solution: "Ensure you have write permissions in the current directory",
      commands: ["# Check current directory permissions:", "ls -la", "# Or run from your home directory"],
    },
    {
      problem: "ASCII art not displaying correctly",
      solution: "Ensure your terminal supports UTF-8 encoding",
      commands: ["# Check terminal encoding", "echo $LANG", "# Should show UTF-8 support"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Installation & Setup Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Get your Indiana Jones CLI adventure started in just a few simple steps
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <span>🚀</span> Quick Start
              </CardTitle>
              <CardDescription>Get up and running in under 2 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-yellow-400"># Quick installation commands</div>
                <div>pip install rich</div>
                <div>python indiana.py add "My first quest" --priority High</div>
                <div>python indiana.py list</div>
                <div className="text-yellow-400"># That's it! Your adventure begins! 🎩</div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Installation Steps */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Step-by-Step Installation</CardTitle>
              <CardDescription>Follow these detailed steps to set up your quest management system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {installationSteps.map((step, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-primary border-primary">
                        Step {index + 1}
                      </Badge>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="bg-muted p-4 rounded-lg mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Commands:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(step.commands.join("\n"), index)}
                          className="text-xs"
                        >
                          {copiedStep === index ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                      <div className="font-mono text-sm space-y-1">
                        {step.commands.map((cmd, cmdIndex) => (
                          <div
                            key={cmdIndex}
                            className={cmd.startsWith("#") ? "text-muted-foreground" : "text-primary"}
                          >
                            {cmd}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.details}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Requirements */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">System Requirements</CardTitle>
              <CardDescription>Make sure your system meets these requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {systemRequirements.map((req, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <div className="font-semibold">{req.requirement}</div>
                      <div className="text-sm text-muted-foreground">{req.description}</div>
                    </div>
                    <Badge variant={req.status === "Required" ? "default" : "secondary"}>{req.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Troubleshooting</CardTitle>
              <CardDescription>Common issues and their solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="0" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  {troubleshooting.map((_, index) => (
                    <TabsTrigger key={index} value={index.toString()} className="text-xs">
                      Issue {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {troubleshooting.map((issue, index) => (
                  <TabsContent key={index} value={index.toString()} className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-destructive mb-2">Problem:</h4>
                        <p className="text-sm bg-destructive/10 p-3 rounded">{issue.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                        <p className="text-sm mb-3">{issue.solution}</p>
                        <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                          {issue.commands.map((cmd, cmdIndex) => (
                            <div
                              key={cmdIndex}
                              className={cmd.startsWith("#") ? "text-muted-foreground" : "text-primary"}
                            >
                              {cmd}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready for Adventure?</CardTitle>
              <CardDescription className="text-center">
                Your quest management system is now ready to use!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-2xl">📚</div>
                  <div className="font-semibold">Learn Commands</div>
                  <div className="text-sm text-muted-foreground">Explore all available commands and options</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🗺️</div>
                  <div className="font-semibold">Create Quests</div>
                  <div className="text-sm text-muted-foreground">Start adding your tasks and adventures</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">⚡</div>
                  <div className="font-semibold">Begin Adventure</div>
                  <div className="text-sm text-muted-foreground">Start managing your tasks like a true adventurer</div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground italic">
                  "Fortune and glory, kid. Fortune and glory." - Indiana Jones
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
