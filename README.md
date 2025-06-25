# Jakarta 5-Day Weather Forecast

Script ini menampilkan prakiraan cuaca 5 hari ke depan untuk Jakarta menggunakan Node.js dan OpenWeatherMap API.

## Fitur
- Menampilkan suhu harian dalam format:
  
  `Wed, 22 June 2025: 32°C`
- Output rapi dan mudah dibaca

## Prasyarat
- Node.js terinstal di komputer
- API key dari [OpenWeatherMap](https://openweathermap.org/)

## Instalasi & Penggunaan
1. **Clone repo ini** (atau download file script):
   ```sh
   git clone https://github.com/sultonsabillar/Tes-stamps.git
   cd Tes-Stamps
   ```
2. **Edit file `weather.js`**
   - Masukkan API key kamu pada variabel `API_KEY`.
3. **Jalankan script:**
   ```sh
   node weather.js
   ```
4. **Output akan muncul seperti:**
   ```
   Weather Forecast:
   Fri, 21 June 2025: 30°C
   Sat, 22 June 2025: 29°C
   ...
   ```

## Catatan
- Script ini hanya menggunakan modul bawaan Node.js (`https`), jadi tidak perlu install package tambahan.
- Pastikan API key sudah aktif sebelum menjalankan script.

## Lisensi
Bebas digunakan untuk belajar dan pengembangan. 