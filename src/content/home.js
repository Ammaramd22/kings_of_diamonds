import heroImg from '../assets/heroImg3.jpeg'
import videoImg from '../assets/videoImg.png'
import ringImg1 from '../assets/ringImg1.jpg'
import ringImg2 from '../assets/ringImg1.jpg'
import ringImg3 from '../assets/ringImg1.jpg'
import ringImg4 from '../assets/ringImg1.jpg'
import emmaImg from '../assets/Emma.png'
import bellaImg from '../assets/Bella.png'
import francescaImg from '../assets/Francesca.png'
import imaniImg from '../assets/Imani.png'
import craftmanImg from '../assets/CraftmanImg.png'
import eduImg1 from '../assets/EduImg1.png'
import eduImg2 from '../assets/EduImg2.png'
import eduImg3 from '../assets/EduImg3.png'
import instaImg1 from '../assets/instaImg1.png'
import instaImg2 from '../assets/instaImg2.png'
import instaImg3 from '../assets/instaImg3.png'
import instaImg4 from '../assets/instaImg4.png'

import youtubeStoryImg from '../assets/youtube-story.png'
import tiktokFeatureImg from '../assets/tiktok-feature.png'
import articleRingImg from '../assets/article-ring.png'

/** Curated imagery — replace with brand assets when available */
export const images = {
  hero: heroImg,
  ringSolitaire: ringImg1,
  ringBezel: ringImg2,
  ringToi: ringImg3,
  ringTrilogy: ringImg4,
  bestSellerEmma: emmaImg,
  bestSellerBella: bellaImg,
  bestSellerFrancesca: francescaImg,
  bestSellerImani: imaniImg,
  videoImg,
  craft: craftmanImg,
  forest:
    'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
  product1:
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
  product2:
    'https://images.unsplash.com/photo-1617032213179-aedbdec1b888?auto=format&fit=crop&w=900&q=80',
  product3:
    'https://images.unsplash.com/photo-1589674781289-a7739570d309?auto=format&fit=crop&w=900&q=80',
  product4:
    'https://images.unsplash.com/photo-1602751584552-8b43c9b3e91e?auto=format&fit=crop&w=900&q=80',
  edu1: eduImg1,
  edu2: eduImg2,
  edu3: eduImg3,
}

export const education = {
  title: 'Education',
  description: 'Expert guides on diamonds, settings and care.',
  guides: [
    {
      title: 'Choosing your diamond',
      image: eduImg1,
      alt: 'Brilliant lab-grown diamond on a lilac display',
    },
    {
      title: 'Lab-grown diamonds explained',
      image: eduImg2,
      alt: 'Gemologist examining a lab-grown diamond',
    },
    {
      title: 'Settings, metals & care',
      image: eduImg3,
      alt: 'Engagement rings in varied settings on display',
    },
  ],
}

export const instagramSection = {
  title: 'Instagram',
  description:
    'Learn, engage and grow. Connect with Kings of Diamonds for all things engagement, wedding and fine jewellery.',
  href: 'https://www.instagram.com/',
  posts: [
    { image: instaImg1, alt: 'Kings of Diamonds Instagram — engagement ring styling' },
    { image: instaImg2, alt: 'Kings of Diamonds Instagram — lab-grown diamond jewellery' },
    { image: instaImg3, alt: 'Kings of Diamonds Instagram — wedding and fine jewellery' },
    { image: instaImg4, alt: 'Kings of Diamonds Instagram — ring collection' },
  ],
}

export const heroPromise = [
  {
    id: 'warranty',
    icon: 'shieldCheck',
    title: ['Lifetime', 'warranty'],
    description: 'Peace of mind for\na lifetime.',
  },
  {
    id: 'resizing',
    icon: 'ringDiamond',
    title: ['Complimentary', 'resizing'],
    description: 'Because the perfect\nfit matters.',
  },
  {
    id: 'engraving',
    icon: 'engravingPen',
    title: ['Free', 'engraving'],
    description: 'Add a personal touch\nthat lasts forever.',
  },
  {
    id: 'polishing',
    icon: 'sparkleStar',
    title: ['Free', 'polishing'],
    description: 'Keeping your brilliance\nas radiant as day one.',
  },
]

export const brandFeatures = [
  {
    id: 'shipping',
    lines: ['Worldwide express', 'shipping'],
    icon: 'truck',
  },
  {
    id: 'resizing',
    lines: ['Free', 'resizing'],
    icon: 'ring',
  },
  {
    id: 'warranty',
    lines: ['Lifetime ring', 'warranty'],
    icon: 'shield',
  },
  {
    id: 'custom',
    lines: ['Free ring', 'customisation'],
    icon: 'design',
  },
]

export const showroomSplit = {
  workshop: {
    title: 'A personal ring journey by a real workshop.',
    description:
      'Experience Kings of Diamonds in person. Our newest showroom is coming soon to Manchester, offering a private, appointment-only space to find your forever piece.',
    cta: 'Get notified when we open',
    image: craftmanImg,
  },
  interviews: {
    eyebrow: 'Client interviews & reviews',
    title: 'Real couples. Real stories.',
    cta: 'See more',
    image: videoImg,
  },
}

export const appointmentJourney = {
  items: [
    {
      id: 'workshop',
      icon: 'workshop',
      title: 'See how we make your ring in our workshop',
      description: 'Step inside our London workshop and see the craftsmanship behind your piece.',
    },
    {
      id: 'advice',
      icon: 'advice',
      title: 'Get expert advice on the design',
      description: 'Work with us to refine the setting, proportions, style and personal details.',
    },
    {
      id: 'diamond',
      icon: 'diamond',
      title: 'Choose the perfect diamond, metal and finishing details',
      description: 'Select the perfect diamond, metal, finish, engraving and finishing touches.',
    },
  ],
  cta: 'Book an appointment',
}

