import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suppliersFilter'
})
export class SuppliersFilterPipe implements PipeTransform {

  transform(suppliers: any, name: string) {
    if(suppliers.length === 0 || name === ""){
      return suppliers;
    }
    const suppliersFiltered = [];
    for(const supplier of suppliers){
      if(supplier['name'].toLowerCase() == name.toLowerCase()){
        suppliersFiltered.push(supplier);
      }
    }
    return suppliersFiltered;
  }

}
