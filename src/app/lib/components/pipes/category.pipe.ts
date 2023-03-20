import {Pipe, PipeTransform} from '@angular/core';

const categoryMap: { [key: string]: string } = {
  food: 'Restaurante',
  'credit-card': 'Cartão',
  home: 'Casa',
  shop: 'Shop',
  other: 'Outro',
};

const categoryMapIcon: { [key: string]: string } = {
  food: 'ph-fork-knife-fill',
  'credit-card': 'ph-credit-card-fill',
  home: 'ph-house-line-fill',
  shop: 'ph-shopping-bag-fill',
  other: 'ph-cardholder-fill',
};

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, icon: boolean = false): string {
    if (icon) {
      return categoryMapIcon[value];
    }
    return categoryMap[value];
  }

}
