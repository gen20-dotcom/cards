# Body Deck APK Builder

This is the final GitHub Actions APK builder for the Body Deck workout app.

## Features

- Beginner / Intermediate / Tyson modes
- 54 total cards
- Start Joker = Roadwork / Running
- End Joker = Neck Isometric + Grip Hold punishment
- 52 normal workout cards
- Same workouts across levels:
  - Hearts = Push-ups
  - Diamonds = Squats
  - Clubs = Sit-ups
  - Spades = Burpees
- No repeated cards
- Final card is always End Joker
- Button becomes Reset Deck after all 54 cards

## Build APK online

1. Create a new GitHub repository.
2. Upload all files from this folder into the repository root.
3. Go to Actions.
4. Open Build Android APK.
5. Click Run workflow.
6. After green tick, download artifact: body-deck-debug-apk.
7. Extract it and install app-debug.apk on your Android phone.

Important: Upload the files directly into the root. Do not upload the outer folder as one folder.
