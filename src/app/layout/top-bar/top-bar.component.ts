import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vt-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() humberger = new EventEmitter<any>();
  hide = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  close() {
    this.hide = !this.hide
    this.humberger.emit(this.hide);
  }

  goToHomePage() {
    debugger;
    this.router.navigateByUrl("/").then(
      () => window.location.reload()
    );
  }

}
