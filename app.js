// --- DATOS DE DESTINOS ----------
const destinos = [
  {
    nombre: "Cabo San Juan, Colombia",
    descripcion: "Transporte terrestre, entrada al Tayrona, seguro de asistencia medica, guia profesional.",
    detalle: "Senderismo guiado por senderos espectaculares con entrada al parque incluida. Disfruta de las playas más hermosas de Tayrona con vistas panorámicas únicas.",
    precio: 150000,
    rating: 4.9,
    imagen: "https://images.unsplash.com/photo-1538821169352-a455f1f448b2?w=600&q=80",
    tag: "Más vendido",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Palomino-Guajira, Colombia",
    descripcion: "Transporte terrestre, desayuno, almuerzo, seguro de asistencia medica, guia profesional.",
    detalle: "Un día completo en el paraíso natural del río Palomino. Incluye desayuno tradicional, almuerzo típico guajiro, transporte terrestre cómodo y guía experto que conoce cada rincón secreto de este lugar mágico.",
    precio: 110000,
    rating: 4.8,
    imagen: "https://images.unsplash.com/photo-1708526499808-46793ea32022?w=600&q=80",
    tag: "Aventura",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Bahia Concha, Colombia",
    descripcion: "Transporte chiva, seguro de asistencia medica, almuerzo, guia profesional.",
    detalle: "Tour en Chiva tradicional por la bahía más hermosa. Zona de relax perfecta para disfrutar del atardecer caribeño en aguas tranquilas y cristalinas.",
    precio: 100000,
    rating: 4.9,
    imagen: "https://images.unsplash.com/photo-1595101445719-aaff4a444631?w=600&q=80",
    tag: "Playa",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Minca-Taganga, Colombia",
    descripcion: "Transporte terrestre, desayuno, almuerzo, seguro de asistencia medica, transporte lancha, guia profesional.",
    detalle: "Combinación perfecta de montaña y mar. Tour de montaña por cafetales, transporte en lancha por bahías espectaculares, almuerzo típico caribeño y seguro de asistencia médica incluido.",
    precio: 120000,
    rating: 4.7,
    imagen: "https://images.unsplash.com/photo-1708716175154-32344ec0868a?w=600&q=80",
    tag: "Naturaleza",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Cartagena-Baru, Colombia",
    descripcion: "Transporte terrestre, desayuno, almuerzo, historia-playa, seguro de asistencia medica, guia profesional.",
    detalle: "Pasadía histórico con transporte y alimentación completa. Descubre la ciudad amurallada, sus fortalezas y culmina el día en las playas paradisíacas de Barú. Incluye guía turístico y almuerzo buffet.",
    precio: 150000,
    rating: 4.8,
    imagen: "https://images.unsplash.com/photo-1715503485391-e34011335c66?w=600&q=80",
    tag: "Top destino",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Playa Blanca, Colombia",
    descripcion: "Transporte lancha, Seguro de asistencia medica, almuerzo, entrada al acuario.",
    detalle: "Show de delfines en su hábitat natural y almuerzo frente al mar. Experiencia familiar única con la naturaleza marina en una de las playas más hermosas del Caribe.",
    precio: 134000,
    rating: 4.6,
    imagen: "https://plus.unsplash.com/premium_photo-1683214474059-b57007fc4d49?w=600&q=80",
    tag: "Relax",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Remanso-Taganga, Colombia",
    descripcion: "Transporte terrestre, almuerzo, careteo mas fotos, seguro de asistencia medica, guia profesional.",
    detalle: "Experiencia de careteo guiado con kit de fotos bajo el agua incluido. Explora la vida marina de la bahía mientras un profesional captura tus momentos más memorables en HD.",
    precio: 100000,
    rating: 4.8,
    imagen: "https://images.unsplash.com/photo-1549025227-2fd0b499aaae?w=600&q=80",
    tag: "Snorkel",
    duracion: "Medio día",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Playa Cristal, Colombia",
    descripcion: "Transporte terrestre, entrada al Tayrona, transporte maritimo, seguro de asistencia medica, guia profesional.",
    detalle: "Transporte marítimo en lancha y careteo en aguas cristalinas. Navega por bahías secretas y explora playas vírgenes con snorkel incluido en aguas de color turquesa único.",
    precio: 150000,
    rating: 4.8,
    imagen: "https://plus.unsplash.com/premium_photo-1691675469394-f843e044e340?w=600&q=80",
    tag: "Playa",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Buritaca, Colombia",
    descripcion: "Transporte chiva, almuerzo, seguro de asistencia medica, guia profesional.",
    detalle: "Aventura en chiva por los paisajes más naturales de la Sierra Nevada. Río y mar en un solo plan, con almuerzo típico de la región y guía experto local.",
    precio: 110000,
    rating: 4.8,
    imagen: "https://plus.unsplash.com/premium_photo-1664117187513-ef8d723a0a69?w=600&q=80",
    tag: "Rio y mar",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Playa Blanca/Acuario, Colombia",
    descripcion: "Transporte lancha, entrada al acuario, seguro de asistencia medica, almuerzo.",
    detalle: "Show de delfines en su hábitat natural y almuerzo frente al mar. Experiencia familiar única con la naturaleza marina en aguas cristalinas del Caribe colombiano.",
    precio: 135000,
    rating: 4.7,
    imagen: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600&q=80",
    tag: "Naturaleza",
    duracion: "Día completo",
    puntoEncuentro: "Santa Marta centro"
  },
  {
    nombre: "Chiva Rumbera, Santa Marta, Colombia",
    descripcion: "Tour por la ciudad de dos horas.",
    detalle: "Recorrido de 2 horas por los puntos icónicos de Santa Marta en una auténtica Chiva tradicional. Música en vivo, ambiente festivo y parada técnica en Vibras Bar para disfrutar de tragos y el ambiente local. Perfecto para grupos y celebraciones especiales.",
    precio: 20000,
    rating: 4.7,
    imagen: "https://images.unsplash.com/photo-1708716175154-32344ec0868a?w=600&q=80",
    tag: "Ciudad",
    duracion: "2 horas",
    puntoEncuentro: "Vibras Bar, Santa Marta"
  },
];

