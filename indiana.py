#!/usr/bin/env python3
"""
Indiana Jones To-Do Quest - A CLI Task Manager with Adventure Theme
"""

import json
import os
import argparse
from datetime import datetime
from typing import List, Dict, Optional
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich import print as rprint

console = Console()

class QuestManager:
    def __init__(self, filename: str = "quests.json"):
        self.filename = filename
        self.quests = self.load_quests()
    
    def load_quests(self) -> List[Dict]:
        """Load quests from JSON file"""
        if os.path.exists(self.filename):
            try:
                with open(self.filename, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except (json.JSONDecodeError, FileNotFoundError):
                return []
        return []
    
    def save_quests(self) -> None:
        """Save quests to JSON file"""
        with open(self.filename, 'w', encoding='utf-8') as f:
            json.dump(self.quests, f, indent=2, ensure_ascii=False)
    
    def get_next_id(self) -> int:
        """Get the next available ID"""
        if not self.quests:
            return 1
        return max(quest['id'] for quest in self.quests) + 1
    
    def add_quest(self, description: str, priority: str = "Medium", due_date: str = "") -> None:
        """Add a new quest"""
        quest = {
            "id": self.get_next_id(),
            "quest": description,
            "status": "Uncharted",
            "priority": priority,
            "due_date": due_date
        }
        self.quests.append(quest)
        self.save_quests()
        rprint("🗺️  [bold green]Quest ditambahkan ke jurnal![/bold green]")
    
    def list_quests(self, status_filter: Optional[str] = None, priority_filter: Optional[str] = None) -> None:
        """Display all quests in a table"""
        if not self.quests:
            rprint("[yellow]📜 Tidak ada quest dalam jurnal petualangan![/yellow]")
            return
        
        # Filter quests
        filtered_quests = self.quests
        if status_filter:
            filtered_quests = [q for q in filtered_quests if q['status'].lower() == status_filter.lower()]
        if priority_filter:
            filtered_quests = [q for q in filtered_quests if q['priority'].lower() == priority_filter.lower()]
        
        if not filtered_quests:
            rprint("[yellow]📜 Tidak ada quest yang sesuai dengan filter![/yellow]")
            return
        
        # Create table
        table = Table(title="🏛️  Indiana Jones Quest Journal", show_header=True, header_style="bold magenta")
        table.add_column("ID", style="dim", width=6)
        table.add_column("Quest Description", style="cyan", min_width=30)
        table.add_column("Status", justify="center", width=12)
        table.add_column("Priority", justify="center", width=10)
        table.add_column("Deadline", justify="center", width=12)
        
        for quest in filtered_quests:
            # Status with symbols
            status_display = "✔ Discovered" if quest['status'] == "Discovered" else "[ ] Uncharted"
            status_color = "green" if quest['status'] == "Discovered" else "yellow"
            
            # Priority colors
            priority_colors = {"High": "red", "Medium": "yellow", "Low": "green"}
            priority_color = priority_colors.get(quest['priority'], "white")
            
            table.add_row(
                str(quest['id']),
                quest['quest'],
                f"[{status_color}]{status_display}[/{status_color}]",
                f"[{priority_color}]{quest['priority']}[/{priority_color}]",
                quest['due_date'] or "-"
            )
        
        console.print(table)
    
    def complete_quest(self, quest_id: int) -> None:
        """Mark a quest as completed"""
        quest = self.find_quest(quest_id)
        if quest:
            quest['status'] = "Discovered"
            self.save_quests()
            rprint("🏆 [bold gold1]Quest berhasil ditemukan![/bold gold1]")
        else:
            rprint(f"[red]❌ Quest dengan ID {quest_id} tidak ditemukan![/red]")
    
    def edit_quest(self, quest_id: int, new_description: str) -> None:
        """Edit quest description"""
        quest = self.find_quest(quest_id)
        if quest:
            quest['quest'] = new_description
            self.save_quests()
            rprint("📝 [bold blue]Quest berhasil diperbarui![/bold blue]")
        else:
            rprint(f"[red]❌ Quest dengan ID {quest_id} tidak ditemukan![/red]")
    
    def delete_quest(self, quest_id: int) -> None:
        """Delete a quest"""
        quest = self.find_quest(quest_id)
        if quest:
            self.quests.remove(quest)
            self.save_quests()
            rprint("💀 [bold red]Quest hilang dalam perjalanan...[/bold red]")
        else:
            rprint(f"[red]❌ Quest dengan ID {quest_id} tidak ditemukan![/red]")
    
    def find_quest(self, quest_id: int) -> Optional[Dict]:
        """Find quest by ID"""
        return next((quest for quest in self.quests if quest['id'] == quest_id), None)

def show_ascii_art():
    """Display Indiana Jones ASCII art"""
    ascii_art = """
[bold yellow]
    ╔══════════════════════════════════════════════════════════════╗
    ║                                                              ║
    ║    🎩     INDIANA JONES TO-DO QUEST     🗺️                   ║
    ║                                                              ║
    ║         ___                                                  ║
    ║        /   \\     "It's not the years, honey,                ║
    ║       |  o  |     it's the mileage."                        ║
    ║        \\___/                                                 ║
    ║         |||                                                  ║
    ║        /   \\      Adventure awaits in your task list!       ║
    ║                                                              ║
    ║    🏛️  ⚡  🗿  💎  🐍  🔍  📜  🏺  ⚔️  🗝️                    ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
[/bold yellow]
    """
    rprint(ascii_art)

def show_help():
    """Display help information"""
    help_text = """
[bold cyan]🗺️  INDIANA JONES QUEST COMMANDS:[/bold cyan]

[yellow]📝 Quest Management:[/yellow]
  • [bold]add "description"[/bold]           - Tambah quest baru
  • [bold]add "desc" --priority High[/bold]  - Tambah quest dengan prioritas
  • [bold]add "desc" --due 2025-12-31[/bold] - Tambah quest dengan deadline

[yellow]📋 View Quests:[/yellow]
  • [bold]list[/bold]                        - Tampilkan semua quest
  • [bold]list --status Uncharted[/bold]     - Filter berdasarkan status
  • [bold]list --priority High[/bold]        - Filter berdasarkan prioritas

[yellow]✅ Quest Actions:[/yellow]
  • [bold]done <id>[/bold]                   - Tandai quest selesai
  • [bold]edit <id> "new description"[/bold] - Edit deskripsi quest
  • [bold]delete <id>[/bold]                 - Hapus quest

[yellow]ℹ️  Other:[/yellow]
  • [bold]help[/bold]                        - Tampilkan bantuan ini

[dim]Contoh: python indiana.py add "Cari artefak emas di kuil kuno"[/dim]
    """
    rprint(help_text)

def main():
    """Main application function"""
    parser = argparse.ArgumentParser(
        description="Indiana Jones To-Do Quest - Adventure-themed task manager",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    subparsers = parser.add_subparsers(dest='command', help='Available commands')
    
    # Add command
    add_parser = subparsers.add_parser('add', help='Add a new quest')
    add_parser.add_argument('description', help='Quest description')
    add_parser.add_argument('--priority', choices=['Low', 'Medium', 'High'], 
                           default='Medium', help='Quest priority')
    add_parser.add_argument('--due', help='Due date (YYYY-MM-DD format)')
    
    # List command
    list_parser = subparsers.add_parser('list', help='List all quests')
    list_parser.add_argument('--status', choices=['Uncharted', 'Discovered'], 
                            help='Filter by status')
    list_parser.add_argument('--priority', choices=['Low', 'Medium', 'High'], 
                            help='Filter by priority')
    
    # Done command
    done_parser = subparsers.add_parser('done', help='Mark quest as completed')
    done_parser.add_argument('id', type=int, help='Quest ID')
    
    # Edit command
    edit_parser = subparsers.add_parser('edit', help='Edit quest description')
    edit_parser.add_argument('id', type=int, help='Quest ID')
    edit_parser.add_argument('description', help='New quest description')
    
    # Delete command
    delete_parser = subparsers.add_parser('delete', help='Delete a quest')
    delete_parser.add_argument('id', type=int, help='Quest ID')
    
    # Help command
    subparsers.add_parser('help', help='Show detailed help')
    
    args = parser.parse_args()
    
    # Show ASCII art at startup
    show_ascii_art()
    
    # Initialize quest manager
    quest_manager = QuestManager()
    
    # Handle commands
    if args.command == 'add':
        quest_manager.add_quest(args.description, args.priority, args.due or "")
    
    elif args.command == 'list':
        quest_manager.list_quests(args.status, args.priority)
    
    elif args.command == 'done':
        quest_manager.complete_quest(args.id)
    
    elif args.command == 'edit':
        quest_manager.edit_quest(args.id, args.description)
    
    elif args.command == 'delete':
        quest_manager.delete_quest(args.id)
    
    elif args.command == 'help':
        show_help()
    
    else:
        # No command provided, show help
        show_help()
    
    # Closing message
    rprint("\n[bold magenta]⚡ The adventure continues... Until the next quest![/bold magenta]")

if __name__ == "__main__":
    main()
