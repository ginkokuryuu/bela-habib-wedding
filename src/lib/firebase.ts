import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, limit, startAfter, getDocs, Timestamp, type DocumentData, type QueryDocumentSnapshot, doc, deleteDoc } from 'firebase/firestore';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app: FirebaseApp;
let db: ReturnType<typeof getFirestore>;

export function initializeFirebase(config?: typeof firebaseConfig) {
  const cfg = config || firebaseConfig;
  if (!app) {
    app = initializeApp(cfg);
    db = getFirestore(app);
  }
  return { app, db };
}

export { db, collection, addDoc, onSnapshot, query, orderBy, limit, startAfter, getDocs, Timestamp, doc, deleteDoc };
export type { DocumentData, QueryDocumentSnapshot };
