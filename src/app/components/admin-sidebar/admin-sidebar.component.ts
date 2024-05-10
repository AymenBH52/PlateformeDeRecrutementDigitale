import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  isTestsMenuOpen = false;
  isCategoriesMenuOpen = false;
  isQuizzesMenuOpen = false;

  toggleMenu(menuType: string) {
    switch (menuType) {
      case 'tests':
        this.isTestsMenuOpen = !this.isTestsMenuOpen;
        break;
      case 'categories':
        this.isCategoriesMenuOpen = !this.isCategoriesMenuOpen;
        break;
      case 'quizzes':
        this.isQuizzesMenuOpen = !this.isQuizzesMenuOpen;
        break;
    }
  }
}
