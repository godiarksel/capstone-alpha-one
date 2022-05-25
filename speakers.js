const speakerContainer = document.querySelector('.speakers__container');
const speakerInfo = [
  {
    img:'./images/socrates.png',
    name:'Socrates',
    title:'Greek Philosopher',
    description:`Socrates was a Greek philosopher from Athens 
                 who is credited as the founder of Western philosophy 
                 and among the first moral philosophers of the ethical tradition of thought.`,
  },
  {
    img:'./images/aristotle.png',
    name:'Aristotle',
    title:'Greek philosopher',
    description:`Aristotle was a Greek philosopher and polymath during the Classical period in Ancient Greece. 
                 Taught by Plato, he was the founder of the Lyceum, the Peripatetic school of philosophy, 
                 and the Aristotelian tradition.`,
  },
  {
    img:'./images/marcus-aurelius.png',
    name:'Marcus Aurelius',
    title:'Roman Emperor',
    description:`Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a Stoic philosopher. 
                 He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, 
                 an age of relative peace and stability for the Roman Empire lasting from 27 BC to 180 AD.`,
  },
  {
    img:'./images/seneca.png',
    name:'Seneca',
    title:'Roman Philosopher',
    description:`Lucius Annaeus Seneca the Younger, usually known as Seneca, was a Roman Stoic philosopher, 
                 statesman, dramatist, and, in one work, satirist, from the post-Augustan age of Latin literature. 
                 Seneca was born in Cordoba in Hispania, and raised in Rome, where he was trained in rhetoric and philosophy.`,
  },
  {
    img:'./images/plato.png',
    name:'Plato',
    title:'Greek Philosopher',
    description:`Plato was a Greek philosopher born in Athens during the Classical period in Ancient Greece. 
                 He founded the Platonist school of thought and the Academy, 
                 the first institution of higher learning in the Western world.`,
  },
];

let speakerCards = '';

for (let i = 0; i < speakerInfo.length; i += 1) {
  speakerCards += `
  <div class="speakers__container__content d-flex align-items-center p-2 m-2">
  <img src="${speakerInfo[i].img}" alt="${speakerInfo[i].name}">
  <div class="d-flex flex-column justify-content-center">
    <h3>
      ${speakerInfo[i].name}
    </h3>
    <h4>
      ${speakerInfo[i].title}
    </h4>
    <p>
      ${speakerInfo[i].description}
    </p>
  </div>
</div>
   `;
}
speakerContainer.innerHTML += speakerCards;