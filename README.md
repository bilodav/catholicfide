# Catholic Fide

**Defending the Faith and Defending the Truth.**

🌐 **Live site: [catholicfide.sylphcode.co.za](https://catholicfide.sylphcode.co.za)**

Catholic Fide is a Catholic apologetics and devotion website. It brings together two things in one place: a library of articles that explain and defend the Christian and Catholic faith, and a digital prayer space for everyday devotion.

---

## What the app is about

### ✝️ Apologia: defending the faith
A growing library of articles that answer the question *"Why should I believe?"* Articles are organised into themes such as:

- **Core Christian Doctrine**: God, Jesus Christ, the Trinity, the Gospel and the Holy Spirit.
- **Defending the Faith**: honest answers to objections from Islam, atheism, science and philosophy, plus alleged Bible contradictions.

Every article follows a consistent structure (the question, a short answer, biblical and historical evidence, common objections, the Catholic perspective, and further reading) so readers always know what to expect. Opposing views are meant to be presented fairly, at their strongest, before they are answered.

### 🙏 Oremus: the Digital Prayer Altar
A prayer space where visitors can pray directly on the site:

- **Prayers**: a collection of traditional Catholic prayers
- **Rosary**: guided Rosary with the Joyful, Luminous and Sorrowful mysteries
- **Novenas**: nine-day prayer devotions
- **Stations of the Cross**: step-by-step guided stations with imagery
- **Saint of the Day**: the saint being remembered today
- **Reading of the Day**: the day's Mass readings
- **Family prayer**: a shared prayer for the household

### 🚧 Coming soon
The site is designed to grow into a fuller Catholic digital library, with further sections planned:

- **Theologica**: a "digital seminary" for study (Scripture, Church Fathers, Doctors of the Church, Church documents)
- **Ecclesiastica**: the history and identity of the Church founded by Christ
- **Bibliotheca**: a source library of the Bible, Catechism, councils, encyclicals, Canon Law and downloadable resources

### 💛 Support the mission
Visitors can support the project with a donation via SnapScan, EFT, or card payment (through Yoco), and can get in touch through the built-in contact form.

---

## Tech stack

| Part | Technology |
| --- | --- |
| Frontend | React 19, Vite, React Router, CSS Modules |
| Backend | Node.js, Express 5 |
| Email | Nodemailer (contact form) |
| Payments | Yoco checkout and webhook |
| Database | PostgreSQL (`pg`) |

## Project structure

```
catholicfide/
├── client/   # React + Vite frontend (pages, components, article and prayer content)
├── server/   # Express API: contact form, Yoco checkout and webhook, serves the built client
└── Webflow.txt   # Original site map and content planning notes
```

## Running it locally

**Requirements:** Node.js 18+ and npm.

1. **Build the frontend**
   ```bash
   cd client
   npm install
   npm run build
   ```
   (For frontend development with hot reload, use `npm run dev` instead.)

2. **Configure the server.** Create `server/.env` (see `server/config/.env.example`):
   ```env
   PORT=5000
   CLIENT_URL=http://localhost:5000

   # Contact form email
   SMTP_HOST=mail.yourdomain.com
   SMTP_PORT=465
   SMTP_USER=noreply@yourdomain.com
   SMTP_PASS=your-password
   CONTACT_TO_EMAIL=you@yourdomain.com

   # PostgreSQL (optional for browsing the site)
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your-password
   DB_NAME=catholicfide
   ```
   Yoco payments additionally need your Yoco API credentials.

3. **Start the server**
   ```bash
   cd server
   npm install
   node index.js
   ```

4. Open **http://localhost:5000**. The Express server serves the built site and the API from the same port.

### Useful routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/oremus` | Digital Prayer Altar |
| `/apologia` | Apologia article library |
| `/contact` | Contact and donations |

---

*For God, for Church, for truth.*
