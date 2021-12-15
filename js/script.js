console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");



const textAdventure = [
  {
    id: 1,
    description:
      "This is the adventure of Juan, who got lost in the forest when looking for a bird to photograph. Juan needs your help to find his way out. Choose one of the options below",
    options: [
      {
        buttontext: "Head back to where you came from",
        setState: { headback: true },
        nexttext: 2,
      },
      {
        buttontext: "Look up at the sky and head towards the sun",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 2,
    description:
      "great, Juan was able to find his way back, but now he reliazes that its about to rain, what should Juan do now?",
    options: [
      {
        buttontext: "Look for shelter",
        setState: { headback: true },
        nexttext: 3,
      },
      {
        buttontext: "Continue heading back, and risk getting lost again",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 3,
    description:
      "Juan is safe in the shelter. He will wait until it stops raining. What should Juan do",
    options: [
      {
        buttontext: "Leave the cave as soon as it stops raining",
        setState: { headback: true },
      },
      {
        buttontext: "Wait until the sun comes out again and continue walking",
        setState: { daylight: true },
        nexttext: 4,
      },
    ],
  },
  {
    id: 4,
    message: "Thank you for helping Juan!",
  },
];
