// Divination Logic - Coin Toss Method (三錢法)

/**
 * Line types:
 * 6 = Old Yin (太陰) - changing, becomes Yang
 * 7 = Young Yang (少陽) - stable
 * 8 = Young Yin (少陰) - stable
 * 9 = Old Yang (太陽) - changing, becomes Yin
 */

const LINE_TYPES = {
    6: { name: "Old Yin", chinese: "太陰", isYin: true, isChanging: true },
    7: { name: "Young Yang", chinese: "少陽", isYin: false, isChanging: false },
    8: { name: "Young Yin", chinese: "少陰", isYin: true, isChanging: false },
    9: { name: "Old Yang", chinese: "太陽", isYin: false, isChanging: true }
};

/**
 * Simulate a single coin toss
 * @returns {number} 2 for tails, 3 for heads
 */
function tossCoin() {
    return Math.random() < 0.5 ? 2 : 3;
}

/**
 * Toss three coins and return the result
 * @returns {{coins: number[], sum: number, lineType: number}}
 */
function tossThreeCoins() {
    const coins = [tossCoin(), tossCoin(), tossCoin()];
    const sum = coins.reduce((a, b) => a + b, 0);
    return {
        coins,
        sum,
        lineType: sum
    };
}

/**
 * Generate a complete hexagram using the coin toss method
 * @returns {{lines: object[], primaryBinary: string, relatingBinary: string|null, hasChangingLines: boolean, tosses: object[]}}
 */
function castHexagram() {
    const lines = [];
    const tosses = [];
    
    // Cast 6 lines from bottom (1) to top (6)
    for (let i = 0; i < 6; i++) {
        const toss = tossThreeCoins();
        const lineInfo = LINE_TYPES[toss.lineType];
        
        lines.push({
            position: i + 1,
            value: toss.lineType,
            isYin: lineInfo.isYin,
            isChanging: lineInfo.isChanging,
            typeName: lineInfo.name,
            typeChinese: lineInfo.chinese
        });
        
        tosses.push({
            position: i + 1,
            coins: toss.coins,
            sum: toss.sum,
            lineType: lineInfo
        });
    }
    
    // Build primary hexagram binary (from bottom to top)
    const primaryBinary = lines.map(l => l.isYin ? "0" : "1").join("");
    
    // Check for changing lines
    const hasChangingLines = lines.some(l => l.isChanging);
    
    // Build relating hexagram binary (with changes applied)
    let relatingBinary = null;
    if (hasChangingLines) {
        relatingBinary = lines.map(l => {
            if (l.isChanging) {
                return l.isYin ? "1" : "0"; // Flip the line
            }
            return l.isYin ? "0" : "1";
        }).join("");
    }
    
    return {
        lines,
        primaryBinary,
        relatingBinary,
        hasChangingLines,
        tosses
    };
}

/**
 * Get changing line positions (1-indexed)
 * @param {object[]} lines - Array of line objects
 * @returns {number[]} Array of positions with changing lines
 */
function getChangingLinePositions(lines) {
    return lines.filter(l => l.isChanging).map(l => l.position);
}

/**
 * Format coin toss result for display
 * @param {number[]} coins - Array of 3 coin values (2 or 3)
 * @returns {string[]} Array of 'H' or 'T' strings
 */
function formatCoins(coins) {
    return coins.map(c => c === 3 ? 'H' : 'T');
}

/**
 * Get line text based on position
 * @param {object} hexagram - Hexagram object
 * @param {number} position - Line position (1-6)
 * @returns {string} Line interpretation text
 */
function getLineText(hexagram, position) {
    if (hexagram && hexagram.lines && hexagram.lines[position - 1]) {
        return hexagram.lines[position - 1];
    }
    return "";
}
