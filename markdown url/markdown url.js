// both long and short form can be used for the bookmarklet, what ever you prefer.

/**
 * Long form for understanding the code but can also be used as a bookmarklet.
 */
javascript:(function() {
  const currentTabTitle = document.title;
  const currentTabUrl = window.location.href;
  const markdownUrl = `[${currentTabTitle}](${currentTabUrl})`;
  navigator.clipboard.writeText(markdownUrl);
})()

/**
 * Short form in case it is more prefered as a bookmarklet.
 */
javascript:(function(){navigator.clipboard.writeText(`[${document.title}](${window.location.href})`)})()
