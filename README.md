# User Search CSV

A simple backend app to search users by phone number. Works with a CSV file and returns results as JSON.

---

## Features

- Search users by **phone number** or **carrier**.
- Add new users via API.
- JSON results displayed clearly.
- Built with **Node.js**, **Express**, and **CSV parser**.

---

## Setup

1. Clone the repo or copy the files.
2. Make sure you have Node.js installed.
3. Place your `data.csv` file in the project folder.
4. Install dependencies:
```bash
npm install express csv-parser
```
5. Start the server
```bash
node index.js
```
6. Open your browser at:
```bash
http://localhost:3000
```

## Usage

### Web Interface
- Go to http://localhost:3000/.
- Type a phone number.
- Results will show below in JSON format.

## API Endpoints

### GET /search?q=<query>
- Search user by number. Returns JSON.

### POST /user
- Add a new user. Send JSON body with user details.

## CSV Format

Your `data.csv` should have columns like:
```bash
Number,Carrier,Name,Gender,Email,...
```

## License

Free to use and modify.