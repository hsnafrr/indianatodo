"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  const [activeDemo, setActiveDemo] = useState("add")

  const features = [
    {
      id: "quest-management",
      title: "Quest Management System",
      icon: "🗺️",
      description: "Complete CRUD operations for managing your adventure tasks",
      details: [
        "Add new quests with custom descriptions and priorities",
        "Edit existing quest details and deadlines",
        "Mark quests as completed (Discovered status)",
        "Remove quests that are no longer relevant",
        "Automatic ID assignment and management",
      ],
      commands: [
        { cmd: 'python indiana.py add "Find the Crystal Skull" --priority High', desc: "Create a high-priority quest" },
        { cmd: 'python indiana.py edit 1 "Updated quest description"', desc: "Modify an existing quest" },
        { cmd: "python indiana.py done 1", desc: "Mark quest as completed" },
        { cmd: "python indiana.py delete 1", desc: "Remove quest from journal" },
      ],
    },
    {
      id: "status-tracking",
      title: "Adventure Status System",
      icon: "🏆",
      description: "Track your progress with themed status indicators",
      details: [
        "Uncharted [ ] - Quests waiting to be explored",
        "Discovered [✔] - Successfully completed adventures",
        "Visual status indicators in terminal output",
        "Filter quests by completion status",
        "Progress tracking across all quests",
      ],
      commands: [
        { cmd: "python indiana.py list", desc: "View all quests with status" },
        { cmd: "python indiana.py list --status Uncharted", desc: "Show only incomplete quests" },
        { cmd: "python indiana.py list --status Discovered", desc: "Show only completed quests" },
      ],
    },
    {
      id: "priority-system",
      title: "Priority Management",
      icon: "⚡",
      description: "Organize quests by importance and urgency levels",
      details: [
        "Three priority levels: Low, Medium, High",
        "Color-coded priority indicators in terminal",
        "Filter quests by priority level",
        "Sort quests by priority automatically",
        "Visual priority badges in quest listings",
      ],
      commands: [
        { cmd: 'python indiana.py add "Urgent mission" --priority High', desc: "Create high-priority quest" },
        { cmd: "python indiana.py list --priority High", desc: "Show only high-priority quests" },
        { cmd: "python indiana.py list --priority Medium", desc: "Filter medium-priority quests" },
      ],
    },
    {
      id: "rich-terminal",
      title: "Rich Terminal Experience",
      icon: "🎨",
      description: "Beautiful colored output with ASCII art and themed messages",
      details: [
        "Colorful terminal output using Rich library",
        "ASCII art header on application startup",
        "Themed success and error messages",
        "Formatted tables for quest listings",
        "Adventure-themed response messages",
      ],
      commands: [
        { cmd: "python indiana.py help", desc: "Display help with ASCII art" },
        { cmd: "python indiana.py list", desc: "Show formatted quest table" },
      ],
    },
    {
      id: "data-persistence",
      title: "JSON Data Storage",
      icon: "💾",
      description: "Reliable quest data storage and retrieval system",
      details: [
        "Automatic JSON file creation and management",
        "Persistent storage across application sessions",
        "Backup and recovery capabilities",
        "Human-readable data format",
        "Error handling for file operations",
      ],
      commands: [
        { cmd: "cat quests.json", desc: "View raw quest data" },
        { cmd: "python indiana.py list", desc: "Load and display stored quests" },
      ],
    },
    {
      id: "filtering-search",
      title: "Advanced Filtering",
      icon: "🔍",
      description: "Powerful search and filter capabilities for quest management",
      details: [
        "Filter by quest status (Uncharted/Discovered)",
        "Filter by priority level (Low/Medium/High)",
        "Combine multiple filters for precise results",
        "Search through quest descriptions",
        "Quick access to specific quest subsets",
      ],
      commands: [
        { cmd: "python indiana.py list --status Uncharted --priority High", desc: "High-priority incomplete quests" },
        { cmd: "python indiana.py list --priority Low", desc: "Show low-priority quests only" },
      ],
    },
  ]

  const demoOutputs = {
    add: `🎩 Indiana Jones To-Do Quest 🎩
    ___           _ _                   _                           
   |_ _|_ __   __| (_) __ _ _ __   __ _  | | ___  _ __   ___  ___    
    | || '_ \\ / _\` | |/ _\` | '_ \\ / _\` | | |/ _ \\| '_ \\ / _ \\/ __|   
    | || | | | (_| | | (_| | | | | (_| | | | (_) | | | |  __/\\__ \\   
   |___|_| |_|\\__,_|_|\\__,_|_| |_|\\__,_| |_|\\___/|_| |_|\\___||___/   

🗺️ Quest ditambahkan ke jurnal!
Quest "Find the Crystal Skull" berhasil ditambahkan dengan prioritas High.`,

    list: `┏━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━┓
┃ ID ┃ Quest Description        ┃ Status      ┃ Priority ┃ Due Date   ┃
┡━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━┩
│ 1  │ Find the Crystal Skull   │ [ ] Uncharted │ High     │ 2025-09-25 │
│ 2  │ Explore ancient temple   │ [✔] Discovered │ Medium   │            │
│ 3  │ Decode mysterious map    │ [ ] Uncharted │ Low      │ 2025-09-30 │
└────┴──────────────────────────┴─────────────┴──────────┴────────────┘`,

    done: `🏆 Quest berhasil ditemukan!
Quest #1 "Find the Crystal Skull" telah diselesaikan dan ditandai sebagai Discovered.`,
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quest Features & Capabilities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful features that make Indiana Jones To-Do Quest the ultimate adventure-themed task
              manager
            </p>
          </div>

          {/* Interactive Demo Section */}
          <Card className="mb-16 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Interactive Command Demo</CardTitle>
              <CardDescription className="text-center">
                See how the CLI responds to different commands with themed output
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="add">Add Quest</TabsTrigger>
                  <TabsTrigger value="list">List Quests</TabsTrigger>
                  <TabsTrigger value="done">Complete Quest</TabsTrigger>
                </TabsList>
                <TabsContent value="add" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-mono text-sm text-primary mb-2">
                        $ python indiana.py add "Find the Crystal Skull" --priority High
                      </div>
                    </div>
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre-line">
                      {demoOutputs.add}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="list" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-mono text-sm text-primary mb-2">$ python indiana.py list</div>
                    </div>
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-xs whitespace-pre overflow-x-auto">
                      {demoOutputs.list}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="done" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="font-mono text-sm text-primary mb-2">$ python indiana.py done 1</div>
                    </div>
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre-line">
                      {demoOutputs.done}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Feature Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-3xl">{feature.icon}</span>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Feature Details */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Command Examples */}
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Command Examples:</h4>
                    <div className="space-y-3">
                      {feature.commands.map((command, cmdIndex) => (
                        <div key={cmdIndex} className="bg-muted p-3 rounded-lg">
                          <div className="font-mono text-xs text-primary mb-1">{command.cmd}</div>
                          <div className="text-xs text-muted-foreground">{command.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Adventure Messages Section */}
          <Card className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Adventure Response Messages</CardTitle>
              <CardDescription className="text-center">
                Every action in your quest journal comes with its own themed response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="text-4xl">🗺️</div>
                  <div className="font-semibold text-primary">Quest Added</div>
                  <div className="text-sm text-muted-foreground bg-muted p-2 rounded">
                    "Quest ditambahkan ke jurnal!"
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl">🏆</div>
                  <div className="font-semibold text-secondary">Quest Completed</div>
                  <div className="text-sm text-muted-foreground bg-muted p-2 rounded">"Quest berhasil ditemukan!"</div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl">💀</div>
                  <div className="font-semibold text-destructive">Quest Deleted</div>
                  <div className="text-sm text-muted-foreground bg-muted p-2 rounded">
                    "Quest hilang dalam perjalanan..."
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-4xl">⚡</div>
                  <div className="font-semibold text-primary">Adventure Continues</div>
                  <div className="text-sm text-muted-foreground bg-muted p-2 rounded">"The adventure continues..."</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
