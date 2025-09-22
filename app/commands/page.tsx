"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("basic")

  const commandCategories = {
    basic: {
      title: "Basic Quest Operations",
      icon: "🗺️",
      description: "Essential commands for managing your adventure journal",
      commands: [
        {
          command: "add",
          syntax: 'python indiana.py add "quest description" [--priority LEVEL] [--due DATE]',
          description: "Add a new quest to your adventure journal",
          examples: [
            'python indiana.py add "Find the Holy Grail"',
            'python indiana.py add "Explore ancient temple" --priority High',
            'python indiana.py add "Decode mysterious map" --priority Medium --due 2025-09-30',
          ],
          options: [
            { flag: "--priority", values: "Low, Medium, High", description: "Set quest priority level" },
            { flag: "--due", values: "YYYY-MM-DD", description: "Set quest deadline date" },
          ],
          response: "🗺️ Quest ditambahkan ke jurnal!",
        },
        {
          command: "list",
          syntax: "python indiana.py list [--status STATUS] [--priority LEVEL]",
          description: "Display all quests in a formatted table",
          examples: [
            "python indiana.py list",
            "python indiana.py list --status Uncharted",
            "python indiana.py list --priority High",
            "python indiana.py list --status Discovered --priority Medium",
          ],
          options: [
            { flag: "--status", values: "Uncharted, Discovered", description: "Filter by completion status" },
            { flag: "--priority", values: "Low, Medium, High", description: "Filter by priority level" },
          ],
          response: "Displays formatted quest table with colors",
        },
        {
          command: "done",
          syntax: "python indiana.py done <quest_id>",
          description: "Mark a quest as completed (Discovered)",
          examples: ["python indiana.py done 1", "python indiana.py done 5"],
          options: [],
          response: "🏆 Quest berhasil ditemukan!",
        },
        {
          command: "edit",
          syntax: 'python indiana.py edit <quest_id> "new description" [--priority LEVEL] [--due DATE]',
          description: "Modify an existing quest's details",
          examples: [
            'python indiana.py edit 1 "Updated quest description"',
            'python indiana.py edit 2 "New description" --priority High',
            'python indiana.py edit 3 "Modified quest" --due 2025-10-15',
          ],
          options: [
            { flag: "--priority", values: "Low, Medium, High", description: "Update quest priority" },
            { flag: "--due", values: "YYYY-MM-DD", description: "Update quest deadline" },
          ],
          response: "✏️ Quest berhasil diperbarui!",
        },
        {
          command: "delete",
          syntax: "python indiana.py delete <quest_id>",
          description: "Remove a quest from your journal permanently",
          examples: ["python indiana.py delete 1", "python indiana.py delete 7"],
          options: [],
          response: "💀 Quest hilang dalam perjalanan...",
        },
      ],
    },
    advanced: {
      title: "Advanced Operations",
      icon: "⚡",
      description: "Powerful features for quest management masters",
      commands: [
        {
          command: "help",
          syntax: "python indiana.py help [command]",
          description: "Display help information with ASCII art",
          examples: ["python indiana.py help", "python indiana.py help add", "python indiana.py help list"],
          options: [],
          response: "Shows ASCII art and command documentation",
        },
        {
          command: "stats",
          syntax: "python indiana.py stats",
          description: "Display quest statistics and progress summary",
          examples: ["python indiana.py stats"],
          options: [],
          response: "Shows completion rates and quest breakdown",
        },
        {
          command: "export",
          syntax: "python indiana.py export [--format FORMAT]",
          description: "Export quest data to different formats",
          examples: [
            "python indiana.py export",
            "python indiana.py export --format csv",
            "python indiana.py export --format txt",
          ],
          options: [{ flag: "--format", values: "json, csv, txt", description: "Export file format" }],
          response: "📄 Quest data exported successfully!",
        },
      ],
    },
    filtering: {
      title: "Filtering & Search",
      icon: "🔍",
      description: "Find exactly the quests you're looking for",
      commands: [
        {
          command: "search",
          syntax: 'python indiana.py search "keyword"',
          description: "Search for quests containing specific keywords",
          examples: [
            'python indiana.py search "temple"',
            'python indiana.py search "artifact"',
            'python indiana.py search "urgent"',
          ],
          options: [],
          response: "Shows matching quests with highlighted keywords",
        },
        {
          command: "filter combinations",
          syntax: "python indiana.py list [multiple filters]",
          description: "Combine multiple filters for precise results",
          examples: [
            "python indiana.py list --status Uncharted --priority High",
            "python indiana.py list --priority Medium --status Discovered",
            "python indiana.py list --status Uncharted --priority Low",
          ],
          options: [
            { flag: "Multiple filters", values: "Can be combined", description: "Use multiple filters together" },
          ],
          response: "Filtered quest results based on criteria",
        },
      ],
    },
  }

  const quickReference = [
    { action: "Add quest", command: 'add "description"', shortcut: "a" },
    { action: "List all", command: "list", shortcut: "l" },
    { action: "Complete quest", command: "done <id>", shortcut: "d" },
    { action: "Edit quest", command: 'edit <id> "new"', shortcut: "e" },
    { action: "Delete quest", command: "delete <id>", shortcut: "del" },
    { action: "Show help", command: "help", shortcut: "h" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Command Reference Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Master all the commands to become a true quest management adventurer
            </p>
          </div>

          {/* Quick Reference Card */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <span>⚡</span> Quick Reference
              </CardTitle>
              <CardDescription>Most commonly used commands at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickReference.map((ref, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm">{ref.action}</span>
                      <Badge variant="outline" className="text-xs">
                        {ref.shortcut}
                      </Badge>
                    </div>
                    <div className="font-mono text-xs text-primary">{ref.command}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Command Categories */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {Object.entries(commandCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(commandCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="space-y-8">
                  {/* Category Header */}
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <span className="text-3xl">{category.icon}</span>
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-base">{category.description}</CardDescription>
                    </CardHeader>
                  </Card>

                  {/* Commands */}
                  <div className="space-y-6">
                    {category.commands.map((cmd, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <Badge variant="outline" className="text-primary border-primary">
                              {cmd.command}
                            </Badge>
                            <span className="text-lg">{cmd.description}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {/* Syntax */}
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">Syntax:</h4>
                            <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">{cmd.syntax}</div>
                          </div>

                          {/* Options */}
                          {cmd.options.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-3 text-secondary">Options:</h4>
                              <div className="space-y-2">
                                {cmd.options.map((option, optIndex) => (
                                  <div key={optIndex} className="bg-muted p-3 rounded-lg">
                                    <div className="flex items-center gap-3 mb-1">
                                      <Badge variant="secondary" className="font-mono text-xs">
                                        {option.flag}
                                      </Badge>
                                      <span className="text-sm font-medium">{option.values}</span>
                                    </div>
                                    <div className="text-sm text-muted-foreground">{option.description}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Examples */}
                          <div>
                            <h4 className="font-semibold mb-3 text-primary">Examples:</h4>
                            <div className="space-y-2">
                              {cmd.examples.map((example, exIndex) => (
                                <div key={exIndex} className="bg-muted p-3 rounded-lg font-mono text-sm">
                                  <span className="text-primary">$ </span>
                                  {example}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Response */}
                          <div>
                            <h4 className="font-semibold mb-2 text-secondary">Response:</h4>
                            <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-sm">
                              {cmd.response}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Tips Section */}
          <Card className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Pro Adventurer Tips</CardTitle>
              <CardDescription className="text-center">
                Advanced techniques for quest management mastery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Efficiency Tips:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Use tab completion in your terminal for faster command entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Combine filters to find specific quests quickly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Set priorities when adding quests to stay organized</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Use descriptive quest names for better searchability</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-secondary">Best Practices:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Review your quest list regularly with 'list' command</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Set deadlines for time-sensitive quests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Use High priority sparingly for truly urgent tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Clean up completed quests periodically</span>
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
