import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  public saveColor!:any;

  constructor(private route : ActivatedRoute){
    this.route.params.subscribe(data => {
      this.saveColor = data['color'];
      console.log(this.saveColor)
    })
  }

}
