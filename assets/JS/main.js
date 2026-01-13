const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        msg.textContent = 'Thanks! I will get back to you soon.';
        msg.style.color = 'green';
        form.reset();
      } else {
        msg.textContent = 'Something went wrong. Please try again.';
        msg.style.color = 'red';
      }
    } catch (error) {
      msg.textContent = 'Network error. Please try later.';
      msg.style.color = 'red';
    }
  });
}