const form  = document.getElementById("formReserva");
const tabla = document.getElementById("tablaReservas");

let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

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

function mostrarReservas() {
  tabla.innerHTML = "";

  if (reservas.length === 0) {
    tabla.innerHTML = `
      <tr>
        <td colspan="5">
          <div class="sin-reservas">
            <i class="fas fa-suitcase-rolling"></i>
            <p>Aún no tienes reservas. ¡Empieza a planear tu aventura!</p>
          </div>
        </td>
      </tr>`;
    return;
  }

  reservas.forEach((reserva, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${reserva.nombre}</td>
        <td>${reserva.destino}</td>
        <td>${reserva.fecha || "—"}</td>
        <td>${reserva.correo_cliente || "—"}</td>
        <td>${reserva.viajeros || "—"}</td>
        <td>${reserva.precio || "—"}</td>
        <td>
          <button class="btn-eliminar" onclick="eliminarReserva(${index})">
            <i class="fas fa-trash-alt me-1"></i> Eliminar
          </button>
        </td>
      </tr>`;
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  limpiarErrores();

  const v1 = validarCampo("nombre",        "error-nombre");
  const v2 = validarCampo("destino",       "error-destino");
  const v3 = validarCampo("correo_cliente","error-correo");
  const v4 = validarCampo("fecha",         "error-fecha");
  const v5 = validarCampo("viajeros",      "error-viajeros");

  if (!v1 || !v2 || !v3 || !v4 || !v5) return;

  const nueva = {
    nombre:         document.getElementById("nombre").value.trim(),
    destino:        document.getElementById("destino").value.trim(),
    correo_cliente: document.getElementById("correo_cliente").value.trim(),
    fecha:          document.getElementById("fecha").value,
    viajeros:       document.getElementById("viajeros").value,
    precio:         document.getElementById("precio").value
  };

  reservas.push(nueva);
  localStorage.setItem("reservas", JSON.stringify(reservas));
  mostrarReservas();

  //Enviar correo con la API de Emailjs 
  const btn = document.querySelector(".btn-reservar-final");
  btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
  btn.disabled = true;

  emailjs.send("service_dlea8yo", "template_nr5wn7w", {
    nombre:         nueva.nombre,
    destino:        nueva.destino,
    correo_cliente: nueva.correo_cliente,
    fecha:          nueva.fecha,
    viajeros:       nueva.viajeros,
    precio:         nueva.precio,
    email:          nueva.correo_cliente
  })
  .then(() => {
    btn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Confirmar reserva';
    btn.disabled = false;
    form.reset();
    limpiarErrores();
    document.getElementById("destinoBadge").style.display = "none";

    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.style.display = "block";
    mensajeExito.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      mensajeExito.style.display = "none";
    }, 5000);
  })
  .catch((error) => {
    console.error("Error al enviar correo:", error);
    btn.innerHTML = '<i class="fas fa-exclamation-triangle me-2"></i>Error al enviar';
    btn.style.background = "linear-gradient(135deg, #dc3545, #b02a37)";
    btn.disabled = false;
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Confirmar reserva';
      btn.style.background = "";
    }, 3000);
  });
});

function eliminarReserva(index) {
  const confirmar = confirm("¿Seguro que deseas eliminar esta reserva?");
  if (!confirmar) return;

  reservas.splice(index, 1);
  localStorage.setItem("reservas", JSON.stringify(reservas));
  mostrarReservas();
}

preCargarDestino();
mostrarReservas();

document.getElementById("viajeros").addEventListener("input", actualizarTotal);