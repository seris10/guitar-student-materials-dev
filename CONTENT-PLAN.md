# Guitar Club - Skill Tree Content Plan

**Total Skills:** 162 across 10 branches
**Current Coverage:** 20 of 162 (12%) have content
**Target:** Individual lesson page for every skill node

---

## Content Status Summary

| Status | Count | Description |
|--------|-------|-------------|
| Has lesson page | 1 | Custom HTML page exists in `/skills/` |
| JustinGuitar linked | 19 | Has YouTube video ID + lesson URL |
| Needs content | 142 | No video or lesson content yet |

## Content Strategy

Each skill node gets its own lesson page at `skills/{skill-id}.html` following the template established by `parts-of-guitar.html`. Each page includes:

1. **Overview** - Written description explaining the concept
2. **Video Lesson** - Embedded YouTube video (JustinGuitar where available, or other free beginner sources)
3. **Diagram/Visual** - Relevant image, chord diagram, or interactive element
4. **Knowledge Check** - 2-3 quiz questions testing comprehension
5. **Sidebar** - Progress tracker, prerequisites list, unlocked skills

### Content Source Priority

1. **JustinGuitar** (free, high quality, beginner-focused) - already mapped for 19 skills
2. **YouTube search** for remaining skills - channels like Andy Guitar, Marty Music, GuitarZero2Hero
3. **Custom written content** for concepts that don't have good free video matches (care/maintenance, theory concepts)
4. **Interactive elements** for practice-based skills (metronome exercises, chord transition drills)

---

## Branch 1: Guitar Foundations (14 skills)

### 1.1 Know Your Instrument (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| FOUND-001 | Parts of the Guitar | 1 | HAS PAGE | `skills/parts-of-guitar.html` exists. Needs video added. |
| FOUND-002 | String Names (EADGBE) | 1 | NEEDS | Written lesson with mnemonic device. Video: search "guitar string names for beginners". Diagram: string layout with names. Quiz: identify strings by number/name. |
| FOUND-003 | Fret Numbers & Markers | 1 | NEEDS | Written lesson on fret numbering system. Video: search "guitar fret numbers explained". Diagram: fretboard with numbers/dots marked. Quiz: identify fret positions. |
| FOUND-004 | Guitar Types (Acoustic vs Electric) | 1 | NEEDS | Written comparison of acoustic vs electric. Video: search "acoustic vs electric guitar for beginners". Diagram: side-by-side labeled comparison. Quiz: identify features of each type. |

### 1.2 Holding & Posture (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| POST-001 | Seated Position (casual) | 1 | LINKED | JustinGuitar video `MlV6WhM9YhE`. Embed video + write overview of casual seated position. |
| POST-002 | Seated Position (classical) | 2 | NEEDS | Written lesson on classical position (guitar on left leg). Video: search "classical guitar sitting position". Diagram: posture illustration. |
| POST-003 | Standing with Strap | 2 | NEEDS | Written lesson on strap attachment + standing posture. Video: search "how to use guitar strap beginners". |
| POST-004 | Arm & Wrist Relaxation | 1 | NEEDS | Written lesson on tension awareness. Video: search "guitar arm wrist relaxation exercises". |
| POST-005 | Thumb Position (back of neck) | 2 | NEEDS | Written lesson on proper thumb placement. Video: search "guitar thumb position behind neck". Diagram: hand position photo/illustration. |

### 1.3 Basic Care & Maintenance (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| CARE-001 | Using a Tuner App | 1 | LINKED | JustinGuitar video `X2EmpWr9vUc`. Embed + write overview. Link to free tuner apps. |
| CARE-002 | Tuning by Ear (reference pitch) | 3 | NEEDS | Written lesson on relative tuning method. Video: search "tune guitar by ear beginners". Interactive: include audio reference tones if possible. |
| CARE-003 | Wiping Down Strings | 1 | NEEDS | Custom written lesson (short, practical). Video: search "how to clean guitar strings". Mostly text-based with tips. |
| CARE-004 | Proper Storage | 1 | NEEDS | Custom written lesson on cases, stands, humidity. Mostly text + images. |
| CARE-005 | When Strings Need Changing | 2 | NEEDS | Written guide on signs of worn strings. Video: search "when to change guitar strings". |

