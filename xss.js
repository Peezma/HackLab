(async () => {
  try {
    const url = '/profile'; // <-- relativo: apunta al origin de la página
    const bioValue = ''; // cambiar según necesites

    const fd = new FormData();
    fd.append('bio', bioValue);
    fd.append('profile_pic', new File([''], '', { type: 'application/octet-stream' }));

    const resp = await fetch(url, {
      method: 'POST',
      body: fd,
      credentials: 'same-origin' // envía cookies si el doc origin coincide con /profile
    });

    console.log('Status:', resp.status);
    const text = await resp.text();
    console.log('Respuesta:', text);
  } catch (err) {
    console.error('Error al enviar profile:', err);
  }
})();