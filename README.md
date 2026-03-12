# Secure Message Board

## Overview

Secure Message Board allows users to store and retrieve encrypted messages.

Messages are stored in a JSON database and encrypted before saving.

Participants must identify bugs and security issues in the system.

---

# System Flow

Browser

↓

API Call

↓

Route Handler

↓

Controller

↓

Service Layer

↓

Encryption Module

↓

File Storage

↓

JSON Database

---

# Folder Structure

```
frontend/
backend/
routes/
controllers/
services/
utils/
data/
```

---

# Core Features

• Post message
• List messages
• Delete message

---

# API Endpoints

Create message

POST

```
/api/create
```

Get messages

GET

```
/api/list
```

Delete message

DELETE

```
/api/:id
```

---

# Bug Investigation Areas

Participants should explore problems involving:

Security

* Input sanitization
* Data exposure

Data integrity

* Duplicate identifiers
* Missing message ownership

Encryption

* Incorrect crypto usage

Frontend

* DOM rendering vulnerabilities

Backend

* Improper validation

Concurrency

* Race conditions in file writes

---

# Challenge Goal

Secure the message board by fixing logic errors, security vulnerabilities, and concurrency issues.

---

# Bonus Tasks

Teams may improve the system by:

* Implementing authentication
* Adding rate limiting
* Protecting against XSS
* Improving encryption practices
