import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationStart, Router } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, SpinnerComponent, NavbarComponent, CommonModule],
})
export class AppComponent implements OnInit {
  loading = true;
  title = 'amplify-angular-template';

  constructor(private router: Router) {} 

  ngOnInit(): void {
      this.router.events.subscribe( 
        event => { if (event instanceof NavigationStart) {
          this.loading=true;
        } else {
          setTimeout(() => {
            this.loading = false;
          }, 800);
        }
        
      }
      )
  }
}