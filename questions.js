const questions = [
  // Group A
  {"id": 0, "question": "I connect awakening with a consciousness journey beyond any specific deity.", "group": "A", "negativeFraming": false, "globalEffect": 1},
  {"id": 1, "question": "I strive to see the world free from the limitations of personal and societal belief systems.", "group": "A", "negativeFraming": false, "globalEffect": 1},
  {"id": 2, "question": "In my view, everything in the universe is some form of manifestation of consciousness.", "group": "A", "negativeFraming": false, "globalEffect": 1},

  // Group B
  {"id": 3, "question": "God is wholly transcendent, existing separately from the universe and its creation.", "group": "B", "negativeFraming": false, "globalEffect": -1},
  {"id": 4, "question": "My awakening journey is guided by a personal connection to a specific God or higher power.", "group": "B", "negativeFraming": false, "globalEffect": -1},
  {"id": 5, "question": "Certain spiritual or religious symbols and rituals offer an elevated significance in the journey of awakening.", "group": "B", "negativeFraming": false, "globalEffect": -1},

  // Group C
  {"id": 6, "question": "I use practices or methods specifically to quiet my mind or expand my awareness.", "group": "C", "negativeFraming": false, "globalEffect": 1},
  {"id": 7, "question": "I engage in structured practices such as yoga, meditation, or breathwork for personal growth.", "group": "C", "negativeFraming": false, "globalEffect": 1},
  {"id": 8, "question": "I utilize the expertise of professionals within the diverse realm of personal and spiritual development.", "group": "C", "negativeFraming": false, "globalEffect": 1},

  // Group D
  {"id": 9, "question": "I'm often in awe and enriched by the profound dialogues on awakening that I encounter with others.", "group": "D", "negativeFraming": false, "globalEffect": 1},
  {"id": 10, "question": "I seek knowledge through reading, attending workshops, or online courses to deepen my awakening journey.", "group": "D", "negativeFraming": false, "globalEffect": 1},
  {"id": 11, "question": "I believe that learning from others’ experiences accelerates my own awakening process.", "group": "D", "negativeFraming": false, "globalEffect": 1},

  // Group E
  {"id": 12, "question": "I trust my intuitive insights and feelings, even when I cannot explain them.", "group": "E", "negativeFraming": false, "globalEffect": 1},
  {"id": 13, "question": "I regularly connect with and listen to my inner guidance or higher self.", "group": "E", "negativeFraming": false, "globalEffect": 1},
  {"id": 14, "question": "The answers to my most profound questions are to be found within my own inner knowing.", "group": "E", "negativeFraming": false, "globalEffect": 1},

  // Group F
  {"id": 15, "question": "I perceive the universe as an interconnected web, where everything has its place and purpose.", "group": "F", "negativeFraming": false, "globalEffect": 1},
  {"id": 16, "question": "The idea of being one with nature, other people, and the universe resonates deeply with me.", "group": "F", "negativeFraming": false, "globalEffect": 1},
  {"id": 17, "question": "I believe that at our core, all living beings share a common essence or energy.", "group": "F", "negativeFraming": false, "globalEffect": 1},

  // Group G
  {"id": 18, "question": "My purpose is intricately linked to enhancing the well-being of my community and/or the broader global society.", "group": "G", "negativeFraming": false, "globalEffect": 1},
  {"id": 19, "question": "I am confident in applying my insights and understanding to actively support and guide others on their journey.", "group": "G", "negativeFraming": false, "globalEffect": 1},
  {"id": 20, "question": "I see social interactions as opportunities to connect and contribute.", "group": "G", "negativeFraming": false, "globalEffect": 1},

  // Group H
  {"id": 21, "question": "I like to read and research about topics that try to scientifically explore the awakening.", "group": "H", "negativeFraming": false, "globalEffect": -1},
  {"id": 22, "question": "It's important for me to be able to logically explain my awakening beliefs.", "group": "H", "negativeFraming": false, "globalEffect": -1},
  {"id": 23, "question": "Critical thinking and curiosity fuel my exploration into the various perspectives surrounding 'awakening.", "group": "H", "negativeFraming": false, "globalEffect": -1},

  // Group I
  {"id": 24, "question": "I believe that successfully utilizing money as a form of energy is the ultimate goal of life.", "group": "I", "negativeFraming": false, "globalEffect": -1},
  {"id": 25, "question": "Attracting money is a skill that not everyone can master.", "group": "I", "negativeFraming": false, "globalEffect": -1},
  {"id": 26, "question": "I believe in creating abundance, not just for personal gain, but as a means to contribute to the greater good.", "group": "I", "negativeFraming": true, "globalEffect": 1},

  // Group J
  {"id": 27, "question": "I respect and show kindness to everyone, embracing our differences and acknowledging their value.", "group": "J", "negativeFraming": false, "globalEffect": 1},
  {"id": 28, "question": "I find joy in uplifting others, expressing gratitude for their contributions without seeking recognition.", "group": "J", "negativeFraming": false, "globalEffect": 1},
  {"id": 29, "question": "I find it easy to be aware of my limitations while also recognizing and appreciating the successes of others.", "group": "J", "negativeFraming": false, "globalEffect": 1},

  // Group K
  {"id": 30, "question": "I find it easy to transcend the ego while maintaining a sense of presence and engagement.", "group": "K", "negativeFraming": false, "globalEffect": 1},
  {"id": 31, "question": "I find it important to always be as present and intentional as possible.", "group": "K", "negativeFraming": false, "globalEffect": 1},
  {"id": 32, "question": "It is easy for me to maintain a calm and centered state of being, even in challenging situations.", "group": "K", "negativeFraming": false, "globalEffect": 1},

  // Group L
  {"id": 33, "question": "I effortlessly incorporate joy and having positive thoughts into my journey of growth.", "group": "L", "negativeFraming": false, "globalEffect": 1},
  {"id": 34, "question": "I find it easy to transform challenges and the unknown into opportunities for growth and learning.", "group": "L", "negativeFraming": false, "globalEffect": 1},
  {"id": 35, "question": "I believe that life can be deep and meaningful, without being overly serious.", "group": "L", "negativeFraming": false, "globalEffect": 1},

  // Group M
  {"id": 36, "question": "I love exploring personal growth through creative expressions like art, music, writing etc.", "group": "M", "negativeFraming": false, "globalEffect": 1},
  {"id": 37, "question": "Artistic expression allows me to connect with something greater than myself.", "group": "M", "negativeFraming": false, "globalEffect": 1},
  {"id": 38, "question": "Creative Practices enhance my awareness of the “bigger picture”.", "group": "M", "negativeFraming": false, "globalEffect": 1},

  // Group N
  {"id": 39, "question": "I am committed to endure the discomfort of facing my shadows, wounds and traumas because it is an important part of growth.", "group": "N", "negativeFraming": false, "globalEffect": 1},
  {"id": 40, "question": "I regularly reflect on past negative experiences and their impact on my current life and perspectives.", "group": "N", "negativeFraming": false, "globalEffect": 1},
  {"id": 41, "question": "I find it easy to embrace all my flaws and insecurities, understanding that acknowledgment is the first step towards transformation.", "group": "N", "negativeFraming": false, "globalEffect": 1}
];
