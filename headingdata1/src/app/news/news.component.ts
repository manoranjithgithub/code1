import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsList = [
    { title: 'Breaking News 1', content: 'This is the content of Breaking News 1.', expanded: false },
    { title: 'Latest Update', content: 'Check out the latest updates on our website.', expanded: false },
    // Add more news items as needed
  ];

  toggleExpansion(index: number): void {
    this.newsList[index].expanded = !this.newsList[index].expanded;
  }
}
