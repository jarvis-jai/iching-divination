# I Ching Research Notes

> Research findings for the rule-based divination system.

---

## 1. Hexagram Structure

Each of the 64 hexagrams consists of:

### Core Components
| Component | Description |
|-----------|-------------|
| **Number** | 1-64 (King Wen sequence) |
| **Name** | Chinese (e.g., 乾) + Pinyin + English (e.g., The Creative) |
| **Upper Trigram** | One of 8 trigrams (lines 4-6) |
| **Lower Trigram** | One of 8 trigrams (lines 1-3) |
| **Judgment** | Main divinatory text (彖辭) |
| **Image** | Poetic description (象辭) |
| **Lines** | 6 individual line interpretations (爻辭) |

### Binary Representation
- Each line is either solid (1/Yang) or broken (0/Yin)
- 6 lines = 6 bits = 64 combinations (2^6)
- Read from bottom (line 1) to top (line 6)

Example: Hexagram 1 (乾 The Creative)
```
Line 6 (top):    ━━━━━  (1)
Line 5:          ━━━━━  (1)
Line 4:          ━━━━━  (1)
Line 3:          ━━━━━  (1)
Line 2:          ━━━━━  (1)
Line 1 (bottom): ━━━━━  (1)

Binary: 111111
```

---

## 2. The Eight Trigrams (八卦)

| # | Name | Chinese | Symbol | Element | Quality |
|---|------|---------|--------|---------|---------|
| 1 | Qián | 乾 | ☰ | Heaven | Creative |
| 2 | Duì | 兌 | ☱ | Lake | Joyous |
| 3 | Lí | 離 | ☲ | Fire | Clinging |
| 4 | Zhèn | 震 | ☳ | Thunder | Arousing |
| 5 | Xùn | 巽 | ☴ | Wind/Wood | Gentle |
| 6 | Kǎn | 坎 | ☵ | Water | Abysmal |
| 7 | Gèn | 艮 | ☶ | Mountain | Stillness |
| 8 | Kūn | 坤 | ☷ | Earth | Receptive |

### Trigram Binary Values
```
☰ Qián (Heaven):   111
☱ Duì (Lake):      110
☲ Lí (Fire):       101
☳ Zhèn (Thunder):  100
☴ Xùn (Wind):      011
☵ Kǎn (Water):     010
☶ Gèn (Mountain):  001
☷ Kūn (Earth):     000
```

---

## 3. Coin Toss Method (三錢法)

### Algorithm
For each of 6 lines (bottom to top):
1. Toss 3 coins simultaneously
2. Assign values: Heads = 3, Tails = 2
3. Sum the three values (range: 6-9)
4. Determine line type:

| Sum | Line Type | Symbol | Changing? |
|-----|-----------|--------|-----------|
| 6 | Old Yin (太陰) | ⚋ ✕ | Yes → Yang |
| 7 | Young Yang (少陽) | ⚊ | No |
| 8 | Young Yin (少陰) | ⚋ | No |
| 9 | Old Yang (太陽) | ⚊ ✕ | Yes → Yin |

### Probability Distribution
- P(6) = 1/8 = 12.5% (TTT)
- P(7) = 3/8 = 37.5% (TTH, THT, HTT)
- P(8) = 3/8 = 37.5% (THH, HTH, HHT)
- P(9) = 1/8 = 12.5% (HHH)

### Changing Lines
When a line is "old" (6 or 9), it transforms:
- Old Yin (6) → becomes Yang
- Old Yang (9) → becomes Yin

This creates a **relating hexagram** (之卦) in addition to the **primary hexagram** (本卦).

---

## 4. Data Sources

### Primary Source
- **Wilhelm-Baynes Translation** (1950)
  - Richard Wilhelm's German translation
  - Rendered to English by Cary F. Baynes
  - Most comprehensive English version
  - Public domain considerations: Translation copyrighted, but original text is ancient

### Online References (for data structure)
- https://www.iching-online.com/hexagrams/
- Structure includes Judgement, Image, and 6 Line texts

### Data Strategy
1. Create JSON structure with hexagram metadata
2. Include both Chinese and English text
3. Attribution to Wilhelm-Baynes or use simplified interpretations
4. For MVP: Use condensed interpretations to avoid copyright issues

---

## 5. King Wen Sequence

The traditional ordering of hexagrams (文王序):

| # | Binary | Hex | English |
|---|--------|-----|---------|
| 1 | 111111 | 乾 | Creative |
| 2 | 000000 | 坤 | Receptive |
| 3 | 010001 | 屯 | Difficulty |
| 4 | 100010 | 蒙 | Folly |
| 5 | 010111 | 需 | Waiting |
| ... | ... | ... | ... |
| 63 | 010101 | 既濟 | After Completion |
| 64 | 101010 | 未濟 | Before Completion |

Note: Binary ≠ hexagram number in King Wen sequence!

---

## 6. Implementation Notes

### MVP Features
1. Generate hexagram via simulated coin toss
2. Display primary hexagram with name
3. Identify changing lines
4. Display relating hexagram (if any)
5. Show Judgement text for both hexagrams

### Future Features
- Full line interpretations
- Yarrow stalk method
- Historical question tracking
- Animation for coin toss

---

## References

1. Wilhelm, R. & Baynes, C. (1950). *The I Ching or Book of Changes*
2. https://www.iching-online.com
3. 《周易》原文

---

*Research completed: 2026-01-27 by Jarvis*