---

## Branch 2: Right Hand Technique (21 skills)

### 2.1 Pick Basics (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| PICK-001 | Holding the Pick | 1 | LINKED | JustinGuitar video `-04Et5qIoa4`. Embed + write overview. Diagram: hand holding pick close-up. |
| PICK-002 | Pick Angle & Pressure | 2 | NEEDS | Written lesson on pick tilt and grip pressure. Video: search "guitar pick angle technique". |
| PICK-003 | Downstroke (single strings) | 1 | NEEDS | Written lesson + exercise. Video: search "guitar downstroke picking single string". |
| PICK-004 | Upstroke (single strings) | 2 | NEEDS | Written lesson + exercise. Video: search "guitar upstroke picking". |
| PICK-005 | Alternate Picking (single string) | 2 | NEEDS | Written lesson combining down+up. Video: search "alternate picking beginner guitar". Exercise: metronome drill. |

### 2.2 Strumming Foundations (6 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| STRUM-001 | Full Downstroke (all strings) | 1 | NEEDS | Written lesson on strumming motion. Video: search "guitar strumming basics downstroke". |
| STRUM-002 | Full Upstroke (all strings) | 2 | NEEDS | Written lesson. Video: search "guitar upstroke strumming". |
| STRUM-003 | Down-Down-Down-Down Pattern | 1 | NEEDS | Written lesson with rhythm notation. Video: search "basic down strum pattern guitar". Exercise: play with metronome. |
| STRUM-004 | Down-Up Pattern (continuous) | 2 | NEEDS | Written lesson. Video: search "down up strumming pattern guitar". |
| STRUM-005 | Muted Strumming (percussive) | 2 | NEEDS | Written lesson on palm muting for rhythm. Video: search "muted strumming technique guitar". |
| STRUM-006 | Selective String Strumming | 3 | NEEDS | Written lesson on targeting string groups. Video: search "selective strumming guitar". |

### 2.3 Strumming Patterns (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| PATT-001 | Basic 4/4 Pattern (D D D D) | 1 | NEEDS | Written lesson with pattern notation. Video: search "4/4 strum pattern guitar beginner". |
| PATT-002 | Simple Folk Pattern (D DU UD) | 2 | NEEDS | Written lesson. Video: search "folk strumming pattern guitar". |
| PATT-003 | Pop/Rock Pattern | 2 | NEEDS | Written lesson. Video: search "pop rock strumming pattern guitar". |
| PATT-004 | Accented Downbeats | 2 | NEEDS | Written lesson on dynamic emphasis. Video: search "accent strumming guitar". |
| PATT-005 | Reggae Upstroke Pattern | 3 | NEEDS | Written lesson on off-beat emphasis. Video: search "reggae strumming pattern guitar". |

### 2.4 Fingerpicking Intro (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| FING-001 | Thumb on Bass Strings | 2 | NEEDS | Written lesson on thumb technique. Video: search "fingerpicking thumb guitar beginners". |
| FING-002 | Index on G String | 2 | NEEDS | Written lesson on finger assignment. Video: search "fingerpicking finger assignment guitar". |
| FING-003 | Middle on B String | 2 | NEEDS | Written lesson (part of finger assignment series). |
| FING-004 | Ring on High E String | 2 | NEEDS | Written lesson (part of finger assignment series). |
| FING-005 | Basic T-1-2-3 Pattern | 3 | NEEDS | Written lesson with tab notation. Video: search "basic fingerpicking pattern guitar T123". |

---

## Branch 3: Left Hand Technique (16 skills)

### 3.1 Finger Mechanics (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| FRET-001 | Using Fingertips (not pads) | 1 | LINKED | JustinGuitar video `VB0vWNqNMbA`. Embed + overview. Diagram: fingertip vs pad illustration. |
| FRET-002 | Pressing Near the Fret Wire | 2 | NEEDS | Written lesson on fret positioning. Video: search "press near fret wire guitar". Diagram: finger placement zones. |
| FRET-003 | Minimum Pressure for Clean Note | 2 | NEEDS | Written lesson + exercise. Video: search "minimum pressure guitar fretting". |
| FRET-004 | Curved Fingers (not flat) | 2 | NEEDS | Written lesson on finger curvature. Video: search "curved fingers guitar fretting technique". |
| FRET-005 | Avoiding String Muting | 2 | NEEDS | Written lesson on clearing adjacent strings. Video: search "avoid muting strings guitar". |

