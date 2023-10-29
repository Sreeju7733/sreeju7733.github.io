
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about", "Who am i and what do i do.");
  createCode("help", "See all commands.");
  createCode("social", "All my social networks.");
  createCode("contact", "Contact me.");
  createCode("projects", "Explore My Project Universe.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/sreeju7733";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;

  if(value === "all" || value === "help"){
    trueValue(value);
    
	createCode("about", "Who am i and what do i do.");
	createCode("help", "See all commands.");
	createCode("social", "All my social networks.");
	createCode("contact", "Contact me");
	createCode("projects", "Explore My Project Universe");
    createCode("clear", "Clean the terminal.");
    createCode("re", "Reload the terminal.");
    
  }
  else if(value === "sreeju" || value === "sreeju s" || value === "sreeju7733"){
	  createText("Is there something you need?");
	  createCode("help", "See all commands.");
  }
  else if(value === "reload" || value === "refresh" || value === "re"){
	  createText("Reloading...");
	  await delay(2000);
	  location.reload();
  }
  else if(value === "bye"){
	  createText("Bye see you later ;)");
  }
  else if (value === "hi") {
	  createText("Hi! ;)");
	  createCode("help", "See all commands.");
  }
  else if(value === "projects" || value === "project"){
    trueValue(value);
	createText('Exploring My Project Universe')
	await delay(1500);
    createText(`
		<h2 id="python" style="color: #333; background-color: #f5f5f5; padding: 5px;">Python</h2>
		<ol>
		<li>
			<p><strong>GUI Calculator</strong>:</p>
			<ul>
			<li>A simple Python GUI calculator using Tkinter for basic arithmetic operations.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/gui-calculator.py" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			</ul>
		</li>
		<li>
			<p><strong>URL Shortener</strong>:</p>
			<ul>
			<li>A URL shortening Python script that converts long URLs into short links for easy sharing.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/url-shortener.py" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			</ul>
		</li>
		<li>
			<p><strong>Weather App</strong>:</p>
			<ul>
			<li>Python application that fetches and displays real-time weather data for a specified city using OpenWeatherMap API.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/weather-app.py" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			</ul>
		</li>
		</ol>
		<h2 id="php" style="color: #333; background-color: #f5f5f5; padding: 5px;">PHP</h2>
		<ol>
		<li>
			<strong>Simple Event Calendar Web Application</strong>:
			<ul>
			<li>This web application allows users to add and manage upcoming events. It uses HTML, PHP, and Bootstrap for a user-friendly interface. Users can input event details, add events, and delete them as needed.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/event-calendar.php" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			</ul>
		</li>
		</ol>
		<h2 id="html-css-and-javascript" style="color: #333; background-color: #f5f5f5; padding: 5px;">HTML, CSS, and Javascript</h2>
		<ol>
		<li>
			<p><strong>Simple Online Python Compiler</strong>:</p>
			<ul>
			<li>This web application is designed to allow users to write and execute Python code online. It uses HTML, CSS, and Javascript to provide a user-friendly interface. Users can input Python code, run it, and see the output.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/python-online-compiler.html" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			<li><a href="https://sreeju7733.github.io/Python-Compiler/" style="color: #0070cc; text-decoration: none;">Demo</a></li>
			</ul>
		</li>
		<li>
			<p><strong>Github Profile Search</strong>:</p>
			<ul>
			<li>This web application is focused on searching for GitHub profiles and retrieving information about users. It utilizes HTML, CSS, and Javascript to create an intuitive interface for users to input a username, search for a GitHub profile, and view the results.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/github-profile-search.html" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			</ul>
		</li>
		<li>
			<p><strong>Fancy Font Generator</strong>:</p>
			<ul>
			<li>This web application is a tool for generating text in various fancy or decorative fonts. It employs HTML, CSS, and Javascript to create an interface where users can enter plain text, select a fancy font style, and generate the stylized text output.</li>
			<li><a href="https://github.com/Sreeju7733/projects/blob/main/fancy-font-generator.html" style="color: #0070cc; text-decoration: none;">View Code on GitHub</a></li>
			</ul>
		</li>
		</ol>
	`)
    createText("<a href='https://github.com/Sreeju7733/projects#readme' target='_blank'><i class='fab fa-github white'></i> github.com/sreeju7733</a>")
	new_line();
  }
  else if(value === "about"){
    trueValue(value);
    createText("<img src='assets/profile.png' style='width: 50%; margin-left: 25%;'> <br><br> <span style='color: #37df00;'> I'm Sreeju ;) </span> <br> A web developer and graphic designer with over four years of experience. I specialize in Photoshop and Figma for captivating design, along with Python, PHP, JavaScript, HTML, CSS, and SQL for developing interactive web applications. My work seamlessly blends creative design with technical precision, resulting in user-friendly, innovative solutions. Feel free to contact.")
  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/sreeju7733' target='_blank'><i class='fab fa-github white'></i> github.com/sreeju7733</a>")
    createText("<a href='https://www.dev.to/sreeju/' target='_blank'><i class='fab fa-dev white'></i> dev.to/sreeju</a>")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("<a href='mailto:sreeju.textme@outlook.com' target='_blank'><i class='fas fa-envelope white'></i> mail: sreeju.textme@outlook.com</a>")
  }
  else if(value === "mail"){
    trueValue(value);
    createText("<a href='mailto:sreeju.textme@outlook.com' target='_blank'><i class='fas fa-envelope white'></i> mail: sreeju.textme@outlook.com</a>")
	window.open("mailto:sreeju.textme@outlook.com", "_blank");
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();