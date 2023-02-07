// both long and short form can be used for the bookmarklet, what ever you prefer.

/**
 * Long form for understanding the code but can also be used as a bookmarklet.
 */
javascript:(function() {
	const files = Array.from(document.getElementsByClassName('file'));
	const openFiles = files.filter((file) => file.classList.contains('open'));
	const filesToToggle = openFiles.length > 0 ? openFiles : files;
	filesToToggle.forEach((file) => {
		const action = file.getElementsByClassName('btn-octicon')[0];
		action.click();
	});
})()

/**
 * Short form in case it is more prefered as a bookmarklet.
 */

javascript:(function(){const files=Array.from(document.getElementsByClassName('file'));const openFiles=files.filter((file)=>file.classList.contains('open'));const filesToToggle=openFiles.length>0?openFiles:files;filesToToggle.forEach((file)=>{const action=file.getElementsByClassName('btn-octicon')[0];action.click();});})()
