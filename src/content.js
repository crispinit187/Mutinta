// All the words on the site live here, so they are easy to change.
// The final question screen is handled separately (see components/Ask.jsx).

export const recipient = 'Mutinta Chavuma'

export const screens = [
  {
    icon: '🌹',
    title: 'Hi, Mutinta',
    body: 'I made something for you. Take your time and tap Next.',
  },
  {
    icon: '💌',
    title: 'Dear MJ,',
    body: "I've been thinking about how to write this for a while, because some feelings are easier to feel than they are to put into words.",
  },
  {
    photo: { src: 'photos/meeting.jpg', alt: 'MJ standing in the sun in a red top', tilt: -3 },
    body: 'I still remember the day we met at the Africa Must Think conference. You were there with your friends, and I simply offered to take a picture of you. At the time, I thought I was just taking a picture. I never imagined that one picture would become the beginning of a story that would mean this much to me.',
    long: true,
  },
  {
    icon: '✨',
    body: "Somehow, from that moment, you caught my attention in a way I couldn't explain. We started talking, joking, sharing little moments, and slowly getting to know each other. Those conversations may have seemed ordinary at the time, but they became memories I genuinely can't forget.",
    long: true,
  },
  {
    icon: '📞',
    body: "One thing I've always appreciated about you is the way you've communicated with me. If I called and you weren't available, you would call me back when you could. It might sound like something small, but to me, it wasn't. It showed me that you valued our conversations too, and that meant a lot.",
    long: true,
  },
  {
    photo: { src: 'photos/kind.jpg', alt: 'MJ blowing a kiss in the sunshine', tilt: 3 },
    body: "You've also always been kind to me. And honestly, that's one of the things I value most about you. I've seen many sides of you, but your kindness has always stood out to me.",
    long: true,
  },
  {
    icon: '🤍',
    body: "MJ, I don't want this letter to be about pretending that everything has been perfect or trying to make some grand movie-like promise. I just want to be honest with you.",
    long: true,
  },
  {
    photo: { src: 'photos/value.jpg', alt: 'MJ in a lilac top with her braids in a bun', tilt: -2 },
    body: "Over time, I've come to realize that I don't only enjoy talking to you. I genuinely value you. I care about you. And somewhere along the way, you became someone I would really like to have in my life in a much deeper way.",
    long: true,
  },
  {
    icon: '🥹',
    body: "So today, I'm taking a little courage and asking you something I've wanted to ask for a while.",
  },
  {
    icon: '🌅',
    body: "I'd love for us to create something beautiful together, something built on communication, kindness, laughter, friendship, and understanding.",
  },
  {
    photo: { src: 'photos/picture.jpg', alt: 'MJ smiling in her Africa Must Think conference shirt', tilt: 2, ratio: '2 / 3' },
    body: 'Funny how I thought I was just taking a picture… and somehow, I ended up taking a picture of someone who became a beautiful part of my story.',
    long: true,
    sign: ['With love and honesty,', 'Tahure ❤️'],
  },
]

// Cheeky lines shown while the "No" button keeps running away.
export const dodgeHints = [
  'Take your time 💗',
  'Are you sure? 🥺',
  'Nice try 😌',
  'Too slow 😏',
  'The No button is shy today',
  'Just press Yes 💗',
  'It really, really likes you 🥰',
  'Look how big Yes is getting 👀',
  'Okay, okay… Yes is the only option 😇',
]
