import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontComponent } from "./common-ui/front/front.component";
import { CategoriesComponent } from "./common-ui/categories/categories.component";

@Component({
  selector: 'app-root',
  standalone: true, // Required for standalone components
  imports: [RouterOutlet, FrontComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // ✅ Fixed: "styleUrl" → "styleUrls"
})
export class AppComponent {
  title = 'online-store';
  showFront = false; // Initially show categories

  switchToFront() {
    this.showFront = true; // Switch to <app-front>
  }
}
