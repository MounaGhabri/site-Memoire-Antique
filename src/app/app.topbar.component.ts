import {Component} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    template: `


        <div class="layout-topbar">
			<div class="layout-topbar-wrapper">
                <div class="layout-topbar-left">
				<!----	<div class="layout-topbar-logo-wrapper">
						<a href="#" class="layout-topbar-logo"> -->
						<!---	<img src="assets/layout/images/topbar/logo222.png" alt="mirage-layout" /> --->
						<!----	<span class="app-name">Mirage</span>   --->
						<!--- </a>
					</div> --->
                  <a>
					<h5  style="font-family:algerian ">MEMOIRE ANTIQUE</h5>
                           </a>
						 
					<a href="#" class="sidebar-menu-button" (click)="appMain.onMenuButtonClick($event)">
						<i class="pi pi-bars"></i>
					</a>

					<a href="#" class="megamenu-mobile-button" (click)="appMain.onMegaMenuMobileButtonClick($event)">
						   <i class="pi pi-align-right megamenu-icon"></i>
					</a>

					<a href="#" class="topbar-menu-mobile-button" (click)="appMain.onTopbarMobileMenuButtonClick($event)">
						<i class="pi pi-ellipsis-v"></i>
					</a>

					
					<div class="layout-megamenu-wrapper">
				<!-- Mega menu -->
                    <!----
				<a class="layout-megamenu-button" href="#" (click)="appMain.onMegaMenuButtonClick($event)">
							<i class="pi pi-comment"></i>
				   Categories </a>	--->

					
							<!---
						<div>
                        <img src="assets/layout/images/topbar/logo222.png">
						</div>	
                                --->
							
						<ul class="layout-megamenu" [ngClass]="{'layout-megamenu-active fadeInDown': appMain.megaMenuActive}"
                            (click)="appMain.onMegaMenuClick($event)">
							<li [ngClass]="{'active-topmenuitem': activeItem === 1}" (click)="mobileMegaMenuItemClick(1)">
								<a href="#">JavaServer Faces <i class="pi pi-angle-down"></i></a>
								<ul>
									<li class="active-row ">
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>PrimeFaces</h5>
                                        <span>UI Components for JSF</span>
                                    </span>
									</li>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Premium Templates</h5>
                                        <span>UI Components for JSF</span>
                                    </span>
									</li>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Extensions</h5>
                                        <span>UI Components for JSF</span>
                                    </span>
									</li>
								</ul>
							</li>
							<li [ngClass]="{'active-topmenuitem': activeItem === 2}" (click)="mobileMegaMenuItemClick(2)">
								<a href="#">Angular <i class="pi pi-angle-down"></i></a>
								<ul>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>PrimeNG</h5>
                                        <span>UI Components for Angular</span>
                                    </span>

									</li>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Premium Templates</h5>
                                        <span>UI Components for Angular</span>
                                    </span>
									</li>
								</ul>
							</li>
							<li [ngClass]="{'active-topmenuitem': activeItem === 3}" (click)="mobileMegaMenuItemClick(3)">
								<a href="#">React <i class="pi pi-angle-down"></i></a>
								<ul>
									<li>
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>PrimeReact</h5>
                                        <span>UI Components for React</span>
                                    </span>
									</li>
									<li class="active-row">
										<i class="pi pi-circle-on"></i>
										<span>
                                        <h5>Premium Templates</h5>
                                        <span>UI Components for React</span>
                                    </span>
									</li>
								</ul>
							</li>
						</ul>
					</div>
                </div>
			    
                <div class="layout-topbar-right fadeInDown">
		

					<ul class="layout-topbar-actions">

                     


								<!-- search -->
								
						<li #search class="search-item topbar-item" [ngClass]="{'active-topmenuitem': appMain.activeTopbarItem === search}">
							<a href="#" class="topbar-search-mobile-button" (click)="appMain.onTopbarItemClick($event,search)">
								<i class="topbar-icon pi pi-search"></i>
							</a>
							<ul class="search-item-submenu fadeInDown" (click)="appMain.topbarItemClick = true">
								<li>
                                    <span class="md-inputfield search-input-wrapper">
                                        <input pInputText placeholder="Rechercher..."/>
                                        <i class="pi pi-search"></i>
                                    </span>
                                </li>
                            </ul>
                        </li>

                            


						<!--Calendar --->
				
						<li #calendar class="topbar-item" [ngClass]="{'active-topmenuitem': appMain.activeTopbarItem === calendar}">
						  <a href="#" >  
							<!---	<i class="topbar-icon pi pi-calendar"></i>--->
								ACCUEIL 
							    </a>  
							<ul class="fadeInDown" (click)="appMain.topbarItemClick = true">
								<li class="layout-submenu-header">
									<h1>Calendar</h1>
								</li>
								<li class="calendar">
                                    <p-calendar [inline]="true"></p-calendar>
								</li>
							</ul>
						</li>

						
                      <!------message ---->


						<li #message class="topbar-item" [ngClass]="{'active-topmenuitem': appMain.activeTopbarItem === message}">
						<!-----<a href="#" (click)="appMain.onTopbarItemClick($event,gift)">---->

						<!---<a href="#" (click)="appMain.onTopbarItemClick($event,message)"> -->
								<!----	<i class="topbar-icon pi pi-inbox"></i> --->
								<a routerLink="uikit/list" >
							  BOUTIQUE

							  </a> 
						
						</li>
                      <!---Deals ------>

						<li #gift class="topbar-item" [ngClass]="{'active-topmenuitem': appMain.activeTopbarItem === gift}">
						<a routerLink="pages/empty"> 
							<!----	<i class="topbar-icon pi pi-envelope"></i> --->
						AJOUT
							</a> 
						
						</li>
						   <!---Olivia Eklund: compte ------>
						<li #profile class="topbar-item profile-item" [ngClass]="{'active-topmenuitem': appMain.activeTopbarItem === profile}">
						<!---	<a href="#" (click)="appMain.onTopbarItemClick($event,profile)"> --->

                        <div class="header-icons">
					
</div>
                           


                    </ul>
                 

				
                </div>
            </div>
        </div>
    `
})
export class AppTopBarComponent {

    activeItem: number;

    constructor(public appMain: AppMainComponent) {}

    mobileMegaMenuItemClick(index) {
        this.appMain.megaMenuMobileClick = true;
        this.activeItem = this.activeItem === index ? null : index;
    }

}
