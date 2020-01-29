import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styles: []
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}


======================
<div class="ui raised segment">
  <h2 class="ui header">Demo Form: Sku</h2>
  <form #f="ngForm"
        (ngSubmit)="onSubmit(f.value)"
        class="ui form">

    <div class="field">
      <label for="skuInput">SKU</label>
      <input type="text"
             id="skuInput"
             placeholder="SKU"
             name="sku" ngModel>
    </div>

    <button type="submit" class="ui button">Submit</button>
  </form>
</div>
