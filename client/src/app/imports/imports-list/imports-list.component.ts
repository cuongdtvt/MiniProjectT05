import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ImportsDetailsComponent } from '../imports-details/imports-details.component';
import { Imports} from '../imports';
import { ImportsService } from './../imports.service';



@Component({
  selector: 'app-imports-list',
  templateUrl: './imports-list.component.html',
  styleUrls: ['./imports-list.component.css']
})
export class ImportsListComponent implements OnInit {
  p: number=1;
  
  imports: Observable<Imports[]>;

  constructor(private importsService: ImportsService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.imports = this.importsService.getImportsList();
  }

  updateImports(id: number) {
    this.router.navigate(['/imports/update' + id]);
  }

  deleteImports(id: number) {
    this.importsService.deleteImports(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  importsDetails(id: number){
    this.router.navigate(['imports/details', id])
  }

}