const stats = [
  { icono: "fas fa-users", valor: "12,000+", label: "Viajeros felices" },
  { icono: "fas fa-map-marked-alt", valor: "85+", label: "Destinos disponibles" },
  { icono: "fas fa-star", valor: "4.9/5", label: "Calificación promedio" },
  { icono: "fas fa-headset", valor: "24/7", label: "Soporte al cliente" }
];

// Formato de peso colombiano
function formatPrecio(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

function cargarHero() {
  const heroSection = document.getElementById("hero");
  const heroImg = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80";
  heroSection.style.backgroundImage = `url('${heroImg}')`;
}

function renderDestinos(lista = destinos) {
  const container = document.getElementById("destinos-container");
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fas fa-search fa-3x text-muted mb-3"></i>
        <p class="text-muted fs-5">No se encontraron destinos con ese nombre.</p>
      </div>`;
    return;
  }

  container.innerHTML = lista.map((d, i) => `
    <div class="col-sm-6 col-lg-4">
      <div class="destino-card">
        <div style="position:relative; cursor:pointer;" onclick="abrirModal(${destinos.indexOf(d)})">
          <img src="${d.imagen}" alt="${d.nombre}" loading="lazy"/>
          <span class="badge-precio" style="position:absolute;top:12px;left:12px;">${d.tag}</span>
          <span style="position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.5);color:#fff;border-radius:20px;padding:4px 10px;font-size:0.75rem;">
            <i class="fas fa-info-circle me-1"></i>Ver más
          </span>
        </div>
        <div class="destino-info">
          <div class="d-flex justify-content-between align-items-start">
            <h5>${d.nombre}</h5>
            <span class="text-warning fw-bold"><i class="fas fa-star"></i> ${d.rating}</span>
          </div>
          <p class="text-muted" style="font-size:0.87rem;">${d.descripcion}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <strong style="color:var(--accent);">Desde ${formatPrecio(d.precio)} p/p</strong>
            <button class="btn btn-sm btn-outline-primary rounded-pill" onclick="irAReservar('${d.nombre}', ${d.precio})">
              Reservar <i class="fas fa-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// ── MODAL DE DETALLE ─────────────────────────────────────────
function abrirModal(index) {
  const d = destinos[index];
  document.getElementById("modalImg").src         = d.imagen;
  document.getElementById("modalNombre").textContent   = d.nombre;
  document.getElementById("modalTag").textContent      = d.tag;
  document.getElementById("modalRating").textContent   = d.rating;
  document.getElementById("modalDetalle").textContent  = d.detalle;
  document.getElementById("modalIncluye").textContent  = d.descripcion;
  document.getElementById("modalPrecio").textContent   = "Desde " + formatPrecio(d.precio) + " p/p";
  document.getElementById("modalDuracion").textContent = d.duracion;
  document.getElementById("modalPunto").textContent    = d.puntoEncuentro;
  document.getElementById("modalReservar").onclick     = () => {
    cerrarModal();
    irAReservar(d.nombre, d.precio);
  };
  document.getElementById("modalDestino").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  document.getElementById("modalDestino").style.display = "none";
  document.body.style.overflow = "";
}
// ────────────────────────────────────────────────────────────

// ── BOTÓN RESERVAR ───────────────────────────────────────────
function irAReservar(nombreDestino, precio) {
  const destinoCodificado = encodeURIComponent(nombreDestino);
  window.location.href = `reservas.html?destino=${destinoCodificado}&precio=${precio}`;
}
// ────────────────────────────────────────────────────────────

function renderStats() {
  const container = document.getElementById("stats-container");
  if (!container) return;
  container.innerHTML = stats.map(s => `
    <div class="col-6 col-md-3 stat-item">
      <i class="${s.icono} fa-2x mb-2 opacity-75"></i>
      <h2>${s.valor}</h2>
      <p class="opacity-75">${s.label}</p>
    </div>
  `).join("");
}

// ── BUSCADOR FUNCIONAL ───────────────────────────────────────
function iniciarBuscador() {
  const inputBuscar = document.querySelector('input[placeholder="¿A dónde vas?"]');
  const btnBuscar   = document.querySelector('.search-bar .btn-primary');
  if (!inputBuscar) return;

  inputBuscar.addEventListener("input", () => {
    filtrar(inputBuscar.value);
    if (inputBuscar.value.trim()) {
      document.getElementById("destinos").scrollIntoView({ behavior: "smooth" });
    }
  });

  if (btnBuscar) {
    btnBuscar.addEventListener("click", () => {
      filtrar(inputBuscar.value);
      document.getElementById("destinos").scrollIntoView({ behavior: "smooth" });
    });
  }
}

function filtrar(query) {
  const q = query.toLowerCase().trim();
  if (!q) { renderDestinos(destinos); return; }
  const filtrados = destinos.filter(d =>
    d.nombre.toLowerCase().includes(q) ||
    d.descripcion.toLowerCase().includes(q) ||
    d.tag.toLowerCase().includes(q)
  );
  renderDestinos(filtrados);
}
// ────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  cargarHero();
  renderDestinos();
  renderStats();
  iniciarBuscador();

  // Cerrar modal al hacer clic fuera
  document.getElementById("modalDestino").addEventListener("click", function(e) {
    if (e.target === this) cerrarModal();
  });

  console.log("✅ DelValleTours cargado correctamente");
});