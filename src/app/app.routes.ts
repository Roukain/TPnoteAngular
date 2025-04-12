import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';

export const routes: Routes = [
    {path:'tags', component: TagsComponent},
    {path:'', component:TagsComponent}
];
