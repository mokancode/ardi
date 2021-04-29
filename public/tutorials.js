const tutorials = [
  {
    categoryName: "Sortbox",
    tutorials: [
      {
        name: "Create a subtopic",
        images: [
          {
            src: "/images/tutorials/sortbox/subtopic/sortbox-subtopic.jpg",
            coordinates: { x: 0.2, y: 0.2 },
            instruction:
              "Drag and drop a topic into the center of another topic to insert it as a subtopic (make sure the black line aligns with the center of the parent topic)",
          },
          {
            src: "/images/tutorials/sortbox/subtopic/sortbox-now-a-subtopic.jpg",
            coordinates: { x: 0.2, y: 0.2 },
            instruction: "You now have a nested topic",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Boards",
    tutorials: [
      {
        name: "What are Boards?",
        verbalInstruction: [
          "Boards are a 2D canvas where you can organize your notes and emails and draw connections between them",
        ],
      },
      {
        name: "Create a board",
        images: [
          {
            src: "/images/tutorials/boards/create-a-board/boards-closed-navbar.jpg",
            coordinates: { x: 0.04, y: 0.14 },
            pointerSize: "m",
            instruction: "Click here to open the sidebar",
          },
          {
            src: "/images/tutorials/boards/create-a-board/boards-open-navbar.jpg",
            coordinates: { x: 0.04, y: 0.14 },
            pointerSize: "m",
            instruction: "Click on Boards",
          },
          {
            src: "/images/tutorials/boards/create-a-board/boards-open-navbar.jpg",
            coordinates: { x: 0.14, y: 0.09 },
            pointerSize: "s",
            instruction: "Click here to create a board",
          },
          {
            src: "/images/tutorials/boards/create-a-board/board-created.jpg",
            coordinates: { x: 0.4, y: 0.5 },
            instruction: "This is your new board",
          },
        ],
      },
      { name: "Drag & Drop" },
      { name: "Associatons" },
      { name: "Annotations" },
    ],
  },
  { categoryName: "Topics", tutorials: [{ name: "How to " }] },
  { categoryName: "Emails" },
  { categoryName: "Sort" },
  { categoryName: "Contacts", tutorials: [{ name: "How to " }] },
];

export default tutorials;