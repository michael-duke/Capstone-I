const speakers = [
  {
    name: 'johnathan rush',
    title: `Gospel musician, Minister of Music at Ebenezer 
  Temple UHCA in Hartford`,
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-1.jpg"',
    },
    description: 'Emerging young conductor and Winner of the Respighi Prize 2017 in Conducting, Jonathan Taylor Rush will bring passion, unique interpretation and refreshing energy to AMC.',
  },
  {
    name: 'janelle monáe',
    title: 'American singer, songwriter, rapper, science-fiction author and actress',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-2.jpg"',
    },
    description: 'She is signed to Atlantic Records, as well as to her own imprint, the Wondaland Arts Society. Monáe has received eight Grammy Award nominations.Monáe won an MTV Video Music Award and the ASCAP Vanguard Award in 2010.',
  },
  {
    name: 'baaba maal',
    title: 'Senegalese singer and guitarist',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-3.jpg"',
    },
    description: 'Born in Podor, on the Senegal River.In addition to acoustic guitar, he also plays percussion. He has released several albums, both for independent and major labels. In July 2003, he was made a UNDP Youth Emissary.',
  },
  {
    name: 'sandra nankoma',
    title: 'Recording artist, singer-songwriter, composer, actor and performer of Afro-soul and jazz music.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-5.jpeg"',
    },
    description: 'Nankoma started performing music professionally in 2013. Previously known as Sandy Soul, she is well known for her single \'Kaddugala\' from her debut album Ye\'nze for which she won an award for Best Female Artist in African Inspirational Music at AFRIMA Awards in 2018.',
  },
  {
    name: 'kgaogelo moagi',
    title: 'South African musician and record producer.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-4.jpg"',
    },
    description: 'Known professionally as Master KG, and born and raised in Tzaneen, his debut studio album Skeleton Move achieved acclaim including an AFRIMA Award for Best Artist/Group in the African Electro category. He is also known as the pioneer of "Bolobedu" dance.',
  },
  {
    name: 'Zaho',
    title: 'Algerian-Canadian R&B  singer-songwriter, composer.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-6.jpg"',
    },
    description: 'Zahera Darabid (Arabic: زهيرة درابيد) known by her stage name Zaho learned the guitar when she was seven years old, and very quickly learned the répertoire of Francis Cabrel within 10 years. In 1999, when she emigrated to Montreal, she discovered the world of professional music with its producers and its studios.',
  },
];

const generateSpeakers = (parentGrid) => {
  speakers.forEach((speaker) => {
    const {
      name,
      title,
      images: { profileBg, profilePic },
      description,
    } = speaker;

    const speakerProfileContainer = document.createElement('div');
    speakerProfileContainer.className = 'speaker-profile-container';
    speakerProfileContainer.style.backgroundImage = `url(${profileBg})`;

    const speakerPic = document.createElement('div');
    speakerPic.className = 'speaker-profile-pic';
    speakerPic.style.backgroundImage = `url(${profilePic})`;

    speakerProfileContainer.appendChild(speakerPic);

    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speaker-info';

    const speakerName = document.createElement('h3');
    speakerName.innerText = name;

    const speakerTitle = document.createElement('h4');
    speakerTitle.className = 'speaker-title';
    speakerTitle.innerText = title;

    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    speakerTitle.appendChild(indicator);

    const desc = document.createElement('p');
    desc.innerText = description;

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(speakerTitle);
    speakerInfo.appendChild(desc);

    const speakerItem = document.createElement('div');
    speakerItem.className = 'speaker-item';

    speakerItem.appendChild(speakerProfileContainer);
    speakerItem.appendChild(speakerInfo);

    parentGrid.appendChild(speakerItem);
  });
};

function renderSpeakers() {
  const sectionSpeakers = document.getElementById('speakers');

  const heading = document.createElement('h2');
  heading.className = 'sec-title';
  heading.innerText = 'Guest Speakers';

  const indicator = document.createElement('span');
  indicator.className = 'indicator';
  heading.appendChild(indicator);
  sectionSpeakers.appendChild(heading);

  const speakersGrid = document.createElement('div');
  speakersGrid.className = 'speakers-grid';
  generateSpeakers(speakersGrid);
  sectionSpeakers.appendChild(speakersGrid);
}

export default renderSpeakers;
