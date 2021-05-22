const { el, mount, list } = redom;
const STORAGE_KEY = 'todos-redom'

// <div class="icon">
// </div>Colour

// <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.4 85" width="35" height="25"><path fill="currentColor" d="M 118.9,13.3 C 117.5,8.1 113.4,4 108.2,2.6 98.7,0 60.7,0 60.7,0 60.7,0 22.7,0 13.2,2.5 8.1,3.9 3.9,8.1 2.5,13.3 0,22.8 0,42.5 0,42.5 0,42.5 0,62.3 2.5,71.7 3.9,76.9 8,81 13.2,82.4 22.8,85 60.7,85 60.7,85 c 0,0 38,0 47.5,-2.5 5.2,-1.4 9.3,-5.5 10.7,-10.7 2.5,-9.5 2.5,-29.2 2.5,-29.2 0,0 0.1,-19.8 -2.5,-29.3 z"></path><polygon points="80.2,42.5 48.6,24.3 48.6,60.7 " style="fill:#ffffff"></polygon></svg></div>Video

class Constraint {
    constructor() {
        this.el = el("li.small.constraint");
    }
    update(data) {
        this.el.textContent = data;
    }
}

class Video {
    constructor() {
        this.el = el("li.row.video",
            // el("div.row",
                // this.done = el("input.toggle", {
                //     type: "checkbox"
                // }),
               el("div.col-xs-9",
                  this.puzzle_link = el("a.puzzle_link",
                                        this.video_title = el("h3.video_title"),
                                        // el("img")
                                       ),
                  this.puzzle_rules = el("p.puzzle_rules.lead"),

                  el("ul.list-inline",
                     this.date = el("li"),
                     this.solver = el("li"),
                     this.length = el("li"),
                  ),
                     
                  this.constraints = list("ul.list-inline", Constraint),
               ),

               el("div.col-xs-3",
                  this.video_link = el("a.video_link", el("img.img-thumbnail.video-thumbnail")),
               ),

                // this.destroy = el("button.destroy"),
            // ),
            // this.edit = el("input.edit", {
            //     type: "text"
            // })
        );

        // this.done.onchange = () => {
        //     // this.data.done = this.done.checked;
        //     this.update(this.data, this.data.index);
        // };

        // this.el.ondblclick = evt => {
        //     this.el.classList.add("editing");
        // };

        // this.edit.onkeypress = evt => {
        //     if (evt.charCode === 13) {
        //         this.data.video_title = this.edit.value;
        //         this.update(this.data, this.data.index);
        //         this.el.classList.remove("editing");
        //     }
        // };

        // this.destroy.onclick = evt => {
        //     const event = new CustomEvent("destroy", {
        //         detail: this.data
        //     });

        //     document.dispatchEvent(event);
        // }
    }

    // <iframe width="1206" height="678" src="https://www.youtube.com/embed/AxFvFdEuiA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    update(data, index) {
        this.data = data;
        this.data.index = index;
        // this.done.checked = data.done;
        this.video_title.textContent = data.video_title;
        this.video_link.href = data.video_link;
        // this.video_link.textContent = data.video_link;
        let video_img = this.video_link.querySelector("img");
        // video_img.src = "https://i.ytimg.com/vi/AxFvFdEuiA0/default.jpg";
        // video_img.width = 120;
        // video_img.height = 90;
        video_img.src = "https://i.ytimg.com/vi/AxFvFdEuiA0/mqdefault.jpg";
        video_img.width = 320;
        video_img.height = 180;
        // "youtube.svg";

        this.date.textContent = data.date;
        this.solver.textContent = data.solver;
        // https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss#comment65343664_25279399.
        let lengthStr = new Date(1000 * data.length).toISOString().substr(11, 8)
        while (lengthStr.startsWith("0") || lengthStr.startsWith(":")) {
            lengthStr = lengthStr.slice(1);
        }
        this.length.textContent = lengthStr;

        this.puzzle_link.href = data.puzzle_link;
        // this.puzzle_link.textContent = data.puzzle_link;
        // this.puzzle_link.querySelector("img").src = "puzzle.svg";

        this.puzzle_rules.textContent = data.rules;

