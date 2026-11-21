// Web config for the axelkl-cv Firebase project. These values are public by
// design: access is controlled by Firebase security rules, not by this key.
const firebaseConfig = {
  apiKey: "AIzaSyDUwueK4sa5WiMxCrukrTTXFzLFRNzIXsI",
  authDomain: "axelkl-cv.firebaseapp.com",
  projectId: "axelkl-cv",
  storageBucket: "axelkl-cv.firebasestorage.app",
  messagingSenderId: "6761695925",
  appId: "1:6761695925:web:aaff77b0f5dd9535304cfc",
  // TODO: add once Google Analytics is enabled for the project
  // (Firebase console → Project settings → Integrations → Google Analytics).
  // Analytics stays off until this is set.
  measurementId: "",
};

// Firebase is loaded lazily, and only in production builds with a
// measurementId, so it never delays first paint. GA4 records page views
// itself, including client-side route changes (enhanced measurement).
export function initAnalytics() {
  if (!import.meta.env.PROD || !firebaseConfig.measurementId) return;
  Promise.all([import("firebase/app"), import("firebase/analytics")])
    .then(async ([{ initializeApp }, { getAnalytics, isSupported }]) => {
      if (await isSupported()) getAnalytics(initializeApp(firebaseConfig));
    })
    .catch(() => {});
}
