// Main Application

document.addEventListener('DOMContentLoaded', function() {
    const castButton = document.getElementById('castButton');
    const resultSection = document.getElementById('result');
    const coinsSection = document.getElementById('coins');
    const relatingCard = document.getElementById('relatingCard');
    
    castButton.addEventListener('click', performDivination);
});

function performDivination() {
    const castButton = document.getElementById('castButton');
    const resultSection = document.getElementById('result');
    const coinsSection = document.getElementById('coins');
    
    // Animate button
    castButton.classList.add('casting');
    castButton.disabled = true;
    
    // Simulate coin toss delay for effect
    setTimeout(() => {
        // Cast the hexagram
        const result = castHexagram();
        
        // Get hexagram data
        const primaryHex = getHexagramByBinary(result.primaryBinary);
        let relatingHex = null;
        if (result.relatingBinary) {
            relatingHex = getHexagramByBinary(result.relatingBinary);
        }
        
        // Display results
        displayHexagram(primaryHex, result.lines, 'primary');
        
        if (relatingHex) {
            displayHexagram(relatingHex, null, 'relating');
            document.getElementById('relatingCard').classList.remove('hidden');
        } else {
            document.getElementById('relatingCard').classList.add('hidden');
        }
        
        // Display changing lines info
        displayChangingLinesInfo(result.lines, primaryHex);
        
        // Display coin tosses
        displayCoinTosses(result.tosses);
        
        // Show results
        resultSection.classList.remove('hidden');
        coinsSection.classList.remove('hidden');
        
        // Reset button
        castButton.classList.remove('casting');
        castButton.disabled = false;
        
        // Scroll to results
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    }, 800);
}

function displayHexagram(hexagram, lines, type) {
    const prefix = type;
    const hexagramEl = document.getElementById(`${prefix}Hexagram`);
    const numberEl = document.getElementById(`${prefix}Number`);
    const nameEl = document.getElementById(`${prefix}Name`);
    const judgmentEl = document.getElementById(`${prefix}Judgment`);
    
    // Clear previous
    hexagramEl.innerHTML = '';
    
    // Build hexagram visual (from top to bottom visually, but data is bottom to top)
    for (let i = 5; i >= 0; i--) {
        const lineEl = document.createElement('div');
        lineEl.className = 'hexagram-line';
        
        // Determine if this line is yin or yang
        const bit = hexagram.binary[i];
        const isYang = bit === '1';
        
        lineEl.classList.add(isYang ? 'yang' : 'yin');
        
        // Mark changing lines (only for primary hexagram)
        if (type === 'primary' && lines && lines[i].isChanging) {
            lineEl.classList.add('changing');
        }
        
        hexagramEl.appendChild(lineEl);
    }
    
    // Update info
    numberEl.textContent = hexagram.number;
    nameEl.innerHTML = `${hexagram.name.chinese} <span style="font-size: 0.875em; color: #7f8c8d;">${hexagram.name.english}</span>`;
    
    // Build judgment text
    let judgmentHTML = '';
    if (hexagram.judgmentChinese) {
        judgmentHTML += `<p style="margin-bottom: 0.5rem; font-style: italic;">${hexagram.judgmentChinese}</p>`;
    }
    judgmentHTML += `<p>${hexagram.judgment}</p>`;
    judgmentEl.innerHTML = judgmentHTML;
}

function displayChangingLinesInfo(lines, hexagram) {
    const infoEl = document.getElementById('changingLinesInfo');
    const changingPositions = getChangingLinePositions(lines);
    
    if (changingPositions.length === 0) {
        infoEl.innerHTML = '<p style="color: #7f8c8d;">無變爻 No changing lines</p>';
        return;
    }
    
    let html = '<h3 style="margin-bottom: 1rem;">變爻 Changing Lines</h3>';
    
    changingPositions.forEach(pos => {
        const lineText = getLineText(hexagram, pos);
        const lineInfo = lines[pos - 1];
        const posName = getPositionName(pos);
        
        html += `
            <div class="line-info" style="margin-bottom: 1rem; padding: 0.75rem; background: #f8f8f8; border-radius: 6px; text-align: left;">
                <strong>第${pos}爻 (${posName})</strong>
                <span style="color: #c0392b; margin-left: 0.5rem;">${lineInfo.typeChinese}</span>
                ${lineText ? `<p style="margin-top: 0.5rem; font-size: 0.95rem;">${lineText}</p>` : ''}
            </div>
        `;
    });
    
    infoEl.innerHTML = html;
}

function displayCoinTosses(tosses) {
    const container = document.getElementById('coinTosses');
    container.innerHTML = '';
    
    // Display from bottom to top (line 1 is bottom)
    tosses.forEach((toss, index) => {
        const div = document.createElement('div');
        div.className = 'coin-toss';
        
        const formattedCoins = formatCoins(toss.coins);
        const coinsHTML = formattedCoins.map(c => 
            `<span class="coin ${c === 'H' ? 'heads' : 'tails'}">${c}</span>`
        ).join('');
        
        const isChanging = toss.lineType.isChanging;
        
        div.innerHTML = `
            <span class="line-num">Line ${toss.position}</span>
            <span class="coins">${coinsHTML}</span>
            <span class="sum">= ${toss.sum}</span>
            <span class="line-type ${isChanging ? 'changing' : ''}">
                ${toss.lineType.chinese} ${toss.lineType.name}
                ${isChanging ? ' ✕' : ''}
            </span>
        `;
        
        container.appendChild(div);
    });
}

function getPositionName(pos) {
    const names = ['初', '二', '三', '四', '五', '上'];
    return names[pos - 1] || '';
}
