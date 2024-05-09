import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AdminSidebarComponent, TopBarComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [AdminSidebarComponent, TopBarComponent],
})
export class SharedModule {}
