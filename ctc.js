const { el, mount, list } = redom;
const STORAGE_KEY = 'todos-redom'

class Todo {
    constructor() {
        this.el = el("li.todo",
            el("div.view",
                this.done = el("input.toggle", {
                    type: "checkbox"
                }),
                this.title = el("label"),
                this.destroy = el("button.destroy"),
            ),
            this.edit = el("input.edit", {
                type: "text"
            })
        );

        this.done.onchange = () => {
            this.data.done = this.done.checked;
            this.update(this.data, this.data.index);
        };

        this.el.ondblclick = evt => {
            this.el.classList.add("editing");
        };

        this.edit.onkeypress = evt => {
            if (evt.charCode === 13) {
                this.data.title = this.edit.value;
                this.update(this.data, this.data.index);
                this.el.classList.remove("editing");
            }
        };

        this.destroy.onclick = evt => {
            const event = new CustomEvent("destroy", {
                detail: this.data
            });

            document.dispatchEvent(event);
        }
    }

    update(data, index) {
        this.data = data;
        this.data.index = index;
        this.done.checked = data.done;
        this.title.textContent = data.title;
        this.edit.value = data.title;

        if (data.done) {
            this.el.classList.add("completed");
        } else {
            this.el.classList.remove("completed");
        }
    }
}

class TodoApp {
    constructor() {
        this.data = [];

        this.el =
            el("div",
                el("section.todoapp",
                    (this.header = el("header.header",
                        el("h1.heading", "todos"),
                        (this.create = el(
                            "form", {},
                            (this.createInput = el("input.new-todo", {
                                type: "text",
                                placeholder: "What needs to be done?",
                            })),
                        ))
                    )),
                    (this.main = el("section.main",
                        el("input#toggle-all.toggle-all", {
                            type: "checkbox"
                        }),
                        el("label", {
                            for: "toggle-all"
                        }),
                        (this.todoList = el("ul.todo-list")),
                    )),
                    this.footer = el("footer.footer",
                        el("span.todo-count", this.count = el("strong", "0"), " items left"),
                        el("ul.filters",
                            el("li",
                                this.onClickAll = el("a.selected", {
                                    href: "#"
                                }, "All")
                            ),
                            el("li",
                                this.onClickActive = el("a", {
                                    href: "#"
                                }, "Active")
                            ),
                            el("li",
                                this.onClickCompleted = el("a", {
                                    href: "#"
                                }, "Completed")
                            )
                        ),
                        this.clear = el("button.clear-completed", "Clear Completed")
                    )
                ),
                el("footer.info",
                    el("p", "Double-click to edit a todo"),
                    el("p", "Written by ", el("a", {
                        href: "https://www.mauroreisvieira.com/"
                    }, "Mauro Reis Vieira")),
                    el("p", "Part of ", el("a", {
                        href: "http://todomvc.com"
                    }, "TodoMVC"))
                )
            );

        this.list = list(this.todoList, Todo);

        this.create.onsubmit = evt => {
            evt.preventDefault();
            this.data.push({
                done: false,
                title: this.createInput.value,
            });
            this.createInput.value = "";
            this.update(this.data);
        };

        this.clear.onclick = evt => {
            this.update(this.data.filter(item => !item.done));
        };

        this.onClickAll.onclick = evt => {
            this.onClickAll.classList.add("selected");
            this.onClickCompleted.classList.remove("selected");
            this.onClickActive.classList.remove("selected");
            this.filter(this.data);
        };

        this.onClickActive.onclick = evt => {
            this.onClickActive.classList.add("selected");
            this.onClickCompleted.classList.remove("selected");
            this.onClickAll.classList.remove("selected");
            this.filter(this.data.filter(item => !item.done));
        };

        this.onClickCompleted.onclick = evt => {
            this.onClickCompleted.classList.add("selected");
            this.onClickAll.classList.remove("selected");
            this.onClickActive.classList.remove("selected");
            this.filter(this.data.filter(item => item.done));
        };

        document.addEventListener('destroy', (evt) => {
            const index = evt.detail.index;
            this.update([...this.data.slice(0, index), ...this.data.slice(index + 1)]);
        });


        this.todoStorage = {
            fetch: () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
            save: (todos) => {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
            }
        }

        this.update(this.todoStorage.fetch());
    }

    update(data) {
        this.todoStorage.save(data);
        this.data = data;
        this.list.update(data);
        this.count.textContent = data.length;
    }

    filter(data) {
        this.list.update(data);
        this.count.textContent = data.length;
    }
}

const app = new TodoApp();
mount(document.body, app);

fetch('db.json',
      {
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
    .then(response => response.json())
    .then(data => app.update(data));
