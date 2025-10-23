(function(){
  const API_BASE = '/backend-php/api/products.php';

  async function fetchJSON(url, opts) {
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Erreur API');
    return data;
  }

  async function getProducts(params = {}) {
    const url = new URL(API_BASE, window.location.origin);
    Object.entries(params).forEach(([k,v]) => {
      if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
    });
    const data = await fetchJSON(url.toString());
    return data.products || [];
  }

  async function getProduct(id) {
    const url = new URL(API_BASE, window.location.origin);
    url.searchParams.set('id', id);
    const data = await fetchJSON(url.toString());
    return data.product;
  }

  function formatPrice(price) {
    if (price == null) return '';
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  function productCardHTML(p) {
    const img = p.image_url || '/backend-php/assets/placeholder.jpg';
    const featured = p.is_featured ? '<span class="pl-badge">⭐ En vedette</span>' : '';
    return `
      <article class="pl-card">
        <div class="pl-card__media">
          <img src="${img}" alt="${p.name || ''}" onerror="this.src='/backend-php/assets/placeholder.jpg'"/>
          ${featured}
        </div>
        <div class="pl-card__body">
          <h3 class="pl-card__title">${p.name || ''}</h3>
          ${p.category ? `<div class="pl-chip">${p.category}</div>` : ''}
          ${p.short_description ? `<p class="pl-card__desc">${p.short_description}</p>` : ''}
          ${p.price != null ? `<div class="pl-card__price">${formatPrice(p.price)}</div>` : ''}
        </div>
      </article>
    `;
  }

  async function renderProducts(container, options = {}) {
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return;

    const {
      category = '',
      featured = undefined, // 1 pour en vedette
      q = '',
      limit = undefined,
      onError = (e)=>console.error(e)
    } = options;

    try {
      el.innerHTML = '<div class="pl-loader">Chargement…</div>';
      const params = {};
      if (category) params.category = category;
      if (featured !== undefined) params.featured = featured;
      const products = await getProducts(params);

      const filtered = q
        ? products.filter(p =>
            (p.name || '').toLowerCase().includes(q.toLowerCase()) ||
            (p.short_description || '').toLowerCase().includes(q.toLowerCase())
          )
        : products;

      const sliced = typeof limit === 'number' ? filtered.slice(0, limit) : filtered;

      if (!sliced.length) {
        el.innerHTML = '<p class="pl-empty">Aucun produit trouvé.</p>';
        return;
      }

      el.innerHTML = `<div class="pl-grid">${sliced.map(productCardHTML).join('')}</div>`;
    } catch (e) {
      onError(e);
      el.innerHTML = '<p class="pl-error">Une erreur est survenue lors du chargement des produits.</p>';
    }
  }

  // CSS adapté pour s'intégrer avec produits.css existant
  const css = `
    .pl-grid{display:grid;gap:30px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));padding:20px 0}
    .pl-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);transition:transform 0.3s ease,box-shadow 0.3s ease}
    .pl-card:hover{transform:translateY(-5px);box-shadow:0 8px 30px rgba(0,0,0,.12)}
    .pl-card__media{position:relative;background:#f9fafb;overflow:hidden}
    .pl-card__media img{width:100%;height:220px;object-fit:cover;display:block;transition:transform 0.3s ease}
    .pl-card:hover .pl-card__media img{transform:scale(1.05)}
    .pl-badge{position:absolute;top:12px;left:12px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;padding:6px 12px;border-radius:20px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px}
    .pl-card__body{padding:20px}
    .pl-card__title{font-size:18px;font-weight:600;margin:0 0 8px;color:#1f2937;line-height:1.3}
    .pl-chip{display:inline-block;background:#eff6ff;color:#1d4ed8;padding:6px 12px;border-radius:16px;font-size:12px;font-weight:500;margin-bottom:12px;text-transform:capitalize}
    .pl-card__desc{color:#6b7280;font-size:14px;line-height:1.5;margin-bottom:16px;min-height:42px}
    .pl-card__price{font-size:20px;font-weight:700;color:#059669;margin:0}
    .pl-empty{text-align:center;color:#6b7280;font-size:16px;padding:40px 20px}
    .pl-error{text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;margin:20px 0}
    .pl-loader{text-align:center;color:#4f46e5;font-size:16px;padding:40px 20px}
    .error-message{background:#fef2f2;color:#dc2626;border:1px solid #fecaca;border-radius:8px;padding:16px;text-align:center;margin:20px 0}
  `;
  
  // Injecter le CSS seulement s'il n'existe pas déjà
  if (!document.getElementById('purelink-products-css')) {
    const style = document.createElement('style');
    style.id = 'purelink-products-css';
    style.textContent = css;
    document.head.appendChild(style);
  }

  // Expose API
  window.PureLinkProducts = { getProducts, getProduct, renderProducts };
})();
