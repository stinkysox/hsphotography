/**
 * GALLERY DATA
 * Deterministic IDs are used to prevent Next.js hydration mismatches.
 */

export const galleryCategories = [
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Haldi",
  "Reception",
  "Mehandi",
  "Maternity",
  "Pre-Birthday",
  "Birthday",
];

const rawImages = {
  "Wedding": [
    { title: "Timeless Promise", src: "https://i.postimg.cc/prxYn3zg/BAL-1561.jpg" },
    { title: "Sacred Moments", src: "https://i.postimg.cc/SNSfQFSF/BAL-2107.jpg" },
    { title: "Hearts Entwined", src: "https://i.postimg.cc/PfzMkrkK/BAL-2115.jpg" },
    { title: "Eternal Flame", src: "https://i.postimg.cc/fRFcvVYv/SAI02142.jpg" },
    { title: "Divine Union", src: "https://i.postimg.cc/c4FMr9CK/SAI03941.jpg" },
    { title: "Love in Bloom", src: "https://i.postimg.cc/Jzt3JNHY/SAI04074.jpg" },
    { title: "Promise of Forever", src: "https://i.postimg.cc/dt5mLH1f/SAI05315.jpg" },
    { title: "Serene Celebration", src: "https://i.postimg.cc/0NbtkgCy/SAI05810.jpg" },
    { title: "Velvet Vows", src: "https://i.postimg.cc/T1WQrn4m/SAI05869.jpg" },
    { title: "Whispers of Love", src: "https://i.postimg.cc/zBvxGsSJ/SAI06108-copy.jpg" },
    { title: "Heavenly Ceremony", src: "https://i.postimg.cc/1X42bgYF/SAI06122-copy.jpg" },
    { title: "Blissful Beginnings", src: "https://i.postimg.cc/RZCsYJ6h/SAI06159-copy.jpg" },
    { title: "Forever Starts Here", src: "https://i.postimg.cc/3JvbpHMx/SAI06177.jpg" },
    { title: "Celestial Love", src: "https://i.postimg.cc/GmQ081YF/SAI06449.jpg" },
    { title: "Grand Affair", src: "https://i.postimg.cc/W4h9NR73/SAI07837.jpg" },
    { title: "Royal Radiance", src: "https://i.postimg.cc/jjmMC885/VV-01324.jpg" },
    { title: "Elegant Eternity", src: "https://i.postimg.cc/Ss9D9W5M/VV-01434.jpg" },
    { title: "Pure Promise", src: "https://i.postimg.cc/1XZMr811/VV-01551-copy.jpg" },
    { title: "Majestic Memories", src: "https://i.postimg.cc/bvWmd66b/VV-01562.jpg" },
    { title: "Golden Ceremony", src: "https://i.postimg.cc/gjqsSGGs/VV-01747.jpg" },
    { title: "Eternal Bliss", src: "https://i.postimg.cc/mkRNFK7W/VV-01872.jpg" },
    { title: "Sacred Union", src: "https://i.postimg.cc/PJ4bbKM3/VV-02032.jpg" },
    { title: "Hearts United", src: "https://i.postimg.cc/D0K5PS37/VV-02149-copy-2.jpg" },
    { title: "Luxury Love", src: "https://i.postimg.cc/RFwLhv62/VV-02479.jpg" },
    { title: "Promise in Gold", src: "https://i.postimg.cc/nrtTGXfX/VV-02752.jpg" }
  ],
  "Pre-Wedding": [
    { title: "Promise in Motion", src: "https://i.postimg.cc/kGKJLhHD/IMG-0270-JPG.jpg" },
    { title: "Whispered Vows", src: "https://i.postimg.cc/qB3vtz7J/IMG-0271-JPG.jpg" },
    { title: "Soft Beginnings", src: "https://i.postimg.cc/h4dtJfGW/IMG-0272-JPG.jpg" },
    { title: "Eternal Prelude", src: "https://i.postimg.cc/CK5FwKtw/IMG-0274-JPG.jpg" },
    { title: "Hearts Aligned", src: "https://i.postimg.cc/mkfR3yrg/IMG-0286-JPG.jpg" },
    { title: "Quiet Forever", src: "https://i.postimg.cc/WzLjmw4J/IMG-0293-JPG.jpg" },
    { title: "Dreamy Beginnings", src: "https://i.postimg.cc/Y9mMmsMy/IMG-2806-JPG.jpg" },
    { title: "Serene Promise", src: "https://i.postimg.cc/D0kFQPzz/IMG-2812-2-jpg.jpg" },
    { title: "Moments Before Forever", src: "https://i.postimg.cc/qB3vtz7M/IMG-5299-JPG.jpg" },
    { title: "Golden Hearts", src: "https://i.postimg.cc/B6141V4k/IMG-5305-JPG.jpg" },
    { title: "Love in Light", src: "https://i.postimg.cc/G3ymBHpY/IMG-5305-JPG.jpg" }, // Fixed duplicate src if any
    { title: "Forever Frame", src: "https://i.postimg.cc/KzgxgHmF/IMG-5313-JPG.jpg" },
    { title: "Silent Promises", src: "https://i.postimg.cc/05wy6bNq/IMG-9230-JPG.jpg" },
    { title: "Bliss Before Bells", src: "https://i.postimg.cc/c471m2ws/IMG-9231-2-JPG.jpg" },
    { title: "Soft Sunlit Love", src: "https://i.postimg.cc/jdYdytWv/IMG-9232-2-JPG.jpg" },
    { title: "Hearts in Harmony", src: "https://i.postimg.cc/gjFdyH0d/IMG-9233-2-JPG.jpg" },
    { title: "Golden Prelude", src: "https://i.postimg.cc/wj6qb2Qq/IMG-9234-2-JPG.jpg" },
    { title: "Whispers of Forever", src: "https://i.postimg.cc/QMzjC3G0/IMG-9235-2-JPG.jpg" },
    { title: "Promise Portrait", src: "https://i.postimg.cc/vH78zkfc/IMG-9254-JPG.jpg" },
    { title: "Love Prelude", src: "https://i.postimg.cc/02G5fFDQ/YOG07550-jpg.jpg" },
    { title: "Before the Bells", src: "https://i.postimg.cc/dtRQBpdz/YOG07895-jpg.jpg" },
    { title: "Hearts Before Vows", src: "https://i.postimg.cc/CK2w5gT2/YOG08221-jpg.jpg" },
    { title: "Prelude of Love", src: "https://i.postimg.cc/fRBz4d8v/YOG08709-copy-jpg.jpg" }
  ],
 "Engagement":[ 
  { title: "Engagement Ceremony Moment", src: "https://i.postimg.cc/Y24gR6pG/SAI00061.jpg" },
  { title: "Ring Exchange Close-Up", src: "https://i.postimg.cc/W3yNtqKB/SAI00803.jpg" },
  { title: "Couple Portrait After Engagement", src: "https://i.postimg.cc/VNYLh8Xr/SAI00806.jpg" },
  { title: "Candid Engagement Celebration", src: "https://i.postimg.cc/W3zp2w99/SAI00844.jpg" },
  { title: "Family Blessings Ceremony", src: "https://i.postimg.cc/MTHZWmsr/SAI00899.jpg" },
  { title: "Traditional Engagement Ritual", src: "https://i.postimg.cc/zBvDJFdx/SAI01197.jpg" },
  { title: "Bride and Groom Smiling Portrait", src: "https://i.postimg.cc/W3zp2w9W/SAI01531.jpg" },
  { title: "Decorated Stage Engagement Shot", src: "https://i.postimg.cc/CdTwsTw3/SAI01549-copy.jpg" },
  { title: "Elegant Engagement Portrait", src: "https://i.postimg.cc/SRzy9Nb9/YOG06902.jpg" },
  { title: "Romantic Couple Pose", src: "https://i.postimg.cc/ZRQb0v23/YOG07062.jpg" },
  { title: "Candid Laughter Moment", src: "https://i.postimg.cc/j2JsfdY8/YOG08396.jpg" },
  { title: "Stylish Engagement Shoot", src: "https://i.postimg.cc/J0B1X4Cd/YOG08442.jpg" },
  { title: "Golden Hour Engagement Shot", src: "https://i.postimg.cc/vDFGtFQb/YOG08488.jpg" }
],
  "Haldi": [
    { title: "Sunkissed Ritual", src: "https://i.postimg.cc/C55DD8cB/SAI01197.jpg" },
    { title: "Turmeric Glow", src: "https://i.postimg.cc/xdVK7c1s/SAI01298-copy.jpg" },
    { title: "Vibrant Traditions", src: "https://i.postimg.cc/Y93fQMk8/SAI01346.jpg" },
    { title: "Golden Smiles", src: "https://i.postimg.cc/SQgfsSgm/SAI01466.jpg" },
    { title: "Yellow Hues", src: "https://i.postimg.cc/XqqFF5sk/SAI01487.jpg" },
    { title: "Joyous Drench", src: "https://i.postimg.cc/zD2TNdfX/SAI02026.jpg" },
    { title: "Floral Blessing", src: "https://i.postimg.cc/D00ssGxg/SAI02073.jpg" },
    { title: "Sacred Smears", src: "https://i.postimg.cc/HW69xY68/SAI02166.jpg" },
    { title: "Festive Radiance", src: "https://i.postimg.cc/Dz3qD8wH/SAI02218.jpg" },
    { title: "Ritual Bliss", src: "https://i.postimg.cc/J7p5nrpr/SAI02428.jpg" },
    { title: "Pure Sunshine", src: "https://i.postimg.cc/3rtFR8t4/SAI02472.jpg" },
    { title: "Traditional Splendor", src: "https://i.postimg.cc/BvfxyXvW/SAI02512.jpg" },
    { title: "Radiant Bride", src: "https://i.postimg.cc/HsK0wSDG/SAI02521.jpg" },
    { title: "Haldi Celebration", src: "https://i.postimg.cc/tTXFqwP6/SAI02974.jpg" },
    { title: "Eternal Glow", src: "https://i.postimg.cc/rsH49pHN/SAI02992.jpg" }
  ],
  "Mehandi": [
  {
    "title": "Henna Artistry",
    "src": "https://i.postimg.cc/ydnT4sDp/SAI03065.jpg"
  },
  {
    "title": "Bridal Details",
    "src": "https://i.postimg.cc/Hx3tDdrf/SAI03090.jpg"
  },
  {
    "title": "Intricate Patterns",
    "src": "https://i.postimg.cc/KjzDmwL1/SAI03196.jpg"
  },
  {
    "title": "Traditional Strokes",
    "src": "https://i.postimg.cc/5tB3gwbq/SAI06235.jpg"
  },
  {
    "title": "Elegant Hands",
    "src": "https://i.postimg.cc/TwQcMfKH/YOG00007-copy.jpg"
  },
  {
    "title": "Festive Designs",
    "src": "https://i.postimg.cc/cCHBd2Y8/YOG00283-copy.jpg"
  },
  {
    "title": "Cultural Heritage",
    "src": "https://i.postimg.cc/cHTcy0Kd/YOG00322.jpg"
  },
  {
    "title": "Floral Mehandi",
    "src": "https://i.postimg.cc/Bb6BJkD2/YOG00371.jpg"
  },
  {
    "title": "Delicate Motifs",
    "src": "https://i.postimg.cc/fL5vnDV2/YOG00380.jpg"
  }
],
  "Maternity": [
    {
      "src": "https://i.postimg.cc/FRXRxLG3/SAI07309.jpg",
      "title": "Dreamy Afternoon"
    },
    {
      "src": "https://i.postimg.cc/PxnxMwK7/SAI07408.jpg",
      "title": "Tiny Toes"
    },
    {
      "src": "https://i.postimg.cc/LXFXV1v0/SAI09625.jpg",
      "title": "First Smiles"
    },
    {
      "src": "https://i.postimg.cc/X7jrh93V/SAI09811.jpg",
      "title": "Bundle of Joy"
    },
    {
      "src": "https://i.postimg.cc/NjL5GY5V/YOG03118.jpg",
      "title": "Sweet Lullaby"
    },
    {
      "src": "https://i.postimg.cc/fRFkJF92/YOG03311.jpg",
      "title": "Little Sunshine"
    },
    {
      "src": "https://i.postimg.cc/Cxtdzt8T/YOG03570.jpg",
      "title": "Wonderous Eyes"
    },
    {
      "src": "https://i.postimg.cc/cL6r1Zr7/YOG03928.jpg",
      "title": "Cozy Corners"
    },
    {
      "src": "https://i.postimg.cc/3x6Wd6GN/YOG03928-copy.jpg",
      "title": "Soft Moments"
    },
    {
      "src": "https://i.postimg.cc/sg1vfyvt/YOG04125.jpg",
      "title": "Pure Innocence"
    }
  ],

  "Reception": [
  {
    "title": "The Grand Entrance",
    "src": "https://i.postimg.cc/xTjKHcsM/SAI08795.jpg"
  },
  {
    "title": "Elegant Evening",
    "src": "https://i.postimg.cc/NjkSDNmK/IMG-9604-JPG.jpg"
  },
  {
    "title": "Heartfelt Toast",
    "src": "https://i.postimg.cc/L8pGzdYh/IMG-9609-JPG.jpg"
  },
  {
    "title": "Candlelit Ambience",
    "src": "https://i.postimg.cc/W1vxMRDB/IMG-9611-JPG.jpg"
  },
  {
    "title": "Joyful Celebration",
    "src": "https://i.postimg.cc/GmxVKMGD/SAI07467.jpg"
  },
  {
    "title": "Sharing a Smile",
    "src": "https://i.postimg.cc/dVjp6Wr6/SAI07507.jpg"
  },
  {
    "title": "The Dance Floor",
    "src": "https://i.postimg.cc/nhGg2dBF/SAI07761.jpg"
  },
  {
    "title": "Moments Together",
    "src": "https://i.postimg.cc/DwTRqVJy/SAI08765.jpg"
  },
  {
    "title": "Final Send-off",
    "src": "https://i.postimg.cc/tR8K4n9g/SAI08863.jpg"
  }
],
 "Pre-Birthday": [
  {
    "title": "Little Explorer",
    "src": "https://i.postimg.cc/ydMZkyQq/CNU00070-jpg.jpg"
  },
  {
    "title": "Giggly Moments",
    "src": "https://i.postimg.cc/y81SgdTf/CNU00232-jpg.jpg"
  },
  {
    "title": "Tiny Trendsetter",
    "src": "https://i.postimg.cc/MKbQpR1r/CNU00287-jpg.jpg"
  },
  {
    "title": "Sun-Kissed Smiles",
    "src": "https://i.postimg.cc/jqffBB2s/CNU00376-jpg.jpg"
  },
  {
    "title": "Whimsical Wonders",
    "src": "https://i.postimg.cc/HWMMFFnm/CNU00769-jpg.jpg"
  },
  {
    "title": "Childhood Magic",
    "src": "https://i.postimg.cc/YqwF78LY/CNU00793-copy-jpg.jpg"
  },
  {
    "title": "Playful Portraits",
    "src": "https://i.postimg.cc/Z5wvrS7R/IMG-0589-JPG.jpg"
  },
  {
    "title": "The Birthday Countdown",
    "src": "https://i.postimg.cc/g2z6XJK5/IMG-0594-JPG.jpg"
  },
  {
    "title": "Sweet Innocence",
    "src": "https://i.postimg.cc/GmLs82QR/IMG-0595-JPG.jpg"
  },
  {
    "title": "Curious Eyes",
    "src": "https://i.postimg.cc/L8xgzpC6/IMG-0610-JPG.jpg"
  },
  {
    "title": "Park Adventures",
    "src": "https://i.postimg.cc/VkK0j8GF/IMG-4112-JPG.jpg"
  },
  {
    "title": "Golden Tot",
    "src": "https://i.postimg.cc/GmXTkC7s/IMG-4138-JPG.jpg"
  },
  {
    "title": "Ready for Fun",
    "src": "https://i.postimg.cc/ry4477sM/MK-02080-jpg.jpg"
  },
  {
    "title": "Twinkle in the Eye",
    "src": "https://i.postimg.cc/Wb6k1r0K/MK-02227-copy-jpg.jpg"
  },
  {
    "title": "Turning One Soon",
    "src": "https://i.postimg.cc/8PVvGwf8/MK-02681-jpg.jpg"
  }
],
   "Birthday": [
  {
    "title": "Confetti Celebration",
    "src": "https://i.postimg.cc/x1kMxLy8/01.jpg"
  },
  {
    "title": "Birthday Wishes",
    "src": "https://i.postimg.cc/26xZbGmw/06.jpg"
  },
  {
    "title": "Party Magic",
    "src": "https://i.postimg.cc/Dwb4dnnZ/07.jpg"
  },
  {
    "title": "Cake Smash Fun",
    "src": "https://i.postimg.cc/3N7FzWrF/SAI00286.jpg"
  },
  {
    "title": "Golden Moments",
    "src": "https://i.postimg.cc/rwvWvzQV/SAI00682.jpg"
  },
  {
    "title": "Balloon Joy",
    "src": "https://i.postimg.cc/SsLWLqLR/SAI01100.jpg"
  },
  {
    "title": "Bright Smiles",
    "src": "https://i.postimg.cc/mg0M0h8Z/SAI01367.jpg"
  },
  {
    "title": "Candlelight Glow",
    "src": "https://i.postimg.cc/ydCmSWRg/SAI08282.jpg"
  },
  {
    "title": "Special Day Surprise",
    "src": "https://i.postimg.cc/MTJ7jXQF/SAI08365.jpg"
  },
  {
    "title": "Festive Cheer",
    "src": "https://i.postimg.cc/GthskDhS/SAI08431.jpg"
  },
  {
    "title": "Cheerful Portraits",
    "src": "https://i.postimg.cc/wjsRcgg6/SAI08743.jpg"
  },
  {
    "title": "Party Hat Parade",
    "src": "https://i.postimg.cc/0QCwMnxM/SAI09171.jpg"
  },
  {
    "title": "Sweet Memories",
    "src": "https://i.postimg.cc/d1R8RvRn/SAI09261.jpg"
  },
  {
    "title": "The Big One",
    "src": "https://i.postimg.cc/XYZdH9cY/SAI09836.jpg"
  }
]
};

/**
 * Process the raw data to add deterministic IDs and ensure category consistency.
 */
export const galleryImagesByCategory = Object.fromEntries(
  galleryCategories
    .filter(cat => cat !== "All")
    .map(category => [
      category,
      (rawImages[category] || []).map((img, index) => ({
        ...img,
        category,
        id: `${category.toLowerCase()}-${index}-${img.src.split('/').pop()?.split('.')[0] || 'img'}`
      }))
    ])
);

// Flattened array for the "All" tab - consistent order
export const allGalleryImages = Object.values(galleryImagesByCategory).flat();
