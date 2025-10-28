// ========================================
// SYSTÈME D'ANALYTICS POUR VOTRE SITE
// ========================================

class SiteAnalytics {
    constructor() {
        this.storageKey = 'purelink_analytics';
        this.sessionKey = 'purelink_session';
        this.init();
    }

    init() {
        // Vérifier le consentement aux cookies analytiques
        if (this.hasAnalyticsConsent()) {
            this.trackPageView();
            this.trackSession();
            this.setupEventTracking();
        }
    }

    hasAnalyticsConsent() {
        // Vérifier si l'utilisateur a accepté les cookies analytiques
        const consent = this.getCookie('purelink_cookie_consent');
        if (consent) {
            try {
                const consentData = JSON.parse(decodeURIComponent(consent));
                return consentData.analytics === true;
            } catch (e) {
                return false;
            }
        }
        return false;
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    // ========================================
    // TRACKING DES PAGES VUES
    // ========================================
    trackPageView() {
        const analytics = this.getAnalytics();
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const timestamp = new Date().toISOString();

        // Incrémenter le compteur total
        analytics.totalViews = (analytics.totalViews || 0) + 1;

        // Enregistrer la page vue
        if (!analytics.pageViews) {
            analytics.pageViews = {};
        }
        analytics.pageViews[currentPage] = (analytics.pageViews[currentPage] || 0) + 1;

        // Ajouter à l'historique
        if (!analytics.viewHistory) {
            analytics.viewHistory = [];
        }
        analytics.viewHistory.push({
            page: currentPage,
            timestamp: timestamp,
            referrer: document.referrer,
            userAgent: navigator.userAgent
        });

        // Limiter l'historique à 1000 entrées
        if (analytics.viewHistory.length > 1000) {
            analytics.viewHistory = analytics.viewHistory.slice(-1000);
        }

        this.saveAnalytics(analytics);}

    // ========================================
    // TRACKING DES SESSIONS
    // ========================================
    trackSession() {
        const sessionId = sessionStorage.getItem(this.sessionKey);
        
        if (!sessionId) {
            // Nouvelle session
            const newSessionId = this.generateSessionId();
            sessionStorage.setItem(this.sessionKey, newSessionId);

            const analytics = this.getAnalytics();
            analytics.totalSessions = (analytics.totalSessions || 0) + 1;
            
            if (!analytics.sessions) {
                analytics.sessions = [];
            }
            
            analytics.sessions.push({
                id: newSessionId,
                startTime: new Date().toISOString(),
                pages: [window.location.pathname.split('/').pop() || 'index.html']
            });

            this.saveAnalytics(analytics);} else {
            // Session existante - ajouter la page
            const analytics = this.getAnalytics();
            const currentSession = analytics.sessions?.find(s => s.id === sessionId);
            if (currentSession) {
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                if (!currentSession.pages.includes(currentPage)) {
                    currentSession.pages.push(currentPage);
                    this.saveAnalytics(analytics);
                }
            }
        }
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // ========================================
    // TRACKING DES ÉVÉNEMENTS
    // ========================================
    setupEventTracking() {
        // Tracking des clics sur les liens externes
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.addEventListener('click', () => {
                    this.trackEvent('external_link', {
                        url: link.href,
                        text: link.textContent
                    });
                });
            }
        });

        // Tracking des soumissions de formulaires
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', () => {
                this.trackEvent('form_submit', {
                    formClass: form.className,
                    formId: form.id
                });
            });
        });

        // Tracking des clics sur les boutons
        document.querySelectorAll('.btn, button').forEach(button => {
            button.addEventListener('click', () => {
                this.trackEvent('button_click', {
                    text: button.textContent,
                    className: button.className
                });
            });
        });

        // Tracking du temps passé sur la page
        let timeOnPage = 0;
        setInterval(() => {
            timeOnPage += 5;
            this.updateTimeOnPage(timeOnPage);
        }, 5000);

        // Tracking de la sortie de la page
        window.addEventListener('beforeunload', () => {
            this.trackEvent('page_exit', {
                page: window.location.pathname,
                timeSpent: timeOnPage
            });
        });
    }

    trackEvent(eventName, data) {
        const analytics = this.getAnalytics();
        
        if (!analytics.events) {
            analytics.events = [];
        }

        analytics.events.push({
            name: eventName,
            data: data,
            timestamp: new Date().toISOString()
        });

        // Limiter à 500 événements
        if (analytics.events.length > 500) {
            analytics.events = analytics.events.slice(-500);
        }

        this.saveAnalytics(analytics);
    }

    updateTimeOnPage(seconds) {
        const analytics = this.getAnalytics();
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (!analytics.timeOnPage) {
            analytics.timeOnPage = {};
        }
        
        analytics.timeOnPage[currentPage] = (analytics.timeOnPage[currentPage] || 0) + 5;
        this.saveAnalytics(analytics);
    }

    // ========================================
    // STOCKAGE LOCAL
    // ========================================
    getAnalytics() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : {};
    }

    saveAnalytics(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    // ========================================
    // MÉTHODES PUBLIQUES POUR CONSULTER LES STATS
    // ========================================
    getStats() {
        const analytics = this.getAnalytics();
        return {
            totalViews: analytics.totalViews || 0,
            totalSessions: analytics.totalSessions || 0,
            pageViews: analytics.pageViews || {},
            topPages: this.getTopPages(analytics.pageViews),
            recentViews: analytics.viewHistory?.slice(-10) || [],
            events: analytics.events?.length || 0,
            timeOnPage: analytics.timeOnPage || {}
        };
    }

    getTopPages(pageViews) {
        if (!pageViews) return [];
        return Object.entries(pageViews)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([page, views]) => ({ page, views }));
    }

    exportStats() {
        const stats = this.getStats();
        const blob = new Blob([JSON.stringify(stats, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `analytics_${new Date().toISOString().split('T')[0]}.json`;
        a.click();}

    clearStats() {
        if (confirm('⚠️ Êtes-vous sûr de vouloir effacer toutes les statistiques ?')) {
            localStorage.removeItem(this.storageKey);return true;
        }
        return false;
    }
}

// ========================================
// INTÉGRATION GOOGLE ANALYTICS (OPTIONNEL)
// ========================================
function initGoogleAnalytics() {
    // Vérifier le consentement
    const consent = getCookie('purelink_cookie_consent');
    if (!consent) return;

    try {
        const consentData = JSON.parse(decodeURIComponent(consent));
        if (!consentData.analytics) return;
    } catch (e) {
        return;
    }

    // À CONFIGURER : Remplacez par votre ID Google Analytics
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ⬅️ Votre ID ici

    // Charger Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
    });}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// ========================================
// INITIALISATION
// ========================================
let siteAnalytics;
document.addEventListener('DOMContentLoaded', () => {
    siteAnalytics = new SiteAnalytics();
    
    // Décommenter la ligne suivante si vous voulez utiliser Google Analytics
    // initGoogleAnalytics();
});

// Rendre accessible globalement pour la console
window.siteAnalytics = siteAnalytics;
