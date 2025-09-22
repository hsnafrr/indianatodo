"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function TroubleshootingPage() {
  const commonIssues = [
    {
      issue: "Command not found: python",
      category: "Installation",
      severity: "high",
      symptoms: ["Terminal shows 'python: command not found'", "Script doesn't execute when running python indiana.py"],
      solutions: [
        {
          title: "Install Python",
          steps: [
            "Download Python from python.org",
            "Make sure to check 'Add Python to PATH' during installation",
            "Restart your terminal/command prompt",
            "Verify installation with: python --version",
          ],
        },
        {
          title: "Use python3 instead",
          steps: [
            "Try running: python3 indiana.py instead of python indiana.py",
            "On some systems, Python 3 is accessed via python3 command",
          ],
        },
      ],
    },
    {
      issue: "ModuleNotFoundError: No module named 'rich'",
      category: "Dependencies",
      severity: "high",
      symptoms: ["Error when running any command", "Import error for rich library"],
      solutions: [
        {
          title: "Install Rich library",
          steps: [
            "Run: pip install rich",
            "If pip is not found, try: python -m pip install rich",
            "For Python 3 specifically: pip3 install rich",
          ],
        },
        {
          title: "Virtual Environment Setup",
          steps: [
            "Create virtual environment: python -m venv quest_env",
            "Activate it: source quest_env/bin/activate (Linux/Mac) or quest_env\\Scripts\\activate (Windows)",
            "Install rich: pip install rich",
            "Run the application from within the virtual environment",
          ],
        },
      ],
    },
    {
      issue: "JSON file corruption or invalid format",
      category: "Data",
      severity: "medium",
      symptoms: [
        "JSONDecodeError when running list command",
        "Quests not loading properly",
        "Application crashes when accessing quest data",
      ],
      solutions: [
        {
          title: "Reset quest data",
          steps: [
            "Backup current file: cp quests.json quests_backup.json",
            "Delete corrupted file: rm quests.json",
            "Run any command to recreate empty quest file",
            "Manually restore valid quests from backup if needed",
          ],
        },
        {
          title: "Fix JSON manually",
          steps: [
            "Open quests.json in a text editor",
            "Validate JSON format using online JSON validator",
            "Fix syntax errors (missing commas, brackets, quotes)",
            "Ensure proper array structure with valid quest objects",
          ],
        },
      ],
    },
    {
      issue: "Permission denied when creating/modifying quests.json",
      category: "Permissions",
      severity: "medium",
      symptoms: [
        "PermissionError when adding or modifying quests",
        "Cannot write to quest file",
        "Application works but changes don't persist",
      ],
      solutions: [
        {
          title: "Fix file permissions",
          steps: [
            "Check current permissions: ls -la quests.json",
            "Make file writable: chmod 644 quests.json",
            "Ensure you own the file: chown $USER quests.json",
          ],
        },
        {
          title: "Run from writable directory",
          steps: [
            "Move indiana.py to your home directory or Documents folder",
            "Ensure you have write permissions in the current directory",
            "Avoid running from system directories or read-only locations",
          ],
        },
      ],
    },
    {
      issue: "Quest IDs not sequential or duplicated",
      category: "Data Integrity",
      severity: "low",
      symptoms: [
        "Quest IDs skip numbers",
        "Duplicate quest IDs in the list",
        "Confusion when referencing quests by ID",
      ],
      solutions: [
        {
          title: "Rebuild quest IDs",
          steps: [
            "Backup your quests: cp quests.json quests_backup.json",
            "Edit quests.json manually to fix ID sequence",
            "Ensure IDs start from 1 and increment by 1",
            "Remove any duplicate entries",
          ],
        },
      ],
    },
  ]

  const performanceIssues = [
    {
      title: "Slow quest loading with large datasets",
      description: "Application becomes slow when managing hundreds of quests",
      solutions: [
        "Consider archiving completed quests to a separate file",
        "Regularly clean up old or irrelevant quests",
        "Use filtering options to work with smaller subsets",
      ],
    },
    {
      title: "Terminal output formatting issues",
      description: "Tables don't display correctly or colors are missing",
      solutions: [
        "Ensure your terminal supports ANSI colors",
        "Try a different terminal application",
        "Update Rich library to latest version: pip install --upgrade rich",
      ],
    },
  ]

  const preventiveMeasures = [
    {
      title: "Regular Backups",
      description: "Protect your quest data from loss",
      steps: [
        "Copy quests.json to a backup location weekly",
        "Use version control (git) to track changes",
        "Consider cloud storage for automatic backups",
      ],
    },
    {
      title: "Environment Management",
      description: "Keep your Python environment clean and organized",
      steps: [
        "Use virtual environments for Python projects",
        "Keep dependencies up to date",
        "Document your setup for easy reproduction",
      ],
    },
    {
      title: "Data Validation",
      description: "Maintain clean and valid quest data",
      steps: [
        "Regularly review and clean up old quests",
        "Use consistent naming conventions",
        "Validate JSON format periodically",
      ],
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Troubleshooting Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solve common issues and keep your quest adventures running smoothly
            </p>
          </div>

          {/* Emergency Help */}
          <Alert className="mb-8 border-2 border-primary/20">
            <AlertTitle className="text-lg">🚨 Quick Emergency Reset</AlertTitle>
            <AlertDescription className="mt-2">
              If your application is completely broken, try these emergency steps:
              <div className="mt-3 bg-muted p-3 rounded font-mono text-sm">
                <div>1. Backup data: cp quests.json quests_backup.json</div>
                <div>2. Reset application: rm quests.json</div>
                <div>3. Reinstall dependencies: pip install --upgrade rich</div>
                <div>4. Test with: python indiana.py help</div>
              </div>
            </AlertDescription>
          </Alert>

          {/* Common Issues */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Common Issues & Solutions</h2>
            <div className="space-y-6">
              {commonIssues.map((issue, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{issue.issue}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline">{issue.category}</Badge>
                        <Badge variant={getSeverityColor(issue.severity)}>{issue.severity}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Symptoms */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Symptoms:</h4>
                      <ul className="space-y-1">
                        {issue.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-destructive mt-1">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold mb-3 text-secondary">Solutions:</h4>
                      <div className="space-y-4">
                        {issue.solutions.map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="border rounded-lg p-4">
                            <h5 className="font-semibold mb-2">{solution.title}</h5>
                            <ol className="space-y-1">
                              {solution.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary font-mono">{stepIndex + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Issues */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Performance Optimization</CardTitle>
              <CardDescription className="text-center">
                Tips to keep your quest management fast and efficient
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {performanceIssues.map((issue, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2 text-primary">{issue.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{issue.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Solutions:</h4>
                      <ul className="space-y-1">
                        {issue.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-secondary">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Preventive Measures */}
          <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Preventive Measures</CardTitle>
              <CardDescription className="text-center">
                Best practices to avoid issues before they occur
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {preventiveMeasures.map((measure, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-primary">{measure.title}</h3>
                    <p className="text-sm text-muted-foreground">{measure.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Steps:</h4>
                      <ul className="space-y-1">
                        {measure.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-secondary">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Getting Help */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Still Need Help?</CardTitle>
              <CardDescription className="text-center">Additional resources and support options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="space-y-3">
                  <div className="text-4xl">📚</div>
                  <h3 className="font-semibold">Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Review the complete documentation for detailed explanations of all features and commands.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl">🐛</div>
                  <h3 className="font-semibold">Report Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    Found a bug or have a feature request? Create an issue on the project repository.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
