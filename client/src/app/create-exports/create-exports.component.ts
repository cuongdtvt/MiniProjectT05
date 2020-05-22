import { Component, OnInit } from '@angular/core';
import { ExportsService } from '../exports.service';
import { Exports } from '../exports';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-exports',
  templateUrl: './create-exports.component.html',
  styleUrls: ['./create-exports.component.css']
})
export class CreateExportsComponent implements OnInit {
  exports: Exports = new Exports();
  submitted = false;

  constructor(private router: Router, private exportsService: ExportsService) { }

  ngOnInit() {
  }

  newExports(): void{
    this.submitted = false;
    this.exports = new Exports();
  }

  save() {
    this.exportsService.createExports(this.exports)
    .subscribe(data => console.log(data), error => console.log(error));
  this.exports = new Exports();
  this.gotoList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/exports'])
  }
}
