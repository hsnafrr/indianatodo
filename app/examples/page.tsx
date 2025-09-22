"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ExamplesPage() {
  const [activeWorkflow, setActiveWorkflow] = useState("daily")

  const workflows = [
    {
      id: "daily",
      title: "Daily Quest Management",
      description: "Organize your daily tasks with adventure themes",
      scenario: "Managing daily work and personal tasks",
      steps: [
        {
          command: 'python indiana.py add "Review project proposals" --priority High',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Add high-priority work task",
        },
        {
          command: 'python indiana.py add "Buy groceries" --priority Medium',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Add medium-priority personal task",
        },
        {
          command: 'python indiana.py add "Call mom" --priority Low',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Add low-priority personal task",
        },
        {
          command: "python indiana.py list --priority High",
          output: "Shows only high-priority quests in formatted table",
          explanation: "Focus on urgent tasks first",
        },
        {
          command: "python indiana.py done 1",
          output: "🏆 Quest berhasil ditemukan!",
          explanation: "Mark completed task as discovered",
        },
      ],
    },
    {
      id: "project",
      title: "Project Planning Workflow",
      description: "Break down large projects into manageable quests",
      scenario: "Planning a website development project",
      steps: [
        {
          command: 'python indiana.py add "Design website mockups" --priority High',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Start with design phase",
        },
        {
          command: 'python indiana.py add "Set up development environment" --priority High',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Prepare development tools",
        },
        {
          command: 'python indiana.py add "Implement homepage" --priority Medium',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Begin development work",
        },
        {
          command: 'python indiana.py add "Add contact form" --priority Medium',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Add interactive features",
        },
        {
          command: 'python indiana.py add "Deploy to production" --priority Low',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Final deployment step",
        },
        {
          command: "python indiana.py list --status Uncharted",
          output: "Shows all incomplete project tasks",
          explanation: "Track remaining work",
        },
      ],
    },
    {
      id: "learning",
      title: "Learning Adventure",
      description: "Track your educational goals and progress",
      scenario: "Learning Python programming",
      steps: [
        {
          command: 'python indiana.py add "Complete Python basics course" --priority High',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Start with fundamentals",
        },
        {
          command: 'python indiana.py add "Build first Python project" --priority Medium',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Apply knowledge practically",
        },
        {
          command: 'python indiana.py add "Learn web frameworks" --priority Medium',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Advance to specialized topics",
        },
        {
          command: 'python indiana.py add "Contribute to open source" --priority Low',
          output: "🗺️ Quest ditambahkan ke jurnal!",
          explanation: "Give back to community",
        },
        {
          command: "python indiana.py done 1",
          output: "🏆 Quest berhasil ditemukan!",
          explanation: "Celebrate learning milestones",
        },
      ],
    },
  ]

  const useCases = [
    {
      title: "Personal Task Management",
      icon: "🏠",
      description: "Organize household chores, personal goals, and daily routines",
      examples: ["Clean the house", "Plan weekend trip", "Read 30 pages of book", "Exercise for 30 minutes"],
    },
    {
      title: "Work Project Tracking",
      icon: "💼",
      description: "Manage professional tasks, deadlines, and project milestones",
      examples: [
        "Prepare quarterly report",
        "Review team proposals",
        "Schedule client meetings",
        "Update project documentation",
      ],
    },
    {
      title: "Learning & Development",
      icon: "📚",
      description: "Track educational goals, courses, and skill development",
      examples: ["Complete online course", "Practice coding challenges", "Read technical articles", "Attend workshop"],
    },
    {
      title: "Creative Projects",
      icon: "🎨",
      description: "Manage artistic endeavors, writing projects, and creative goals",
      examples: ["Write blog post", "Design new logo", "Edit video project", "Plan photo shoot"],
    },
  ]

  const advancedTips = [
    {
      title: "Batch Operations",
      tip: "Use shell scripting to add multiple related quests at once",
      example: `#!/bin/bash
# Add multiple project tasks
python indiana.py add "Research competitors" --priority High
python indiana.py add "Create wireframes" --priority High
python indiana.py add "Set up database" --priority Medium
python indiana.py add "Write documentation" --priority Low`,
    },
    {
      title: "Priority Planning",
      tip: "Start each day by reviewing high-priority uncharted quests",
      example: "python indiana.py list --status Uncharted --priority High",
    },
    {
      title: "Progress Tracking",
      tip: "Regularly check your completion rate to stay motivated",
      example: "python indiana.py list | grep -c 'Discovered'",
    },
    {
      title: "Quest Maintenance",
      tip: "Weekly review to update priorities and remove outdated quests",
      example: "python indiana.py list --status Uncharted",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Real-World Quest Examples
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how to use Indiana Jones To-Do Quest in various scenarios with practical workflows and examples
            </p>
          </div>

          {/* Workflow Examples */}
          <Card className="mb-16 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete Workflow Examples</CardTitle>
              <CardDescription className="text-center">Step-by-step guides for common use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeWorkflow} onValueChange={setActiveWorkflow} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="daily">Daily Tasks</TabsTrigger>
                  <TabsTrigger value="project">Project Planning</TabsTrigger>
                  <TabsTrigger value="learning">Learning Goals</TabsTrigger>
                </TabsList>

                {workflows.map((workflow) => (
                  <TabsContent key={workflow.id} value={workflow.id} className="mt-6">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">{workflow.title}</h3>
                        <p className="text-muted-foreground mb-4">{workflow.description}</p>
                        <Badge variant="outline" className="mb-6">
                          Scenario: {workflow.scenario}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        {workflow.steps.map((step, index) => (
                          <div key={index} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">Step {index + 1}</Badge>
                              <span className="text-sm text-muted-foreground">{step.explanation}</span>
                            </div>
                            <div className="bg-muted p-3 rounded font-mono text-sm">
                              <span className="text-primary">$ </span>
                              {step.command}
                            </div>
                            <div className="bg-black text-green-400 p-3 rounded font-mono text-sm">{step.output}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Use Cases Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{useCase.icon}</div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center mb-4">{useCase.description}</CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Example Quests:</h4>
                      <ul className="space-y-1">
                        {useCase.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="text-primary">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advanced Tips */}
          <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Advanced Usage Tips</CardTitle>
              <CardDescription className="text-center">
                Pro tips to maximize your quest management efficiency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {advancedTips.map((tip, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-primary">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.tip}</p>
                    <div className="bg-muted p-3 rounded font-mono text-xs">{tip.example}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* JSON Data Structure Example */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quest Data Structure</CardTitle>
              <CardDescription className="text-center">
                Understanding how your quests are stored in JSON format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`[
  {
    "id": 1,
    "quest": "Find the Crystal Skull",
    "status": "Uncharted",
    "priority": "High",
    "due_date": "2025-09-25",
    "created_at": "2025-09-15T10:30:00Z"
  },
  {
    "id": 2,
    "quest": "Explore ancient temple",
    "status": "Discovered",
    "priority": "Medium",
    "due_date": "",
    "created_at": "2025-09-14T15:45:00Z"
  },
  {
    "id": 3,
    "quest": "Decode mysterious map",
    "status": "Uncharted",
    "priority": "Low",
    "due_date": "2025-09-30",
    "created_at": "2025-09-13T09:15:00Z"
  }
]`}</pre>
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Field Descriptions:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>
                      <strong>id:</strong> Unique quest identifier
                    </li>
                    <li>
                      <strong>quest:</strong> Quest description text
                    </li>
                    <li>
                      <strong>status:</strong> "Uncharted" or "Discovered"
                    </li>
                    <li>
                      <strong>priority:</strong> "Low", "Medium", or "High"
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Optional Fields:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>
                      <strong>due_date:</strong> Deadline in YYYY-MM-DD format
                    </li>
                    <li>
                      <strong>created_at:</strong> Timestamp when quest was added
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