### 3.2 Finger Independence (6 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| INDEP-001 | One Finger Per Fret Concept | 1 | NEEDS | Written lesson on finger-per-fret system. Video: search "one finger per fret guitar". Diagram: hand position on frets 1-4. |
| INDEP-002 | Index Finger Control | 1 | NEEDS | Written exercise lesson. Video: search "guitar finger independence exercises". |
| INDEP-003 | Middle Finger Control | 2 | NEEDS | Written exercise lesson (series with INDEP-002). |
| INDEP-004 | Ring Finger Control | 2 | NEEDS | Written exercise lesson. |
| INDEP-005 | Pinky Finger Control | 3 | NEEDS | Written exercise lesson. Video: search "guitar pinky finger strength exercises". |
| INDEP-006 | Spider Exercise (chromatic) | 3 | NEEDS | Written lesson with tab. Video: search "spider exercise guitar chromatic". Tab diagram of 1-2-3-4 pattern. |

### 3.3 Fretting Single Notes (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SNOTE-001 | Clean Open String Notes | 1 | NEEDS | Written lesson on open string technique. Exercise: play each open string cleanly. |
| SNOTE-002 | Clean 1st Fret Note | 1 | NEEDS | Written lesson + exercise. |
| SNOTE-003 | Clean 3rd Fret Note | 1 | NEEDS | Written lesson + exercise. |
| SNOTE-004 | Moving Between Frets (same string) | 2 | NEEDS | Written lesson + exercise. Video: search "moving between frets guitar exercise". |
| SNOTE-005 | Moving Between Strings | 2 | NEEDS | Written lesson + exercise. Video: search "string crossing guitar exercise". |

---

## Branch 4: Basic Chords (17 skills)

### 4.1 Two-Finger Chords (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| CHORD-001 | Em Chord | 1 | LINKED | JustinGuitar video `lqcd3jVysXY`. Chord diagram + finger photo. |
| CHORD-002 | E Major Chord | 2 | LINKED | JustinGuitar video `9NSoRXC9PJI`. Chord diagram + finger photo. |
| CHORD-003 | Am Chord | 2 | LINKED | JustinGuitar video `1Y2veGF9s44`. Chord diagram + finger photo. |
| CHORD-004 | A Major (easy shape) | 2 | LINKED | JustinGuitar video `1X2rW5ATdLQ`. Chord diagram + finger photo. |

### 4.2 Three-Finger Chords (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| CHORD-005 | D Major Chord | 2 | LINKED | JustinGuitar video `QkrIZBLZEXw`. Chord diagram + finger photo. |
| CHORD-006 | Dm Chord | 2 | LINKED | JustinGuitar video `8mFF8NYVdtI`. Chord diagram + finger photo. |
| CHORD-007 | G Major (easy 3-finger) | 2 | LINKED | JustinGuitar video `i0G69vCTv4s`. Chord diagram + finger photo. |
| CHORD-008 | C Major (3-finger version) | 3 | LINKED | JustinGuitar video `f18EV2dr008`. Chord diagram + finger photo. |

### 4.3 Four-Finger Chords (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| CHORD-009 | C Major (full shape) | 3 | NEEDS | Written lesson on full C shape. Video: search "C major chord guitar full shape". Chord diagram. |
| CHORD-010 | G Major (full shape) | 3 | NEEDS | Written lesson on full G shape. Video: search "G major chord guitar full shape". Chord diagram. |
| CHORD-011 | A7 Chord | 2 | NEEDS | Written lesson. Video: search "A7 chord guitar beginner". Chord diagram. |
| CHORD-012 | D7 Chord | 2 | NEEDS | Written lesson. Video: search "D7 chord guitar beginner". Chord diagram. |
| CHORD-013 | E7 Chord | 2 | NEEDS | Written lesson. Video: search "E7 chord guitar beginner". Chord diagram. |

