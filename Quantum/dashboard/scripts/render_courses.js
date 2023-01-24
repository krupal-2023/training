// Render courses from JSON to HTML

const courses = [
    {
        name:"Acceleration",
        image:"../../quantum screen assets/images/imageMask-1.svg",
        subject:"Physics",
        grade:"Grade 7",
        gradeIncrement:"+2",
        units:4,
        lessons:18,
        topics:24,
        instructors:["Mr. Frank's Class B","Mr. Frank's Class A"],
        startDate:"21-Jan-2020",
        endDate:"21-Aug-2020",
        studentsCount:50,
        isExpired:false,
        isActionClickable:true,
        isFavorite:true
    },
    {
        name:"Displacement, Velocity and Speed",
        image:"../../quantum screen assets/images/imageMask-2.svg",
        subject:"Physics 2",
        grade:"Grade 6",
        gradeIncrement:"+3",
        units:2,
        lessons:15,
        topics:20,
        instructors:[],
        isExpired:false,
        isActionClickable:false,
        isFavorite:true
    },
    {
        name:"Introduction to Biology: Micro Organisms and how they affectivity ok ok ok ok ok ok",
        image: "../quantum screen assets/images/imageMask.svg", 
        subject:"Biology",
        grade:"Grade 4",
        gradeIncrement:"+1",
        units:5,
        lessons:16,
        topics:22,
        instructors:["All Classes","Mr. Frank's Class B","Mr. Frank's Class A"],
        studentsCount:300,
        isExpired:false,
        isActionClickable:false,
        isFavorite:true
    },
    {
        name:"Introduction to High School Mathematics",
        image:"../quantum screen assets/images/imageMask-3.svg",
        subject:"Mathematics",
        grade:"Grade 8",
        gradeIncrement:"+3",
        instructors:["Mr. Frank's Class A","Mr. Frank's Class D"],
        studentsCount:44,
        startDate:"14-Oct-2019",
        endDate:"20-Oct-2020",
        isExpired:true,
        isActionClickable:true,
        isFavorite:false
    }
]

const coursesContainer = document.getElementById("courses-container");

for( const course of courses ) {

    const courseCard = document.createElement("div");
    courseCard.classList.add("card");

    courseCard.innerHTML = `
        ${
            course.isExpired ?
            `<span class='expired-badge'>
        Expired
        </span>`: ''
        }
        <div class="card-content">
            <img src="${course.image}" alt="img">
            <div class="card-info">
                <div class="card-header">
                    <span class='course-name' >${course.name}</span>
                    <img src='${course.isFavorite ? "../quantum screen assets/icons/favourite.svg" : "../quantum screen assets/icons/grey-star.png"}' alt="favourite icon">
                </div>
                <p class="subject">
                    <span class="common-font mr-9">${course.subject}</span>
                    <span class="common-font">${course.grade}</span>
                    <span class="green-font">${course.gradeIncrement}</span>
                </p>
                ${
                course.units!==undefined ?
                `<p class="mt-0">
                    <span class="common-font mr-5"><span class="font-b">${course.units}</span>Units</span>
                    <span class="common-font mr-5"><span class="font-b">${course.lessons}</span>Lessons</span>
                    <span class="common-font"><span class="font-b">${course.topics}</span>Topics</span>
                </p>`:""}
                <p class="select-cat">
                    <select name="name" id="name">
                        ${
                            course.instructors.length!==0 ?
                            course.instructors.map(instructor => `<option>${instructor}</option>`):
                            '<option disabled selected>No Classes</option>'
                        }
                    </select>
                </p>
                <p class="flex">
                        ${
                            course.studentsCount!==undefined ?
                            `<span class="common-font ${course.startDate!==undefined?'mr-9':''}">${course.studentsCount} Students</span>` : ''
                        }
                        ${
                            course.startDate!==undefined ?
                            `<span class="common-font">${course.startDate} - ${course.endDate}</span>` : ''
                        }
                </p>
            </div>
        </div>
        <div class="card-icon">
            <img src="../quantum screen assets/icons/preview.svg" alt="preview icon">
            <img src="../quantum screen assets/icons/manage course.svg" class='${course.isActionClickable?'':'disableButton'}' alt="manage course icon">
            <img src="../quantum screen assets/icons/grade submissions.svg" class='${course.isActionClickable?'':'disableButton'}' alt="grade icon">
            <img src="../quantum screen assets/icons/reports.svg" alt="reports icon">
        </div>
    `;

    coursesContainer.appendChild(courseCard);

}