# Redis Learning 🚀

A hands-on repository documenting my journey of learning **Redis** and understanding how it is used in real-world backend applications.

This repository contains a collection of small projects and experiments built while learning Redis with **Node.js and Express**. Each project focuses on a specific Redis concept and gradually moves from basic key-value operations to caching, queues, background jobs, and BullMQ.

The goal is to understand not just **how Redis commands work**, but also **where and why Redis is useful in backend systems**.

---

## 🧠 What is Redis?

Redis is an in-memory data store commonly used as a **cache, database, message broker, and queue backend**.

Because data is primarily stored in memory, Redis provides very fast read and write operations, making it useful for applications that require:

- Fast data access
- Caching frequently accessed data
- Temporary data storage
- Session management
- OTP storage
- Queues and background jobs
- Rate limiting
- Pub/Sub and messaging

This repository explores several of these use cases through small practical implementations.

---

## 📚 Concepts Covered

### Redis Fundamentals
- Connecting Node.js applications with Redis
- Basic `GET` and `SET` operations
- Redis keys and values
- Working with Redis using `ioredis`

### Expiration & TTL
- Setting expiration times on keys
- Using Redis for temporary data
- OTP storage with automatic expiration

### Caching
- Caching frequently accessed data
- User profile caching
- Understanding different ways of storing structured data

### Redis Data Structures
- Strings
- Hashes
- Lists
- JSON data

### Queues & Background Processing
- Implementing queues using Redis Lists
- Producer / Consumer architecture
- Worker processes
- Asynchronous task processing

### BullMQ
- Creating Redis-backed job queues
- Producers and workers
- Job processing
- Retry attempts
- Exponential backoff
- Background processing

### Docker
- Running Redis using Docker
- Managing Redis containers with Docker Compose

---

# 📂 Projects

## 01 — Redis Basics

The starting point for understanding Redis and connecting it with a Node.js application.

### Concepts
- Redis connection
- `SET`
- `GET`
- Basic Redis operations
- Node.js + Redis

This project focuses on understanding the basic interaction between an application and Redis.

---

## 02 — Site Banner

A small example demonstrating how Redis can be used to store and retrieve temporary application data such as a website banner.

Instead of repeatedly fetching the same information from another source, Redis can be used to keep frequently accessed data readily available.

### Concepts
- Key-value storage
- Caching
- `SET` / `GET`
- Redis with Express

---

## 03 — Login OTP with TTL

A simple OTP-based login implementation using Redis.

The OTP is stored in Redis with a specific expiration time. Once the TTL expires, Redis automatically removes the key.

Example:

```text
otp:<phone>
