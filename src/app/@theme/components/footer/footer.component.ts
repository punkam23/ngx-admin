import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github" aria-label="social github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook" aria-label="social facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter" aria-label="social twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin" aria-label="social linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
