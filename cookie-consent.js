// ========================================
// GESTION DES COOKIES - RGPD COMPLIANT
// ========================================

class CookieConsent {
    constructor() {
        this.cookieName = 'purelink_cookie_consent';
        this.cookieExpiry = 365; // jours
        this.init();
    }

    init() {
        // Charger les préférences existantes
        const consent = this.getConsent();

        // Vérifier aussi le localStorage comme backup
        const localConsent = this.getLocalConsent();

        if (!consent && !localConsent) {
            // Afficher la bannière si pas de consentement
            this.showBanner();
        } else {
            // Utiliser le consentement existant (cookie en priorité, sinon localStorage)
            const finalConsent = consent || localConsent;
            this.applyConsent(finalConsent);
        }

        // Gérer les boutons de paramètres
        this.setupSettingsButtons();
    }    showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-overlay"></div>
            <div class="cookie-consent-container">
                <div class="cookie-content">
                    <div class="cookie-header">
                        <h3>🍪 Nous respectons votre vie privée</h3>
                        <button class="cookie-close" onclick="cookieConsent.hideBanner()" aria-label="Fermer">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <p class="cookie-description">
                        Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                        analyser le trafic et personnaliser le contenu. Vous pouvez choisir les cookies 
                        que vous acceptez.
                    </p>
                    
                    <div class="cookie-categories">
                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <label class="cookie-switch">
                                    <input type="checkbox" checked disabled>
                                    <span class="cookie-slider"></span>
                                </label>
                                <div class="cookie-category-info">
                                    <h4>🔒 Cookies essentiels</h4>
                                    <p>Nécessaires au fonctionnement du site (toujours actifs)</p>
                                </div>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <label class="cookie-switch">
                                    <input type="checkbox" id="analytics-consent" checked>
                                    <span class="cookie-slider"></span>
                                </label>
                                <div class="cookie-category-info">
                                    <h4>📊 Cookies analytiques</h4>
                                    <p>Nous aident à comprendre comment vous utilisez le site</p>
                                </div>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <label class="cookie-switch">
                                    <input type="checkbox" id="marketing-consent">
                                    <span class="cookie-slider"></span>
                                </label>
                                <div class="cookie-category-info">
                                    <h4>🎯 Cookies marketing</h4>
                                    <p>Personnalisent les publicités et le contenu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="cookie-actions">
                        <button class="cookie-btn cookie-btn-accept-all" onclick="cookieConsent.acceptAll()">
                            <i class="fas fa-check"></i> Tout accepter
                        </button>
                        <button class="cookie-btn cookie-btn-save" onclick="cookieConsent.savePreferences()">
                            <i class="fas fa-save"></i> Enregistrer mes choix
                        </button>
                        <button class="cookie-btn cookie-btn-reject" onclick="cookieConsent.rejectAll()">
                            <i class="fas fa-times"></i> Tout refuser
                        </button>
                    </div>

                    <a href="politique-cookies.html" class="cookie-policy-link" target="_blank">
                        En savoir plus sur notre politique de cookies
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        
        // Empêcher le scroll du body
        document.body.style.overflow = 'hidden';

