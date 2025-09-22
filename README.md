# 🎩 Indiana Jones To-Do Quest

Sebuah aplikasi CLI task manager dengan tema petualangan Indiana Jones! Kelola tugas-tugas Anda layaknya seorang arkeolog yang mencari harta karun.

## ✨ Fitur

- 🎨 **ASCII Art** bergaya Indiana Jones
- 🌈 **Interface berwarna** menggunakan Rich library
- 📋 **CRUD Operations** lengkap untuk manajemen quest
- 🗂️ **Filter & Sort** berdasarkan status dan prioritas
- 💾 **JSON Storage** untuk menyimpan data quest
- 🏆 **Themed Messages** untuk setiap aksi

## 🚀 Instalasi

1. Clone atau download project ini
2. Install dependencies:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

3. Jalankan aplikasi:
\`\`\`bash
python indiana.py help
\`\`\`

## 📖 Cara Penggunaan

### Menambah Quest Baru
\`\`\`bash
# Quest sederhana
python indiana.py add "Cari artefak emas di kuil kuno"

# Quest dengan prioritas
python indiana.py add "Belajar Python advanced" --priority High

# Quest dengan deadline
python indiana.py add "Selesaikan project" --priority Medium --due 2025-12-31
\`\`\`

### Melihat Daftar Quest
\`\`\`bash
# Tampilkan semua quest
python indiana.py list

# Filter berdasarkan status
python indiana.py list --status Uncharted
python indiana.py list --status Discovered

# Filter berdasarkan prioritas
python indiana.py list --priority High
python indiana.py list --priority Medium
python indiana.py list --priority Low
\`\`\`

### Menyelesaikan Quest
\`\`\`bash
# Tandai quest dengan ID 1 sebagai selesai
python indiana.py done 1
\`\`\`

### Edit Quest
\`\`\`bash
# Edit deskripsi quest dengan ID 2
python indiana.py edit 2 "Deskripsi quest yang baru"
\`\`\`

### Hapus Quest
\`\`\`bash
# Hapus quest dengan ID 3
python indiana.py delete 3
\`\`\`

### Bantuan
\`\`\`bash
# Tampilkan bantuan lengkap
python indiana.py help
\`\`\`

## 🗂️ Struktur Data

Quest disimpan dalam file `quests.json` dengan format:

\`\`\`json
[
  {
    "id": 1,
    "quest": "Cari artefak kuno",
    "status": "Uncharted",
    "priority": "High",
    "due_date": "2025-09-20"
  },
  {
    "id": 2,
    "quest": "Belajar Python",
    "status": "Discovered",
    "priority": "Medium",
    "due_date": ""
  }
]
\`\`\`

## 🎯 Status Quest

- **[ ] Uncharted** - Quest belum diselesaikan
- **[✔] Discovered** - Quest sudah diselesaikan

## 📊 Prioritas

- 🔴 **High** - Prioritas tinggi
- 🟡 **Medium** - Prioritas sedang  
- 🟢 **Low** - Prioritas rendah

## 🎨 Tema & Pesan

- 🗺️ "Quest ditambahkan ke jurnal!" - Saat menambah quest
- 🏆 "Quest berhasil ditemukan!" - Saat menyelesaikan quest
- 💀 "Quest hilang dalam perjalanan..." - Saat menghapus quest
- ⚡ "The adventure continues... Until the next quest!" - Pesan penutup

## 🛠️ Teknologi

- **Python 3.7+**
- **Rich** - Untuk interface terminal yang indah
- **argparse** - Untuk parsing command line arguments
- **JSON** - Untuk penyimpanan data

## 📝 Contoh Penggunaan Lengkap

\`\`\`bash
# 1. Tambah beberapa quest
python indiana.py add "Eksplorasi gua misterius" --priority High --due 2025-10-01
python indiana.py add "Decode ancient map" --priority Medium
python indiana.py add "Repair adventure gear" --priority Low

# 2. Lihat semua quest
python indiana.py list

# 3. Selesaikan quest pertama
python indiana.py done 1

# 4. Edit quest kedua
python indiana.py edit 2 "Decode the mysterious ancient map"

# 5. Lihat quest yang belum selesai
python indiana.py list --status Uncharted

# 6. Hapus quest yang tidak diperlukan
python indiana.py delete 3
\`\`\`

## 🎭 Easter Eggs

- ASCII art Indiana Jones yang muncul setiap kali aplikasi dijalankan
- Quote terkenal dari film Indiana Jones
- Emoji dan simbol bertema petualangan
- Pesan-pesan unik untuk setiap aksi

---

**"It's not the years, honey, it's the mileage."** - Indiana Jones

Selamat berpetualang dengan quest-quest Anda! 🏛️⚡🗿
