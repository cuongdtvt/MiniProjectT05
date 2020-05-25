import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExportsDetailsComponent} from '../exports-details/exports-details.component';
import { ExportsService } from '../exports.service';
import { Exports} from "../exports"
import { Router } from '@angular/router';

@Component({
  selector: 'app-exports-list',
  templateUrl: './exports-list.component.html',
  styleUrls: ['./exports-list.component.css']
})
export class ExportsListComponent implements OnInit {
  p: number=1;
  
  exports: Observable<Exports[]>;

  constructor(private router: Router, private exportsService: ExportsService) { }
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.exports = this.exportsService.getExportsList();
  }

  updateExports(id: number) {
    this.router.navigate(['/exports/update' + id]);
  }

  deleteExports(id: number){
    this.exportsService.deleteExports(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  exportsDetails(id: number){
    this.router.navigate(['exports/details', id])
  }
  

}