export const clientStories = {
  eyebrow: 'Why Kings of Diamonds',
  title: 'Stories we share',
  description: 'Real couples, real moments — told in their own words.',
  cta: 'View client stories',
}

export const faqSection = {
  eyebrow: 'Help & support',
  title: 'Frequently asked questions',
  description:
    'Everything you need to know about our diamonds, jewellery, and the Kings of Diamonds experience.',
}

export const faqs = [
  {
    q: 'How long will it take to get my order?',
    a: 'Made-to-order pieces typically ship within 3–4 weeks. Ready-to-ship items dispatch within 2 business days.',
  },
  {
    q: 'Do you ship worldwide?',
    a: 'Yes — we ship internationally with insured express couriers and clear guidance on duties at checkout.',
  },
  {
    q: 'Are lab-grown diamonds a simulant or real?',
    a: 'Lab-grown diamonds are real diamonds with the same crystal structure and optical properties as mined diamonds.',
  },
  {
    q: 'What lab diamond stone shapes do you offer?',
    a: 'Round, oval, emerald, cushion, pear, marquise, radiant, asscher and princess — subject to availability.',
  },
  {
    q: 'What is the difference between a mined diamond and an ethical lab-grown diamond?',
    a: 'Both are diamond. Lab-grown offers traceable origins and typically a lower environmental impact per carat.',
  },
  {
    q: 'How does Kings of Diamonds ensure a seamless purchase experience?',
    a: 'Dedicated gemologists, transparent timelines, resizing support and lifetime care options — all in one concierge journey.',
  },
  {
    q: 'What type of warranty do I receive?',
    a: 'A lifetime manufacturing warranty covers workmanship; wear policies are outlined in your care guide.',
  },
  {
    q: 'Is moissanite a good choice for an engagement ring?',
    a: 'Moissanite is a durable, brilliant alternative with distinct fire; we help you compare it side-by-side with diamonds.',
  },
  {
    q: 'Where are your showrooms located?',
    a: 'Visit us by appointment — details are listed under Contact once you book a preferred time.',
  },
  {
    q: 'What is a carbon-neutral lab-grown diamond?',
    a: 'Stones where remaining operational emissions are offset through verified climate projects.',
  },
]

export const shopByStyle = {
  title: 'Engagement rings by style',
  description:
    'Lab-grown diamond jewellery at Kings of Diamonds — solitaire, trilogy, halo, bezel and toi et moi.',
}

export const bestSellers = {
  title: 'Best selling engagement rings',
  description:
    'Lab-grown diamond, coloured sapphire and moissanite rings in our most-loved designs — crafted to last a lifetime.',
}

export const brandCraft = {
  quote: 'Where exceptional stones meet the hands that shape them.',
  description:
    'Our jewellers combine time-honoured craft with certified lab-grown diamonds — finished with care, made to last, and made for you.',
  imageTitle: 'Crafted for you.',
  imageCta: 'Discover bespoke rings',
}

export const clientReviews = {
  eyebrow: 'Reviews',
  title: 'Trusted by couples who chose us',
  description:
    'Five-star stories from clients who designed, ordered and celebrated their moment with Kings of Diamonds.',
  reviews: [
    {
      name: 'Sophie & James',
      location: 'Manchester',
      source: 'Trustpilot',
      text: 'Clear guidance from start to finish — choosing our diamond felt simple, not overwhelming.',
    },
    {
      name: 'Amira K.',
      location: 'London',
      source: 'Google',
      text: 'The ring arrived exactly as promised. Elegant setting, brilliant stone, and updates at every step.',
    },
    {
      name: 'Daniel & Priya',
      location: 'Birmingham',
      source: 'Trustpilot',
      text: 'We wanted something bespoke without the stress. The team listened, refined, and delivered beautifully.',
    },
    {
      name: 'Elena M.',
      location: 'Edinburgh',
      source: 'Google',
      text: 'Photos did not do it justice. Exceptional sparkle and craftsmanship — my partner was speechless.',
    },
    {
      name: 'Oliver T.',
      location: 'Bristol',
      source: 'Trustpilot',
      text: 'Transparent, patient, and genuinely invested in getting the design right. Could not recommend more.',
    },
  ],
}


export const discoverContent = {
  eyebrow: 'Discover & Connect',

  title: 'Explore the stories behind the rings',

  description:
    'Watch, read, and discover the latest creations, craftsmanship, and real moments behind every meaningful piece.',

  youtube: {
    title: 'Latest YouTube Story',
    description:
      'Go behind the scenes and follow the journey of our latest ring — from initial sketch to the final sparkle.',
    image: youtubeStoryImg,
    cta: 'Watch on YouTube',
    href: '#',
  },

  tiktok: {
    title: 'Quick behind-the-scenes',
    description:
      'Short updates, real moments, and a closer look at our craft.',
    image: tiktokFeatureImg,
    cta: 'View TikTok',
    href: '#',
  },

  article: {
    title: 'The story behind this ring',
    description:
      'Inspiration, design process, and the meaning woven into every detail.',
    image: articleRingImg,
    cta: 'Read Article',
    href: '#',
  },
}

export const craftsmanshipBanner = {
  title: 'Expert Craftsmanship. Personal Touch.',
  cta: 'Learn More',
  image: craftmanImg,
}