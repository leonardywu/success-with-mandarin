# Success with Mandarin

Static website for Success with Mandarin, part of Kemix Academy. Run `node server.cjs`, then visit http://127.0.0.1:4178.
Public website: https://leonardywu.github.io/success-with-mandarin/

GitHub Pages publishes the `dist` directory automatically when changes are pushed to `main`. The repository is public. Local preview remains available through `node server.cjs`.

## Editing
- `dist/app.js`: course descriptions, sample base rates, bundle discounts, WhatsApp number, vocabulary quiz.
- `dist/index.html`: page content, schedule, FAQ, social links.
- `dist/styles.css`: visual styles and responsive layout.
- `dist/assets`: supplied brand logos.

## Items to confirm before launch
- All prices are placeholders. Suggested 12-session discount: 10%; 24-session discount: 20%.
- Base per-session examples: HSK 1 100,000; HSK 2 110,000; HSK 3 120,000; HSK 4 140,000; HSK 5 160,000; TOCFL 140,000 IDR.
- Session duration, group/private format, maximum class size, platform, timezone, exact schedules, and bundle validity.
- Tutor profile and verified qualifications; no fabricated credentials or testimonials are displayed.
- Certificate issuer/requirements, payment, rescheduling and cancellation rules.
- Quiz is casual beginner vocabulary practice, not a formal HSK level assessment. Tutor review recommended before launch.

Website opens a prefilled WhatsApp draft; it does not send a message automatically. Quiz data stays in page memory and resets on reload. No signup or analytics tracking is included. Google Fonts requires internet; local font fallbacks are provided.

## Quiz levels
- Beginner: 10 everyday vocabulary questions, with pinyin.
- Advanced / HSK 5: 4 vocabulary-in-context questions and 6 sentence-completion questions; original items using classic HSK 5 vocabulary, with Indonesian explanations.
- Level selection before starting; retry the same level or select another after finishing. Scores and WhatsApp drafts include the selected level.
- Reference for curriculum review: Chinese Testing International's resource center, https://admin.chinesetest.cn/godownload.do (HSK 5 syllabus and 2015 vocabulary list). The quiz is an informal vocabulary exercise, not an official examination or a claim of full syllabus coverage.
- Verified both 10-question flows, mixed and perfect scores, retry, level-switch reset, WhatsApp level/score text, and mobile sentence wrapping.
