// Hexagram Data - King Wen Sequence
// Binary format: line1 (bottom) to line6 (top)

const HEXAGRAMS = {
    1: {
        binary: "111111",
        name: { chinese: "乾", pinyin: "qián", english: "The Creative" },
        judgment: "The Creative works sublime success, furthering through perseverance.",
        judgmentChinese: "乾：元，亨，利，貞。",
        image: "The movement of heaven is full of power. Thus the superior man makes himself strong and untiring.",
        lines: [
            "Hidden dragon. Do not act.",
            "Dragon appearing in the field. It furthers one to see the great man.",
            "All day long the superior man is creatively active. At nightfall his mind is beset with cares. Danger. No blame.",
            "Wavering flight over the depths. No blame.",
            "Flying dragon in the heavens. It furthers one to see the great man.",
            "Arrogant dragon will have cause to repent."
        ]
    },
    2: {
        binary: "000000",
        name: { chinese: "坤", pinyin: "kūn", english: "The Receptive" },
        judgment: "The Receptive brings about sublime success, furthering through the perseverance of a mare.",
        judgmentChinese: "坤：元，亨，利牝馬之貞。",
        image: "The earth's condition is receptive devotion. Thus the superior man who has breadth of character carries the outer world.",
        lines: [
            "When there is hoarfrost underfoot, solid ice is not far off.",
            "Straight, square, great. Without purpose, yet nothing remains unfurthered.",
            "Hidden lines. One is able to remain persevering.",
            "A tied-up sack. No blame, no praise.",
            "A yellow lower garment brings supreme good fortune.",
            "Dragons fight in the meadow. Their blood is black and yellow."
        ]
    },
    3: {
        binary: "010001",
        name: { chinese: "屯", pinyin: "zhūn", english: "Difficulty at the Beginning" },
        judgment: "Difficulty at the Beginning works supreme success. Nothing should be undertaken. It furthers one to appoint helpers.",
        judgmentChinese: "屯：元，亨，利，貞，勿用，有攸往，利建侯。",
        image: "Clouds and thunder: The image of Difficulty at the Beginning. Thus the superior man brings order out of confusion.",
        lines: [
            "Hesitation and hindrance. It furthers one to remain persevering.",
            "Difficulties pile up. The girl is chaste; she does not pledge herself.",
            "Whoever hunts deer without the forester only loses his way in the forest.",
            "Horse and wagon part. Strive for union.",
            "Difficulties in blessing. A little perseverance brings good fortune.",
            "Horse and wagon part. Bloody tears flow."
        ]
    },
    4: {
        binary: "100010",
        name: { chinese: "蒙", pinyin: "méng", english: "Youthful Folly" },
        judgment: "Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me.",
        judgmentChinese: "蒙：亨。匪我求童蒙，童蒙求我。",
        image: "A spring wells up at the foot of the mountain. Thus the superior man fosters his character by thoroughness.",
        lines: [
            "To make a fool develop, it furthers one to apply discipline.",
            "To bear with fools in kindliness brings good fortune.",
            "Take not a maiden who loses herself at the sight of a man of bronze.",
            "Entangled folly brings humiliation.",
            "Childlike folly brings good fortune.",
            "In punishing folly, it does not further one to commit transgressions."
        ]
    },
    5: {
        binary: "010111",
        name: { chinese: "需", pinyin: "xū", english: "Waiting" },
        judgment: "Waiting. If you are sincere, you have light and success. Perseverance brings good fortune.",
        judgmentChinese: "需：有孚，光亨，貞吉。利涉大川。",
        image: "Clouds rise up to heaven. Thus the superior man eats and drinks, is joyous and of good cheer.",
        lines: [
            "Waiting in the meadow. It furthers one to abide in what endures. No blame.",
            "Waiting on the sand. There is some gossip. The end brings good fortune.",
            "Waiting in the mud brings about the arrival of the enemy.",
            "Waiting in blood. Get out of the pit.",
            "Waiting at meat and drink. Perseverance brings good fortune.",
            "One falls into the pit. Three uninvited guests arrive. Honor them."
        ]
    },
    6: {
        binary: "111010",
        name: { chinese: "訟", pinyin: "sòng", english: "Conflict" },
        judgment: "Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune.",
        judgmentChinese: "訟：有孚，窒。惕中吉。終凶。",
        image: "Heaven and water go their opposite ways. Thus the superior man carefully considers the beginning.",
        lines: [
            "If one does not perpetuate the affair, there is a little gossip. In the end, good fortune.",
            "One cannot engage in conflict. One returns home safely.",
            "To nourish oneself on ancient virtue induces perseverance. Danger.",
            "One turns back and submits to fate. Peace. Perseverance brings good fortune.",
            "To contend before him brings supreme good fortune.",
            "Even if a leather belt is bestowed, it will be snatched away three times."
        ]
    },
    7: {
        binary: "000010",
        name: { chinese: "師", pinyin: "shī", english: "The Army" },
        judgment: "The Army needs perseverance and a strong man. Good fortune without blame.",
        judgmentChinese: "師：貞，丈人吉，無咎。",
        image: "In the middle of the earth is water. Thus the superior man increases his masses by generosity.",
        lines: [
            "An army must set forth in proper order. If the order is not good, misfortune.",
            "In the midst of the army. Good fortune. The king bestows a triple decoration.",
            "Perchance the army carries corpses in the wagon. Misfortune.",
            "The army retreats. No blame.",
            "There is game in the field. It furthers one to catch it. Without blame.",
            "The great prince issues commands, founds states. Inferior people should not be employed."
        ]
    },
    8: {
        binary: "010000",
        name: { chinese: "比", pinyin: "bǐ", english: "Holding Together" },
        judgment: "Holding Together brings good fortune. Inquire of the oracle again whether you possess constancy.",
        judgmentChinese: "比：吉。原筮元永貞，無咎。",
        image: "On the earth is water. Thus the kings bestowed states and cultivated friendly relations.",
        lines: [
            "Hold to him in truth and loyalty; this is without blame.",
            "Hold to him inwardly. Perseverance brings good fortune.",
            "You hold together with the wrong people.",
            "Hold to him outwardly also. Perseverance brings good fortune.",
            "Manifestation of holding together. In the hunt the king uses beaters on three sides.",
            "He finds no head for holding together. Misfortune."
        ]
    },
    // Adding more hexagrams for broader coverage
    11: {
        binary: "000111",
        name: { chinese: "泰", pinyin: "tài", english: "Peace" },
        judgment: "Peace. The small departs, the great approaches. Good fortune. Success.",
        judgmentChinese: "泰：小往大來，吉亨。",
        image: "Heaven and earth unite: the image of Peace. Thus the ruler divides and completes the course of heaven and earth.",
        lines: [
            "When ribbon grass is pulled up, the sod comes with it. Undertakings bring good fortune.",
            "Bearing with the uncultured in gentleness brings good fortune.",
            "No plain not followed by a slope. No going not followed by a return.",
            "He flutters down, not boasting of his wealth with his neighbor.",
            "The sovereign gives his daughter in marriage. This brings blessing and supreme good fortune.",
            "The wall falls back into the moat. Use no army now."
        ]
    },
    12: {
        binary: "111000",
        name: { chinese: "否", pinyin: "pǐ", english: "Standstill" },
        judgment: "Standstill. Evil people do not further the perseverance of the superior man.",
        judgmentChinese: "否之匪人，不利君子貞，大往小來。",
        image: "Heaven and earth do not unite: the image of Standstill. Thus the superior man falls back upon his inner worth.",
        lines: [
            "When ribbon grass is pulled up, the sod comes with it. Perseverance brings good fortune.",
            "They bear and endure; this means good fortune for inferior people.",
            "They bear shame.",
            "He who acts at the command of the highest remains without blame.",
            "Standstill is giving way. Good fortune for the great man.",
            "The standstill comes to an end. First standstill, then good fortune."
        ]
    },
    63: {
        binary: "010101",
        name: { chinese: "既濟", pinyin: "jì jì", english: "After Completion" },
        judgment: "After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune.",
        judgmentChinese: "既濟：亨，小利貞，初吉終亂。",
        image: "Water over fire: the image of the condition in After Completion. Thus the superior man takes thought of misfortune.",
        lines: [
            "He brakes his wheels. He gets his tail in the water. No blame.",
            "The woman loses the curtain of her carriage. Do not run after it; on the seventh day you will get it.",
            "The Illustrious Ancestor disciplines the Devil's Country. After three years he conquers it.",
            "The finest clothes turn to rags. Be careful all day long.",
            "The neighbor in the east who slaughters an ox does not attain as much real happiness.",
            "He gets his head in the water. Danger."
        ]
    },
    64: {
        binary: "101010",
        name: { chinese: "未濟", pinyin: "wèi jì", english: "Before Completion" },
        judgment: "Before Completion. Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further.",
        judgmentChinese: "未濟：亨，小狐汔濟，濡其尾，無攸利。",
        image: "Fire over water: the image of the condition before transition. Thus the superior man is careful in differentiating things.",
        lines: [
            "He gets his tail in the water. Humiliating.",
            "He brakes his wheels. Perseverance brings good fortune.",
            "Before completion, attack brings misfortune. It furthers one to cross the great water.",
            "Perseverance brings good fortune. Remorse disappears. Shock to discipline the Devil's Country.",
            "Perseverance brings good fortune. No remorse. The light of the superior man is true.",
            "There is drinking of wine in genuine confidence. No blame. But if one wets his head, he loses it."
        ]
    }
};

