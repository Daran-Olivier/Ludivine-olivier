(function () {
  // Ne surcharger que si non défini (permet d'override via <script> inline)
  if (window.PURELINK_API_BASE) return;

  const origin = window.location.origin || "";
  const isLocal =
    location.protocol === "file:" ||
    /^(localhost|127\.0\.0\.1)$/i.test(location.hostname);

  // Production: backend hébergé sur ludivineolivier.fr
  const PROD_BASE = "https://ludivineolivier.fr/backend-php";
  const LOCAL_BASE = origin + "/backend-php";

  // Choix par défaut: en local → relative, sinon → production
  const base = isLocal ? LOCAL_BASE : PROD_BASE;

  window.PURELINK_API_BASE = base;
  window.PURELINK_PLACEHOLDER_URL = base + "/assets/placeholder.jpg";
})();
