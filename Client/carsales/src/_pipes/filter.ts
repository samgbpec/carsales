import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        console.log(term);

        //filter based on seller. 
        //TO DO -- can remove the seller column to make generic for using as a reusable pipe in other components.
        if(term!="")
            return items.filter(item => item.seller.indexOf(term) !== -1);
        else
            return items;
    }
}