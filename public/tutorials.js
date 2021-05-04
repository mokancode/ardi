const tutorialsImagesPath = "/images/tutorials";

const tutorials = [
  {
    categoryName: "Navigation Pane",
    tutorials: [
      {
        name: "Navigation bar",
        images: [
          {
            src: `${tutorialsImagesPath}/navigation-pane/navigation-pane.jpg`,
            coordinates: { x: 0.5, y: 0.5 },
            instruction:
              "This is the navigation pane. All your notes, topics, emails, contacts, boards, can be created and/or accessed from here.",
          },
          {
            src: `${tutorialsImagesPath}/navigation-pane/navigation-pane.jpg`,
            coordinates: { x: 0.025, y: 0.11 },
            pointerSize: "m",
            instruction: "Click here to reveal the navigation bar",
          },
          {
            src: `${tutorialsImagesPath}/navigation-pane/navbar-open.jpg`,
            coordinates: { x: 0.05, y: 0.925 },
            pointerSize: "xs",
            instruction: "If you would like to keep the navigation bar open, click on the lock icon",
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
            src: `${tutorialsImagesPath}/boards/create-a-board/boards-closed-navbar.jpg`,
            coordinates: { x: 0.04, y: 0.14 },
            pointerSize: "m",
            instruction: "Click here to open the sidebar",
          },
          {
            src: `${tutorialsImagesPath}/boards/create-a-board/boards-open-navbar.jpg`,
            coordinates: { x: 0.04, y: 0.14 },
            pointerSize: "m",
            instruction: "Click on Boards",
          },
          {
            src: `${tutorialsImagesPath}/boards/create-a-board/boards-open-navbar.jpg`,
            coordinates: { x: 0.14, y: 0.09 },
            pointerSize: "s",
            instruction: "Click here to create a board",
          },
          {
            src: `${tutorialsImagesPath}/boards/create-a-board/board-created.jpg`,
            coordinates: { x: 0.4, y: 0.5 },
            instruction: "This is your new board",
          },
        ],
      },
      {
        name: "Drag & Drop",
        images: [
          {
            src: `${tutorialsImagesPath}/boards/drag-and-drop/select-item.jpg`,
            coordinates: { x: 0.83, y: 0.38 },
            instruction: "Drag and drop any item (topic, email, etc.) from the navigation pane onto a board",
          },
          {
            src: `${tutorialsImagesPath}/boards/drag-and-drop/choose-associations-alignment.jpg`,
            coordinates: { x: 0.42, y: 0.25 },
            instruction:
              "If your item is a nested one (i.e. contains subtopics), choose your preferred alignment of parent & children nodes on the board, and then press OK",
          },
          {
            src: `${tutorialsImagesPath}/boards/drag-and-drop/nested-topic-on-board.jpg`,
            coordinates: { x: 0.08, y: 0.48 },
            instruction: "Your topic is now visualized on the board along with its subtopics",
            instructionSide: "right",
          },
        ],
      },
      {
        name: "Associatons",
        images: [
          {
            src: `${tutorialsImagesPath}/boards/associations/select-topic.jpg`,
            coordinates: { x: 0.39, y: 0.5 },
            instruction: "In Ardi you can draw visual associations between items on a board. First select an item",
          },
          {
            src: `${tutorialsImagesPath}/boards/associations/select-topic.jpg`,
            coordinates: { x: 0.36, y: 0.06 },
            pointerSize: "s",
            instruction: "Click on the arrow button",
          },
          {
            src: `${tutorialsImagesPath}/boards/associations/add-link.jpg`,
            coordinates: { x: 0.08, y: 0.48 },
            instruction: 'Now click on the item you wish to associate the original item with, and then click on "Add link"',
            instructionSide: "right",
          },
          {
            src: `${tutorialsImagesPath}/boards/associations/association-created.jpg`,
            coordinates: { x: 0.24, y: 0.52 },
            instruction: "The newly created arrow represents an association between the items",
            instructionSide: "right",
          },
        ],
      },
      {
        name: "Annotations",
        images: [
          {
            src: `${tutorialsImagesPath}/boards/annotations/select-item.jpg`,
            coordinates: { x: 0.39, y: 0.54 },
            instruction: "Items can be given annotations. Click on an item to select it",
          },
          {
            src: `${tutorialsImagesPath}/boards/annotations/select-item.jpg`,
            coordinates: { x: 0.02, y: 0.05 },
            pointerSize: "s",
            instruction: "Click the annotation icon",
            instructionSide: "right",
          },
          {
            src: `${tutorialsImagesPath}/boards/annotations/type-annotation.jpg`,
            coordinates: { x: 0.39, y: 0.54 },
            instruction:
              "Type your annotation in the popped up window, and then press Enter or click outside of the window once you're done",
          },
          {
            src: `${tutorialsImagesPath}/boards/annotations/annotation-created.jpg`,
            coordinates: { x: 0.4, y: 0.55 },
            // pointerSize: "m",
            instruction: "Your new annotation will be shown over its parent item",
          },
        ],
      },
      {
        name: "Changing shapes",
        images: [
          {
            src: `${tutorialsImagesPath}/boards/changing-shapes/select-item.jpg`,
            coordinates: { x: 0.39, y: 0.54 },
            instruction: "Items can be assigned different shapes. Click on an item to select it",
          },
          {
            src: `${tutorialsImagesPath}/boards/changing-shapes/select-item.jpg`,
            coordinates: { x: 0.385, y: 0.06 },
            pointerSize: "s",
            instruction: "Click on the triangle shaped icon",
          },
          {
            src: `${tutorialsImagesPath}/boards/changing-shapes/select-shape.jpg`,
            coordinates: { x: 0.41, y: 0.18 },
            instruction: "Select your desired shape",
          },
          {
            src: `${tutorialsImagesPath}/boards/changing-shapes/shape-changed.jpg`,
            coordinates: { x: 0.395, y: 0.64 },
            pointerSize: "s",
            instruction: "Your item's new look",
          },
        ],
      },
    ],
  },
  {
    categoryName: "Topics",
    tutorials: [
      {
        name: "Creating topics",
        images: [
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/topics-tab.jpg`,
            coordinates: { x: 0.06, y: 0.25 },
            pointerSize: "m",
            instruction: "Click here to open the topics pane",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/topics-tab.jpg`,
            coordinates: { x: 0.05, y: 0.97 },
            pointerSize: "s",
            instruction: "Click here create a new topic",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/give-topic-title.jpg`,
            coordinates: { x: 0.26, y: 0.15 },
            instruction: "Give your topic a title in the input box and press Enter once you're done",
          },
        ],
      },
      {
        name: "Creating subtopics",
        images: [
          {
            src: `${tutorialsImagesPath}/sortbox/subtopic/sortbox-subtopic.jpg`,
            coordinates: { x: 0.24, y: 0.2 },
            instruction:
              "Drag and drop a topic into the center of another topic to insert it as a subtopic (note that the black line that appears aligns with the center of the parent topic)",
          },
          {
            src: `${tutorialsImagesPath}/sortbox/subtopic/sortbox-now-a-subtopic.jpg`,
            coordinates: { x: 0.28, y: 0.2 },
            instruction: "You now have a nested topic",
          },
        ],
      },
      {
        name: "Note editor",
        images: [
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/topics-tab.jpg`,
            coordinates: { x: 0.25, y: 0.14 },
            instruction: "Double click on any topic to open the note editor pane",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/note-editor.jpg`,
            coordinates: { x: 0.4, y: 0.5 },
            instruction: "This is the note editor pane, where the contents of your topics can be edited.",
            instructionSide: "right",
            brighterPointer: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/note-editor.jpg`,
            coordinates: { x: 0.11, y: 0.09 },
            instruction:
              "This is the text styling toolbar. First select the text you wish to style, then click on the desired effect in the toolbar",
            instructionSide: "right",
            brighterPointer: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/note-editor.jpg`,
            coordinates: { x: 0.605, y: 0.08 },
            instruction: "You can undo or redo actions, insert tables, and search for keywords",
            brighterPointer: true,
            instructionSide: "right",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/extra-features.jpg`,
            coordinates: { x: 0.73, y: 0.025 },
            pointerSize: "xs",
            instruction: "Click on this button to reveal more features",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/extra-features.jpg`,
            coordinates: { x: 0.74, y: 0.06 },
            pointerSize: "xs",
            instruction: "Click on the annotation icon to add an annotation to this topic",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/extra-features.jpg`,
            coordinates: { x: 0.79, y: 0.06 },
            pointerSize: "m",
            instruction: "Click on the colored boxes to assign a color to your topic.",
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/extra-features.jpg`,
            coordinates: { x: 0.78, y: 0.1 },
            pointerSize: "m",
            instruction: 'Click anywhere on the "Completed" bar to set the progression status of this particular topic/task',
          },
        ],
      },
      {
        name: "Sub-tabs",
        images: [
          {
            src: `${tutorialsImagesPath}/topics/sub-tabs/sortbox.jpg`,
            coordinates: { x: 0.93, y: 0.105 },
            pointerSize: "m",
            instruction:
              "The Sortbox is for all your yet unorganized notes. Jot them down here, and later move them to separate organized folders",
            instructionSide: "right",
          },
          {
            src: `${tutorialsImagesPath}/topics/sub-tabs/reference.jpg`,
            coordinates: { x: 0.93, y: 0.205 },
            pointerSize: "m",
            instruction:
              "The Reference sub-tab is a place for all your non-actionable topics that don't have strategic importance or urgency",
            instructionSide: "right",
          },
          {
            src: `${tutorialsImagesPath}/topics/sub-tabs/maybe-someday.jpg`,
            coordinates: { x: 0.93, y: 0.35 },
            instruction: "The Maybe/Someday sub-tab is dedicated to tasks planned for the future",
            instructionSide: "right",
          },
        ],
      },
    ],
  },
  { categoryName: "Emails" },
  {
    categoryName: "Sort",
    tutorials: [
      {
        name: "Sub-tabs",
        images: [
          {
            src: `${tutorialsImagesPath}/sort/sort-tab.jpg`,
            coordinates: { x: 0.06, y: 0.46 },
            pointerSize: "s",
            instruction: "Click on the Sort tab to open the Sort pane",
          },
          {
            src: `${tutorialsImagesPath}/sort/sort-tab.jpg`,
            coordinates: { x: 0.95, y: 0.14 },
            instruction: "Note the sub-tabs on the right side",
          },
          {
            src: `${tutorialsImagesPath}/sort/sort-tab.jpg`,
            coordinates: { x: 0.95, y: 0.1 },
            pointerSize: "m",
            instruction:
              "The Search sub-tab contains a filtered list of all the topics that contain the keyword currently searched for",
          },
          {
            src: `${tutorialsImagesPath}/sort/sort-tab.jpg`,
            coordinates: { x: 0.16, y: 0.97 },
            pointerSize: "s",
            instruction: "To search for a keyword, click here",
          },
          {
            src: `${tutorialsImagesPath}/sort/search-window.png`,
            coordinates: { x: 0.16, y: 0.69 },
            instruction: "Enter the keyword(s) in the input box. The boxes above indicate the number of matches found.",
          },
          {
            src: `${tutorialsImagesPath}/sort/task-ring.jpg`,
            coordinates: { x: 0.95, y: 0.2 },
            pointerSize: "m",
            instruction: "The task-ring sub-tab contains all topics to which a progression/completion value was assigned.",
          },
          {
            src: `${tutorialsImagesPath}/sort/task-ring.jpg`,
            coordinates: { x: 0.8, y: 0.2 },
            pointerSize: "m",
            instruction: "Right click on an item to and press here to mark it as done.",
          },
          {
            src: `${tutorialsImagesPath}/sort/notes.jpg`,
            coordinates: { x: 0.95, y: 0.29 },
            pointerSize: "m",
            instruction: "The notes sub-tab contains all your parent topics along with a snippet of their content",
          },
          {
            src: `${tutorialsImagesPath}/sort/annotations.jpg`,
            coordinates: { x: 0.95, y: 0.39 },
            pointerSize: "m",
            instruction: "The annotations sub-tab contains all annotated topics",
          },
          {
            src: `${tutorialsImagesPath}/sort/colors.jpg`,
            coordinates: { x: 0.95, y: 0.48 },
            pointerSize: "m",
            instruction: "The colors sub-tab contains all topics that were marked with a color",
          },
        ],
      },
    ],
  },
  { categoryName: "Contacts", tutorials: [{ name: "How to " }] },
];

export default tutorials;
