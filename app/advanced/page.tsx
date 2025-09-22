"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function AdvancedPage() {
  const integrationExamples = [
    {
      title: "Shell Scripting Integration",
      description: "Automate quest management with shell scripts",
      code: `#!/bin/bash
# Daily quest setup script
echo "🎩 Setting up today's adventure..."

# Add morning routine quests
python indiana.py add "Check emails" --priority High
python indiana.py add "Review daily goals" --priority High
python indiana.py add "Team standup meeting" --priority Medium

# Show today's high-priority quests
echo "📋 Today's high-priority quests:"
python indiana.py list --priority High --status Uncharted

echo "⚡ Adventure begins!"`,
      usage: "Save as daily_setup.sh, make executable with chmod +x, run with ./daily_setup.sh",
    },
    {
      title: "Cron Job Automation",
      description: "Schedule automatic quest management tasks",
      code: `# Add to crontab with: crontab -e

# Daily quest reminder at 9 AM
0 9 * * * cd /path/to/quest && python indiana.py list --status Uncharted --priority High

# Weekly quest cleanup on Sundays at 8 PM
0 20 * * 0 cd /path/to/quest && python indiana.py list --status Discovered

# Monthly quest archive (custom script)
0 0 1 * * cd /path/to/quest && ./archive_completed_quests.sh`,
      usage: "Add these lines to your crontab for automated quest management",
    },
    {
      title: "Git Integration",
      description: "Version control your quest data",
      code: `#!/bin/bash
# Quest backup and version control script

# Initialize git repo (run once)
git init
git add quests.json
git commit -m "Initial quest journal"

# Daily backup script
DATE=$(date +"%Y-%m-%d")
git add quests.json
git commit -m "Quest update: $DATE"

# Push to remote backup
git push origin main`,
      usage: "Keep your quest history safe with version control",
    },
  ]

  const customizations = [
    {
      title: "Custom Quest Categories",
      description: "Extend the application with custom quest types",
      implementation: "Add category field to JSON structure and modify list filtering",
      example: `{
  "id": 1,
  "quest": "Complete project proposal",
  "status": "Uncharted",
  "priority": "High",
  "category": "Work",
  "due_date": "2025-09-25"
}`,
    },
    {
      title: "Quest Templates",
      description: "Create reusable quest templates for common tasks",
      implementation: "Store templates in separate JSON file and add template command",
      example: `# Templates file (templates.json)
{
  "daily_standup": {
    "quest": "Attend daily standup meeting",
    "priority": "Medium",
    "category": "Work"
  },
  "code_review": {
    "quest": "Review team code submissions",
    "priority": "High",
    "category": "Development"
  }
}`,
    },
    {
      title: "Quest Dependencies",
      description: "Link quests that depend on each other",
      implementation: "Add depends_on field to track quest relationships",
      example: `{
  "id": 3,
  "quest": "Deploy to production",
  "depends_on": [1, 2],
  "status": "Uncharted",
  "priority": "Low"
}`,
    },
  ]

  const workflowPatterns = [
    {
      title: "Getting Things Done (GTD)",
      description: "Implement GTD methodology with quest management",
      steps: [
        "Use 'Inbox' priority for initial capture",
        "Process quests weekly to assign proper priorities",
        "Use contexts as quest categories (calls, computer, errands)",
        "Regular review of all uncharted quests",
      ],
      commands: [
        'python indiana.py add "Call client about proposal" --priority Inbox',
        "python indiana.py list --priority Inbox",
        'python indiana.py edit 1 "Call client about proposal" --priority High',
      ],
    },
    {
      title: "Pomodoro Technique Integration",
      description: "Combine time management with quest tracking",
      steps: [
        "Break large quests into 25-minute chunks",
        "Use quest descriptions to indicate time estimates",
        "Track completed pomodoros in quest notes",
        "Review and adjust time estimates",
      ],
      commands: [
        'python indiana.py add "Write report (2 pomodoros)" --priority High',
        'python indiana.py edit 1 "Write report (1/2 pomodoros completed)"',
        "python indiana.py done 1",
      ],
    },
    {
      title: "Agile Sprint Planning",
      description: "Use quests for sprint planning and tracking",
      steps: [
        "Create quests for each user story",
        "Use priorities to indicate story points",
        "Track sprint progress with status updates",
        "Review completed quests at sprint end",
      ],
      commands: [
        'python indiana.py add "User login functionality" --priority High',
        'python indiana.py add "Password reset feature" --priority Medium',
        "python indiana.py list --status Discovered",
      ],
    },
  ]

  const apiExtensions = [
    {
      title: "Web API Wrapper",
      description: "Create a REST API around the CLI functionality",
      code: `from flask import Flask, jsonify, request
import subprocess
import json

app = Flask(__name__)

@app.route('/api/quests', methods=['GET'])
def get_quests():
    result = subprocess.run(['python', 'indiana.py', 'list'], 
                          capture_output=True, text=True)
    # Parse and return JSON response
    return jsonify({"quests": parse_quest_output(result.stdout)})

@app.route('/api/quests', methods=['POST'])
def add_quest():
    data = request.json
    cmd = ['python', 'indiana.py', 'add', data['quest']]
    if data.get('priority'):
        cmd.extend(['--priority', data['priority']])
    
    subprocess.run(cmd)
    return jsonify({"status": "success"})`,
      usage: "Run with Flask to provide HTTP API access to quest management",
    },
    {
      title: "Slack Bot Integration",
      description: "Manage quests directly from Slack",
      code: `from slack_bolt import App
import subprocess

app = App(token="your-bot-token")

@app.command("/quest-add")
def add_quest_command(ack, command):
    ack()
    quest_text = command['text']
    subprocess.run(['python', 'indiana.py', 'add', quest_text])
    return f"🗺️ Quest '{quest_text}' added to your journal!"

@app.command("/quest-list")
def list_quests_command(ack, command):
    ack()
    result = subprocess.run(['python', 'indiana.py', 'list'], 
                          capture_output=True, text=True)
    return f"📋 Your current quests:\\n{result.stdout}"`,
      usage: "Deploy as Slack app to manage quests from team channels",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Advanced Usage & Integrations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock the full potential of Indiana Jones To-Do Quest with advanced workflows, integrations, and
              customizations
            </p>
          </div>

          {/* Integration Examples */}
          <Card className="mb-16 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">System Integrations</CardTitle>
              <CardDescription className="text-center">
                Connect your quest management with other tools and systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {integrationExamples.map((integration, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">{integration.title}</h3>
                      <p className="text-muted-foreground">{integration.description}</p>
                    </div>
                    <div className="bg-black text-green-400 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
                      <pre>{integration.code}</pre>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <strong>Usage:</strong> {integration.usage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Workflow Patterns */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Productivity Workflow Patterns</CardTitle>
              <CardDescription className="text-center">
                Implement popular productivity methodologies with quest management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="gtd" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="gtd">GTD Method</TabsTrigger>
                  <TabsTrigger value="pomodoro">Pomodoro</TabsTrigger>
                  <TabsTrigger value="agile">Agile Sprint</TabsTrigger>
                </TabsList>

                {workflowPatterns.map((pattern, index) => (
                  <TabsContent key={index} value={pattern.title.toLowerCase().split(" ")[0]} className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{pattern.title}</h3>
                        <p className="text-muted-foreground mb-4">{pattern.description}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">Implementation Steps:</h4>
                          <ol className="space-y-2">
                            {pattern.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-2 text-sm">
                                <Badge variant="outline" className="text-xs">
                                  {stepIndex + 1}
                                </Badge>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-secondary">Example Commands:</h4>
                          <div className="space-y-2">
                            {pattern.commands.map((command, cmdIndex) => (
                              <div key={cmdIndex} className="bg-muted p-2 rounded font-mono text-xs">
                                {command}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Customization Options */}
          <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Customization & Extensions</CardTitle>
              <CardDescription className="text-center">
                Modify and extend the application to fit your specific needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {customizations.map((customization, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-primary">{customization.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{customization.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Implementation:</h4>
                        <p className="text-sm">{customization.implementation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Example:</h4>
                        <div className="bg-muted p-2 rounded font-mono text-xs">
                          <pre>{customization.example}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* API Extensions */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">API & Service Extensions</CardTitle>
              <CardDescription className="text-center">
                Build web services and integrations around the CLI core
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {apiExtensions.map((extension, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">{extension.title}</h3>
                      <p className="text-muted-foreground">{extension.description}</p>
                    </div>
                    <div className="bg-black text-green-400 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
                      <pre>{extension.code}</pre>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <strong>Usage:</strong> {extension.usage}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Performance & Scaling Tips</CardTitle>
              <CardDescription className="text-center">
                Optimize your quest management for large-scale usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">Data Management:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Archive completed quests monthly to separate files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Use database storage for large quest collections (SQLite, PostgreSQL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Implement quest indexing for faster searches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Add pagination for large quest lists</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">System Optimization:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Cache frequently accessed quest data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Use async operations for file I/O</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Implement lazy loading for quest details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Add configuration file for user preferences</span>
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
