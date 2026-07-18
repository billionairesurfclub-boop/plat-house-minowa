export const hotel = {
  id: "plat-house-minowa",
  name: {
    ja: "ぷらっとハウス三ノ輪",
    en: "Plat House Minowa",
  },
  catchcopy: {
    ja: "三ノ輪駅徒歩6分。80㎡・最大8名。三ノ輪エリアのプライベートステイ",
    en: "6 min from 三ノ輪駅. Plat House Minowa — private stay in 三ノ輪.",
  },
  address: {
    postalCode: "110-0012",
    ja: "東京都台東区竜泉３－３－９",
    en: "東京都台東区竜泉３－３－９",
  },
  area: "三ノ輪",
  phone: "08070583086",
  category: "民泊",
  website: "https://minowa.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 22000,
    max: 33000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=334068&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "三ノ輪駅", line: "東京メトロ日比谷線", walk: 6 }
  ],
  floors: "戸建",
  parking: 0,
  capacity: 8,
  size: "80㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Disney+", nameEn: "Disney+", icon: "🎬", highlight: false },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "ポケットWi-Fi", icon: "📶", highlight: true },
  { name: "10ギガインターネット", nameEn: "10ギガインターネット", icon: "🌐", highlight: true },
  { name: "洗濯機", nameEn: "洗濯機", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "冷蔵庫", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "電子レンジ", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "電気ケトル", icon: "☕", highlight: false },
  { name: "シャワー", nameEn: "シャワー", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "独立トイレ", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "ウォシュレット", icon: "✨", highlight: false },
  { name: "掃除機", nameEn: "掃除機", icon: "🧹", highlight: false },
  { name: "エアコン", nameEn: "エアコン", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "大型TV", icon: "📺", highlight: false },
  { name: "コテ＆カールドライヤー", nameEn: "コテ＆カールドライヤー", icon: "💅", highlight: false },
  { name: "ヘアドライヤー", nameEn: "ヘアドライヤー", icon: "💨", highlight: false },
  { name: "シモンズ", nameEn: "シモンズ", icon: "🛏️", highlight: true },
  { name: "アイロン", nameEn: "アイロン", icon: "👔", highlight: false },
  { name: "キッチン", nameEn: "キッチン", icon: "🍳", highlight: true },
  { name: "アメニティ一式", nameEn: "アメニティ一式", icon: "🧴", highlight: false },
  { name: "ボタニスト（アメニティ）", nameEn: "ボタニスト（アメニティ）", icon: "🌿", highlight: false },
  { name: "バスタオル・フェイスタオル", nameEn: "バスタオル・フェイスタオル", icon: "🏩", highlight: false },
  { name: "空気清浄機", nameEn: "空気清浄機", icon: "💨", highlight: false },
  { name: "加湿器", nameEn: "加湿器", icon: "✅", highlight: false },
  { name: "サーキュレータ", nameEn: "サーキュレータ", icon: "✅", highlight: false },
  { name: "ダイニングテーブル", nameEn: "ダイニングテーブル", icon: "✅", highlight: false },
  { name: "クローゼット", nameEn: "クローゼット", icon: "✅", highlight: false },
  { name: "洋服掛け", nameEn: "洋服掛け", icon: "✅", highlight: false },
  { name: "ハンガー", nameEn: "ハンガー", icon: "✅", highlight: false },
  { name: "洗剤関係", nameEn: "洗剤関係", icon: "✅", highlight: false },
  { name: "浴槽", nameEn: "浴槽", icon: "🛁", highlight: true },
  { name: "洗面台", nameEn: "洗面台", icon: "✅", highlight: false },
  { name: "調理器具", nameEn: "調理器具", icon: "✅", highlight: false },
  { name: "皿・グラス関係", nameEn: "皿・グラス関係", icon: "✅", highlight: false },
  { name: "ダイニング", nameEn: "ダイニング", icon: "✅", highlight: false }
];

export const rooms = [
  {
    id: "room-1",
    floor: "",
    name: { ja: "寝室1（ダブル）", en: "Bedroom 1 (Double)" },
    bedType: { ja: "ダブルベッド×1", en: "1 Double Bed" },
    maxGuests: 2,
    description: {
      ja: "ダブルベッド1台の寝室。ゆったりお過ごしいただけます。",
      en: "Bedroom with 1 double bed. Comfortable and relaxing.",
    },
    images: ["room-1-1.jpg"],
  },
  {
    id: "room-2",
    floor: "",
    name: { ja: "寝室2（ダブル×2）", en: "Bedroom 2 (Double x2)" },
    bedType: { ja: "ダブルベッド×2", en: "2 Double Beds" },
    maxGuests: 4,
    description: {
      ja: "ダブルベッド2台の広い寝室。グループ・ファミリーに最適です。",
      en: "Spacious bedroom with 2 double beds. Perfect for groups and families.",
    },
    images: ["room-2-1.jpg"],
  },
  {
    id: "room-3",
    floor: "",
    name: { ja: "寝室3（クイーン）", en: "Bedroom 3 (Queen)" },
    bedType: { ja: "クイーンベッド×1", en: "1 Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "クイーンベッドの落ち着いた寝室。ゆったりとお休みいただけます。",
      en: "Relaxing bedroom with 1 queen bed.",
    },
    images: ["room-3-1.jpg"],
  }
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16:00、チェックアウトは11:00です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大8名様までご宿泊いただけます。", en: "Up to 8 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "三ノ輪駅（東京メトロ日比谷線）徒歩6分です。", en: "三ノ輪駅 (東京メトロ日比谷線) is a 6 min walk." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
