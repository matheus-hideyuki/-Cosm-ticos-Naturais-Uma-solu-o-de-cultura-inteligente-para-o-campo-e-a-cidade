function configurarFeedbackModal(botaoId, modalId, fecharId) {
  const botao = document.getElementById(botaoId);
  const modal = document.getElementById(modalId);
  const fechar = document.getElementById(fecharId);

  if (!botao || !modal || !fechar) return;

  botao.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  fechar.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