### 4.4 Chord Quality (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| QUAL-001 | Clean Chord Sound Check | 2 | NEEDS | Written exercise: strum each string individually to check. Video: search "check chord quality guitar". |
| QUAL-002 | Identifying Buzzing Strings | 2 | NEEDS | Written troubleshooting guide. Video: search "fix buzzing guitar chords". |
| QUAL-003 | Fixing Muted Notes | 2 | NEEDS | Written troubleshooting guide. |
| QUAL-004 | Chord Arpeggiation Test | 3 | NEEDS | Written exercise: pick each string of chord separately. |

---

## Branch 5: Chord Transitions (16 skills)

### 5.1 Foundation Transitions (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| TRANS-001 | Em to E Transition | 1 | NEEDS | Written lesson on one-finger movement. Exercise: switch back and forth. Video: search "Em to E chord change guitar". |
| TRANS-002 | Am to E Transition | 2 | NEEDS | Written lesson. Exercise with metronome. |
| TRANS-003 | G to Em Transition | 2 | NEEDS | Written lesson. Exercise with metronome. |
| TRANS-004 | D to A Transition | 2 | NEEDS | Written lesson. Exercise with metronome. |

### 5.2 Common Progressions (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| TRANS-005 | G-C-D Loop | 3 | NEEDS | Written lesson on I-IV-V in G. Video: search "G C D chord progression guitar". Exercise: loop with strum pattern. |
| TRANS-006 | Em-Am-D-G Loop | 3 | NEEDS | Written lesson. Exercise: loop drill. |
| TRANS-007 | C-Am-F-G (with easy F) | 3 | NEEDS | Written lesson introducing easy F shape. Video: search "easy F chord guitar beginner". |
| TRANS-008 | A-D-E Loop (rock progression) | 3 | NEEDS | Written lesson on classic rock changes. Exercise: loop drill. |

### 5.3 Transition Speed (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SPEED-001 | 1 Change per 4 Beats | 2 | NEEDS | Written exercise with metronome at 60 BPM. |
| SPEED-002 | 1 Change per 2 Beats | 3 | NEEDS | Written exercise with metronome at 60 BPM. |
| SPEED-003 | 1 Change per Beat | 4 | NEEDS | Written exercise with metronome at 60-80 BPM. |
| SPEED-004 | No Gap Between Chords | 3 | NEEDS | Written lesson on eliminating dead air. Video: search "smooth chord changes no gap guitar". |

### 5.4 Transition Techniques (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| TECH-001 | Anchor Finger Concept | 2 | LINKED | JustinGuitar video `Se__aa_k-ms`. Written lesson on shared fingers between chords. |
| TECH-002 | Open String Buffer | 2 | NEEDS | Written lesson on using open strings during changes. |
| TECH-003 | Finger Lifting Together | 3 | NEEDS | Written lesson on simultaneous finger movement. |
| TECH-004 | Air Changes (no looking) | 3 | NEEDS | Written exercise: practice chord shapes in the air. Video: search "air changes guitar practice technique". |

---

## Branch 6: Rhythm & Timing (20 skills)

### 6.1 Pulse & Beat (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| RHYT-001 | Feeling the Beat (clapping) | 1 | LINKED | JustinGuitar video `RPBtKqD6ddQ`. Exercise: clap along to songs. |
| RHYT-002 | Counting 1-2-3-4 | 1 | NEEDS | Written lesson on counting quarter notes. Exercise: count aloud while clapping. |
| RHYT-003 | Playing on the Beat | 2 | NEEDS | Written lesson on synchronizing strum with count. |
| RHYT-004 | Counting 1-and-2-and-3-and-4-and | 2 | LINKED | JustinGuitar video `U1TMGzcbbLE`. Written lesson on eighth note counting. |
| RHYT-005 | Playing Eighth Notes | 2 | NEEDS | Written lesson + exercise. |