        // Animation d'entrée
        setTimeout(() => banner.classList.add('show'), 100);
    }

    hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    }

    acceptAll() {
        const consent = {
            essential: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        };
        this.saveConsent(consent);
        this.applyConsent(consent);
        this.hideBanner();
        this.showNotification('✅ Tous les cookies ont été acceptés');
    }

    rejectAll() {
        const consent = {
            essential: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString()
        };
        this.saveConsent(consent);
        this.applyConsent(consent);
        this.hideBanner();
        this.showNotification('✅ Seuls les cookies essentiels sont activés');
    }

    savePreferences() {
        const consent = {
            essential: true,
            analytics: document.getElementById('analytics-consent')?.checked || false,
            marketing: document.getElementById('marketing-consent')?.checked || false,
            timestamp: new Date().toISOString()
        };
        this.saveConsent(consent);
        this.applyConsent(consent);
        this.hideBanner();
        this.showNotification('✅ Vos préférences ont été enregistrées');
    }

    saveConsent(consent) {
        const consentString = JSON.stringify(consent);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + this.cookieExpiry);
        
        // Sauvegarder dans les cookies
        document.cookie = `${this.cookieName}=${encodeURIComponent(consentString)};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`;
        
        // Sauvegarder aussi dans localStorage comme backup
        localStorage.setItem(this.cookieName, consentString);}

    getLocalConsent() {
        try {
            const stored = localStorage.getItem(this.cookieName);
            return stored ? JSON.parse(stored) : null;
        } catch (e) {
            console.warn('Erreur lecture localStorage:', e);
            return null;
        }
    }

    getConsent() {
        const name = this.cookieName + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');

        for (let cookie of cookieArray) {
            cookie = cookie.trim();
            if (cookie.indexOf(name) === 0) {
                try {
                    const consent = JSON.parse(cookie.substring(name.length));return consent;
                } catch (e) {
                    console.warn('Erreur parsing cookie:', e);
                    return null;
                }
            }
        }return null;
    }    applyConsent(consent) {
        // Appliquer les cookies essentiels (toujours actifs)
        this.loadEssentialCookies();

        // Appliquer les cookies analytiques si acceptés
        if (consent.analytics) {
            this.loadAnalyticsCookies();
        } else {
            this.removeAnalyticsCookies();
        }

        // Appliquer les cookies marketing si acceptés
        if (consent.marketing) {
            this.loadMarketingCookies();
        } else {
            this.removeMarketingCookies();
        }

        // Stocker le consentement dans sessionStorage pour accès rapide
        sessionStorage.setItem('cookie_consent', JSON.stringify(consent));
    }

    loadEssentialCookies() {
        // Cookies nécessaires au fonctionnement du site// Exemple : préférences de langue, panier, session
    }

    loadAnalyticsCookies() {// Google Analytics (exemple)
        /*
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
        ga('create', 'UA-XXXXXXXX-X', 'auto');
        ga('send', 'pageview');
        */
    }

    removeAnalyticsCookies() {// Supprimer les cookies Google Analytics
        this.deleteCookie('_ga');
        this.deleteCookie('_gid');
        this.deleteCookie('_gat');
    }

    loadMarketingCookies() {// Facebook Pixel (exemple)
        /*
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
        */
    }

    removeMarketingCookies() {// Supprimer les cookies marketing
        this.deleteCookie('_fbp');
        this.deleteCookie('_fbc');
    }

    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=.${window.location.hostname}`;
    }

    setupSettingsButtons() {
        // Ajouter un bouton flottant pour rouvrir les paramètres
        const settingsBtn = document.createElement('button');
        settingsBtn.id = 'cookie-settings-btn';
        settingsBtn.className = 'cookie-settings-floating';
        settingsBtn.innerHTML = '<i class="fas fa-cookie-bite"></i>';
        settingsBtn.title = 'Paramètres des cookies';
        settingsBtn.onclick = () => this.showBanner();
        
        document.body.appendChild(settingsBtn);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cookie-notification';
        notification.innerHTML = message;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Méthode publique pour vérifier si un type de cookie est accepté
    isConsentGiven(type) {
        const consent = this.getConsent();
        return consent ? consent[type] : false;
    }

    // Méthode pour révoquer le consentement
    revokeConsent() {
        this.deleteCookie(this.cookieName);
        localStorage.removeItem(this.cookieName);
        sessionStorage.removeItem('cookie_consent');
        this.removeAnalyticsCookies();
        this.removeMarketingCookies();
        window.location.reload();
    }
}

// Initialiser la gestion des cookies au chargement de la page
let cookieConsent;
document.addEventListener('DOMContentLoaded', () => {
    cookieConsent = new CookieConsent();
    
    // Debug pour développement local
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') {}
});
