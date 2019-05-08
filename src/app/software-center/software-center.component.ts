import { Component, OnInit, ViewChild } from '@angular/core';
import { AppContextService, DataTableComponent } from '@microsoft/windows-admin-center-sdk/angular';
import { Net, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Subscription } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';
import { SoftwareCenterService } from './software-center.service';


@Component({
  selector: 'app-software-center',
  templateUrl: './software-center.component.html',
  styleUrls: ['./software-center.component.css']
})
export class SoftwareCenterComponent implements OnInit {

  public loading = true;
  public tabIndex = 1;
  private psSession: PowerShellSession;
  private updateSubscription: Subscription;
  private appSubscription: Subscription;
  public errorMessage: string;
  public foundApps: any;
  public foundUpdates: any;
  public appSource: any[];
  public updateSource: any[];
  public selectedData1: any;
  public selectedData2: any;
  public updateReturn: string;

  @ViewChild('dataTableForDataStreaming')
  private dataTableForDataStreaming: DataTableComponent;

  private dataStreamingTimer: any;
  private dataStreamingSortDirection = 1;

  constructor(private appContextService: AppContextService, private softwareCenterService: SoftwareCenterService) {
    // TODO
   }

  ngOnInit(): void {
    this.psSession = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);
    this.getUpdates();
    this.getApplications();

    this.appSource = this.foundApps.map(item => item);
    this.updateSource = this.foundUpdates.map(item => item);
  }

  public clickTab(tabIndex: number) {
    this.tabIndex = tabIndex;
  }

  public updateLayout(): void {
    this.appSource = this.foundApps.map(item => item);
    this.updateSource = this.foundUpdates.map(item => item);
  }

  public installUpdate(update: string) {
    this.updateSubscription = this.softwareCenterService.invokeUpdates(this.psSession, update).subscribe(
      (updateService: any) => {
        this.loading = false;
        if (updateService) {
            this.updateReturn = updateService;
        } else {
            this.updateReturn = 'not found';
        }
    },
    (error: AjaxError) => {
        this.errorMessage = Net.getErrorMessage(error);
        this.loading = false;
    }
    );
  }

  private getUpdates() {
    this.updateSubscription = this.softwareCenterService.getUpdates(this.psSession).subscribe(
      (updateService: any) => {
        this.loading = false;
        if (updateService) {
            this.foundUpdates = updateService;
            console.log(this.foundUpdates);
        } else {
            this.foundUpdates = 'not found';
        }
    },
    (error: AjaxError) => {
        this.errorMessage = Net.getErrorMessage(error);
        this.loading = false;
    }
    );
  }

  private getApplications() {
    this.appSubscription = this.softwareCenterService.getApps(this.psSession).subscribe(
      (appService: any) => {
        this.loading = false;
        if (appService) {
            this.foundApps = appService;
        } else {
            this.foundApps = 'not found';
        }
    },
    (error: AjaxError) => {
        this.errorMessage = Net.getErrorMessage(error);
        this.loading = false;
    }
    );
  }
}
