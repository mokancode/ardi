const tutorialsImagesPath = "/images/tutorials";
// const tutorialsImagesPath = "./images";

const tutorials = [
  {
    categoryName: "Navigation",
    tutorials: [
      {
        name: "Selector",
        images: [
          {
            src: `${tutorialsImagesPath}/navigation-pane/navigation-pane.jpg`,
            coordinates: { x: 0.5, y: 0.5 },
            instruction:
              "This is the selector. All your notes, topics, emails, contacts, and boards can be created and/or accessed from here.",
          },
          {
            src: `${tutorialsImagesPath}/navigation-pane/navigation-pane.jpg`,
            coordinates: { x: 0.0255, y: 0.11 },
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
            src: `${tutorialsImagesPath}/topics/subtopic/sortbox-subtopic.jpg`,
            coordinates: { x: 0.24, y: 0.2 },
            instruction:
              "Drag and drop a topic into the center of another topic to insert it as a subtopic (note that the black line that appears aligns with the center of the parent topic)",
          },
          {
            src: `${tutorialsImagesPath}/topics/subtopic/sortbox-now-a-subtopic.jpg`,
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
            rightSide: true,
            brighterPointer: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/note-editor.jpg`,
            coordinates: { x: 0.11, y: 0.09 },
            instruction:
              "This is the text styling toolbar. First select the text you wish to style, then click on the desired effect in the toolbar",
            rightSide: true,
            brighterPointer: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/topics-pane/note-editor.jpg`,
            coordinates: { x: 0.605, y: 0.08 },
            instruction: "You can undo or redo actions, insert tables, and search for keywords",
            brighterPointer: true,
            rightSide: true,
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
        name: "Folders",
        images: [
          {
            src: `${tutorialsImagesPath}/topics/folders/sortbox.jpg`,
            coordinates: { x: 0.93, y: 0.14 },
            instruction: "Note the tabs on the right, this is the locus bar",
          },
          {
            src: `${tutorialsImagesPath}/topics/folders/sortbox.jpg`,
            coordinates: { x: 0.93, y: 0.105 },
            pointerSize: "m",
            instruction:
              "The Sortbox is for all your yet unorganized notes. Jot them down here, and later move them to separate organized folders",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/folders/reference.jpg`,
            coordinates: { x: 0.93, y: 0.205 },
            pointerSize: "m",
            instruction:
              "The Reference sub-tab is a place for all your non-actionable topics that don't have strategic importance or urgency",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/folders/maybe-someday.jpg`,
            coordinates: { x: 0.93, y: 0.35 },
            instruction: "The Maybe/Someday sub-tab is dedicated to tasks planned for the future",
            rightSide: true,
          },
        ],
      },
      {
        name: "Adding folders",
        images: [
          {
            src: `${tutorialsImagesPath}/topics/adding-folders/menu-bar-folders.jpg`,
            coordinates: { x: 0.245, y: 0.06 },
            pointerSize: "m",
            instruction: 'Click on "View" from the menu bar, then click on "Folders"',
          },
          {
            src: `${tutorialsImagesPath}/topics/adding-folders/select-folders.png`,
            coordinates: { x: 0.06, y: 0.77 },
            pointerSize: "s",
            instruction: 'Click on "New"',
          },
          {
            src: `${tutorialsImagesPath}/topics/adding-folders/create-new-folder.png`,
            coordinates: { x: 0.22, y: 0.52 },
            rightSide: true,
            instruction:
              'Check the box if you wish the folder to show on the locus bar. Name your new folder and mark it with a color if you wish, then click on "OK"',
          },
          {
            src: `${tutorialsImagesPath}/topics/adding-folders/folder-created.png`,
            coordinates: { x: 0.975, y: 0.49 },
            pointerSize: "m",
            instruction: "Your newly created folder",
          },
        ],
      },
      {
        name: "Arranging tabs",
        images: [
          {
            src: `${tutorialsImagesPath}/topics/arranging-tabs/open-tab.jpg`,
            coordinates: { x: 0.745, y: 0.025 },
            pointerSize: "xs",
            instruction: 'Open a topic and click on the "more" icon',
          },
          {
            src: `${tutorialsImagesPath}/topics/arranging-tabs/pin.jpg`,
            coordinates: { x: 0.84, y: 0.19 },
            pointerSize: "m",
            instruction: 'Click on "Pin Tab"',
          },
          {
            src: `${tutorialsImagesPath}/topics/arranging-tabs/pinned-tabs.jpg`,
            coordinates: { x: 0.39, y: 0.52 },
            instruction: "Open a few more tabs and pin them as well",
            brighterPointer: true,
          },
          {
            src: `${tutorialsImagesPath}/topics/arranging-tabs/pinned-tabs.jpg`,
            coordinates: { x: 0.76, y: 0.02 },
            pointerSize: "xs",
            instruction: "Click on the box icon",
          },
          {
            src: `${tutorialsImagesPath}/topics/arranging-tabs/arrange-tabs.jpg`,
            coordinates: { x: 0.81, y: 0.1 },
            instruction: "The current arrangement is highlighted in grey. Select the arrangement of your choice",
          },
          {
            src: `${tutorialsImagesPath}/topics/arranging-tabs/new-arrangement.jpg`,
            coordinates: { x: 0.39, y: 0.37 },
            instruction: "The tabs have been rearranged",
            brighterPointer: true,
          },
        ],
      },
    ],
  },
  {
    categoryName: "Emails",
    tutorials: [
      {
        name: "Signing in",
        images: [
          {
            src: `${tutorialsImagesPath}/emails/signing-in/sign-in.jpg`,
            coordinates: { x: 0.055, y: 0.358 },
            pointerSize: "m",
            instruction: "Click on the Emails tab",
          },
          {
            src: `${tutorialsImagesPath}/emails/signing-in/sign-in.jpg`,
            coordinates: { x: 0.24, y: 0.09 },
            instruction: "Click here to sign in",
          },
          {
            src: `${tutorialsImagesPath}/emails/signing-in/select-email.jpg`,
            coordinates: { x: 0.28, y: 0.86 },
            rightSide: true,
            instruction: "Select the email account you would like to connect with Ardi",
            brighterPointer: "true",
          },
          {
            src: `${tutorialsImagesPath}/emails/signing-in/allow.jpg`,
            coordinates: { x: 0.78, y: 0.82 },
            instruction: "Follow Gmail instructions",
            brighterPointer: "true",
          },
          {
            src: `${tutorialsImagesPath}/emails/signing-in/copy-auth-code.jpg`,
            coordinates: { x: 0.25, y: 0.39 },
            brighterPointer: "true",
            rightSide: true,
            instruction: "Once you've granted Ardi access to your Gmail acount, copy the authorization code provided",
          },
          {
            src: `${tutorialsImagesPath}/emails/signing-in/paste-auth-code.png`,
            coordinates: { x: 0.14, y: 0.62 },
            instruction: "Return to Ardi and paste the authorization code into the input box, then click on OK",
            brighterPointer: "true",
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/emails/signing-in/emails.jpg`,
            coordinates: { x: 0.79, y: 0.36 },
            instruction: "Your emails are now accessible through the selector",
            brighterPointer: "true",
          },
        ],
      },
      {
        name: "Adding accounts",
        images: [
          {
            src: `${tutorialsImagesPath}/emails/adding-accounts/email-selector.jpg`,
            coordinates: { x: 0.94, y: 0.08 },
            pointerSize: "s",
            instruction: "To connect more accounts, click on the icon here",
          },
          {
            src: `${tutorialsImagesPath}/emails/adding-accounts/add-account.png`,
            coordinates: { x: 0.07, y: 0.79 },
            pointerSize: "m",
            rightSide: true,
            instruction: 'Click on "Add" and repeat the previous tutorial',
          },
        ],
      },
      {
        name: "Composing mails",
        images: [
          {
            src: `${tutorialsImagesPath}/emails/adding-accounts/email-selector.jpg`,
            coordinates: { x: 0.1, y: 0.97 },
            pointerSize: "m",
            instruction: 'Click on "Compose"',
          },
          {
            src: `${tutorialsImagesPath}/emails/composing-mails/select-recipients.png`,
            coordinates: { x: 0.07, y: 0.24 },
            rightSide: true,
            instruction: "Use the search bar to find your contacts by name or email",
          },
          {
            src: `${tutorialsImagesPath}/emails/composing-mails/select-recipients.png`,
            coordinates: { x: 0.2, y: 0.32 },
            rightSide: true,
            brighterPointer: true,
            instruction: "Select a recipient(s) from your contacts list (On how to add contacts, refer to the Contacts section)",
          },
          {
            src: `${tutorialsImagesPath}/emails/composing-mails/recipient-added.png`,
            coordinates: { x: 0.1, y: 0.82 },
            rightSide: true,
            instruction:
              'You may either double-click on a contact or select it and then click on "To" or "cc" (carbon copy). Click on "OK" when done',
          },
          {
            src: `${tutorialsImagesPath}/emails/composing-mails/email-editor.jpg`,
            coordinates: { x: 0.38, y: 0.36 },
            rightSide: true,
            brighterPointer: true,
            instruction: "This is the email editor. Enter the subject line at the top, and the content of your email here.",
          },
          {
            src: `${tutorialsImagesPath}/emails/composing-mails/email-editor.jpg`,
            coordinates: { x: 0.748, y: 0.1 },
            pointerSize: "m",
            brighterPointer: true,
            instruction: 'Click on "Attach" if you wish to attach files. Click on "Send" when your email is ready to be sent',
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
            coordinates: { x: 0.05, y: 0.145 },
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
            instruction: "Drag and drop any item (topic, email, etc.) from the selector onto a board",
          },
          {
            src: `${tutorialsImagesPath}/boards/drag-and-drop/choose-associations-alignment.jpg`,
            coordinates: { x: 0.42, y: 0.25 },
            instruction:
              "If your item is a nested one (i.e. contains subtopics), choose your preferred alignment of parent & children nodes on the board, and then click on OK",
          },
          {
            src: `${tutorialsImagesPath}/boards/drag-and-drop/nested-topic-on-board.jpg`,
            coordinates: { x: 0.08, y: 0.48 },
            instruction: "Your topic is now visualized on the board along with its subtopics",
            rightSide: true,
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
            rightSide: true,
          },
          {
            src: `${tutorialsImagesPath}/boards/associations/association-created.jpg`,
            coordinates: { x: 0.24, y: 0.52 },
            instruction: "The newly created arrow represents an association between the items",
            rightSide: true,
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
            rightSide: true,
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
            coordinates: { x: 0.95, y: 0.1 },
            pointerSize: "m",
            instruction:
              "The Search tab contains a filtered list of all the topics that contain the keyword currently searched for",
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
            coordinates: { x: 0.18, y: 0.14 },
            pointerSize: "m",
            instruction: 'Click on "Done" to move a topic out of the task ring.',
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
  {
    categoryName: "Contacts",
    tutorials: [
      {
        name: "Adding contacts",
        images: [
          {
            src: `${tutorialsImagesPath}/contacts/adding-contacts/new-contact.jpg`,
            coordinates: { x: 0.05, y: 0.97 },
            pointerSize: "xs",
            instruction: "Click on New to create a new contact",
          },
          {
            src: `${tutorialsImagesPath}/contacts/adding-contacts/contact.jpg`,
            coordinates: { x: 0.22, y: 0.13 },
            instruction: "Click inside the Name column on the newly created",
          },
          {
            src: `${tutorialsImagesPath}/contacts/adding-contacts/enter-name.jpg`,
            coordinates: { x: 0.21, y: 0.15 },
            instruction: "Enter the the name for your contact, and do the same for the email",
          },
          {
            src: `${tutorialsImagesPath}/contacts/adding-contacts/contact-created.jpg`,
            coordinates: { x: 0.12, y: 0.97 },
            pointerSize: "xs",
            instruction: "Your contact is ready for use. To send an email, select the contact and then click here",
            rightSide: true,
          },
        ],
      },
    ],
  },
];

export default tutorials;
