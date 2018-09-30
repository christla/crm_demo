# Customer view - demo
 Working demo at : http://ix.pixel88.co.nz

The whole app is built with Vue.js and Bootstrap and SCSS, using browser's localstorage. (Production version would obviously need to use server side storage, and the app would use API to retrieve and save the data, as well as filter, pagination etc). You can just download, unzip and run index.html, or serve with any web server or see it working at http://ix.pixel88.co.nz

Features:
* Search for customer title
* Sort by id, title, status, date (toggling not implemented)
* See details for each customer
* change customer's status
* Edit, add new or delete notes for each customer
* basic responsiveness
* keyboard up/down for browsing customers

**App.js** is the main app code.
**Prepopulate.js** is prepopulating localstorage with some initial data.
**css/styles.scss** loads bootstrap and some overriden variables, and some custom styles.

(Creating new customer is not implemented - as per spec, although easy to implement.
There is no build, linting, module bundling, babel or tests, which I would use for production.)

Content is from Star Trek ipsum ;)

