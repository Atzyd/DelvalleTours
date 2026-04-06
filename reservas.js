// ── IMPORTAR FIREBASE ────────────────────────────────────────
import { db, collection, addDoc, getDocs, deleteDoc, doc, orderBy, query } from "./firebase.js";

const form  = document.getElementById("formReserva");
const tabla = document.getElementById("tablaReservas");

// ── PRELLENAR DESTINO Y PRECIO DESDE LA URL ──────────────────
function preCargarDestino() {
  const params  = new URLSearchParams(window.location.search);
  const destino = params.get("destino");
  const precio  = params.get("precio");

  if (destino) {
    const valorDestino = decodeURIComponent(destino);
    document.getElementById("destino").value = valorDestino;
    document.getElementById("destinoTexto").textContent = valorDestino;
    document.getElementById("destinoBadge").style.display = "block";
  }

  if (precio) {
    document.getElementById("precio").dataset.base = precio;
    actualizarTotal();
  }
}

// ── CALCULAR TOTAL ───────────────────────────────────────────
function actualizarTotal() {
  const precioBase = parseInt(document.getElementById("precio").dataset.base) || 0;
  const cantidad   = parseInt(document.getElementById("viajeros").value) || 0;

  if (precioBase && cantidad > 0) {
    const total = precioBase * cantidad;
    document.getElementById("precio").value =
      `${formatPrecio(precioBase)} x ${cantidad} = ${formatPrecio(total)}`;
    document.getElementById("precio").dataset.total = total;
  } else if (precioBase) {
    document.getElementById("precio").value = `Desde ${formatPrecio(precioBase)} p/p`;
    document.getElementById("precio").dataset.total = precioBase;
  }
}

function formatPrecio(valor) {
  return "$" + parseInt(valor).toLocaleString("es-CO");
}

// ── VALIDACIONES ─────────────────────────────────────────────
function validarCampo(id, errorId) {
  const campo = document.getElementById(id);
  const error = document.getElementById(errorId);

  if (!campo.value.trim()) {
    campo.classList.add("is-invalid");
    error.classList.add("visible");
    return false;
  }

  if (id === "correo_cliente") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(campo.value.trim())) {
      campo.classList.add("is-invalid");
      error.textContent = "Por favor ingresa un correo válido.";
      error.classList.add("visible");
      return false;
    }
  }

  campo.classList.remove("is-invalid");
  error.classList.remove("visible");
  return true;
}

function limpiarErrores() {
  ["nombre", "destino", "correo_cliente", "fecha", "viajeros"].forEach(id => {
    document.getElementById(id).classList.remove("is-invalid");
  });
  document.querySelectorAll(".error-msg").forEach(e => e.classList.remove("visible"));
}

// ── MOSTRAR RESERVAS DESDE FIREBASE ──────────────────────────
async function mostrarReservas() {
  tabla.innerHTML = `
    <tr><td colspan="7" class="text-center py-4">
      <i class="fas fa-spinner fa-spin" style="color:var(--teal);"></i>
      <span style="margin-left:8px; font-size:0.85rem; color:#888;">Cargando reservas...</span>
    </td></tr>`;

  try {
    const q = query(collection(db, "reservas"), orderBy("fecha_registro", "desc"));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      tabla.innerHTML = `
        <tr><td colspan="7">
          <div class="sin-reservas">
            <i class="fas fa-suitcase-rolling"></i>
            <p>Aún no hay reservas registradas.</p>
          </div>
        </td></tr>`;
      return;
    }

    tabla.innerHTML = "";
    snapshot.forEach(docSnap => {
      const r = docSnap.data();
      tabla.innerHTML += `
        <tr>
          <td>${r.nombre}</td>
          <td>${r.destino}</td>
          <td>${r.fecha || "—"}</td>
          <td>${r.correo_cliente || "—"}</td>
          <td>${r.viajeros || "—"}</td>
          <td>${r.precio || "—"}</td>
          <td>
            <button class="btn-eliminar" onclick="eliminarReserva('${docSnap.id}')">
              <i class="fas fa-trash-alt me-1"></i> Eliminar
            </button>
          </td>
        </tr>`;
    });
  } catch (err) {
    console.error("Error al cargar reservas:", err);
    tabla.innerHTML = `
      <tr><td colspan="7" class="text-center py-4" style="color:var(--coral);">
        <i class="fas fa-exclamation-triangle me-2"></i>Error al cargar las reservas.
      </td></tr>`;
  }
}

// ── ELIMINAR RESERVA ──────────────────────────────────────────
window.eliminarReserva = async function(id) {
  const confirmar = confirm("¿Seguro que deseas eliminar esta reserva?");
  if (!confirmar) return;

  try {
    await deleteDoc(doc(db, "reservas", id));
    mostrarReservas();
  } catch (err) {
    console.error("Error al eliminar:", err);
    alert("No se pudo eliminar la reserva.");
  }
};

// ── SUBMIT ────────────────────────────────────────────────────
form.addEventListener("submit", async function(e) {
  e.preventDefault();
  limpiarErrores();

  const v1 = validarCampo("nombre",         "error-nombre");
  const v2 = validarCampo("destino",        "error-destino");
  const v3 = validarCampo("correo_cliente", "error-correo");
  const v4 = validarCampo("fecha",          "error-fecha");
  const v5 = validarCampo("viajeros",       "error-viajeros");

  if (!v1 || !v2 || !v3 || !v4 || !v5) return;

  const nueva = {
    nombre:         document.getElementById("nombre").value.trim(),
    destino:        document.getElementById("destino").value.trim(),
    correo_cliente: document.getElementById("correo_cliente").value.trim(),
    fecha:          document.getElementById("fecha").value,
    viajeros:       document.getElementById("viajeros").value,
    precio:         document.getElementById("precio").value,
    fecha_registro: new Date().toISOString()
  };

  const btn = document.querySelector(".btn-reservar-final");
  btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Guardando...';
  btn.disabled = true;

  try {
    // Guardar en Firebase
    await addDoc(collection(db, "reservas"), nueva);

    // Enviar correo con EmailJS
    await emailjs.send("service_dlea8yo", "template_nr5wn7w", {
      nombre:         nueva.nombre,
      destino:        nueva.destino,
      correo_cliente: nueva.correo_cliente,
      fecha:          nueva.fecha,
      viajeros:       nueva.viajeros,
      precio:         nueva.precio,
      email:          nueva.correo_cliente
    });

    // Éxito
    btn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Confirmar reserva';
    btn.disabled = false;
    form.reset();
    limpiarErrores();
    document.getElementById("destinoBadge").style.display = "none";

    // Mostrar mensaje de éxito
    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.style.display = "block";
    mensajeExito.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => { mensajeExito.style.display = "none"; }, 5000);

    mostrarReservas();

  } catch (err) {
    console.error("Error:", err);
    btn.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i>Error al guardar';
    btn.style.background = "linear-gradient(135deg, #dc3545, #b02a37)";
    btn.disabled = false;
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-calendar-check me-2"></i>Confirmar reserva';
      btn.style.background = "";
    }, 3000);
  }
});

// ── INICIALIZAR ───────────────────────────────────────────────
preCargarDestino();
mostrarReservas();
document.getElementById("viajeros").addEventListener("input", actualizarTotal);