// Trigrams Data
const TRIGRAMS = {
    "111": { number: 1, chinese: "乾", pinyin: "qián", english: "Heaven", symbol: "☰" },
    "110": { number: 2, chinese: "兌", pinyin: "duì", english: "Lake", symbol: "☱" },
    "101": { number: 3, chinese: "離", pinyin: "lí", english: "Fire", symbol: "☲" },
    "100": { number: 4, chinese: "震", pinyin: "zhèn", english: "Thunder", symbol: "☳" },
    "011": { number: 5, chinese: "巽", pinyin: "xùn", english: "Wind", symbol: "☴" },
    "010": { number: 6, chinese: "坎", pinyin: "kǎn", english: "Water", symbol: "☵" },
    "001": { number: 7, chinese: "艮", pinyin: "gèn", english: "Mountain", symbol: "☶" },
    "000": { number: 8, chinese: "坤", pinyin: "kūn", english: "Earth", symbol: "☷" }
};

function getTrigram(binary) {
    return TRIGRAMS[binary] || null;
}
