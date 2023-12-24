  const letters = document.querySelectorAll('.animated-letter');

  letters.forEach((letter, index) => {
    anime.timeline({
      easing: 'easeInOutQuad',
      duration: 1500,
      autoplay: true,
    })
    .add({
      targets: letter,
      opacity: [0, 1],
      delay: 90 * index,
    });
  });

