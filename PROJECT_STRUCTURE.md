# LMS UI Project Structure (HTML/CSS/JS + Bootstrap)

```text
LMS-CGC-UI/
|-- index.html                  (login entry point router)
|-- pages/
|   |-- index.html
|   |-- auth/
|   |   |-- student-login.html
|   |   `-- faculty-login.html
|   |-- student/
|   |   |-- dashboard.html
|   |   |-- courses.html
|   |   |-- schedule.html
|   |   |-- grades.html
|   |   `-- profile.html
|   `-- faculty/
|       |-- dashboard.html
|       |-- classes.html
|       |-- attendance.html
|       |-- gradebook.html
|       `-- profile.html
|-- assets/
|   |-- css/
|   |   |-- main.css
|   |   |-- components.css
|   |   `-- pages/
|   |       |-- auth.css
|   |       |-- student.css
|   |       `-- faculty.css
|   |-- js/
|   |   |-- main.js
|   |   |-- login-router.js
|   |   |-- auth.js
|   |   |-- student.js
|   |   `-- faculty.js
|   `-- img/
|-- student-login.html          (route alias -> pages/auth/student-login.html)
|-- faculty-login.html          (route alias -> pages/auth/faculty-login.html)
`-- student/index.html          (existing)
```

## Notes
- Bootstrap is loaded via CDN in each page.
- Shared styles/scripts stay in `assets/`.
- Role-specific pages are separated for easier maintenance.
- Login routing:
  - `index.html?role=student` -> `pages/auth/student-login.html`
  - `index.html?role=faculty` -> `pages/auth/faculty-login.html`
