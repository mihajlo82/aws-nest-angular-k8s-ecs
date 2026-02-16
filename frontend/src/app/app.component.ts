import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  tasks: any[] = [];

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  loadTasks() {
    this.http
      .get<any[]>('http://localhost:3000/tasks')
      .subscribe((data) => (this.tasks = data));
  }

  addTask() {
    this.http
      .post('http://localhost:3000/tasks', {
        title: this.title,
      })
      .subscribe(() => {
        this.title = '';
        this.loadTasks();
      });
  }
}
