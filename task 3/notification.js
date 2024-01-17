const initAnnouncement = async () => {
  try {
    const req = await fetch("./notificationData.json");
    let response = await req.json();
    data = response.announcement; //this data will be array of objects
    console.log(data); //data is coming

    data.map((current_element) => {
      let announcement_content = document.querySelector(
        ".announcement_content"
      );

      let notification_card = document.createElement("div");
      notification_card.className = "notification_card";

      let first_line = document.createElement("div");
      first_line.className = "first_line";
      let sender = document.createElement("p");
      sender.innerHTML = current_element.sender;
      let tick = document.createElement("img");
      tick.setAttribute("src", `${current_element.iconpath}`);
      first_line.appendChild(sender);
      first_line.appendChild(tick);

      let title = document.createElement("p");
      title.innerHTML = current_element.title;

      let last_line = document.createElement("div");
      last_line.className = "last_line";

      let one = document.createElement("div");
      one.className = "one";
      let attachment_icon = document.createElement("span");
      let attachment = document.createElement("p");
      attachment.innerHTML = current_element.attachment;
      one.appendChild(attachment_icon);
      one.appendChild(attachment);

      let two = document.createElement("div");
      two.className = "two";
      let date = document.createElement("p");
      date.innerHTML = current_element.date;
      two.appendChild(date);

      last_line.appendChild(one);
      last_line.appendChild(two);

    //   for dynamic background color2
      notification_card.style.backgroundColor = current_element.bg;
      
      notification_card.appendChild(first_line);
      notification_card.appendChild(title);
      notification_card.appendChild(last_line);

      announcement_content.append(notification_card);
    });
  } catch (err) {
    console.error("Error while fetching data: ", err);
  }
};

const initNotifications = async () => {
  try {
    const req = await fetch("./notificationData.json");
    let response = await req.json();
    data = response.notification; //this data will be array of objects
    console.log(data); //data is coming

    data.map((current_element) => {
        // aya apde apdu dynamic markup append krsu
      let notification_content = document.querySelector(
        ".notification_content"
        );
        
      let notification_card = document.createElement("div");
      notification_card.className = "notification_card";
      
      let first_line = document.createElement("div");
      first_line.className = "first_line";
      let title = document.createElement("p");
      title.innerHTML = current_element.title;
      let tick = document.createElement("img");
      tick.setAttribute("src", `${current_element.iconpath}`);
      first_line.appendChild(title);
      first_line.appendChild(tick);
      
      //   second line
      let second_line = document.createElement("div");
      second_line.className = "second_line";
      let classSpan = document.createElement("span");
      classSpan.innerHTML = "Class:";
      let course_class = document.createElement("p");
      course_class.innerHTML = current_element.class;
      second_line.appendChild(classSpan);
      second_line.appendChild(course_class);

      //   third line
      let third_line = document.createElement("div");
      third_line.className = "third_line";
      let courseSpan = document.createElement("span");
      courseSpan.innerHTML = "Course:";
      let course_name = document.createElement("p");
      course_name.innerHTML = current_element.course;
      third_line.appendChild(courseSpan);
      third_line.appendChild(course_name);

      // last line
      let date = document.createElement("p");
      date.className = 'date';
      date.innerHTML = current_element.date;
      
      //   for dynamic background color2
        notification_card.style.backgroundColor = current_element.bg;
      
      notification_card.appendChild(first_line);
      current_element.class ? notification_card.appendChild(second_line): " ";
      current_element.course ? notification_card.appendChild(third_line): " ";
      notification_card.appendChild(date);

      notification_content.append(notification_card);
    });
  } catch (err) {
    console.error("Error while fetching data: ", err);
  }
};

initAnnouncement();
initNotifications();