### 6.2 Metronome Skills (6 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| METRO-001 | Using a Metronome App | 1 | LINKED | JustinGuitar video `sNa44EmrsDc`. Link to free metronome apps. Reference site's built-in tuner page. |
| METRO-002 | Clapping with Metronome | 1 | NEEDS | Written exercise: clap on each click at 60 BPM. |
| METRO-003 | Strumming at 60 BPM | 2 | NEEDS | Written exercise: down strums at 60 BPM. |
| METRO-004 | Strumming at 80 BPM | 2 | NEEDS | Written exercise: down strums at 80 BPM. |
| METRO-005 | Strumming at 100 BPM | 3 | NEEDS | Written exercise: down strums at 100 BPM. |
| METRO-006 | Chords with Metronome | 3 | NEEDS | Written exercise: chord changes timed to metronome. |

### 6.3 Note Values (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| NOTE-001 | Whole Notes (4 beats) | 1 | NEEDS | Written lesson on note duration. Diagram: note value chart. |
| NOTE-002 | Half Notes (2 beats) | 2 | NEEDS | Written lesson + exercise. |
| NOTE-003 | Quarter Notes (1 beat) | 2 | NEEDS | Written lesson + exercise. |
| NOTE-004 | Eighth Notes (half beat) | 2 | NEEDS | Written lesson + exercise. |
| NOTE-005 | Mixing Note Values | 3 | NEEDS | Written lesson combining values. Exercise: play mixed rhythm patterns. |

### 6.4 Time Signatures (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| TIME-001 | Understanding 4/4 Time | 2 | LINKED | JustinGuitar video `FDPWwviOYno`. Written lesson on common time. |
| TIME-002 | Counting Measures | 2 | NEEDS | Written lesson on bar lines and measures. |
| TIME-003 | Understanding 3/4 Time | 3 | NEEDS | Written lesson on waltz time. Video: search "3/4 time signature guitar". |
| TIME-004 | Playing in 3/4 Time | 3 | NEEDS | Written exercise: strum in 3/4. |

---

## Branch 7: Reading Music (13 skills)

### 7.1 Tablature Basics (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| TAB-001 | Understanding Tab Lines | 1 | LINKED | JustinGuitar video `9xsG7n4Jalo`. Diagram: tab staff explained. |
| TAB-002 | Reading Fret Numbers | 1 | NEEDS | Written lesson on tab notation. Diagram: sample tab with annotations. |
| TAB-003 | Playing Single Notes from Tab | 2 | NEEDS | Written exercise with simple tab examples. |
| TAB-004 | Reading Chords in Tab | 2 | NEEDS | Written lesson on stacked numbers. Diagram: chord in tab vs chord diagram. |
| TAB-005 | Following Tab Timing | 3 | NEEDS | Written lesson on rhythmic tab reading. |

### 7.2 Chord Diagrams (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| DIAG-001 | Reading Chord Diagrams | 1 | LINKED | JustinGuitar video `LlN2yrFQKzY`. Diagram: annotated chord box. |
| DIAG-002 | Understanding Finger Numbers | 1 | NEEDS | Written lesson on 1-2-3-4 finger numbering. Diagram: hand with numbered fingers. |
| DIAG-003 | X and O Markings | 2 | NEEDS | Written lesson on muted vs open strings in diagrams. |
| DIAG-004 | Learning New Chords from Diagrams | 2 | NEEDS | Written exercise: decode unfamiliar chord diagrams. |

### 7.3 Chord Charts & Lead Sheets (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| CHART-001 | Reading Chord Names | 1 | NEEDS | Written lesson on chord symbol conventions (Am, D7, etc.). |
| CHART-002 | Following Song Structure | 2 | NEEDS | Written lesson on verse/chorus/bridge layout. |
| CHART-003 | Verse/Chorus Recognition | 2 | NEEDS | Written lesson + exercise with real song example. |
| CHART-004 | Reading Slash Notation | 3 | NEEDS | Written lesson on rhythm slashes in charts. |

---

## Branch 8: Music Theory Basics (17 skills)

### 8.1 Notes on Fretboard (5 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| THEORY-001 | Musical Alphabet (A-G) | 1 | NEEDS | Written lesson on 7 natural notes. Video: search "musical alphabet guitar beginners". |
| THEORY-002 | Open String Note Names | 1 | NEEDS | Written lesson (reinforces FOUND-002). Diagram: fretboard with open notes labeled. |
| THEORY-003 | Notes on Low E String (frets 0-5) | 2 | NEEDS | Written lesson with fretboard diagram. Exercise: find and name each note. |
| THEORY-004 | Notes on A String (frets 0-5) | 2 | NEEDS | Written lesson with fretboard diagram. |
| THEORY-005 | Finding Same Note on Different Strings | 3 | NEEDS | Written lesson on octaves/unisons. Interactive fretboard diagram ideal. |

