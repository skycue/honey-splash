# Honey Splash
[Honey Splash](https://honey-splash.herokuapp.com) is a single-page web application designed to help users organize and manage their tasks.

![Image of Splash Page](splash-page.png)

## Technologies
* React
* Redux
* Ruby on Rails
* JavaScript
* PostgreSQL
* HTML
* CSS
* Webpack

## Features
### Lists
Users can create lists, using which they can organize their tasks.

![Screenshot of lsit form modal](/public/list-modal.png)

### Task Selection and Toggling Edit Form
One of the most subtle yet important details of this application is how selecting tasks and toggling the task edit form are related to each other.  The task edit form is toggled by clicking on the task title whereas tasks are selected and deselected by clicking on the checkbox. When a task edit form is opened, the corresponding task is concurrently selected.  If users do not want this task to be selected, they can simply deselect it with a click on the checkbox, and the task edit form will not go away.  Even with the task edit form open, users can proceed to continue selecting other tasks.  When the title of a a different task is clicked, the previously opened task edit form will be closed and its corresponding task will be deselected simultaneously while the new task edit form is opened.

![Screenshot of task toggling](/public/toggle-task.png)
