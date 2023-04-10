const pass = document.querySelector('.pass');
const pass2 = document.querySelector('.pass2');

pass.addEventListener('input', () => {
	if (pass.value == pass2.value) {
		pass.style.border = '3px solid green';
		pass2.style.border = '3px solid green';
	} else {
		pass.style.border = '3px solid red';
		pass2.style.border = '3px solid red';
	}
});

pass2.addEventListener('input', () => {
	if (pass.value == pass2.value) {
		pass.style.border = '3px solid green';
		pass2.style.border = '3px solid green';
	} else {
		pass.style.border = '3px solid red';
		pass2.style.border = '3px solid red';
	}
});
$(function () {
    $('#rateYo').rateYo({
      rating: 1.6,
      spacing: '5px',
      multiColor: {
        startColor: '#FFD36F', //RED
        endColor: '#FFD36F', //GREEN
      },
    });
  });