// Binary to hexagram number lookup (King Wen sequence)
const BINARY_TO_NUMBER = {
    "111111": 1,
    "000000": 2,
    "010001": 3,
    "100010": 4,
    "010111": 5,
    "111010": 6,
    "000010": 7,
    "010000": 8,
    "110111": 9,
    "111011": 10,
    "000111": 11,
    "111000": 12,
    "111101": 13,
    "101111": 14,
    "000100": 15,
    "001000": 16,
    "011001": 17,
    "100110": 18,
    "000011": 19,
    "110000": 20,
    "101001": 21,
    "100101": 22,
    "100000": 23,
    "000001": 24,
    "111001": 25,
    "100111": 26,
    "100001": 27,
    "011110": 28,
    "010010": 29,
    "101101": 30,
    "011100": 31,
    "001110": 32,
    "111100": 33,
    "001111": 34,
    "101000": 35,
    "000101": 36,
    "110101": 37,
    "101011": 38,
    "010100": 39,
    "001010": 40,
    "100011": 41,
    "110001": 42,
    "011111": 43,
    "111110": 44,
    "011000": 45,
    "000110": 46,
    "011010": 47,
    "010110": 48,
    "011101": 49,
    "101110": 50,
    "001001": 51,
    "100100": 52,
    "110100": 53,
    "001011": 54,
    "001101": 55,
    "101100": 56,
    "110110": 57,
    "011011": 58,
    "110010": 59,
    "010011": 60,
    "110011": 61,
    "001100": 62,
    "010101": 63,
    "101010": 64
};

function getHexagramByBinary(binary) {
    const number = BINARY_TO_NUMBER[binary];
    if (number && HEXAGRAMS[number]) {
        return { ...HEXAGRAMS[number], number };
    }
    // Return a placeholder if hexagram data not yet available
    return {
        number: number || 0,
        binary: binary,
        name: { chinese: "?", pinyin: "?", english: "Unknown" },
        judgment: "This hexagram's interpretation data is not yet available.",
        lines: ["", "", "", "", "", ""]
    };
}

function getHexagramByNumber(number) {
    if (HEXAGRAMS[number]) {
        return { ...HEXAGRAMS[number], number };
    }
    return null;
}
