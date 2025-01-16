from flask import Blueprint, request, render_template
from models.task import Task

bp = Blueprint("tasks", __name__)


tasks = [
    Task(1, "Fazer compras"),
    Task(2, "Estudar para a prova"),
    Task(3, "Limpar a casa"),
]


@bp.route("/", methods=["GET", "POST"])
def tasks_view():
    if request.method == "POST":
        title = request.form["title"]
        new_task = Task(len(tasks) + 1, title)
        tasks.append(new_task)

    return render_template("tasks.html", tasks=tasks)


@bp.route("/complete/<int:task_id>")
def complete_task(task_id):
    for task in tasks:
        if task.id == task_id:
            task.completed = True

    return render_template("tasks.html", tasks=tasks)
