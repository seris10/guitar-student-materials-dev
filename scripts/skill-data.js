// Guitar Skill Tree - Unified Data File
// Combines 156-skill tree design with JustinGuitar video mapping
// For 6th grade beginners (11-12 years old)

window.SKILL_DATA = {
  branches: [
    { id: 'foundations', name: 'Guitar Foundations', color: '#22d3ee', skillCount: 14 },
    { id: 'right-hand', name: 'Right Hand Technique', color: '#34d399', skillCount: 21 },
    { id: 'left-hand', name: 'Left Hand Technique', color: '#fbbf24', skillCount: 16 },
    { id: 'chords', name: 'Basic Chords', color: '#a78bfa', skillCount: 17 },
    { id: 'transitions', name: 'Chord Transitions', color: '#f0abfc', skillCount: 16 },
    { id: 'rhythm', name: 'Rhythm & Timing', color: '#fb7185', skillCount: 17 },
    { id: 'reading', name: 'Reading Music', color: '#10b981', skillCount: 12 },
    { id: 'theory', name: 'Music Theory Basics', color: '#f59e0b', skillCount: 16 },
    { id: 'single-note', name: 'Single Note Playing', color: '#8b5cf6', skillCount: 12 },
    { id: 'songs', name: 'Songs & Application', color: '#ec4899', skillCount: 16 }
  ],

  skills: {
    // ===== BRANCH 1: GUITAR FOUNDATIONS (14 skills) =====

    // 1.1 Know Your Instrument
    'FOUND-001': {
      id: 'FOUND-001',
      name: 'Parts of the Guitar',
      branch: 'foundations',
      subbranch: 'know-your-instrument',
      difficulty: 1,
      prerequisites: [],
      isGateway: true,
      description: 'Learn the names of all the parts of your guitar — body, neck, headstock, tuning pegs, frets, strings, bridge, and more. This helps you understand how your guitar works!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.5, y: 0.85 },
      // === Enriched lesson content ===
      detailedContent: `<p>Before you start playing, it's important to know the <strong>parts of your guitar</strong>. Understanding the anatomy of your instrument helps you follow instructions, communicate with other musicians, and take proper care of your guitar.</p>
        <p>Every guitar — whether acoustic or electric — shares these basic parts:</p>
        <ul>
          <li><strong>Headstock</strong> — The top of the guitar where the tuning pegs live</li>
          <li><strong>Tuning Pegs (Machine Heads)</strong> — Turn these to tune each string</li>
          <li><strong>Nut</strong> — The small piece at the top of the neck that holds the strings in place</li>
          <li><strong>Neck</strong> — The long part you grip with your fretting hand</li>
          <li><strong>Frets</strong> — The metal strips across the neck that divide it into notes</li>
          <li><strong>Fretboard (Fingerboard)</strong> — The front surface of the neck where you press strings</li>
          <li><strong>Body</strong> — The large part that produces or amplifies sound</li>
          <li><strong>Sound Hole</strong> — The opening in acoustic guitars that projects sound</li>
          <li><strong>Bridge</strong> — Anchors the strings to the body</li>
          <li><strong>Saddle</strong> — The piece on the bridge that the strings rest on</li>
        </ul>
        <p>Take a moment to look at your own guitar and find each part. This foundation will help everything else click into place.</p>`,
      learningOutcomes: [
        'Identify and name all major parts of an acoustic guitar',
        'Understand what each part does and why it matters',
        'Be ready to follow guitar instructions that reference specific parts'
      ],
      practiceSteps: [
        'Pick up your guitar and point to the headstock, then the body — feel the difference',
        'Count all 6 tuning pegs and trace each string from peg to bridge',
        'Find the nut, then slide your finger down to the 1st, 3rd, and 5th fret markers',
        'Look at the sound hole (acoustic) or pickups (electric) and notice how the body shape affects sound'
      ],
      quiz: [
        {
          question: 'Where are the tuning pegs located?',
          options: ['On the bridge', 'On the headstock', 'On the body', 'Inside the sound hole'],
          answer: 1,
          explanation: 'The tuning pegs (machine heads) are on the headstock — the very top of the guitar.'
        },
        {
          question: 'What are the metal strips across the neck called?',
          options: ['Strings', 'Saddles', 'Frets', 'Nuts'],
          answer: 2,
          explanation: 'Frets are the metal strips that divide the neck into different notes.'
        },
        {
          question: 'What part of an acoustic guitar projects the sound outward?',
          options: ['Sound hole', 'Fretboard', 'Headstock', 'Nut'],
          answer: 0,
          explanation: 'The sound hole lets the vibrations from the strings resonate inside the body and project outward.'
        }
      ]
    },
    'FOUND-002': {
      id: 'FOUND-002',
      name: 'String Names (EADGBE)',
      branch: 'foundations',
      subbranch: 'know-your-instrument',
      difficulty: 1,
      prerequisites: ['FOUND-001'],
      isGateway: false,
      description: 'Memorize the six open string names: E, A, D, G, B, E. A helpful tip: remember "Eddie Ate Dynamite, Good Bye Eddie!"',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.45, y: 0.75 }
    },
    'FOUND-003': {
      id: 'FOUND-003',
      name: 'Fret Numbers & Markers',
      branch: 'foundations',
      subbranch: 'know-your-instrument',
      difficulty: 1,
      prerequisites: ['FOUND-001'],
      isGateway: false,
      description: 'Understand how frets are numbered (from headstock down) and learn about fret markers that help you find your place on the neck.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.55, y: 0.75 }
    },
    'FOUND-004': {
      id: 'FOUND-004',
      name: 'Guitar Types (Acoustic vs Electric)',
      branch: 'foundations',
      subbranch: 'know-your-instrument',
      difficulty: 1,
      prerequisites: ['FOUND-001'],
      isGateway: false,
      description: 'Learn the differences between acoustic and electric guitars. Acoustic guitars are louder naturally, while electric guitars need an amplifier.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.35, y: 0.75 }
    },

    // 1.2 Holding & Posture
    'POST-001': {
      id: 'POST-001',
      name: 'Seated Position (casual)',
      branch: 'foundations',
      subbranch: 'holding-posture',
      difficulty: 1,
      prerequisites: ['FOUND-001'],
      isGateway: false,
      description: 'Learn how to sit comfortably with your guitar for practice. The casual seated position is relaxed but still supports good playing technique.',
      videoId: 'MlV6WhM9YhE',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-hold-your-guitar-b1-102',
      position: { x: 0.25, y: 0.6 },
      detailedContent: `<p>How you sit with your guitar matters more than you might think! Good posture helps you <strong>play longer without getting tired</strong> and makes it easier to reach all the chords and notes.</p>
        <p>The <strong>casual seated position</strong> is the most common way to practice:</p>
        <ul>
          <li><strong>Sit on a chair or stool</strong> without arms (armrests get in the way)</li>
          <li><strong>Rest the guitar body on your right leg</strong> (for right-handed players)</li>
          <li><strong>Keep the neck angled slightly upward</strong> — not flat or pointing down</li>
          <li><strong>Sit up straight</strong> but stay relaxed — don't hunch over to look at the frets</li>
          <li><strong>Keep your strumming arm draped over the top</strong> of the guitar body naturally</li>
        </ul>
        <p>A common beginner mistake is tilting the guitar back to see the fretboard. Instead, keep it upright and learn the fret positions by feel over time.</p>`,
      learningOutcomes: [
        'Hold the guitar in the correct casual seated position',
        'Maintain good posture while keeping relaxed',
        'Avoid common beginner posture mistakes'
      ],
      practiceSteps: [
        'Sit on a flat chair and place the guitar on your right leg (left leg for lefties)',
        'Check your neck angle — the headstock should be roughly at shoulder height, not pointing at the floor',
        'Put your strumming arm over the body and let your hand hang near the sound hole',
        'Play a few open strings to make sure you feel relaxed and balanced'
      ],
      quiz: [
        {
          question: 'Where should the guitar body rest in the casual seated position?',
          options: ['On your left leg', 'On your right leg', 'Between your legs', 'On a table'],
          answer: 1,
          explanation: 'For right-handed players, the guitar body rests on your right leg in the casual position.'
        },
        {
          question: 'Why should you avoid tilting the guitar back to see the frets?',
          options: ['It damages the guitar', 'It causes bad posture and makes playing harder', 'The strings will slip', 'It makes the guitar out of tune'],
          answer: 1,
          explanation: 'Tilting the guitar back causes you to hunch over and creates tension that makes playing harder over time.'
        }
      ]
    },
    'POST-002': {
      id: 'POST-002',
      name: 'Seated Position (classical)',
      branch: 'foundations',
      subbranch: 'holding-posture',
      difficulty: 2,
      prerequisites: ['POST-001'],
      isGateway: false,
      description: 'Master the classical sitting position with your guitar resting on your left leg. This is the most formal and technically perfect posture.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.2, y: 0.5 }
    },
    'POST-003': {
      id: 'POST-003',
      name: 'Standing with Strap',
      branch: 'foundations',
      subbranch: 'holding-posture',
      difficulty: 2,
      prerequisites: ['POST-001'],
      isGateway: false,
      description: 'Learn how to wear a guitar strap and stand while playing. This is essential for performing in front of an audience!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.3, y: 0.45 }
    },
    'POST-004': {
      id: 'POST-004',
      name: 'Arm & Wrist Relaxation',
      branch: 'foundations',
      subbranch: 'holding-posture',
      difficulty: 1,
      prerequisites: ['POST-001'],
      isGateway: false,
      description: 'Discover how to keep your arms and wrists relaxed while playing. This prevents pain and helps you play faster and cleaner.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.15, y: 0.6 }
    },
    'POST-005': {
      id: 'POST-005',
      name: 'Thumb Position (back of neck)',
      branch: 'foundations',
      subbranch: 'holding-posture',
      difficulty: 2,
      prerequisites: ['POST-001'],
      isGateway: false,
      description: 'Position your thumb at the back of the guitar neck for optimal control. This is a key foundation for clean fretting.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.1, y: 0.5 }
    },

    // 1.3 Basic Care & Maintenance
    'CARE-001': {
      id: 'CARE-001',
      name: 'Using a Tuner App',
      branch: 'foundations',
      subbranch: 'care-maintenance',
      difficulty: 1,
      prerequisites: ['FOUND-002'],
      isGateway: false,
      description: 'Learn how to use a free tuner app on your phone or computer. Keeping your guitar in tune is essential for practicing properly.',
      videoId: 'X2EmpWr9vUc',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-tune-a-guitar-for-beginners-b1-101',
      position: { x: 0.5, y: 0.65 },
      detailedContent: `<p>Playing an out-of-tune guitar is one of the fastest ways to get frustrated! Even if you play all the right notes and chords, it won't sound good if your guitar isn't in tune. A <strong>tuner app</strong> makes this easy.</p>
        <p>Here's how tuning works:</p>
        <ul>
          <li><strong>Each string has a target note</strong>: from thickest to thinnest, they are E, A, D, G, B, E</li>
          <li><strong>The tuner listens</strong> to the note you play and shows if it's too high (sharp) or too low (flat)</li>
          <li><strong>Turn the tuning peg</strong> to adjust — tighten to raise the pitch, loosen to lower it</li>
          <li><strong>Always tune UP to the note</strong> — if you go too high, loosen past the note and come back up</li>
        </ul>
        <p>Free tuner apps like GuitarTuna or the built-in tuner on this site work great. You can also use a clip-on tuner that attaches to your headstock.</p>
        <p><strong>Pro tip:</strong> Tune your guitar every single time you pick it up. It only takes a minute and makes everything sound better!</p>`,
      learningOutcomes: [
        'Tune all 6 strings to the correct pitch using a tuner app',
        'Understand sharp vs flat and which direction to turn the peg',
        'Build the habit of tuning before every practice session'
      ],
      practiceSteps: [
        'Download a free tuner app (GuitarTuna, Fender Tune, or use this site\'s tuner page)',
        'Start with the thickest string (low E) — pluck it and watch the tuner display',
        'Turn the tuning peg slowly until the tuner shows green or centered on "E"',
        'Work through all 6 strings: E, A, D, G, B, E — then go back and double-check the first string'
      ],
      quiz: [
        {
          question: 'What are the 6 open string notes from thickest to thinnest?',
          options: ['A, B, C, D, E, F', 'E, A, D, G, B, E', 'E, B, G, D, A, E', 'C, D, E, F, G, A'],
          answer: 1,
          explanation: 'From thickest (6th) to thinnest (1st): E, A, D, G, B, E.'
        },
        {
          question: 'If the tuner shows your string is "flat," what should you do?',
          options: ['Loosen the string (lower the pitch)', 'Tighten the string (raise the pitch)', 'Replace the string', 'Press harder on the fret'],
          answer: 1,
          explanation: 'Flat means the pitch is too low, so you need to tighten the string to raise it.'
        },
        {
          question: 'How often should you tune your guitar?',
          options: ['Once a month', 'Once a week', 'Every time you pick it up', 'Only when it sounds really bad'],
          answer: 2,
          explanation: 'Guitars go out of tune naturally. Tuning every time you play ensures you always sound your best.'
        }
      ]
    },
    'CARE-002': {
      id: 'CARE-002',
      name: 'Tuning by Ear (reference pitch)',
      branch: 'foundations',
      subbranch: 'care-maintenance',
      difficulty: 3,
      prerequisites: ['CARE-001'],
      isGateway: false,
      description: 'Develop your ear by tuning using just a reference note. This advanced skill trains your musical ear and builds independence.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.55, y: 0.55 }
    },
    'CARE-003': {
      id: 'CARE-003',
      name: 'Wiping Down Strings',
      branch: 'foundations',
      subbranch: 'care-maintenance',
      difficulty: 1,
      prerequisites: ['FOUND-001'],
      isGateway: false,
      description: 'Keep your guitar clean by wiping the strings and fretboard after each practice session. This extends the life of your guitar!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.6, y: 0.65 }
    },
    'CARE-004': {
      id: 'CARE-004',
      name: 'Proper Storage',
      branch: 'foundations',
      subbranch: 'care-maintenance',
      difficulty: 1,
      prerequisites: ['FOUND-001'],
      isGateway: false,
      description: 'Learn how to store your guitar safely when you\'re not playing. A guitar case or stand keeps your instrument protected and ready to play.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.45, y: 0.65 }
    },
    'CARE-005': {
      id: 'CARE-005',
      name: 'When Strings Need Changing',
      branch: 'foundations',
      subbranch: 'care-maintenance',
      difficulty: 2,
      prerequisites: ['CARE-003'],
      isGateway: false,
      description: 'Know when it\'s time to change your guitar strings. Old strings sound dull and are more likely to break.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.65, y: 0.55 }
    },

    // ===== BRANCH 2: RIGHT HAND TECHNIQUE (21 skills) =====

    // 2.1 Pick Basics
    'PICK-001': {
      id: 'PICK-001',
      name: 'Holding the Pick',
      branch: 'right-hand',
      subbranch: 'pick-basics',
      difficulty: 1,
      prerequisites: [],
      isGateway: false,
      description: 'Master the proper grip for holding a guitar pick. The way you hold it affects your speed, control, and tone.',
      videoId: '-04Et5qIoa4',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-hold-a-guitar-pick-b1-106',
      position: { x: 0.75, y: 0.8 },
      detailedContent: `<p>The guitar pick (also called a plectrum) is a small piece of plastic you use to strum or pick the strings. <strong>How you hold it changes everything</strong> — your tone, your speed, and how comfortable you feel.</p>
        <p>Here's the right way to hold a pick:</p>
        <ul>
          <li><strong>Curl your index finger</strong> and place the pick on the side of it, pointy end facing out</li>
          <li><strong>Press your thumb on top</strong> to hold it in place — firm but not death-grip tight</li>
          <li><strong>Only a small point should stick out</strong> — about 3-5mm past your finger</li>
          <li><strong>Keep your hand relaxed</strong> — tension is the enemy of good picking</li>
          <li><strong>The pick should feel secure</strong> but able to flex slightly when it hits a string</li>
        </ul>
        <p>If the pick keeps flying out of your hand, you're probably gripping too loosely. If your hand hurts after a few minutes, you're gripping too tight. Find the sweet spot in between!</p>`,
      learningOutcomes: [
        'Hold a guitar pick with the correct thumb-and-index grip',
        'Find the right balance of grip pressure — firm but relaxed',
        'Position the pick so the right amount sticks out for clean contact'
      ],
      practiceSteps: [
        'Place the pick on the side of your curled index finger with the point facing away from you',
        'Press your thumb down on the flat side of the pick to lock it in place',
        'Strum all 6 strings downward — the pick should glide across without catching or flying away',
        'Try strumming for 30 seconds straight and adjust your grip if the pick slips or your hand gets tense'
      ],
      quiz: [
        {
          question: 'Which two fingers hold the pick?',
          options: ['Thumb and middle finger', 'Thumb and index finger', 'Index and middle finger', 'Thumb and ring finger'],
          answer: 1,
          explanation: 'The pick rests on the curled index finger and is held in place by the thumb.'
        },
        {
          question: 'How much of the pick should stick out past your fingers?',
          options: ['Half the pick', 'The whole tip (about 3-5mm)', 'Nothing — it should be hidden', 'As much as possible'],
          answer: 1,
          explanation: 'Only a small point (3-5mm) should stick out. Too much makes it floppy; too little won\'t reach the strings.'
        }
      ]
    },
    'PICK-002': {
      id: 'PICK-002',
      name: 'Pick Angle & Pressure',
      branch: 'right-hand',
      subbranch: 'pick-basics',
      difficulty: 2,
      prerequisites: ['PICK-001'],
      isGateway: false,
      description: 'Learn how the angle and pressure of your pick affect the sound. Experiment to find what works best for you!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.8, y: 0.7 }
    },
    'PICK-003': {
      id: 'PICK-003',
      name: 'Downstroke (single strings)',
      branch: 'right-hand',
      subbranch: 'pick-basics',
      difficulty: 1,
      prerequisites: ['PICK-001'],
      isGateway: false,
      description: 'Learn to play single strings with downstrokes (picking downward). This is the foundation of all strumming and picking.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.7, y: 0.75 }
    },
    'PICK-004': {
      id: 'PICK-004',
      name: 'Upstroke (single strings)',
      branch: 'right-hand',
      subbranch: 'pick-basics',
      difficulty: 2,
      prerequisites: ['PICK-003'],
      isGateway: false,
      description: 'Master upstrokes (picking upward). Combined with downstrokes, you can create smooth, continuous picking patterns.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.65, y: 0.8 }
    },
    'PICK-005': {
      id: 'PICK-005',
      name: 'Alternate Picking (single string)',
      branch: 'right-hand',
      subbranch: 'pick-basics',
      difficulty: 2,
      prerequisites: ['PICK-004'],
      isGateway: false,
      description: 'Alternate smoothly between downstrokes and upstrokes on the same string. This builds speed and fluidity in your playing.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.6, y: 0.85 }
    },

    // 2.2 Strumming Foundations
    'STRUM-001': {
      id: 'STRUM-001',
      name: 'Full Downstroke (all strings)',
      branch: 'right-hand',
      subbranch: 'strumming-foundations',
      difficulty: 1,
      prerequisites: ['PICK-003', 'POST-004'],
      isGateway: false,
      description: 'Learn to strum all the strings together with a downstroke. This is the basic building block of strumming.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.85, y: 0.75 }
    },
    'STRUM-002': {
      id: 'STRUM-002',
      name: 'Full Upstroke (all strings)',
      branch: 'right-hand',
      subbranch: 'strumming-foundations',
      difficulty: 2,
      prerequisites: ['STRUM-001', 'PICK-004'],
      isGateway: false,
      description: 'Master upstrokes across all strings. This opens up more expressive strumming patterns.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.9, y: 0.65 }
    },
    'STRUM-003': {
      id: 'STRUM-003',
      name: 'Down-Down-Down-Down Pattern',
      branch: 'right-hand',
      subbranch: 'strumming-foundations',
      difficulty: 1,
      prerequisites: ['STRUM-001'],
      isGateway: false,
      description: 'Play a basic four downstrokes per beat pattern. This simple rhythm pattern is used in many songs.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.8, y: 0.8 }
    },
    'STRUM-004': {
      id: 'STRUM-004',
      name: 'Down-Up Pattern (continuous)',
      branch: 'right-hand',
      subbranch: 'strumming-foundations',
      difficulty: 2,
      prerequisites: ['STRUM-002'],
      isGateway: false,
      description: 'Master the continuous down-up strumming pattern. This is one of the most common patterns in guitar playing.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.95, y: 0.7 }
    },
    'STRUM-005': {
      id: 'STRUM-005',
      name: 'Muted Strumming (percussive)',
      branch: 'right-hand',
      subbranch: 'strumming-foundations',
      difficulty: 2,
      prerequisites: ['STRUM-001'],
      isGateway: false,
      description: 'Create a percussive effect by muting the strings with your left hand while strumming. This adds texture to your playing!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.75, y: 0.65 }
    },
    'STRUM-006': {
      id: 'STRUM-006',
      name: 'Selective String Strumming',
      branch: 'right-hand',
      subbranch: 'strumming-foundations',
      difficulty: 3,
      prerequisites: ['STRUM-004'],
      isGateway: false,
      description: 'Learn to strum only certain strings while skipping others. This advanced technique gives you more control over your sound.',
      videoId: null,
      lessonUrl: null,
      position: { x: 1.0, y: 0.8 }
    },

    // 2.3 Strumming Patterns
    'PATT-001': {
      id: 'PATT-001',
      name: 'Basic 4/4 Pattern (D D D D)',
      branch: 'right-hand',
      subbranch: 'strumming-patterns',
      difficulty: 1,
      prerequisites: ['STRUM-003', 'RHYT-003'],
      isGateway: false,
      description: 'Learn the most basic strumming pattern with four equal downstrokes. Perfect for getting started with rhythm.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.7, y: 0.6 }
    },
    'PATT-002': {
      id: 'PATT-002',
      name: 'Simple Folk Pattern (D DU UD)',
      branch: 'right-hand',
      subbranch: 'strumming-patterns',
      difficulty: 2,
      prerequisites: ['STRUM-004', 'RHYT-004'],
      isGateway: false,
      description: 'Master a classic folk strumming pattern with mixed down and up strokes. Used in countless folk and popular songs!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.8, y: 0.55 }
    },
    'PATT-003': {
      id: 'PATT-003',
      name: 'Pop/Rock Pattern',
      branch: 'right-hand',
      subbranch: 'strumming-patterns',
      difficulty: 2,
      prerequisites: ['PATT-002'],
      isGateway: false,
      description: 'Learn an energetic pop/rock strumming pattern that works for modern songs. Great for playing along to your favorite tracks!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.9, y: 0.5 }
    },
    'PATT-004': {
      id: 'PATT-004',
      name: 'Accented Downbeats',
      branch: 'right-hand',
      subbranch: 'strumming-patterns',
      difficulty: 2,
      prerequisites: ['PATT-001'],
      isGateway: false,
      description: 'Add emphasis to the downbeats of your strumming. This creates a more rhythmic and interesting sound.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.6, y: 0.55 }
    },
    'PATT-005': {
      id: 'PATT-005',
      name: 'Reggae Upstroke Pattern',
      branch: 'right-hand',
      subbranch: 'strumming-patterns',
      difficulty: 3,
      prerequisites: ['STRUM-002', 'RHYT-004'],
      isGateway: false,
      description: 'Master the signature reggae strumming pattern with emphasis on upstrokes. A fun way to explore different rhythmic feels!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.5, y: 0.5 }
    },

    // 2.4 Fingerpicking Intro
    'FING-001': {
      id: 'FING-001',
      name: 'Thumb on Bass Strings',
      branch: 'right-hand',
      subbranch: 'fingerpicking-intro',
      difficulty: 2,
      prerequisites: ['POST-004'],
      isGateway: false,
      description: 'Learn to use your thumb to pick the bass strings. This is the foundation of fingerpicking technique.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.65, y: 0.45 }
    },
    'FING-002': {
      id: 'FING-002',
      name: 'Index on G String',
      branch: 'right-hand',
      subbranch: 'fingerpicking-intro',
      difficulty: 2,
      prerequisites: ['FING-001'],
      isGateway: false,
      description: 'Add your index finger to pick the G string. Build up fingerpicking one finger at a time.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.75, y: 0.4 }
    },
    'FING-003': {
      id: 'FING-003',
      name: 'Middle on B String',
      branch: 'right-hand',
      subbranch: 'fingerpicking-intro',
      difficulty: 2,
      prerequisites: ['FING-002'],
      isGateway: false,
      description: 'Use your middle finger to pick the B string. You\'re building finger independence!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.85, y: 0.35 }
    },
    'FING-004': {
      id: 'FING-004',
      name: 'Ring on High E String',
      branch: 'right-hand',
      subbranch: 'fingerpicking-intro',
      difficulty: 2,
      prerequisites: ['FING-003'],
      isGateway: false,
      description: 'Complete the basic fingerpicking setup with your ring finger on the high E string. You now have the T-1-2-3 foundation!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.95, y: 0.4 }
    },
    'FING-005': {
      id: 'FING-005',
      name: 'Basic T-1-2-3 Pattern',
      branch: 'right-hand',
      subbranch: 'fingerpicking-intro',
      difficulty: 3,
      prerequisites: ['FING-004'],
      isGateway: false,
      description: 'Combine all your fingers into a smooth repeating pattern. This classic pattern is used in hundreds of songs!',
      videoId: null,
      lessonUrl: null,
      position: { x: 1.0, y: 0.5 }
    },

    // ===== BRANCH 3: LEFT HAND TECHNIQUE (16 skills) =====

    // 3.1 Finger Mechanics
    'FRET-001': {
      id: 'FRET-001',
      name: 'Using Fingertips (not pads)',
      branch: 'left-hand',
      subbranch: 'finger-mechanics',
      difficulty: 1,
      prerequisites: ['POST-005'],
      isGateway: false,
      description: 'Learn to fret notes using your fingertips instead of the pads of your fingers. This creates cleaner notes and better access to the fretboard.',
      videoId: 'VB0vWNqNMbA',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/positive-finger-placement-b1-103',
      position: { x: 0.15, y: 0.3 },
      detailedContent: `<p>One of the most important habits to build early is pressing the strings with your <strong>fingertips</strong>, not the flat pads of your fingers. This single technique is the difference between clean-sounding notes and muffled, buzzy ones.</p>
        <p>Why fingertips matter:</p>
        <ul>
          <li><strong>Fingertips are precise</strong> — they press only the string you want, without touching neighboring strings</li>
          <li><strong>Pads are flat and wide</strong> — they accidentally mute other strings, causing dead notes</li>
          <li><strong>Your fingers need to curve</strong> like little arches over the fretboard</li>
          <li><strong>Your nails should be short</strong> on your fretting hand — long nails prevent proper fingertip contact</li>
        </ul>
        <p>This might feel uncomfortable at first, and your fingertips may get sore. That's totally normal! Your fingertips will develop calluses (tougher skin) within a couple weeks of regular practice.</p>`,
      learningOutcomes: [
        'Press strings with the tips of your fingers, not the pads',
        'Curve your fingers properly to avoid muting adjacent strings',
        'Understand why short nails matter on the fretting hand'
      ],
      practiceSteps: [
        'Place your index finger on the 1st fret of the B string — use your fingertip, curving your finger',
        'Pick that string and listen: does it ring clearly or does it buzz/mute?',
        'Now flatten your finger to use the pad instead — pick again and hear the difference',
        'Practice alternating between fingertip and pad on different strings until clean notes feel natural'
      ],
      quiz: [
        {
          question: 'Why should you press strings with your fingertips instead of pads?',
          options: ['It looks cooler', 'Fingertips are more precise and avoid muting other strings', 'It makes the guitar louder', 'It prevents string breakage'],
          answer: 1,
          explanation: 'Fingertips give you precision. Flat pads touch neighboring strings and cause dead, muffled notes.'
        },
        {
          question: 'What happens to your fingertips with regular practice?',
          options: ['They get blisters that never heal', 'They develop calluses (tougher skin)', 'Nothing changes', 'They get softer'],
          answer: 1,
          explanation: 'Your fingertips naturally build up calluses — protective tougher skin that makes playing more comfortable over time.'
        }
      ]
    },
    'FRET-002': {
      id: 'FRET-002',
      name: 'Pressing Near the Fret Wire',
      branch: 'left-hand',
      subbranch: 'finger-mechanics',
      difficulty: 2,
      prerequisites: ['FRET-001'],
      isGateway: false,
      description: 'Position your fingers right next to the fret wire without actually touching it. This minimizes the pressure needed for a clean note.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.1, y: 0.25 }
    },
    'FRET-003': {
      id: 'FRET-003',
      name: 'Minimum Pressure for Clean Note',
      branch: 'left-hand',
      subbranch: 'finger-mechanics',
      difficulty: 2,
      prerequisites: ['FRET-002'],
      isGateway: false,
      description: 'Find the sweet spot of pressure needed to get a clear note without buzzing or muting. Less pressure means less hand fatigue!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.05, y: 0.35 }
    },
    'FRET-004': {
      id: 'FRET-004',
      name: 'Curved Fingers (not flat)',
      branch: 'left-hand',
      subbranch: 'finger-mechanics',
      difficulty: 2,
      prerequisites: ['FRET-001'],
      isGateway: false,
      description: 'Keep your fingers curved like you\'re holding a ball. Flat fingers will mute neighboring strings and reduce your reach.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.2, y: 0.25 }
    },
    'FRET-005': {
      id: 'FRET-005',
      name: 'Avoiding String Muting',
      branch: 'left-hand',
      subbranch: 'finger-mechanics',
      difficulty: 2,
      prerequisites: ['FRET-004'],
      isGateway: false,
      description: 'Learn how to position your fingers so they don\'t accidentally mute the strings you\'re not trying to fret. Clear notes for the win!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.25, y: 0.35 }
    },

    // 3.2 Finger Independence
    'INDEP-001': {
      id: 'INDEP-001',
      name: 'One Finger Per Fret Concept',
      branch: 'left-hand',
      subbranch: 'finger-independence',
      difficulty: 1,
      prerequisites: ['FRET-001', 'FOUND-003'],
      isGateway: false,
      description: 'Understand the basic fretting system: index on fret 1, middle on fret 2, ring on fret 3, pinky on fret 4. Simple but powerful!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.1, y: 0.15 }
    },
    'INDEP-002': {
      id: 'INDEP-002',
      name: 'Index Finger Control',
      branch: 'left-hand',
      subbranch: 'finger-independence',
      difficulty: 1,
      prerequisites: ['INDEP-001'],
      isGateway: false,
      description: 'Master control of your index finger by fretting it independently on different frets and strings.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.05, y: 0.1 }
    },
    'INDEP-003': {
      id: 'INDEP-003',
      name: 'Middle Finger Control',
      branch: 'left-hand',
      subbranch: 'finger-independence',
      difficulty: 2,
      prerequisites: ['INDEP-002'],
      isGateway: false,
      description: 'Build independence in your middle finger. This finger can be tricky but is essential for most chord shapes.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.0, y: 0.2 }
    },
    'INDEP-004': {
      id: 'INDEP-004',
      name: 'Ring Finger Control',
      branch: 'left-hand',
      subbranch: 'finger-independence',
      difficulty: 2,
      prerequisites: ['INDEP-003'],
      isGateway: false,
      description: 'Develop strength and control in your ring finger. This finger is weaker by nature but gets stronger with practice!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.15, y: 0.1 }
    },
    'INDEP-005': {
      id: 'INDEP-005',
      name: 'Pinky Finger Control',
      branch: 'left-hand',
      subbranch: 'finger-independence',
      difficulty: 3,
      prerequisites: ['INDEP-004'],
      isGateway: false,
      description: 'Master your pinky finger, which is the weakest and hardest to control. Dedicated practice makes all the difference!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.2, y: 0.05 }
    },
    'INDEP-006': {
      id: 'INDEP-006',
      name: 'Spider Exercise (chromatic)',
      branch: 'left-hand',
      subbranch: 'finger-independence',
      difficulty: 3,
      prerequisites: ['INDEP-005'],
      isGateway: false,
      description: 'Practice the famous "spider exercise" where each finger walks up the fretboard. This builds finger strength and independence.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.1, y: 0.0 }
    },

    // 3.3 Fretting Single Notes
    'SNOTE-001': {
      id: 'SNOTE-001',
      name: 'Clean Open String Notes',
      branch: 'left-hand',
      subbranch: 'fretting-single-notes',
      difficulty: 1,
      prerequisites: ['POST-004'],
      isGateway: false,
      description: 'Play clean notes on open strings without fretting. Get familiar with the sound of each string.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.3, y: 0.2 }
    },
    'SNOTE-002': {
      id: 'SNOTE-002',
      name: 'Clean 1st Fret Note',
      branch: 'left-hand',
      subbranch: 'fretting-single-notes',
      difficulty: 1,
      prerequisites: ['FRET-003'],
      isGateway: false,
      description: 'Fret your first clean note on the first fret of any string. Celebrate this milestone!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.35, y: 0.15 }
    },
    'SNOTE-003': {
      id: 'SNOTE-003',
      name: 'Clean 3rd Fret Note',
      branch: 'left-hand',
      subbranch: 'fretting-single-notes',
      difficulty: 1,
      prerequisites: ['SNOTE-002'],
      isGateway: false,
      description: 'Extend your range by fretting notes on the 3rd fret. You\'re exploring more of the fretboard!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.4, y: 0.1 }
    },
    'SNOTE-004': {
      id: 'SNOTE-004',
      name: 'Moving Between Frets (same string)',
      branch: 'left-hand',
      subbranch: 'fretting-single-notes',
      difficulty: 2,
      prerequisites: ['SNOTE-003'],
      isGateway: false,
      description: 'Practice transitioning smoothly between frets on the same string. This is great preparation for playing melodies.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.45, y: 0.2 }
    },
    'SNOTE-005': {
      id: 'SNOTE-005',
      name: 'Moving Between Strings',
      branch: 'left-hand',
      subbranch: 'fretting-single-notes',
      difficulty: 2,
      prerequisites: ['SNOTE-004'],
      isGateway: false,
      description: 'Learn to move your fingers between strings while keeping them in position. Essential for playing complete melodies.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.5, y: 0.15 }
    },

    // ===== BRANCH 4: BASIC CHORDS (17 skills) =====

    // 4.1 Two-Finger Chords
    'CHORD-001': {
      id: 'CHORD-001',
      name: 'Em Chord',
      branch: 'chords',
      subbranch: 'two-finger-chords',
      difficulty: 1,
      prerequisites: ['FRET-003', 'STRUM-001'],
      isGateway: false,
      description: 'Play your first chord! Em (E minor) only requires two fingers and sounds beautiful. This opens the door to playing songs.',
      videoId: 'lqcd3jVysXY',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/the-e-minor-chord-b1-302',
      position: { x: 0.4, y: 0.3 },
      detailedContent: `<p>This is it — <strong>your very first chord!</strong> Em (E minor) is the perfect starting point because it only uses two fingers and you strum all six strings.</p>
        <p>How to play Em:</p>
        <ul>
          <li><strong>Middle finger</strong> on the 2nd fret of the A string (5th string)</li>
          <li><strong>Ring finger</strong> on the 2nd fret of the D string (4th string)</li>
          <li><strong>Strum all 6 strings</strong> — every string rings open or fretted</li>
        </ul>
        <p>Em has a <strong>beautiful, slightly sad sound</strong>. It's used in thousands of songs across every genre — rock, pop, folk, and more. Once you can play Em cleanly, you're officially making music!</p>
        <p><strong>Common mistakes:</strong> Make sure your fingers are using their tips (not pads) and pressing firmly enough so every string rings clearly.</p>`,
      learningOutcomes: [
        'Play the Em chord with correct finger placement',
        'Strum all 6 strings with every note ringing clearly',
        'Recognize the minor (sad/moody) sound quality'
      ],
      practiceSteps: [
        'Place your middle and ring fingers on the 2nd fret of the A and D strings',
        'Strum all 6 strings slowly and listen — do all strings ring clearly?',
        'Pick each string one at a time to check for buzzing or muted notes',
        'Lift your fingers off, shake your hand, then form the chord again 10 times'
      ],
      quiz: [
        {
          question: 'How many fingers do you need for the Em chord?',
          options: ['One', 'Two', 'Three', 'Four'],
          answer: 1,
          explanation: 'Em uses just two fingers — middle and ring — both on the 2nd fret.'
        },
        {
          question: 'Which fret do both fingers go on for Em?',
          options: ['1st fret', '2nd fret', '3rd fret', 'Open strings only'],
          answer: 1,
          explanation: 'Both fingers press down on the 2nd fret — middle finger on the A string, ring finger on the D string.'
        }
      ]
    },
    'CHORD-002': {
      id: 'CHORD-002',
      name: 'E Major Chord',
      branch: 'chords',
      subbranch: 'two-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-001'],
      isGateway: false,
      description: 'Learn the E Major chord, which uses all three fingers. It\'s bright and energetic sounding!',
      videoId: '9NSoRXC9PJI',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-play-the-e-chord-b1-201',
      position: { x: 0.35, y: 0.4 },
      detailedContent: `<p>E Major is one of the most <strong>powerful and full-sounding chords</strong> on guitar. It uses all three fretting fingers and all six strings — giving it a big, bright, happy sound.</p>
        <p>How to play E Major:</p>
        <ul>
          <li><strong>Index finger</strong> on the 1st fret of the G string (3rd string)</li>
          <li><strong>Middle finger</strong> on the 2nd fret of the A string (5th string)</li>
          <li><strong>Ring finger</strong> on the 2nd fret of the D string (4th string)</li>
          <li><strong>Strum all 6 strings</strong></li>
        </ul>
        <p>Notice something cool? E Major is just like Em but with your <strong>index finger added</strong> on the G string. That one extra note changes the whole mood from sad to happy!</p>`,
      learningOutcomes: [
        'Play the E Major chord with all three fingers placed correctly',
        'Hear the difference between E Major (happy) and Em (sad)',
        'Switch between Em and E Major smoothly'
      ],
      practiceSteps: [
        'Start by forming an Em chord, then add your index finger on the 1st fret of the G string',
        'Strum all 6 strings and pick each string individually to check for clean sound',
        'Practice switching between Em and E Major — lift just the index finger back and forth',
        'Try strumming Em 4 times, then E Major 4 times, repeating for 1 minute'
      ],
      quiz: [
        {
          question: 'What\'s the difference between Em and E Major?',
          options: ['E Major uses different strings', 'E Major adds the index finger on the 1st fret of the G string', 'Em uses more fingers', 'They sound the same'],
          answer: 1,
          explanation: 'E Major is Em plus one finger — your index on the 1st fret of the G string. That one note changes it from minor to major.'
        },
        {
          question: 'How does E Major sound compared to Em?',
          options: ['Sadder', 'Brighter and happier', 'Exactly the same', 'Quieter'],
          answer: 1,
          explanation: 'Major chords sound bright and happy, while minor chords sound sad or moody.'
        }
      ]
    },
    'CHORD-003': {
      id: 'CHORD-003',
      name: 'Am Chord',
      branch: 'chords',
      subbranch: 'two-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-001'],
      isGateway: false,
      description: 'Master the A Minor chord. Am is often paired with Em and is super common in songs.',
      videoId: '1Y2veGF9s44',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/the-a-minor-chord-b1-303',
      position: { x: 0.45, y: 0.35 },
      detailedContent: `<p>A Minor (Am) is one of the most used chords in all of music. It has a <strong>deep, melancholy sound</strong> and pairs beautifully with Em, C, and G chords.</p>
        <p>How to play Am:</p>
        <ul>
          <li><strong>Index finger</strong> on the 1st fret of the B string (2nd string)</li>
          <li><strong>Middle finger</strong> on the 2nd fret of the D string (4th string)</li>
          <li><strong>Ring finger</strong> on the 2nd fret of the G string (3rd string)</li>
          <li><strong>Strum from the A string (5th) down</strong> — skip the low E string</li>
        </ul>
        <p>Fun fact: Am looks like E Major rotated! The finger shape is very similar — it just moves over to different strings. This is something guitarists call a "chord family" relationship.</p>`,
      learningOutcomes: [
        'Play the Am chord with correct finger placement on 3 strings',
        'Remember to skip the low E string when strumming',
        'Recognize Am\'s sound and know it pairs well with Em, C, and G'
      ],
      practiceSteps: [
        'Place all three fingers: index on 1st fret B, middle on 2nd fret D, ring on 2nd fret G',
        'Strum from the A string down (5 strings) — avoid hitting the low E',
        'Pick each string individually: does every note ring clean?',
        'Practice forming Am 10 times — lift all fingers, then place them all at once'
      ],
      quiz: [
        {
          question: 'Which string should you NOT strum when playing Am?',
          options: ['High E (1st string)', 'B string (2nd)', 'Low E (6th string)', 'A string (5th)'],
          answer: 2,
          explanation: 'Skip the low E (thickest string) when playing Am. Start your strum from the A string.'
        },
        {
          question: 'How many fingers does the Am chord use?',
          options: ['One', 'Two', 'Three', 'Four'],
          answer: 2,
          explanation: 'Am uses three fingers: index, middle, and ring.'
        }
      ]
    },
    'CHORD-004': {
      id: 'CHORD-004',
      name: 'A Major (easy shape)',
      branch: 'chords',
      subbranch: 'two-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-003'],
      isGateway: false,
      description: 'Learn the A Major chord using the easy three-finger shape. Powerful and commonly used in many song styles!',
      videoId: '1X2rW5ATdLQ',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-play-the-a-chord-b1-108',
      position: { x: 0.5, y: 0.3 },
      detailedContent: `<p>A Major is a <strong>bright, powerful chord</strong> that shows up in rock, country, pop, and blues. It's one of those chords you'll use constantly once you learn it.</p>
        <p>How to play A Major (easy shape):</p>
        <ul>
          <li><strong>Index finger</strong> on the 2nd fret of the D string (4th string)</li>
          <li><strong>Middle finger</strong> on the 2nd fret of the G string (3rd string)</li>
          <li><strong>Ring finger</strong> on the 2nd fret of the B string (2nd string)</li>
          <li><strong>Strum from the A string (5th) down</strong> — skip the low E</li>
        </ul>
        <p>Notice all three fingers line up on the same fret! This can feel crowded at first. The trick is to <strong>stack your fingers close together</strong> using their tips, not pads. Some players even use just one or two fingers to cover this shape.</p>`,
      learningOutcomes: [
        'Play the A Major chord with all three fingers on the 2nd fret',
        'Keep fingers compact enough to avoid muting the high E string',
        'Switch between Am and A Major to hear the mood difference'
      ],
      practiceSteps: [
        'Line up all three fingers on the 2nd fret: index on D, middle on G, ring on B',
        'Make sure the high E string (1st) still rings open — your ring finger shouldn\'t touch it',
        'Strum from the A string down and check each note individually',
        'Practice switching between Am and A Major — the middle and ring fingers just shift strings'
      ],
      quiz: [
        {
          question: 'What\'s special about finger placement in the A Major chord?',
          options: ['All fingers are on different frets', 'All three fingers are on the same fret (2nd)', 'Only one finger is needed', 'Fingers go on the 1st and 3rd frets'],
          answer: 1,
          explanation: 'All three fingers line up on the 2nd fret, just on different strings. This makes it compact but a bit crowded!'
        },
        {
          question: 'Which string should ring open (unfretted) in A Major?',
          options: ['Low E (6th)', 'D string (4th)', 'High E (1st)', 'None — all strings are fretted'],
          answer: 2,
          explanation: 'The high E (1st string) and A string (5th) both ring open in A Major.'
        }
      ]
    },

    // 4.2 Three-Finger Chords
    'CHORD-005': {
      id: 'CHORD-005',
      name: 'D Major Chord',
      branch: 'chords',
      subbranch: 'three-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-004'],
      isGateway: false,
      description: 'Learn the D Major chord, which is a bright, ringing chord. Popular in folk and pop music!',
      videoId: 'QkrIZBLZEXw',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-play-the-d-chord-b1-105',
      position: { x: 0.55, y: 0.25 },
      detailedContent: `<p>The D Major chord has a <strong>bright, sweet, ringing sound</strong> that's perfect for folk, pop, and country music. It uses three fingers spread across three different frets.</p>
        <p>How to play D Major:</p>
        <ul>
          <li><strong>Index finger</strong> on the 2nd fret of the G string (3rd string)</li>
          <li><strong>Ring finger</strong> on the 3rd fret of the B string (2nd string)</li>
          <li><strong>Middle finger</strong> on the 2nd fret of the high E string (1st string)</li>
          <li><strong>Strum only the top 4 strings</strong> (D, G, B, high E) — skip the low E and A strings</li>
        </ul>
        <p>D Major is the first chord where you really need to be careful about <strong>which strings you strum</strong>. Hitting the low E or A will make it sound muddy. Practice starting your strum from the D string.</p>`,
      learningOutcomes: [
        'Play D Major with the correct triangular finger shape',
        'Strum only the top 4 strings cleanly',
        'Use D in common chord progressions with A and G'
      ],
      practiceSteps: [
        'Form the triangle shape: index (2nd fret G), middle (2nd fret high E), ring (3rd fret B)',
        'Strum ONLY the D, G, B, and high E strings — practice aiming your strum',
        'Pick each of the 4 strings individually to check for buzz or muted notes',
        'Practice switching between A Major and D Major, 4 strums each, for 1 minute'
      ],
      quiz: [
        {
          question: 'How many strings do you strum for the D Major chord?',
          options: ['All 6', '5 strings', '4 strings (D, G, B, high E)', '3 strings'],
          answer: 2,
          explanation: 'D Major uses only the top 4 strings. Hitting the low E or A string makes it sound wrong.'
        },
        {
          question: 'What frets are used in the D Major chord?',
          options: ['1st and 2nd frets', '2nd and 3rd frets', '3rd and 4th frets', 'Only the 2nd fret'],
          answer: 1,
          explanation: 'D Major spans the 2nd fret (index and middle fingers) and 3rd fret (ring finger).'
        }
      ]
    },
    'CHORD-006': {
      id: 'CHORD-006',
      name: 'Dm Chord',
      branch: 'chords',
      subbranch: 'three-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-005'],
      isGateway: false,
      description: 'Add D minor to your chord vocabulary. Dm has a sad, melancholic quality.',
      videoId: '8mFF8NYVdtI',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/the-d-minor-chord-b1-402',
      position: { x: 0.6, y: 0.3 },
      detailedContent: `<p>D minor (Dm) adds a <strong>darker, more emotional color</strong> to your chord vocabulary. Like Em, it has that sad, moody quality that's great for ballads and dramatic songs.</p>
        <p>How to play Dm:</p>
        <ul>
          <li><strong>Index finger</strong> on the 1st fret of the high E string (1st string)</li>
          <li><strong>Middle finger</strong> on the 2nd fret of the G string (3rd string)</li>
          <li><strong>Ring finger</strong> on the 3rd fret of the B string (2nd string)</li>
          <li><strong>Strum only the top 4 strings</strong> — same as D Major</li>
        </ul>
        <p>Compare Dm to D Major: the shapes are very similar, but your index finger drops down one fret on the high E string. That tiny change shifts the mood from bright to dark!</p>`,
      learningOutcomes: [
        'Play the Dm chord with correct finger placement',
        'Hear the difference between D Major (happy) and Dm (sad)',
        'Switch between D Major and Dm by moving just one finger'
      ],
      practiceSteps: [
        'Form the Dm shape: index (1st fret high E), middle (2nd fret G), ring (3rd fret B)',
        'Strum the top 4 strings and check each note individually',
        'Play D Major, then Dm, then D Major — hear how the mood shifts?',
        'Practice the D Major to Dm switch 10 times, focusing on just the index finger movement'
      ],
      quiz: [
        {
          question: 'What changes between D Major and Dm?',
          options: ['Completely different fingers', 'The index finger moves from 2nd fret to 1st fret on the high E', 'You add a 4th finger', 'You strum different strings'],
          answer: 1,
          explanation: 'The main difference is the index finger: 2nd fret high E for D Major, 1st fret high E for Dm.'
        },
        {
          question: 'Does Dm sound happy or sad?',
          options: ['Happy and bright', 'Sad and moody', 'Exactly like D Major', 'Neither — it sounds neutral'],
          answer: 1,
          explanation: 'Minor chords have a sad, moody, or dark quality. Dm is no exception!'
        }
      ]
    },
    'CHORD-007': {
      id: 'CHORD-007',
      name: 'G Major (easy 3-finger)',
      branch: 'chords',
      subbranch: 'three-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-005'],
      isGateway: false,
      description: 'Master the G Major chord using the easy three-finger version. G is one of the most-used chords in guitar!',
      videoId: 'i0G69vCTv4s',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/the-g-chord-hacked-b1-602',
      position: { x: 0.65, y: 0.25 },
      detailedContent: `<p>G Major is one of the <strong>most important chords in all of guitar</strong>. It's everywhere — pop, rock, country, folk, worship music, you name it. This easy 3-finger version gets you playing G right away.</p>
        <p>How to play G Major (easy version):</p>
        <ul>
          <li><strong>Middle finger</strong> on the 3rd fret of the low E string (6th string)</li>
          <li><strong>Index finger</strong> on the 2nd fret of the A string (5th string)</li>
          <li><strong>Ring finger</strong> on the 3rd fret of the high E string (1st string)</li>
          <li><strong>Strum all 6 strings</strong></li>
        </ul>
        <p>This is a big stretch! Your fingers span from the 6th string to the 1st string. It might feel awkward at first, but your hand will get used to the reach. The full G chord is even bigger — this version gets you 90% of the sound with less effort.</p>`,
      learningOutcomes: [
        'Play the easy G Major chord with proper finger placement',
        'Strum all 6 strings with a full, ringing sound',
        'Use G in the ultra-common G-C-D progression'
      ],
      practiceSteps: [
        'Place middle finger on 3rd fret low E, index on 2nd fret A, ring on 3rd fret high E',
        'Strum all 6 strings — this chord should sound big and full',
        'Check the open strings (D, G, B) ring clearly without being muted by your other fingers',
        'Practice switching between D Major and G Major, 4 strums each'
      ],
      quiz: [
        {
          question: 'How many strings do you strum for the easy G Major chord?',
          options: ['4 strings', '5 strings', 'All 6 strings', '3 strings'],
          answer: 2,
          explanation: 'G Major uses all 6 strings — that\'s why it sounds so big and full!'
        },
        {
          question: 'Which frets are used in the easy G chord?',
          options: ['1st and 2nd', '2nd and 3rd', '3rd and 4th', 'Only the 3rd'],
          answer: 1,
          explanation: 'The easy G uses the 2nd fret (A string) and 3rd fret (low E and high E strings).'
        }
      ]
    },
    'CHORD-008': {
      id: 'CHORD-008',
      name: 'C Major (3-finger version)',
      branch: 'chords',
      subbranch: 'three-finger-chords',
      difficulty: 3,
      prerequisites: ['CHORD-006'],
      isGateway: false,
      description: 'Play C Major using an easier three-finger shape. A stepping stone to the full C Major chord!',
      videoId: 'f18EV2dr008',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/the-c-chord-b1-501',
      position: { x: 0.7, y: 0.2 },
      detailedContent: `<p>C Major is a <strong>warm, open, ringing chord</strong> that's essential for guitar playing. This 3-finger version is a great stepping stone before learning the full C shape.</p>
        <p>How to play C Major (3-finger version):</p>
        <ul>
          <li><strong>Ring finger</strong> on the 3rd fret of the A string (5th string)</li>
          <li><strong>Middle finger</strong> on the 2nd fret of the D string (4th string)</li>
          <li><strong>Index finger</strong> on the 1st fret of the B string (2nd string)</li>
          <li><strong>Strum from the A string (5th) down</strong> — skip the low E</li>
        </ul>
        <p>C Major uses three different frets (1st, 2nd, 3rd), so your fingers create a diagonal staircase pattern. This is the first chord where you really stretch across frets. Take it slow — accuracy beats speed every time!</p>
        <p>With G, C, and D in your toolkit, you can play <strong>hundreds of songs</strong>.</p>`,
      learningOutcomes: [
        'Play the 3-finger C Major chord cleanly',
        'Manage the diagonal stretch across three different frets',
        'Combine C with G and D for the most common progression in pop music'
      ],
      practiceSteps: [
        'Place ring finger (3rd fret A), middle (2nd fret D), index (1st fret B) — notice the staircase shape',
        'Strum from the A string down (5 strings) and check each note rings clearly',
        'The G and high E strings ring open — make sure your fingers aren\'t accidentally touching them',
        'Practice the G-C-D loop: 4 strums of G, 4 of C, 4 of D, repeat for 2 minutes'
      ],
      quiz: [
        {
          question: 'What shape do your fingers make in the C Major chord?',
          options: ['All on the same fret', 'A diagonal staircase across frets 1, 2, and 3', 'A straight line on the 3rd fret', 'Two fingers on one fret'],
          answer: 1,
          explanation: 'C Major spans three frets (1st, 2nd, 3rd) creating a diagonal staircase pattern.'
        },
        {
          question: 'Which famous chord progression uses G, C, and D?',
          options: ['The blues progression', 'The I-IV-V progression (most common in pop)', 'The jazz turnaround', 'None — they don\'t go together'],
          answer: 1,
          explanation: 'G-C-D is the I-IV-V progression in the key of G — the most used progression in pop and rock music!'
        }
      ]
    },

    // 4.3 Four-Finger Chords
    'CHORD-009': {
      id: 'CHORD-009',
      name: 'C Major (full shape)',
      branch: 'chords',
      subbranch: 'four-finger-chords',
      difficulty: 3,
      prerequisites: ['CHORD-008'],
      isGateway: false,
      description: 'Master the full C Major chord with all four fingers. This is one of the most important chords to learn!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.75, y: 0.15 }
    },
    'CHORD-010': {
      id: 'CHORD-010',
      name: 'G Major (full shape)',
      branch: 'chords',
      subbranch: 'four-finger-chords',
      difficulty: 3,
      prerequisites: ['CHORD-007'],
      isGateway: false,
      description: 'Learn the complete G Major chord using all four fingers. This full shape is worth the effort!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.8, y: 0.1 }
    },
    'CHORD-011': {
      id: 'CHORD-011',
      name: 'A7 Chord',
      branch: 'chords',
      subbranch: 'four-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-004'],
      isGateway: false,
      description: 'Learn the A7 (A Dominant 7) chord, which adds a bluesy flavor to your playing.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.5, y: 0.2 }
    },
    'CHORD-012': {
      id: 'CHORD-012',
      name: 'D7 Chord',
      branch: 'chords',
      subbranch: 'four-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-005'],
      isGateway: false,
      description: 'Add the D7 chord to your collection. A versatile dominant chord for blues and rock styles.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.55, y: 0.15 }
    },
    'CHORD-013': {
      id: 'CHORD-013',
      name: 'E7 Chord',
      branch: 'chords',
      subbranch: 'four-finger-chords',
      difficulty: 2,
      prerequisites: ['CHORD-002'],
      isGateway: false,
      description: 'Learn E7, which is the dominant version of E Major. Great for blues playing!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.45, y: 0.1 }
    },

    // 4.4 Chord Quality
    'QUAL-001': {
      id: 'QUAL-001',
      name: 'Clean Chord Sound Check',
      branch: 'chords',
      subbranch: 'chord-quality',
      difficulty: 2,
      prerequisites: ['CHORD-001', 'CHORD-002', 'CHORD-003'],
      isGateway: false,
      description: 'Learn how to check if all your chord notes ring out cleanly. This is the sign of a well-played chord!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.35, y: 0.05 }
    },
    'QUAL-002': {
      id: 'QUAL-002',
      name: 'Identifying Buzzing Strings',
      branch: 'chords',
      subbranch: 'chord-quality',
      difficulty: 2,
      prerequisites: ['QUAL-001'],
      isGateway: false,
      description: 'Detect and identify buzzing strings in your chords. Buzzing means you need to adjust your finger position or pressure.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.4, y: 0.0 }
    },
    'QUAL-003': {
      id: 'QUAL-003',
      name: 'Fixing Muted Notes',
      branch: 'chords',
      subbranch: 'chord-quality',
      difficulty: 2,
      prerequisites: ['QUAL-002'],
      isGateway: false,
      description: 'Learn techniques to fix muted or dead strings in your chords. Get every note ringing!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.45, y: -0.05 }
    },
    'QUAL-004': {
      id: 'QUAL-004',
      name: 'Chord Arpeggiation Test',
      branch: 'chords',
      subbranch: 'chord-quality',
      difficulty: 3,
      prerequisites: ['QUAL-003'],
      isGateway: false,
      description: 'Test chord quality by playing each string individually (arpeggiating). All notes should ring clearly!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.5, y: -0.1 }
    },

    // ===== BRANCH 5: CHORD TRANSITIONS (16 skills) =====
    'TRANS-001': {
      id: 'TRANS-001',
      name: 'Em to E Transition',
      branch: 'transitions',
      subbranch: 'foundation-transitions',
      difficulty: 1,
      prerequisites: ['CHORD-001', 'CHORD-002'],
      isGateway: false,
      description: 'Practice switching between Em and E Major. These chords share finger positions, making transitions quick.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.2, y: 0.0 }
    },
    'TRANS-002': {
      id: 'TRANS-002',
      name: 'Am to E Transition',
      branch: 'transitions',
      subbranch: 'foundation-transitions',
      difficulty: 2,
      prerequisites: ['CHORD-003', 'CHORD-002'],
      isGateway: false,
      description: 'Master the Am to E transition. This combination is useful in folk and pop songs.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.15, y: -0.05 }
    },
    'TRANS-003': {
      id: 'TRANS-003',
      name: 'G to Em Transition',
      branch: 'transitions',
      subbranch: 'foundation-transitions',
      difficulty: 2,
      prerequisites: ['CHORD-007', 'CHORD-001'],
      isGateway: false,
      description: 'Practice transitioning from G to Em. A classic pairing used in many songs.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.25, y: -0.05 }
    },
    'TRANS-004': {
      id: 'TRANS-004',
      name: 'D to A Transition',
      branch: 'transitions',
      subbranch: 'foundation-transitions',
      difficulty: 2,
      prerequisites: ['CHORD-005', 'CHORD-004'],
      isGateway: false,
      description: 'Master the D to A transition. A powerful combination found in countless rock and pop songs!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.3, y: -0.1 }
    },
    'TRANS-005': {
      id: 'TRANS-005',
      name: 'G-C-D Loop',
      branch: 'transitions',
      subbranch: 'common-progressions',
      difficulty: 3,
      prerequisites: ['CHORD-007', 'CHORD-008', 'CHORD-005'],
      isGateway: false,
      description: 'Learn the classic G-C-D progression. This is one of the most popular chord progressions in music!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.35, y: -0.15 }
    },
    'TRANS-006': {
      id: 'TRANS-006',
      name: 'Em-Am-D-G Loop',
      branch: 'transitions',
      subbranch: 'common-progressions',
      difficulty: 3,
      prerequisites: ['TRANS-003', 'TRANS-004'],
      isGateway: false,
      description: 'Master the Em-Am-D-G progression. This beautiful loop appears in many folk and pop classics!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.4, y: -0.2 }
    },
    'TRANS-007': {
      id: 'TRANS-007',
      name: 'C-Am-F-G (with easy F)',
      branch: 'transitions',
      subbranch: 'common-progressions',
      difficulty: 3,
      prerequisites: ['TRANS-005', 'CHORD-003'],
      isGateway: false,
      description: 'Learn to play the C-Am-F-G progression using an easier F shape. This opens up tons of songs!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.45, y: -0.25 }
    },
    'TRANS-008': {
      id: 'TRANS-008',
      name: 'A-D-E Loop (rock progression)',
      branch: 'transitions',
      subbranch: 'common-progressions',
      difficulty: 3,
      prerequisites: ['CHORD-004', 'CHORD-005', 'CHORD-002'],
      isGateway: false,
      description: 'Master the A-D-E progression, the classic rock chord progression. Play countless rock hits with this!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.5, y: -0.3 }
    },
    'SPEED-001': {
      id: 'SPEED-001',
      name: '1 Change per 4 Beats',
      branch: 'transitions',
      subbranch: 'transition-speed',
      difficulty: 2,
      prerequisites: ['TRANS-001'],
      isGateway: false,
      description: 'Build comfort with chord changes at a slow tempo. One change every four beats gives you time to position your fingers.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.1, y: -0.1 }
    },
    'SPEED-002': {
      id: 'SPEED-002',
      name: '1 Change per 2 Beats',
      branch: 'transitions',
      subbranch: 'transition-speed',
      difficulty: 3,
      prerequisites: ['SPEED-001'],
      isGateway: false,
      description: 'Speed up your chord changes. One change every two beats is a comfortable pace for many songs.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.05, y: -0.2 }
    },
    'SPEED-003': {
      id: 'SPEED-003',
      name: '1 Change per Beat',
      branch: 'transitions',
      subbranch: 'transition-speed',
      difficulty: 4,
      prerequisites: ['SPEED-002'],
      isGateway: false,
      description: 'Achieve fast chord changes. One change per beat is a challenging goal that unlocks fast-paced songs!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.0, y: -0.3 }
    },
    'SPEED-004': {
      id: 'SPEED-004',
      name: 'No Gap Between Chords',
      branch: 'transitions',
      subbranch: 'transition-speed',
      difficulty: 3,
      prerequisites: ['SPEED-002'],
      isGateway: false,
      description: 'Eliminate any gaps between chords. The sound should be continuous and smooth. This is the mark of a skilled player!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.15, y: -0.25 }
    },
    'TECH-001': {
      id: 'TECH-001',
      name: 'Anchor Finger Concept',
      branch: 'transitions',
      subbranch: 'transition-techniques',
      difficulty: 2,
      prerequisites: ['TRANS-001'],
      isGateway: false,
      description: 'Learn the anchor finger technique where one finger stays in place while others move. This speeds up transitions!',
      videoId: 'Se__aa_k-ms',
      lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-use-anchor-fingers-b1-109',
      position: { x: 0.2, y: -0.2 },
      detailedContent: `<p>Changing chords feels impossible at first — but there's a secret that makes it <strong>way easier</strong>. It's called the <strong>anchor finger</strong> technique.</p>
        <p>The idea is simple: when two chords share a finger on the same fret and string, <strong>keep that finger in place</strong> while the other fingers move. It acts as an anchor point.</p>
        <p>Great anchor finger examples:</p>
        <ul>
          <li><strong>Am to C</strong> — Your index finger stays on the 1st fret of the B string for both chords</li>
          <li><strong>Am to E</strong> — Your middle and ring fingers keep a similar shape, just shifting strings</li>
          <li><strong>Em to G</strong> — Your ring finger can stay near the same area</li>
        </ul>
        <p>Not every chord change has an anchor finger, but when one exists, <strong>use it!</strong> It cuts your transition time in half because you're only moving 1-2 fingers instead of all three.</p>`,
      learningOutcomes: [
        'Identify shared fingers between common chord pairs',
        'Use an anchor finger to speed up chord transitions',
        'Apply the concept to Am-C, Am-E, and other common changes'
      ],
      practiceSteps: [
        'Play Am, then switch to C — notice your index finger stays on the 1st fret B string both times',
        'Practice Am to C 10 times, consciously keeping that index finger planted',
        'Now try without the anchor (lift all fingers each time) — feel how much slower it is?',
        'Look at your other chord pairs and find which ones share an anchor finger'
      ],
      quiz: [
        {
          question: 'What is an anchor finger?',
          options: ['A finger that presses extra hard', 'A finger that stays in place while others move during a chord change', 'The thumb behind the neck', 'A finger that mutes strings'],
          answer: 1,
          explanation: 'An anchor finger stays on the same fret and string for both chords, giving your hand a stable reference point.'
        },
        {
          question: 'Which chord pair shares an anchor finger on the 1st fret B string?',
          options: ['Em and E', 'G and D', 'Am and C', 'A and D'],
          answer: 2,
          explanation: 'Both Am and C have the index finger on the 1st fret of the B string — a perfect anchor!'
        }
      ]
    },
    'TECH-002': {
      id: 'TECH-002',
      name: 'Open String Buffer',
      branch: 'transitions',
      subbranch: 'transition-techniques',
      difficulty: 2,
      prerequisites: ['SPEED-001'],
      isGateway: false,
      description: 'Use open strings as a "buffer" during chord changes to keep the music flowing. Very helpful technique!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.25, y: -0.3 }
    },
    'TECH-003': {
      id: 'TECH-003',
      name: 'Finger Lifting Together',
      branch: 'transitions',
      subbranch: 'transition-techniques',
      difficulty: 3,
      prerequisites: ['TECH-001'],
      isGateway: false,
      description: 'Lift your fingers together as a group during transitions. This keeps everything synchronized and smooth.',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.3, y: -0.4 }
    },
    'TECH-004': {
      id: 'TECH-004',
      name: 'Air Changes (no looking)',
      branch: 'transitions',
      subbranch: 'transition-techniques',
      difficulty: 3,
      prerequisites: ['SPEED-002'],
      isGateway: false,
      description: 'Master chord changes without looking at your fretboard. Feel your way to the correct positions!',
      videoId: null,
      lessonUrl: null,
      position: { x: 0.35, y: -0.45 }
    },

    // ===== BRANCH 6: RHYTHM & TIMING (17 skills) =====
    'RHYT-001': {
      id: 'RHYT-001', name: 'Feeling the Beat (clapping)', branch: 'rhythm', subbranch: 'pulse-beat', difficulty: 1, prerequisites: [], isGateway: false,
      description: 'Learn to feel and clap along with musical beats. This fundamental skill is the foundation of all rhythm!',
      videoId: 'RPBtKqD6ddQ', lessonUrl: 'https://www.justinguitar.com/guitar-lessons/tapping-your-foot-b1-203', position: { x: 0.55, y: -0.2 },
      detailedContent: `<p>Before you can play <em>in time</em>, you need to <strong>feel the beat</strong>. Every song has a pulse — a steady heartbeat that everything else rides on top of.</p>
        <p>What is "the beat"?</p>
        <ul>
          <li><strong>The beat is the steady pulse</strong> you naturally tap your foot or nod your head to</li>
          <li><strong>It stays constant</strong> — even when the melody goes fast or slow, the beat keeps going</li>
          <li><strong>Most songs have 4 beats per group</strong> (called a "measure" or "bar"): 1, 2, 3, 4, 1, 2, 3, 4...</li>
        </ul>
        <p>The best way to develop this skill is to <strong>clap along with songs you love</strong>. Put on a song, find the beat, and clap on every pulse. If you can do this consistently, you already have great rhythm instincts!</p>
        <p><strong>Tip:</strong> Tap your foot while you play guitar. It keeps you locked into the beat even when your hands are busy with chords and strumming.</p>`,
      learningOutcomes: [
        'Feel and identify the steady beat (pulse) in any song',
        'Clap along in time with music without speeding up or slowing down',
        'Understand that the beat stays constant even when melodies change'
      ],
      practiceSteps: [
        'Put on a song you like and listen for 10 seconds — find the steady pulse',
        'Start clapping on every beat: 1, 2, 3, 4, 1, 2, 3, 4...',
        'Try tapping your foot instead of clapping — this is what you\'ll do while playing guitar',
        'Challenge: keep tapping for an entire song without losing the beat'
      ],
      quiz: [
        {
          question: 'What is "the beat" in music?',
          options: ['The fastest notes in a song', 'The steady pulse you tap your foot to', 'The loudest part of a song', 'The melody'],
          answer: 1,
          explanation: 'The beat is the steady, constant pulse that runs through the entire song — like a heartbeat.'
        },
        {
          question: 'How many beats are in most measures of popular music?',
          options: ['2', '3', '4', '8'],
          answer: 2,
          explanation: 'Most popular songs use 4 beats per measure (4/4 time), counted as 1-2-3-4.'
        }
      ]
    },
    'RHYT-002': { id: 'RHYT-002', name: 'Counting 1-2-3-4', branch: 'rhythm', subbranch: 'pulse-beat', difficulty: 1, prerequisites: ['RHYT-001'], isGateway: false, description: 'Learn to count beats in groups of four. "1-2-3-4, 1-2-3-4" — this is the heartbeat of most songs.', videoId: null, lessonUrl: null, position: { x: 0.6, y: -0.15 } },
    'RHYT-003': { id: 'RHYT-003', name: 'Playing on the Beat', branch: 'rhythm', subbranch: 'pulse-beat', difficulty: 2, prerequisites: ['RHYT-002', 'STRUM-001'], isGateway: false, description: 'Learn to strum or play notes exactly on the beat. This creates tight, rhythmic playing.', videoId: null, lessonUrl: null, position: { x: 0.65, y: -0.1 } },
    'RHYT-004': {
      id: 'RHYT-004', name: 'Counting 1-and-2-and-3-and-4-and', branch: 'rhythm', subbranch: 'pulse-beat', difficulty: 2, prerequisites: ['RHYT-002'], isGateway: false,
      description: 'Add the "ands" between the beats. This helps you play eighth notes and more complex rhythms.',
      videoId: 'U1TMGzcbbLE', lessonUrl: 'https://www.justinguitar.com/guitar-lessons/counting-ands-b1-305', position: { x: 0.7, y: -0.2 },
      detailedContent: `<p>You already know how to count "1, 2, 3, 4." Now it's time to <strong>double your rhythmic resolution</strong> by adding the "ands" between each beat.</p>
        <p>Here's how it works:</p>
        <ul>
          <li><strong>The numbers (1, 2, 3, 4)</strong> are called "downbeats" — these are the strong beats</li>
          <li><strong>The "ands" (&)</strong> fall exactly between each number — these are the "upbeats"</li>
          <li><strong>Say it out loud:</strong> "1-and-2-and-3-and-4-and" — keep it perfectly even</li>
          <li><strong>This gives you 8 pulses per measure</strong> instead of 4 — called "eighth notes"</li>
        </ul>
        <p>When you strum, the downstrokes happen on the numbers (1, 2, 3, 4) and the upstrokes happen on the "ands." This is the foundation for almost every strumming pattern you'll ever learn!</p>`,
      learningOutcomes: [
        'Count eighth notes: "1-and-2-and-3-and-4-and" at a steady tempo',
        'Understand the relationship between downbeats (numbers) and upbeats (ands)',
        'Connect counting to strumming: down on numbers, up on ands'
      ],
      practiceSteps: [
        'Say "1-and-2-and-3-and-4-and" out loud while tapping your foot on each number',
        'Clap on every syllable (both numbers and ands) — keep it perfectly even',
        'Now clap ONLY on the ands — this is harder but builds great rhythm awareness',
        'With your guitar, strum down on numbers and up on ands while counting aloud'
      ],
      quiz: [
        {
          question: 'What are the "ands" in "1-and-2-and-3-and-4-and"?',
          options: ['Rest pauses', 'The upbeats that fall between the main beats', 'Accented strong beats', 'Chord changes'],
          answer: 1,
          explanation: 'The "ands" are upbeats — they fall exactly between each numbered beat, doubling your rhythmic pulses.'
        },
        {
          question: 'When strumming with eighth notes, what direction do you strum on the "ands"?',
          options: ['Downstroke', 'Upstroke', 'No strum — they\'re silent', 'Either direction'],
          answer: 1,
          explanation: 'Downstrokes go with the numbers (downbeats), upstrokes go with the ands (upbeats).'
        }
      ]
    },
    'RHYT-005': { id: 'RHYT-005', name: 'Playing Eighth Notes', branch: 'rhythm', subbranch: 'pulse-beat', difficulty: 2, prerequisites: ['RHYT-004', 'STRUM-004'], isGateway: false, description: 'Play notes on every beat and every "and." This doubles your rhythmic resolution and opens up new patterns.', videoId: null, lessonUrl: null, position: { x: 0.75, y: -0.25 } },
    'METRO-001': {
      id: 'METRO-001', name: 'Using a Metronome App', branch: 'rhythm', subbranch: 'metronome-skills', difficulty: 1, prerequisites: ['RHYT-002'], isGateway: false,
      description: 'Learn to use a metronome app to keep perfect time. A metronome is one of your best practice tools!',
      videoId: 'sNa44EmrsDc', lessonUrl: 'https://www.justinguitar.com/guitar-lessons/meet-the-metronome-b1-403', position: { x: 0.8, y: -0.2 },
      detailedContent: `<p>A metronome is like a <strong>personal rhythm coach</strong> — it clicks at a steady speed so you can practice keeping perfect time. Professional musicians use metronomes every day, and you should too!</p>
        <p>Key metronome concepts:</p>
        <ul>
          <li><strong>BPM (Beats Per Minute)</strong> — this controls the speed. 60 BPM = one click per second. 120 BPM = two clicks per second</li>
          <li><strong>Start slow</strong> — always begin at a speed where you can play perfectly (even if it feels too easy)</li>
          <li><strong>Speed up gradually</strong> — increase by 5-10 BPM only after you can play cleanly at the current speed</li>
          <li><strong>The click is the boss</strong> — your strums should land exactly on the click, not before or after</li>
        </ul>
        <p>Free metronome apps: Google "metronome" (has a built-in one), Soundbrenner, Pro Metronome, or use the tuner/metronome page on this site!</p>`,
      learningOutcomes: [
        'Use a metronome app and understand BPM (beats per minute)',
        'Play or clap in sync with a metronome at 60 BPM',
        'Apply the "start slow, speed up gradually" practice approach'
      ],
      practiceSteps: [
        'Open a metronome app and set it to 60 BPM — listen to the steady clicks for 10 seconds',
        'Clap along with every click for 30 seconds straight without drifting',
        'Now strum a single chord (like Em) on each click — focus on hitting exactly on the beat',
        'If that feels easy, try 80 BPM. If it feels rushed, stay at 60 until it\'s comfortable'
      ],
      quiz: [
        {
          question: 'What does BPM stand for?',
          options: ['Beats Per Measure', 'Beats Per Minute', 'Bass Playing Mode', 'Basic Pulse Meter'],
          answer: 1,
          explanation: 'BPM = Beats Per Minute. At 60 BPM, there\'s one click every second. At 120 BPM, two clicks per second.'
        },
        {
          question: 'When should you increase the metronome speed?',
          options: ['As fast as possible from the start', 'Only after you can play cleanly at the current speed', 'Every 30 seconds', 'Never — always play at 60 BPM'],
          answer: 1,
          explanation: 'The golden rule: only speed up when you can play perfectly at the current tempo. Rushing leads to sloppy habits.'
        }
      ]
    },
    'METRO-002': { id: 'METRO-002', name: 'Clapping with Metronome', branch: 'rhythm', subbranch: 'metronome-skills', difficulty: 1, prerequisites: ['METRO-001'], isGateway: false, description: 'Clap along with a metronome to develop a rock-solid sense of timing.', videoId: null, lessonUrl: null, position: { x: 0.85, y: -0.15 } },
    'METRO-003': { id: 'METRO-003', name: 'Strumming at 60 BPM', branch: 'rhythm', subbranch: 'metronome-skills', difficulty: 2, prerequisites: ['METRO-002', 'STRUM-003'], isGateway: false, description: 'Practice your strumming at a slow, comfortable tempo (60 beats per minute). Perfect for building foundations.', videoId: null, lessonUrl: null, position: { x: 0.9, y: -0.1 } },
    'METRO-004': { id: 'METRO-004', name: 'Strumming at 80 BPM', branch: 'rhythm', subbranch: 'metronome-skills', difficulty: 2, prerequisites: ['METRO-003'], isGateway: false, description: 'Increase the tempo to 80 BPM. A medium-paced tempo that works for many songs.', videoId: null, lessonUrl: null, position: { x: 0.95, y: -0.05 } },
    'METRO-005': { id: 'METRO-005', name: 'Strumming at 100 BPM', branch: 'rhythm', subbranch: 'metronome-skills', difficulty: 3, prerequisites: ['METRO-004'], isGateway: false, description: 'Push to a faster tempo of 100 BPM. Many popular songs are played around this speed.', videoId: null, lessonUrl: null, position: { x: 1.0, y: 0.0 } },
    'METRO-006': { id: 'METRO-006', name: 'Chords with Metronome', branch: 'rhythm', subbranch: 'metronome-skills', difficulty: 3, prerequisites: ['METRO-004'], isGateway: false, description: 'Combine chord changes with metronome practice. This builds the discipline needed to play with a band!', videoId: null, lessonUrl: null, position: { x: 1.0, y: 0.1 } },
    'NOTE-001': { id: 'NOTE-001', name: 'Whole Notes (4 beats)', branch: 'rhythm', subbranch: 'note-values', difficulty: 1, prerequisites: ['RHYT-003'], isGateway: false, description: 'Understand whole notes, which last for all four beats in a measure. The longest note value you\'ll commonly use.', videoId: null, lessonUrl: null, position: { x: 0.5, y: -0.4 } },
    'NOTE-002': { id: 'NOTE-002', name: 'Half Notes (2 beats)', branch: 'rhythm', subbranch: 'note-values', difficulty: 2, prerequisites: ['NOTE-001'], isGateway: false, description: 'Learn half notes, which last for two beats. These are very common in songs.', videoId: null, lessonUrl: null, position: { x: 0.55, y: -0.45 } },
    'NOTE-003': { id: 'NOTE-003', name: 'Quarter Notes (1 beat)', branch: 'rhythm', subbranch: 'note-values', difficulty: 2, prerequisites: ['NOTE-002'], isGateway: false, description: 'Master quarter notes, which last for one beat. The building block of most rhythmic patterns.', videoId: null, lessonUrl: null, position: { x: 0.6, y: -0.5 } },
    'NOTE-004': { id: 'NOTE-004', name: 'Eighth Notes (half beat)', branch: 'rhythm', subbranch: 'note-values', difficulty: 2, prerequisites: ['NOTE-003', 'RHYT-005'], isGateway: false, description: 'Learn eighth notes, which last half a beat. These create faster, more energetic rhythms.', videoId: null, lessonUrl: null, position: { x: 0.65, y: -0.55 } },
    'NOTE-005': { id: 'NOTE-005', name: 'Mixing Note Values', branch: 'rhythm', subbranch: 'note-values', difficulty: 3, prerequisites: ['NOTE-004'], isGateway: false, description: 'Combine different note values in the same rhythm. This creates interesting and varied patterns.', videoId: null, lessonUrl: null, position: { x: 0.7, y: -0.6 } },
    'TIME-001': {
      id: 'TIME-001', name: 'Understanding 4/4 Time', branch: 'rhythm', subbranch: 'time-signatures', difficulty: 2, prerequisites: ['NOTE-003'], isGateway: false,
      description: 'Learn the most common time signature: 4/4. Four beats per measure, with quarter notes getting the beat.',
      videoId: 'FDPWwviOYno', lessonUrl: 'https://www.justinguitar.com/guitar-lessons/about-time-signatures-b1-603', position: { x: 0.4, y: -0.5 },
      detailedContent: `<p>The numbers "4/4" at the start of sheet music are called a <strong>time signature</strong>, and 4/4 is by far the most common — it's literally called "common time"!</p>
        <p>Here's what the numbers mean:</p>
        <ul>
          <li><strong>Top number (4)</strong> = 4 beats in each measure (bar)</li>
          <li><strong>Bottom number (4)</strong> = a quarter note gets one beat</li>
          <li><strong>So 4/4 means:</strong> count to 4, then start over — "1, 2, 3, 4, 1, 2, 3, 4..."</li>
        </ul>
        <p>Almost every pop, rock, hip-hop, country, and folk song you know is in 4/4 time. When you tap your foot to a song and naturally count to 4, that's 4/4 at work!</p>
        <p><strong>The bar line</strong> is an imaginary line that separates each group of 4 beats. Songs are made up of many measures strung together — like sentences in a paragraph.</p>`,
      learningOutcomes: [
        'Read and understand the 4/4 time signature',
        'Count measures in groups of 4 beats while listening to music',
        'Recognize that most popular songs use 4/4 time'
      ],
      practiceSteps: [
        'Put on any pop or rock song and count "1, 2, 3, 4" along with it — emphasize beat 1',
        'Count multiple measures in a row: "1-2-3-4, 1-2-3-4, 1-2-3-4..." for the whole song',
        'Strum a chord on beat 1 of each measure while counting all 4 beats aloud',
        'Try counting measures: "Measure 1: 1-2-3-4, Measure 2: 1-2-3-4..." to track song structure'
      ],
      quiz: [
        {
          question: 'In 4/4 time, what does the top number tell you?',
          options: ['How fast to play', 'How many beats per measure', 'Which chord to play', 'The key of the song'],
          answer: 1,
          explanation: 'The top number tells you there are 4 beats in each measure.'
        },
        {
          question: 'Why is 4/4 called "common time"?',
          options: ['It\'s used in classical music only', 'It\'s the easiest to learn', 'Almost all popular music uses it', 'It was invented first'],
          answer: 2,
          explanation: '4/4 is called common time because the vast majority of popular songs — rock, pop, country, hip-hop — use this time signature.'
        }
      ]
    },
    'TIME-002': { id: 'TIME-002', name: 'Counting Measures', branch: 'rhythm', subbranch: 'time-signatures', difficulty: 2, prerequisites: ['TIME-001'], isGateway: false, description: 'Learn to count measures (bars) in your music. Helps you stay organized and know where you are in a song.', videoId: null, lessonUrl: null, position: { x: 0.45, y: -0.55 } },
    'TIME-003': { id: 'TIME-003', name: 'Understanding 3/4 Time', branch: 'rhythm', subbranch: 'time-signatures', difficulty: 3, prerequisites: ['TIME-001'], isGateway: false, description: 'Learn 3/4 time, which has three beats per measure. Used in waltzes, ballads, and folk songs.', videoId: null, lessonUrl: null, position: { x: 0.35, y: -0.5 } },
    'TIME-004': { id: 'TIME-004', name: 'Playing in 3/4 Time', branch: 'rhythm', subbranch: 'time-signatures', difficulty: 3, prerequisites: ['TIME-003'], isGateway: false, description: 'Practice playing songs and patterns in 3/4 time. A great way to explore different rhythmic feels!', videoId: null, lessonUrl: null, position: { x: 0.3, y: -0.55 } },

    // ===== BRANCH 7: READING MUSIC (12 skills) =====
    'TAB-001': {
      id: 'TAB-001', name: 'Understanding Tab Lines', branch: 'reading', subbranch: 'tablature-basics', difficulty: 1, prerequisites: ['FOUND-002'], isGateway: false,
      description: 'Learn to read guitar tab notation. Tab uses six lines representing your guitar strings with numbers showing which frets to play.',
      videoId: '9xsG7n4Jalo', lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-read-guitar-tab-b1-405', position: { x: 0.1, y: -0.4 },
      detailedContent: `<p>Guitar tablature (or "tab") is a <strong>simple way to write down guitar music</strong> without needing to read traditional sheet music. It's by far the most popular way guitarists share songs online.</p>
        <p>How to read tab:</p>
        <ul>
          <li><strong>6 horizontal lines</strong> represent your 6 guitar strings</li>
          <li><strong>The bottom line = low E</strong> (thickest string), <strong>top line = high e</strong> (thinnest)</li>
          <li><strong>Numbers on the lines</strong> tell you which fret to press: "0" means play the string open, "3" means press the 3rd fret</li>
          <li><strong>Read left to right</strong> — like reading a sentence</li>
          <li><strong>Numbers stacked vertically</strong> = play those notes at the same time (a chord)</li>
        </ul>
        <p>Example: if you see a "2" on the bottom line, that means play the 2nd fret of the low E string. Simple!</p>
        <p><strong>Important:</strong> Tab shows you <em>where</em> to put your fingers but usually doesn't show <em>how long</em> to hold each note. You'll often need to listen to the song to get the rhythm right.</p>`,
      learningOutcomes: [
        'Read the 6 lines of tab and know which string each line represents',
        'Interpret fret numbers (0 = open, 1 = 1st fret, etc.)',
        'Read tab from left to right and distinguish single notes from chords'
      ],
      practiceSteps: [
        'Look at a simple tab and identify which line is the low E (bottom) and high e (top)',
        'Find a tab with single notes and play each one slowly — match the fret number to your guitar',
        'Look for stacked numbers (chords) — try playing a simple chord written in tab form',
        'Search for the tab of a song you know and follow along while listening'
      ],
      quiz: [
        {
          question: 'In guitar tab, what does the bottom line represent?',
          options: ['The thinnest string (high e)', 'The thickest string (low E)', 'The fret number', 'The rhythm'],
          answer: 1,
          explanation: 'The bottom line is the low E (thickest string), and the top line is the high e (thinnest) — the opposite of how your guitar looks when you look down at it!'
        },
        {
          question: 'What does the number "0" mean in guitar tab?',
          options: ['Don\'t play that string', 'Play the string open (no fret pressed)', 'Press the 10th fret', 'Rest (silence)'],
          answer: 1,
          explanation: '0 means play that string open — just pluck it without pressing any fret.'
        },
        {
          question: 'What does it mean when numbers are stacked vertically in tab?',
          options: ['Play them one after another quickly', 'Play all those notes at the same time (a chord)', 'Choose which one to play', 'Those are the finger numbers'],
          answer: 1,
          explanation: 'Stacked numbers mean play all those strings simultaneously — this is how chords are written in tab.'
        }
      ]
    },
    'TAB-002': { id: 'TAB-002', name: 'Reading Fret Numbers', branch: 'reading', subbranch: 'tablature-basics', difficulty: 1, prerequisites: ['TAB-001', 'FOUND-003'], isGateway: false, description: 'Understand how fret numbers work in tab. Numbers tell you exactly which fret to press on which string.', videoId: null, lessonUrl: null, position: { x: 0.05, y: -0.35 } },
    'TAB-003': { id: 'TAB-003', name: 'Playing Single Notes from Tab', branch: 'reading', subbranch: 'tablature-basics', difficulty: 2, prerequisites: ['TAB-002', 'SNOTE-004'], isGateway: false, description: 'Play simple single-note melodies from tab notation. This is your first step to reading and playing real music!', videoId: null, lessonUrl: null, position: { x: 0.0, y: -0.45 } },
    'TAB-004': { id: 'TAB-004', name: 'Reading Chords in Tab', branch: 'reading', subbranch: 'tablature-basics', difficulty: 2, prerequisites: ['TAB-003'], isGateway: false, description: 'Learn how chords are written in tab notation. Multiple numbers vertically aligned show which notes to play together.', videoId: null, lessonUrl: null, position: { x: 0.05, y: -0.5 } },
    'TAB-005': { id: 'TAB-005', name: 'Following Tab Timing', branch: 'reading', subbranch: 'tablature-basics', difficulty: 3, prerequisites: ['TAB-004', 'NOTE-003'], isGateway: false, description: 'Understand how timing works in tab. Learn to read the rhythmic spacing and note durations.', videoId: null, lessonUrl: null, position: { x: 0.1, y: -0.55 } },
    'DIAG-001': {
      id: 'DIAG-001', name: 'Reading Chord Diagrams', branch: 'reading', subbranch: 'chord-diagrams', difficulty: 1, prerequisites: ['FOUND-002', 'FOUND-003'], isGateway: false,
      description: 'Learn to read chord diagrams showing which strings to fret and where. These visual guides are super helpful!',
      videoId: 'LlN2yrFQKzY', lessonUrl: 'https://www.justinguitar.com/guitar-lessons/how-to-read-guitar-chord-boxes-b1-104', position: { x: 0.15, y: -0.4 },
      detailedContent: `<p>Chord diagrams (also called "chord boxes" or "chord charts") are <strong>visual maps that show you exactly where to put your fingers</strong> for any chord. Once you learn to read them, you can teach yourself any chord!</p>
        <p>How to read a chord diagram:</p>
        <ul>
          <li><strong>Vertical lines</strong> = the 6 strings (thickest on the left, thinnest on the right)</li>
          <li><strong>Horizontal lines</strong> = the frets (the top thick line is the nut)</li>
          <li><strong>Black dots</strong> = where to place your fingers (numbers inside show which finger)</li>
          <li><strong>"O" above a string</strong> = play that string open (no finger on it)</li>
          <li><strong>"X" above a string</strong> = don't play that string (mute it or skip it)</li>
        </ul>
        <p>Think of the diagram as looking at the guitar neck head-on: the thick low E string is on the left, and the frets run horizontally.</p>
        <p><strong>Finger numbers:</strong> 1 = index, 2 = middle, 3 = ring, 4 = pinky. These may be shown inside the dots.</p>`,
      learningOutcomes: [
        'Read a chord diagram and identify strings, frets, and finger positions',
        'Understand X (don\'t play) and O (open string) markings',
        'Use a chord diagram to learn any new chord independently'
      ],
      practiceSteps: [
        'Look at an Em chord diagram — find the two dots on the 2nd fret and match them to your fingers',
        'Now look at a G chord diagram — identify which strings are open (O) and which are fretted',
        'Try learning a chord you don\'t know yet just by reading its diagram (try D7 or A7)',
        'Search "guitar chord diagram" for any chord online and play it from the diagram alone'
      ],
      quiz: [
        {
          question: 'In a chord diagram, what does an "X" above a string mean?',
          options: ['Press that string hard', 'Play it open', 'Don\'t play that string', 'Use your pinky'],
          answer: 2,
          explanation: 'X means mute or skip that string — don\'t let it ring when you strum.'
        },
        {
          question: 'Which side of a chord diagram represents the thickest string (low E)?',
          options: ['The right side', 'The left side', 'The top', 'The bottom'],
          answer: 1,
          explanation: 'The thickest string (low E) is on the left side of a standard chord diagram.'
        },
        {
          question: 'What does an "O" above a string mean?',
          options: ['That string is muted', 'Press the string at any fret', 'Play that string open (unfretted)', 'That\'s the root note'],
          answer: 2,
          explanation: 'O means open — play that string without pressing any fret.'
        }
      ]
    },
    'DIAG-002': { id: 'DIAG-002', name: 'Understanding Finger Numbers', branch: 'reading', subbranch: 'chord-diagrams', difficulty: 1, prerequisites: ['DIAG-001'], isGateway: false, description: 'Learn the standard numbering system for fingers (1=index, 2=middle, 3=ring, 4=pinky). Used in all chord diagrams.', videoId: null, lessonUrl: null, position: { x: 0.2, y: -0.45 } },
    'DIAG-003': { id: 'DIAG-003', name: 'X\'s and O\'s (muted/open)', branch: 'reading', subbranch: 'chord-diagrams', difficulty: 2, prerequisites: ['DIAG-002'], isGateway: false, description: 'Understand the X and O symbols on chord diagrams. O means play the open string, X means don\'t play that string.', videoId: null, lessonUrl: null, position: { x: 0.25, y: -0.5 } },
    'DIAG-004': { id: 'DIAG-004', name: 'Learning New Chords from Diagrams', branch: 'reading', subbranch: 'chord-diagrams', difficulty: 2, prerequisites: ['DIAG-003'], isGateway: false, description: 'Use chord diagrams to learn new chords. A valuable skill for expanding your chord vocabulary!', videoId: null, lessonUrl: null, position: { x: 0.3, y: -0.55 } },
    'CHART-001': { id: 'CHART-001', name: 'Reading Chord Names', branch: 'reading', subbranch: 'chord-charts-lead-sheets', difficulty: 1, prerequisites: ['CHORD-001', 'CHORD-002', 'CHORD-003', 'CHORD-004'], isGateway: false, description: 'Learn to recognize chord names and symbols. Understand Major, minor, 7th, and other chord types.', videoId: null, lessonUrl: null, position: { x: 0.35, y: -0.4 } },
    'CHART-002': { id: 'CHART-002', name: 'Following Song Structure', branch: 'reading', subbranch: 'chord-charts-lead-sheets', difficulty: 2, prerequisites: ['CHART-001'], isGateway: false, description: 'Learn song structure labels like Verse, Chorus, Bridge. Helps you know where you are in a song!', videoId: null, lessonUrl: null, position: { x: 0.4, y: -0.45 } },
    'CHART-003': { id: 'CHART-003', name: 'Verse/Chorus Recognition', branch: 'reading', subbranch: 'chord-charts-lead-sheets', difficulty: 2, prerequisites: ['CHART-002'], isGateway: false, description: 'Understand what verses and choruses are and how they function in songs. Helps you learn songs faster!', videoId: null, lessonUrl: null, position: { x: 0.45, y: -0.5 } },
    'CHART-004': { id: 'CHART-004', name: 'Reading Slash Notation', branch: 'reading', subbranch: 'chord-charts-lead-sheets', difficulty: 3, prerequisites: ['CHART-002'], isGateway: false, description: 'Learn slash notation (e.g., G/B) where the second note indicates a specific bass note for the chord.', videoId: null, lessonUrl: null, position: { x: 0.5, y: -0.55 } },

    // ===== BRANCH 8: MUSIC THEORY BASICS (16 skills) =====
    'THEORY-001': { id: 'THEORY-001', name: 'Musical Alphabet (A-G)', branch: 'theory', subbranch: 'notes-on-fretboard', difficulty: 1, prerequisites: [], isGateway: false, description: 'Learn the seven basic musical notes: A, B, C, D, E, F, G. These repeat over and over on your guitar!', videoId: null, lessonUrl: null, position: { x: 0.0, y: 0.5 } },
    'THEORY-002': { id: 'THEORY-002', name: 'Open String Note Names', branch: 'theory', subbranch: 'notes-on-fretboard', difficulty: 1, prerequisites: ['THEORY-001', 'FOUND-002'], isGateway: false, description: 'Know the exact note names of your six open strings: E, A, D, G, B, E. The foundation for all fretboard knowledge!', videoId: null, lessonUrl: null, position: { x: -0.05, y: 0.55 } },
    'THEORY-003': { id: 'THEORY-003', name: 'Notes on Low E String (frets 0-5)', branch: 'theory', subbranch: 'notes-on-fretboard', difficulty: 2, prerequisites: ['THEORY-002'], isGateway: false, description: 'Learn the note names on the low E string from open to the 5th fret. A great starting point for fretboard knowledge!', videoId: null, lessonUrl: null, position: { x: -0.1, y: 0.5 } },
    'THEORY-004': { id: 'THEORY-004', name: 'Notes on A String (frets 0-5)', branch: 'theory', subbranch: 'notes-on-fretboard', difficulty: 2, prerequisites: ['THEORY-003'], isGateway: false, description: 'Extend your knowledge to the A string. Knowing these note names opens up the middle of the fretboard!', videoId: null, lessonUrl: null, position: { x: -0.15, y: 0.55 } },
    'THEORY-005': { id: 'THEORY-005', name: 'Finding the Same Note on Different Strings', branch: 'theory', subbranch: 'notes-on-fretboard', difficulty: 3, prerequisites: ['THEORY-004'], isGateway: false, description: 'Learn to find the same note on different strings. This expands your playing options and makes you a more flexible player!', videoId: null, lessonUrl: null, position: { x: -0.2, y: 0.5 } },
    'SHARP-001': { id: 'SHARP-001', name: 'What Sharps Mean (#)', branch: 'theory', subbranch: 'sharps-flats', difficulty: 2, prerequisites: ['THEORY-001'], isGateway: false, description: 'Learn that a sharp (#) raises a note by one half step (one fret). C# is one fret higher than C.', videoId: null, lessonUrl: null, position: { x: 0.0, y: 0.4 } },
    'SHARP-002': { id: 'SHARP-002', name: 'What Flats Mean (b)', branch: 'theory', subbranch: 'sharps-flats', difficulty: 2, prerequisites: ['SHARP-001'], isGateway: false, description: 'Learn that a flat (b) lowers a note by one half step (one fret). Db is one fret lower than D.', videoId: null, lessonUrl: null, position: { x: -0.05, y: 0.35 } },
    'SHARP-003': { id: 'SHARP-003', name: 'Half Steps on Guitar', branch: 'theory', subbranch: 'sharps-flats', difficulty: 2, prerequisites: ['SHARP-002', 'FOUND-003'], isGateway: false, description: 'Understand that a half step is one fret on your guitar. The distance from one fret to the next is a half step.', videoId: null, lessonUrl: null, position: { x: -0.1, y: 0.4 } },
    'SHARP-004': { id: 'SHARP-004', name: 'Whole Steps on Guitar', branch: 'theory', subbranch: 'sharps-flats', difficulty: 2, prerequisites: ['SHARP-003'], isGateway: false, description: 'Learn that a whole step is two frets. Understanding whole and half steps is key to learning scales!', videoId: null, lessonUrl: null, position: { x: -0.15, y: 0.35 } },
    'CTHEORY-001': { id: 'CTHEORY-001', name: 'Major vs Minor Sound', branch: 'theory', subbranch: 'basic-chord-theory', difficulty: 1, prerequisites: ['CHORD-001', 'CHORD-002'], isGateway: false, description: 'Understand the emotional difference between Major (bright, happy) and Minor (dark, sad) chords.', videoId: null, lessonUrl: null, position: { x: 0.0, y: 0.3 } },
    'CTHEORY-002': { id: 'CTHEORY-002', name: 'Why Em Sounds Sad', branch: 'theory', subbranch: 'basic-chord-theory', difficulty: 2, prerequisites: ['CTHEORY-001'], isGateway: false, description: 'Learn why Em sounds melancholic. Understanding chord construction helps you appreciate music more deeply!', videoId: null, lessonUrl: null, position: { x: -0.05, y: 0.25 } },
    'CTHEORY-003': { id: 'CTHEORY-003', name: 'Root Notes in Chords', branch: 'theory', subbranch: 'basic-chord-theory', difficulty: 3, prerequisites: ['CTHEORY-001', 'THEORY-003'], isGateway: false, description: 'Learn what the root note of a chord is and how it defines the chord\'s name and character.', videoId: null, lessonUrl: null, position: { x: -0.1, y: 0.3 } },
    'CTHEORY-004': { id: 'CTHEORY-004', name: 'What "7th" Means in Chords', branch: 'theory', subbranch: 'basic-chord-theory', difficulty: 3, prerequisites: ['CTHEORY-003', 'CHORD-011'], isGateway: false, description: 'Understand what the "7" in chords like A7 or D7 means. These chords add a bluesy flavor!', videoId: null, lessonUrl: null, position: { x: -0.15, y: 0.25 } },
    'KEY-001': { id: 'KEY-001', name: 'Chords That Go Together', branch: 'theory', subbranch: 'keys-families', difficulty: 2, prerequisites: ['TRANS-001'], isGateway: false, description: 'Learn which chords naturally sound good together. Chords in the same key family are friends!', videoId: null, lessonUrl: null, position: { x: 0.0, y: 0.2 } },
    'KEY-002': { id: 'KEY-002', name: 'Key of G Chord Family', branch: 'theory', subbranch: 'keys-families', difficulty: 3, prerequisites: ['KEY-001'], isGateway: false, description: 'Learn which chords belong to the key of G. Understanding keys helps you create natural-sounding progressions!', videoId: null, lessonUrl: null, position: { x: -0.05, y: 0.15 } },
    'KEY-003': { id: 'KEY-003', name: 'Key of C Chord Family', branch: 'theory', subbranch: 'keys-families', difficulty: 3, prerequisites: ['KEY-002'], isGateway: false, description: 'Expand your key knowledge to the key of C. Many beginners songs use C major chords!', videoId: null, lessonUrl: null, position: { x: -0.1, y: 0.2 } },
    'KEY-004': { id: 'KEY-004', name: 'Key of D Chord Family', branch: 'theory', subbranch: 'keys-families', difficulty: 3, prerequisites: ['KEY-003'], isGateway: false, description: 'Complete your key family knowledge with the key of D. D is a popular key for acoustic guitar!', videoId: null, lessonUrl: null, position: { x: -0.15, y: 0.15 } },

    // ===== BRANCH 9: SINGLE NOTE PLAYING (12 skills) =====
    'MELODY-001': { id: 'MELODY-001', name: 'Mary Had a Little Lamb', branch: 'single-note', subbranch: 'simple-melodies', difficulty: 2, prerequisites: ['SNOTE-005', 'TAB-003'], isGateway: false, description: 'Learn your first recognizable melody! Mary Had a Little Lamb is simple but satisfying to play.', videoId: null, lessonUrl: null, position: { x: 0.15, y: 0.6 } },
    'MELODY-002': { id: 'MELODY-002', name: 'Twinkle Twinkle Little Star', branch: 'single-note', subbranch: 'simple-melodies', difficulty: 2, prerequisites: ['MELODY-001'], isGateway: false, description: 'Add another classic melody to your repertoire! Twinkle Twinkle Little Star is a timeless favorite.', videoId: null, lessonUrl: null, position: { x: 0.2, y: 0.65 } },
    'MELODY-003': { id: 'MELODY-003', name: 'Ode to Joy (simplified)', branch: 'single-note', subbranch: 'simple-melodies', difficulty: 3, prerequisites: ['MELODY-002'], isGateway: false, description: 'Play a beautiful, recognizable melody from Beethoven\'s Ode to Joy. You\'re leveling up!', videoId: null, lessonUrl: null, position: { x: 0.25, y: 0.6 } },
    'MELODY-004': { id: 'MELODY-004', name: 'Happy Birthday', branch: 'single-note', subbranch: 'simple-melodies', difficulty: 2, prerequisites: ['MELODY-002'], isGateway: false, description: 'Learn to play Happy Birthday! A fun party trick and a great skill to have.', videoId: null, lessonUrl: null, position: { x: 0.1, y: 0.65 } },
    'RIFF-001': { id: 'RIFF-001', name: 'Simple Rock Riff', branch: 'single-note', subbranch: 'riffs-licks', difficulty: 2, prerequisites: ['SNOTE-005', 'RHYT-005'], isGateway: false, description: 'Learn your first real rock riff! These short, catchy patterns are the hooks of rock songs.', videoId: null, lessonUrl: null, position: { x: 0.3, y: 0.7 } },
    'RIFF-002': { id: 'RIFF-002', name: 'Seven Nation Army Riff', branch: 'single-note', subbranch: 'riffs-licks', difficulty: 3, prerequisites: ['RIFF-001'], isGateway: false, description: 'Play the iconic Seven Nation Army riff. Instantly recognizable and super fun!', videoId: null, lessonUrl: null, position: { x: 0.35, y: 0.65 } },
    'RIFF-003': { id: 'RIFF-003', name: 'Smoke on the Water Opening', branch: 'single-note', subbranch: 'riffs-licks', difficulty: 3, prerequisites: ['RIFF-002'], isGateway: false, description: 'Master the legendary opening riff from Deep Purple\'s Smoke on the Water. A guitar classic!', videoId: null, lessonUrl: null, position: { x: 0.4, y: 0.7 } },
    'RIFF-004': { id: 'RIFF-004', name: 'Day Tripper Intro', branch: 'single-note', subbranch: 'riffs-licks', difficulty: 4, prerequisites: ['RIFF-003'], isGateway: false, description: 'Play the iconic Day Tripper intro by The Beatles. A challenging but incredibly rewarding riff!', videoId: null, lessonUrl: null, position: { x: 0.45, y: 0.65 } },
    'SCALE-001': { id: 'SCALE-001', name: 'What is a Scale?', branch: 'single-note', subbranch: 'scale-intro', difficulty: 1, prerequisites: ['THEORY-001'], isGateway: false, description: 'Learn that a scale is a collection of notes in ascending order. The foundation for all melodies and improvisation!', videoId: null, lessonUrl: null, position: { x: 0.05, y: 0.7 } },
    'SCALE-002': { id: 'SCALE-002', name: 'E Minor Pentatonic (box 1)', branch: 'single-note', subbranch: 'scale-intro', difficulty: 3, prerequisites: ['SCALE-001', 'INDEP-004'], isGateway: false, description: 'Learn the most essential scale for rock and blues! The E minor pentatonic opens up improvisation.', videoId: null, lessonUrl: null, position: { x: 0.1, y: 0.75 } },
    'SCALE-003': { id: 'SCALE-003', name: 'Playing Scale Up and Down', branch: 'single-note', subbranch: 'scale-intro', difficulty: 3, prerequisites: ['SCALE-002'], isGateway: false, description: 'Play the scale smoothly in both directions. This builds finger strength and fretboard familiarity.', videoId: null, lessonUrl: null, position: { x: 0.15, y: 0.8 } },
    'SCALE-004': { id: 'SCALE-004', name: 'Scale with Metronome', branch: 'single-note', subbranch: 'scale-intro', difficulty: 4, prerequisites: ['SCALE-003', 'METRO-004'], isGateway: false, description: 'Practice your scale with a metronome at increasing tempos. This develops speed, accuracy, and rhythm!', videoId: null, lessonUrl: null, position: { x: 0.2, y: 0.85 } },

    // ===== BRANCH 10: SONGS & APPLICATION (16 skills) =====
    'SONG-001': { id: 'SONG-001', name: 'Playing Along to a One-Chord Jam', branch: 'songs', subbranch: 'one-chord-songs', difficulty: 1, prerequisites: ['RHYT-003'], isGateway: false, description: 'Play along with a simple one-chord jam. This is your first step toward playing real songs!', videoId: null, lessonUrl: null, position: { x: 0.4, y: 0.8 } },
    'SONG-002': { id: 'SONG-002', name: 'One-Chord Song with Pattern', branch: 'songs', subbranch: 'one-chord-songs', difficulty: 2, prerequisites: ['SONG-001', 'PATT-001'], isGateway: false, description: 'Combine a single chord with a strumming pattern. This adds rhythm and polish to your playing.', videoId: null, lessonUrl: null, position: { x: 0.45, y: 0.85 } },
    'SONG-003': { id: 'SONG-003', name: 'A Horse With No Name (Em-D6)', branch: 'songs', subbranch: 'two-chord-songs', difficulty: 2, prerequisites: ['TRANS-001'], isGateway: false, description: 'Play a real classic song using just two chords! You\'ve reached the point of playing recognizable songs!', videoId: null, lessonUrl: null, position: { x: 0.5, y: 0.75 } },
    'SONG-004': { id: 'SONG-004', name: 'Something in the Way (Em-C)', branch: 'songs', subbranch: 'two-chord-songs', difficulty: 2, prerequisites: ['TRANS-003'], isGateway: false, description: 'Play a Nirvana classic with just Em and C! A great two-chord song that sounds professional.', videoId: null, lessonUrl: null, position: { x: 0.55, y: 0.8 } },
    'SONG-005': { id: 'SONG-005', name: 'Jammin\' (Bm-E)', branch: 'songs', subbranch: 'two-chord-songs', difficulty: 3, prerequisites: ['SPEED-001'], isGateway: false, description: 'Learn Bob Marley\'s reggae classic! This song uses rhythm and feel to create an amazing vibe.', videoId: null, lessonUrl: null, position: { x: 0.6, y: 0.75 } },
    'SONG-006': { id: 'SONG-006', name: 'Bad Moon Rising (D-A-G)', branch: 'songs', subbranch: 'three-chord-songs', difficulty: 3, prerequisites: ['TRANS-004', 'CHORD-007'], isGateway: false, description: 'Play a classic CCR song with three chords. A great example of a perfect beginner song!', videoId: null, lessonUrl: null, position: { x: 0.35, y: 0.7 } },
    'SONG-007': { id: 'SONG-007', name: 'Twist and Shout (D-G-A)', branch: 'songs', subbranch: 'three-chord-songs', difficulty: 3, prerequisites: ['SONG-006'], isGateway: false, description: 'Rock out with this classic Beatles cover! Twist and Shout is pure fun with three chords.', videoId: null, lessonUrl: null, position: { x: 0.4, y: 0.75 } },
    'SONG-008': { id: 'SONG-008', name: 'Sweet Home Alabama (D-C-G)', branch: 'songs', subbranch: 'three-chord-songs', difficulty: 3, prerequisites: ['TRANS-005'], isGateway: false, description: 'Play one of the most iconic rock songs of all time! Sweet Home Alabama uses the classic D-C-G progression.', videoId: null, lessonUrl: null, position: { x: 0.65, y: 0.7 } },
    'SONG-009': { id: 'SONG-009', name: 'Stand By Me (G-Em-C-D)', branch: 'songs', subbranch: 'four-chord-songs', difficulty: 3, prerequisites: ['TRANS-006'], isGateway: false, description: 'Play the beautiful Stand By Me. A timeless classic with four essential chords!', videoId: null, lessonUrl: null, position: { x: 0.3, y: 0.6 } },
    'SONG-010': { id: 'SONG-010', name: 'Let It Be (G-D-Em-C)', branch: 'songs', subbranch: 'four-chord-songs', difficulty: 3, prerequisites: ['SONG-009'], isGateway: false, description: 'Play a Beatles masterpiece! Let It Be is a perfect four-chord song that sounds amazing.', videoId: null, lessonUrl: null, position: { x: 0.35, y: 0.65 } },
    'SONG-011': { id: 'SONG-011', name: 'I\'m Yours (G-D-Em-C)', branch: 'songs', subbranch: 'four-chord-songs', difficulty: 3, prerequisites: ['SONG-010'], isGateway: false, description: 'Play Jason Mraz\'s feel-good classic! I\'m Yours is fun, uplifting, and uses easy four chords.', videoId: null, lessonUrl: null, position: { x: 0.4, y: 0.55 } },
    'SONG-012': { id: 'SONG-012', name: 'Riptide (Am-G-C-F easy)', branch: 'songs', subbranch: 'four-chord-songs', difficulty: 4, prerequisites: ['TRANS-007'], isGateway: false, description: 'Play the indie hit Riptide by Vance Joy! Using an easier F chord, this catchy song is within reach!', videoId: null, lessonUrl: null, position: { x: 0.45, y: 0.6 } },
    'PERF-001': { id: 'PERF-001', name: 'Playing Without Looking', branch: 'songs', subbranch: 'performance-skills', difficulty: 3, prerequisites: ['SONG-003', 'SONG-004'], isGateway: false, description: 'Learn to play songs without looking at your fretboard. This is a huge step toward confident performance!', videoId: null, lessonUrl: null, position: { x: 0.5, y: 0.65 } },
    'PERF-002': { id: 'PERF-002', name: 'Playing for 2+ Minutes Continuous', branch: 'songs', subbranch: 'performance-skills', difficulty: 3, prerequisites: ['PERF-001'], isGateway: false, description: 'Build stamina by playing songs for 2+ minutes without stopping. Your fingers and mind need to work together!', videoId: null, lessonUrl: null, position: { x: 0.55, y: 0.7 } },
    'PERF-003': { id: 'PERF-003', name: 'Playing Along with Recording', branch: 'songs', subbranch: 'performance-skills', difficulty: 3, prerequisites: ['PERF-002', 'METRO-005'], isGateway: false, description: 'Play along with original recordings of songs. Locking in with a recording is a key performance skill!', videoId: null, lessonUrl: null, position: { x: 0.6, y: 0.65 } },
    'PERF-004': { id: 'PERF-004', name: 'Recovering from Mistakes', branch: 'songs', subbranch: 'performance-skills', difficulty: 3, prerequisites: ['PERF-003'], isGateway: false, description: 'Learn the professional skill of recovering when you mess up. Every great musician drops a note sometimes!', videoId: null, lessonUrl: null, position: { x: 0.65, y: 0.7 } }
  }
};

