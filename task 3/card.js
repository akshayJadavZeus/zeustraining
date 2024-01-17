
// fetch ma j url che ema thi data fetch kr, data ave to ene json object ma convert kr ne e obj ne func ma pass kri de e data pr map func use kri individual obj pr run kr func
// fetching data from json file using fetch function
fetch("./cardData.json")
.then( (response)=>{
    return response.json();
})
.then( (data) =>{
    createCard(data);
})



 const  createCard = (data)=>{
  

    data.map((current_element)=>{
      // alert('card') //this was to check function works or not and yes it does works well

      // want to append child to card_container body just trying it works or not ---
      let card_container = document.querySelector(".card_container");

      let card = document.createElement("div");
      card.className = "card";

      let card_upper_body = document.createElement("div");
      card_upper_body.setAttribute("class", "card_upper_body");

      let course_image = document.createElement("img");
      course_image.setAttribute("src", `${current_element.course_image}`);

      let card_content = document.createElement("div");
      card_content.setAttribute("class", "card_content");

      let first_Line = document.createElement("div");
      first_Line.setAttribute("class", "first_Line");

      let course_title = document.createElement("span");
      course_title.setAttribute("class", "important");
      course_title.innerHTML = `${current_element.course_title}`;
      let favourite_icon = document.createElement("img");
      favourite_icon.setAttribute("src", "icons/favourite.svg");
      favourite_icon.setAttribute("alt", "favourite icon");

      // add title span and fav icon to firstline div
      first_Line.appendChild(course_title);
      first_Line.appendChild(favourite_icon);

      // second line
      let second_line = document.createElement("div");
      second_line.setAttribute("class", "second_line");
      let course_subject = document.createElement("span");
      course_subject.innerHTML = `${current_element.course_subject}`;
      let separator = document.createElement("span");
      separator.setAttribute("class", "separator");
      let course_grade = document.createElement("span");
      course_grade.innerHTML = `${current_element.course_grade}`;
      let course_grade_addition = document.createElement("span");
      course_grade_addition.innerHTML = `${current_element.course_grade_addition}`;

      // append all spans to second line
      second_line.appendChild(course_subject);
      second_line.appendChild(separator);
      second_line.appendChild(course_grade);
      second_line.appendChild(course_grade_addition);

      // third line
      let third_line = document.createElement("div");
      third_line.setAttribute("class", "third_line");
      let pLine = document.createElement("p");

      let course_units = document.createElement("span");
      course_units.setAttribute("class", "bold");
      course_units.innerHTML = `${current_element.course_units}`;

      let course_lesson = document.createElement("span");
      course_lesson.setAttribute("class", "bold");
      course_lesson.innerHTML = `${current_element.course_lesson}`;
      
      let course_topic = document.createElement("span");
      course_topic.setAttribute("class", "bold");
      course_topic.innerHTML = `${current_element.course_topic}`;

     //   create textnode for word unit lesson and topic
     const textNodeUnits = document.createTextNode("Units");
     const textNodeLesson = document.createTextNode("Lesson");
     const textNodeTopic = document.createTextNode("Topic");

     // append text node and span in single line p line 
     pLine.appendChild(course_units);
     pLine.appendChild(textNodeUnits);
     pLine.appendChild(course_lesson);
     pLine.appendChild(textNodeLesson);
     pLine.appendChild(course_topic);
     pLine.appendChild(textNodeTopic); 

     third_line.appendChild(pLine);


      // fourth line
      let fourth_line = document.createElement("div");
      fourth_line.setAttribute("class", "fourth_line");
      let selectTag = document.createElement("select");
    //   selectTag.setAttribute("id","CN");
      let optionTag = document.createElement("option");
      optionTag.innerHTML = `${current_element.course_faculty}`;
      selectTag.appendChild(optionTag);
      // option ni andar nu text hji baki che
      let line = document.createElement("div");
      line.setAttribute("class", "line");

      // fourt line
      fourth_line.appendChild(selectTag);
      fourth_line.appendChild(line);

      // fifth line tags
      let fifth_line = document.createElement("div");
      fifth_line.setAttribute("class", "fifth_line");
      let pTagForFifthLine = document.createElement("p");
      let no_of_students = document.createElement("span");
      no_of_students.innerHTML = `${current_element.no_of_students}`;
      let separatorSpan = document.createElement("span");
      separatorSpan.setAttribute("class", "separator");

    //   {current_element.date : separatorSpan ? }

      let date = document.createElement("span");
      date.innerHTML = `${current_element.date}`;
      pTagForFifthLine.appendChild(no_of_students);
      current_element.date ? pTagForFifthLine.appendChild(separatorSpan) : "";
      pTagForFifthLine.appendChild(date);
      fifth_line.appendChild(pTagForFifthLine);

      // append all lines to card content div
      card_content.appendChild(first_Line);
      card_content.appendChild(second_line);
      card_content.appendChild(third_line);
      card_content.appendChild(fourth_line);
      card_content.appendChild(fifth_line);

      // append img and content to card upper body
      card_upper_body.appendChild(course_image);
      card_upper_body.appendChild(card_content);

      // separating line between upper body and lower body
      let separatingLineBetweenUpperBodyAndLowerBody =
        document.createElement("div");
      separatingLineBetweenUpperBodyAndLowerBody.setAttribute("class", "line");

      // create cards lower body and its content
      let card_lower_body = document.createElement("div");
      card_lower_body.setAttribute("class", "card_lower_body");
      let preview = document.createElement("img");
      preview.setAttribute("src", "icons/preview.svg");
      preview.setAttribute("alt", "course preview icon");

      let manage = document.createElement("img");
      manage.setAttribute("src", "icons/manage course.svg");
      manage.setAttribute("alt", "course manage icon");

      let gradeSubmission = document.createElement("img");
      gradeSubmission.setAttribute("src", "icons/grade submissions.svg");
      gradeSubmission.setAttribute("alt", "course grade submission icon");

      let reports = document.createElement("img");
      reports.setAttribute("src", "icons/reports.svg");
      reports.setAttribute("alt", "course reports icon");

      card_lower_body.appendChild(preview);
      card_lower_body.appendChild(manage);
      card_lower_body.appendChild(gradeSubmission);
      card_lower_body.appendChild(reports);

      // append upperbody , separator betn up body and low body and lower body to card
      card.appendChild(card_upper_body);
      card.appendChild(separatingLineBetweenUpperBodyAndLowerBody);
      card.appendChild(card_lower_body);

      // adding card to body with grid layout
      card_container.append(card);
    })
}



// function for hamburgur on click
function toggle() {
    let ele = document.querySelector(".menuBox");
    if (ele.style.display == "none") {
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}

// function for drop down on click
function dropdown(classname) {
  let ele = document.querySelector("." + classname);
  console.log(ele.style);
  
  if (ele.style.display != "none") {
    ele.style.display = "none" ;
  } else {
    ele.style.display = "flex";
  }
}


// function for notification on click
function announcementShow() {
    let visibility_check = document.querySelector(".announcement");
    if (visibility_check.style.display == "none") {
      visibility_check.style.display = "block";
    } else {
      visibility_check.style.display = "none";
    }
}

// function for notification on click
function notificationShow() {
    let visibility_check = document.querySelector(".notifications");
    if (visibility_check.style.display == "none") {
      visibility_check.style.display = "block";
    } else {
      visibility_check.style.display = "none";
    }
}