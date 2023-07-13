### Three things I would do to improve the quality of the codebase
1. Add comments/documentation in more places so that others can easily understand what certain functions and statements do.
2. On the UI where the list of links is displayed, right now it only displays the links that were entered in during the current session and if the tab is refreshed, the list is reset (however previous shortened urls still work), so make it that all previously entered urls still show up in the list.
3. If this used an actual database and such, make sure there is the right security in place to not allow random users to modify/delete content in the database.

### Implemented improvements
* Changed the UI, changed colors, added more vertical margins to the button, added a background.
* Added input validation to the front-end form submission and to the back-end api/shorten endpoint, created a new test in server/src/app.spec.ts to reflect this.