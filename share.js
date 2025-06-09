function shareOnX() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Interessante Informationen von der IG Wirtschaft und Recht");
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}
