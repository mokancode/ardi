export default function calculateScrollProgression(
  currentScrollPosition,
  componentOffsetTop,
  offset
) {
  /* 
      @param    {number}        currentScrollPosition   The current scroll position / distance from the top of the document.
      @param    {number}        componentOffsetTop      Distance of the component from the top of the document.
      @param    {number}        offset                  The bottom boundary after which the scroll progression should be at 100%. It is componentOffsetTop + offset
      @param    {number}        finishWithin            The number of pixels throughout which the progression should complete.
      @return {number}  Percentagle decimal between 0.0 and 1.0 representing the progression.
    */

  let finishWithin = 100;

  let progression =
    1 -
    Math.abs(currentScrollPosition - componentOffsetTop + offset) /
      finishWithin;
  if (progression > 1 || currentScrollPosition > componentOffsetTop - offset)
    progression = 1;
  else if (progression < 0) progression = 0;

  return progression;
}
