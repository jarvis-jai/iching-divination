# I Ching Divination 易經占卜

> A rule-based I Ching (易經) divination web application. **No AI APIs** — all interpretations come from traditional texts and deterministic algorithms.

---

## Project Intent

Create an interactive web application that allows users to perform traditional I Ching divination (易經占卜) using the classic coin toss method. The app will generate hexagrams and provide interpretations based on the ancient text, entirely through rule-based logic.

### Why I Ching?

The I Ching (Book of Changes) is one of the oldest Chinese classical texts. It's a perfect candidate for a non-AI divination system because:

1. **Fully rule-based**: 64 hexagrams with defined meanings, no ambiguity
2. **Algorithmic generation**: Coin toss / yarrow stick methods are mathematically precise
3. **Rich interpretation data**: Thousands of years of documented interpretations
4. **Educational value**: Users learn about Chinese philosophy and symbolism

---

## Constraints

### ❌ No AI APIs

This project explicitly forbids:
- OpenAI, Anthropic, or any LLM API calls
- Machine learning models for interpretation
- "Smart" or "personalized" readings based on user data

### ✅ What IS Allowed

- Static rule tables and lookup dictionaries
- Pseudo-random number generation for coin tosses
- Mathematical calculations for hexagram construction
- Pre-written interpretations from classical texts
- User input for question framing (optional)

---

## In Scope

| Feature | Description |
|---------|-------------|
| Hexagram generation | Simulate 3-coin toss × 6 lines |
| Primary hexagram display | Show the resulting hexagram with name (Chinese + English) |
| Changing lines | Identify and highlight changing lines (老陰/老陽) |
| Relating hexagram | Calculate and display the transformed hexagram |
| Interpretations | Display judgments, images, and line texts from classical sources |
| Mobile-responsive UI | Works on phone and desktop |
| Bilingual support | Chinese and English text |

## Out of Scope (for v1)

| Feature | Reason |
|---------|--------|
| User accounts | Simplicity |
| Reading history | No backend persistence |
| Social sharing | Focus on core functionality |
| Yarrow stalk method | More complex, can add later |
| Public deployment | Per project constraints |

---

## Technical Stack (Planned)

- **Frontend**: HTML/CSS/JavaScript (vanilla or lightweight framework)
- **Data**: JSON files containing hexagram definitions
- **Hosting**: Local development only (no public deployment)
- **Build**: None required, or minimal (e.g., Vite for dev server)

---

## Hexagram Data Structure

Each hexagram will be represented as:

```json
{
  "number": 1,
  "name": {
    "chinese": "乾",
    "pinyin": "qián",
    "english": "The Creative"
  },
  "trigrams": {
    "upper": "☰",
    "lower": "☰"
  },
  "judgment": "...",
  "image": "...",
  "lines": [
    { "position": 1, "text": "..." },
    ...
  ]
}
```

---

## Divination Algorithm

### Coin Toss Method (三錢法)

For each of 6 lines (bottom to top):
1. Toss 3 coins
2. Heads = 3, Tails = 2
3. Sum determines line type:
   - 6 (2+2+2) = Old Yin ⚋ (changing)
   - 7 (2+2+3) = Young Yang ⚊
   - 8 (2+3+3) = Young Yin ⚋
   - 9 (3+3+3) = Old Yang ⚊ (changing)

### Line Building

```
Line 6 (top)    ━━━━━
Line 5          ━━ ━━
Line 4          ━━━━━
Line 3          ━━━━━
Line 2          ━━ ━━
Line 1 (bottom) ━━━━━
```

---

## Development Status

🚧 **In Progress** — Bootstrap phase

### Completed
- [x] Repository created
- [ ] Project structure
- [ ] Hexagram data files
- [ ] Core divination logic
- [ ] Basic UI
- [ ] Interpretation display

---

## License

MIT License — See [LICENSE](LICENSE) for details.

---

## References

- Wilhelm, Richard. *The I Ching or Book of Changes* (1950)
- 《周易》原文
- https://www.iching-online.com (reference, not affiliated)

---

*Built by Jarvis 🤖 — A rule-based system, no AI involved in readings.*
