```
<!DOCTYPE html>
<html>
  <head>
   <title>Survey Form</title>
    <link rel="stylesheet" href="styles.css">
  </head>
<body>
  <h1 id="title">Survey Form</h1>
  <p id="description">Thank you for taking the time to help us improve the platform.</p>
  <form id="survey-form">

    <label id="name-label">Name</label>
    <input id="name" type="text" placeholder="Enter your name" required>

    <label id="email-label">Email</label>
    <input id="email" type="email" placeholder="Enter your email" required>

    <label id="number-label">Age</label>
    <input id="number" type="number" placeholder="Age" min="1" max="99">

    <label for="dropdown">Which option best describes your current role?</label>
    <select id="dropdown">
      <option>Select current role</option>
      <option>Student</option>
      <option>Full Time Job</option>
      <option>Full Time Learner</option>
      <option>Prefer not to say</option>
      <option>Other</option>
    </select>
  
    <label>Would you recommend freeCodeCamp to a friend?</label>
    <input type="radio" name="reco" value="Definitely"> Definitely
    <input type="radio" name="reco" value="Maybe"> Maybe
    <input type="radio" name="reco" value="Not sure"> Not sure
    
    <input type="checkbox" name="improve" value="Front-end"> Front-end
    <input type="checkbox" name="improve" value="Back-end"> Back-end
    <input type="checkbox" name="improve" value="Other"> Other
    <label>What would you like to see improved? (Check all that apply)</label>
    <textarea name="comments" rows="5" cols="50"></textarea>
    <input id="submit" type="submit" value="Submit">
</form>
</body>
</html>
```








```
body {
  font-family: sans-serif;
}

h1 {
  text-align: center;
}

p {
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
}

label {
  display: block;
}

select {
  width: 200px;
}

button {
  margin-top: 10px;
}
```