### 8.2 Sharps & Flats (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SHARP-001 | What Sharps Mean (#) | 2 | NEEDS | Written lesson on half-step up. Diagram: chromatic scale on fretboard. |
| SHARP-002 | What Flats Mean (b) | 2 | NEEDS | Written lesson on half-step down. |
| SHARP-003 | Half Steps on Guitar | 2 | NEEDS | Written lesson: one fret = one half step. Diagram + exercise. |
| SHARP-004 | Whole Steps on Guitar | 2 | NEEDS | Written lesson: two frets = one whole step. |

### 8.3 Basic Chord Theory (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| CTHEORY-001 | Major vs Minor Sound | 1 | NEEDS | Written lesson on emotional quality. Audio examples: Em vs E, Am vs A. Video: search "major vs minor chords explained guitar". |
| CTHEORY-002 | Why Em Sounds Sad | 2 | NEEDS | Written lesson on minor quality. |
| CTHEORY-003 | Root Notes in Chords | 3 | NEEDS | Written lesson on chord root identification. Diagram: root notes highlighted in chord shapes. |
| CTHEORY-004 | What "7th" Means in Chords | 3 | NEEDS | Written lesson on dominant 7th concept. |

### 8.4 Keys & Chord Families (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| KEY-001 | Chords That Go Together | 2 | NEEDS | Written lesson on chord families. Video: search "chords that go together guitar". |
| KEY-002 | Key of G Chord Family | 3 | NEEDS | Written lesson: G, Am, Bm, C, D, Em. Exercise: play through the family. |
| KEY-003 | Key of C Chord Family | 3 | NEEDS | Written lesson: C, Dm, Em, F, G, Am. |
| KEY-004 | Key of D Chord Family | 3 | NEEDS | Written lesson: D, Em, F#m, G, A, Bm. |

---

## Branch 9: Single Note Playing (12 skills)

### 9.1 Simple Melodies (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| MELODY-001 | Mary Had a Little Lamb | 2 | NEEDS | Tab + written walkthrough. Video: search "mary had a little lamb guitar tab easy". |
| MELODY-002 | Twinkle Twinkle Little Star | 2 | NEEDS | Tab + written walkthrough. |
| MELODY-003 | Ode to Joy (simplified) | 3 | NEEDS | Tab + written walkthrough. |
| MELODY-004 | Happy Birthday | 2 | NEEDS | Tab + written walkthrough. |

### 9.2 Riffs & Licks (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| RIFF-001 | Simple Rock Riff | 2 | NEEDS | Tab + audio reference. Video: search "easy guitar riffs for beginners". |
| RIFF-002 | Seven Nation Army Riff | 3 | NEEDS | Tab + walkthrough. Link to existing `songs/seven-nation-army/`. Video: search "seven nation army guitar lesson easy". |
| RIFF-003 | Smoke on the Water Opening | 3 | NEEDS | Tab + walkthrough. Video: search "smoke on the water guitar lesson". |
| RIFF-004 | Day Tripper Intro | 4 | NEEDS | Tab + walkthrough. Video: search "day tripper guitar riff lesson". |

### 9.3 Scale Intro (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SCALE-001 | What is a Scale? | 1 | NEEDS | Written conceptual lesson. Video: search "what is a guitar scale beginners". |
| SCALE-002 | E Minor Pentatonic (box 1) | 3 | NEEDS | Tab + fretboard diagram. Video: search "E minor pentatonic scale guitar box 1". |
| SCALE-003 | Playing Scale Up and Down | 3 | NEEDS | Written exercise with tab. |
| SCALE-004 | Scale with Metronome | 4 | NEEDS | Written exercise: ascending/descending at increasing BPMs. |

---

## Branch 10: Songs & Application (16 skills)

### 10.1 One-Chord Songs (2 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SONG-001 | Playing Along to a One-Chord Jam | 1 | NEEDS | Written lesson + backing track link. Exercise: strum Em over a backing track. |
| SONG-002 | One-Chord Song with Pattern | 2 | NEEDS | Written lesson applying strum pattern to one chord. |

