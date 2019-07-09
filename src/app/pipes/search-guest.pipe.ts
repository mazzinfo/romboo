import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGuest'
})
export class SearchGuestPipe implements PipeTransform {

  transform(items: any[], args: string): any[] {
	//	console.log(items);
		if(args !== undefined){       
			args = args.toUpperCase();
			return items.filter(item => {
			  return item.guestName.toUpperCase().indexOf(args) !== -1 

			});
		}
    }

}