        data.constraints.sort();
        this.constraints.update(data.constraints);

        // this.edit.value = data.video_title;

        // if (data.done) {
        //     this.el.classList.add("completed");
        // } else {
        //     this.el.classList.remove("completed");
        // }
    }
}

class VideoApp {
    constructor() {
        this.data = [];

        // this.el =
        //     el("div", (this.todoList = el("ul.todo-list")));

        this.el = (this.todoList = el("ul.todo-list.list-unstyled"));
// ,
//             el("div",
//                 // el("section.todoapp",
//                     (this.header = el("header.header",
//                         // el("h1.heading", "todos"),
//                         (this.create = el(
//                             "form", {},
//                             (this.createInput = el("input.new-todo", {
//                                 type: "text",
//                                 placeholder: "What needs to be done?",
//                             })),
//                         ))
//                     )),
//                     (this.main = el("section.main",
//                         el("input#toggle-all.toggle-all", {
//                             type: "checkbox"
//                         }),
//                         el("label", {
//                             for: "toggle-all"
//                         }),
//                         (this.todoList = el("ul.todo-list")),
//                     )),
//                     this.footer = el("footer.footer",
//                         el("span.todo-count", this.count = el("strong", "0"), " items left"),
//                         el("ul.filters",
//                             el("li",
//                                 this.onClickAll = el("a.selected", {
//                                     href: "#"
//                                 }, "All")
//                             ),
//                             el("li",
//                                 this.onClickActive = el("a", {
//                                     href: "#"
//                                 }, "Active")
//                             ),
//                             el("li",
//                                 this.onClickCompleted = el("a", {
//                                     href: "#"
//                                 }, "Completed")
//                             )
//                         ),
//                         this.clear = el("button.clear-completed", "Clear Completed")
//                     )
//                 ),
//                 el("footer.info",
//                     el("p", "Double-click to edit a todo"),
//                     el("p", "Written by ", el("a", {
//                         href: "https://www.mauroreisvieira.com/"
//                     }, "Mauro Reis Vieira")),
//                     el("p", "Part of ", el("a", {
//                         href: "http://todomvc.com"
//                     }, "TodoMVC"))
//                 )
//             );

        this.list = list(this.todoList, Video);

        // this.create.onsubmit = evt => {
        //     evt.preventDefault();
        //     this.data.push({
        //         done: false,
        //         video_title: this.createInput.value,
        //     });
        //     this.createInput.value = "";
        //     this.update(this.data);
        // };

        // this.clear.onclick = evt => {
        //     this.update(this.data.filter(item => !item.done));
        // };

        // this.onClickAll.onclick = evt => {
        //     this.onClickAll.classList.add("selected");
        //     this.onClickCompleted.classList.remove("selected");
        //     this.onClickActive.classList.remove("selected");
        //     this.filter(this.data);
        // };

        // this.onClickActive.onclick = evt => {
        //     this.onClickActive.classList.add("selected");
        //     this.onClickCompleted.classList.remove("selected");
        //     this.onClickAll.classList.remove("selected");
        //     this.filter(this.data.filter(item => !item.done));
        // };

        // this.onClickCompleted.onclick = evt => {
        //     this.onClickCompleted.classList.add("selected");
        //     this.onClickAll.classList.remove("selected");
        //     this.onClickActive.classList.remove("selected");
        //     this.filter(this.data.filter(item => item.done));
        // };

        // document.addEventListener('destroy', (evt) => {
        //     const index = evt.detail.index;
        //     this.update([...this.data.slice(0, index), ...this.data.slice(index + 1)]);
        // });

        // this.todoStorage = {
        //     fetch: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
        //     save: (todos) => {
        //         localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
        //     }
        // }

        // this.update(this.todoStorage.fetch());
    }

    update(data) {
        // this.todoStorage.save(data);
        this.data = data;
        this.list.update(data);
        // this.count.textContent = data.length;
    }

    filter(data) {
        this.list.update(data);
        // this.count.textContent = data.length;
    }
}

const app = new VideoApp();
mount(document.querySelector("#video_list"), app);

fetch('db.json',
      {
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
    .then(response => response.json())
    .then(data => app.update(data.slice(0, 10)));
