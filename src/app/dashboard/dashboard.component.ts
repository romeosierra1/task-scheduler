import { Component, OnInit } from '@angular/core';
import { Task } from 'app/task';
import { TaskService } from 'app/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  pendingTasks: Task[];
  finishedTasks: Task[];

  constructor(private taskService: TaskService, private router: Router) { }

  getTasks(): void {
    this.taskService.getPendingTasks()
      .then(tasks => this.pendingTasks = tasks);
    this.taskService.getFinishedTasks()
      .then(tasks => this.finishedTasks = tasks);
  }

  ngOnInit(): void {
    this.getTasks();
  }

  gotoDetail(task: Task): void {
    this.router.navigate(['/detail', task.id]);
  }

}
