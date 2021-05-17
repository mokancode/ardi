## This is a web app created for Ardi - The Organizer, A Gmail Client and Notes Manager.

- Development version deployed on [Vercel](https://ardi-mokancode.vercel.app).
- Production version deployed on [https://www.prokarpaty.net](https://www.prokarpaty.net).

Created with [Next.js](https://nextjs.org/).

## Getting Started

First, install all dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.
To change the port, open package.json (inside root folder) and edit:
```javascript
"scripts": {
    "dev": "next dev -p 3002",
}
```

To build the app, run:

```bash
npm run build
```

To export a static build, run the command above and then run:

```bash
npx next export
```

## Adding/Editing Demo Tutorials

open tutorialsData.js (located in the public folder).

The following constant refers to the path to the images folder inside the public folder.
```javascript
const tutorialsImagesPath = "./images/tutorials";
```


The array
```javascript
const tutorialsData = [];
```
is an array of objects where each object represents a category in the tutorial selector drop-down/accordion menu.

Each object contains two properties:

1. **categoryName** (string): represents the name of the category.
2. **tutorials** (array of objects).
Each object in **tutorials** represents a tutorial inside its category, and contains 2 properties:
   * **name** (string): The title of the tutorial.
   * The key (name) of the 2nd property depends on whether you want a tutorial with images, or text only.
       * If you want text only, then name the 2nd property's key **verbalInstruction** (array of strings).
            * Each element represents a sentence / paragraph, separated by a new line.
       * If you want images too, then name the 2nd property's key **images** (array of objects).
Each object in the array of images represents a step in the tutorial. Each object contains the following properties:
* **src** (string): This is the path to the image for this step in the tutorial (required).
    * Example:
    ```javascript
    `${tutorialsImagesPath}/boards/create-a-board/boards-closed-navbar.jpg`
    ```
    tutorialsImagesPath comes from the const at the top of tutorialsData.js.

* **coordinates** (object): An object with properties x and y. Represents the position of the pointer in relation to the dimensions of the image (required).
    * x and y are decimal numbers ranging from 0.000 to 1.
* **pointerSize** (string): Can be either “xs”, “s”, or “m”. Shrinks the size of the pointer to focus on smaller elements in the photo (optional)
* **instruction** (string): The text instruction next to the pointer (required).
* **rightSide** (Boolean): If true, the instruction text will be on the right side of the pointer (optional – use this if you believe the pointer instruction is too close to the left perimeter of the tutorial viewer. I have implemented mobile responsiveness, the tutorial viewer will adjust the side automatically and even reverse this property if necessary).
* **brighterPointer** (Boolean): If true, the shadow around the pointer circle will be brighter (optional – use this if the pointer is over a white background. It reduces contrast and makes it easier on the eyes).

## Editing Download Page Data
Open downloadData.json (located in the public folder)

There are 3 objects in this file: **windows**, **mac**, and **changelog**.
The properties of **windows** and **mac** are self explanatory.
Note: **fileName** and **fileSize** are optional, the rest are required.

**changelog** is an array of strings. Each element represents a new bullet-point in the list.

## Adding Videos to the Videos Section in the Demo Page
Open VideosContainer.js (located in components/VideosContainerp).

The array
```javascript
const videos = []
```
contains embedded links of YouTube videos.
Create a new object as follows:
```javascript
{
    url: `https://www.youtube-nocookie.com/embed/videoIdHere`
    title: "Video's title here"
}
```
* Replace **videoIdHere** with the ID of your video. Example: The bold bold part is the ID: https://www.youtube-nocookie.com/embed/**yoCzc_9ca58**).
* Provide an appropriate title.