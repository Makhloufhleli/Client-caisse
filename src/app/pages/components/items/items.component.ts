import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/model/entities/item';
import { Supplier } from 'src/app/model/entities/supplier';
import { ItemsService } from 'src/app/model/services/items/items.service';
import { SupplierService } from 'src/app/model/services/suppliers/supplier.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  listItems: Item[] = [];
  listSuppliers: Supplier[] = [];
  supplierSelected!:Supplier;
  addForm: boolean = false;
  itemToSave!: Item;
  wording: string = "";
  currentPage: number = 1;
  itemsPerPage: number = 5;
  message: string = "";

  constructor(
    private itemsService: ItemsService,
    private suppliersService: SupplierService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(){
    
    this.itemsService.getAllItems().subscribe(data=>{
      if(data.response){
        this.listItems = data.response;
      }else{
        this.message = data.message;
      }
      
    }, error=>{
      this.toastr.error("Error, server not responding")
      
    });
  }

  getAllSuppliers(){
    this.suppliersService.getAllSuppliers().subscribe(data=>{
      if(data.response){
        this.listSuppliers = data.response;
      }else{
        this.toastr.warning(data.message);
      }
    })
  }

  saveItem(){
    console.log(this.itemToSave);
    this.itemToSave.supplier = this.supplierSelected;
    console.log(this.itemToSave);
    /*this.itemsService.saveItem(this.itemToSave).subscribe(data=>{
      this.getAllItems();
      this.hideAddForm();
      this.toastr.success(data.message);
    })*/
  }

  getSupplierSelected(idSupplier: any){
    console.log(idSupplier);
    
    this.suppliersService.getSupplierById(idSupplier).subscribe(data=>{
      console.log(data.response)
      this.supplierSelected = data.response;
    })
  }

  deleteItem(idItem: number){
    this.itemsService.deleteItem(idItem).subscribe(data=>{
      this.getAllItems();
      this.toastr.success(data.message);
    })
  }

  showAddForm(){
    this.itemToSave = new Item();
    this.getAllSuppliers();
    this.addForm = true;
  }
  hideAddForm(){
    this.addForm = false;
  }

}
