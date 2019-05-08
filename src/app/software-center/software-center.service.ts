import { Injectable } from '@angular/core';
import { AppContextService } from '@microsoft/windows-admin-center-sdk/angular';
import { Cim, PowerShell, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PowerShellScripts } from '../../generated/powershell-scripts';


@Injectable({
  providedIn: 'root'
})
export class SoftwareCenterService {

  public static psKey = 'sme.seed';
  private psSession: PowerShellSession;

  constructor(private appContextService: AppContextService) { }

  public getUpdates(session: PowerShellSession): Observable<any[]> {
    const psCommand = PowerShell.createScript(PowerShellScripts.Get_SCUpdates.script);
    return this.appContextService.powerShell.run(session, psCommand)
      .pipe(
        map(
          response => {
            const items: any[] = [];
            for (const item of response.results) {
              items.push(item);
            }
            return items;
          })
      );
  }

  public invokeUpdates(session: PowerShellSession, updatesToInstall: string): Observable<any[]> {
    const psCommand = PowerShell.createScript(PowerShellScripts.Invoke_InstallUpdates.script, updatesToInstall);
    console.log(updatesToInstall);
    return this.appContextService.powerShell.run(session, psCommand)
      .pipe(
        map(
          response => {
            console.log(response);
            return response && response.results && response.results[0];
          })
      );
  }

  public getApps(session: PowerShellSession): Observable<any[]> {
    const psCommand = PowerShell.createScript(PowerShellScripts.Get_SCApplications.script);
    return this.appContextService.powerShell.run(session, psCommand)
      .pipe(
        map(
          response => {
            const items: any[] = [];
            for (const item of response.results) {
              items.push(item);
            }
            return items;
          })
      );
  }

}
