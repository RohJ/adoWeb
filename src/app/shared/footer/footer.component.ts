import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  data : Date = new Date();
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(disclaimer: any) {
    this.modalService.open(disclaimer, {ariaLabelledBy: 'modal-disclaimer'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  };

}
