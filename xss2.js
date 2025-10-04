(async () => {
  try {
    const commentValue = 'Comentario de jenny';

    const body = new URLSearchParams();
    body.append('content', commentValue);

    const resp = await fetch('/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString(),
      credentials: 'same-origin'
    });

    console.log('POST /comment -> status:', resp.status);
    const text = await resp.text();
    console.log('Respuesta /comment:', text);
  } catch (err) {
    console.error('Error al enviar comment:', err);
  }
})();