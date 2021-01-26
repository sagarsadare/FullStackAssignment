import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDrop'
})
export class SearchDropPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log('value search pipe====================================',value);
    
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item : any){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}
