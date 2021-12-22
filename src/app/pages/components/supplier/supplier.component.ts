import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Supplier } from 'src/app/model/entities/supplier';
import { SupplierService } from 'src/app/model/services/suppliers/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  listSuppliers: Supplier[] = [];
  addForm: boolean = false;
  supplierToSave!: Supplier;
  name: string = "";
  currentPage: number = 1;
  itemsPerPage: number = 5;


  constructor(
    private supplierService: SupplierService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.getAllSuppliers();
  }

  getAllSuppliers(){
    
    this.supplierService.getAllSuppliers().subscribe(data=>{
      console.log(data)
      if(data.response){
        this.listSuppliers = data.response;
      }else{
        this.toastr.error(data.message)
      }
      
    }, error=>{
      this.toastr.error("Error, Server is not responding");
    })
  }

  saveSupplier(){
    this.supplierService.saveSupplier(this.supplierToSave).subscribe(data=>{
      this.getAllSuppliers();
      this.hideAddForm();
      this.toastr.success(data.message);
    })
  }

  deleteSupplier(idSupplier: number){
    this.supplierService.deleteSupplier(idSupplier).subscribe(data=>{
      this.getAllSuppliers();
      this.toastr.success(data.message);
    })
  }

  showAddForm(){
    this.supplierToSave = new Supplier();
    this.addForm = true;
  }
  hideAddForm(){
    this.addForm = false;
  }

}
