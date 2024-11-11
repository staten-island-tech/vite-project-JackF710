const songs = [
    {
      name: "St. Chroma",
      album: "Chromakopia",
      features: "Daniel Caesar",
      length: "3:17",
    },
    {
      name: "Rah Tah Tah",
      album: "Chromakopia",
      features: "None",
      length: "2:45",
    },
    {
      name: "Noid",
      album: "Chromakopia",
      features: "None",
      length: "4:44",
    },
    {
      name: "Darling, I",
      album: "Chromakopia",
      features: "Teezo Touchdown",
      length: "4:13",
    },
    {
      name: "Hey Jane",
      album: "Chromakopia",
      features: "None",
      length: "4:00",
    },  
    {
      name: "I Killed You",
      album: "Chromakopia",
      features: "None",
      length: "2:48",
    },
    {
      name: "Judge Judy",
      album: "Chromakopia",
      features: "None",
      length: "4:29",
    },
    {
      name: "Sticky",
      album: "Chromakopia",
      features: "GloRilla, Sexyy Red, Lil Wayne",
      length: "4:15",
    },
    {
      name: "Take Your Mask Off",
      album: "Chromakopia",
      features: "Daniel Caesar, Latoiya Williams",
      length: "4:13",
    },
    {
      name: "Tomorrow",
      album: "Chromakopia",
      features: "None",
      length: "3:02",
    },
    {
      name: "Thought I Was Dead",
      album: "Chromakopia",
      features: "ScHoolboy Q, Santigold",
      length: "3:27",
    },
    {
      name: "Like Him",
      album: "Chromakopia",
      features: "Lola Young",
      length: "4:38",
    },
    {
      name: "Balloon",
      album: "Chromakopia",
      features: "Doechii",
      length: "2:34",
    },
    {
      name: "I Hope You Find Your Way Home",
      album: "Chromakopia",
      features: "None",
      length: "4:29",
    },
    {
      name: "SIR BAUDELAIRE",
      album: "Call Me if You Get Lost",
      features: "DJ Drama",
      length: "1:06"
    },
     {
      name: "CORSO",
      album: "Call Me if You Get Lost",
      features: "None",
      length: "2:38"
    },
    {
      name: "LEMONHEAD",
      album: "Call Me if You Get Lost",
      features: "42 Dugg",
      length: "2:10"
    },
    {
      name: "WUSYANAME",
      album: "Call Me if You Get Lost",
      features: "Ty Dolla $ign, Lil Wayne",
      length: "3:40"
    },
    {
      name: "LUMBERJACK",
      album: "Call Me if You Get Lost",
      features: "None",
      length: "2:18"
    },
    {
      name: "HOT WIND BLOWS",
      album: "Call Me if You Get Lost",
      features: "Lil Wayne",
      length: "3:02"
    },
    {
      name: "MOMMA TALK",
      album: "Call Me if You Get Lost",
      features: "None",
      length: "1:43"
    },
    {
      name: "RUNITUP",
      album: "Call Me if You Get Lost",
      features: "Teezo Touchdown",
      length: "2:36"
    },
    {
      name: "SWEET / I THOUGHT YOU WANTED TO DANCE",
      album: "Call Me if You Get Lost",
      features: "Brent Faiyaz, Fana Hues",
      length: "6:34"
    },
    {
      name: "MOMMA TALK",
      album: "Call Me if You Get Lost",
      features: "None",
      length: "1:43"
    },
    {
      name: "SHE",
      album: "Call Me if You Get Lost",
      features: "Brent Faiyaz",
      length: "3:03"
    },
    {
      name: "IFHY",
      album: "Call Me if You Get Lost",
      features: "Jaden Smith",
      length: "3:12"
    },
    {
      name: "ANSWER ME PLEASE",
      album: "Call Me if You Get Lost",
      features: "None",
      length: "2:05"
    },
    {
      name: "NEW GRADUATES",
      album: "Call Me if You Get Lost",
      features: "None",
      length: "2:56"
    },
    {
      name: "Foreword",
      album: "Flower Boy",
      features: "None",
      length: "1:03",
    },
    {
      name: "See You Again",
      album: "Flower Boy",
      features: "Kali Uchis",
      length: "3:27",
    },
    {
      name: "Who Dat Boy",
      album: "Flower Boy",
      features: "A$AP Rocky",
      length: "4:19",
    },
    {
      name: "Pothole",
      album: "Flower Boy",
      features: "Jaden Smith",
      length: "2:57",
    },
    {
      name: "Garden Shed",
      album: "Flower Boy",
      features: "Estelle",
      length: "4:03",
    },
    {
      name: "Boredom",
      album: "Flower Boy",
      features: "Rex Orange County & Anna of the North",
      length: "4:06",
    },
    {
      name: "9-1-1 / Mr. Lonely",
      album: "Flower Boy",
      features: "Frank Ocean & Steve Lacy",
      length: "4:54",
    },
    {
      name: "Droppin' Seeds",
      album: "Flower Boy",
      features: "Lil Wayne",
      length: "2:25",
    },
    {
      name: "Talk to Me",
      album: "Flower Boy",
      features: "Solange",
      length: "3:44",
    },
    {
      name: "The Ideal",
      album: "Flower Boy",
      features: "Brent Faiyaz",
      length: "3:50",
    },
    {
      name: "911",
      album: "Flower Boy",
      features: "Frank Ocean",
      length: "4:06",
    },
    {
      name: "Blossom",
      album: "Flower Boy",
      features: "Steve Lacy",
      length: "4:08",
    },
    {
      name: "Flower Boy",
      album: "Flower Boy",
      features: "Jaden Smith",
      length: "5:30",
    },
    {
      name: "IGOR'S THEME",
      album: "Igor",
      features: "None",
      length: "2:30"
    },
    {
      name: "EARFQUAKE",
      album: "Igor",
      features: "Playboi Carti, Charlie Wilson",
      length: "2:59"
    },
    {
      name: "I THINK",
      album: "Igor",
      features: "None",
      length: "3:30"
    },
    {
      name: "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
      album: "Igor",
      features: "None",
      length: "2:43"
    },
    {
      name: "RUNNING OUT OF TIME",
      album: "Igor",
      features: "None",
      length: "2:57"
    },
    {
      name: "NEW MAGIC WAND",
      album: "Igor",
      features: "None",
      length: "3:09"
    },
    {
      name: "A BOY IS A GUN*",
      album: "Igor",
      features: "None",
      length: "3:13"
    },
    {
      name: "PUPPET",
      album: "Igor",
      features: "None",
      length: "3:20"
    },
    {
      name: "WHAT'S GOOD",
      album: "Igor",
      features: "None",
      length: "2:20"
    },
    {
      name: "GONE, GONE / THANK YOU",
      album: "Igor",
      features: "None",
      length: "6:15"
    },
    {
      name: "I DON'T LOVE YOU ANYMORE",
      album: "Igor",
      features: "None",
      length: "2:40"
    },
    {
      name: "ARE WE STILL FRIENDS?",
      album: "Igor",
      features: "None",
      length: "4:25"
    } 
  ];
  
  export { songs };
  