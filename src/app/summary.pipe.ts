import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: number): string {
        if (!value){
            return null;
        }
        const actualLim = limit ? limit : 50;
        return value.substr(0, actualLim) + '...';
    }
}