### 10.2 Two-Chord Songs (3 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SONG-003 | A Horse With No Name (Em-D6) | 2 | NEEDS | Chord chart + strum pattern. Video: search "horse with no name guitar lesson easy". |
| SONG-004 | Something in the Way (Em-C) | 2 | NEEDS | Chord chart + strum pattern. |
| SONG-005 | Jammin' (Em-Bm simplied) | 3 | NEEDS | Chord chart + reggae strum pattern. |

### 10.3 Three-Chord Songs (3 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SONG-006 | Bad Moon Rising (D-A-G) | 3 | NEEDS | Chord chart + strum pattern. Video: search "bad moon rising guitar lesson easy". |
| SONG-007 | Twist and Shout (D-G-A) | 3 | NEEDS | Chord chart + strum pattern. |
| SONG-008 | Sweet Home Alabama (D-C-G) | 3 | NEEDS | Chord chart + strum pattern. |

### 10.4 Four-Chord Songs (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| SONG-009 | Stand By Me (G-Em-C-D) | 3 | NEEDS | Chord chart + strum pattern. Video: search "stand by me guitar lesson beginner". |
| SONG-010 | Let It Be (G-D-Em-C) | 3 | NEEDS | Chord chart + strum pattern. |
| SONG-011 | I'm Yours (G-D-Em-C) | 3 | NEEDS | Chord chart + strum pattern. |
| SONG-012 | Riptide (Am-G-C-F easy) | 4 | NEEDS | Chord chart + strum pattern. Introduces easy F. |

### 10.5 Performance Skills (4 skills)

| ID | Skill | Diff | Status | Content Plan |
|----|-------|------|--------|-------------|
| PERF-001 | Playing Without Looking | 3 | NEEDS | Written exercise guide on muscle memory. |
| PERF-002 | Playing for 2+ Minutes Continuous | 3 | NEEDS | Written exercise: build stamina with song loops. |
| PERF-003 | Playing Along with Recording | 3 | NEEDS | Written guide on syncing with a track. |
| PERF-004 | Recovering from Mistakes | 3 | NEEDS | Written lesson on keeping rhythm through errors. |

---

## Implementation Plan

### Phase 1: Template + JustinGuitar Pages (19 skills)
Create lesson pages for the 19 skills that already have JustinGuitar video IDs. These are the fastest to build since the primary content (video) is already identified.

**Skills:** POST-001, CARE-001, PICK-001, FRET-001, CHORD-001 through CHORD-008, TECH-001, RHYT-001, RHYT-004, METRO-001, TIME-001, TAB-001, DIAG-001

### Phase 2: Foundations + Core Technique (30 skills)
Build pages for the remaining foundations skills and core technique skills (right hand, left hand basics). These are the first things students encounter.

**Branches:** foundations (12 remaining), right-hand pick basics (4), left-hand finger mechanics (4), left-hand finger independence (6), left-hand single notes (5)

### Phase 3: Chords + Transitions (18 skills)
Build remaining chord pages and all transition pages. These form the practical playing core.

**Branches:** chords (9 remaining), transitions (15 remaining)

### Phase 4: Rhythm + Reading (22 skills)
Build rhythm counting, metronome, note values, time signatures, tab reading, chord diagrams, and chart reading pages.

**Branches:** rhythm (16 remaining), reading (11 remaining)

### Phase 5: Theory + Advanced (29 skills)
Build music theory pages and single note playing pages.

**Branches:** theory (17), single-note (12)

### Phase 6: Songs + Performance (16 skills)
Build song lesson pages with chord charts and performance skill guides.

**Branches:** songs (16)

### Estimated Effort Per Page
- **JustinGuitar-linked page:** ~20 min (embed video, write overview, create quiz)
- **Written lesson page:** ~30-45 min (write content, find/embed video, create diagram placeholder, write quiz)
- **Exercise/drill page:** ~20-30 min (shorter content, focus on instructions + tab)
- **Song page:** ~30 min (chord chart, strum pattern, practice tips)

### Total Estimated: ~80-100 hours of content creation for all 162 skill pages
