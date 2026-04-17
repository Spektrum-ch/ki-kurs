import fs from 'fs';
import path from 'path';
import type { User } from '@/types';

function getDataDir(): string {
  return process.env.DATA_DIR || path.join(process.cwd(), 'data');
}

function getUsersFile(): string {
  return path.join(getDataDir(), 'users.json');
}

function ensureDataDir(): void {
  const dir = getDataDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readUsers(): User[] {
  ensureDataDir();
  try {
    const data = fs.readFileSync(getUsersFile(), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeUsers(users: User[]): void {
  ensureDataDir();
  fs.writeFileSync(getUsersFile(), JSON.stringify(users, null, 2), 'utf-8');
}

export function getUserByEmail(email: string): User | undefined {
  return readUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function getUserByLoginToken(token: string): User | undefined {
  return readUsers().find(u => u.login_token === token);
}

export function getAllUsers(): User[] {
  return readUsers();
}

export function saveUser(user: User): void {
  const users = readUsers().filter(u => u.email.toLowerCase() !== user.email.toLowerCase());
  users.push(user);
  writeUsers(users);
}

export function updateUser(email: string, updates: Partial<User>): void {
  const users = readUsers();
  const idx = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
  if (idx !== -1) {
    users[idx] = { ...users[idx], ...updates };
    writeUsers(users);
  }
}
