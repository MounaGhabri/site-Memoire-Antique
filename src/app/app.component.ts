import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

import {ConfigService} from './demo/service/app.config.service';
import {AppConfig} from './demo/domain/appconfig';
import { AppConfigComponent } from './app.config.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    @ViewChild(AppConfigComponent)
    private appConfigComponent: AppConfigComponent;



    horizontalMenu: boolean;

    darkMode = true;

    menuColorMode = 'dark';

    menuColor = 'layout-menu-dark';

    themeColor = 'blue';

    layoutColor = 'blue';

    ripple = true;

    inputStyle = 'outlined';
    

    
    constructor(private primengConfig: PrimeNGConfig) {}


    ngOnInit() {
        this.primengConfig.ripple = true;
   
      
        this.darkMode=true;


        
    }
}
