# WINT Game Factory workflow

## Pipeline

1. Human: concept
2. ChatGPT: GDD + prototype
3. Gemini: art + content + balance
4. Claude Code: production hardening
5. Human: QA + approval
6. Platform builds

## Rules

- `docs/GDD.md` is the product truth.
- `docs/GAME_SPEC.md` defines gameplay contracts.
- `docs/ART_SPEC.md` defines visual requirements.
- `docs/BALANCE.md` defines tunable numbers.
- AI agents must not silently change approved core gameplay.
- Every major handoff gets a Git commit.
