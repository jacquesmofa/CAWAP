import { useState, useRef, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { useCloudinaryUpload } from '../../hooks/useCloudinaryUpload';

// ========================================
// 🎬 MEDIA TYPE DEFINITION
// ========================================
type MediaType = 'image' | 'video' | 'youtube' | 'vimeo';

interface GalleryMedia {
  url: string;
  category: string;
  title: string;
  type: MediaType; // 'image', 'video', 'youtube', or 'vimeo'
  thumbnail?: string; // Optional: custom thumbnail for videos
}

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['all']);
  
  // ========================================
  // 🔐 ADMIN UPLOAD FUNCTIONALITY
  // ========================================
  const [showUploadInterface, setShowUploadInterface] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('food-bank');
  const { uploadToCloudinary, uploading, uploadProgress, uploadedUrl, error: uploadError } = useCloudinaryUpload();
  
  // ========================================
  // VIDEO PLAYER STATE
  // ========================================
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // ========================================
  // MOBILE-LIKE GALLERY FEATURES
  // ========================================
  // These states handle zoom, pan, and swipe gestures
  const [scale, setScale] = useState(1); // Zoom level (1 = normal, 2 = 2x zoom, etc.)
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Pan position when zoomed
  const [isDragging, setIsDragging] = useState(false); // Is user dragging the image?
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 }); // Where drag started
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 }); // Touch start position for swipe
  const [touchDistance, setTouchDistance] = useState(0); // Distance between two fingers (pinch zoom)
  
  const imageRef = useRef<HTMLImageElement>(null);

  // Gallery categories - easily expandable
  const categories = [
    { id: 'all', name: 'All Media', icon: 'ri-grid-line' },
    { id: 'food-bank', name: 'Food Bank Events', icon: 'ri-restaurant-line' },
    { id: 'community', name: 'Community Programs', icon: 'ri-community-line' },
    { id: 'youth', name: 'Youth Activities', icon: 'ri-team-line' },
    { id: 'awards', name: 'Awards & Ceremonies', icon: 'ri-award-line' },
    { id: 'cultural', name: 'Cultural Events', icon: 'ri-global-line' },
    { id: 'workshops', name: 'Workshops & Training', icon: 'ri-book-open-line' },
  ];

  // ========================================
  // 🎬 GALLERY MEDIA (PHOTOS + VIDEOS)
  // ========================================
  // 📝 HOW TO ADD YOUR IMGUR MEDIA:
  // 1. Upload your image/video to Imgur
  // 2. Get the direct link (right-click > Copy image address)
  // 3. Add it to the array below with this format:
  //
  // For Images:
  // {
  //   url: 'https://i.imgur.com/YOUR_IMAGE_ID.jpg',
  //   category: 'food-bank', // or 'community', 'youth', 'awards', 'cultural', 'workshops'
  //   title: 'Your Image Title',
  //   type: 'image'
  // },
  //
  // For Videos (MP4, WebM, etc.):
  // {
  //   url: 'https://i.imgur.com/YOUR_VIDEO_ID.mp4',
  //   category: 'food-bank',
  //   title: 'Your Video Title',
  //   type: 'video',
  //   thumbnail: 'https://i.imgur.com/YOUR_THUMBNAIL.jpg' // Optional: custom thumbnail
  // },
  //
  // For YouTube Videos:
  // {
  //   url: 'VIDEO_ID_ONLY', // Just the ID from youtube.com/watch?v=VIDEO_ID
  //   category: 'community',
  //   title: 'YouTube Video Title',
  //   type: 'youtube'
  // },
  //
  // For Vimeo Videos:
  // {
  //   url: 'VIDEO_ID_ONLY', // Just the ID from vimeo.com/VIDEO_ID
  //   category: 'youth',
  //   title: 'Vimeo Video Title',
  //   type: 'vimeo'
  // },

  const galleryMedia: GalleryMedia[] = [
    // ========================================
    // 🎬 ADD YOUR IMGUR MEDIA HERE
    // ========================================
    // EXAMPLE - Replace with your actual Imgur links:
    // {
    //   url: 'https://i.imgur.com/yOjIsCg.mp4',
    //   category: 'food-bank',
    //   title: 'Food Bank Behind the Scenes',
    //   type: 'video'
    // },
    // {
    //   url: 'https://i.imgur.com/abc123.jpg',
    //   category: 'community',
    //   title: 'Community Event Photo',
    //   type: 'image'
    // },

    // ========================================
    // 📸 EXISTING PHOTOS - Food Bank Events
    // ========================================
    {
      url: 'https://readdy.ai/api/search-image?query=welcoming%20community%20food%20bank%20volunteers%20organizing%20fresh%20produce%20and%20groceries%20on%20shelves%2C%20diverse%20team%20working%20together%20in%20bright%20organized%20space%2C%20professional%20photography%20showing%20community%20service%20and%20food%20security%20support%2C%20warm%20lighting%20with%20abundant%20fresh%20vegetables%20and%20nutritious%20food%20items&width=600&height=400&seq=gallery-food-1&orientation=landscape',
      category: 'food-bank',
      title: 'Food Bank Organization',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=volunteers%20distributing%20food%20packages%20to%20grateful%20families%20at%20community%20food%20bank%2C%20heartwarming%20scene%20of%20diverse%20people%20helping%20neighbors%2C%20professional%20photography%20capturing%20compassion%20and%20community%20care%2C%20bright%20welcoming%20atmosphere%20with%20families%20receiving%20nutritious%20food%20assistance&width=600&height=400&seq=gallery-food-2&orientation=landscape',
      category: 'food-bank',
      title: 'Food Distribution Day',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20volunteers%20sorting%20and%20packing%20fresh%20vegetables%20and%20canned%20goods%20at%20food%20bank%2C%20organized%20teamwork%20in%20modern%20facility%2C%20professional%20photography%20showing%20efficient%20food%20pantry%20operations%2C%20bright%20clean%20space%20with%20diverse%20volunteers%20working%20together&width=600&height=400&seq=gallery-food-3&orientation=landscape',
      category: 'food-bank',
      title: 'Food Sorting & Packing',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20food%20drive%20collection%20with%20donated%20groceries%20and%20fresh%20produce%2C%20volunteers%20receiving%20food%20donations%20from%20generous%20community%20members%2C%20professional%20photography%20showing%20charitable%20giving%20and%20community%20support%2C%20bright%20welcoming%20space%20with%20abundant%20food%20donations&width=600&height=400&seq=gallery-food-4&orientation=landscape',
      category: 'food-bank',
      title: 'Community Food Drive',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=food%20bank%20warehouse%20with%20shelves%20stocked%20full%20of%20nutritious%20groceries%20and%20canned%20goods%2C%20organized%20inventory%20system%20for%20community%20food%20assistance%2C%20professional%20photography%20showing%20food%20security%20infrastructure%2C%20bright%20warehouse%20with%20volunteers%20managing%20food%20supplies&width=600&height=400&seq=gallery-food-5&orientation=landscape',
      category: 'food-bank',
      title: 'Food Bank Warehouse',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=volunteers%20loading%20food%20boxes%20into%20delivery%20van%20for%20home%20delivery%20service%2C%20community%20food%20bank%20outreach%20program%20bringing%20groceries%20to%20seniors%2C%20professional%20photography%20showing%20mobile%20food%20assistance%2C%20bright%20outdoor%20scene%20with%20volunteers%20carrying%20food%20boxes&width=600&height=400&seq=gallery-food-6&orientation=landscape',
      category: 'food-bank',
      title: 'Food Delivery Service',
      type: 'image'
    },

    // ========================================
    // 📸 EXISTING PHOTOS - Community Programs
    // ========================================
    {
      url: 'https://readdy.ai/api/search-image?query=diverse%20community%20members%20gathered%20for%20empowerment%20workshop%20in%20bright%20modern%20space%2C%20women%20and%20youth%20engaged%20in%20learning%20and%20discussion%2C%20professional%20photography%20showing%20community%20development%20and%20unity%2C%20warm%20atmosphere%20with%20people%20sitting%20in%20circle%20sharing%20ideas&width=600&height=400&seq=gallery-community-1&orientation=landscape',
      category: 'community',
      title: 'Community Workshop',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=vibrant%20community%20celebration%20event%20with%20diverse%20Canadian%20and%20African%20families%20enjoying%20cultural%20festival%2C%20colorful%20decorations%20and%20happy%20people%20dancing%20and%20celebrating%20together%2C%20professional%20photography%20capturing%20joy%20and%20cultural%20diversity%2C%20outdoor%20community%20gathering%20with%20festive%20atmosphere&width=600&height=400&seq=gallery-community-2&orientation=landscape',
      category: 'community',
      title: 'Community Celebration',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20health%20and%20wellness%20fair%20with%20information%20booths%20and%20health%20screenings%2C%20diverse%20volunteers%20providing%20health%20education%20services%2C%20professional%20photography%20showing%20community%20healthcare%20outreach%2C%20bright%20indoor%20space%20with%20people%20receiving%20health%20information%20and%20support&width=600&height=400&seq=gallery-community-3&orientation=landscape',
      category: 'community',
      title: 'Health & Wellness Fair',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=neighborhood%20cleanup%20volunteers%20working%20together%20to%20beautify%20community%2C%20diverse%20group%20of%20people%20planting%20flowers%20and%20cleaning%20park%2C%20professional%20photography%20showing%20environmental%20stewardship%20and%20community%20pride%2C%20sunny%20outdoor%20scene%20with%20volunteers%20in%20matching%20shirts&width=600&height=400&seq=gallery-community-4&orientation=landscape',
      category: 'community',
      title: 'Community Cleanup Day',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20potluck%20dinner%20with%20diverse%20families%20sharing%20homemade%20dishes%20and%20cultural%20foods%2C%20warm%20gathering%20with%20people%20enjoying%20meals%20together%2C%20professional%20photography%20showing%20community%20bonding%20and%20cultural%20exchange%2C%20bright%20dining%20hall%20with%20tables%20full%20of%20diverse%20cuisine&width=600&height=400&seq=gallery-community-5&orientation=landscape',
      category: 'community',
      title: 'Community Potluck',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=newcomers%20welcome%20orientation%20with%20diverse%20immigrants%20learning%20about%20Canadian%20community%20services%2C%20supportive%20environment%20with%20settlement%20workers%20assisting%20new%20residents%2C%20professional%20photography%20showing%20immigrant%20support%20and%20integration%2C%20bright%20welcoming%20space%20with%20informational%20displays&width=600&height=400&seq=gallery-community-6&orientation=landscape',
      category: 'community',
      title: 'Newcomers Welcome Event',
      type: 'image'
    },

    // ========================================
    // 📸 EXISTING PHOTOS - Youth Activities
    // ========================================
    {
      url: 'https://readdy.ai/api/search-image?query=enthusiastic%20youth%20participants%20in%20leadership%20training%20program%2C%20diverse%20teenagers%20engaged%20in%20team%20building%20activities%20and%20discussions%2C%20professional%20photography%20showing%20youth%20empowerment%20and%20skill%20development%2C%20bright%20modern%20classroom%20with%20interactive%20learning%20environment&width=600&height=400&seq=gallery-youth-1&orientation=landscape',
      category: 'youth',
      title: 'Youth Leadership Training',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=excited%20children%20at%20summer%20camp%20doing%20outdoor%20activities%20and%20sports%2C%20diverse%20kids%20playing%20games%20and%20learning%20together%20in%20park%2C%20professional%20photography%20capturing%20joy%20and%20friendship%2C%20sunny%20outdoor%20setting%20with%20youth%20counselors%20supervising%20fun%20activities&width=600&height=400&seq=gallery-youth-2&orientation=landscape',
      category: 'youth',
      title: 'Summer Camp Activities',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=young%20people%20learning%20coding%20and%20technology%20skills%20in%20computer%20lab%2C%20diverse%20teenagers%20working%20on%20laptops%20in%20JavaScript%20programming%20class%2C%20professional%20photography%20showing%20tech%20education%20and%20digital%20literacy%2C%20modern%20bright%20classroom%20with%20students%20focused%20on%20screens&width=600&height=400&seq=gallery-youth-3&orientation=landscape',
      category: 'youth',
      title: 'Tech Training Program',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=youth%20mentorship%20session%20with%20adult%20mentor%20guiding%20teenage%20student%2C%20inspiring%20one-on-one%20coaching%20in%20bright%20welcoming%20space%2C%20professional%20photography%20showing%20positive%20role%20modeling%20and%20youth%20development%2C%20warm%20atmosphere%20with%20mentor%20and%20mentee%20in%20meaningful%20conversation&width=600&height=400&seq=gallery-youth-4&orientation=landscape',
      category: 'youth',
      title: 'Mentorship Program',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=diverse%20youth%20volunteering%20at%20community%20service%20project%2C%20teenagers%20working%20together%20on%20charity%20initiative%20and%20helping%20others%2C%20professional%20photography%20showing%20youth%20civic%20engagement%20and%20social%20responsibility%2C%20bright%20outdoor%20scene%20with%20young%20volunteers%20in%20action&width=600&height=400&seq=gallery-youth-5&orientation=landscape',
      category: 'youth',
      title: 'Youth Volunteer Day',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=teenage%20girls%20participating%20in%20capital%20G%20girls%20empowerment%20program%2C%20young%20women%20learning%20leadership%20and%20confidence%20skills%2C%20professional%20photography%20showing%20girls%20empowerment%20and%20personal%20development%2C%20bright%20modern%20space%20with%20engaged%20female%20youth%20participants&width=600&height=400&seq=gallery-youth-6&orientation=landscape',
      category: 'youth',
      title: 'Capital G Girls Program',
      type: 'image'
    },

    // ========================================
    // 📸 EXISTING PHOTOS - Awards & Ceremonies
    // ========================================
    {
      url: 'https://readdy.ai/api/search-image?query=elegant%20awards%20ceremony%20with%20honored%20community%20leaders%20receiving%20recognition%2C%20formally%20dressed%20attendees%20at%20gala%20event%20celebrating%20achievements%2C%20professional%20photography%20showing%20prestigious%20award%20presentation%2C%20sophisticated%20indoor%20venue%20with%20stage%20lighting%20and%20proud%20award%20recipients&width=600&height=400&seq=gallery-awards-1&orientation=landscape',
      category: 'awards',
      title: 'Sankofa Royale Awards',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=graduation%20ceremony%20with%20proud%20students%20in%20caps%20and%20gowns%20receiving%20certificates%2C%20joyful%20diverse%20graduates%20celebrating%20program%20completion%2C%20professional%20photography%20capturing%20achievement%20and%20success%2C%20formal%20indoor%20venue%20with%20families%20and%20friends%20applauding%20graduates&width=600&height=400&seq=gallery-awards-2&orientation=landscape',
      category: 'awards',
      title: 'Program Graduation',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=community%20volunteer%20recognition%20event%20with%20honorees%20receiving%20appreciation%20awards%2C%20heartwarming%20ceremony%20celebrating%20dedicated%20volunteers%2C%20professional%20photography%20showing%20gratitude%20and%20acknowledgment%2C%20bright%20venue%20with%20smiling%20volunteers%20holding%20certificates%20and%20awards&width=600&height=400&seq=gallery-awards-3&orientation=landscape',
      category: 'awards',
      title: 'Volunteer Recognition',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=annual%20gala%20dinner%20with%20elegantly%20dressed%20attendees%20at%20fundraising%20event%2C%20sophisticated%20charity%20gala%20with%20decorated%20tables%20and%20formal%20attire%2C%20professional%20photography%20showing%20upscale%20community%20fundraiser%2C%20luxurious%20ballroom%20setting%20with%20chandeliers%20and%20guests%20mingling&width=600&height=400&seq=gallery-awards-4&orientation=landscape',
      category: 'awards',
      title: 'Annual Gala',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=award%20ceremony%20stage%20with%20trophy%20and%20certificate%20presentation%20to%20community%20champion%2C%20spotlit%20stage%20with%20presenter%20handing%20award%20to%20honoree%2C%20professional%20photography%20showing%20moment%20of%20recognition%2C%20elegant%20venue%20with%20audience%20applauding%20achievement&width=600&height=400&seq=gallery-awards-5&orientation=landscape',
      category: 'awards',
      title: 'Award Presentation Moment',
      type: 'image'
    },

    // ========================================
    // 📸 EXISTING PHOTOS - Cultural Events
    // ========================================
    {
      url: 'https://readdy.ai/api/search-image?query=vibrant%20African%20cultural%20festival%20with%20traditional%20dancers%20in%20colorful%20costumes%20performing%2C%20energetic%20cultural%20celebration%20with%20drummers%20and%20performers%2C%20professional%20photography%20capturing%20African%20heritage%20and%20traditions%2C%20outdoor%20festival%20with%20enthusiastic%20audience%20watching%20performance&width=600&height=400&seq=gallery-cultural-1&orientation=landscape',
      category: 'cultural',
      title: 'African Cultural Festival',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=multicultural%20food%20festival%20with%20diverse%20cuisine%20displays%20and%20people%20sampling%20international%20dishes%2C%20colorful%20food%20booths%20representing%20different%20cultures%2C%20professional%20photography%20showing%20culinary%20diversity%20and%20cultural%20exchange%2C%20outdoor%20market%20style%20event%20with%20happy%20attendees%20enjoying%20food&width=600&height=400&seq=gallery-cultural-2&orientation=landscape',
      category: 'cultural',
      title: 'Multicultural Food Festival',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=traditional%20music%20and%20dance%20workshop%20with%20participants%20learning%20cultural%20performance%2C%20diverse%20group%20practicing%20African%20drumming%20and%20dance%20moves%2C%20professional%20photography%20showing%20cultural%20education%20and%20artistic%20expression%2C%20bright%20studio%20space%20with%20enthusiastic%20learners%20and%20instructor&width=600&height=400&seq=gallery-cultural-3&orientation=landscape',
      category: 'cultural',
      title: 'Cultural Arts Workshop',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=heritage%20month%20celebration%20with%20cultural%20displays%20and%20traditional%20artifacts%20exhibition%2C%20educational%20cultural%20showcase%20with%20historical%20items%20and%20information%2C%20professional%20photography%20showing%20cultural%20preservation%20and%20education%2C%20indoor%20gallery%20space%20with%20visitors%20exploring%20exhibits&width=600&height=400&seq=gallery-cultural-4&orientation=landscape',
      category: 'cultural',
      title: 'Heritage Celebration',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=traditional%20clothing%20fashion%20show%20with%20models%20wearing%20colorful%20African%20attire%20and%20cultural%20garments%2C%20vibrant%20cultural%20fashion%20display%20celebrating%20heritage%2C%20professional%20photography%20showing%20traditional%20textiles%20and%20designs%2C%20indoor%20runway%20with%20audience%20admiring%20cultural%20fashion&width=600&height=400&seq=gallery-cultural-5&orientation=landscape',
      category: 'cultural',
      title: 'Cultural Fashion Show',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=cultural%20storytelling%20session%20with%20elder%20sharing%20traditional%20stories%20to%20engaged%20audience%2C%20intergenerational%20cultural%20knowledge%20transfer%20event%2C%20professional%20photography%20showing%20oral%20history%20preservation%2C%20warm%20indoor%20space%20with%20diverse%20listeners%20captivated%20by%20storyteller&width=600&height=400&seq=gallery-cultural-6&orientation=landscape',
      category: 'cultural',
      title: 'Storytelling Session',
      type: 'image'
    },

    // ========================================
    // 📸 EXISTING PHOTOS - Workshops & Training
    // ========================================
    {
      url: 'https://readdy.ai/api/search-image?query=financial%20literacy%20workshop%20with%20instructor%20teaching%20budgeting%20skills%20to%20diverse%20adults%2C%20engaged%20participants%20learning%20money%20management%20in%20classroom%2C%20professional%20photography%20showing%20financial%20education%20and%20empowerment%2C%20bright%20modern%20training%20room%20with%20presentation%20and%20interactive%20learning&width=600&height=400&seq=gallery-workshop-1&orientation=landscape',
      category: 'workshops',
      title: 'Financial Literacy Class',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=women%20empowerment%20workshop%20with%20professional%20development%20training%2C%20diverse%20women%20participating%20in%20career%20skills%20seminar%2C%20professional%20photography%20showing%20leadership%20development%20and%20empowerment%2C%20bright%20conference%20room%20with%20engaged%20female%20participants%20and%20facilitator&width=600&height=400&seq=gallery-workshop-2&orientation=landscape',
      category: 'workshops',
      title: 'Women Empowerment Seminar',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=mental%20health%20awareness%20workshop%20with%20therapist%20leading%20group%20discussion%2C%20supportive%20environment%20with%20participants%20sharing%20and%20learning%2C%20professional%20photography%20showing%20mental%20wellness%20education%2C%20comfortable%20therapy%20room%20setting%20with%20people%20sitting%20in%20supportive%20circle&width=600&height=400&seq=gallery-workshop-3&orientation=landscape',
      category: 'workshops',
      title: 'Mental Health Workshop',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=job%20readiness%20training%20session%20with%20diverse%20job%20seekers%20learning%20interview%20skills%2C%20professional%20development%20workshop%20with%20resume%20writing%20and%20career%20coaching%2C%20professional%20photography%20showing%20employment%20preparation%2C%20modern%20training%20center%20with%20participants%20practicing%20interview%20techniques&width=600&height=400&seq=gallery-workshop-4&orientation=landscape',
      category: 'workshops',
      title: 'Job Readiness Training',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=computer%20skills%20training%20class%20with%20seniors%20learning%20technology%2C%20elderly%20adults%20using%20computers%20with%20patient%20instructor%20assistance%2C%20professional%20photography%20showing%20digital%20literacy%20education%20for%20older%20adults%2C%20bright%20computer%20lab%20with%20engaged%20senior%20learners&width=600&height=400&seq=gallery-workshop-5&orientation=landscape',
      category: 'workshops',
      title: 'Digital Literacy for Seniors',
      type: 'image'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=parenting%20skills%20workshop%20with%20diverse%20parents%20learning%20child%20development%20strategies%2C%20supportive%20parent%20education%20session%20with%20facilitator%2C%20professional%20photography%20showing%20family%20support%20services%2C%20comfortable%20meeting%20room%20with%20parents%20engaged%20in%20discussion&width=600&height=400&seq=gallery-workshop-6&orientation=landscape',
      category: 'workshops',
      title: 'Parenting Workshop',
      type: 'image'
    },
  ];

  // Filter media based on active category
  const filteredMedia = activeCategory === 'all' 
    ? galleryMedia 
    : galleryMedia.filter(media => media.category === activeCategory);

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // ========================================
  // 📸 ADMIN UPLOAD HANDLER
  // ========================================
  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const cloudinaryUrl = await uploadToCloudinary(file, `cawap/${selectedCategory}`);
    
    if (cloudinaryUrl) {
      alert('✅ Media uploaded successfully! Refresh the page to see it in the gallery.');
      setShowUploadInterface(false);
    }
  };

  // ========================================
  // 🎬 VIDEO HELPER FUNCTIONS
  // ========================================
  
  // Get video thumbnail
  const getVideoThumbnail = (media: GalleryMedia): string => {
    if (media.thumbnail) return media.thumbnail;
    
    if (media.type === 'youtube') {
      return `https://img.youtube.com/vi/${media.url}/maxresdefault.jpg`;
    }
    
    if (media.type === 'vimeo') {
      // Vimeo thumbnails require API call, using placeholder
      return 'https://readdy.ai/api/search-image?query=video%20thumbnail%20placeholder%20with%20play%20button&width=600&height=400&seq=vimeo-thumb&orientation=landscape';
    }
    
    // For direct video files, use first frame or placeholder
    return 'https://readdy.ai/api/search-image?query=video%20thumbnail%20placeholder%20with%20play%20button&width=600&height=400&seq=video-thumb&orientation=landscape';
  };

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  // Get Vimeo embed URL
  const getVimeoEmbedUrl = (videoId: string): string => {
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  };

  // ========================================
  // LIGHTBOX CONTROLS
  // ========================================
  
  // Open lightbox and reset zoom/position
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setScale(1); // Reset zoom
    setPosition({ x: 0, y: 0 }); // Reset position
    setIsPlaying(false); // Reset video playing state
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    document.body.style.overflow = 'auto';
  };

  // Navigate to next media
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredMedia.length);
    setScale(1); // Reset zoom when changing media
    setPosition({ x: 0, y: 0 });
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Navigate to previous media
  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length);
    setScale(1); // Reset zoom when changing media
    setPosition({ x: 0, y: 0 });
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // ========================================
  // 🎬 VIDEO CONTROLS
  // ========================================
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // ========================================
  // ZOOM CONTROLS (Like Mobile Photos App)
  // ========================================
  
  // Zoom in (double-click or button)
  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 4)); // Max 4x zoom
  };

  // Zoom out
  const zoomOut = () => {
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1); // Min 1x zoom
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 }); // Reset position when fully zoomed out
      }
      return newScale;
    });
  };

  // Reset zoom to normal
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // ========================================
  // TOUCH GESTURES (Mobile-like Experience)
  // ========================================
  
  // Handle touch start (for swipe and pinch)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single finger - prepare for swipe
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      if (scale > 1) {
        // If zoomed, prepare for pan
        setIsDragging(true);
        setDragStart({
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y
        });
      }
    } else if (e.touches.length === 2) {
      // Two fingers - prepare for pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setTouchDistance(distance);
    }
  };

  // Handle touch move (swipe or pinch)
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && scale > 1 && isDragging) {
      // Pan the zoomed image
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2) {
      // Pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = distance - touchDistance;
      const newScale = Math.max(1, Math.min(4, scale + delta * 0.01));
      setScale(newScale);
      setTouchDistance(distance);
    }
  };

  // Handle touch end (complete swipe)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1 && scale === 1) {
      // Swipe gesture (only when not zoomed)
      const touchEnd = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      const deltaX = touchEnd.x - touchStart.x;
      const deltaY = Math.abs(touchEnd.y - touchStart.y);
      
      // Horizontal swipe (left/right) - must be more horizontal than vertical
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
        if (deltaX > 0) {
          previousImage(); // Swipe right = previous
        } else {
          nextImage(); // Swipe left = next
        }
      }
    }
    setIsDragging(false);
  };

  // ========================================
  // MOUSE CONTROLS (Desktop)
  // ========================================
  
  // Mouse drag to pan when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Double-click to zoom (only for images)
  const handleDoubleClick = () => {
    const currentMedia = filteredMedia[currentImageIndex];
    if (currentMedia.type === 'image') {
      if (scale === 1) {
        zoomIn();
      } else {
        resetZoom();
      }
    }
  };

  // Keyboard navigation
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeLightbox();
    if (e.key === '+' || e.key === '=') zoomIn();
    if (e.key === '-' || e.key === '_') zoomOut();
    if (e.key === '0') resetZoom();
    if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  };

  // Get media to display (limited or all based on expansion)
  const getDisplayMedia = () => {
    const INITIAL_DISPLAY = 12; // Show 12 initially
    if (expandedCategories.includes(activeCategory)) {
      return filteredMedia;
    }
    return filteredMedia.slice(0, INITIAL_DISPLAY);
  };

  const displayMedia = getDisplayMedia();
  const hasMore = filteredMedia.length > displayMedia.length;

  // Count media types
  const photoCount = galleryMedia.filter(m => m.type === 'image').length;
  const videoCount = galleryMedia.filter(m => m.type !== 'image').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=diverse%20community%20photo%20and%20video%20gallery%20wall%20with%20framed%20pictures%20and%20screens%20showing%20Canadian%20and%20African%20women%20programs%20and%20events%2C%20inspiring%20collection%20of%20community%20moments%20and%20celebrations%2C%20professional%20photography%20with%20warm%20lighting%20showing%20unity%20diversity%20and%20empowerment%2C%20modern%20community%20center%20multimedia%20gallery%20display&width=1920&height=400&seq=gallery-hero-video&orientation=landscape')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#26194f]/80 via-[#26194f]/60 to-[#26194f]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-white/90 leading-relaxed mb-4">
            Celebrating our community's journey through photos and videos of empowerment, unity, and transformation
          </p>
          <div className="flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <i className="ri-image-line text-2xl"></i>
              <span className="font-semibold">{photoCount} Photos</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <i className="ri-video-line text-2xl"></i>
              <span className="font-semibold">{videoCount} Videos</span>
            </div>
          </div>
        </div>
        
        {/* 🔐 SUBTLE ADMIN UPLOAD LINK */}
        <button
          onClick={() => setShowUploadInterface(!showUploadInterface)}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xs transition-colors duration-300 cursor-pointer"
          title="Admin: Upload Media"
        >
          <i className="ri-upload-cloud-line text-lg"></i>
        </button>
      </section>

      {/* ========================================
          🔐 ADMIN UPLOAD INTERFACE (HIDDEN BY DEFAULT)
          ======================================== */}
      {showUploadInterface && (
        <section className="py-8 bg-gray-100 border-b-2 border-[#26194f]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#26194f]">
                  <i className="ri-upload-cloud-line mr-2"></i>
                  Admin: Upload Media
                </h3>
                <button
                  onClick={() => setShowUploadInterface(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {/* Category Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Category:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26194f] focus:border-transparent"
                >
                  <option value="food-bank">Food Bank Events</option>
                  <option value="community">Community Programs</option>
                  <option value="youth">Youth Activities</option>
                  <option value="awards">Awards & Ceremonies</option>
                  <option value="cultural">Cultural Events</option>
                  <option value="workshops">Workshops & Training</option>
                </select>
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Choose Image or Video:
                </label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleMediaUpload}
                  disabled={uploading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#26194f] file:text-white file:cursor-pointer hover:file:bg-[#8e24aa]"
                />
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Uploading...</span>
                    <span className="text-sm font-semibold text-[#26194f]">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#26194f] to-[#8e24aa] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Success Message */}
              {uploadedUrl && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-800 font-semibold mb-2">✅ Upload Successful!</p>
                  <p className="text-sm text-green-700 break-all">{uploadedUrl}</p>
                </div>
              )}

              {/* Error Message */}
              {uploadError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-800 font-semibold">❌ Upload Failed</p>
                  <p className="text-sm text-red-700">{uploadError}</p>
                </div>
              )}

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>📝 Instructions:</strong> Select a category, choose your file (max 10MB), and upload. 
                  The media will be stored in Cloudinary and saved to the database. Refresh the page to see it in the gallery.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Section */}
      <section className="py-12 bg-white sticky top-[80px] z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => {
                const categoryPhotoCount = cat.id === 'all' 
                  ? photoCount 
                  : galleryMedia.filter(m => m.category === cat.id && m.type === 'image').length;
                const categoryVideoCount = cat.id === 'all' 
                  ? videoCount 
                  : galleryMedia.filter(m => m.category === cat.id && m.type !== 'image').length;
                const totalCount = categoryPhotoCount + categoryVideoCount;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                    }`}
                  >
                    <i className={`${cat.icon} text-lg`}></i>
                    <span className="text-sm md:text-base">{cat.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      {totalCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayMedia.map((media, index) => (
              <ScrollReveal key={`${media.category}-${index}`} delay={index * 0.05}>
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-[3/2] w-full h-full overflow-hidden">
                    {/* Thumbnail Image */}
                    <img
                      src={media.type === 'image' ? media.url : getVideoThumbnail(media)}
                      alt={media.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Video Play Button Overlay */}
                    {media.type !== 'image' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                        <div className="w-20 h-20 flex items-center justify-center bg-white/90 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                          <i className="ri-play-fill text-4xl text-[#26194f] ml-1"></i>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26194f]/90 via-[#26194f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-lg mb-2">{media.title}</h3>
                      <div className="flex items-center justify-center gap-2">
                        <i className={`${media.type === 'image' ? 'ri-eye-line' : 'ri-play-circle-line'} text-white`}></i>
                        <span className="text-white/90 text-sm">
                          {media.type === 'image' ? 'View Image' : 'Watch Video'}
                        </span>
                      </div>
                      {/* Media Type Badge */}
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
                          {media.type === 'image' ? '📸 Photo' : 
                           media.type === 'youtube' ? '🎬 YouTube' :
                           media.type === 'vimeo' ? '🎬 Vimeo' : '🎬 Video'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More / Show Less Button */}
          {filteredMedia.length > 12 && (
            <div className="text-center mt-12">
              <button
                onClick={() => toggleCategory(activeCategory)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <i className={`${expandedCategories.includes(activeCategory) ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-xl`}></i>
                <span>
                  {expandedCategories.includes(activeCategory) 
                    ? 'Show Less' 
                    : `Load More (${filteredMedia.length - displayMedia.length} more)`}
                </span>
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-20">
              <i className="ri-film-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-xl text-gray-500">No media in this category yet</p>
              <p className="text-gray-400 mt-2">Check back soon for updates!</p>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              Showing <strong className="text-[#26194f]">{displayMedia.length}</strong> of <strong className="text-[#26194f]">{filteredMedia.length}</strong> items
              {activeCategory !== 'all' && (
                <span> in <strong className="text-[#8e24aa]">{categories.find(c => c.id === activeCategory)?.name}</strong></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          🎬 MOBILE-LIKE LIGHTBOX VIEWER WITH VIDEO SUPPORT
          ========================================
          Features:
          - Swipe left/right to navigate
          - Pinch to zoom in/out (images only)
          - Double-click/tap to zoom (images only)
          - Drag to pan when zoomed (images only)
          - Video playback controls
          - YouTube/Vimeo embedding
          - Keyboard controls (arrows, space, +/-, ESC)
          - Smooth animations
          ======================================== */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center"
          onClick={(e) => {
            // Close only if clicking the background (not the media)
            if (e.target === e.currentTarget) closeLightbox();
          }}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          {/* Top Bar with Controls */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Media Info */}
              <div className="text-white">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold">
                    {filteredMedia[currentImageIndex].title}
                  </h3>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {filteredMedia[currentImageIndex].type === 'image' ? '📸 Photo' : '🎬 Video'}
                  </span>
                </div>
                <p className="text-white/70 text-sm">
                  {currentImageIndex + 1} of {filteredMedia.length}
                </p>
              </div>

              {/* Zoom Controls (Images Only) */}
              <div className="flex items-center gap-3">
                {filteredMedia[currentImageIndex].type === 'image' && (
                  <>
                    <button
                      onClick={zoomOut}
                      disabled={scale <= 1}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Zoom Out (-)"
                    >
                      <i className="ri-zoom-out-line text-white text-xl"></i>
                    </button>
                    <span className="text-white text-sm font-semibold min-w-[60px] text-center">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      onClick={zoomIn}
                      disabled={scale >= 4}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Zoom In (+)"
                    >
                      <i className="ri-zoom-in-line text-white text-xl"></i>
                    </button>
                    <button
                      onClick={resetZoom}
                      className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer"
                      title="Reset Zoom (0)"
                    >
                      <i className="ri-fullscreen-exit-line text-white text-xl"></i>
                    </button>
                  </>
                )}
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer ml-4"
                  title="Close (ESC)"
                >
                  <i className="ri-close-line text-white text-2xl"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer z-50"
            title="Previous (←)"
          >
            <i className="ri-arrow-left-line text-white text-3xl"></i>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer z-50"
            title="Next (→)"
          >
            <i className="ri-arrow-right-line text-white text-3xl"></i>
          </button>

          {/* Media Container with Zoom & Pan */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full px-20 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
          >
            {/* Render Image */}
            {filteredMedia[currentImageIndex].type === 'image' && (
              <img
                ref={imageRef}
                src={filteredMedia[currentImageIndex].url}
                alt={filteredMedia[currentImageIndex].title}
                className="w-full h-full object-contain max-h-[80vh] rounded-lg select-none"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                  cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }}
                draggable={false}
              />
            )}

            {/* Render Direct Video (MP4, WebM, etc.) */}
            {filteredMedia[currentImageIndex].type === 'video' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={filteredMedia[currentImageIndex].url}
                  className="w-full h-full object-contain max-h-[80vh] rounded-lg"
                  controls
                  autoPlay
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </div>
            )}

            {/* Render YouTube Video */}
            {filteredMedia[currentImageIndex].type === 'youtube' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <iframe
                  src={getYouTubeEmbedUrl(filteredMedia[currentImageIndex].url)}
                  className="w-full h-full max-h-[80vh] rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            )}

            {/* Render Vimeo Video */}
            {filteredMedia[currentImageIndex].type === 'vimeo' && (
              <div className="relative w-full h-full flex items-center justify-center">
                <iframe
                  src={getVimeoEmbedUrl(filteredMedia[currentImageIndex].url)}
                  className="w-full h-full max-h-[80vh] rounded-lg"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            )}
          </div>

          {/* Bottom Hint Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/60 text-sm bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <i className="ri-arrow-left-right-line"></i>
              <span>Arrow Keys to Navigate</span>
            </span>
            {filteredMedia[currentImageIndex].type === 'image' && (
              <>
                <span className="w-px h-4 bg-white/30"></span>
                <span className="flex items-center gap-2">
                  <i className="ri-zoom-in-line"></i>
                  <span>Double-click to Zoom</span>
                </span>
                <span className="w-px h-4 bg-white/30"></span>
                <span className="flex items-center gap-2">
                  <i className="ri-drag-move-line"></i>
                  <span>Drag when Zoomed</span>
                </span>
              </>
            )}
            {filteredMedia[currentImageIndex].type === 'video' && (
              <>
                <span className="w-px h-4 bg-white/30"></span>
                <span className="flex items-center gap-2">
                  <i className="ri-play-line"></i>
                  <span>Space to Play/Pause</span>
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Add New Media CTA */}
      <section className="py-16 bg-gradient-to-br from-[#26194f] to-[#8e24aa]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <i className="ri-camera-line text-5xl text-white"></i>
                <i className="ri-video-line text-5xl text-white"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have Photos or Videos to Share?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Help us capture our community's story! Share your photos and videos from our events and programs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#26194f] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg"
              >
                Contact Us to Share Media
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
