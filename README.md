# URL Shortener API

A simple URL shortening service built with Node.js, Express, and PostgreSQL. Generate short, unique codes for long URLs and redirect users seamlessly.

## Features

- 🔗 **URL Shortening** - Convert long URLs into short, shareable links
- 🔄 **Redirection** - Automatically redirect short codes to original URLs
- ✅ **Input Validation** - Validates URLs with protocol requirements
- 🗄️ **PostgreSQL Storage** - Reliable database persistence
- 📊 **Request Logging** - Morgan logger for HTTP request tracking
- 🛡️ **Error Handling** - Centralized error handling middleware
- 🔀 **CORS Enabled** - Cross-origin resource sharing support

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Validation:** express-validator
- **Short Code Generation:** nanoid
- **Logging:** Morgan
- **Migration:** node-pg-migrate

## Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL (v12+)
- npm or yarn

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sepsarip/url-shortener.git

   cd url-shortener

   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. set up environtment variables
   ```bash
   cp .env.example .env
   ```
